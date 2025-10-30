window.addEventListener("DOMContentLoaded", () => {

if (window.mermaid) {
    mermaid.initialize({ startOnLoad: true });
  }

  window.showInfo = function (id) {
    const infoBoxes = document.querySelectorAll(".info");
    infoBoxes.forEach((box) => (box.style.display = "none"));

    const target = document.getElementById(id);
    if (target) {
      target.style.display = "block";
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const first = document.querySelector(".info");
  if (first) first.style.display = "block";
});
