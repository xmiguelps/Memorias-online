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
      nome.setAttribute('id', 'valuenome')

      let txtcoment = String(document.querySelector
      ("input#coment").value)
      let comentario = document.createElement('p')
      comentario.innerHTML = txtcoment
      comentario.classList.add("postcomentario")
      comentario.setAttribute('id', 'valuecoment')
      
      let divflex = document.createElement('div')
      divflex.classList.add("divflex")
      divflex.setAttribute('id', 'valuedivflex')

      const readerTarget = e.target
      var espaço = document.createElement("div")
      espaço.classList.add("postespaço")
      espaço.setAttribute('id', 'valueespaço')
    
      const img = document.createElement("img")
      img.src = readerTarget.result
      img.classList.add("postimg")
      img.setAttribute('id', 'valueimg')
    
      pictureImage.innerHTML = ""
      
      main_box.appendChild(espaço)
      espaço.appendChild(img)
      espaço.appendChild(divflex)
      divflex.appendChild(comentario)
      divflex.appendChild(nome)

      salvar(main_box.outerHTML)
    })
    
    reader.readAsDataURL(file)
  } else {
        pictureImage.innerHTML = pictureImageTxt
  }
})

function salvar(novoElemento) {
  let files = JSON.parse(localStorage.getItem("files")) || [];
  files.push(novoElemento)
  localStorage.setItem("files", JSON.stringify(files))
  var box = document.getElementById('box')
  box.style.height += '500px'
  location.reload()
}

window.onload = function () {
  let save_files = JSON.parse(localStorage.getItem('files'))

   if (save_files) {
      let container = document.getElementById('box')
      
      save_files.forEach(elementoHTML => {
      let tempContainer = document.createElement('div')
      tempContainer.innerHTML = elementoHTML
      let elemento = tempContainer.firstChild

      container.appendChild(elemento)
    })
  }
}