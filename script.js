let yesScale = 1;
let noScale = 1;

function noClick() {
  // YES grows 3%, NO shrinks 3%
  yesScale *= 1.03;
  noScale *= 0.97;

  document.getElementById("yesBtn").style.transform =
    `scale(${yesScale})`;
  document.getElementById("noBtn").style.transform =
    `scale(${noScale})`;
}

function yesClick() {
  document.getElementById("text").innerText =
    "Thank you for excusing me 🥹💜";

  document.querySelector(".btns").style.display = "none";

  // 🔴 CHANGE THIS TO YOUR REAL INSTAGRAM USERNAME (NO @)
  const instaUsername = "your_instagram_username";

  // message she will send
  const message = "chl yrr maf kia tuje mera bestie jo h 😉";
  const encoded = encodeURIComponent(message);

  // Instagram DM (mobile)
  setTimeout(() => {
    window.location.href =
      `https://www.instagram.com/direct/new/?username=${instaUsername}&text=${encoded}`;
  }, 1000);
}
