const greetingParagpah = document.querySelector("p.greeting");
const greetingParagpahArray = greetingParagpah.textContent.trim().split(" ");

greetingParagpah.textContent = "";

let i = 0;
greetingParagpahArray.map((item) => {
  if (item === "") return;
  i++;
  greetingParagpah.append(
    createElement(
      `<span class='top-down' style='animation-delay: ${
        i * 0.1
      }s;'>${item}</span>`
    )
  );
});

function createElement(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstElementChild;
}
