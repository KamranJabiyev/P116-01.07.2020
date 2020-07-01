// let close=document.getElementById("close");
// let sidebar=document.getElementById("sidebar");
// let showSidebar=document.getElementById("showSidebar");

// close.addEventListener('click',function(){
//     sidebar.classList.add("close")
// })

// showSidebar.addEventListener('click',function(){
//     sidebar.classList.remove("close");
// })

// let centerElm=document.getElementById("center");

// Navigation

// console.log(centerElm.parentNode.parentNode)
// console.log(centerElm.children)
// console.log(centerElm.lastElementChild)
// console.log(centerElm.nextElementSibling.nextElementSibling.nextElementSibling)
// console.log(centerElm.previousElementSibling.previousElementSibling)
//console.log(centerElm.parentNode.nextElementSibling.firstElementChild.innerText)

//Attribute

// console.log(centerElm.getAttribute("test"))
// centerElm.setAttribute("title","okay")
// console.log(centerElm.hasAttribute("title"))
// centerElm.removeAttribute("class")

let input = document.getElementById("input")
let parentUl = document.getElementById("parentUl");

input.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        parentUl.innerHTML = "";
        let liCount = this.value;
        for (let i = 1; i <= liCount; i++) {

            let li = document.createElement("li");
            li.className = "list-group-item li";
            li.innerText = i;

            let icon=document.createElement("i");
            icon.className="fas fa-times";
            li.append(icon);
            icon.onclick=function(){
                this.parentNode.remove();
            }

            parentUl.append(li);
        }
        input.value=""
    }
})