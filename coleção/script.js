document.addEventListener('DOMContentLoaded', function () {
    // 1. Configuração automática para todos os produtos
    document.querySelectorAll('.produto').forEach((produto, index) => {
        const carrossel = produto.querySelector('.carrossel');
        const [prevBtn, nextBtn] = produto.querySelectorAll('.carrossel-btn');

        // ID único baseado na posição do produto
        carrossel.id = `carrossel-${index}`;

        // Navegação com efeitos
        const navigate = (dir) => {
            const images = carrossel.querySelectorAll('img');
            const currentIndex = Math.round(carrossel.scrollLeft / carrossel.offsetWidth);
            let newIndex = (currentIndex + dir + images.length) % images.length;

            carrossel.scrollTo({
                left: newIndex * carrossel.offsetWidth,
                behavior: 'smooth'
            });

            // Efeito visual momentâneo no botão
            const btn = dir === -1 ? prevBtn : nextBtn;
            btn.style.transform = 'scale(0.9)';
            setTimeout(() => btn.style.transform = 'scale(1)', 200);
        };

        prevBtn.addEventListener('click', () => navigate(-1));
        nextBtn.addEventListener('click', () => navigate(1));
    });

    // 2. Efeitos permanentes nos botões
    document.querySelectorAll('.carrossel-btn').forEach(btn => {
        btn.style.transition = 'all 0.3s ease';
        btn.addEventListener('mouseenter', () => {
            btn.style.backgroundColor = 'rgba(212, 175, 55, 0.8)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        });
    });
});