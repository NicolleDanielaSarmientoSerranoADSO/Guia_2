addEventListener("DOMContentLoaded",()=>{
    let num1=Number(prompt(`Ingrese el primer valor:`))
    let num2=Number(prompt(`Ingrese el segundo valor:`))
    let num3=Number(prompt(`Ingrese el tercer valor:`))
     if(num1>num2 && num1>num3){
        document.write(`El primer numero el cual es: ${num1} es el mayor`)
        alert(`El 1 es mayor`)
     }if(num2>num3 && num2>num1){
        document.write(`El primer numero es cual es:${num2} es el mayor`)
        alert(`El 2 es mayor`)
     }else{
            document.write(`El primer numero el cual: ${num3} es el mayor`)
            alert(`El 3 es mayor`)
     }
})