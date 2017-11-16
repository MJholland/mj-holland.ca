var x = document.getElementById("aboutMe");
var y = document.getElementById("work");

//about me show hide, also closes work section so only one displays
function openCloseAM() {
  "use strict";
  if (!x.style.display || x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
//for the work section to show and hide
  if (y.style.display === "block") {
    y.style.display = "none";
  }
}

function openCloseW() {
  "use strict";
  if (!y.style.display || y.style.display === "none") {
      y.style.display = "block";
  } else {
      y.style.display = "none";
  }

  if (x.style.display === "block") {
    x.style.display = "none";
  }
}
