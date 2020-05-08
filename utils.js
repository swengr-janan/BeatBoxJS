/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(audioSrc){      //tumatanggap sya ng parameter galing sa object
        this.audio = new Audio(audioSrc);
    }

    play = () => {
        this.audio.currentTime = 0; //reset the audio and play it again when pressed again, para di na mag antay matapos yung audio para ma click ulit yung btn
        this.audio.play();
    }

}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        this.setButtonColorInHTML();
        this.setATransitionEndListener();
    }

    setATransitionEndListener = () => {
        this.element.addEventListener('transitionend', () => {
            this.deselect();
        })
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 30px 0px ${this.color}`; // ! horizontalChange, verticalChange, blur, spread, color
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = 'transparent'; // ! default value
        this.element.style.boxShadow = `none`; // ! default value
    }
}