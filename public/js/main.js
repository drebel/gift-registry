const toggleBtn = document.getElementById('toggleBtn')
const toggle = document.querySelectorAll('.toggle')
toggleBtn.addEventListener('input', () => {
    toggle.forEach(element => {
        element.classList.toggle('d-none')
    })
})