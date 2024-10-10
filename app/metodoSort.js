const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivros);

let ordem = true;
function ordenarLivros() {

    if (ordem) {
        const precosOrdenados = livros.sort((elementoA, elementoB) => {
            return elementoA.preco - elementoB.preco
        })
        exibirLivrosNaTela(precosOrdenados)
        calculaLivrosExibirTotal(precosOrdenados)
        btnOrdenarPorPreco.textContent = 'ORDENAR MAIOR PREÇO'
        ordem = false;
    } else {
        const precosOrdenados = livros.sort((elementoA, elementoB) => {
            return elementoB.preco - elementoA.preco
        })
        btnOrdenarPorPreco.textContent = 'ORDENAR MENOR PREÇO'
        exibirLivrosNaTela(precosOrdenados);
        calculaLivrosExibirTotal(precosOrdenados)
        ordem = true;
    }
};