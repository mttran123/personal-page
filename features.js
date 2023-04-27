/**
 * Name: Mai Tran
 * Date: February 20, 2023
 * Section: CST8285
 * Lab number: 304
 * File name: features.js
 */



/** FILTER COURSE BY LEVEL USING JAVASCRIPT */
// Get the button and filterable content
var filterButton1 = document.getElementById("level-1");
var filterButton2 = document.getElementById("level-2");
var showAll = document.getElementById("all");

const level1Content = document.getElementById("filterable-content-1");
const level2Content = document.getElementById("filterable-content-2");

// Add event listener to each filter button
filterButton1.addEventListener("click", () => {
    level2Content.style.display = "none";
    level1Content.style.display = "grid";
});

filterButton2.addEventListener("click", () => {  
    level2Content.style.display = "grid";    
    level1Content.style.display = "none";
});

showAll.addEventListener("click", () => {
    level2Content.style.display = "grid";    
    level1Content.style.display = "grid";
    searchInput.value ="";
    search();
})



/**SEARCH SPECIFIC COURSE IN THE SEARCH BAR */
var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");
var items = document.querySelectorAll(".name");
var list = document.querySelectorAll(".description");
var codes = document.getElementsByClassName("code");

//Add an event listener to the search button
searchButton.addEventListener("click", () => {
    search();
    searchInput.value ="";
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        search();
        searchInput.value ="";
    }
})

function search() {
    var searchText = searchInput.value.toLowerCase().trim();
    for (let i = 0; i < items.length; i++) {
        var itemText = items[i].textContent.toLowerCase();
        if (itemText.indexOf(searchText) > -1) {
            list[i].style.display = "block";
            codes[i].style.display = "block";
        } else {
            list[i].style.display = "none";
            codes[i].style.display = "none";
        }
    }
}


/**SORT BY LEVEL FROM LOWEST TO HIGHEST AND VICE VERSA */
var ulList, i, switching, b, shouldSwitch;
var dropdown = document.getElementById("sel-sort");

dropdown.addEventListener("change", function () {
    var option = dropdown.value;
    ulList = document.getElementById("ul-sort");
    sort(ulList, option);
})

function sort(list, order) {
    switching = true;

    while (switching) {
        switching = false;
        b = ulList.getElementsByTagName("li");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (order == "Descending") {
                if (b[i].getElementsByTagName("button")[0].innerHTML.toLowerCase() < b[i + 1].getElementsByTagName("button")[0].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (b[i].getElementsByTagName("button")[0].innerHTML.toLowerCase() > b[i + 1].getElementsByTagName("button")[0].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}