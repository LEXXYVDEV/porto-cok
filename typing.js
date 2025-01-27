class TypingEffect {
    constructor(element, words, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.words = words;
        this.typeSpeed = typeSpeed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.currentWord = 0;
        this.isDeleting = false;
        this.text = '';
        this.start();
    }

    type() {
        const currentWord = this.words[this.currentWord];
        
        if (this.isDeleting) {
            this.text = currentWord.substring(0, this.text.length - 1);
        } else {
            this.text = currentWord.substring(0, this.text.length + 1);
        }

        this.element.textContent = this.text;

        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        if (!this.isDeleting && this.text === currentWord) {
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === '') {
            this.isDeleting = false;
            this.currentWord = (this.currentWord + 1) % this.words.length;
        }

        setTimeout(() => this.type(), typeSpeed);
    }

    start() {
        this.type();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.typing-text');
    const words = [
        'Fauzialifatah',
        'Yt : Fauzialifatah',
        'Credate By Fauzi',
        'Fauzialifatah - DEV'
    ];
    
    new TypingEffect(element, words);
});

/*





OWNER: BY FAUZIALIFATAH
AKU PEMULAH MANA BISA KEK KALIAN

SOSMED:
YOUTUBE: https://www.youtube.com/@Fauzialifatah
SALURAN INFORMASI: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z





*/