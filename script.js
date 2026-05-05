const elements = {
    openWhatsapp: document.querySelector("#openWhatsapp"),
    sectionPages: document.querySelectorAll(".hidden"),
    btnRedirect: document.querySelectorAll('.redirect')
}

const links = {
    linkedin: "",
    instagram: "",
    whatsapp: "http://wa.me/+5534984380565"
}

function redirectSite () {
    elements.btnRedirect.forEach(btn => {
        btn.addEventListener('click', item => {
            let button = item.target.dataset.link
            window.open(links[button], "_blank")
        })
    })
}


function showSections () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("show")
            }
        })
    },{
        threshold: 0.2
    })

    elements.sectionPages.forEach( el => {
        observer.observe(el)
    })
}

function init () {
    redirectSite()
    showSections()
}

init()
