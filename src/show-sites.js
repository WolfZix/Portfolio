const showSites = () => {
    const projects = document.querySelectorAll('#ItemButton')
    const CV = document.querySelector('.OpenCV')

    // CV.addEventListener('click', () => {
    //     window.open('Patryk Domaszek CV.png', '_blank', 'width=538,height=831,resizable=yes')
    // })

    projects.forEach(project => {
        project.addEventListener('click', e => {
            const img = e.target
            window.open(img.src, '_blank')
        })
    })
}

export default showSites