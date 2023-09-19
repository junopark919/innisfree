'use strict';

// PRODUCTS DATA
const productsList = [
  {
    name: 'Green Tea Amino Acid Face Cleanser',
    price: 12,
    source: 'green tea',
    type: 'hydration',
    category: 'cleanser',
    best: true,
    new: true,
    stock: true,
    img: 'img/products/green-tea/cleanser.png',
  },
  {
    name: 'Green Tea Cleansing Oil',
    price: 24,
    source: 'green tea',
    type: 'hydration',
    category: 'cleanser',
    best: false,
    new: true,
    stock: true,
    img: 'img/products/green-tea/cleansing-oil.png',
  },
  {
    name: 'Green Tea Micellar Cleansing Water',
    price: 17,
    source: 'green tea',
    type: 'hydration',
    category: 'cleanser',
    best: false,
    new: true,
    stock: true,
    img: 'img/products/green-tea/cleansing-water.png',
  },
  {
    name: 'Green Tea Balancing Emulsion',
    price: 19,
    source: 'green tea',
    type: 'hydration',
    category: 'moisturizer',
    best: false,
    stock: false,
    img: 'img/products/green-tea/emulsion.png',
  },
  {
    name: 'Green Tea Balancing Cream',
    price: 22,
    source: 'green tea',
    type: 'hydration',
    category: 'moisturizer',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/green-tea/cream00.png',
  },
  {
    name: 'Green Tea Hyaluronic Acid Toner',
    price: 22,
    source: 'green tea',
    type: 'hydration',
    category: 'toner',
    best: true,
    new: true,
    stock: false,
    img: 'img/products/green-tea/toner.png',
  },
  {
    name: 'Green Tea Hyaluronic Acid Serum',
    price: 30,
    source: 'green tea',
    type: 'hydration',
    category: 'serum',
    best: true,
    new: true,
    stock: true,
    img: 'img/products/green-tea/serum.png',
  },
  {
    name: 'Green Tea Caffeine Bright-Eye Serum',
    price: 22,
    source: 'green tea',
    type: 'hydration',
    category: 'eye care',
    best: true,
    new: true,
    stock: true,
    img: 'img/products/green-tea/eye-serum.png',
  },
  {
    name: 'Green Tea Hyaluronic Acid Eye Cream',
    price: 29,
    source: 'green tea',
    type: 'hydration',
    category: 'eye care',
    best: false,
    new: true,
    stock: true,
    img: 'img/products/green-tea/eye-cream.png',
  },
  {
    name: 'Green Tea Hyaluronic Acid Cream',
    price: 29,
    source: 'green tea',
    type: 'hydration',
    category: 'moisturizer',
    best: true,
    new: true,
    stock: true,
    img: 'img/products/green-tea/cream01.png',
  },
  {
    name: 'Pore Clearing Facial Foam',
    price: 14,
    source: 'volcanic clusters',
    type: 'pore solutions',
    category: 'cleanser',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/volcanic-clusters/facial-foam.png',
  },
  {
    name: 'Pore Clearing Cleansing Balm',
    price: 10,
    source: 'volcanic clusters',
    type: 'pore solutions',
    category: 'cleanser',
    best: false,
    new: false,
    stock: false,
    img: 'img/products/volcanic-clusters/cleansing-balm.png',
  },
  {
    name: 'Pore Clearing Toner 2X',
    price: 22,
    source: 'volcanic clusters',
    type: 'pore solutions',
    category: 'toner',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/volcanic-clusters/toner.png',
  },
  {
    name: 'Pore Clearing Clay Peel Off Mask 2X',
    price: 16,
    source: 'volcanic clusters',
    type: 'pore solutions',
    category: 'face masks',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/volcanic-clusters/peel-off-mask.png',
  },
  {
    name: 'Pore Clearing Clay Mask 2X',
    price: 16,
    source: 'volcanic clusters',
    type: 'pore solutions',
    category: 'face masks',
    best: true,
    new: false,
    stock: true,
    img: 'img/products/volcanic-clusters/clay-mask.png',
  },
  {
    name: 'Pore Clearing Clay Mousse Mask 2X',
    price: 24,
    source: 'volcanic clusters',
    type: 'pore solutions',
    category: 'face masks',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/volcanic-clusters/mousse-mask.png',
  },
  {
    name: 'Dewy Glow Jam Cleanser',
    price: 13,
    source: 'cherry blossom',
    type: 'brightening',
    category: 'cleanser',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/cherry-blossom/cleanser.png',
  },
  {
    name: 'Dewy Glow Toner',
    price: 20,
    source: 'cherry blossom',
    type: 'brightening',
    category: 'toner',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/cherry-blossom/toner.png',
  },
  {
    name: 'Dewy Glow Mist',
    price: 22,
    source: 'cherry blossom',
    type: 'brightening',
    category: 'toner',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/cherry-blossom/mist.png',
  },
  {
    name: 'Dewy Glow Emulsion',
    price: 20,
    source: 'cherry blossom',
    type: 'brightening',
    category: 'moisturizer',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/cherry-blossom/emulsion.png',
  },
  {
    name: 'Dewy Glow Jelly Cream',
    price: 26,
    source: 'cherry blossom',
    type: 'brightening',
    category: 'moisturizer',
    best: false,
    new: true,
    stock: true,
    img: 'img/products/cherry-blossom/cream00.png',
  },
  {
    name: 'Dewy Glow Tone-up Cream',
    price: 26,
    source: 'cherry blossom',
    type: 'brightening',
    category: 'moisturizer',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/cherry-blossom/cream01.png',
  },
  {
    name: 'Youth-Enriched Toner',
    price: 24,
    source: 'orchid',
    type: 'anti-aging',
    category: 'toner',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/orchid/toner.png',
  },
  {
    name: 'Youth-Enriched Serum',
    price: 32,
    source: 'orchid',
    type: 'anti-aging',
    category: 'serum',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/orchid/serum.png',
  },
  {
    name: 'Youth-Enriched Emulsion',
    price: 24,
    source: 'orchid',
    type: 'anti-aging',
    category: 'moisturizer',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/orchid/emulsion.png',
  },
  {
    name: 'Youth-Enriched Eye Cream',
    price: 29,
    source: 'orchid',
    type: 'anti-aging',
    category: 'eye care',
    best: true,
    new: false,
    stock: true,
    img: 'img/products/orchid/eye-cream.png',
  },
  {
    name: 'Youth-Enriched Gel Cream',
    price: 29,
    source: 'orchid',
    type: 'anti-aging',
    category: 'moisturizer',
    best: true,
    new: false,
    stock: false,
    img: 'img/products/orchid/cream00.png',
  },
  {
    name: 'Youth-Enriched Cream',
    price: 29,
    source: 'orchid',
    type: 'anti-aging',
    category: 'moisturizer',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/orchid/cream01.png',
  },
  {
    name: 'Youth-Enriched Rich Cream',
    price: 31,
    source: 'orchid',
    type: 'anti-aging',
    category: 'moisturizer',
    best: true,
    new: false,
    stock: true,
    img: 'img/products/orchid/cream02.png',
  },
  {
    name: 'Brightening & Pore-caring Facial Cleanser',
    price: 17,
    source: 'tangerine',
    type: 'brightening',
    category: 'cleanser',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/tangerine/cleanser.png',
  },
  {
    name: 'Brightening & Pore-caring Serum',
    price: 37,
    source: 'tangerine',
    type: 'brightening',
    category: 'serum',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/tangerine/serum.png',
  },
  {
    name: 'Brightening & Pore-caring Cream',
    price: 33,
    source: 'tangerine',
    type: 'brightening',
    category: 'moisturizer',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/tangerine/cream.png',
  },
  {
    name: 'Youth Enhancing Treatment Essence',
    price: 40,
    source: 'black tea',
    type: 'anti-aging',
    category: 'serum',
    best: false,
    new: true,
    stock: true,
    img: 'img/products/black-tea/essence.png',
  },
  {
    name: 'Youth Enhancing Serum',
    price: 39,
    source: 'black tea',
    type: 'anti-aging',
    category: 'serum',
    best: true,
    new: false,
    stock: true,
    img: 'img/products/black-tea/serum.png',
  },
  {
    name: 'Youth Enhancing Cream',
    price: 35,
    source: 'black tea',
    type: 'anti-aging',
    category: 'moisturizer',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/black-tea/cream.png',
  },
  {
    name: 'Clarifying Cleansing Foam',
    price: 12,
    source: 'bija',
    type: 'troubled skin',
    category: 'cleanser',
    best: true,
    new: false,
    stock: true,
    img: 'img/products/bija/cleansing-foam.png',
  },
  {
    name: 'Clarifying Toner',
    price: 19,
    source: 'bija',
    type: 'troubled skin',
    category: 'toner',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/bija/toner.png',
  },
  {
    name: 'Cica Balm',
    price: 25,
    source: 'bija',
    type: 'troubled skin',
    category: 'balm',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/bija/balm.png',
  },
  {
    name: 'Clarifying Spot Serum',
    price: 18,
    source: 'bija',
    type: 'troubled skin',
    category: 'serum',
    best: false,
    stock: false,
    img: 'img/products/bija/serum.png',
  },
  {
    name: 'Clarifying Emulsion',
    price: 19,
    source: 'bija',
    type: 'troubled skin',
    category: 'emulsion',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/bija/emulsion.png',
  },
  {
    name: 'Nourishing Ampoule Toner',
    price: 23,
    source: 'ginger honey',
    type: 'hydration',
    category: 'toner',
    best: false,
    new: false,
    stock: true,
    img: 'img/products/ginger-honey/toner.png',
  },
];

