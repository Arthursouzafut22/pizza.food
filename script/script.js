const btnCart = document.getElementById("btn-cart");
const btnClose = document.querySelector(".btn-close");
const caixaCart = document.querySelector(".caixa-cart");

document.addEventListener("DOMContentLoaded", () => {
  cardProduct();
  changeValue();
});

let produtoListado = [];

const modalCart = () => {
  btnCart.addEventListener("click", () => {
    caixaCart.classList.toggle("active");
  });

  btnClose.addEventListener("click", () => {
    caixaCart.classList.remove("active");
  });
};
modalCart();


// CHAMADA DE API...

const cardProduct = async () => {
  const response = await fetch("/dados.json");
  if (!response.ok) throw new TypeError("Error");

  const responseJson = await response.json();

  let valueProduct = responseJson;

  return listaProduct(valueProduct);
};

// LISTAR PRODUTOS...

const listaProduct = (produto) => {
  const mainCardapio = document.querySelector(".main-cardapio");
  mainCardapio.innerHTML = "";

  produtoListado = produto;

  for (const novo of produto) {
    const novoProduto = newProduct(novo);

    mainCardapio.innerHTML += novoProduto;
  }
};


// CRIAR PRODUTO....

const newProduct = (produto) => {
  return `
    <div class="product" id="${produto.id}">
        <img src="${produto.imagem}" alt="${produto.nome}"/>

        <div class="rating">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text"
            ><svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="star-solid"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              ></path></svg
          ></label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text"
            ><svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="star-solid"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              ></path></svg
          ></label>
          <input checked="" type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text"
            ><svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="star-solid"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              ></path></svg
          ></label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text"
            ><svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="star-solid"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              ></path></svg
          ></label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text"
            ><svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="star-solid"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              ></path></svg
          ></label>
        </div>
        <p>${produto.nome}</p>
        <p>${formatCurrency(produto.preco)}</p>
        <button class="btn-purchase" onclick="addProductCart(${
          produto.id
        })">Comprar</button>
      </div>
    `;
};


const createNewDom = (element) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = element;

  return newDiv;
};

// ADICIONAR PRODUTO NO CARRINHO...

const addProductCart = (produto) => {
  const cart = document.querySelector(".cart");
  const serachPro = produtoListado.find((item) => item.id === produto);
  const element = document.querySelectorAll("div[data-type]");
  const elementArray = Array.from(element);
  const productCart = newProductCart(serachPro);
  const newElement = createNewDom(productCart);

  const searchElement = elementArray.find((item) => {
    const tipo = item.getAttribute("data-type");

    return produto === Number(item.id) && item.tipo === tipo;
  });

  if (!searchElement) {
    cart.appendChild(newElement);
  } else {
    const input = document.getElementById("number");
    input.value = Number(input.value) + 1;
  }

  changeValue();
  alertModal();
};


// MODAL ALERTA SUCESS...

const alertModal = () => {
  const modal = document.querySelector(".modeAlert");

  modal.classList.add("active");

  setTimeout(() => {
    modal.classList.remove("active");
  }, 2000);

  return modal;
};



const finalizeOrder = () => {
  const finalizy = document.querySelector(".cont-finalizy");

  finalizy.classList.add("active");

  setTimeout(() => {
    finalizy.classList.remove("active");
  }, 2000);
};


// FORMATAR MOEDA...

const formatCurrency = (price) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};


// ATUALIZAR VALOR DO CARRINHO....

const changeValue = () => {
  const type = document.querySelectorAll("div[data-type]");
  const newElement = Array.from(type);

  let total = 0.0;

  for (const element of newElement) {
    const preco = element.querySelector(".preco").innerHTML;
    const input = document.getElementById("number");
    const newPrice = replacePrice(preco);
    const quanty = document.querySelector(".quanty").innerText;

    const value = newPrice * parseInt(input.value);

    total += Number(value.toFixed(2));
  }

  const valueTotal = document.querySelector(".total");
  return (valueTotal.innerHTML = formatCurrency(total));
};


// LIMPAR PRECO...

const replacePrice = (price) => {
  let cleanPrice = price.replace(",", ".");
  cleanPrice = cleanPrice.replace(/[^\d.]/g, "");

  return parseInt(cleanPrice);
};


// MUDAR QUANTIDADE DO PRODUTO....

const changeQuantity = (acao, id, tipoProduto) => {
  const acoes = ["menos", "mais"];
  const typeElemts = document.querySelectorAll("div[data-type]");
  const newArray = Array.from(typeElemts);

  if (!acoes.includes(acao)) return alert("Erro!");

  const searchType = newArray.find((item) => {
    const type = item.getAttribute("data-type");

    return id === Number(item.id) && tipoProduto === type;
  });

  const input = document.getElementById("number");
  let value = Number(input.value);

  if (acao === "menos") {
    if (value === 0) return searchType.remove();
    input.value = value - 1;
  } else {
    input.value = value + 1;
  }

  changeValue();
};


// CRIAR NOVO PRODUTO NO CARRINHO...

const newProductCart = (produto) => {
  return `
  <div class="product-cart" id="${produto.id}" data-type="${produto.tipo}">
          <div class="cont-info">
            <img src="${produto.imagem}" alt="${produto.nome}" />

            <div>
              <div class="cont-info2">
                <p class="nome">${produto.nome}</p>
                <p class="preco"> R$${produto.preco},00</p>
              </div>

              <div class="controls">
                <button id="btn-menos" onclick="changeQuantity('menos',${produto.id}, '${produto.tipo}')">
                  <img src="imgspizza/simbolo-de-menos.png" alt="menos" />
                </button>
                <input type="number" name="number" id="number" value="1" />
                <button class="btn-mais" onclick="changeQuantity('mais',${produto.id}, '${produto.tipo}')">
                  <img src="imgspizza/sinal-de-adicao.png" alt="mais" />
                </button>
              </div>
            </div>
          </div>
        </div>

  `;
};


// FILTRAR PRODUTOS....

const search = document.getElementById("search");

function filterProducts() {
  const mainCardapio = document.querySelector(".main-cardapio");

  let value = valueName();

  const newArray = Array.from(produtoListado);
  const productFilter = newArray.filter((product) => {
    return product.nome.toLowerCase().includes(value);
  });

  if (value.includes(productFilter)) {
    mainCardapio.innerHTML =
      '<span class="erro">Nenhum produto encontrado...</span>';
  } else {
    return listaProduct(productFilter);
  }
}

search.addEventListener("keyup", filterProducts);

function valueName() {
  let value = search.value;
  return value;
}
