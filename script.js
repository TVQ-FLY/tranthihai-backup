// Hiển thị ảnh (Thêm ảnh theo cấu trúc img + số thứ tự đuôi PNG vào Image)
// Tăng số lượng ảnh hiển thị ở biến totalImages
document.addEventListener("DOMContentLoaded", function() {
    const imageGrid = document.getElementById("image-grid");
    const totalImages = 51; // Số lượng ảnh mà bạn có

    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement("img");
        img.src = `Image/img${i}.png`; // Tên file ảnh theo thứ tự
        img.alt = `Image ${i}`;
        img.classList.add("w-full", "h-auto");
        const col = document.createElement("div");
        col.classList.add("image-container"); // Thêm lớp CSS cho thẻ div chứa ảnh
        col.appendChild(img);
        imageGrid.appendChild(col);
    }
});

// Back top
let backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Smooth
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// // Lắng nghe sự kiện 'contextmenu' trên toàn bộ trang
// document.addEventListener('contextmenu', function(event) {
//     // Ngăn chặn menu chuột phải mặc định
//     event.preventDefault();
//     // Hiển thị thông báo
//     alert('Hành động của bạn bị vô hiệu hóa !\n - Sent by Trần Văn Quyền -');
// });

// // Lắng nghe sự kiện 'keydown' để kiểm tra khi người dùng nhấn phím F12
// document.addEventListener('keydown', function(event) {
//     // Kiểm tra nếu phím F12 (mã phím 123) được nhấn
//     if (event.key === 'F12' || event.keyCode === 123) {
//         event.preventDefault();
//         alert('Bạn không thể mở DevTools bằng F12! \n - Sent by Trần Văn Quyền -');
//     }
// });


// // Khởi tạo biến để theo dõi thời gian giữ chuột
// let mouseHoldTimeout;
// // Lắng nghe sự kiện 'mousedown' trên tất cả các ảnh
// document.querySelectorAll('#image-grid').forEach(function(image) {
//     image.addEventListener('mousedown', function(event) {
//         // Khởi động bộ đếm thời gian
//         mouseHoldTimeout = setTimeout(function() {
//             event.preventDefault(); // Ngăn hành động mặc định
//             alert('Bạn không thể giữ chuột trên ảnh này ! \n - Sent by Trần Văn Quyền -');
//         }, 500); // Ngưỡng giữ chuột (500ms)
//     });

//     // Khi nhả chuột, xóa bộ đếm giờ
//     image.addEventListener('mouseup', function() {
//         clearTimeout(mouseHoldTimeout);
//     });

//     // Khi chuột rời khỏi ảnh, xóa bộ đếm giờ
//     image.addEventListener('mouseleave', function() {
//         clearTimeout(mouseHoldTimeout);
//     });
// });