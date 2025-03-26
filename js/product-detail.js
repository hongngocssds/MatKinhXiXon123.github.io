// 1️⃣ Lấy ID sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// 2️⃣ Dữ liệu giả lập về sản phẩm (có thể thay bằng database)
const products = [
    { id: "1", name: "Kính cận cao cấp", price: "980.000đ", img: "img/kinh-can-1.jpg", category: "Kính cận" },
    { id: "2", name: "Kính râm chống UV", price: "1.200.000đ", img: "img/kinh-ram-1.jpg", category: "Kính râm" },
    { id: "3", name: "Lens mắt màu xanh", price: "600.000đ", img: "img/lens-1.jpg", category: "Lens" }
];

// 3️⃣ Tìm sản phẩm theo ID
const product = products.find(p => p.id === productId);

// 4️⃣ Nếu tìm thấy sản phẩm, hiển thị lên trang
if (product) {
    document.getElementById("product-img").src = product.img;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-category").textContent = product.category;
} else {
    document.querySelector(".product-detail-container").innerHTML = "<h2>Sản phẩm không tồn tại!</h2>";
}

