 


 
 let allquestion=document.querySelectorAll(".faqQuestion");
allquestion.forEach((v,index)=>{
    v.addEventListener("click",()=>{
        v.nextElementSibling.classList.toggle("h-[auto]")
        v.nextElementSibling.classList.toggle("scale-y-100")
        v.nextElementSibling.classList.toggle("p-[20px]")
        v.children[1].classList.toggle("rotate-45")

        allquestion.forEach((el,i)=>{
            if(i!=index){
                el.nextElementSibling.classList.remove("h-[auto]");
                el.nextElementSibling.classList.remove("scale-y-100");
                el.nextElementSibling.classList.remove("p-[20px]");
                el.children[1].classList.remove("remove-45")
            }
        })




    })

})




