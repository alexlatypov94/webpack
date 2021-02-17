import "./style.css";

const width:string = "400"

const heading = document.createElement("h1");
heading.textContent = "Как интересно!";

const img = document.createElement("img");
img.setAttribute("src", "./assets/img/example.jpg")
img.setAttribute("width", width)

const div = document.createElement("div")
div.classList.add('container')
div.append(heading)
div.append(img)

const root = document.querySelector("#root");
root.append(div);
