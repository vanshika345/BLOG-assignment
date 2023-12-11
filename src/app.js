class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail){
    this.title=title
    this.detail=detail
  }

  addTitle(){
    var title_card = document.createElement('h1')
    title_card.setAttribute("id","blog-title")
    console.log(title_card)
    document.getElementById('card-text').appendChild(title_card)
    title_card.innerHTML+=this.title
  }
  addDescription(){
    var description_card = document.createElement('p')
    description_card.setAttribute("id","blog-description")
    document.getElementById('card-text').appendChild(description_card)
    description_card.innerHTML += this.detail

  }

}
// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`

let toggle = true
function helperAddPost(){
  if (toggle == true){
    document.getElementById("popupContact").style.display = "block"
    toggle = !toggle
  }else{
    document.getElementById("popupContact").style.display="none"
    toggle=!toggle
  }
}

function helperPost(){
  let title = document.getElementById("title").value
  let description = document.getElementById("detail").value
  var blog = new Blog(title, description)
  blog.addDescription()
  blog.addTitle()
  document.getElementById("popupContact").style.display="none"
}
