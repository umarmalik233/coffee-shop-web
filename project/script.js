let navbar = document.querySelector('.navbar');
document .querySelector('#menu-btn').onclick =  () =>{
    navbar.classList.toggle('active');
}

navbar.classList.remove('active');{
searchForm.classList.remove('active');
 cartitem .classList.remove('active');
}

let cartitem = document.querySelector('.cart-items-container');
document .querySelector('#cart-btn').onclick =  () =>{
    cartitem .classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
        
} 


let searchForm = document.querySelector('.search-form');
document .querySelector('#search -btn').onclick =  () =>{
   searchForm .classList.toggle('active');
}
Window .onscroll = ()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
     cartitem .classList.remove('active');
}