const productsHeadline = [
  {
    title: 'Most-Loved Bestsellers',
    solution: 'for Your Favorites',
    description: `Introducing our best-selling product line, a curated selection of skincare essentials designed to transform your daily routine. These customer-favorite products have captured the hearts of countless individuals, delivering effective solutions for a wide range of skin types and concerns.`,
    img: 'img/products/best-seller.png',
    source: 'bestsellers',
  },
  {
    title: 'Green Tea',
    solution: 'for Long-Lasting Hydration',
    description: `Long-lasting hydrating Green Tea loaded with amino acids and antioxidants to help replenish and neutralize skin for that natural glow. And the best part? Our tea is organically grown and freshly chosen for skincare from 3,301 Korean native green tea varieties.`,
    img: 'img/products/green-tea/green-tea.png',
    source: 'green tea',
  },
  {
    title: 'Volcanic Clusters',
    solution: 'for Pore Clearing',
    description: `During the time of volcanic eruptions on Jeju Island, hot lava fragments formed clusters as they solidified. These naturally porous clusters are packed with minerals and have the power to absorb excess oil and impurities from pores.`,
    img: 'img/products/volcanic-clusters/volcanic-clusters.png',
    source: 'volcanic clusters',
  },
  {
    title: 'King Cherry Blossom',
    solution: 'for Better Skin Tone',
    description: `Called the “King” Cherry Blossom, these Cherry Blossoms are native to the island of Jeju, South Korea. They have the largest flowers among Cherry Blossoms and naturally hold a very sweet fragrance. Its bloom signals Spring has come on Jeju Island. Leaves are squeezed for a potent extract that helps boosts skin radiance for a glowing, clear complexion.`,
    img: 'img/products/cherry-blossom/cherry-blossom.png',
    source: 'cherry blossom',
  },
  {
    title: 'Hallan(Jeju Cold-Growing Orchid)',
    solution: 'for Anti-Aging',
    description: `With its extraordinary ability to endure even in the frigid cold, the rare Jeju Orchid has great antioxidant abilities, making it highly effective in anti-aging skin care. We extract the active ingredients from every part—from root to petal—to create our Orchidelixir 2.0™, a potent complex of niacinamide, hyaluronic acid and antioxidants to help brighten, hydrate and address early signs of aging.`,
    img: 'img/products/orchid/orchid.png',
    source: 'orchid',
  },
  {
    title: 'Hallabong(Jeju Tangerine)',
    solution: 'for Brightening and Pore Caring',
    description: `Jeju Tangerines are known for rich Vitamin C content, especially in the peel. The peel also contains various bioflavonoids including hesperidin, an antioxidant that is known to be good for skin. Vitamin C and hesperidin together help protect the skin from external aggressors, visibly brighten and clarify complexion, and helps with visible elasticity and firmness.`,
    img: 'img/products/tangerine/tangerine.png',
    source: 'tangerine',
  },
  {
    title: 'Black Tea',
    solution: 'for Anti-Aging',
    description: `innisfree Black Tea is naturally fermented Beauty Green Tea*! It’s busting with powerful antioxidants and skin-loving benefits.
    *Beauty Green Tea is our proprietary USDA organic-certified Green Tea, which harnesses 16 different hydrating amino acids.`,
    img: 'img/products/black-tea/black-tea.png',
    source: 'black tea',
  },
  {
    title: 'Bija(Jeju Torreya)',
    solution: 'for Troubled Skin/Acne',
    description: `Bija is a precious fruit that takes at least 20 years to grow. This Jeju Island native plant is known for its effectiveness in helping to protect and strengthen skin’s moisture barrier. innisfree specially harnessed Bija Seed Oil to help soothe, improve the look of imperfections, and balance skin.`,
    img: 'img/products/bija/bija.png',
    source: 'bija',
  },
  {
    title: 'Ginger Honey',
    solution: 'for Nourishing Skin',
    description: `Giney Complex™ is made with two star ingredients: ginger grown from fertile soil filled with condensed nutrients and Jeju Honey gathered from yellow waves of canola flowers that cover the island every spring.`,
    img: 'img/products/ginger-honey/ginger-honey.png',
    source: 'ginger honey',
  },
  {
    title: 'Hydration',
    solution: 'for Dry Skin',
    description: '',
    img: 'img/products/hydration.png',
    source: 'hydration',
  },
  {
    title: 'Pore Solutions',
    solution: 'for Oily Skin',
    description: '',
    img: 'img/products/pore-solutions.png',
    source: 'pore solutions',
  },
  {
    title: 'Brightening',
    solution: 'for Dullness and Uneven Skin Tone',
    description: '',
    img: 'img/products/brightening.png',
    source: 'brightening',
  },
  {
    title: 'Anti-Aging',
    solution: 'for Early Signs of Aging',
    description: '',
    img: 'img/products/anti-aging.png',
    source: 'anti-aging',
  },
  {
    title: 'Troubled Skin',
    solution: 'for Acne & Oily Skin',
    description: '',
    img: 'img/products/troubled-skin.png',
    source: 'troubled skin',
  },
  {
    title: 'Cleanser',
    solution: '',
    description: `Designed to gently but thoroughly cleanse the skin without leaving it stripped.
    `,
    img: 'img/products/cleanser.png',
    source: 'cleanser',
  },
  {
    title: 'Serum & Essenses',
    solution: '',
    description: `Hydrating face serums that replenish your skin's moisture and helps address the visible signs of aging for naturally glowing complexion.`,
    img: 'img/products/serum.png',
    source: 'serum',
  },
  {
    title: 'Toner',
    solution: '',
    description: `Soften and rebalance the skin with Korean toner to maximize absorption of next steps.`,
    img: 'img/products/toner.png',
    source: 'toner',
  },
  {
    title: 'Eye Care',
    solution: '',
    description: `Easy on the eyes. Hydrate and nourish with textures tailored for the area that ages fastest. Swipe on and tap, tap, tap in your favorite Korean eye cream or serum (or both!) to help smooth out and awaken your best set of assets.`,
    img: 'img/products/eye-care.png',
    source: 'eye care',
  },
  {
    title: 'Moisturizer',
    solution: '',
    description: `Lock in hydration ─ and your other skincare products ─ all day long! Choose between smooth hydrating Korean face creams for all skin types, lightweight gel creams packed with powerful antioxidants for combination to oily skin, and moisturizing emulsions for healthy luminous glowing complexion that can be used alone or under creams for maximum moisture!`,
    img: 'img/products/moisturizer.png',
    source: 'moisturizer',
  },
  {
    title: 'Face Masks',
    solution: '',
    description: `Korean beauty face masks are dew-licious skin treats that target your skin's unique concerns and bump your entire routine up a notch. Get to know hydrating Korean sheet masks, pore-caring clay masks with Volcanic Clusters and sleeping masks that work while you catch up on your Zzz's.`,
    img: 'img/products/face-masks.png',
    source: 'face masks',
  },
];

