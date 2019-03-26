const DRAWER_ICON = document.getElementById('drawer_icon');
const MAIN_DRAWER = document.getElementsByClassName('drawer')[0];


DRAWER_ICON.addEventListener("click", toggleDrawer)

function toggleDrawer(){
  MAIN_DRAWER.classList.toggle('drawer_collapse');
}
