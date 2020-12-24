const URL = "https://covid-api.mmediagroup.fr/v1//cases?country=US"
//const optionValue = document.querySelector("option").value
// console.log(optionValue)
let axiosData = []
let div = document.querySelector(".searchbar")

const getData = async () => {
  try {
    const headers = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
    const response = await axios.get(URL, headers)
    axiosData = response.data

    //console.log(Object.keys(axiosData))
    const arrStates = Object.keys(axiosData).sort()
    console.log(response)
    renderStates(arrStates)
   //renderData(optionValue , axiosData)
    
   //removeStats()

  
  
  } catch (error) {
    console.log(error)
  }
  
  
  
  
}

getData()
const value = (e) => {
 e.preventDefault()
const optionValue = document.querySelector("option").value
renderData(optionValue, axiosData)
}

const renderStates = (states) => {
  let stateOptions = document.querySelector("select")
  //console.log(stateOptions)
  
  states.forEach((state) => {
    const newOption = document.createElement("option")
    newOption.innerText = `${state}`
    newOption.value = `${state}`
    //console.log(newOption.value)
    stateOptions.appendChild(newOption)
   });
}

// function getValue(e) {
//   e.preventDefault()
//   console.log(optionValue)
//   getData(optionValue)
// }

function removeStats() {
  const removeOption = document.querySelector("form")
  while (removeOption.lastChild) {
    console.log(removeOption.lastChild)
    removeOption.removeChild(removeOption.lastChild)
    
  }
  
}

const renderData = () => {

  let viewData = axiosData.map((state) => {
    return state //=== optionValue
  }) 
  div.innerHTML += `
<p>${viewData.confirmed}</p>
<p>${viewData.deaths}</p>
<p>${viewData.recovered}</p>
 `
  
  console.log(viewData)
  
}


const form = document.querySelector("form")
form.addEventListener("submit",value)
//   (e) => {
//   e.preventDefault()
//   console.log(e.target.value)
// }


// )

