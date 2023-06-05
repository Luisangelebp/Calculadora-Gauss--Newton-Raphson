var activeElement = document.getElementById('newton-menu');
function active(e){
    //console.log(e, activeElement);
    if(activeElement !== e){
        activeElement.classList.remove('active');
        e.classList.add('active');
        activeElement = e;
    }
}