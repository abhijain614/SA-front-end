const student = document.getElementById('student');
const admin = document.getElementById('admin');
const loginbtn = document.getElementById('loginbtn');

let user={ username: 'user1',
           password: '12345'
};

async function makeacall() {
    let userstr=JSON.stringify(user);
    fetch('http://localhost:8081/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: userstr}).then(function (response) {
        // The API call was successful!
        // console.log(response);
        if (response.ok) {
            return response.text();
        } else {
            return response.json();
        }
    }).then(function (data) {
        // This is the JSON from our response
        console.log(data);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

loginbtn.addEventListener('click', redirectUser);

function redirectUser(e) {

    if(student.checked){
                window.location.assign("http://localhost:5500/student-dashboard.html");
            }
            else{
                window.location.assign("http://localhost:5500/admin-dashboard.html");
            }
    
    makeacall();
}

