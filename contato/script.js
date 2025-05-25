document.addEventListener('DOMContentLoaded', function() {
    // 1. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');
        
        pergunta.addEventListener('click', () => {
            // Fecha outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('ativo');
                }
            });
            
            // Abre/fecha o item atual
            item.classList.toggle('ativo');
        });
    });

    // 2. Formulário (envio simulado)
    const form = document.getElementById('contatoForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada! Nossa corte responderá em breve.');
        form.reset();
    });

    // 3. Animação de digitação
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
});