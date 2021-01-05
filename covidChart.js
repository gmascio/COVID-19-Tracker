//I received syntax for Chart.js from https://www.chartjs.org/docs/latest/getting-started/
const deathUrl =
"https://covid-api.mmediagroup.fr/v1/history?country=UnitedStatesofAmerica&status=deaths";
const getData2 = async () => {
try {
  const headers = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  const response = await axios.get(deathUrl, headers);
  //axiosData = response.data;

  console.log(response);
  const dates = response.data.US.All.dates;
  console.log(dates);
  drawChart(dates)

  
} catch (error) {
  console.log(error);
}
};
getData2();

const drawChart = (dates) => {
const labels = Object.keys(dates).reverse()
const data = Object.values(dates).reverse()
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart I want to create
  type: "line",

  // The data for my dataset
  data: {
    labels: [
     ...labels
    ],
    datasets: [
      {
        label: "Confirmed Cases of COVID-19 in the US",
        backgroundColor: "rgb(215, 100, 65)",
        borderColor: "rgb(215, 100, 65)",
        data: [...data],
      },
    ],
    options: {
      maintainAspectRatio: false,
      responsive: true,
    }
  },

  // Configuration options go here
  options: {},
});
};