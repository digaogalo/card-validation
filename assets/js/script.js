const card = document.querySelector('#card')
const btnOpenForm = document.querySelector('#btnOpenForm')
const form = document.querySelector('#formCard')

card.addEventListener('click', () => {
    card.classList.toggle('active')
})

btnOpenForm.addEventListener('click', () => {
    btnOpenForm.classList.toggle('active')
    form.classList.toggle('active')
})
