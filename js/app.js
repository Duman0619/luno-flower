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


    card.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="price">${p.price.toLocaleString()} ₸</div>
      <a class="btn" href="https://wa.me/77087514281?text=Хочу заказать: ${p.name}">
        Заказать
      </a>
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
