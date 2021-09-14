const imgs = document.querySelectorAll('.img');
imgs.forEach(img => {
    img.onclick = () => {
        removeImgActive()
        img.classList.add('active')
    }
})

const removeImgActive = () => {
    imgs.forEach(img => {
        img.classList.remove('active');
    })
}