window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  
  let premiumParent = document.querySelector(".premium__products--section ul");
  let newParent = document.querySelector(".new__products--section ul");
  let bestSellers = document.querySelector(".best__sellers--section ul");
  let header = document.querySelector("header")
  let loader = document.querySelector('.lds-ring')

  // Loader
  setTimeout(() => {
    loader.style.opacity = '0'
    
    setTimeout(() => {
      loader.style.display = 'none'
      
    }, 500)
    
  }, 2000);
  
  const expansiveProducts = {
    Products : [
      {
        id: 14,
        title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
        description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: { rate: 2.2, count: 140 },
      },
      {
        id: 5,
        title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.6, count: 400 },
      },
      {
        id: 13,
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 250 },
      },
      {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3.9, count: 70 },
      },
      {
        id: 12,
        title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 400 },
      },
      
    ]
  };
  const bestSellersProducts = {
    Products: [
      {
            id: 19,
            title: "Opna Women's Short Sleeve Moisture",
            price: 7.95,
            description:
              "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
            rating: { rate: 4.5, count: 146 },
          },
          {
                id: 18,
                title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
                price: 9.85,
                description:
                  "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
                category: "women's clothing",
                image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
                rating: { rate: 4.7, count: 130 },
              },
              {
                    id: 7,
                    title: "White Gold Plated Princess",
                    price: 9.99,
                    description:
                      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                    category: "jewelery",
                    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                    rating: { rate: 3, count: 400 },
                  },
                  {
                        id: 8,
                        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
                        price: 10.99,
                        description:
                          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
                        category: "jewelery",
                        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
                        rating: { rate: 1.9, count: 100 },
                      },
    ]
  }

  const newProducts = {
    Products: [
      {
        id: 5,
        title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.6, count: 400 },
      },
      {
        id: 13,
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 250 },
      },
      {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3.9, count: 70 },
      },
      {
        id: 12,
        title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 400 },
      },
      {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description:
              "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: { rate: 3.9, count: 120 },
          },
          {
                id: 10,
                title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                price: 109,
                description:
                  "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
                category: "electronics",
                image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
                rating: { rate: 2.9, count: 470 },
              },
              {
                    id: 11,
                    title:
                      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
                    price: 109,
                    description:
                      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
                    category: "electronics",
                    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
                    rating: { rate: 4.8, count: 319 },
                  },
                  {
                        id: 9,
                        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
                        price: 64,
                        description:
                          "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
                        category: "electronics",
                        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
                        rating: { rate: 3.3, count: 203 },
                      },
    ]
  }
  bestSellers.innerHTML = '';
  newParent.innerHTML = '';
  premiumParent.innerHTML = '';
  bestSellersProducts.Products.forEach((item) => {
    bestSellers.innerHTML += `
    <li><img src="${item.image}" alt="" width="205px">
      <div class="overlay">
        <div class="content">
      <p>
        ${item.rating.count} / ${item.rating.rate};
      </p>
      <strong>
        ${item.price}$
      </strong>
        </div>
      </div> 
    </li>
    `
  })
  newProducts.Products.forEach((item) => {
    newParent.innerHTML += `
    <li><img src="${item.image}" alt="" width="220px" height="180px">
    <div class="overlay">
      <div class="content">
    <p>
      ${item.rating.count} / ${item.rating.rate};
    </p>
    <strong>
      ${item.price}$
    </strong>
      </div>
    </div> 
  </li>
    `
  })
  expansiveProducts.Products.forEach((item) => {
    premiumParent.innerHTML  += `
    <li>
    <img class="premium__parent" src="${item.image}" alt="" width="200px" height="180px">
    
    <div class="overlay">
    <div class="content">
    <p>
    ${item.rating.count} / ${item.rating.rate};
    </p>
    <strong>
    ${item.price}$
    </strong>
    </div>
    </div> 
    
    </li>
    `
  })
  // Scroll top!
  let scrollToTop = document.querySelector(".footer__bottom button").addEventListener("click", () => {
    window.scrollTo(0,0)
  });

// modal 
const modalTrigger = document.querySelector('.premium__left button'),
modal = document.querySelector('.modal'),
modalCloseBtn = document.querySelector('[data-close]')

console.log(modalTrigger);

function closeModal() {
modal.classList.add('hide')
modal.classList.remove('show')
document.body.style.overflow = ''
}

function openModal() {
modal.classList.add('show')
modal.classList.remove('hide')
document.body.style.overflow = 'hidden'
clearInterval(modalTimerId)
}


modalTrigger.addEventListener("click", openModal)
modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
if (e.target == modal) {
  closeModal()
}
})

document.addEventListener('keydown', (e) => {
if (e.code === 'Escape' && modal.classList.contains('show')) {
  closeModal()
}
})

const modalTimerId = setTimeout(openModal, 2000)


});