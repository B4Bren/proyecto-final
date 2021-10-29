document.getElementById("defaultOpen").click();

function openActividad(event, actividad){
    var i, tabcontent, tablinks;

    

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active","");
    }
    document.getElementById(actividad).style.display = "block";
    event.currentTarget.className += " active";
}