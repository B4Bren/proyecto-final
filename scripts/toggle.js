var targetMas = document.getElementById("mas");
var btn = document.getElementById("boton");

btn.onclick = function toggleSection(){
    if (targetMas.style.display != "none"){
        targetMas.style.display = "none";
        document.getElementById("boton").textContent = 'ver mas';
    }else{
        targetMas.style.display = "block"
        document.getElementById("boton").textContent = 'ver menos';
    }
};