const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);

    if (categoria == 'disponivel'||this.id) {
        calculaLivrosExibirTotal(livrosFiltrados);
    } else {
        
    }
}
function calculaLivrosExibirTotal(livrosFiltrados) {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(resultado) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML =`
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${resultado}</span></p>
    </div>
    `
}