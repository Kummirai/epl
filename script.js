let html = ``;
let videoHtml = ``;
let container = document.querySelector('.container');
let video = document.querySelector('.video');


function  todayFixture() {
 const fix24 = fetch('https://www.thesportsdb.com/api/v2/json/3/schedual/league/4328/2023-2024')
  .then( response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
  
    console.log(data);
  
    data[1].forEach((fixture) => {
      html += `
      <div class="inner-container">
        <p>${fixture.dateEvent}</p>
        <p>${(fixture.strTime)}</p>
        <div class="card">
           <div class="team-info">
              <img class="clubLogo" src="${fixture.strHomeTeamBadge}">
              <h4>${fixture.strHomeTeam}</h4>
            </div>
            <div class="scoreLine">
               <h4> ${fixture.intHomeScore}  -  ${fixture.intAwayScore}</h4>
            </div>
            <div class="team-info">
                <img class="clubLogo" src="${fixture.strAwayTeamBadge}">
                <h4>${fixture.strAwayTeam}</h4>
           </div>
         </div>
         <p><a class="youtube-link" href="${fixture.strVideo}">Highlights</a></p>
      </div>
      `;
      container.innerHTML = html;

    // data[1].forEach((video) => {
    //     videoHtml += `
    //     <div>
    //       <video width="320" height="240" controls>
    //         <source src="${video.strVideo}">
    //       </video>
    //     </div>
    //     `;
    //     video.innerHTML = videoHtml;
      });

    });
 // });
}
      
      
todayFixture();

//https://www.thesportsdb.com/api/v2/json/3/schedual/next/league/4328

