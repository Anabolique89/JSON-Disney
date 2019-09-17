const link =
  "https://spreadsheets.google.com/feeds/list/1CEbA2Qs_T0qpbdC76ZOUXFSgCoOgz5U0vsz9q8FI5TU/od6/public/values?alt=json";
const linkCategories = "https://spreadsheets.google.com/feeds/list/1Rap8F2cXos3Xn-zYw8DtsQ1ADRdevvnooBJeL_6WFTo/od6/public/values?alt=json";
//window.addEventListener("load", getCategoriesData);
//window.addEventListener("load", getData);


// fetching for categories

fetch(linkCategories)
    .then(res => res.json())
    .then(getCategoriesData)
          
function getCategoriesData(data){
        const myCategoriesArray = data.feed.entry;
        myCategoriesArray.forEach(buildCategory)
        console.log(myCategoriesArray)
        fetchData(link);
        
    }

// creating category and putting data inside

function buildCategory(data) {
    const row = document.createElement("div");
    row.classList.add("row");
    let className = data.gsx$category.$t.replace(" ", "-").toLowerCase();
    row.setAttribute("id", className)
    document.querySelector("main").appendChild(row)
}

// fetching for disney characters

function fetchData(link){
    fetch(link)
        .then(function (response) {
            return response.json()
        }).then(getData)
}
function getData(data) {
            const myCharactersArray = data.feed.entry;
            myCharactersArray.forEach(showDisney)
//console.log(myCharactersArray)
        }


//cloning data for characters info

function showDisney(data) {
    //console.log(disneyData)
    //console.log(disneyData.gsx$name.$t)
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    
    copy.querySelector(".tile__img").src = `imgs/${data.gsx$image.$t}.jpg`;
    copy.querySelector(".tile__title").textContent= data.gsx$name.$t; 
    
    // cloning the data for making categories

   //document.querySelector("main").appendChild(copy);
    
    let className = data.gsx$category.$t.replace(" ", "-").toLowerCase().trim();
    console.log("#" + className);
    document.querySelector("#" + className).appendChild(copy);
    
    };
