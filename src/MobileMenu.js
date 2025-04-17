const MobileMenu = () => {
    const bars = document.getElementById('HeaderBars')
    const MobileMenu = document.getElementById('MobileMenu')
    const MobileLinks = document.querySelectorAll('#MobileLink')

    bars.addEventListener('click', () => {
        MobileMenu.classList.toggle('visible');
        document.body.classList.toggle('HideOverflow');
    })

    MobileLinks.forEach( link => {
        link.addEventListener('click', () => {
            MobileMenu.classList.toggle('visible');
            document.body.classList.toggle('HideOverflow');
        })
    })
}

export default MobileMenu