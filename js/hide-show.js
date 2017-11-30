var x = document.getElementById("aboutMe");
var y = document.getElementById("work");
var z = document.getElementById("contact");
var a = document.getElementById("aboutheader").classList;
var b = document.getElementById("workheader").classList;
var c = document.getElementById("contactheader").classList;
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

  if (a.contains("rotateheader")) {
    a.remove("rotateheader");
  } else {
    a.add("rotateheader");
  }
  if (a.contains("levelheader")) {
    a.remove("levelheader");
  } else {
    a.add("levelheader");
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

  if (b.contains("rotateheader")) {
    b.remove("rotateheader");
  } else {
    b.add("rotateheader");
  }
  if (b.contains("levelheader")) {
    b.remove("levelheader");
  } else {
    b.add("levelheader");
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

  if (c.contains("rotateheader")) {
    c.remove("rotateheader");
  } else {
    c.add("rotateheader");
  }
  if (c.contains("levelheader")) {
    c.remove("levelheader");
  } else {
    c.add("levelheader");
  }
}
