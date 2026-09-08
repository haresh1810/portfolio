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
const contactForm = document.getElementById('contact-form')

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

contactForm.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(contactForm)
    const name = formData.get('name')
    const email = formData.get('email')
    const project = formData.get('project')
    const message = formData.get('message')
    const subject = `Portfolio enquiry: ${project}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

    window.location.href = `mailto:genisyscybertech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

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

