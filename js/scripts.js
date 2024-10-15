document.getElementById("comment-us").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    // Verifica se os campos estão preenchidos
    if (name && message) {
        // Cria um novo comentário
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<strong>${name}:</strong> <p>${message}</p>`;

        // Adiciona o novo comentário à seção de comentários
        const commentSection = document.getElementById("comment-section");
        commentSection.appendChild(newComment);

        // Limpa o formulário
        this.reset();

        // Mostra a mensagem de sucesso
        const mailMessage = document.querySelector('.mail-message');
        mailMessage.style.display = "block"; // Exibe a mensagem de sucesso

        // Ocultar a mensagem após alguns segundos
        setTimeout(() => {
            mailMessage.style.display = "none"; // Esconde a mensagem de sucesso
        }, 3000);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
