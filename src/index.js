let articleDiv = document.getElementById('articlesContainer');
let articleArrs = []
let indexId = 0

window.addEventListener('DOMContentLoaded', catchGuardian)

async function catchGuardian(){
    const response = await fetch('https://content.guardianapis.com/search?show-elements=image&api-key=dc23fc01-7c41-40e7-9bd4-3a13061e59a4&show-fields=all', { method: 'GET' });
    const data = await response.json()
    console.log(data)
    data.response.results.forEach((result) => {
      const newDiv = document.createElement('div')
      const headingElement = document.createElement("h1")
      const photoElement = document.createElement('img')
      const buttonElement = document.createElement('a')
      newDiv.appendChild(headingElement)
      newDiv.appendChild(photoElement)
      newDiv.appendChild(buttonElement)
      headingElement.innerHTML = `<a href='#${indexId}'>${result.webTitle}</a>`
      photoElement.src = `${result.fields.thumbnail}`
      buttonElement.innerText = "Read Article"
      buttonElement.href = `#${indexId}`
      buttonElement.id = "mainButton"
      createArticle(`${indexId}`, `${result.webTitle}`, `${result.fields.body}`, `${result.fields.thumbnail}`)
      articleDiv.appendChild(newDiv)
    })
};

function createArticle(id, title, text, thumbnail){
  let article = new Article(id, title, text, thumbnail)
  articleArrs.push(article)
  indexId ++
  return article
}

makeUrlChangeShowArticle();

function makeUrlChangeShowArticle() {
  window.addEventListener("hashchange", showArticleForCurrentPage);
};

function showArticleForCurrentPage(){
  showArticle(getArticleFromUrl(window.location))
};

function getArticleFromUrl(location){
  return location.hash.split("#")[1];
};

function showArticle(id){
  const closeButton = document.createElement("button");
  const headingElement = document.createElement("h1")
  closeButton.innerText = "Go Back to Home"
  closeButton.id = "mainButton"

  closeButton.addEventListener('click', () =>{
    window.location = "";
  })

  articleDiv.innerHTML = `${articleArrs[id].title}<br>${articleArrs[id].text}`
  articleDiv.appendChild(closeButton)
}
