// Step 1: Start Button
document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
});

// Step 2: Yes Button
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
});

// Step 2: No Button
document.getElementById('noButton').addEventListener('click', function() {
    alert("Babashi, please say yes! 🥺💔");
});