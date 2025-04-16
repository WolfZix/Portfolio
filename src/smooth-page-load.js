const SmoothPageLoad = () => {
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach(btn => { btn.style.transition = '0.3s' })
    window.addEventListener('DOMContentLoaded', () => { document.body.style.visibility = 'visible' })
}

export default SmoothPageLoad