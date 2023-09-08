const ingredients = {
  greenTea: [
    'The Story of Green Tea',
    `We offer innovative beauty solutions powered by the finest
  natural ingredients responsibly sourced from Korea’s pristine
  Jeju Island.<br /><br />
  Thanks to its volcanic origins, this fertile oasis has a unique
  ecosystem with unparalleled resources to nurture beautiful
  skin.<br /><br />
  Our proprietary extraction methods preserve the purity and
  potency of these wholesome ingredients from plant to bottle,
  offering advanced formulas that safely address all skin concerns
  without the use of harmful chemicals and preservatives.<br /><br />
  With the wonders of nature at the heart of innisfree, we take
  care to preserve and protect the environment in all that we do.`,
    `During the time of volcanic eruptions on Jeju Island, hot lava fragments formed clusters as they solidified. These naturally porous clusters are packed with minerals and have the power to absorb excess oil and impurities from pores.`,
  ],
  volcanicClusters: [
    'The Story of Jeju Volcanic Clusters',
    `During the time of volcanic eruptions on Jeju Island, hot lava fragments formed clusters as they solidified. These naturally porous clusters are packed with minerals and have the power to absorb excess oil and impurities from pores.`,
  ],
  cherryBlossom: [
    'The Story of Jeju Cherry Blossom',
    `Called the “King” Cherry Blossom, these Cherry Blossoms are native to the island of Jeju, South Korea. They have the largest flowers among Cherry Blossoms and naturally hold a very sweet fragrance. Its bloom signals Spring has come on Jeju Island.<br /><br />  
  The leaves of the Cherry Blossom are harvested and dried, after which they are aged for three weeks in lava seawater at an optimal temperature of 39˚F.<br /><br />
  To capture full benefits, the leaves are dried again. After removing sea salts, leaves are finally squeezed for a potent extract that helps boosts skin radiance for a glowing, clear complexion.`,
  ],
  orchid: [
    'The Story of Jeju Orchid',
    `With its extraordinary ability to endure even in the frigid cold, the rare Jeju Orchid has great antioxidant abilities, making it highly effective in anti-aging skin care. We extract the active ingredients from every part—from root to petal—to create our Orchidelixir 2.0™, a potent complex of niacinamide, hyaluronic acid and antioxidants to help brighten, hydrate and address early signs of aging.`,
  ],
  tangerine: [
    'The Story of Jeju Tangerine',
    `“Hallabong” (Jeju Citrus or Jeju Tangerine), is a winter seasonal fruit cultivated on Jeju island, and named after the shape of its pointy stalk end that resembles the peak of Mt. Halla.
  <br /><br />
  Also called as the “honey-coated orange”, this fruit boasts a high sugar content, and is loved as a fancy gift rather than as an easy snack. It has excellent storability with its thick peel, has rich juice, and has a size much bigger that the regular tangerine.
  <br /><br />
  Jeju Tangerines are known for rich Vitamin C content, especially in the peel. The peel also contains various bioflavonoids including hesperidin, an antioxidant that is known to be good for skin. Vitamin C and hesperidin together help protect the skin from external aggressors, visibly brighten and clarify complexion, and helps with visible elasticity and firmness.`,
  ],
  blackTea: [
    'The Story of Black Tea',
    `innisfree Black Tea is naturally fermented Beauty Green Tea*! It’s busting with powerful antioxidants and skin-loving benefits.
    *<i>Beauty Green Tea</i> is our proprietary USDA organic-certified Green Tea, which harnesses 16 different hydrating amino acids.
    <br /><br />
    To harness Black Tea,<br/>
    - We harvest during the summer time, when the Beauty Green Tea is bursting with life and nutrients.<br/>
    - After drying and shredding, we ferment the tea leaves NATURALLY for 10-12 hours without any artificial additions, and dry again.<br/>
    - The fermented tea is infused in mineral water at exactly 176◦F before extracting for another 12 hours.<br/>
    - Voila! innisfree’s potent, antioxidant-rich Black Tea brew!`,
  ],
  bija: [
    `The Story of Bija`,
    `Bija is a precious fruit that takes at least 20 years to grow. This Jeju Island native plant is known for its effectiveness in helping to protect and strengthen skin’s moisture barrier. innisfree specially harnessed Bija Seed Oil to help soothe, improve the look of imperfections, and balance skin.

  “Beautiful Fair Trade”(Songdang-ri, Jeju Island)
  
  As part of our contribution to the local community, Innisfree partners with the villagers of Songdang-ri, Jejuthrough Beautiful Fair Trade program, and allows for a new source of income for the villagers. We only harvest Bija fruits that have already fallen from the tree and naturally squeeze-extract its active ingredients.`,
  ],
  gingerHoney: [
    'The Story of Ginger & Jeju Honey',
    `Giney Complex™ is made with two star ingredients: ginger grown from fertile soil filled with condensed nutrients and Jeju Honey gathered from yellow waves of canola flowers that cover the island every spring.`,
  ],
};

