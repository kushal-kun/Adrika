document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generateButton");
    const backButton = document.getElementById("backButton");
    const phraseDisplay = document.getElementById("phraseDisplay");
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");

    
    
    const phrases = [
        "I'd worship the very ground you walk on",
        "Something in the way she moves<br>attracts me like no other lover",
        "I love you so much adrika you have no idea",
        "You are the object of my every daydream",
        "You were beautiful from afar and you only get more and more so the closer I get",
        "Every moment I spend with you is worth the weeks I endure your absence",
        "Even if the universe is deterministic as long is it converges in us being together I have no qualms about it",
        "Wild Card!!<br>If this is your first wild card of the day you can tell me to do something and I can't say no",
        "I think we could do it if we tried<br>if only to say you're mine<br>Adrika you know you and I<br>shouldn't feel like a crime",
        "You have given me back the sense of wonder that I though I had lost forever",
        "You deserve all the bows that the world has to offer",
        "You might think that it's just a joke that I want you to murder me but I'll have you know that I really won't mind if you actually do",
        "In the midst of the crowds<br>In the shapes in the clouds<br>I don't see nobody but you<br>In my rose-tinted dreams<br>Wrinkled silks of my sheets<br>I don't see nobody but you",
        "I did not know someone stressing you out could feel so nice before I met you",
        "Adrika you are all I need",
        "Don't break my heart please, I know I'm a dude but it's still a very fragile thing",
        "Some of these morning I can't breathe properly unless I talk to you",
        "If angels exist I'm sure they look just like you",
        "I might look normal but every moment I'm consumed by the urge to hold you in my arms",
        "Probably nothing will fix me but being with you makes me stop looking at myself like a problem that needs fixing",
        "To wake up next to you<br>to kiss you the first thing in the morning<br>will make my life complete",
        "This world is a chaotic unfeeling place you are my one ray of sunshine in it",
        "I don't want an eternity I just want one lifetime with you",
        "It's strange how you can make my heart forget to beat by just smiling at me",
        "You don't know how glad I am to be stuck with you forever",
        "Wild Card!!<br>Even if this is not your first wild card of the day send me a picture of you",
        "You are beautiful Adrika<br>You make the clouds look dreamier<br>You make my heart flutter<br>I'm pretty sure the stars shine brighter when we are together",
        "Ever since I met you, I've felt abandoned without your nearness; your nearness is all I ever dream of, the only thing",
        "Falling in love with you was the best mistake I ever made and I'd choose to make it over and over again",
        "Tell me your secrets, your feelings, your most trivial of thoughts because they are as important as life itself to me",
        "You should compliment me sometimes too dude",
        "What it means to have lived I do not know but being with you has made me understand what it means to have loved",
        "Your precious smiles man I've lost sleep over them",
        "One word from you and I will jump off of this ledge I'm on baby<br>tell me 'don't' so I can crawl back in",
        "These days I wonder if the skies are shedding tears of my yearning for you",
        "Eros' arrows could not have bewitched me how your eyes have pierced my heart",
        "You are my blissful torment, the most beautiful oxymoron",
        "Love me and leave me not",
        "\"I will take care of you.\"<br>\"It's rotten work\"<br>\"Not for me. Not with you.\"",
        "I'm infatuated with you quite wholly smitten, these are words I've only ever uttered for you",
        "Stolen gazes and blatant excuses sometimes love is as simple as that",
        "The world is too homogenous and too chaotic at the same time. Quite like you actually since you are my whole world too",
        "I think I want you more than want<br>I know I need you more than need<br>I want to hold you more than hold<br>Everytime you look at me",
        "Secrets that I held in my heart<br>are harder to hide than I thought<br>baby I just wanna be yours<br>I wanna be yours",
        "I adore you",
        "You're the one I've been waiting for",
        "Wild card!! Call me and as soon as I pick up say \"I love you\" and hang up",
        "Wild card!! Tell me something that has been on your mind or you wanted to talk to me about but you haven't been able to for some reason",
        "Some days I wonder if I deserve the happiness of your company",
        "I love your optimism you inspire me to have bold aspirations of my own",
        ""
    ];

    generateButton.addEventListener("click", () => {
        if (phrases.length > 0) {
            const randomIndex = Math.floor(Math.random() * (phrases.length+1));
            phraseDisplay.innerHTML = phrases[randomIndex];
            //phraseDisplay.innerHTML = "\"I will take care of you.\"<br>\"It's rotten work\"<br>\"Not for me. Not with you.\"";
            console.log('Random phrase:', phrases[randomIndex]);

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