// STICKY NAVIGATION BAR
const nav = document.querySelector('.header');

window.onscroll = (e) => {
  if (window.scrollY) {
    nav.classList.remove('normal');
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
    nav.classList.add('normal');
  }
};

// PRODUCTS ELEMENTS
const productsHeader = document.querySelector('.products__header');
const productsTable = document.querySelector('.products__table--all');
const newLineTable = document.querySelector('.products__table--new-line');

// PRODUCTS FILTER OPTION
const filter = document.querySelector('.products__filter--option');

// BEST PRODUCTS
const best = productsList.filter((product) => product.best === true);
const newLine = productsList.filter((product) => product.new === true);

// PRODUCTS ITEMS FUNCTION
const productsItem = (item, table) => {
  for (let i = 0; i < item.length; i++) {
    table.innerHTML += `<div class='products__table--item'>
        <img src=${item[i].img} alt=${item[i].name} class='products__img' />
        <p class='products__title'>${item[i].name}</p>
        <p class='products__price'>$${item[i].price}</p>
        <a class='products__cart ${item[i].stock ? '' : 'out-of-stock'}'>${
      item[i].stock ? 'Add Cart' : 'Out of Stock'
    }</a></div>`;
  }
};

// NEW LINE LIST
productsItem(newLine, newLineTable);

