let displayEl = document.getElementById("display-el");
let btnCE = document.getElementById("btnCE-el")
let btnC = document.getElementById("btnC-el")
let btnIdk = document.getElementById("btnIdk-el")
let btnDivide = document.getElementById("btnDivide-el")
let btnMultiply = document.getElementById("btnMultiply-el")
let btnMinus = document.getElementById("btnMinus-el")
let btnSum = document.getElementById("btnSum-el")
let btnEquals = document.getElementById("btnEquals-el")
let btnComma = document.getElementById("btnComma-el")
let btnMoreOrLess = document.getElementById("btnMoreOrLess-el")
let grupos = "";
let numOperacao = 0;
let array = [];
let sum, sub, multiply, divide = false

document.querySelectorAll("#btn-el").forEach( function(button) {
    
    button.addEventListener("click", function(event) {

    const el = event.target;
    let id = el.textContent;
    
    array.push(id)
    for(let i = 0; i<array.length;i++) grupos +=id   
    displayEl.textContent = grupos;
    
    limpaArray()
  });
});

btnSum.addEventListener("click", function() {
  
  if(numOperacao === 0) numOperacao = stringParaInt(grupos)
  
  limpaArray()
  limpaDisplayEGrupo()
  sum = true;
  sub = false
  divide = false
  multiply = false
});

btnMinus.addEventListener("click", function() {
  
  if(numOperacao === 0) numOperacao = stringParaInt(grupos)
  
  limpaArray()
  limpaDisplayEGrupo()
  sub = true;
  sum = false
  divide = false
  multiply = false
});

btnDivide.addEventListener("click", function() {
  
  if(numOperacao === 0) numOperacao = stringParaInt(grupos)
  
  limpaArray()
  limpaDisplayEGrupo()
  divide = true;
  sum = false
  sub = false
  multiply = false
});

btnMultiply.addEventListener("click", function() {
  
  if(numOperacao === 0) numOperacao = stringParaInt(grupos)

  limpaArray()
  limpaDisplayEGrupo()
  multiply = true;
  sum = false
  sub = false
  divide = false
});

btnEquals.addEventListener("click", function(){
  let termoOperacao = stringParaInt(grupos)
  
  if(sum === true && (sub === false, divide === false, multiply === false)){
    
    numOperacao += termoOperacao
  }

  if(sub === true && (sum === false, divide === false, multiply === false)){
    
    numOperacao -= termoOperacao
  }
  if(divide === true && (sum === false, sub === false, multiply === false)){
    if(termoOperacao === 0) {
      
      displayEl.textContent = `Invalido`
      grupos = ""
    }
    else{
      
      numOperacao /= termoOperacao 
    }
  }

  if(multiply === true && (sum === false, divide === false, sub === false)){

    numOperacao *= termoOperacao
  }
  if(displayEl.textContent != "Invalido")
    displayEl.textContent = `${numOperacao}`
})

btnCE.addEventListener("click", function(){  
  limpaDisplayEGrupo();
  limpaArray();
  numOperacao = 0
})

function limpaArray(){
  for(let i = 0; i<array.length; i++) array.pop(array[i]);
}
function limpaDisplayEGrupo(){
  displayEl.textContent = "";
  grupos = "";
}

function stringParaInt(grupos){
  return parseInt(grupos);
}