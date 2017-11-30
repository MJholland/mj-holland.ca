var x = document.getElementById("aboutMe");
var y = document.getElementById("work");
var z = document.getElementById("contact");
var className = div.getAttribute("class");
//about me show hide, also closes other sections so only one displays
function openCloseAM() {
  "use strict";
  if (!x.style.display || x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
//for the other sections to show and hide
if (y.style.display === "block" || z.style.display === "block") {
  y.style.display = "none";
  z.style.display = "none";
}
}

function openCloseW() {
  "use strict";
  if (!y.style.display || y.style.display === "none") {
      y.style.display = "block";
  } else {
      y.style.display = "none";
  }

  if (x.style.display === "block" || z.style.display === "block") {
    x.style.display = "none";
    z.style.display = "none";
  }
}

function openCloseC() {
  "use strict";
  if (!z.style.display || z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  if (x.style.display === "block" || y.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
  }
}

function rotationAM(div) {
  "use strict";
  if (!x.style.display || x.style.display === "block") {
    div.className = "levelheader";
  } else if (y.style.display === "block" || z.style.display === "block") {
      div.className = "rotateheader";
  } else {
    div.className = "rotateheader";
  }
}

function rotationW(div) {
  "use strict";
  if (!y.style.display || y.style.display === "block") {
    div.className = "levelheader";
  } else if (x.style.display === "block" || z.style.display === "block") {
      div.className = "rotateheader";
  } else {
    div.className = "rotateheader";
  }
}

function rotationC(div) {
  "use strict";
  if (!z.style.display || z.style.display === "block") {
    div.className = "levelheader";
  } else if (x.style.display === "block" || y.style.display === "block") {
    div.className = "rotateheader";
  } else {
    div.className = "rotateheader";
  }
}
