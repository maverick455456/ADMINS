function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

function openProfile(id) {
  const modal = document.getElementById("profile-modal");

  if(id === "nipun"){
    document.getElementById("p-img").src = "https://i.ibb.co/Bc7JtRc/profile.png";
    document.getElementById("p-name").innerText = "MR NIPUN OFC";
    document.getElementById("p-age").innerText = "AGE: 18";
    document.getElementById("p-from").innerText = "From : Sri Lanka";

    document.getElementById("whatsapp").href = "https://wa.me/+94757255903";
    document.getElementById("fb").href = "https://www.facebook.com/share/1KKrZV2NM8/";
    document.getElementById("page").href = "https://www.facebook.com/share/17cgrxBQix/";
    document.getElementById("tiktok").href = "https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/";
    document.getElementById("youtube").href = "https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo";
    document.getElementById("insta").href = "https://www.instagram.com/mr_nipun_ofc";
    document.getElementById("tg").href = "https://t.me/Profesor9999";
  }

  modal.style.display = "block";
}

function closeProfile() {
  document.getElementById("profile-modal").style.display = "none";
}
