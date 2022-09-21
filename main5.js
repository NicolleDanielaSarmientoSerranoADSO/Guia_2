addEventListener("DOMContentLoaded",()=>{
   let bas=0,alt=0,rt=0
   bas=Number(prompt("Ingrese la base del triangulo para calcular su area: "))
   alt=Number(prompt("Ingrese la altura del rectangulo"))
   if (bas>0 && alt>0){
       pr=(bas*alt)
       document.write(`El area del rectangulo es: ${pr}`)
   }else{
       alert("Los valores tienen que ser positivos")
   }


})
