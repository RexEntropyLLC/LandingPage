let navBtns = document.querySelectorAll('.nav-btn')
    let contentWrap = document.getElementById("content-wrap")
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
            contentWrap.classList.toggle("show")
            console.log('Toggle open')
            expand = true
        }
        else  if(expand){
            r.style.setProperty('--header-height', '600px')
            contentWrap.classList.toggle("show")
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

