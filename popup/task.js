const adWindow = document.getElementById('subscribe-modal')
const adWindowClose = document.getElementsByClassName('modal__close')[0]

// Old solution
// console.log(localStorage.getItem('closeStatus'))
// if (!localStorage.getItem('closeStatus')) {
//     adWindow.classList.add('modal_active')
// }

// adWindowClose.addEventListener('click', event => {
//     adWindow.classList.remove('modal_active')
//     localStorage.setItem('closeStatus', true)
// })


if (!cookieGetter('closeStatus')) {
    adWindow.classList.add('modal_active')
}

adWindowClose.addEventListener('click', (event) => {
    adWindow.classList.remove('modal_active')
    cookieSetter('closeStatus', true)
    
})

function cookieSetter(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
    console.log(document.cookie)
}

function cookieGetter(name) {
    const kv = document.cookie.split('; ')
    const cookie = kv.find(v => v.startsWith(name + '='))
    if (typeof(cookie) == 'undefined') {
        return false
    } else {
        return cookie.substring(name.length + 1)
    }
}