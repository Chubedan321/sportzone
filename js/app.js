/* =========================================================
   1. KHO DỮ LIỆU SẢN PHẨM (30 SẢN PHẨM ĐẦY ĐỦ)
========================================================= */
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Giày Running AeroFlow 2026",
    price: 1550000,
    originalPrice: 1800000,
    category: "shoes",
    status: "new",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    desc: "Đôi giày thể thao chạy bộ êm ái, thoáng khí với đế đệm khí kép thế hệ mới giúp trợ lực từng bước chạy.",
    sizes: ["39", "40", "41", "42", "43"],
    material: "Vải lưới Flyknit, đế cao su",
  },
  {
    id: 2,
    name: "Áo Hoodie Streetwear Đen",
    price: 650000,
    originalPrice: 750000,
    category: "clothing",
    status: "new",
    image: "./WEBimg/HoodieStreet.jpg",
    desc: "Chất liệu nỉ bông dệt 360gsm giữ ấm cực tốt, form rộng unisex phong cách đường phố trẻ trung.",
    sizes: ["M", "L", "XL", "XXL"],
    material: "100% Cotton nỉ bông cao cấp",
  },
  {
    id: 3,
    name: "Balo Thể Thao Phản Quang",
    price: 490000,
    originalPrice: 550000,
    category: "accessories",
    status: "new",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
    desc: "Balo đi tập và đi học với ngăn đựng laptop 15.6 inch riêng biệt cùng vạch phản quang an toàn ban đêm.",
    sizes: ["Freesize (25L)"],
    material: "Vải Polyester 900D kháng nước",
  },
  {
    id: 4,
    name: "Quần Jogger Cargo Thể Thao",
    price: 420000,
    originalPrice: 520000,
    category: "clothing",
    status: "new",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop&q=80",
    desc: "Quần jogger bo gấu với 4 túi hộp cá tính, lưng thun co giãn thoải mái cho mọi hoạt động dạo phố.",
    sizes: ["M", "L", "XL"],
    material: "Kaki thun co giãn 4 chiều",
  },
  {
    id: 5,
    name: "Áo Khoác Gió Chống Nước Sport",
    price: 790000,
    originalPrice: 950000,
    category: "clothing",
    status: "new",
    image: "./WEBimg/aokkhoacchongnuoc.jpg",
    desc: "Áo khoác gió 2 lớp siêu nhẹ, cản gió và chống nước mưa rào nhẹ thích hợp chạy bộ sáng sớm.",
    sizes: ["S", "M", "L", "XL"],
    material: "Nylon Microfiber chống thấm nước",
  },
  {
    id: 6,
    name: "Sneaker Cổ Thấp Retro White",
    price: 1200000,
    originalPrice: 1400000,
    category: "shoes",
    status: "hot",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    desc: "Mẫu giày kinh điển với tone màu trắng thanh lịch, dễ dàng phối hợp với mọi loại trang phục hàng ngày.",
    sizes: ["38", "39", "40", "41", "42"],
    material: "Da Microfiber mềm mịn, đế cao su đúc",
  },
  {
    id: 7,
    name: "Đồng Hồ Thể Thao Chrono",
    price: 2150000,
    originalPrice: 2500000,
    category: "accessories",
    status: "hot",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&auto=format&fit=crop&q=80",
    desc: "Thiết kế mặt số đồng hồ bấm giờ thể thao mạnh mẽ, kháng nước độ sâu 50m chuẩn 5ATM.",
    sizes: ["Mặt 42mm"],
    material: "Khung thép không gỉ 316L, dây silicon",
  },
  {
    id: 8,
    name: "Áo Thun Thể Thao Quick-Dry",
    price: 320000,
    originalPrice: 390000,
    category: "clothing",
    status: "hot",
    image: "./WEBimg/aothunquick-dry.jpg",
    desc: "Áo phông tập gym công nghệ khô siêu tốc, giúp cơ thể luôn khô ráo và thoáng mát khi vận động mạnh.",
    sizes: ["S", "M", "L", "XL"],
    material: "92% Spandex + 8% Polyester thoát khí",
  },
  {
    id: 9,
    name: "Túi Trống Đựng Đồ Tập Gym",
    price: 350000,
    originalPrice: 450000,
    category: "accessories",
    status: "hot",
    image: "./WEBimg/tui dung do sport.jpg",
    desc: "Túi trống tập gym hình trụ quai đeo chéo đa năng, có ngăn đựng giày riêng biệt và ngăn chống thấm.",
    sizes: ["Dung tích 30L"],
    material: "Vải Oxford trượt nước chống rách",
  },
  {
    id: 10,
    name: "Bình Nước Giữ Nhiệt Thể Thao 1L",
    price: 280000,
    originalPrice: 350000,
    category: "accessories",
    status: "hot",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80",
    desc: "Giữ nhiệt 24 giờ cho nước đá lạnh và 12 giờ cho nước nóng, có quai xách tiện dụng khi đi tập.",
    sizes: ["1000ml"],
    material: "Inox 304 không gỉ chuẩn an toàn thực phẩm",
  },
  {
    id: 11,
    name: "Giày Training Flex Pro",
    price: 890000,
    originalPrice: 1600000,
    category: "shoes",
    status: "sale",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=80",
    desc: "Đế giày đa rãnh uốn lượn linh hoạt theo từng chuyển động chân, thích hợp các bài tập HIIT và cử tạ.",
    sizes: ["40", "41", "42", "43"],
    material: "Đế đệm Phylon đàn hồi trợ lực",
  },
  {
    id: 12,
    name: "Nón Lưỡi Trai Classic Cap",
    price: 180000,
    originalPrice: 300000,
    category: "accessories",
    status: "sale",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=80",
    desc: "Form nón cứng cáp, khóa bấm kim loại cao cấp tùy chỉnh kích thước vòng đầu dễ dàng.",
    sizes: ["Freesize"],
    material: "100% Kaki Cotton dày dặn",
  },
  {
    id: 13,
    name: "Kính Râm Polarized Sport",
    price: 450000,
    originalPrice: 850000,
    category: "accessories",
    status: "sale",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
    desc: "Mắt kính thể thao tráng gương phân cực chống lóa chói mắt và lọc 100% tia UV gây hại.",
    sizes: ["Tiêu chuẩn"],
    material: "Gọng nhựa dẻo TR90 siêu nhẹ và bền bỉ",
  },
  {
    id: 14,
    name: "Băng Cuốn Cổ Tay Nâng Tạ (Cặp)",
    price: 150000,
    originalPrice: 260000,
    category: "accessories",
    status: "sale",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    desc: "Bảo vệ khớp cổ tay tránh chấn thương khi tập bench press và các bài nâng tạ nặng.",
    sizes: ["Chiều dài 50cm"],
    material: "Sợi thun dệt đàn hồi kèm miếng dán Velcro",
  },
  {
    id: 15,
    name: "Tất Cổ Cao Thể Thao (Combo 3 Đôi)",
    price: 110000,
    originalPrice: 200000,
    category: "accessories",
    status: "sale",
    image:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&auto=format&fit=crop&q=80",
    desc: "Vùng gót và mũi chân dệt dày dặn chống trầy xước, thoáng khí khử mùi hôi chân hiệu quả.",
    sizes: ["Size 38-44"],
    material: "Sợi Cotton chải kỹ kháng khuẩn",
  },
  {
    id: 16,
    name: "Giày Chạy Trail Địa Hình Cross",
    price: 1650000,
    originalPrice: 1950000,
    category: "shoes",
    status: "new",
    image:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&auto=format&fit=crop&q=80",
    desc: "Gai đế sâu bám chắc trên các cung đường địa hình đồi núi dốc trơn trượt.",
    sizes: ["40", "41", "42", "43"],
    material: "Cao su Vibram chống mài mòn cao",
  },
  {
    id: 17,
    name: "Áo Ba Lỗ Thể Thao Tank Top",
    price: 240000,
    originalPrice: 320000,
    category: "clothing",
    status: "hot",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80",
    desc: "Thiết kế khoét nách rộng rãi tối ưu hóa biên độ chuyển động cho các bài tập ngực và vai.",
    sizes: ["M", "L", "XL"],
    material: "Thun mè co giãn đa chiều",
  },
  {
    id: 18,
    name: "Quần Short Thể Thao 2 Lớp Chạy Bộ",
    price: 360000,
    originalPrice: 480000,
    category: "clothing",
    status: "sale",
    image: "./WEBimg/quan-short.jpg",
    desc: "Quần short tích hợp lớp lót trong ôm sát chống cọ xát đùi khi vận động cường độ cao.",
    sizes: ["M", "L", "XL"],
    material: "Vải Polyester khô nhanh chống dính",
  },
  {
    id: 19,
    name: "Dây Nhảy Thể Lực Tốc Độ Speed Rope",
    price: 130000,
    originalPrice: 220000,
    category: "accessories",
    status: "new",
    image: "./WEBimg/daytheluc.jpg",
    desc: "Dây cáp bọc nhựa kèm trục xoay bi 360 độ hỗ trợ bài tập Cardio đốt mỡ tốc độ cao.",
    sizes: ["Dài 3m tùy chỉnh"],
    material: "Cáp thép bọc nhựa PU, tay cầm hợp kim",
  },
  {
    id: 20,
    name: "Thảm Tập Yoga Định Tuyến 8mm",
    price: 380000,
    originalPrice: 550000,
    category: "accessories",
    status: "hot",
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=80",
    desc: "Thảm TPE 2 lớp độ dày 8mm êm ái bảo vệ khớp gối, bề mặt dập hoa văn chống trơn trượt hiệu quả.",
    sizes: ["183cm x 61cm x 8mm"],
    material: "Nhựa TPE thân thiện môi trường, chống trơn",
  },
  // 10 SẢN PHẨM MỚI BỔ SUNG (ID 21 -> 30)
  {
    id: 21,
    name: "Giày Bóng Rổ High-Top Dunk Pro",
    price: 1850000,
    originalPrice: 2200000,
    category: "shoes",
    status: "new",
    image: "./WEBimg/giaybongro.jpg",
    desc: "Cổ giày ôm sát bảo vệ cổ chân khi bật nhảy, đế đệm Air êm ái hấp thụ lực va chạm hoàn hảo.",
    sizes: ["40", "41", "42", "43", "44"],
    material: "Da tổng hợp kết hợp vải đệm khí cao cấp",
  },
  {
    id: 22,
    name: "Giày Đá Bóng Sân Cỏ Nhân Tạo Speed",
    price: 780000,
    originalPrice: 950000,
    category: "shoes",
    status: "hot",
    image: "./WEBimg/giaydabongsannhantao.jpg",
    desc: "Đinh TF cao su phân bố đều giúp bám sân tốt trong mọi điều kiện thời tiết, cảm giác bóng thật chân.",
    sizes: ["39", "40", "41", "42", "43"],
    material: "Da PU chống thấm nước, đinh dăm cao su TF",
  },
  {
    id: 23,
    name: "Giày Chạy Bộ Siêu Nhẹ Ultralight",
    price: 920000,
    originalPrice: 1350000,
    category: "shoes",
    status: "sale",
    image: "./WEBimg/giaychaybosieunhe.jpg",
    desc: "Trọng lượng siêu nhẹ chỉ 180g mỗi chiếc, thân dệt thoáng khí tối đa cho những cự ly marathon.",
    sizes: ["39", "40", "41", "42"],
    material: "Vải lưới dệt kim Flymesh, đế xốp EVA trợ lực",
  },
  {
    id: 24,
    name: "Áo Gió Thể Thao Phản Quang NightRun",
    price: 520000,
    originalPrice: 650000,
    category: "clothing",
    status: "new",
    image: "./WEBimg/nightRUN.jpg",
    desc: "Thiết kế vạch phản quang phát sáng ban đêm, chất vải cản gió tốt bảo vệ sức khỏe khi chạy khuya.",
    sizes: ["S", "M", "L", "XL"],
    material: "Polyester tráng màng kháng nước mỏng nhẹ",
  },
  {
    id: 25,
    name: "Quần Nỉ Thể Thao Unisex Basic",
    price: 390000,
    originalPrice: 480000,
    category: "clothing",
    status: "hot",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop&q=80",
    desc: "Form suông ống rộng thoải mái mặc khi tập luyện hay sinh hoạt thường ngày, bo gấu gọn gàng.",
    sizes: ["M", "L", "XL", "XXL"],
    material: "Cotton nỉ da cá co giãn 2 chiều mềm mại",
  },
  {
    id: 26,
    name: "Áo Polo Thể Thao Dry-Ex Cổ Bẻ",
    price: 290000,
    originalPrice: 420000,
    category: "clothing",
    status: "sale",
    image: "./WEBimg/polodry-ex.jpg",
    desc: "Thiết kế lịch sự phù hợp cả chơi tennis, golf hay đi làm văn phòng năng động, thấm hút mồ hôi tốt.",
    sizes: ["S", "M", "L", "XL"],
    material: "Vải cá sấu poly co giãn 4 chiều chống nhăn",
  },
  {
    id: 27,
    name: "Đồng Hồ Thông Minh Sport Watch V3",
    price: 1450000,
    originalPrice: 1900000,
    category: "accessories",
    status: "new",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
    desc: "Đo nhịp tim, nồng độ oxy trong máu SpO2, theo dõi giấc ngủ và đếm bước chân chính xác cả ngày.",
    sizes: ["Màn hình AMOLED 1.4 inch"],
    material: "Khung hợp kim nhôm, dây silicon kháng khuẩn",
  },
  {
    id: 28,
    name: "Găng Tay Tập Gym Có Đệm Lòng Bàn Tay",
    price: 160000,
    originalPrice: 240000,
    category: "accessories",
    status: "hot",
    image: "./WEBimg/gangtaygymcodem.jpg",
    desc: "Miếng đệm silicon chống chai tay khi nâng tạ nặng, quấn cổ tay dài trợ lực khớp tay an toàn.",
    sizes: ["M", "L", "XL"],
    material: "Vải lưới co giãn kết hợp đệm mút silicon chống trượt",
  },
  {
    id: 29,
    name: "Túi Đeo Chéo Thể Thao Mini Crossbody",
    price: 220000,
    originalPrice: 350000,
    category: "accessories",
    status: "sale",
    image: "./WEBimg/tuideocheothethao.jpg",
    desc: "Kích thước nhỏ gọn đựng điện thoại, ví tiền, chìa khóa khi chạy bộ, tập gym hoặc đi dạo phố.",
    sizes: ["Kích thước 22 x 15 x 6cm"],
    material: "Vải dù Oxford chống bám nước",
  },
  {
    id: 30,
    name: "Bình Xịt Lạnh Giảm Đau Thể Thao 200ml",
    price: 120000,
    originalPrice: 180000,
    category: "accessories",
    status: "sale",
    image: "./WEBimg/xitlanhthethao.jpg",
    desc: "Làm lạnh nhanh vùng cơ bị bầm tím, căng cơ, hỗ trợ sơ cứu chấn thương thể thao tức thì hiệu quả.",
    sizes: ["Dung tích 200ml"],
    material: "Hợp chất làm lạnh tức thì an toàn cho da",
  },
];

