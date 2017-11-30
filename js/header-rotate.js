function rotation(div) {
  var className = div.getAttribute("class");
  if(className == "rotateheader") {
    div.className = "levelheader";
  }
  else{
    div.className = "rotateheader";
  }
}
