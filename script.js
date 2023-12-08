const helpBtn = document.getElementById('help-button');
const closeBtn = document.getElementById('close');

const nextBtn = document.getElementById('next');
const backBtn = document.getElementById('back');

const stepGuide = document.getElementById('step-guide')
const step1 = document.getElementById("step1");
// const step2 = document.getElementById("step2");
// const step3 = document.getElementById("step3");


helpBtn.addEventListener("click", function() {
    step1.showModal();
});

closeBtn.addEventListener("click", function() {
    step1.close();
});

nextBtn.addEventListener("click", function() {
    step2.showModal();
});

