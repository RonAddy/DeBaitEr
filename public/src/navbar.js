//This function will retrieve the nav element id and increase the width to display the side menu
//It will then change the opacity of the header (id=videoshow) to .5
//The opacity of the footer and black divs will also change for consistency

function openMenu() {
    document.getElementById("navBar").style.width = "100%";
    document.querySelector("div").style.opacity= '.2';
    document.querySelector(".sideMenu").style.opacity= '.8';
}
//This function will set the width of the side menu back to 0
//It will also change the opacity of the other elements to default
function closeMenu() {
    document.getElementById("navBar").style.width = "0";
    document.querySelector("div").style.opacity= '1';
    document.querySelector(".sideMenu").style.opacity= '1';
}
