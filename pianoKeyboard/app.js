// function to play audio with corresponding position
const audioPlay = (pos) => () => {

    const currentAudio = new Audio(`./audio/key-${pos + 1}.mp3`);
    currentAudio.play();
};

// function containing functionality of piano
const pianokeyboard = () => {

    const buttonsArray = document.querySelectorAll('a');

    // Iterating over array to find audio corresponding to it
    buttonsArray.forEach((button, pos) => 
    {
        button.addEventListener('click', audioPlay(pos));
    });
};

// calling pianoKeyboard function
pianokeyboard();