let r = document.querySelector(':root')
let navBtns = document.querySelectorAll('.nav-btn')
let expand = false

function toggleExpand(e){
    if(!expand){
        r.style.setProperty('--header-height', '850px')
        console.log('Toggle open')
        expand = true
    }
   else  if(expand){
        r.style.setProperty('--header-height', '600px')
        console.log('Toggle closed')
        expand = false
    }
    console.log('toggleExpand',e.target.innerHTML)
    
}

function handleNavCLick(e){

    // console.log('handleNavCLick',e.target.innerHTML)
    e.preventDefault()
    toggleExpand(e)
//  if(expand){r.style.setProperty('--header-height', '900px')}
//  else{r.style.setProperty('--header-height', '600px')}
}


navBtns.forEach(btn => btn.addEventListener('click',e =>{handleNavCLick(e)}))
// navBtns.addEventListener('click',handleNavCLick)