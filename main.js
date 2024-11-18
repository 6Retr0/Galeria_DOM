/* HERO */

const heroImg = document.createElement("img");
heroImg.src = "./assets/hero/hero.webp";
heroImg.alt = "Pandora wristband with Disney charms";

const hero = document.getElementById("hero");
hero.appendChild(heroImg);

const heroText = document.createElement("p");
heroText.textContent =
  "Esta Navidad, Mickey y sus amigos de Disney nos recuerdan que la verdadera magia de la temporada cobra vida en los momentos que creamos juntos. Sorprende a tu fan favorito/a de Disney con joyas navideñas inspiradas en sus personajes favoritos.";
hero.appendChild(heroText);

/* SHOP & PRODUCTS */

const main = document.querySelector("main");
const shopSection = document.getElementById("shop");

const nestedGrid = document.createElement("div");
const productsSection = document.getElementById("products");
nestedGrid.id = "nestedGrid";

shopSection.appendChild(productsSection);
productsSection.appendChild(nestedGrid);

const products = [
  {
    name: "Charm Colgante Adorno Chip y Chop de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwa86ca885/productimages/singlepackshot/793532C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 79.0,
    new: true,
    metal: "plata",
    type: "charm",
  },
  {
    name: "Charm Corona Navideña Mickey Mouse",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwe2485e4f/productimages/singlepackshot/793531C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 49.0,
    new: true,
    metal: "plata",
    type: "charm",
  },
  {
    name: "Charm Colgante Silueta de Minnie Mouse de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwcee0d15e/productimages/singlepackshot/793533C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 59.0,
    new: true,
    metal: "plata",
    type: "charm",
  },
  {
    name: "Pendientes de Aro Silueta de Mickey Mouse de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwc1258165/productimages/singlepackshot/293528C00_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 59.0,
    new: true,
    metal: "plata",
    type: "pendientes",
  },
  {
    name: "Charm Colgante Minnie Mouse Patinando sobre Hielo de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwdbe99174/productimages/singlepackshot/793530C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 59.0,
    new: true,
    metal: "plata",
    type: "charm",
  },
  {
    name: "Collar Pandora Moments Cadena de Serpiente con Cierre de Mickey Mouse de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw8c37fdad/productimages/singlepackshot/393529C00_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 139.0,
    new: true,
    metal: "plata",
    type: "collar",
  },
  {
    name: "Anillo Rosa de la Bella y la Bestia de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwce3e723e/productimages/singlepackshot/190017C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 69.0,
    new: false,
    metal: "plata",
    type: "anillo",
  },
  {
    name: "Charm Lilo y Stitch de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw1343737e/productimages/singlepackshot/798844C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 59.0,
    new: false,
    metal: "plata",
    type: "charm",
  },
  {
    name: "Anillo Carroza de La Cenicienta de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw2aaf3723/productimages/singlepackshot/163059C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 89.0,
    new: false,
    metal: "oro",
    type: "anillo",
  },
  {
    name: "Charm de la Casa y los Globos de Up de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwbf6d40dd/productimages/singlepackshot/798962C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 69.0,
    new: false,
    metal: "plata",
    type: "charm",
  },
  {
    name: "Charm Colgante Mickey Mouse 100 Aniversario de Disney con Diamante Sintético",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwcaff47c8/productimages/singlepackshot/792812C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 199.0,
    new: false,
    metal: "dos tonos",
    type: "charm",
  },
  {
    name: "Pendientes de Botón Mickey y Minnie Mouse Brillantes de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwb78317eb/productimages/singlepackshot/293219C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 59.0,
    new: false,
    metal: "plata",
    type: "pendientes",
  },
  {
    name: "Charm Nala El Rey León de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwd935eea4/productimages/singlepackshot/783250C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 79.0,
    new: false,
    metal: "oro rosa",
    type: "charm",
  },
  {
    name: "Pendientes de Aro Mickey Mouse y Minnie Mouse de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw7f3ea3a8/productimages/singlepackshot/262959C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 109.0,
    new: false,
    metal: "oro",
    type: "pendientes",
  },
  {
    name: "Charm Colgante Ariel de La Sirenita de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw3f6afbaa/productimages/singlepackshot/792695C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 69.0,
    new: false,
    metal: "plata",
    type: "charm",
  },
  {
    name: "Pendientes de Botón Carroza de La Cenicienta de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwc15dc40b/productimages/singlepackshot/293060C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 59.0,
    new: false,
    metal: "plata",
    type: "charm",
  },
  {
    name: "Anillo Eternidad Brillante Mickey Mouse & Minnie Mouse de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw272d1d31/productimages/singlepackshot/162957C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 89.0,
    new: false,
    metal: "oro",
    type: "anillo",
  },
  {
    name: "Charm Colgante Doble Carroza y Corazón de La Cenicienta de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw99bc8cef/productimages/singlepackshot/763072C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 89.0,
    new: false,
    metal: "oro",
    type: "charm",
  },
  {
    name: "Charm Brillante Carroza de Cenicienta de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwfcb2d766/productimages/singlepackshot/789189C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 99.0,
    new: false,
    metal: "oro rosa",
    type: "charm",
  },
  {
    name: "Collar Silueta de Minnie Mouse de Disney",
    description: "Random Alt",
    img: "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw33f51059/productimages/singlepackshot/393187C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    price: 89.0,
    new: false,
    metal: "plata",
    type: "collar",
  },
];

