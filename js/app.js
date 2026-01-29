const catalog = document.getElementById("catalog");

function renderProducts(list) {
  catalog.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <span class="price">${p.price.toLocaleString()} ₸</span>
      <a class="btn" href="https://wa.me/77087514281?text=Хочу заказать ${p.name}">
        Заказать
      </a>
    `;

    catalog.appendChild(card);
  });
}

renderProducts(products);
