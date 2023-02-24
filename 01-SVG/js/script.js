const rectangle = document.querySelector("rect");
let isClicked = false;

rectangle.onclick = () => {
  rectangle.style.fill = isClicked ? "" : "blue";
  isClicked = !isClicked;
};
