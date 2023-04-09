//banner
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);



const form = document.querySelector('form');
const nameInput = document.querySelector('#name');

form.addEventListener('submit', (event) => {
  if (nameInput.value === '') {
    event.preventDefault();
    alert('Vui lòng nhập họ và tên');
  }
});

const phoneInput = document.querySelector('#phone');

form.addEventListener('submit', (event) => {
  const phoneRegex = /^0\d{9}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    event.preventDefault();
    alert('Số điện thoại không hợp lệ');
  }
});
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(emailInput.value)) {
    event.preventDefault();
    alert('Email không hợp lệ');
  }
});

form.addEventListener('submit', (event) => {
  if (phoneInput.value !== '' && emailInput.value === '') {
    event.preventDefault();
  }
});
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}