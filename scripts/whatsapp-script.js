// enviar mensagem pelo whatsapp
function enviarMensagemWhatsApp() {
    const telefone = "5511941746618";
    
    const nomeContato = "O Brownie da Minha Mãe";
    
    const mensagem = encodeURIComponent(`Gostaria de fazer uma encomenda dos melhores brownies do mundo!`);
    
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`;
    
    window.open(linkWhatsApp, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    // seleciona TODOS os elementos com a classe "zap-button"
    const botoesWhatsApp = document.querySelectorAll('.zap-button');
    
    botoesWhatsApp.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault(); 
            enviarMensagemWhatsApp();
        });
    });
});