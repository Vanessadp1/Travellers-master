document.getElementById("comment-us").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

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
    mailMessage.classList.remove('not-visible-message');

    // Opcional: Ocultar a mensagem após alguns segundos
    setTimeout(() => {
        mailMessage.classList.add('not-visible-message');
    }, 3000);
});
