const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger-img");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )


  function toggleOn() {
    document.body.classList.toggle("dark-theme");
    }


// DARK THEME

var darkMode = document.getElementById("icon");

darkMode.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    darkMode.classList.add("toggleOff");
    localStorage.setItem("theme", "dark");
  } else {
    darkMode.classList.remove("toggleOff");
    localStorage.setItem("theme", "light");
  }
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add('dark-theme');
}

// DARK MODE 699PX SCREENS

var icon = document.getElementById("icons");

icons.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    icons.classList.add("toggleOn");
    localStorage.setItem("theme", "dark");
  } else {
    icons.classList.remove("toggleOn");
    localStorage.setItem("theme", "light");
  }
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add('dark-theme');
}