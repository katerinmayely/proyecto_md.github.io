function ocultarTexto(id){
    console.log("tamos aqui");
    let div = document.getElementById(id);
    if (div.style.display == "none"){
        div.style.display = "flex";
    }else{
        div.style.display = "none";
    }
}