document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const clientName = document.getElementById("clientName").value;
    const greeting = document.getElementById("greeting").value;
    const gender = document.getElementById("gender").value; // Obtém o gênero
    const description = document.getElementById("description").value;
    const contactMethod = document.getElementById("contactMethod").value;
   

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
    `;

    // Exibe a mensagem gerada
    document.getElementById("generatedMessage").textContent = message;
});

// Função para copiar a mensagem gerada
document.getElementById("copyButton").addEventListener("click", function() {
    const message = document.getElementById("generatedMessage").textContent;

    // Cria um elemento de textarea temporário para copiar o texto
    const textarea = document.createElement("textarea");
    textarea.value = message;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // Alerta de confirmação
    alert("Mensagem copiada para a área de transferência!");
});