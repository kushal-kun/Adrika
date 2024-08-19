document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generateButton");
    const backButton = document.getElementById("backButton");
    const phraseDisplay = document.getElementById("phraseDisplay");
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");

    fetch('phrases.json')
    .then(response => response.json())
    .then(data => {
        phrases = data;
        console.log('Phrases loaded:', phrases);
    })
    .catch(error => {
        console.error('Error loading phrases:', error);
    });

    function getRandomInt(max){
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0]%max;
    }

    generateButton.addEventListener("click", () => {
        if (phrases.length > 0) {
            const randomIndex = getRandomInt(phrases.length+1);
            phraseDisplay.innerHTML = phrases[randomIndex];
            phraseDisplay.innerHTML = "<font color=\"red\">I love you<br>I love you<br>I love you<br>I love you<br>I love you<br>I love you<br>I love you<br>I love you<br>I love you<br>I love you<br>I love you</font>";
            //console.log('Random phrase:', phrases[randomIndex]);
            console.log(randomIndex-1)

            // Change background image
            document.body.style.background = `url('lbg3.jpg') no-repeat center center fixed`;
            document.body.style.backgroundSize = 'cover';

            // Hide the original container and show the new one
            container1.classList.add('hidden');
            container2.classList.remove('hidden');
        } else {
            phraseDisplay.textContent = "No phrases available.";
            console.log('No phrases available');
        }
    });

    backButton.addEventListener("click", () => {
        // Change back to original background image
        document.body.style.background = `url('bg4.jpg') no-repeat center center fixed`;
        document.body.style.backgroundSize = 'cover';

        // Hide the new container and show the original one
        container2.classList.add('hidden');
        container1.classList.remove('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');

    // Check if audio is already playing (for subsequent interactions)
    function playAudio() {
        if (audio.paused) {
            audio.play().catch(function(error) {
                console.log('Audio play was prevented:', error);
            });
        }
    }

    // Listen for any user interaction to start playing audio
    document.addEventListener('click', playAudio, { once: true });
    document.addEventListener('touchstart', playAudio, { once: true });
});