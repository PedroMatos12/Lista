//tem que consertar o darkmode, quando um elemento é adicionado a lista já no modo escuro, o check não fica branco.
var pId = 0
var dark = 0
var checkDel = "c"
var checkUn = 0

function addList () {
    //limite de caractéres 
    if (document.getElementById("input").value.length >= 150) {
        document.getElementById("pVazio").innerHTML = "Por favor, escreva menos que 150 caractéres."
    }  else {
        //caso o usuário não tenha escrito algo no input 
        if (document.getElementById("input").value == "") {
            document.getElementById("pVazio").innerHTML = "Escreva algo e aperte o botão para adicionar uma elemento à lista."
        } else {
            //adicionar <p> com conteúdo do input e <button> remover
            document.getElementById("pVazio").innerHTML = ""
            var inputValue = document.getElementById("input").value
            pId = pId + 1
            checkDel = checkDel + 1
            console.log(checkDel)
            adicionarP = pId.toString()
            removerCheck = checkDel.toString()
            var paragraph = document.createElement('p')
            var btn = document.createElement('button') 
            var div = document.createElement('div')
            var check = document.createElement('span')
            div.className = "pDivs"
            check.className = "material-symbols-outlined"
            paragraph.id = (adicionarP)
            check.id = (removerCheck)
            document.getElementById("p").appendChild(div)
            div.appendChild(paragraph)
            div.appendChild(check)
            div.appendChild(btn)
            document.getElementById(adicionarP).innerHTML = inputValue
            btn.setAttribute('data-p-id', adicionarP)
            btn.setAttribute('data-checkDelete-id', removerCheck)
            btn.innerHTML = "Remover"
            check.setAttribute('data-check-p-id', adicionarP)
            check.innerHTML = "radio_button_unchecked"
            //function que remove o <p> e o <button> apertados
            btn.addEventListener('click', function() {
                var removeP = this.getAttribute('data-p-id')
                var removeCheck = this.getAttribute('data-checkDelete-id')
                var itemP = document.getElementById(removeP)
                var itemC = document.getElementById(removeCheck)
                itemP.parentNode.removeChild(itemP)
                itemC.parentNode.removeChild(itemC)
                this.parentNode.removeChild(this)
                // check.parentNode.removeChild(removeCheck)
            })
            //function que faz o item especifico da lista ficar como concluido
            check.addEventListener('click', function () {
                checkUn = checkUn + 1
                var through = this.getAttribute('data-check-p-id')
                var itemThrough = document.getElementById(through)
                if (checkUn > 1) {
                    checkUn = 0
                }
                if (checkUn == 0) {
                    this.innerHTML = "radio_button_unchecked"
                    itemThrough.style.textDecoration = "none"
                    itemThrough.style.backgroundColor = "#fff"
                    this.style.backgroundColor = "#fff"
                } else {
                    this.innerHTML = "radio_button_checked"
                    itemThrough.style.textDecoration = "line-through"
                    itemThrough.style.backgroundColor = "#c3f7c3"
                    this.style.backgroundColor = "#c3f7c3"
                }
            })
                //apaga o escrito no input apenas ao apertar o <button>
                document.getElementById("input").value = ""
        }
    }
}

function fontChange () {
    var fontValue = document.getElementById("font").value
    document.body.style.fontFamily = (fontValue)
}

function darkMode () {
    if (dark == 0) {
        document.getElementById("darkMode").innerHTML = "toggle_on"
        document.getElementById("menuWhite").style.color = "aliceblue"
        document.body.style.backgroundColor = "black"
    } else {
        document.getElementById("darkMode").innerHTML = "toggle_off"
        document.getElementById("menuWhite").style.color = "black"
        document.body.style.backgroundColor = "#f5f5f5"
    }
    dark = dark + 1
    if (dark > 1) {
        dark = 0
    }
}
//detectar se há mais que 150 caractéres
window.setInterval(function maxCarac () {
    var inputLength = document.getElementById("input").value
    document.getElementById("carac").innerHTML = (`${inputLength.length}/150`)
},0)

window.setInterval(function  () {
    document.getElementById("btn").innerHTML = "Adicionar"
},0)