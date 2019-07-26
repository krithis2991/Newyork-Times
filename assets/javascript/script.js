const userSearch = $("#search-form").val();
const limit = $("#records-form").val();
const startYear = $("#startYear-form").val();
const endYear = $("#endYear-form").val();

let queryParams = {
    q: userSearch,
    "api-key": "api-key=JATKzlfXrxHjeD7ZK0wiMTAW4eoQFGrI"
};

if (startYear) {
    queryParams.start_year = startYear + "0101";
}

if (endYear) {
    queryParams.end_year = endYear + "1231";
}

let filter = $.param(queryParams);

let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    + filter;

$.ajax({
    URL: queryURL,
    method: "GET"
}).then(function (result) {
    console.log(results);
});