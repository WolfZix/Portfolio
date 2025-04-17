const MobileMenu = () => {
    const bars = document.getElementById('HeaderBars')
    const MobileMenu = document.getElementById('MobileMenu')
    const MobileLinks = document.querySelectorAll('#MobileLink')

    bars.addEventListener('click', () => {
        MobileMenu.classList.toggle('visible');
    })

    MobileLinks.forEach( link => {
        link.addEventListener('click', () => {
            MobileMenu.classList.toggle('visible');
        })
    })
}

export default MobileMenu