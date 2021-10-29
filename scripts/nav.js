document.getElementById("home").click();

function navBar(evt){
    var i, tabnav;

    tabnav = document.getElementsByClassName("tabnav");
    for (i = 0; i < tabnav.length; i++){
        tabnav[i].className = tabnav[i].className.replace("active","");
    }
    evt.currentTarget.className += " active";
}