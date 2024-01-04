const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalWrapperCloseBtn = document.querySelector('.modal .close')
const modalWrapperSpan = document.querySelector('.modal span')

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result =  IMC(weight, height)
    const message = `Seu Imc é de ${result}`

    modalWrapperSpan.innerText = message
    modalWrapper.classList.add('open')
}

modalWrapperCloseBtn.onclick = () => {
    modalWrapper.classList.remove('open')
}

function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}