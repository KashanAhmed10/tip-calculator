const button=document.querySelector("button")
const output=document.querySelector(".output")
const cost=document.querySelector("input")
console.log(button)
button.addEventListener("click",function() {
const tip= (cost.value * 0.15).toFixed(2)
    const temp=`you should tip 15% tip
     $${tip} on $${cost.value}`
      output.innerHTML=temp
})