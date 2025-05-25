// sobre.js - Efeitos Reais para a Página Sobre Nós

document.addEventListener('DOMContentLoaded', function() {
    // ===== ANIMAÇÃO DE SCROLL SUAVE =====
    const menuLinks = document.querySelectorAll('nav a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== EFEITO DE DIGITAÇÃO NO TÍTULO =====
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }

    // ===== ANIMAÇÃO DOS CARDS DE VALORES =====
    const valorCards = document.querySelectorAll('.valor-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    valorCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // ===== EFEITO PARALLAX NA SEÇÃO HISTÓRIA =====
    const historiaSection = document.querySelector('.historia');
    if (historiaSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            historiaSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }

    // ===== INTERAÇÃO COM A IMAGEM DA EQUIPE =====
    const equipeImg = document.querySelector('.equipe-content img');
    if (equipeImg) {
        equipeImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 10px 25px rgba(212, 175, 55, 0.3)';
        });
        
        equipeImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    }

    // ===== EFEITO DE "LEVITAR" NO LOGO DO FOOTER =====
    const footerLogo = document.querySelector('.footer-logo');
    if (footerLogo) {
        setInterval(() => {
            footerLogo.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                footerLogo.style.transform = 'translateY(0)';
            }, 1000);
        }, 2000);
    }
});