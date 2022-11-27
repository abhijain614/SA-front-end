// let userResponse = '{ "questionResponses" : []}';
// let userResponse = {
//     "questionResponses":[]
// };
const test = {
    "testResponse_id": 1,
    "questionResponses": [
        {
            id: 1,
            question: "What is Availability?",     
            option1:
            "It measures the proportion of time the system is up",
            option2:
            "It measures the proportion of time the system is running",
            option3:
            "It measures the proportion of time the system is up and running",
            option4:
            "None of the mentioned",
            response: "It measures the proportion of time the system is up and running",
            answer: "It measures the proportion of time the system is up and running"
        },
        {
            id: 2,
            question: "Which among these are the notations which are used to represent software architecture?",     
            option1:
            "UML activity diagram",
            option2:
            "UML use case diagram",
            option3:
            "UML class diagram, Interaction diagram",
            option4:
            " All of the mentioned",
            response: " All of the mentioned",
            answer: " All of the mentioned"
        },
        {
            id: 3,
            question: "Which of the following is true?",     
            option1:
            "The input of architectural design process is SAD",
            option2:
            "The output of architectural design process is SRS",
            option3:
            "The input of architectural design process is SRS",
            option4:
            "None of the mentioned",
            response: "The input of architectural design process is SAD",
            answer: "The input of architectural design process is SRS"
        }
    ]
};

const questions = test["questionResponses"];

const question=document.querySelector('#question_box');
const radio1=document.getElementById('answerGroup_0');
const radio2=document.getElementById('answerGroup_1');
const radio3=document.getElementById('answerGroup_2');
const radio4=document.getElementById('answerGroup_3');
const option1=document.querySelector('#opt1');
const option2=document.querySelector('#opt2');
const option3=document.querySelector('#opt3');
const option4=document.querySelector('#opt4');
const next=document.querySelector('#nextquestions');
const finish=document.querySelector('#finish');
const answers = document.querySelectorAll('.answer');
const qindex = document.querySelector('#qindex');
const correctans=document.getElementById('correct-ans');

let questionCount=0;
let questionIdx=1;

const loadQuestion = () => {
    question.innerText = questions[questionCount].question;
    option1.innerText = questions[questionCount].option1;
    option2.innerText = questions[questionCount].option2;
    option3.innerText = questions[questionCount].option3;
    option4.innerText = questions[questionCount].option4;
    if(questions[questionCount].option1===questions[questionCount].response){
        radio1.checked=true;
    }else if(questions[questionCount].option2===questions[questionCount].response){
        radio2.checked=true;
    }else if(questions[questionCount].option3===questions[questionCount].response){
        radio3.checked=true;
    }else{
        radio4.checked=true;
    }
    if(correctans){
        correctans.textContent = questions[questionCount].answer;
        if(questions[questionCount].answer===questions[questionCount].response)
            {
                correctans.classList.remove('red-color');
                correctans.classList.add('green-color');
            }
        else
            {
                correctans.classList.remove('green-color');
                correctans.classList.add('red-color');
            }
    }
    qindex.innerHTML = `${questionIdx} of 3`;
    if(questionCount===questions.length-1){
        finish.classList.remove('ghost');
        next.classList.remove('color-btn');
        next.removeEventListener('click',Respond);
    }
}

loadQuestion();

const deselectAll = () => {
    answers.forEach((element) => {
        element.checked = false;
    });
};

// const getCheckedAns = () => {
//     let ans;
//     answers.forEach((element) => {
//         if(element.checked){
//             let id=element.value;
//             ans=document.getElementById(id).textContent;
//         }
//     });
//     return ans;
// };

// submit.addEventListener('click',submitResponse);

// function submitResponse(e) {
//     const checkedAns = getCheckedAns();
//     console.log(checkedAns);
//     userResponse['questionResponses'].push({"questionid":questions[questionCount].id,"response":checkedAns});
//     console.log(userResponse);

//     let userResponseStr=JSON.stringify(userResponse);
//     fetch('http://localhost:8081/response/submit/1/4', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//           },
//         body: userResponseStr}).then(function (response) {
//         // The API call was successful!
//         if (response.ok) {
//             return response.text();
//         } else {
//             return response.json();
//         }
//     }).then(function (data) {
//         // This is the JSON from our response
//         console.log(data);
//     }).catch(function (err) {
//         // There was an error
//         console.warn('Something went wrong.', err);
//     });
//     window.location.assign("http://localhost:5500/index.html");
// }


next.addEventListener('click', Respond);
finish.addEventListener('click', redirect);

function redirect(e){
    window.location.assign("http://localhost:5500/index.html");
}

function Respond(e) {
    // const checkedAns = getCheckedAns();
    // console.log(checkedAns);
    // code to insert user response in JSON object userResponse
    // let obj = JSON.parse(userResponse);
    // userResponse['questionResponses'].push({"questionid":questions[questionCount].id,"response":checkedAns});
    // console.log(userResponse);
    // userResponse = JSON.stringify(obj);
    questionCount++;
    questionIdx++;
    deselectAll();
    if(questionCount < questions.length){
        loadQuestion();
    }
}