let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// Seleciona todas as imagens expansíveis
const images = document.querySelectorAll('.img-port');
// Seleciona o overlay
const overlay_img = document.querySelector('.overlay-fullscreen');

// Função para expandir ou recolher a imagem
images.forEach(image => {
    image.addEventListener('click', function (event) {
        // Verifica se a imagem já está expandida
        const isExpanded = image.classList.contains('expanded');

        // Remove a classe 'expanded' de todas as imagens
        images.forEach(img => img.classList.remove('expanded'));

        // Esconde o overlay
        overlay_img.style.display = 'none';

        // Se não estava expandida, expande a imagem clicada
        if (!isExpanded) {
            image.classList.add('expanded');
            overlay_img.style.display = 'block'; // Mostra o overlay
        }
    });
});

// Fecha a imagem ao clicar no overlay
overlay_img.addEventListener('click', function () {
    // Remove a classe 'expanded' de todas as imagens
    images.forEach(img => img.classList.remove('expanded'));
    // Esconde o overlay
    overlay_img.style.display = 'none';
});
