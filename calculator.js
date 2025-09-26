let keys = document.querySelectorAll(".keyboard>div");
let beg = "";

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", myCalculator);
}

function myCalculator(event) {
  let targetName = event.target.innerText;

  if (targetName.toLowerCase() === "c") {
    beg = "";  // reset input
    document.querySelector(".display").innerText = "";
  } else if (targetName === "=") {
    try {
      if (beg.trim() !== "") {
        let result = eval(beg);
        document.querySelector(".display").innerText = result;
        beg = result.toString(); // store result for further calculation
      }
    } catch (e) {
      document.querySelector(".display").innerText = "Error";
      beg = "";
    }
  } else {
    beg = beg + targetName;
    document.querySelector(".display").innerText = beg;
  }
}