/* =========================================================
   2. HÀM TẠO THẺ SẢN PHẨM
========================================================= */
function createProductCardHTML(p) {
  return `
    <div class="product-card">
      <div class="product-img-box">
        <a href="detail.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </a>
      </div>
      <div class="product-info">
        <a href="detail.html?id=${p.id}" style="text-decoration: none; color: inherit;">
          <h3>${p.name}</h3>
        </a>
        <div class="product-price">
          <span class="price-current">${p.price.toLocaleString("vi-VN")}đ</span>
          <span class="price-old">${p.originalPrice.toLocaleString("vi-VN")}đ</span>
        </div>
        <div class="card-action-btns">
          <a href="detail.html?id=${p.id}" class="btn-view-detail">Xem Chi Tiết</a>
          <button type="button" class="btn-add-cart" onclick="addToCart(${p.id})">🛒 Thêm Vào Giỏ</button>
        </div>
      </div>
    </div>
  `;
}

/* =========================================================
   3. BANNER SLIDER
========================================================= */
const BANNER_DATA = [
  {
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600&auto=format&fit=crop&q=80",
    title: "Bộ Sưu Tập Giày Chạy 2026",
    sub: "Bứt phá tốc độ cùng công nghệ đệm mới",
  },
  {
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&auto=format&fit=crop&q=80",
    title: "Thời Trang Phòng Gym Đỉnh Cao",
    sub: "Phong cách cá tính, co giãn tối đa",
  },
  {
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80",
    title: "Xả Kho Mùa Lễ Hội - Giảm Đến 50%",
    sub: "Số lượng có hạn trong 24 giờ",
  },
];

