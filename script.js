let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho');
    carrinhoLista.innerHTML = '';
    
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = ${item.produto} - R$ ${item.preco};
        carrinhoLista.appendChild(li);
    });
    
    document.getElementById('total').textContent = Total: R$ ${total};
}
