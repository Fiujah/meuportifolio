const modal = document.getElementById("modal");
const expandedImg = document.getElementById("expandedImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("close");
const images = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

// Função para abrir a imagem expandida
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openModal(img.src, img.alt);
    });
});

// Função para abrir o modal
function openModal(src, alt) {
    modal.style.display = "block";
    expandedImg.src = src;
    captionText.innerHTML = alt;
}

// Função para fechar o modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Navegação entre as imagens
document.getElementById("prev").onclick = function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

document.getElementById("next").onclick = function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}

function updateImage() {
    const img = images[currentIndex];
    expandedImg.src = img.src;
    captionText.innerHTML = img.alt;
}
