const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.querySelectorAll('.circle')

let currentActive = 1

const Update = () => {
    circle.forEach((circle, i) => {
        i < currentActive ? circle.classList.add('active') : circle.classList.remove('active')
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%'
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circle.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

next.onclick = () => {
    currentActive++
    if (currentActive > circle.length) {
        currentActive = circle.length
    }
    Update()
}

prev.onclick = () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    Update()
}