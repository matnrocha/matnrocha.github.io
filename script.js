function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function copyTextContactEmail(type, message) {
  var textToCopy = "";
  if(type == "email"){
    textToCopy = "mateusanroc@gmail.com";
  } else if(type == "telefone"){
    textToCopy = "81998355099";
  }
  
  var tempInput = document.createElement("input");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  showToast(message);
}

function showToast(message) {
  var toast = document.getElementById("toast");
  toast.innerText = message;
  toast.style.display = "block";
  setTimeout(function() {
      toast.style.display = "none";
  }, 3000); // Esconde o toast após 3 segundos
}
