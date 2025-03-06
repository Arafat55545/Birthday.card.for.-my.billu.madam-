let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.transform = "rotateY(-180deg)";
        pages[currentPage].style.zIndex = pages.length - currentPage; 
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].style.transform = "rotateY(0deg)";
        pages[currentPage].style.zIndex = pages.length - currentPage;
    }
}
