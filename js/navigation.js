/*





OWNER: BY FAUZIALIFATAH
AKU PEMULAH MANA BISA KEK KALIAN

SOSMED:
YOUTUBE: https://www.youtube.com/@Fauzialifatah
SALURAN INFORMASI: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z





*/
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    /*





OWNER: BY FAUZIALIFATAH
AKU PEMULAH MANA BISA KEK KALIAN

SOSMED:
YOUTUBE: https://www.youtube.com/@Fauzialifatah
SALURAN INFORMASI: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z





*/
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
});