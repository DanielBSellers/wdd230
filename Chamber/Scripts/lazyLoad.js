const allImages = document.querySelectorAll("img[data-src]");

const lazyLoad = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => {
        img.removeAttribute("data-src");
        img.className = "in"
    };
};


const options = {
    threshold: 1,
    rootMargin: "0px 0px 30px 0px"
};

if ('IntersectionObserver' in window) {
    const obsrvr = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                lazyLoad(item.target);
                observer.unobserve(item.target);
            }
        });
    }, options);
    allImages.forEach((img) => {
        obsrvr.observe(img);
    });
}