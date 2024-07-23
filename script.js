document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generateButton");
    const backButton = document.getElementById("backButton");
    const phraseDisplay = document.getElementById("phraseDisplay");
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");

    
    
    const phrases = [
        "I'd worship the very ground you walk on",
        "Something in the way she moves<br>attracts me like no other lover",
        "君のことを愛している",
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
        "You are beautiful Adrika<br>You make the clouds look dreamier<br>You make my heart flutter<br>I'm pretty sure the stars shine brighter when we are together"
    ];

    generateButton.addEventListener("click", () => {
        if (phrases.length > 0) {
            const randomIndex = Math.floor(Math.random() * phrases.length);
            phraseDisplay.innerHTML = phrases[randomIndex];
            //phraseDisplay.innerHTML = "In the midst of the crowds<br>In the shapes in the clouds<br>I don't see nobody but you<br>In my rose-tinted dreams<br>Wrinkled silks of my sheets<br>I don't see nobody but you";
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
