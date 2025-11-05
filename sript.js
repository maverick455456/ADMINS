/* 
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Close by clicking background
function closeProfile(event) {
  const modal = document.getElementById("profile-modal");
  if (event.target === modal || event.target.classList.contains("close")) {
    modal.style.display = "none";
  }
}

function openProfile(id) {
  const modal = document.getElementById("profile-modal");
  const img = document.getElementById("p-img");
  const name = document.getElementById("p-name");
  const age = document.getElementById("p-age");
  const from = document.getElementById("p-from");

  if (id === "nipun") {
    img.src = "https://i.ibb.co/Bc7JtRc/profile.png";
    name.innerText = "MR NIPUN OFC";
    age.innerText = "AGE: 18";
    from.innerText = "From: Sri Lanka";

    document.getElementById("whatsapp").href = "https://wa.me/+94757255903";
    document.getElementById("fb").href = "https://www.facebook.com/share/1KKrZV2NM8/";
    document.getElementById("page").href = "https://www.facebook.com/share/17cgrxBQix/";
    document.getElementById("tiktok").href = "https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/";
    document.getElementById("youtube").href = "https://youtube.com/@mrprofesormht";
    document.getElementById("insta").href = "https://www.instagram.com/mr_nipun_ofc";
    document.getElementById("tg").href = "https://t.me/Profesor9999";
  }

  modal.style.display = "flex";
}
