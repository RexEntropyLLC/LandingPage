let navBtns = document.querySelectorAll('.nav-btn')
let heroLogo = document.getElementById("hero-logo")
let heroIcon= document.getElementById("hero-icon")
let modalCloseBtn = document.getElementById("modal-close-btn")
let contentWrap = document.querySelector(".modal-fx")
let r = document.querySelector(':root')

document.addEventListener("load",()=>{
    navBtns = document.querySelectorAll('.nav-btn')
    contentWrap = document.getElementById("content-wrap")
})

let expand = false
let height = window.innerHeight;

function toggleExpand(e){
    if(!expand){
        height = window.innerHeight-80;
        r.style.setProperty('--header-height',` ${height}px`)
        heroIcon.classList.toggle("hero-icon-move")
        contentWrap.classList.toggle("show")
        // modalCloseBtn.classList.toggle("show")
        heroLogo.classList.toggle("hero-logo-shink")
        console.log('Toggle open')
        expand = true
    }
    else  if(expand){
        r.style.setProperty('--header-height', '600px')
        heroIcon.classList.toggle("hero-icon-move")
        contentWrap.classList.toggle("show")
        // modalCloseBtn.classList.toggle("show")
        heroLogo.classList.toggle("hero-logo-shink")
        console.log('Toggle closed')
        expand = false 
    }
    console.log('toggleExpand',e.target.innerHTML) 
}
function fillFrame(tag){
    // document.getElementById('contentFrame').src = './assets/loading-bar.gif';
    document.getElementById('content-header').innerHTML =`<h2>${tag}</h2>
     <div id="modal-close-btn" >
                    <img src="./assets/arrow-circle-down.svg" alt="close icon">
                </div> 
    `;
}
function handleNavCLick(e){
    // console.log('handleNavCLick',e.target.innerHTML)
    let tag = e.target.innerHTML
    e.preventDefault()
    if(!expand){
        toggleExpand(e)
        
    }
    fillFrame(tag)
//  if(expand){r.style.setProperty('--header-height', '900px')}
//  else{r.style.setProperty('--header-height', '600px')}
}

    
navBtns.forEach(btn => btn.addEventListener('click',e =>{handleNavCLick(e)}))
modalCloseBtn.addEventListener('click',e =>{toggleExpand(e)})
    // navBtns.addEventListener('click',handleNavCLick)

