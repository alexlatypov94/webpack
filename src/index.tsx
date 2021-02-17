import "./style.css";

const width: string = "400";

const heading: any = document.createElement("h1");
heading.textContent = "Как интересно!";

const img: any = document.createElement("img");
img.setAttribute("src", "./assets/img/example.jpg");
img.setAttribute("width", width);

const div: any = document.createElement("div");
div.classList.add("container");
div.append(heading);
div.append(img);

const root: any = document.querySelector("#root");
root.append(div);
