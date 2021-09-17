const search = document.querySelector('.search');
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.onclick = () => {
    search.classList.toggle('active')
    input.focus()
}