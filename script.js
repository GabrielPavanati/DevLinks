function toggleMode() {
    const html = document.documentElement
    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        html.classList.remove('light')
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de perfil de Gabriel Pavanati em modo escuro')
    } else {
        html.classList.add('light')
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de perfil de Gabriel Pavanati em modo claro.')
    }
}