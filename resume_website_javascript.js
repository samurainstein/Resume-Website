
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Used to toggle accordion menu on experience page
function accordionOpen1(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
}

// Used to toggle accordion menu on experience page
function accordionOpen2(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
}

// Used to toggle accordion menu on experience page
function accordionOpen3(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function accordionClose1(id) {
    var x = document.getElementById(id);
    x.className = x.className.replace(" w3-show", "");
}

function accordionClose2(id) {
    var x = document.getElementById(id);
    x.className = x.className.replace(" w3-show", "");
}

function accordionClose3(id) {
    var x = document.getElementById(id);
    x.className = x.className.replace(" w3-show", "");
}
