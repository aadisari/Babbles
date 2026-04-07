const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('intersecting');
            } else {
                entry.target.classList.remove('intersecting');
            }
        })
    },
    {
        rootMargin: '0px',
        threshold: [0, 0.1, 1],
    },
)

const tags = document.querySelectorAll('p, span, img, .fade')

tags.forEach((tag) => {
    observer.observe(tag);
})