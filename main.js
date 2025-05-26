// DOMContentLoaded garante que o código rode após o HTML carregar
document.addEventListener('DOMContentLoaded', function () {
    // 1. Efeito de Scroll Suave para Links do Menu
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Para links que não são âncoras (como outras páginas)
                window.location.href = targetId;
            }
        });
    });

    // 2. Animação de Produtos ao Rolar a Página
    const productCards = document.querySelectorAll('.product-card');

    function animateCards() {
        productCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    // Configuração inicial para animação
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
    });

    // Dispara ao carregar e ao rolar
    window.addEventListener('load', animateCards);
    window.addEventListener('scroll', animateCards);

    // 3. Interação com Redes Sociais
    const socialLinks = document.querySelectorAll('.social-links a');

    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.2)';
            this.style.color = '#d4af37'; // Dourado
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.color = '#fff';
        });
    });

    // 4. Efeito no Hero Section (Opcional)
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'all 1s ease';

    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
});