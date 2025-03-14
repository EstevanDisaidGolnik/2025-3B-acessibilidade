const aumentaFonteBotao = document.getElementById(aumenta-fonte)

let tamanhoFonteAtual = 1;

aumentaFonteBotao.addEventListener('click', function(){
    tamanhoFonteAtual += 0.1;
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`
})