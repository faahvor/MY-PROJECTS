let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".aside-sidebar");
  let sidebarUl = document.querySelector(".aside-sidebar ul");
  let sidebarLink = document.querySelector(".aside-sidebar a");
  let getMain = document.querySelector(".main ul");

  if (toggleNavStatus === false) {
    getSidebar.style.width = "273px";
    sidebarUl.style.visibility = "visible";
    sidebarLink.style.opacity = "0.5";
    getMain.style.paddingLeft = "300px";

    let arrayLength = sidebarLink.length;
    for (let i = 0; i < arrayLength; i++) {
      sidebarLink[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";
    sidebarUl.style.visibility = "hidden";
    sidebarLink.style.opacity = "0";
    getMain.style.paddingLeft = "100px";

    let arrayLength = sidebarLink.length;
    for (let i = 0; i < arrayLength; i++) {
      sidebarLink[i].style.opacity = "0";
    }
    toggleNavStatus = false;
  }
};
