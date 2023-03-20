
//know to to fetch it from the json file: where the category is title?
//json returns an array of objects with key: value pairs are 
// title : title that we want in h2
//link we will make it as the clickable on the box
// description: description of the news that will be in the second h2
// content in depth description
//img url : link to the image
// we could specify other things other than US and we will get a more controled result
//index specific one with [index] than .title to get the title of the specific one


function apiFetch(category) {
    return fetch('https://newsdata.io/api/1/news?apikey=pub_185599643edf1c57b763aec7bf762cff48299&language=en&country=us&category='+ category)
        .then((response) => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}

export default  apiFetch;

// async function apiFetch(category) {
//     const link = 'https://newsdata.io/api/1/news?apikey=pub_185599643edf1c57b763aec7bf762cff48299&language=en&country=us&category='+ category;
//     const response = await fetch(link);
//     const data = await response.json();
//     let jsonFile = JSON.stringify(data.results[0]);
//     return jsonFile;
// }
// function call(category) {
//     let data1 = apiFetch(category);
//     data1.then((data) => {
//         //console.log(data);
//         return data;
//     });
// }
// call(category);