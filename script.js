let totalPipocas = 0;
let marcados = [];
let marcar = 'N';

document.getElementById('pipocaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const quantidade = parseInt(document.getElementById('quantidade').value);
  const nome = document.getElementById('nome').value.trim();

  if (quantidade === 999) {
    alert('Caixa fechado!');
    return;
  }

  if (isNaN(quantidade) || quantidade <= 0) {
    alert('Digite uma quantidade válida.');
    return;
  }

  totalPipocas += quantidade;

  if (marcar === 'S' && nome !== '') {
    marcados.push(nome);
  }

  atualizarResumo();
  document.getElementById('quantidade').value = '';
  document.getElementById('nome').value = '';
});

function setMarcar(valor) {
  marcar = valor;
  const nomeInput = document.getElementById('nome');
  nomeInput.disabled = valor !== 'S';

  const botoes = document.querySelectorAll('.marcar-btn');
  botoes.forEach(btn => {
    btn.classList.toggle('active', btn.textContent === valor);
  });
}

function atualizarResumo() {
  document.getElementById('totalPipocas').textContent = totalPipocas;
  document.getElementById('valorTotal').textContent = (totalPipocas * 8).toFixed(2).replace('.', ',');
  document.getElementById('marcados').textContent = marcados.length ? marcados.join(', ') : 'Nenhuma';
}
