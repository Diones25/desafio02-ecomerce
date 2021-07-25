let form = document.getElementById("form");
form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let endereco = document.getElementById('endereco').value;

    let data = {
        nome,
        email,
        cpf,
        endereco
    }
    let valuesData = Object.values(data);


    let corpo = document.getElementById("clientes");
    let linha = document.createElement("tr");
    corpo.append(linha);

    valuesData.forEach(value => {
        let td = document.createElement("td");
        linha.append(td);
        td.append(value);
    });
    let cli = JSON.parse(localStorage.getItem('client')) ?? [];
    cli.push(data);

    let cliConvert = JSON.stringify(cli);

    localStorage.setItem('client', cliConvert);

    alert("Cliente Cadastrado com Sucesso");
    
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('cpf').value = "";
    document.getElementById('endereco').value = "";

});

let formProdutos = document.getElementById("formProdutos");
formProdutos.addEventListener('submit', function (event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let preco = document.getElementById("preco").value;
    let descricao = document.getElementById("descricao").value;
    let imagem = document.getElementById("imagem").files[0].name;

    let dataProducts = {
        nome,
        preco,
        descricao,
        imagem
    };

    let ProductsData = Object.values(dataProducts);
    let body = document.getElementById("produtos");
    let row = document.createElement("tr");
    body.append(row);

    ProductsData.forEach(value => {
        let td = document.createElement("td");
        row.append(td);
        td.append(value);
    });
    let product = JSON.parse(localStorage.getItem('product')) ?? [];
    product.push(dataProducts);

    let prodConvert = JSON.stringify(product);

    localStorage.setItem('product', prodConvert);

    alert("Produto Cadastrado com Sucesso!");
    
    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("imagem").value = "";
});
