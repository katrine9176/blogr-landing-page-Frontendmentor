const burgerBtn = document.querySelector('.burger')
const closeBtn = document.querySelector('.close')
const toggleBox = document.querySelector('.toggle-box')
const toggleLinksBoxes = document.querySelectorAll('.toggle-links')
const arrowsOpen = document.querySelectorAll('.arrow-open')
const arrowsClose = document.querySelectorAll('.arrow-close')
const headPs = document.querySelectorAll('.head')
const links = document.querySelectorAll('.link-box li a')
const btns = document.querySelectorAll('.btn')

const openNav = () => {
	toggleBox.classList.add('open')
	burgerBtn.classList.add('close')
	closeBtn.classList.remove('close')
    document.body.classList.add('overflow')
}

const closing = () => {
    toggleLinksBoxes.forEach(box => {
        box.classList.add('close')
    })
    arrowsClose.forEach(arr => {
        arr.classList.add('close')
    })
    arrowsOpen.forEach(arr => {
        arr.classList.remove('close')
    })
    headPs.forEach(p => {
        p.classList.remove('change-color')
    })
}

const closeNav = () => {
	toggleBox.classList.remove('open')
	burgerBtn.classList.remove('close')
	closeBtn.classList.add('close')
    document.body.classList.remove('overflow')
    closing()
}

links.forEach(link => {
	link.addEventListener('click', () => {
		toggleBox.classList.remove('open')
		burgerBtn.classList.remove('close')
		closeBtn.classList.add('close')
        document.body.classList.remove('overflow')
        closing()
	})
})

arrowsOpen.forEach(arr => {
	arr.addEventListener('click', () => {
        arr.previousElementSibling.classList.add('change-color')
		arr.nextElementSibling.classList.remove('close')
		arr.nextElementSibling.nextElementSibling.classList.remove('close')
		arr.classList.add('close')
	})
})

arrowsClose.forEach(arr => {
	arr.addEventListener('click', () => {
		arr.nextElementSibling.classList.add('close')
		arr.previousElementSibling.classList.remove('close')
        arr.previousElementSibling.previousElementSibling.classList.remove('change-color')
		arr.classList.add('close')
	})
})

headPs.forEach(p => {
	p.addEventListener('click', () => {
        p.classList.toggle('change-color')
		p.nextElementSibling.classList.toggle('close')
		p.nextElementSibling.nextElementSibling.classList.toggle('close')
		p.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('close')
	})
})

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        closing()
        toggleBox.classList.remove('open')
        closeBtn.classList.add('close')
        burgerBtn.classList.remove('close')
        document.body.classList.remove('overflow')
    })
})

burgerBtn.addEventListener('click', openNav)
closeBtn.addEventListener('click', closeNav)
