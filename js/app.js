const catalog = document.getElementById("catalog");
const sortSelect = document.getElementById("sort");
const filterSelect = document.getElementById("filter");

let currentProducts = [...products];

function renderProducts(list) {
  catalog.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
card.className = "card";
card.id = `product-${p.id}`;


    const productLink = `https://duman0619.github.io/luno-flower/product.html?id=${p.id}`;

const waText = `
Здравствуйте! Хочу заказать:

🌸 ${p.name}
💰 ${p.price.toLocaleString()} ₸
📝 ${p.desc}

Ссылка на букет:
${productLink}
`;

const waUrl = `https://wa.me/77087514281?text=${encodeURIComponent(waText)}`;

card.innerHTML = `
  <img src="${p.image}">
  <h3>${p.name}</h3>
  <p>${p.desc}</p>
  <span class="price">${p.price.toLocaleString()} ₸</span>
  <a class="btn" href="${waUrl}" target="_blank">Заказать</a>
`;


    catalog.appendChild(card);
  });
}

/* сортировка */
sortSelect.addEventListener("change", () => {
  let sorted = [...currentProducts];

  if(sortSelect.value === "asc"){
    sorted.sort((a,b)=>a.price-b.price);
  }

  if(sortSelect.value === "desc"){
    sorted.sort((a,b)=>b.price-a.price);
  }

  renderProducts(sorted);
});

/* фильтр */
filterSelect.addEventListener("change", () => {
  if(filterSelect.value === "all"){
    currentProducts = [...products];
  } else {
    currentProducts = products.filter(p => p.type === filterSelect.value);
  }

  renderProducts(currentProducts);
});

/* стартовая загрузка */
renderProducts(products);
