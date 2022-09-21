addEventListener("DOMContentLoaded",()=>{
   let num1=Number(prompt(`Ingrese el primer numero:`))
   let num2=Number(prompt(`Ingrese el segundo numero:`))
   let num3=Number(prompt(`Ingrese el tercer numero:`))
   if(num1>num2 && num1>num3){
      document.write(`El primer numero el cual es: ${num1} es mayor`)
   }else if(num2>num3 && num2>num1){
      document.write(`El segundo numero el cual es: ${num2} es el mayor`)
   }else {
      document.write(`El tercero numero es cual es: ${num3} es mayor`)
   }

   if(num1<=num2 && num1<=num3){
      document.write(`El primer numero el cual es: ${num1} es menor `)
   }else if(num2<=num3 && num1<=num3){
      document.write(`El segundo numero el cual es: ${num2} es menor`)
   }else {
      document.write(`El tercer numero el cual es: ${num3} es menor`)
   }

   if(num1==num2){
      document.write(`El numero ${num1} y el ${num2} son iguales`)
   }else if(num2==num2){
      document.write(`El numero ${num2} y el ${num3} son iguales`)
   }else if(num3==num1){
      document.write(`El numero ${num1} y el ${num3} son iguales`)
   }
})