// Scroll Trên cùng

$("#go-top").click(function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Kiểm tra khi trang đã tải xong
$(document).ready(function () {
  // Lắng nghe sự kiện scroll
  $(document).scroll(function () {
    // Nếu người dùng cuộn trang xuống hơn 600px thì hiển thị nút "go-top"
    if ($(document).scrollTop() >= 600) {
      $("#go-top").addClass("go-top-show");
    } else {
      // Nếu không thì ẩn nút "go-top"
      $("#go-top").removeClass("go-top-show");
    }
  });
});

// Slide 

$('#game51-swiper-wrapper').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 100,
  arrows: false,
});