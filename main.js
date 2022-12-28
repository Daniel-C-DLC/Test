function mobileMenu() {
    if (document.getElementById('menu').style.display == 'block') {
        document.getElementById('menu').style.display = 'none';
    }
    else {
        document.getElementById('menu').style.display = 'block';
        document.getElementById('menu').style.borderStyle = "solid";
        document.getElementById('toggle').style.display = 'none' ;
    }
}
function hideMobileMenu(){
    if(document.getElementById('menu').style.display == 'block'){
        document.getElementById('menu').style.display = 'none';
        document.getElementById('toggle').style.display = 'block';
    }
}
document.getElementById('toggle').addEventListener('click', mobileMenu);
document.getElementById('menu').addEventListener('click',hideMobileMenu);