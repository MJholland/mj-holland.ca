//variables for show/hide div
var x = document.getElementById("aboutMe");
var y = document.getElementById("work");
var z = document.getElementById("contact");
//variables for rotating header
var r1 = document.getElementById("aboutheader").classList;
var r2 = document.getElementById("workheader").classList;
var r3 = document.getElementById("contactheader").classList;
//variables for shrinking content
var s1 = document.getElementById("aboutMe").classList;
var s2 = document.getElementById("work").classList;
var s3 = document.getElementById("contact").classList;
//about me show hide & rotation. also closes & rotates other sections so only one displays
function openCloseAM() {
  "use strict";
  if (!x.style.display || x.style.display === "none") {
      x.style.display = "block";
      r1.remove("rotateheader");
      r1.add("levelheader");
      s1.add("content-grow")
  } else {
      x.style.display = "none";
      r1.remove("levelheader");
      r1.add("rotateheader");
      s1.remove("content-grow");
      s1.add("content-shrink");
  }
//for the other sections to show/hide & rotate
  if (y.style.display === "block" || z.style.display === "block") {
    y.style.display = "none";
    z.style.display = "none";
    r2.remove("levelheader");
    r2.add("rotateheader");
    r3.remove("levelheader");
    r3.add("rotateheader");
  }
}

//work show hide & rotation. also closes & rotates other sections so only one displays
function openCloseW() {
  "use strict";
  if (!y.style.display || y.style.display === "none") {
      y.style.display = "block";
      r2.remove("rotateheader");
      r2.add("levelheader");
      s2.add("content-grow")
  } else {
      y.style.display = "none";
      r2.remove("levelheader");
      r2.add("rotateheader");
      s2.remove("content-grow");
      s2.add("content-shrink");
  }
//for the other sections to show/hide & rotate
  if (x.style.display === "block" || z.style.display === "block") {
    x.style.display = "none";
    z.style.display = "none";
    r1.remove("levelheader");
    r1.add("rotateheader");
    r3.remove("levelheader");
    r3.add("rotateheader");
  }
}

//contact show hide & rotation. also closes & rotates other sections so only one displays
function openCloseC() {
  "use strict";
  if (!z.style.display || z.style.display === "none") {
    z.style.display = "block";
    r3.remove("rotateheader");
    r3.add("levelheader");
    s3.add("content-grow")
  } else {
    z.style.display = "none";
    r3.remove("levelheader");
    r3.add("rotateheader");
    s3.remove("content-grow");
    s3.add("content-shrink");
  }
  //for the other sections to show/hide & rotate
  if (x.style.display === "block" || y.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
    r1.remove("levelheader");
    r1.add("rotateheader");
    r2.remove("levelheader");
    r2.add("rotateheader");
  }
}
