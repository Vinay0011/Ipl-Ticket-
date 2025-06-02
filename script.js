function showDetails(id) {
  const paras = document.querySelectorAll(".category p");
  paras.forEach(p => p.classList.add("hidden"));

  const para = document.getElementById(id);
  if (para) {
    para.classList.remove("hidden");
  }
}
