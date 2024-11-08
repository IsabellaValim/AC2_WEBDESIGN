let imageId = 1;
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const novo_nome = document.getElementById("novo_nome").value;
    if (novo_nome) {
        novoCartao(novo_nome);
        document.getElementById("formulario").reset();
    }
});

function novoCartao(novo_nome) {
    const conteudoCartao = document.getElementById("cards");
    const imageUrl = `https://picsum.photos/id/${imageId}/200/150`;
    imageId += 50;

    const cartao = document.createElement("div");
    cartao.className = "col-md-3 mb-4";
    cartao.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${imageUrl}" class="card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title">${novo_nome}</h5>
                <button class="btn btn-danger mt-2" onclick="deletarcartao(this)">Apagar</button>
            </div>
        </div>
    `;

    conteudoCartao.appendChild(cartao);
}
function deletarcartao(button) {
    button.closest(".col-md-3").remove();
}


document.getElementById("deletarTodos").addEventListener("click", function () {
    document.getElementById("cards").innerHTML = "";
    imageId = 0;
});
