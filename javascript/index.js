let icon=document.querySelector('.togller');
let menu=document.querySelector('ul');

icon.addEventListener('click' , fun1);

function fun1(){
    if(menu.style.transform==="translateX(220px)"){
        menu.style.transition="all .2s"
        menu.style.transform="translateX(0px)"
    }
    else{
        menu.style.transform="translateX(220px)"
        menu.style.transition="all .2s"
    }
}