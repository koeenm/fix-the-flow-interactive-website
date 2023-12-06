const hulpKnop = document.getElementById('hulpknop');
const closeBtn = document.getElementById('close')

const stappenPlan = document.getElementById('stappenplan')
const dialog = document.querySelector("dialog");


hulpknop.addEventListener("click", function() {
    dialog.showModal();
  });

  closeBtn.addEventListener("click", function() {
    dialog.close();
  });