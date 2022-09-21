addEventListener("DOMContentLoaded",()=>{
   let Fig=0,t=0,c=0
        let base=0,alt=0,pi=3.14,radio=0
        Fig=prompt("Elija una figura a la cual le quiera sacar la base (t)para  triangulo o (c) para circulo")
        if(Fig=="t"){
            base=Number(prompt("Ingrese la base: "))
            alt=Number(prompt("Ingrese la altura"))
            let pr=(base*alt)/2
            document.write(`El area del triangulo es: ${pr}`)
        }if(Fig=="c"){
            radio=Number(prompt("Ingrese el radio del circulo: "))
            let rs=(pi*radio)**2
            document.write(`El area del circulo es: ${rs}`)
        }

})