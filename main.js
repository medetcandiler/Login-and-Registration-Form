let loginDOM=document.querySelector('#login')
let registerDOM=document.querySelector('#register')
let loginBtn= document.querySelector('#loginBtn')
let btnColor= document.querySelector('#btn')

loginBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    registerDOM.style.display= 'none'
    loginBtn.style.color='white'
    loginBtn.style.transition='.5s'
    registerBtn.classList.remove('white-text')
    loginDOM.classList.remove('d-none')
    btnColor.style.left='0px'
})

registerBtn.addEventListener('click' , (e)=> {
    e.preventDefault();
    registerDOM.style.display = 'block'
    loginBtn.style.color='black'
    registerBtn.classList.add('white-text')
    loginDOM.classList.add('d-none')
    btnColor.style.left='110px'
})