//variables for rotating header
var r1 = document.getElementById("aboutheader").classList;
var r2 = document.getElementById("workheader").classList;
var r3 = document.getElementById("contactheader").classList;
//variables for shrinking content
var s1 = document.getElementById("aboutMe").classList;
var s2 = document.getElementById("work").classList;
var s3 = document.getElementById("contact").classList;
//incase javascript fails
s1.remove("content-grow-open");
r1.remove("levelheader");
s2.remove("content-grow-open");
s3.remove("content-grow-open");
r2.remove("levelheader");
r3.remove("levelheader");
//about me show hide & rotation. also closes & rotates other sections so only one displays
function openCloseAM() {
  "use strict";
  if (s1.contains("content-grow-open")) {
    s1.remove("content-grow-open");
    r1.remove("levelheader");
  } else {
    s1.add("content-grow-open");
    r1.add("levelheader");
    s2.remove("content-grow-open");
    s3.remove("content-grow-open");
    r2.remove("levelheader");
    r3.remove("levelheader");
  }
}

//work show hide & rotation. also closes & rotates other sections so only one displays
function openCloseW() {
  "use strict";
  if (s2.contains("content-grow-open")) {
    s2.remove("content-grow-open");
    r2.remove("levelheader");
  } else {
    s2.add("content-grow-open");
    r2.add("levelheader");
    s1.remove("content-grow-open");
    s3.remove("content-grow-open");
    r1.remove("levelheader");
    r3.remove("levelheader");
  }
}

//contact show hide & rotation. also closes & rotates other sections so only one displays
function openCloseC() {
  "use strict";
  if (s3.contains("content-grow-open")) {
    s3.remove("content-grow-open");
    r3.remove("levelheader");
  } else {
    s3.add("content-grow-open");
    r3.add("levelheader");
    s2.remove("content-grow-open");
    s1.remove("content-grow-open");
    r1.remove("levelheader");
    r2.remove("levelheader");
  }
}
