//variables for show/hide div
var x = document.getElementById("aboutMe");
var y = document.getElementById("work");
var z = document.getElementById("contact");
//variables for rotating header
var a = document.getElementById("aboutheader").classList;
var b = document.getElementById("workheader").classList;
var c = document.getElementById("contactheader").classList;

//about me show hide & rotation. also closes & rotates other sections so only one displays
function openCloseAM() {
  "use strict";
  if (!x.style.display || x.style.display === "none") {
      x.style.display = "block";
      a.remove("rotateheader");
      a.add("levelheader");
  } else {
      x.style.display = "none";
      a.remove("levelheader");
      a.add("rotateheader");
  }
//for the other sections to show/hide & rotate
  if (y.style.display === "block" || z.style.display === "block") {
    y.style.display = "none";
    z.style.display = "none";
    b.remove("levelheader");
    b.add("rotateheader");
    c.remove("levelheader");
    c.add("rotateheader");
  }
}

//work show hide & rotation. also closes & rotates other sections so only one displays
function openCloseW() {
  "use strict";
  if (!y.style.display || y.style.display === "none") {
      y.style.display = "block";
      b.remove("rotateheader");
      b.add("levelheader");
  } else {
      y.style.display = "none";
      b.remove("levelheader");
      b.add("rotateheader");
  }
//for the other sections to show/hide & rotate
  if (x.style.display === "block" || z.style.display === "block") {
    x.style.display = "none";
    z.style.display = "none";
    a.remove("levelheader");
    a.add("rotateheader");
    c.remove("levelheader");
    c.add("rotateheader");
  }
}

//contact show hide & rotation. also closes & rotates other sections so only one displays
function openCloseC() {
  "use strict";
  if (!z.style.display || z.style.display === "none") {
    z.style.display = "block";
    c.remove("rotateheader");
    c.add("levelheader");
  } else {
    z.style.display = "none";
    c.remove("levelheader");
    c.add("rotateheader");
  }
  //for the other sections to show/hide & rotate
  if (x.style.display === "block" || y.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
    a.remove("levelheader");
    a.add("rotateheader");
    b.remove("levelheader");
    b.add("rotateheader");
  }
}
