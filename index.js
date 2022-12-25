let displayEl = document.getElementById("display-el");
let butaoCE = document.getElementById("btnCE-el")
let butaoC = document.getElementById("btnC-el")
let butaoIdk = document.getElementById("btnIdk-el")
let butaoDivide = document.getElementById("btnDivide-el")
let butaoMultiply = document.getElementById("btnMultiply-el")
let butaoMinus = document.getElementById("btnMinus-el")
let butaoPlus = document.getElementById("btnPlus-el")
let butaoEquals = document.getElementById("btnEquals-el")
let butaoComma = document.getElementById("btnComma-el")
let butaoMoreOrLess = document.getElementById("btnMoreOrLess-el")
let grupoUm = "";

function clickBtnOne(){
    
    displayEl.textContent += 1
}

document.querySelectorAll("#btn-el").forEach( function(button) {
    
    button.addEventListener("click", function(event) {

    const el = event.target;

    let array = [];
    let id = el.textContent;
    array.push(id)
    for(let i = 0; i<array.length;i++) grupoUm +=id
    
    displayEl.textContent = grupoUm;
  });
  
});