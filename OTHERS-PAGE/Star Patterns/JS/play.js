const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");

generateBtn.addEventListener("click", generatePattern);

function generatePattern() {
  const style = document.getElementById("pattern").value;
  const lines = parseInt(document.getElementById("lines").value);
  let output = "";

  if (style === "left") {
    for (let i = 1; i <= lines; i++) {
      output += "* ".repeat(i) + "\n";
    }
  } else if (style === "right") {
    for (let i = 1; i <= lines; i++) {
      output += "  ".repeat(lines - i) + "* ".repeat(i) + "\n";
    }
  } else if (style === "downLeft") {
    for (let i = lines; i >= 1; i--) {
      output += "* ".repeat(i) + "\n";
    }
  } else if (style === "downRight") {
    for (let i = lines; i >= 1; i--) {
      output += "  ".repeat(lines - i) + "* ".repeat(i) + "\n";
    }
  }

  result.textContent = output;
  result.style.opacity = "0";
  setTimeout(() => { result.style.opacity = "1"; }, 50);
}
