// Copiar texto PIX
function copiar(){
    let textCopiado = document.getElementById("chavePix");
    textCopiado.select();
    textCopiado.setSelectionRange(0, 99999);

    document.execCommand("copy");
    alert("Copiado");
}

// Copiar texto Boleto
function copiar(){
    let textCopiado = document.getElementById("codigoBoleto");
    textCopiado.select();
    textCopiado.setSelectionRange(0, 99999);

    document.execCommand("copy");
    alert("Copiado");
}



