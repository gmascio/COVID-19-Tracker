# Project #1: COVID-19 Tracker


Before you start any actual coding, you must meet with your Squad Leader for ~10 minutes to get your app idea approved. Prepare the following materials _before_ your meeting and put them in your README.md:

- **App Title**: COVID-19 Tracker
- **App Description**: My app will provide updated COVID-19 statistics regarding confirmed and recovered cases, poppulation, and deaths of each US state. I will incorporate a drop down box prepoppulated with states. I will also use a second API providing dates and cases to produce graphs displaying trends in cases.
- **API**: https://covid-api.mmediagroup.fr/v1/history?country=UnitedStatesofAmerica&status=deaths : dates and cases trends
  https://covid-api.mmediagroup.fr/v1/cases : poppulation ,confirmed, recovered and deaths of each US State
  
- **API Snippet**:  
  ![APISNIPPET](https://i.ibb.co/52Jq5Bw/Screen-Shot-2020-12-20-at-11-54-16-PM.png)    
    
    
- **Wireframes**: Initial Wireframe: ![WireFrame](https://i.ibb.co/mHNQr0V/Screen-Shot-2020-12-20-at-11-30-15-PM.png")
  [https://wireframe.cc/pro/pp/71da09165404037]
  Updated Wireframe: \
  ![WireFrame](https://i.ibb.co/rxcgN00/Screen-Shot-2021-01-05-at-9-45-09-AM.png)
  [https://wireframe.cc/PTTS5R]
- **MVP**: Incorporate CSS flexbox to syle my HTML frame, and use JavaScript to alter responsiveness/style. Request information from an API using two different API end points to gather information about COVID-19 trends and history. I hope to manipualate my initial API request to feed a dropdown box of states as well as populate sections of the page with updated, pertinent statistics. My second API endpoint will be manipulated to render dates and confirmed COVID-19 cases into a dynamic line graph.  I plan to include mediaqueries to enhance the responsiveness of the website.
- **Post-MVP**: I hope to experiment with the longitude and latitude points given to create a map with relative COVID-19 trends.
- **Goals**:
   
| Project 1 Important Dates | Day      | Date      |
|---------------------------| :------: |---------: |
| Project Prompt Delivered  | Friday   | 12/17/2020|
| Project Pitches           | Monday   | 12/21/2020|
| Project Deployment        | Tuesday  | 1/05/2021 |
| Project Presentations     | Tuesday  | 1/05/2021 |
- **Priority Matrix**: 
![PriorityMatrix](https://i.ibb.co/z4VDmyk/Screen-Shot-2020-12-20-at-11-48-24-PM.png)
- **Timeframes**: 
  
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | ---: |
| Adding Search Bar | M | 3hrs| 1.5hrs | 1.5hrs |
| Molding HTML Backbone | H | 10hrs | 3hrs | 3hrs|
| Working with API | H | 25 hrs| 7hrs | 7hrs |
| Working with CSS | H | 10 hrs | 4hrs | 4hrs |
| Assembling graphs | L | 10 hrs | 3hrs | 3hrs |
| Total | H | 47hrs| 18.5hrs | 18.5hrs |

- **Code-Snippet**: 
  Attached below is a chart I poppulated with an API call, using chart.js documentation. Order of data and labels was reversed to produce an ascending chronological order.
![CodeSnippet](https://i.ibb.co/zmhWx4z/chart-Snippet.png)