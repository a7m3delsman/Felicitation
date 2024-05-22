
const images = ["images/image  (1).png", "images/image  (5).png", "images/image  (2).png" ,"images/image  (4).png","images/image  (3).png"]; // قائمة الصور
const imgElement = document.getElementById("image");
let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // التبديل إلى الصورة التالية بعد كل ثانية
    imgElement.src = images[currentIndex]; // تحديث مصدر الصورة
}, 3000); 
function nohideButton(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
     
    button.style.display = 'inline-block';

  }
}
function hideButton(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
     
    button.style.display = 'none';

  } 
}
function hideInput() {
  var Input= document.getElementById("senderName");
  if (Input) {
     
    Input.style.display = 'none';

  } 
}
function showLoading() {
  var loading = document.getElementById("loading");
  loading.style.display = "block"; // عند النقر يتم عرض علامة التحميل

  setTimeout(function() {
      loading.style.display = "none";
      nohideButton("send_to_whatsapp");
       // بعد فترة من الزمن يتم إخفاء علامة التحميل
      // هنا يمكنك عرض أي عنصر آخر بعد إخفاء علامة التحميل
  }, 2000); 
 
}
var audio = new Audio('sounds/button-click.mp3');
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.getElementById('me');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0%';
}
function close(){
    mainMenu.style.top = '-150%';
    return;
}

document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.getElementById('senderName');
  const submitButton = document.getElementById('submit');

  function toggleButtonState() {
      if (inputField.value.trim() === '') {
          submitButton.disabled = true;
          submitButton.style.cursor ="not-allowed";
          submitButton.style.color ="rgb(0, 165, 165)";
          submitButton.style.border =" 2px solid rgb(0, 165, 165)";
          submitButton.style.background ="#000000d2";
      } else {
          submitButton.disabled = false;
          submitButton.style.cursor ="pointer";
          submitButton.style.color ="rgb(0, 208, 245)";
          submitButton.style.border ="2px solid rgb(0, 208, 245)";
          submitButton.style.background ="#000";
      }
  }

 
  toggleButtonState();


  inputField.addEventListener('input', toggleButtonState);
});
const form = document.getElementById("greetingForm");
const senderNameInput = document.getElementById("senderName");
const senderDisplay = document.getElementById("senderDisplay");
const senderDisplay_2 = document.getElementById("senderDisplay_2");
const submitButton = document.getElementById("submit");
form.addEventListener("submit", function(event) {
  event.preventDefault();
 
  const senderName = senderNameInput.value;
  hideButton("submit");
  hideInput();
  showLoading();
  window.history.pushState({}, "", `?sender=${encodeURIComponent(senderName)}`);
  updateSenderDisplay();
  
});

function getSenderNameFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("sender") || "User Name";
}

function updateSenderDisplay() {
  const sender = getSenderNameFromURL();
  senderDisplay.textContent = `${sender}`;
  senderDisplay_2.textContent = `${sender}`;
 
}

updateSenderDisplay();
function sendMessage() {
      
  var websiteURL = window.location.href;
  var message = " 😊 لقد ارسلت لك مفاجاة 🤩🤩 افتحها مرة واحدة من هنا :   " + websiteURL;
  var whatsappURL = "https://api.whatsapp.com/send?phone="  + "&text=" + encodeURIComponent(message);

  window.open(whatsappURL);
}
document.querySelectorAll('.door').forEach(door => {
door.addEventListener('click', function() {
  playClickSound();
  document.getElementById('leftDoor').classList.add('open-left');
  document.getElementById('rightDoor').classList.add('open-right');
  document.getElementById('handle-text-1').style.display ="none";
  document.getElementById('handle-text-2').style.display ="none";
  setTimeout(() => {
    document.querySelector('.door-container').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('backgroundMusic').play();
  }, 1800); // مدة تحريك الأبواب
});
});

function playBackgroundMusic() {
const music = document.getElementById('backgroundMusic');
if (music.paused) {
  music.play();
}
}