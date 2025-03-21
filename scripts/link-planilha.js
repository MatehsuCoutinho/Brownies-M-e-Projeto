document.addEventListener("DOMContentLoaded", function() {
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGh7LHkdGV3iblRVntFCPhd4pP-YehZkk2v365nUhB5FdcCVrrazajz_fhnfHWn7dZ9Kp4lEmoCVvr/pubhtml';

    function updateLinks() {
        fetch(sheetUrl)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(data, 'text/html');
                const rows = htmlDoc.querySelectorAll('table tr');

                // Verifica se há linhas suficientes
                if (rows.length < 6) {
                    console.error('A planilha não tem linhas suficientes.');
                    return;
                }

                const links = {
                    ifood: rows[1].querySelectorAll('td')[1]?.textContent.trim(), // Linha 2, Coluna B
                    yooga: rows[2].querySelectorAll('td')[1]?.textContent.trim(), // Linha 3, Coluna B
                    instagram: rows[3].querySelectorAll('td')[1]?.textContent.trim(), // Linha 4, Coluna B
                    facebook: rows[4].querySelectorAll('td')[1]?.textContent.trim(), // Linha 5, Coluna B
                    encomendas: rows[5].querySelectorAll('td')[1]?.textContent.trim() // Linha 6, Coluna B
                };

                console.log('Links carregados:', links);

                // Atualizando todos os links do ifood
                if (links.ifood) {
                    document.querySelectorAll('a[href*="ifood"]').forEach(link => {
                        link.href = links.ifood;
                    });
                }

                // Atualizando todos os links do Yooga
                if (links.yooga) {
                    document.querySelectorAll('a[href*="delivery.yooga"]').forEach(link => {
                        link.href = links.yooga;
                    });
                }

                // Atualizando todos os links do Instagram
                if (links.instagram) {
                    document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
                        link.href = links.instagram;
                    });
                }

                // Atualizando todos os links do Facebook
                if (links.facebook) {
                    document.querySelectorAll('a[href*="facebook.com"]').forEach(link => {
                        link.href = links.facebook;
                    });
                }

                // Atualizando todos os links de Encomendas
                if (links.encomendas) {
                    document.querySelectorAll('a[href*="drive.google.com"]').forEach(link => {
                        link.href = links.encomendas;
                    });
                }
            })
            .catch(error => console.error('Erro ao carregar os dados:', error));
    }

    // Atualiza os links imediatamente ao carregar a página
    updateLinks();

    // Atualiza os links a cada 5 minutos (300000 milissegundos)
    setInterval(updateLinks, 300000);
});