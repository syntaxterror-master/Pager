let buttonContainer = document.querySelector('.buttons')
let inputEl = document.getElementById('input-el')
const resetBtn = document.getElementById('reset-btn')
const sendBtn = document.getElementById('send-btn')
let screenDisplay = document.getElementById('screen-display')
let audio = new Audio('./assets/erro.mp3');

function getNumbers(e){
  if (e.target.tagName === "BUTTON"){
    inputEl.textContent += e.target.value
  }
}

buttonContainer.addEventListener('click', getNumbers);

sendBtn.addEventListener('click', function(){
setTimeout(() => {
  audio.play()
  screenDisplay.textContent += inputEl.textContent
  inputEl.textContent = " "
}, 2000);

  })


resetBtn.addEventListener('click', function(){
  screenDisplay.textContent = " "
})