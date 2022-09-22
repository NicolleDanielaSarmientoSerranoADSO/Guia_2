addEventListener("DOMContentLoaded",()=>{
    let n1=0,n2=0
n1=Number(prompt("Ingrese el primer digito"))
n2=Number(prompt("Ingrese el segundo digito"))

if(n1>n2){
    let rest=(n1-n2)
    document.write(`El resultado de la resta es: ${rest}`)
}else{
    alert("No se puede llevar acabo la operacion porque el segundo digito es mayor que el primero asi q valiste :3")
}
    })

