let toggleButton = document.getElementsByClassName('toggleButton')[0]
let links = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active')
})