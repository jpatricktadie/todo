


function newitem(t){
    const item=document.createElement("div")
    item.setAttribute("class", "item")
    const text=document.createElement("div")
    text.setAttribute("class", "text")
    const close=document.createElement("div")
    close.setAttribute("class", "close")
    text.innerHTML=t
    item.appendChild(text)
    item.appendChild(close)
    return item
}



document.addEventListener("click", (event)=>{
    if(event.target.getAttribute("class")=="close"){
        event.target.parentNode.remove()
    }
    else if(event.target.getAttribute("class")=="add_btn"){
        const str=document.getElementsByClassName("input")[0].value
        if(str.length!=0){
            const item=newitem(str)
            document.getElementsByClassName("list")[0].appendChild(item)
        }
    }
})

