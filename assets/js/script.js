const card = document.querySelector('#card')
const btnOpenForm = document.querySelector('#btnOpenForm')
const form = document.querySelector('#formCard')
const cardNumber = document.querySelector('#card .number')
const cardHolder = document.querySelector('#card .name')
const logo = document.querySelector('#logo')
const signature = document.querySelector('#card .signature p')
const expirationMonth = document.querySelector('#card .month')
const expirationYear = document.querySelector('#card .year')
const cvv = document.querySelector('#card .cvv')


const showFrontCard = () => {
    if (card.classList.contains('active')) {
        card.classList.remove('active')
    }
}

card.addEventListener('click', () => {
    card.classList.toggle('active')
})

btnOpenForm.addEventListener('click', () => {
    btnOpenForm.classList.toggle('active')
    form.classList.toggle('active')
})

for (let i = 1; i <= 12; i++){
    let option = document.createElement('option')
    option.value = i
    option.innerText = i
    form.selectMonth.appendChild(option)
}

const year = new Date().getFullYear()
for(let i = year; i <= year + 8; i++) {
    let option = document.createElement('option')
    option.value = i
    option.innerText = i
    form.selectYear.appendChild(option)
}

form.inputNumber.addEventListener('keyup', (e) => {
    let inputValue =  e.target.value

    form.inputNumber.value = inputValue
    .replace(/\s/g, '')
    .replace(/\D/g, '')
    .replace(/([0-9]{4})/g, "$1 ")
    .trim()

    cardNumber.textContent = inputValue

    if(inputValue == '') {
        cardNumber.textContent = '#### #### #### ####'

        logo.innerHTML = ''
    }

    if (inputValue[0] == 4) {
        logo.innerHTML = ''
        const img = document.createElement('img')
        img.src = 'img/logo/visa.png'
        logo.appendChild(img)
    } else if(inputValue[0] == 5){
        logo.innerHTML = ''
        const img = document.createElement('img')
        img.src = 'img/logo/mastercard.png'
        logo.appendChild(img)
    }

    showFrontCard()
})

form.inputName.addEventListener('keyup', (e) =>{
    let inputValue = e.target.value

    form.inputName.value = inputValue.replace(/[0-9]/g, '')
    cardHolder.textContent = inputValue
    signature.textContent = inputValue

    if (inputValue == '') {
        cardHolder.textContent = 'John Doe'
    }

    showFrontCard()
})

form.selectMonth.addEventListener('change', (e) =>{
    expirationMonth.textContent = e.target.value
    showFrontCard()
})

form.selectYear.addEventListener('change', (e) =>{
    expirationYear.textContent = e.target.value.slice(2)
    showFrontCard()
})

form.inputCVV.addEventListener('keyup', () =>{
    if(!card.classList.contains('active')) {
        card.classList.toggle('active')
    }
        form.inputCVV.value = form.inputCVV.value
        //elina espaços
        .replace(/\s/g, '')
        //elimina letras
        .replace(/\D/g, '')

        cvv.textContent = form.inputCVV.value
})