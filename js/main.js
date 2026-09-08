/* ====== MENU SHOW Y HIDDEN ====== */
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')


/* ====== SHOW ====== */

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

/* ====== HIDE ====== */
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/* ====== REMOVE MENU ====== */
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ====== SCROLL SECTION ACTIVE LINK ====== */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        const matchingLink = document.querySelector(`.nav_menu a[href="#${sectionId}"]`)

        if (!matchingLink) {
            return
        }

        matchingLink.classList.toggle(
            'active',
            scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
        )
    })
}

