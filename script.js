let btns = document.getElementsByClassName("accordion");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let desc = this.nextElementSibling;
    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px";
    }
  });
}
