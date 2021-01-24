const tags = document.querySelectorAll(".titles");
const line = document.getElementById("redLine");
const header = document.querySelector("header");
const logo = document.getElementById("logo");
const svgImg = document.getElementById("svgImg");

logo.addEventListener("click", () => {
  hiden();
});

function changeImg() {
  if (svgImg.getAttribute("xlink:href") == "./image/1.jpg") {
    svgImg.setAttribute("xlink:href", "./image/2.jpg");
  } else {
    svgImg.setAttribute("xlink:href", "./image/1.jpg");
  }

  showNewImg();
}

function showNewImg() {
  const effect1 = document.getElementById("ef2");
  effect1.setAttribute("scale", i);

  i = 200;
  const timer = setInterval(() => {
    i -= 10;
    effect1.setAttribute("scale", i);
    console.log("~ i", i);
    if (i <= 15) {
      effect1.setAttribute("scale", 1);
      console.log(effect1.getAttribute("scale"));
      clearInterval(timer);
    }
  }, 30);

  let n2 = 0;
  const opacity = setInterval(() => {
    n2 = n2 + 1;
    logo.style.opacity = n2 + "%";
    if (n2 >= 100) {
      logo.style.opacity = 1;
      clearInterval(opacity);
    }
  }, 10);
}

tags.forEach((tag) => {
  tag.addEventListener("mouseover", (e) => {
    const pos = e.target.offsetLeft;
    line.style.left = pos + "px";
    line.style.transform = "translateX(0)";
  });

  tag.addEventListener("mouseout", () => {
    line.style.left = "50%";
    line.style.transform = "translateX(-50%)";
  });
});

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (y >= 130) {
    header.classList.remove("mini");
    header.classList.add("extend");
  } else {
    header.classList.remove("extend");
    header.classList.add("mini");
  }
});

function hiden() {
  const effect1 = document.getElementById("ef2");
  i = 1;
  const timer = setInterval(() => {
    effect1.setAttribute("scale", i);
    i += 5;
    if (i >= 200) {
      clearInterval(timer);
    }
  }, 20);

  let n2 = 100;
  const opacity = setInterval(() => {
    n2 = n2 - 1;
    logo.style.opacity = n2 + "%";
    if (n2 <= 0) {
      clearInterval(opacity);
      changeImg();
    }
  }, 10);
}
