console.log('hi')
let titlesDiv = document.getElementById('titlesDiv')

async function catchGuardian(){
    const response = await fetch('https://content.guardianapis.com/search?show-elements=image&api-key=dc23fc01-7c41-40e7-9bd4-3a13061e59a4&show-fields=thumbnail')
    const data = await response.json()
    const img = document.createElement('img')
    img.src = 'data.response.results[0].results.thumbnail'
    img.width = '400'
    console.log(data)
    console.log(data.response.results[0].fields.thumbnail)
    for (let i = 0 ; i < data.response.results.length; i++){
      titlesDiv.innerHTML += `<h1>${data.response.results[i].webTitle}</h1><br>
      <img src="${data.response.results[i].fields.thumbnail}">`
    }
  }

  catchGuardian()