const products = {
  greenTea: [
    {
      name: 'Green Tea Seed Hyaluronic Acid Cream',
      price: 29,
      type: 'hydration',
      stock: true,
    },
    {
      name: 'Green Tea Balancing Cream',
      price: 22,
      type: 'hydration',
      stock: true,
    },
    {
      name: 'Green Tea Seed Hyaluronic Acid Eye Cream',
      price: 26,
      type: 'hydration',
      stock: true,
    },
    {
      name: 'Green Tea Balancing Toner',
      price: 19,
      type: 'hydration',
      stock: true,
    },
    {
      name: 'Green Tea Balancing Emulsion',
      price: 19,
      type: 'hydration',
      stock: true,
    },
    {
      name: 'Green Tea Amino Acid Face Cleanser',
      price: 12,
      type: 'hydration',
      stock: true,
    },
    {
      name: 'Green Tea Cleansing Oil',
      price: 24,
      type: 'hydration',
      stock: true,
    },
  ],
  volcanicClusters: [
    {
      name: 'Pore Clearing Clay Mask 2X',
      price: 16,
      type: 'pore solutions',
      stock: true,
    },
    {
      name: 'Pore Clearing Facial Foam',
      price: 14,
      type: 'pore solutions',
      stock: true,
    },
    {
      name: 'Pore Clearing Calming Clay Mask',
      price: 18,
      type: 'pore solutions',
      stock: true,
    },
    {
      name: 'Pore Clearing Clay Mousse Mask 2X',
      price: 24,
      type: 'pore solutions',
      stock: true,
    },
    {
      name: 'Pore Clearing Toner 2X',
      price: 22,
      type: 'pore solutions',
      stock: true,
    },
    {
      name: 'Pore Clearing Clay Peel Off Mask 2X',
      price: 16,
      type: 'pore solutions',
      stock: true,
    },
    {
      name: 'Pore Clearing Cleansing Balm',
      price: 10,
      type: 'pore solutions',
      stock: false,
    },
  ],
  cherryBlossom: [
    {
      name: 'Dewy Glow Jelly Cream',
      price: 26,
      type: 'brightening',
      stock: true,
    },
    {
      name: 'Dewy Glow Tone-up Cream',
      price: 26,
      type: 'brightening',
      stock: true,
    },
    {
      name: 'Dewy Glow Jam Cleanser',
      price: 13,
      type: 'brightening',
      stock: true,
    },
    {
      name: 'Dewy Glow Emulsion',
      price: 20,
      type: 'brightening',
      stock: true,
    },
    {
      name: 'Dewy Glow Toner',
      price: 20,
      type: 'brightening',
      stock: true,
    },
    {
      name: 'Dewy Glow Mist',
      price: 22,
      type: 'brightening',
      stock: true,
    },
  ],
  orchid: [
    {
      name: 'Youth-Enriched Cream',
      price: 29,
      type: 'anti-aging',
      stock: true,
    },
    {
      name: 'Youth-Enriched Eye Cream',
      price: 29,
      type: 'anti-aging',
      stock: true,
    },
    {
      name: 'Youth-Enriched Gel Cream',
      price: 29,
      type: 'anti-aging',
      stock: false,
    },
    {
      name: 'Youth-Enriched Rich Cream',
      price: 31,
      type: 'anti-aging',
      stock: true,
    },
    {
      name: 'Youth-Enriched Toner',
      price: 24,
      type: 'anti-aging',
      stock: true,
    },
    {
      name: 'Youth-Enriched Serum',
      price: 32,
      type: 'anti-aging',
      stock: true,
    },
    {
      name: 'Youth-Enriched Emulsion',
      price: 24,
      type: 'anti-aging',
      stock: true,
    },
  ],
  tangerine: [
    {
      name: 'Brightening & Pore-caring Serum',
      price: 37,
      type: 'brightening',
      stock: true,
    },
    {
      name: 'Brightening & Pore-caring Cream',
      price: 33,
      type: 'brightening',
      stock: true,
    },
    {
      name: 'Brightening & Pore-caring Facial Cleanser',
      price: 17,
      type: 'brightening',
      stock: true,
    },
  ],
  blackTea: [
    {
      name: 'Youth Enhancing Treatment Essence',
      price: 40,
      type: 'anti-aging',
      stock: true,
    },
    {
      name: 'Youth Enhancing Serum',
      price: 39,
      type: 'anti-aging',
      stock: true,
    },
    {
      name: 'Youth Enhancing Cream',
      price: 35,
      type: 'anti-aging',
      stock: true,
    },
  ],
  bija: [
    {
      name: 'Clarifying Cleansing Foam',
      price: 12,
      type: 'troubled skin',
      stock: true,
    },
    {
      name: 'Cica Balm',
      price: 25,
      type: 'troubled skin',
      stock: true,
    },
    {
      name: 'Clarifying Toner',
      price: 19,
      type: 'troubled skin',
      stock: true,
    },
    {
      name: 'Clarifying Emulsion',
      price: 19,
      type: 'troubled skin',
      stock: true,
    },
    {
      name: 'Clarifying Spot Serum',
      price: 18,
      type: 'troubled skin',
      stock: false,
    },
  ],
  gingerHoney: [
    {
      name: 'Nourishing Ampoule Toner',
      price: 23,
      type: 'hydration',
      stock: true,
    },
  ],
};

// const ingredientsNav = document.querySelectorAll('.about__nav-list > li');

// ingredientsNav.addEventListenerAll('click', (e) => {
//   console.log(e);
// });
