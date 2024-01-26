let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('ligth')

    const mode = darkMode ? 'ligth' : 'dark'
    event.currentTarget
        .querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
})