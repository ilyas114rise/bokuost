function xac(xacName,elmnt,color) {
  var i, auc, zacs;
  auc = document.getElementsByClassName("auc");
  for (i = 0; i < auc.length; i++) {
    auc[i].style.display = "none";
  }
  zacs = document.getElementsByClassName("zac");
  for (i = 0; i < zacs.length; i++) {
    zacs[i].style.backgroundColor = "";
  }
  document.getElementById(xacName).style.display = "block";
  elmnt.style.backgroundColor = color;

}
