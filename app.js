const URL = "https://covid-api.mmediagroup.fr/v1//cases?country=US";
//const optionValue = document.querySelector("option").value
// console.log(optionValue)
let axiosData = [];
let div = document.querySelector(".searchbar");
//I received syntax for Chart.js from https://www.chartjs.org/docs/latest/getting-started/
const getData = async () => {
  try {
    const headers = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await axios.get(URL, headers);
    axiosData = response.data;

    //console.log(Object.keys(axiosData))
    const arrStates = Object.keys(axiosData).sort();
    const USdeaths = axiosData.All.deaths
    console.log(axiosData.All)
    const deathNum = USdeaths.toString()
    console.log(typeof deathNum)
    const UScases = axiosData.All.confirmed
    const caseNum = UScases.toString()
    console.log(USdeaths)
    console.log(response);
    console.log(arrStates);
    renderStates(arrStates);
    renderDeaths(deathNum)
    renderCases (caseNum)
    //renderData(optionValue , axiosData)
    //removeStats()
  } catch (error) {
    console.log(error);
  }
};

getData();
const value = (e) => {
  e.preventDefault();
  let stateOptions = document.querySelector("select");
  //const optionValue = document.querySelector("option")
  let stateSelected = stateOptions.options[stateOptions.selectedIndex].text;
  console.log(stateSelected);
  removeStats()
  renderData(stateSelected);
  
};

const renderStates = (states) => {
  let stateOptions = document.querySelector("select");
  //console.log(stateOptions)

  states.forEach((state) => {
    const newOption = document.createElement("option");
    newOption.innerText = `${state}`;
    newOption.value = `${state}`;
    //console.log(newOption.value)
    stateOptions.appendChild(newOption);
  });
};

const renderDeaths = (death) => {
  let deathStats = document.querySelector("#deathnumber");
  const deathArray = death.split("")
    deathArray.splice(3,0,",")
   deathNum = deathArray.join("")
   // console.log(deathSeperated)
    deathStats.innerText = `${deathNum}`;
  //}  
}

const renderCases = (cases) => {
  let casesStats = document.querySelector("#casenumber")
  console.log(cases)
  const caseArray = cases.split("")
  caseArray.splice(2, 0, ",")
  caseArray.splice(6, 0, ",")
  const fullNumber = caseArray.join("")
  console.log(caseArray)
  casesStats.innerHTML= `${fullNumber}`;
}


function removeStats() {
  const removeOption = document.querySelector("#newInfo");
  while (removeOption.lastChild) {
    console.log(removeOption.lastChild);
    removeOption.removeChild(removeOption.lastChild);
  }
}



const renderData = (stateValue) => {
  // console.log(stateValue)
  // console.log(axiosData[stateValue])
  let state = axiosData[stateValue];
  let newInfoSection = document.querySelector("#newInfo");

  newInfoSection.innerHTML += `
<p id="confirmed-cases">Confirmed Cases: ${state.confirmed}</p>
<p id="confirmed-deaths">Confirmed Deaths: ${state.deaths}</p>
<p id="deaths">Recovered: ${state.recovered}</p>
 `;

  //   console.log(viewData)
};

const form = document.querySelector("form");
form.addEventListener("submit", value);

