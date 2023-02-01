let r = document.querySelector(':root')
let navBtns = document.querySelectorAll('li')
let expand = false

function toggleExpand(){
    if(!expand){expand = true}
    if(expand){expand = false}
    console.log('toggleExpand')
    
}

function handleNavCLick(){
    toggleExpand()
 if(expand){r.style.setProperty('--header-height', '900px')}
//  else{r.style.setProperty('--header-height', '600px')}
}


navBtns.addEventListener('click',handleNavCLick)