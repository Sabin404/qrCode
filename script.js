const inputValue = document.querySelector('#inputValue');
const img = document.querySelector('.image');
const btn = document.querySelector('.btn');
let p = document.querySelector('p');

function generateQr() {
  if (inputValue.value.length > 0) {
    p.innerHTML = "Generating..."
    setTimeout(() => {
      const value = inputValue.value.trim();
      let URL = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
      img.src = URL;
      img.classList.add('image1');
      p.innerHTML = ''
    }, 1000)

  } else {
    p.innerHTML = "Enter Value ";
    img.classList.add('image')
  }
}

btn.addEventListener('click', generateQr);
