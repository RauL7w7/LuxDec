const content = document.querySelector('.content-login');
const btnLogin = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.addEventListener('click',()=>{
    content.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    content.classList.remove('active');
})

btnLogin.addEventListener('click',()=>{
    content.classList.add('active-popup'); 
});

iconClose.addEventListener('click',()=>{
    content.classList.remove('active-popup'); 
    content.classList.remove('active'); 
});