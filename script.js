function toggleMode() {
    const html = document.documentElement
    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        html.classList.remove('light')
        img.setAttribute('src', './assets/Avatar.png')
        img.setAttribute('alt', 'Foto de perfil de Gabriel Pavanati.')
    } else {
        html.classList.add('light')
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de perfil de Gabriel Pavanati na praia.')
    }
}