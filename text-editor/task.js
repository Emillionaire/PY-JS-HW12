const textArea = document.getElementById('editor')

if (localStorage.getItem('text')) {
    textArea.value = localStorage.getItem('text')
}

textArea.addEventListener('keyup', event => {
    localStorage.setItem('text', textArea.value)
})