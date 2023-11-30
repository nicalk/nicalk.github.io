document.addEventListener('DOMContentLoaded', function () {
    const abrirJanela = document.getElementById('abrirJanela');
    const fecharJanela = document.getElementById('fecharJanela');
    const janela = document.getElementById('JaneladeCompra');

    abrirJanela.addEventListener('click', function () {
        janela.style.display = 'block';
    });

    fecharJanela.addEventListener('click', function () {
        janela.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === janela) {
            janela.style.display = 'none';
        }
    });
    
});
