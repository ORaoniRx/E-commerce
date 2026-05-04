//Objetos


//barra de pesquisa
const inputBusca = document.getElementById('input-busca');
//contando itens do carrinho
const contador = document.getElementById('contador-carrinho');
//botao de comprar
const botoesComprar = document.querySelectorAll('.btn-comprar');
//os cards (itens)
const cards = document.querySelectorAll('.produto-card');

let = totalItens = 0;

//evento de clique (adicionar o carrinho)

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        totalItens++;

        contador.textContent = totalItens;


        //feedback visual

        botao.innerText = "Adicionando";
        botao.style.backgroundColor = "#27ae60";

        setTimeout(() => {
            botao.innerText = "adicionar ao carrinho";
            botao.style.backgroundColor = "a2ecc71";
        }, 1000);

    });

    
});

// filtro de busca

inputBusca.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();


    cards.forEach(card => {
        const nomeProduto = card.querySelector('.h3').innerText.toLowercase();
    
        if(nomeProduto.includes(termo)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

//Seletores adicionais

const listaCarrinho = document.getElementById('lista-carrinho');
const subtotalDisplay = document.getElementById('subtotal');
const selectfrete = document.getElementById('select-frete');
const formCheckout = document.getElementById('form-checkout');
const notaFiscal = document.getElementById('nota-fiscal');

let itensCarrinho = [];

function atualizarCarrinho (){
    listaCarrinho.innerHTML = "";
    let soma = 0;

    itensCarrinho.forEach((item,index) => {
        soma += item.preco;

        const li = document.createElement('li');
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerDoCarrinho(${index})">X</button>
        
        `;

        listaCarrinho.appendChild(li);
        


    });
};