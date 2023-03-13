const authFrom = document.getElementById('signin__form')
const signForm = document.getElementById('signin')
const idUser = document.getElementById('user_id')
const welcomeWindow = document.getElementById('welcome')

if (localStorage.getItem('user')) {
    idUser.innerText = localStorage.getItem('user')
    welcomeWindow.classList.add('welcome_active')
    signForm.classList.remove('signin_active')
}

authFrom.addEventListener('submit', (event) => {
    event.preventDefault()

    const xhr = new XMLHttpRequest()

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')

    const formData = new FormData(authFrom)

    xhr.responseType = 'json'

    xhr.send(formData)

    xhr.addEventListener('load', (event) => {
        successStatus = xhr.response['success']
        userId = xhr.response['user_id']

        if (successStatus) {
            idUser.innerText = userId
            welcomeWindow.classList.add('welcome_active')
            signForm.classList.remove('signin_active')
            localStorage.setItem('user', userId)
        } else {
            alert('Wrong login or password!')
        }
    })
})