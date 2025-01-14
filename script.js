function postar() {
    let espaço = document.getElementById('espaço')
    let post = document.createElement('div')
    espaço.appendChild(post)
    let div_flex = document.createElement('div')
    let user = String(document.getElementById('nome').value)
    let coment = String(document.getElementById('coment').value)
    let imagem = document.createElement('img')
    document.getElementById('arquivo').addEventListener('change', function(event) {
        var file = event.target.files[0]; // Acessa o primeiro arquivo selecionado
        if (file) {
          var reader = new FileReader();
          reader.onload = function(e) {
            imagem.src = e.target.result; // Exibe a imagem
          }
          reader.readAsDataURL(file); // Lê o arquivo como URL de dados (base64)
        }
      })
    post.setAttribute('class', 'postespaço')
    div_flex.setAttribute('class', 'divflex')
    
    let nome = document.createElement('h1')
    nome.setAttribute('class', 'postuser')
    nome.innerText = `-${user}`
    
    let comentario = document.createElement('p')
    comentario.setAttribute('class', 'postcoment')
    comentario.innerText = coment
      
    imagem.setAttribute('class', 'postimg')

    post.appendChild(imagem)
    post.appendChild(div_flex)
    div_flex.appendChild(comentario)
    div_flex.appendChild(nome)
}   

//objetivo: aparecer as 3 coisas
/*  
    Usar no final

    - post.appendChild(imagem)
    - post.appendChild()
    - post.appendChild()*/