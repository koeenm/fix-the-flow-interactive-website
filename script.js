const helpBtn = document.querySelector('#help-button');
const closeBtn = document.querySelector('#close');

const nextBtn = document.querySelector('#next');
// const backBtn = document.getElementById('back');

const stepGuide = document.querySelector('#step-guide')
const step1 = document.querySelector("#step1");
// const step2 = document.getElementById("step2");
// const step3 = document.getElementById("step3");


helpBtn.addEventListener("click", function() {
    step1.showModal();
});

closeBtn.addEventListener("click", function() {
    step1.close();
});



