const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.append(highlight);

function highLightLink() {
  const linkCodes = this.getBoundingClientRect();
  const coords = {
    width: linkCodes.width,
    height: linkCodes.height,
    top: linkCodes.top + window.scrollY,
    left: linkCodes.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener("mouseenter", highLightLink));
