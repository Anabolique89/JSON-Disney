const link =
  "https://spreadsheets.google.com/feeds/list/1CEbA2Qs_T0qpbdC76ZOUXFSgCoOgz5U0vsz9q8FI5TU/od6/public/values?alt=json";
window.addEventListener("load", getData);

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
    console.log(disneyData);
    copy.querySelector("h2").textContent=disneyData.gsx$name.$t;
    copy.querySelector(".powers").textContent=disneyData.gsx$powers.$t;
    copy.querySelector(".appearance").textContent=disneyData.gsx$appearance.$t;
    copy.querySelector(".dislikes").textContent=disneyData.gsx$dislikes.$t;
    copy.querySelector(".famousquotes").textContent=disneyData.gsx$famousquotes.$t;
    copy.querySelector(".likes").textContent=disneyData.gsx$likes.$t;
    copy.querySelector(".nationality").textContent=disneyData.gsx$nationality.$t;
    copy.querySelector(".occupation").textContent=disneyData.gsx$occupation.$t;
    copy.querySelector(".personality").textContent=disneyData.gsx$personality.$t;
    copy.querySelector(".zodiacsign").textContent=disneyData.gsx$zodiacsign.$t;
    copy.querySelector(".zodiacsign").textContent=disneyData.gsx$zodiacsign.$t;
    document.querySelector("main").appendChild(copy);
}

