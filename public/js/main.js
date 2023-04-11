const toggleBtn = document.getElementById('toggleBtn')
const toggle = document.querySelectorAll('.toggle')
toggleBtn.addEventListener('click', () => {
    console.log('clicked')
    toggleBtn.classList.toggle('btn-danger')
    toggleBtn.classList.toggle('btn-warning')

    toggle.forEach(element => {
        element.classList.toggle('d-none')
    })
})