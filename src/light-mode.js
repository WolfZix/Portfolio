const LightMode = () => {
    let isLight = false;
    const Sun = document.getElementById('SunButton')
    const MobileSun = document.getElementById('MobileMenu-Sun')
    const HeroTitle = document.getElementById('Hero-Title')
    const WorkDesc = document.getElementById('featured')
    const WorkHeader = document.getElementById('work-header')
    const WorkHeaderFirst = document.getElementById('workheaderfirst')
    const Future = document.getElementById('future')
    const AboutFontColor = document.getElementById('about')
    const Contact = document.getElementById('contact')
    const HeaderLinks = document.querySelectorAll('#HeaderLink')
    const MobileLinks = document.querySelectorAll('#MobileLink')
    const MobileMenu = document.getElementById('MobileMenu')
    const HeaderBars = document.getElementById('HeaderBars')

    console.log(MobileMenu)

    Sun.addEventListener('click', () => {
        HeroTitle.classList.toggle('DarkModeColor');
        AboutFontColor.classList.toggle('DarkModeColor');
        WorkDesc.classList.toggle('DarkModeColor');
        WorkHeader.classList.toggle('DarkModeColor');
        Future.classList.toggle('DarkModeColor');
        Contact.classList.toggle('DarkModeColor');
        document.body.classList.toggle('LightModeBg');
        MobileMenu.classList.toggle('LightModeBg');
        Sun.classList.toggle('DarkModeColor');
        WorkHeaderFirst.classList.toggle('DarkModeColor');
        HeaderLinks.forEach(link => { link.classList.toggle('DarkModeColor'); })
        isLight = !isLight;
    })

    MobileSun.addEventListener('click', () => {
        HeroTitle.classList.toggle('DarkModeColor');
        AboutFontColor.classList.toggle('DarkModeColor');
        WorkDesc.classList.toggle('DarkModeColor');
        WorkHeader.classList.toggle('DarkModeColor');
        Future.classList.toggle('DarkModeColor');
        Contact.classList.toggle('DarkModeColor');
        document.body.classList.toggle('LightModeBg');
        MobileMenu.classList.toggle('LightModeBg');
        MobileSun.classList.toggle('DarkModeColor');
        WorkHeaderFirst.classList.toggle('DarkModeColor');
        HeaderBars.classList.toggle('DarkModeColor');
        MobileLinks.forEach(link => { link.classList.toggle('DarkModeColor'); })
        isLight = !isLight;
    })
}

export default LightMode