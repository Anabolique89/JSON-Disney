const link =
    "https://spreadsheets.google.com/feeds/list/1CEbA2Qs_T0qpbdC76ZOUXFSgCoOgz5U0vsz9q8FI5TU/od6/public/values?alt=json";
const linkCategories = "https://spreadsheets.google.com/feeds/list/1Rap8F2cXos3Xn-zYw8DtsQ1ADRdevvnooBJeL_6WFTo/od6/public/values?alt=json";
const linkModal = "https://spreadsheets.google.com/feeds/list/1CEbA2Qs_T0qpbdC76ZOUXFSgCoOgz5U0vsz9q8FI5TU/od6/public/values?alt=json";

//close the modal when clicked
const modal = document.querySelector(".modal-background");
const main = document.querySelector("main");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
});

// fetching for categories

fetch(linkCategories)
    .then(res => res.json())
    .then(getCategoriesData)

function getCategoriesData(data) {
    const myCategoriesArray = data.feed.entry;
    myCategoriesArray.forEach(buildCategory)
    fetchData(link);
}

// creating category and putting data inside

function buildCategory(data) {
    const categoryName = document.createElement("h2");
    categoryName.classList.add("category");
    categoryName.textContent = data.gsx$category.$t;
    document.querySelector("main").appendChild(categoryName)
    
    const row = document.createElement("div");
    row.classList.add("row");
    let className = data.gsx$category.$t.replace(" ", "-").toLowerCase();
    row.setAttribute("id", className)
    document.querySelector("main").appendChild(row)
}

// fetching for disney characters

function fetchData(link) {
    fetch(link)
        .then(function (response) {
            return response.json()
        }).then(getData)
}

function getData(data) {
    const myCharactersArray = data.feed.entry;
    myCharactersArray.forEach(showDisney)
}


//cloning data for characters info

function showDisney(data) {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    //copy.querySelector(".category").textContent = data.gsx$category.$t;
    copy.querySelector(".tile__img").src = `imgs/${data.gsx$image.$t}.jpg`;
    copy.querySelector(".tile__title").textContent = data.gsx$name.$t;
    //
    copy.querySelector(".tile").setAttribute("id", data.gsx$id.$t);
    //
    copy.querySelector(`#${data.gsx$id.$t}`).addEventListener("click", function () {
        modal.querySelector(".name").textContent = data.gsx$name.$t;
        modal.querySelector(".powers").textContent = data.gsx$powers.$t;
        modal.querySelector(".appearance").textContent = data.gsx$appearance.$t;
        modal.querySelector(".dislikes").textContent = data.gsx$dislikes.$t;
        modal.querySelector(".famousquotes").textContent = data.gsx$famousquotes.$t;
        modal.querySelector(".likes").textContent = data.gsx$likes.$t;
        modal.querySelector(".nationality").textContent = data.gsx$nationality.$t;
        modal.querySelector(".occupation").textContent = data.gsx$occupation.$t;
        modal.querySelector(".personality").textContent = data.gsx$personality.$t;
        modal.querySelector(".zodiacsign").textContent = data.gsx$zodiacsign.$t;
        modal.querySelector(".character-img").src = `imgs/${data.gsx$image.$t}.jpg`;

         document.querySelector("main").appendChild(modal);

        modal.classList.remove("hide");
        
    });

    let className = data.gsx$category.$t.replace(" ", "-").toLowerCase().trim();
    //console.log("#" + className);
    document.querySelector("#" + className).appendChild(copy);

};
