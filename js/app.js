document.addEventListener("DOMContentLoaded",()=>{

    let btn ,hide1 ,hide2,hide3,btn_show
    hide1 = document.querySelector(".hide1")
    hide2 = document.querySelector(".hide2")
    hide3 = document.querySelector(".hide3")
    btn = document.querySelector("button")
    btn_show = document.querySelector(".btn-add")
    btn.addEventListener("click",(e)=>{
        hide1.classList.toggle("appear")
        hide2.classList.toggle("appear")
        hide3.classList.toggle("appear")
        btn_show.classList.toggle("btn-remove")



    })
})