window.addEventListener('load', function () {
    // Lấy tất cả các thẻ <a>
    var links = document.getElementsByClassName('link-header');

    // Duyệt qua từng thẻ <a> và gắn sự kiện hover
    for (var i = 0; i < links.length; i++) {
        // Lắng nghe sự kiện hover vào
        links[i].addEventListener('mouseenter', function () {
            // Lấy chiều rộng của thẻ <a>
            var width = this.offsetWidth;

            // Tính toán giá trị width cho dòng gạch
            var lineWidth = Math.floor(width / 2) + 'px';

            // Thiết lập chiều rộng của dòng gạch
            this.style.setProperty('--line-width', lineWidth);
        });

        // Lắng nghe sự kiện hover ra
        links[i].addEventListener('mouseleave', function () {
            // Thiết lập chiều rộng của dòng gạch về 0
            this.style.setProperty('--line-width', '0px');
        });
    }
});