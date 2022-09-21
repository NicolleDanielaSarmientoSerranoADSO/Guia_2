addEventListener("DOMContentLoaded",()=>{
    let n=Number(prompt(`Ingrese un numero positivo:`))
    if(n<100 && n>0){
        alert(`El numero es: ${n}, el numero es menor que 100`)
        document.write(`El numero es: ${n}, el numero es menor que 100`)
    }else{
        alert(`El numero tiene que ser positivo baboso`)
    }
})