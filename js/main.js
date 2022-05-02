document.addEventListener('DOMContentLoaded', (e) => {
    const clickHandler = document.querySelector('.submitButton')
    console.log(clickHandler);

    clickHandler.addEventListener('click', (ev) => {
        ev.preventDefault()
        console.log('clicked');
    })
})

