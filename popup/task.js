const adWindow = document.getElementById('subscribe-modal')
const adWindowClose = document.getElementsByClassName('modal__close')[0]

console.log(localStorage.getItem('closeStatus'))
if (!localStorage.getItem('closeStatus')) {
    adWindow.classList.add('modal_active')
}

adWindowClose.addEventListener('click', event => {
    adWindow.classList.remove('modal_active')
    localStorage.setItem('closeStatus', true)
})