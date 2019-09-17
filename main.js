const link =
  "https://spreadsheets.google.com/feeds/list/1CEbA2Qs_T0qpbdC76ZOUXFSgCoOgz5U0vsz9q8FI5TU/od6/public/values?alt=json";
const linkCategories = "https://spreadsheets.google.com/feeds/list/1Rap8F2cXos3Xn-zYw8DtsQ1ADRdevvnooBJeL_6WFTo/od6/public/values?alt=json";
window.addEventListener("load", getData);


  /*fetch(linkCategories)
    .then(res => res.json())
    .then(function(data){
      data.forEach(buildCategory)
})
          
 function buildCategory(data){
      console.log(data.feed.entry.gsx$category.$t)
  }          */



///



function getData() {
  fetch(link)
    .then(res => res.json())
    .then(showData);
}

function showData(data) {
    const myArray = data.feed.entry;
    myArray.forEach(showDisney);
}
getData();

function showDisney(disneyData){
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    
   
    copy.querySelector(".tile__img").src = `imgs/${disneyData.gsx$image.$t}.jpg`;
    
    copy.querySelector(".tile__title").textContent=disneyData.gsx$name.$t; 
    /*copy.querySelector("h2").textContent=disneyData.gsx$name.$t;
    copy.querySelector(".powers").textContent=disneyData.gsx$powers.$t;
    copy.querySelector(".appearance").textContent=disneyData.gsx$appearance.$t;
    copy.querySelector(".dislikes").textContent=disneyData.gsx$dislikes.$t;
    copy.querySelector(".famousquotes").textContent=disneyData.gsx$famousquotes.$t;
    copy.querySelector(".likes").textContent=disneyData.gsx$likes.$t;
    copy.querySelector(".nationality").textContent=disneyData.gsx$nationality.$t;
    copy.querySelector(".occupation").textContent=disneyData.gsx$occupation.$t;
    copy.querySelector(".personality").textContent=disneyData.gsx$personality.$t;
    copy.querySelector(".zodiacsign").textContent=disneyData.gsx$zodiacsign.$t;
    copy.querySelector(".character-img").src = `imgs/${disneyData.gsx$image.$t}.jpg`;*/
    document.querySelector("main").appendChild(copy);
}

