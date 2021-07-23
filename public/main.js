let mySwiper  = document.querySelector('.mySwiper ')
let one = mySwiper.children[3]
let mainTarget = one.children
let cursor = document.querySelector('.cursor')
let cursorLazy = document.querySelector('.cursor-lazy')
let getLinks = document.querySelectorAll('.hov')
for (const link of getLinks) {
    link.addEventListener('mouseover',function(){
        cursor.style.width = 10 + "px"
        cursor.style.height = 10 + "px"
        cursorLazy.style.width = 20 + "px"
        cursorLazy.style.height = 20 + "px"
        
    })
    link.addEventListener('mouseout',function(){
        cursor.style.width = 20 + "px"
        cursor.style.height = 20 + "px"
        cursorLazy.style.width = 40 + "px"
        cursorLazy.style.height = 40 + "px"
    })
}
for (const iterator of mainTarget){
    iterator.style.background = '#06FF6B' ;
    iterator.style.cursor = 'none'
} 

one.addEventListener('mouseover',function(){
    cursor.style.width = 10 + "px"
    cursor.style.height = 10 + "px"
    cursorLazy.style.width = 20 + "px"
    cursorLazy.style.height = 20 + "px"
})
one.addEventListener('mouseout',function(){
    cursor.style.width = 20 + "px"
    cursor.style.height = 20 + "px"
    cursorLazy.style.width = 40 + "px"
    cursorLazy.style.height = 40 + "px"
})
'use strict';
(function(){
    let links = document.querySelector('a')
    let getClientWidth = document.body.clientWidth
    let editCursor = function editCursor(event){
        if(event.clientX < getClientWidth - 25){
            cursor.style.left = event.clientX + window.scrollX + "px"
            cursorLazy.style.left = event.clientX + window.scrollX + "px"
        }
            cursor.style.top = event.clientY + window.scrollY + "px"
            cursorLazy.style.top = event.clientY + window.scrollY + "px"
            
    }
    window.addEventListener('mousemove',editCursor)

})()
    
document.addEventListener('mousedown',function(e){
    let div  = document.createElement('div')
    document.body.append(div)
    div.classList.add('newElement')
    cursor.style.background = '#06FF6B'
    div.style.top = e.clientY + window.scrollY +"px"
    div.style.left = e.clientX + window.scrollX +"px"
    setTimeout(()=>{
        div.remove()
    },1000)
})

document.addEventListener('mouseup',()=>{
    cursor.style.background = 'rgb(173, 173, 173)';
})




