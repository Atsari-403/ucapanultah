// Birthday page scripts

window.addEventListener("load", () => {
  Swal.fire({
    title: "Mau putar musik di latar belakang?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya",
    cancelButtonText: "Tidak",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});

const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewY: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.4, {
    visibility: "visible",
  })
    // "Haii! Fatimatuz Zahroh" — pendek, tampil 2 detik
    .from(".one", 0.5, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.3, {
      opacity: 0,
      y: 10,
    })
    .to(".one", 0.5, { opacity: 0, y: 10 }, "+=2")
    .to(".two", 0.5, { opacity: 0, y: 10 }, "-=0.8")

    // "Hari ini hari ulang tahunmu!!" — pendek, 2 detik
    .from(".three", 0.5, { opacity: 0, y: 10 })
    .to(".three", 0.5, { opacity: 0, y: 10 }, "+=2")

    // Chat bubble — panjang (animasi ketik), 3 detik baca
    .from(".four", 0.5, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 1.2, { visibility: "visible" }, 0.03)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" }, "+=3")
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=0.8")

    // "Itu yang tadinya mau aku lakukan." — pendek, 2 detik
    .from(".idea-1", 0.5, ideaTextTrans)
    .to(".idea-1", 0.5, ideaTextTransLeave, "+=2")

    // "Tapi kemudian aku berhenti..." — sedang, 2.5 detik
    .from(".idea-2", 0.5, ideaTextTrans)
    .to(".idea-2", 0.5, ideaTextTransLeave, "+=2.5")

    // "Aku sadar, aku ingin melakukan sesuatu yang berbeda..." — panjang, 3.5 detik
    .from(".idea-3", 0.5, ideaTextTrans)
    .to(".idea-3 strong", 0.4, {
      scale: 1.1,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.5, ideaTextTransLeave, "+=3.5")

    // "Karena," — sangat pendek, 1.5 detik
    .from(".idea-4", 0.5, ideaTextTrans)
    .to(".idea-4", 0.5, ideaTextTransLeave, "+=1.5")

    // "Kamu istimewa bagiku." — pendek tapi emosional, 2.5 detik
    .from(
      ".idea-5",
      0.6,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5",
    )
    .to(".idea-5 span", 0.6, { rotation: 90, x: 8 }, "+=2")
    .to(".idea-5", 0.5, { scale: 0.2, opacity: 0 }, "+=0.5")

    // "MAKA" — animasi huruf, 1.5 detik
    .staggerFrom(
      ".idea-6 span",
      0.6,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.15,
    )
    .staggerTo(
      ".idea-6 span",
      0.6,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.15,
      "+=1",
    )

    // Balon terbang
    .staggerFromTo(
      ".ballons img",
      2,
      { opacity: 0.9, y: 1400 },
      { opacity: 1, y: -1000 },
      0.15,
    )

    // Foto & topi muncul
    .from(
      ".profile-picture",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=1.5",
    )
    .from(".hat", 0.4, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".profile-picture-side",
      0.5,
      {
        scale: 0,
        opacity: 0,
        y: 30,
        ease: Back.easeOut.config(1.4),
      },
      0.2,
    )

    // "Selamat Ulang Tahun!" — animasi huruf
    .staggerFrom(
      ".wish-hbd span",
      0.6,
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.08,
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.6,
      { scale: 1.4, rotationY: 150 },
      { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut },
      0.08,
      "party",
    )

    // Teks ucapan panjang — 4 detik baca
    .from(".wish h5", 0.4, { opacity: 0, y: 10, skewX: "-15deg" }, "party")

    // Efek lingkaran meledak
    .staggerTo(
      ".eight svg",
      1.2,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 2,
        repeatDelay: 1.2,
      },
      0.25,
    )

    .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" })

    // Pesan akhir
    .staggerFrom(".nine p", 0.8, ideaTextTrans, 1)
    .to(".last-smile", 0.5, { rotation: 90 }, "+=1");

  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};
