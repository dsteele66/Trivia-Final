console.log("sports page working")

const btnNext = document.getElementById("nxtQ");
let answer = ""


btnNext.addEventListener('click', function(){
    document.getElementById("answer").innerHTML = "<button id='answerButton'>Answer</button>";
    // console.log("hello")
    fetch('http://jservice.io/api/random')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
           answer = data[0].answer;
          const question = data[0].question; 

          document.getElementById("question").innerHTML = question;
        //   document.getElementById("answer").innerHTML = answer
        //   document.getElementById("answer").innerHTML = answer;
          document.getElementById("answer").style.display = "block";
          document.getElementById("answerButton").addEventListener('click', function(){
              document.getElementById("answer").innerHTML = answer
          })
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
});


// function showAnswerButton() {
//     document.getElementById("answer").style.display = "block";
   

// }


// answerButton.addEventListener('click', function(){
//     document.getElementById("answer").innerHTML = answer;
    
// })


// let questions = [
//     { question: "How many rings does MJ have?",
//       answerA: "3",
//       answerB: "6",
//       answerC: "1",
//       answerD: "5"
// }, 
// { question: "How many championships do Kobe and Shaq have together?",
//   answerA: "4",
//   answerB: "2",
//   answerC: "3",
//   answerD: "5"

// }
// ]

