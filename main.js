function mobileMenu() {
    if (document.getElementById('menu').style.display == 'block') {
        document.getElementById('menu').style.display = 'none';


    }
    else {
        document.getElementById('menu').style.display = 'block';
        document.getElementById('menu').style.borderStyle = "solid";
    }
}
document.getElementById('toggle').addEventListener('click', mobileMenu);