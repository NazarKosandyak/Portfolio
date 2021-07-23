let mySwiper  = document.querySelector('.mySwiper ')
let one = mySwiper.children[3]
let mainTarget = one.children
for (const iterator of mainTarget) iterator.style.background = '#06FF6B'


    let cursor = document.querySelector('.cursor')
    let cursorLazy = document.querySelector('.cursor-lazy')
    let links = document.querySelector('a')

    let editCursor = function editCursor(event){
        
        cursor.style.left = event.clientX + window.scrollX + "px"
        cursor.style.top = event.clientY + window.scrollY + "px"
        cursorLazy.style.left = event.clientX + window.scrollX + "px"
        cursorLazy.style.top = event.clientY + window.scrollY + "px"
        console.log(event);
    }
    
window.addEventListener('mousemove',editCursor)
window.addEventListener('scroll',function(){
    
})



