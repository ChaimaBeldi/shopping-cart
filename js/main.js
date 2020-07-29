
var total=document.getElementById("totprice")
 var plusButton = document.querySelectorAll(".plus")
 Array.from(plusButton).map(el => {
     el.addEventListener("click", () => {
         el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML) + 1
         var prix =el.previousElementSibling.innerHTML
         total.innerHTML = parseInt(total.innerHTML) + parseInt(prix)
         
     })
 })

 var minusButton = document.querySelectorAll(".minus")
 Array.from(minusButton).map(el => {
     el.addEventListener("click", () => {
         el.previousElementSibling.innerHTML = parseInt(el.previousElementSibling.innerHTML) - 1
         var prix =el.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
         total.innerHTML = parseInt(total.innerHTML.replace("$", "") )- parseInt(prix.replace("$", ""))
     })
 })

 var deleteArticle = document.querySelectorAll(".delete")
 Array.from(deleteArticle).map(el => {
     el.addEventListener("click", () => {
        el.parentElement.remove()
     
    })
 })
 
 
  var heart=document.querySelectorAll('.coeur')
  Array.from(heart).map(el => {el.addEventListener("click",() =>{
      el.classList.toggle('red')
      

  })})
  
  


 

