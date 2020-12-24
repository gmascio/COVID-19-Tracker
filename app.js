const URL = "https://covid-api.mmediagroup.fr/v1/cases"

const getData = async () => {
  try {
    const headers = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
    const response = await axios.get(URL, headers)
    const axiosData = response.data.Search
    renderStates(axiosData)
   } catch { }
}
  