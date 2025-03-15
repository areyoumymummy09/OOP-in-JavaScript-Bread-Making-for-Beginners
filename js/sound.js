export class CapybaraSoundButton {
    constructor(buttonText, iconUrl, audioUrl, containerSelector) {
        this.buttonText = buttonText;
        this.iconUrl = iconUrl;
        this.audioUrl = audioUrl;
        this.containerSelector = containerSelector; // Save the selector for debugging
        this.container = document.querySelector(containerSelector);
        this.audio = new Audio(this.audioUrl);
    }

    render() {
        const button = document.createElement('button');
        button.classList.add('hear-capybara-button');

        button.innerHTML = `
            ${this.buttonText} 
            <img src="${this.iconUrl}" alt="Sound Icon" class="sound-icon">
        `;

        // On Click to Play Sound
        button.addEventListener('click', () => this.playSound());

        // Append the button to the container
        if (this.container) {
            this.container.appendChild(button);
        } else {
            console.warn(`No container found with selector ${this.containerSelector}`);
        }
    }

    playSound() {
        this.audio.play();
    }
}
