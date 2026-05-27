import { supabase } from './supabase'

const form = document.querySelector('#contactForm')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const button = form.querySelector('button')

    button.disabled = true
    button.innerText = 'Enviando...'

    const nome = document.querySelector('#nome').value
    const telefone = document.querySelector('#telefone').value
    const email = document.querySelector('#email').value

    try {

        const { error } = await supabase
            .from('contatos')
            .insert([
                {
                    nome,
                    telefone,
                    email
                }
            ])

        if(error) throw error

        const numeroWhatsapp = '5534984380565'

        const mensagem = encodeURIComponent(
            `Olá, me chamo ${nome} e gostaria de atendimento.`
        )

        window.open(
            `https://wa.me/${numeroWhatsapp}?text=${mensagem}`,
            '_blank'
        )

        form.reset()

    } catch(err) {

        console.error(err)
        alert('Erro ao enviar formulário.')

    } finally {

        button.disabled = false
        button.innerHTML = `
            <i class="bi bi-whatsapp"></i>
            <p>Entre em contato agora pelo Whatsapp</p>
        `
    }
})