// DEFAULT LIST(BEST PRODUCTS)
productsItem(best, productsTable);

// PRODUCTS FILTER OPTION
const productsFilter = (option) => {
  const item = option[0].value;

  const itemInfo = productsList.filter(
    (product) =>
      product.source === item ||
      product.type === item ||
      product.category === item
  );

  productsTable.innerHTML = '';

  if (item === 'bestsellers') {
    productsItem(best, productsTable);
  } else {
    productsItem(itemInfo, productsTable);
  }

  for (let i = 0; i < filter.length; i++) {
    if (
      (productsHeadline[i] && productsHeadline[i].source === item) ||
      (productsHeadline[i] && productsHeadline[i].type === item) ||
      (productsHeadline[i] && productsHeadline[i].category === item)
    ) {
      productsHeader.innerHTML = `<div class='products__info'><h2 class="heading-sub">Products</h2><h3 class='heading-secondary'>${productsHeadline[i].title} Line</h3><p class='products__info--solution'>${productsHeadline[i].solution}</p><p class='products__info--description'>${productsHeadline[i].description}</p></div><div class='products__header--img'></div>`;

      const productsHeaderBg = document.querySelector('.products__header--img');

      productsHeaderBg.style.backgroundImage = `linear-gradient(
        90deg,
        #eae6de,
        transparent
      ), url(
        ${productsHeadline[i].img})`;
      productsHeaderBg.style.backgroundPosition = `
      ${
        productsHeadline[i].source === 'orchid'
          ? 'top right 25%'
          : 'bottom right 25%'
      }`;
      productsHeaderBg.style.backgroundSize = 'cover';
    }
  }

  return;
};

// FILTER SELECTION EVENT
filter.addEventListener('change', () => {
  const option = filter.querySelectorAll('option:checked');

  productsFilter(option);
});
