let userResponse={};
const fetchbtn=document.getElementById('fetch-btn');

fetchbtn.addEventListener('click',fetchResponse);

function fetchResponse(e){
    fetch('http://localhost:8081/response/fetch/1/4', {
        method: 'GET'}).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return response.text();
        }
    }).then(function (data) {
        // This is the JSON from our response
        userResponse=data;
        console.log(data);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
    // Un-comment this line and parse the json response in an another script, pick it up from local storage
    // window.location.assign("http://localhost:5500/Response-pallete.html");
}
