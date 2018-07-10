 function limite_total(valor) {
    var inicial = 140;
    var total = valor.length;
    /*if(total <= inicial) {*/
      var  resto = inicial - total ;
        document.getElementById('contador').innerHTML = resto;
    /*}*/
     
     
	if (resto >=21) {
    document.querySelector("#contador").style.color = "black";
  }
	if (resto <= 20) {
    document.querySelector("#contador").style.color = "red";
  }
	if (resto <= 10) {
    document.querySelector("#contador").style.color = "yellow";
  }
     if(resto < 0){
     button.setAttribute("disabled", "true");
  }
    
}

    var container = document.getElementById("saida");
    

    function enviar(){
    var saida = document.getElementById("msg").value;
    document.getElementById("msg").value = "";
    var p = document.createElement("p");
    p.textContent = saida;
    container.prepend(p);

    moment.locale("pt-br");  
    let hora = document.createElement("small");      
    hora.textContent = "--" + moment().format('LLL');
    p.appendChild(hora);
    

}

/*function hora(){
    data = new Date
    var hour = document.createElement('p');
    document.write ( + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()  )
    
    document.querySelector('#hora').innerHTML = hora();
   
}
*/

function desabilite_Botao(){
    
      if(document.getElementById("msg").value == ""){
       document.querySelector("#button").disabled = true;
          
   }else{
       document.querySelector("#button").disabled = false;
   }
  

}

 


