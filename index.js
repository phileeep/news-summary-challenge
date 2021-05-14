console.log('hi')
let titlesDiv = document.getElementById('titlesDiv')

async function catchGuardian(){
    const response = await fetch('https://content.guardianapis.com/search?api-key=dc23fc01-7c41-40e7-9bd4-3a13061e59a4')
    const data = await response.json()
    console.log(data)
    titlesDiv.innerHTML = `<h1>${data.response.results[0].webTitle}</h1>
    <br>
    <h1>${data.response.results[1].webTitle}</h1>
    <h1>${data.response.results[2].webTitle}</h1>
    ` 
  }

  catchGuardian()