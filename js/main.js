let ul=document.querySelector("ul")
let nav=document.querySelectorAll("ul .nav-item .nav-link");
let navArray=Array.from(nav)
console.log(navArray)
ul.addEventListener("click",(e)=>{
    if(e.target.className="nav-link"){
        console.log("true")
        navArray.forEach((ele)=>{
            ele.classList.remove("active");
            e.target.classList.add("active")

        })
    }
})
let switchers=document.querySelectorAll(".port .container ul li");
let imgs=document.querySelectorAll(".ourwork div ")
let imgarray = Array.from(imgs)
let swatArray =Array.from(switchers);
switchers.forEach((e)=>{
    e.addEventListener("click",function(){
        switchers.forEach((li)=>{
            li.classList.remove("main-btn")
            li.onclick=function(){
            this.classList.add("main-btn")

            }
        })
    })
  

    e.addEventListener("click", manageimg)
})


function manageimg(){
    imgs.forEach((img)=>{
        img.style.display="none"
    })
    document.querySelectorAll(this.dataset.group).forEach((el)=>{
        el.style.display="block";
    })

}