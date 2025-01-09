function criar() {
    let post = document.createElement('div')
    let espaço = document.getElementById('espaço')
    espaço.appendChild(post)
    postar(post)
}

function postar(post_space) {
    let user = String(document.getElementById('nome').value)
    let coment = String(document.getElementById('coment').value)
    let arquivo = String(document.getElementById('arquivo').value)
    let imagem = document.createElement('img')
    imagem.setAttribute('src', arquivo)
    post_space.innerHTML = `${user} ${coment}`
    post_space.appendChild(imagem) 
}