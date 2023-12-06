const helpBtn = document.getElementById('help-button');
const closeBtn = document.getElementById('close');

const nextBtn = document.getElementById('next');
const backBtn = document.getElementById('back')

const stepGuide = document.getElementById('step-guide')
const dialog = document.querySelector("dialog");


helpBtn.addEventListener("click", function() {
    dialog.showModal();
  });

  closeBtn.addEventListener("click", function() {
    dialog.close();
  });