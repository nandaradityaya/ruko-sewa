// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 100000
// })

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

// ----------------- 2nd carousel ----------------- //

function toggleCard() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

function applyFilter() {
  var minPrice = document.getElementById("min-price").value;
  var maxPrice = document.getElementById("max-price").value;

  // Apply your filter logic here using minPrice and maxPrice
  // For this example, let's just log the selected range
  console.log("Min Price:", minPrice);
  console.log("Max Price:", maxPrice);
}

function toggleCardTanah() {
  var dropdownContent = document.getElementById("dropdown-content-tanah");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

function applyFilterTanah() {
  var minWidth = document.getElementById("min-width").value;
  var maxWidth = document.getElementById("max-width").value;

  // Apply your filter logic here using minWidth and maxWidth
  // For this example, let's just log the selected range
  console.log("Min Width:", minWidth);
  console.log("Max Width:", maxWidth);
}

// SUB MENU TOGGLE
let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

// Upload Image

const cardContainers = [];
const imageContainers = [];
const uploadedImages = [];
const formFiles = [];

for (let i = 1; i <= 3; i++) {
  cardContainers[i] = document.getElementById(`cardContainer${i}`);
  imageContainers[i] = document.getElementById(`imageContainer${i}`);
  uploadedImages[i] = document.getElementById(`uploadedImage${i}`);
  formFiles[i] = document.getElementById(`formFile${i}`);

  formFiles[i].addEventListener("change", function () {
    if (formFiles[i].files && formFiles[i].files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        uploadedImages[i].src = e.target.result;
        cardContainers[i].style.display = "none";
        imageContainers[i].style.display = "block";
      };

      reader.readAsDataURL(formFiles[i].files[0]);
    }
  });
}