let currentSlideIndex = 0;

function renderSlider() {
  const sliderBox = document.getElementById("slider-app");
  if (!sliderBox) return;

  let slidesHTML = "";
  for (let i = 0; i < BANNER_DATA.length; i++) {
    const b = BANNER_DATA[i];
    const activeClass = i === 0 ? "active" : "";
    slidesHTML += `
      <div class="slide ${activeClass}">
        <img src="${b.img}" alt="${b.title}" />
        <div class="slide-caption">
          <h2>${b.title}</h2>
          <p>${b.sub}</p>
        </div>
      </div>
    `;
  }

  sliderBox.innerHTML = `
    <div class="slider-wrapper" id="slider-wrapper">
      ${slidesHTML}
    </div>
    <button type="button" class="slider-btn prev" onclick="prevSlide()">&#10094;</button>
    <button type="button" class="slider-btn next" onclick="nextSlide()">&#10095;</button>
  `;
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  if (index >= slides.length) currentSlideIndex = 0;
  else if (index < 0) currentSlideIndex = slides.length - 1;
  else currentSlideIndex = index;
  slides[currentSlideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}
function prevSlide() {
  showSlide(currentSlideIndex - 1);
}
setInterval(nextSlide, 4000);

/* =========================================================
   4. RENDER GIAO DIỆN TRANG CHỦ (CÓ ID ĐỂ CUỘN ÊM ÁI)
========================================================= */
const HOME_STATUS_GROUPS = [
  {
    key: "new",
    sectionId: "new-section",
    title: "🌟 Sản Phẩm Mới Nhất",
    url: "products.html?status=new",
  },
  {
    key: "hot",
    sectionId: "hot-section",
    title: "🔥 Sản Phẩm Bán Chạy (Hot)",
    url: "products.html?status=hot",
  },
  {
    key: "sale",
    sectionId: "sale-section",
    title: "🎁 Hàng Khuyến Mãi Flash Sale",
    url: "products.html?status=sale",
  },
];

function renderHomePage() {
  const app = document.getElementById("main-app");
  if (!app) return;

  let html = "";

  html += `
    <section class="flash-sale-box" id="flash-sale-timer">
      <div class="sale-title">
        <h3>⚡ FLASH SALE CỰC SỐC</h3>
        <p>Kết thúc sau:</p>
      </div>
      <div class="countdown-timer">
        <div class="time-card"><span id="cd-hours">00</span><small>Giờ</small></div>
        <div class="time-card"><span id="cd-minutes">00</span><small>Phút</small></div>
        <div class="time-card"><span id="cd-seconds">00</span><small>Giây</small></div>
      </div>
    </section>
  `;

  for (let g = 0; g < HOME_STATUS_GROUPS.length; g++) {
    const group = HOME_STATUS_GROUPS[g];
    const items = PRODUCTS_DATA.filter(function (p) {
      return p.status === group.key;
    }).slice(0, 4);

    let itemsHTML = "";
    for (let i = 0; i < items.length; i++) {
      itemsHTML += createProductCardHTML(items[i]);
    }

    html += `
      <section class="product-group" id="${group.sectionId}">
        <div class="group-header">
          <h2 class="section-title">${group.title}</h2>
          <a href="${group.url}" class="btn-see-all">Xem tất cả →</a>
        </div>
        <div class="product-grid">
          ${itemsHTML}
        </div>
      </section>
    `;
  }

  html += `
    <section class="form-section" id="contact-section">
      <h2>📬 Thông Tin Đặt Hàng & Liên Hệ</h2>
      <form id="order-form" onsubmit="validateAndSubmit(event)" novalidate>
        <div class="form-group">
          <label for="fullname">Họ và tên *</label>
          <input type="text" id="fullname" placeholder="VD: Nguyễn Văn A" />
          <span class="error-msg" id="err-fullname"></span>
        </div>
        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" placeholder="VD: email@example.com" />
          <span class="error-msg" id="err-email"></span>
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại *</label>
          <input type="tel" id="phone" placeholder="VD: 0912345678" />
          <span class="error-msg" id="err-phone"></span>
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ giao hàng *</label>
          <textarea id="address" rows="3" placeholder="Nhập địa chỉ nhận hàng..."></textarea>
          <span class="error-msg" id="err-address"></span>
        </div>
        <button type="submit" class="btn-submit">Xác Nhận Đặt Hàng</button>
      </form>
    </section>
  `;

  app.innerHTML = html;
}

/* =========================================================
   5. RENDER FOOTER ĐỘNG
========================================================= */
function renderFooter() {
  const footerBox = document.getElementById("footer-app");
  if (!footerBox) return;

  footerBox.innerHTML = `
    <div class="container footer-top">
      <div class="footer-col">
        <div class="logo" style="margin-bottom: 15px;">Sport<span>Zone</span></div>
        <p class="footer-desc">Cửa hàng phân phối thời trang & phụ kiện thể thao chính hãng.</p>
      </div>
      <div class="footer-col">
        <h4>Về SportZone</h4>
        <ul>
          <li><a href="products.html">Tất cả sản phẩm</a></li>
          <li><a href="products.html?status=new">Hàng mới về</a></li>
          <li><a href="products.html?status=hot">Sản phẩm bán chạy</a></li>
          <li><a href="products.html?status=sale">Flash Sale</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Chính Sách</h4>
        <ul>
          <li><a href="javascript:void(0)" onclick="alert('Đổi trả 7 ngày nếu lỗi nhà sản xuất.')">Đổi trả 7 ngày</a></li>
          <li><a href="javascript:void(0)" onclick="alert('Giao hàng nhanh toàn quốc từ 2 - 4 ngày.')">Vận chuyển</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Thông Tin Liên Hệ</h4>
        <ul class="footer-contact">
          <li>📍 Công viên Phần mềm Quang Trung, Q.12, TP.HCM</li>
          <li>📞 Hotline: 1900 6868</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 SportZone. Bài Assignment môn Lập trình cơ sở với JavaScript.</p>
    </div>
  `;
}

/* =========================================================
   6. COUNTDOWN FLASH SALE
========================================================= */
const endTime = new Date().getTime() + 8 * 60 * 60 * 1000;

function updateCountdown() {
  const cdH = document.getElementById("cd-hours");
  const cdM = document.getElementById("cd-minutes");
  const cdS = document.getElementById("cd-seconds");
  if (!cdH || !cdM || !cdS) return;

  const now = new Date().getTime();
  const distance = endTime - now;
  if (distance < 0) return;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  cdH.textContent = hours < 10 ? "0" + hours : hours;
  cdM.textContent = minutes < 10 ? "0" + minutes : minutes;
  cdS.textContent = seconds < 10 ? "0" + seconds : seconds;
}
setInterval(updateCountdown, 1000);

/* =========================================================
   7. FORM VALIDATION TRANG CHỦ
========================================================= */
function validateAndSubmit(e) {
  e.preventDefault();
  let isValid = true;
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  document.getElementById("err-fullname").textContent = "";
  document.getElementById("err-email").textContent = "";
  document.getElementById("err-phone").textContent = "";
  document.getElementById("err-address").textContent = "";

  if (fullname === "") {
    document.getElementById("err-fullname").textContent = "Vui lòng nhập họ và tên.";
    isValid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailRegex.test(email)) {
    document.getElementById("err-email").textContent = "Email không đúng định dạng.";
    isValid = false;
  }
  const phoneRegex = /^0[0-9]{9}$/;
  if (phone === "" || !phoneRegex.test(phone)) {
    document.getElementById("err-phone").textContent = "SĐT phải gồm 10 chữ số bắt đầu bằng 0.";
    isValid = false;
  }
  if (address === "") {
    document.getElementById("err-address").textContent = "Vui lòng nhập địa chỉ giao hàng.";
    isValid = false;
  }

  if (isValid) {
    alert("🎉 Đặt hàng thành công! Chúng tôi sẽ liên hệ bạn sớm.");
    document.getElementById("order-form").reset();
  }
}

/* =========================================================
   8. GIỎ HÀNG (CHUẨN ASM2: BAN ĐẦU RỖNG, TỰ THÊM TĂNG SỐ LƯỢNG)
========================================================= */
let cart = JSON.parse(localStorage.getItem("SHOP_CART")) || [];

function saveCartToStorage() {
  localStorage.setItem("SHOP_CART", JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;
  let totalCount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCount += cart[i].quantity;
  }
  badge.textContent = totalCount;
}

function changeQuantity(productId, delta) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      cart[i].quantity += delta;
      if (cart[i].quantity < 1) {
        cart[i].quantity = 1;
        alert("Số lượng tối thiểu là 1! Nếu muốn bỏ sản phẩm, vui lòng bấm nút Xóa.");
      }
      break;
    }
  }
  saveCartToStorage();
}

