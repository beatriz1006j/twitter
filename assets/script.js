 function limite_total(valor) {
    var inicial = 140;
    var total = valor.length;
    /*if(total <= inicial) {*/
      var  resto = inicial - total ;
        document.getElementById('contador').innerHTML = resto;
    /*}*/
	if (resto >=31) {
    document.querySelector("#contador").style.color = "black";
  }
	if (resto <= 30) {
    document.querySelector("#contador").style.color = "red";
  }
	if (resto <= 10) {
    document.querySelector("#contador").style.color = "yellow";
  }
     
	
	
    
}

function enviar(){
  var saida = document.getElementById("msg").value;
  document.getElementById('saida').innerHTML += "<p>" + saida + "</p>";
  document.getElementById("msg").value = "";
    
    
    
    if(saida ===""){
        alert("É necessariio digitar uma mensagem");
        
    }
  

}

function desabit_Botao(){
    
    if(valor.length === ""){
     document.getElementById('button').disabled = true;
} 
  

}