document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const clientName = document.getElementById("clientName").value;
    const greeting = document.getElementById("greeting").value;
    const gender = document.getElementById("gender").value; // Obtém o gênero
    const description = document.getElementById("description").value;
    const contactMethod = document.getElementById("contactMethod").value;

    // Observações internas
    const contact = document.getElementById("contact").value;
    const host = document.getElementById("host").value;
    const serviceLink = document.getElementById("serviceLink").value;

    // Determina a saudação com base na seleção de gênero
    const salutation = gender === "feminino" ? "Prezada" : "Prezado";

    // Gera a mensagem
    const message = `
${salutation} ${clientName}, ${greeting}!

Conforme conversamos pelo telefone, o seu chamado foi registrado e a sua solicitação está sendo atendida por um de nossos analistas, em breve retornaremos um feedback. Segue abaixo a descrição de sua solicitação:

Descrição da Solicitação: ${description} 
 
Conforme acordamos, qualquer necessidade de contato sobre o andamento do seu chamado, estaremos comunicando através do ${contactMethod}. Por favor, se atente para o recebimento de notificações e para a formalização do encerramento do seu chamado.

Após o encerramento de seu chamado, será encaminhado para você uma pesquisa de satisfação relacionado a este atendimento, peço que, por gentileza, participe desta pesquisa. Sua opinião é muito importante para nós!

Qualquer dúvida ou necessidade estamos à disposição!

E-mail: suporte@futurotec.com.br
Portal de Chamados: https://futurotec.desk.ms/?LoginPortal
Telefone Suporte: (31) 3801-6805
Ramal Suporte: 9999

--- Observações Internas ---
Contato: ${contact}
Host: ${host}
Link do Atendimento: ${serviceLink}
    `;

    // Exibe a mensagem gerada
    document.getElementById("generatedMessage").textContent = message;
});

// Função para copiar a mensagem gerada utilizando a API moderna de Clipboard
document.getElementById("copyButton").addEventListener("click", function() {
    const message = document.getElementById("generatedMessage").textContent;

    // Usa a API de Clipboard para copiar o conteúdo diretamente
    navigator.clipboard.writeText(message)
        .then(() => {
            // Alerta de confirmação após a cópia bem-sucedida
            alert("Mensagem copiada para a área de transferência!");
        })
        .catch(err => {
            // Caso ocorra algum erro durante a cópia
            alert("Erro ao copiar a mensagem: " + err);
        });
});