function removeFromCart(productId) {
  cart = cart.filter(function (item) {
    return item.id !== productId;
  });
  saveCartToStorage();
}

function executeAddToCart(productId) {
  let product = null;
  for (let i = 0; i < PRODUCTS_DATA.length; i++) {
    if (PRODUCTS_DATA[i].id === productId) {
      product = PRODUCTS_DATA[i];
      break;
    }
  }
  if (!product) return;

  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      cart[i].quantity += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  saveCartToStorage();
  alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

function addToCart(productId) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    alert("Vui lòng đăng nhập tài khoản để thêm sản phẩm vào giỏ!");
    localStorage.setItem("PENDING_PRODUCT_ID", productId);
    window.location.href = "login.html";
    return;
  }
  executeAddToCart(productId);
}

/* =========================================================
   9. HỆ THỐNG TÀI KHOẢN (GIAO DIỆN PHẲNG TINH TẾ)
========================================================= */
function getUsersList() {
  return JSON.parse(localStorage.getItem("USERS_LIST")) || [];
}
function saveUsersList(users) {
  localStorage.setItem("USERS_LIST", JSON.stringify(users));
}
function getCurrentUser() {
  return localStorage.getItem("CURRENT_USER");
}

function handleLogout() {
  localStorage.removeItem("CURRENT_USER");
  updateUserHeader();
  alert("Bạn đã đăng xuất tài khoản.");
  window.location.reload();
}

function updateUserHeader() {
  const user = getCurrentUser();
  const userBox = document.getElementById("user-display");
  if (!userBox) return;

  if (user) {
    userBox.innerHTML = `
      <div class="user-simple">
        <span>👤 Chào, <strong>${user}</strong></span>
        <span class="user-divider">|</span>
        <button type="button" class="btn-logout-link" onclick="handleLogout()">Đăng Xuất</button>
      </div>
    `;
  } else {
    userBox.innerHTML = `
      <a href="login.html" class="auth-nav-link">Đăng Nhập</a>
      <a href="register.html" class="auth-nav-link btn-reg-nav">Đăng Ký</a>
    `;
  }
}

/* =========================================================
   10. KHỞI CHẠY TỔNG HỢP
========================================================= */
renderSlider();
renderHomePage();
renderFooter();
updateCartBadge();
updateUserHeader();
updateCountdown();
