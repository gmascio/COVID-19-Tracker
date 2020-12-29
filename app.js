const URL = "https://covid-api.mmediagroup.fr/v1//cases?country=US";
//const optionValue = document.querySelector("option").value
// console.log(optionValue)
let axiosData = [];
let div = document.querySelector(".searchbar");

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
    const UScases = axiosData.All.confirmed
    console.log(USdeaths)
    console.log(response);
    console.log(arrStates);
    renderStates(arrStates);
    renderDeaths(USdeaths)
    renderCases (UScases)
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
  deathStats.innerText = `${death}`;

}

const renderCases = (cases) => {
  let casesStats = document.querySelector("#casenumber")
  casesStats.innerHTML= `${cases}`;
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
