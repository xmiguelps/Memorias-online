/*
    let post = document.createElement('div')
    espaço.appendChild(post)
    let div_flex = document.createElement('div')
    let user = String(document.getElementById('nome').value)
    let coment = String(document.getElementById('coment').value)
    document.getElementById('arquivo').addEventListener('change', function(event) {
        var file = event.target.files[0]; // Acessa o primeiro arquivo selecionado
        if (file) {
          var reader = new FileReader();
          reader.onload = function(e) {
            let imagem = document.createElement('img')
            imagem.src = e.target.result; // Exibe a imagem
            imagem.classList.add('postimg')
            post.appendChild(imagem)
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

    post.appendChild(div_flex)
    div_flex.appendChild(comentario)
    div_flex.appendChild(nome) 

//objetivo: aparecer as 3 coisas
  
    Usar no final

    - post.appendChild(imagem)
    - post.appendChild()
    - post.appendChild()*/

const inputFile = document.querySelector("#picture__input")
const pictureImage = document.querySelector(".picture__image")
const pictureImageTxt = "Choose an image"
pictureImage.innerHTML = pictureImageTxt
    
inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target
  const file = inputTarget.files[0]
    
  if (file) {
    const reader = new FileReader()
    
    reader.addEventListener("load", function (e) {
      
      let main_box = document.getElementById("mainbox")

      let txtnome = String(document.querySelector("input#nome").value)
      let nome = document.createElement('h1')
      nome.innerHTML = `-${txtnome}`
      nome.classList.add("postuser")

      let txtcoment = String(document.querySelector
      ("input#coment").value)
      let comentario = document.createElement('p')
      comentario.innerHTML = txtcoment
      comentario.classList.add("postcomentario")
      
      let divflex = document.createElement('div')
      divflex.classList.add("divflex")

      const readerTarget = e.target
      var espaço = document.createElement("div")
      espaço.classList.add("postespaço")
    
      const img = document.createElement("img")
      img.src = readerTarget.result
      img.classList.add("postimg")
    
      pictureImage.innerHTML = ""
      
      main_box.appendChild(espaço)
      espaço.appendChild(img)
      espaço.appendChild(divflex)
      divflex.appendChild(comentario)
      divflex.appendChild(nome)
    })
    
    reader.readAsDataURL(file)
  } else {
        pictureImage.innerHTML = pictureImageTxt
  }
})