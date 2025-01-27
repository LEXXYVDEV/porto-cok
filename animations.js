/*





OWNER: BY FAUZIALIFATAH
AKU PEMULAH MANA BISA KEK KALIAN

SOSMED:
YOUTUBE: https://www.youtube.com/@Fauzialifatah
SALURAN INFORMASI: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z





*/
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.2s';
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

/*





OWNER: BY FAUZIALIFATAH
AKU PEMULAH MANA BISA KEK KALIAN

SOSMED:
YOUTUBE: https://www.youtube.com/@Fauzialifatah
SALURAN INFORMASI: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z





*/

    document.querySelectorAll('.slide-in').forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });

    // Add hover animations for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
});