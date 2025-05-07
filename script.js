// Animação de fade-in na entrada
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    container.style.opacity = 0;
    container.style.transform = "translateY(20px)";
    setTimeout(() => {
      container.style.transition = "all 1s ease";
      container.style.opacity = 1;
      container.style.transform = "translateY(0)";
    }, 100);
    
    // Mensagem de boas-vindas
    const welcome = document.createElement("div");
    welcome.textContent = "Bem-vindo ao meu perfil musical 🎷";
    welcome.className = "welcome";
    document.body.appendChild(welcome);
    setTimeout(() => welcome.remove(), 3000);
  });
  