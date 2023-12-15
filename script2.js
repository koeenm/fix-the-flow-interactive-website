// stap 1: link de variabelen met de html of css
let helpBtn = document.querySelector('#help-button');
let closeBtns = document.querySelectorAll('.close');
let nextBtns = document.querySelectorAll('.next');
let stepGuide = document.querySelectorAll('.step-guide');

// stap 2: voeg een eventlistener toe
helpBtn.addEventListener('click', function () {
    stepGuide[0].showModal(); // Eerste dialog komt in beeld
    // De [0] staat voor de eerste dialog. Als ik er [1] zet, word de  
    // tweede dialog getoond, als ik [2] zet komt de derde in beeld etc.
});

closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', function () {
        stepGuide[index].close(); // Close the current dialog
        // [index] zorgt ervoor dat elke dialog die nu open staat 
        // gesloten kan worden, als ik er [0] in zet kan je alleen de
        // eerste dialog sluiten, met [1] alleen de tweede etc.
    });
});

nextBtns.forEach((btn, index) => {
    // Voeg een eventListener toe
    btn.addEventListener('click', function () { 
        stepGuide[2].close(); // Sluit openstaande dialog
        // Index, zodat bij alle dialogs dezelfde waarde geldt.
        // Als je [1] gebruikt, zal bij elke dialog het backdrop effect vergroten
        // En dan zal de sluitknop naar de vorige dialog gaan.
        if (index + 1 < stepGuide.length) { 
        // index + 1, want als je index + 2 schrijft, dan sluit de dialog bij 
        // dialog 4. Bij index + 2, sluit de dialog bij dialog 3 etc.
            stepGuide[index + 1].showModal(); // Laat de volgende dialog zien
        // index + 1, zodat er telkens naar de volgende dialog word gegaan
        // als je index + 2 gebruikt, gebruik je twee stappen. 
        // Dus dat betekend dat je van dialog 1 naar 3 naar 5 gaat
        }
    });
});

// DEZE CODE GA IK OPNIEUW TYPEN




