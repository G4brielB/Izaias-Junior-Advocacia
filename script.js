const elements = {
    sectionPages: document.querySelectorAll(".hidden"),
    btnRedirect: document.querySelectorAll('.redirect'),
    btnChat: document.querySelector(".btn-chat"),
    interfaceChat: document.querySelector(".interface-chat"),
    closeChat: document.querySelector(".close"),
    textWhatsapp: document.querySelector(".text-whatsapp"),
    btnTextWhatsapp: document.querySelector("#btnTextWhatsapp")
}

const links = {
    linkedin: "https://www.linkedin.com/in/dr-izaias-barros-junior/",
    instagram: "https://www.instagram.com/izzaiasjr",
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

function showChat () {
    elements.btnChat.addEventListener('click', () => {
        elements.interfaceChat.classList.add('active')
    })

    elements.closeChat.addEventListener("click", () => {
        elements.interfaceChat.classList.remove("active")
    })
}

function sendMessageWhatsapp () {
    elements.btnTextWhatsapp.addEventListener("click", e => {
        e.preventDefault()
        const text = elements.textWhatsapp.value
        const message = encodeURIComponent(`${text}`)
        const messagelink = `http://wa.me/+5534984380565?text="${message}"`
        window.open(messagelink, '_blank')
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
    sendMessageWhatsapp()
    showSections()
    showChat()
}

init()
