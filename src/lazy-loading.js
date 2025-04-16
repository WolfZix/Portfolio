const lazyloadingFun = () => {
    const AboutlazyLoading = document.querySelectorAll('.loading')
    const WorklazyLoading = document.querySelectorAll('#ItemButton')

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('loading')
                entry.target.classList.add('loaded')
                observer.unobserve(entry.target)
            }
        })
    })

    AboutlazyLoading.forEach(lazy => {
        observer.observe(lazy);
    })

    WorklazyLoading.forEach(lazy => {
        observer.observe(lazy);
    })
}

export default lazyloadingFun