const totalProducts = document.createElement("p");
totalProducts.id = "totalProducts";
totalProducts.textContent = `${products.length} Resultados`;
productsSection.insertBefore(totalProducts, nestedGrid);

products.forEach((product) => {
  const container = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("p");
  const price = document.createElement("p");

  container.className = "productCard";

  img.src = product.img;
  img.alt = product.description;
  img.className = "productImg";
  container.appendChild(img);

  if (product.new) {
    const newTag = document.createElement("p");
    newTag.textContent = "Nuevo";
    newTag.className = "newTag";
    container.appendChild(newTag);
  } else {
    const emptyTag = document.createElement("p");
    emptyTag.textContent = "";
    emptyTag.className = "newTag";
    container.appendChild(emptyTag);
  }

  name.textContent = product.name;
  name.className = "productName";
  container.appendChild(name);

  price.textContent = product.price + " €";
  price.className = "productPrice";
  container.appendChild(price);

  nestedGrid.appendChild(container);
});

/* FILTERS */

const metalFilter = ["plata", "oro", "oro rosa", "dos tonos"];
const typeFilter = ["charm", "anillo", "pendientes", "collar"];

function renderProducts(items) {
  nestedGrid.innerHTML = "";
  items.forEach((product) => {
    const container = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");
    const price = document.createElement("p");

    container.className = "productCard";

    img.src = product.img;
    img.alt = product.description;
    img.className = "productImg";
    container.appendChild(img);

    if (product.new) {
      const newTag = document.createElement("p");
      newTag.textContent = "Nuevo";
      newTag.className = "newTag";
      container.appendChild(newTag);
    } else {
      const emptyTag = document.createElement("p");
      emptyTag.textContent = "";
      emptyTag.className = "newTag";
      container.appendChild(emptyTag);
    }

    name.textContent = product.name;
    name.className = "productName";
    container.appendChild(name);

    price.textContent = product.price + " €";
    price.className = "productPrice";
    container.appendChild(price);

    nestedGrid.appendChild(container);
  });
}



const filtersContainer = document.getElementById("filters");

const metalContainer = document.createElement("ul");
metalContainer.id = "metalContainer";
filtersContainer.appendChild(metalContainer);

const typeContainer = document.createElement("ul");
filtersContainer.appendChild(typeContainer);

metalFilter.forEach((metal) => {
  const btn = document.createElement("button");
  btn.className = "filterBtn";

  const btnImg = document.createElement("img");
  btnImg.className = "btnImg";
  btnImg.src = `./assets/icons/${metal}.png`;
  btnImg.alt = `${metal} icon`;

  btn.addEventListener("click", () => {
    const filteredProducts = products.filter((product) => product.metal === metal);
    renderProducts(filteredProducts);
  });

  btnImg.addEventListener("click", () => {
    btnImg.classList.toggle("activeBtn");
  });

  btn.appendChild(btnImg);

  const li = document.createElement("li");
  li.textContent = [metal];

  li.appendChild(btn);

  metalContainer.appendChild(li);
});

/* FOOTER */
const footer = document.querySelector("footer");
const signatureText = document.createElement("p");
signatureText.id = "signature"
signatureText.textContent = "Made with ❤️ by JLeon"

footer.appendChild(signatureText);
