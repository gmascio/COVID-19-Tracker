const URL = 'http://cors-anywhere.herokuapp.com/http://covid-api.mmediagroup.fr/v1/cases?country=US';
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
    const arrStates = Object.keys(axiosData).sort();
    const USdeaths = axiosData.All.deaths
    const deathNum = USdeaths.toString()
    const UScases = axiosData.All.confirmed
    const caseNum = UScases.toString()
  
    renderStates(arrStates);
    renderDeaths(deathNum)
    renderCases (caseNum)
    
  } catch (error) {
    console.log(error);
  }
};

getData();
const value = (e) => {
  e.preventDefault();
  let stateOptions = document.querySelector("select");
  let stateSelected = stateOptions.options[stateOptions.selectedIndex].text;
  console.log(stateSelected);
  removeStats()
  renderData(stateSelected);
};

//Producing a dropdown option with all listed states pulled from an API 
const renderStates = (states) => {
  let stateOptions = document.querySelector("select");

  states.forEach((state) => {
    const newOption = document.createElement("option");
    newOption.innerText = `${state}`;
    newOption.value = `${state}`;
    stateOptions.appendChild(newOption);
  });
};

//Calling API to render number for total US COVID-19 death cases while incorporating an algorithm to include commas in relevant positions
const renderDeaths = (death) => {
  let deathStats = document.querySelector("#deathnumber");
  const deathArray = death.split("")
    deathArray.splice(3,0,",")
    deathNum = deathArray.join("")
    deathStats.innerText = `${deathNum}`;
}

////Calling API to render number for total US COVID-19 confirmed cases while incorporating an algorithm to include commas in relevant positions
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

//Removing previous submit data
function removeStats() {
  const removeOption = document.querySelector("#newInfo");
  while (removeOption.lastChild) {
    console.log(removeOption.lastChild);
    removeOption.removeChild(removeOption.lastChild);
  }
}


//Rendering data from initial API endpoint to produce COVID statistics for each state
const renderData = (stateValue) => {
  let state = axiosData[stateValue];
  let newInfoSection = document.querySelector("#newInfo");

  newInfoSection.innerHTML += `
<p id="confirmed-cases">Confirmed Cases: ${state.confirmed}</p>
<p id="confirmed-deaths">Confirmed Deaths: ${state.deaths}</p>
<p id="recovered">Recovered: ${state.recovered}</p>
 `;
};

const form = document.querySelector("form");
form.addEventListener("submit", value);

