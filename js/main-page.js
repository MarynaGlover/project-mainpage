console.log("hello world");
function toggle() {
    let elm = document.getElementById("burger-checkbox");
    let menu = document.getElementsByClassName("menu");
    if (!elm.checked) {
        console.log("checked");
        menu[0].style.display = "none";
    } else {
       menu[0].style.display = "flex";
       menu[0].style.flexDirection = "column";
    }
} 
var menu = document.getElementsByClassName("menu")[0];
var mediaQueryList = window.matchMedia('(min-width: 700px)');

function screenTest(e) {
  let elm = document.getElementById("burger-checkbox");
  let menu = document.getElementsByClassName("menu");
  if (e.matches) {
    menu[0].style.display = "flex";
    menu[0].style.flexDirection = "row";
    console.log("menu");
  } else {
    elm.checked = 0;
    toggle();
    
  }
}

mediaQueryList.addListener(screenTest);