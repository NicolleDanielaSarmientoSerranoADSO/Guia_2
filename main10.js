addEventListener("DOMContentLoaded",()=>{
    let p1=0,p2=0,p3=0,p4=0,p5=0
    p1=Number(prompt("Ingrese el valor del prducto: "))
    p2=Number(prompt("Ingrese el valor del prducto: "))
    p3=Number(prompt("Ingrese el valor del prducto: "))
    p4=Number(prompt("Ingrese el valor del prducto: "))
    p5=Number(prompt("Ingrese el valor del prducto: "))
    
    let subt=0,iva=0,total=0
    subt=(p1+p2+p3+p4+p5)
    iva=(subt*0.19)
    total=(subt+iva)
    
    alert(`El subtotal fue de:${subt} `)
    alert(`El iva fue de:${iva} `)
    alert(`El total fue de:${total} `)
    })

