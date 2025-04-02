const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const overlay = document.getElementById("overlay");
const fireworks = document.getElementById("fireworks");

noBtn.addEventListener("mouseover", () => {
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;
    
    const newX = Math.floor(Math.random() * maxWidth);
    const newY = Math.floor(Math.random() * maxHeight);
    
    noBtn.style.left = ${newX}px;
    noBtn.style.top = ${newY}px;
});

yesBtn.addEventListener("click", () => {
    // Escurece a tela
    overlay.style.opacity = 1;
    
    setTimeout(() => {
        // Agradece o convite
        alert("Muito obrigado! Estou muito ansioso para te ver! ❤");
        
        // Exibe fogos de artifício
        fireworks.style.display = 'block';
        fireworks.innerHTML = "🎆🎇🎆🎇🎆";

        setTimeout(() => {
            fireworks.style.display = 'none';  // Esconde fogos após 2 segundos
        }, 2000);
    }, 1000);  // Delay de 1 segundo
});
