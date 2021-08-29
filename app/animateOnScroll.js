// INTERSECT OBSERVER TARGET 
const navbar = document.querySelector(".navbar-top")
const navbarIntersectTarget = document.querySelector(".landing-page-content")
const logoNavbar = document.querySelector(".logo-navbar")
const about = document.querySelectorAll(".about")
const mainFeatureMascotImg = document.querySelectorAll(".feature-redirect-img")


// INTERSECT OBSERVER OPTIONS FOR EACH TARGET
let navbarObserverOption = {
    root: document.querySelector("navbar"),
    rootMargin: "200px",
}

let aboutObserverOption = {
    rootMargin: "200px",
    treshold: 0.5
}

let mascotOberserverOption = {
    root: mainFeatureMascotImg.parentElement,
    rootMargin: "100px",
    treshold: 1
}


// ANIMATE ON SCROLL EVENT

// CHANGE NAV ON SCROLL ONLY ON DESKTOP VIEW
const mediaQuery = window.matchMedia("(min-width: 768px)")

// check for viewport matches
function changeNavOnScroll(e){
    if(e.matches){
        observerNav.observe(navbarIntersectTarget)
        console.log("matches")
    } else {
        observerNav.unobserve(navbarIntersectTarget)
        console.log("no matches")
    }
}

const observerNav = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add("navbar-top-scrolled")
            logoNavbar.src = "./assets/icon/logo in navbar v1.svg"
        } else {
            navbar.classList.remove("navbar-top-scrolled")
            logoNavbar.src = "./assets/icon/logo in navbar v2.svg"
        }
    })
}, navbarObserverOption)

// listen for viewport changes
mediaQuery.addListener(changeNavOnScroll)
changeNavOnScroll(mediaQuery)

const observerAbout = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        // CHECK IF THE ELEMENT IS INTERSECTING OR NOT
        if (!entry.isIntersecting) {
            return
        } else {

            // FADE IN LEFT
            if (entry.target.dataset.animation == "fade-left") {
                entry.target.classList.add("wipe-left");

                // REMOVING ANIMATION CLASS AFTER THE ANIMATION END
                entry.target.addEventListener("animationend", () => {
                    entry.target.classList.remove("wipe-left");
                })
            }

            // FADE IN RIGHT
            else if (entry.target.dataset.animation == "fade-right") {
                entry.target.classList.add("wipe-right");

                // REMOVING ANIMATION CLASS AFTER THE ANIMATION END
                entry.target.addEventListener("animationend", () => {
                    entry.target.classList.remove("wipe-right");
                })
            }

            // STOP OBSERVING
            observerAbout.unobserve(entry.target)
        }
    })
}, aboutObserverOption)


const observerMascot = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        // CHECK IF THE ELEMENT IS INTERSECTING OR NOT
        if (!entry.isIntersecting) {
            return
        } else {
            if (entry.target.dataset.animation == "fade-up") {
                entry.target.classList.add("wipe-up");

                // REMOVING ANIMATION CLASS AFTER THE ANIMATION END
                entry.target.addEventListener("animationend", () => {
                    entry.target.classList.remove("wipe-up");
                })

                // observerMascot.unobserve(entry.target)
            }
        }
    })
}, aboutObserverOption)


// OSERVING TARGETS
about.forEach(abouts => {
    observerAbout.observe(abouts)
})

mainFeatureMascotImg.forEach(images => {
    observerMascot.observe(images)
})

