const darkback = document.getElementById('darkback');
const bodyId = document.getElementById('bodyId');
const headerID = document.getElementById('headerID');
const container = document.getElementById('container');
const sunback = document.getElementById('sunback');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const modefirst = localStorage.getItem('mode');


darkback.addEventListener('click', ()=>{
    let mode = localStorage.getItem('mode');
    console.log(mode);
    if (mode == null || mode == 1){
        localStorage.setItem('mode', 0)
        mode = 0;
    }else{
        localStorage.setItem('mode', 1)
        mode=1;
    }
    addDarkMode(mode);
})

const addDarkMode = (mode)=>{
    if(mode !=null){
        if (mode == 0){
            bodyId.classList.add('darkweb')
            headerID.classList.add('darkwebheader')
            container.classList.add('darkwebcontainer')
            sunback.classList.add('darksunback')
            sun.classList.add('hide')
            moon.classList.remove('hide')
    
        } else{
            bodyId.classList.remove('darkweb')
            headerID.classList.remove('darkwebheader')
            container.classList.remove('darkwebcontainer')
            sunback.classList.remove('darksunback')
            sun.classList.remove('hide')
            moon.classList.add('hide')
        }
    }
    
}

addDarkMode(modefirst);

