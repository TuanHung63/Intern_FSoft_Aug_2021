const myQuestions = [
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: `Which built-in method returns the index within the calling String object of the st occurrence of the specified value?`,
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: `Which built-in method returns the index within the calling String object of the st occurrence of the specified value?`,
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: `Which built-in method returns the index within the calling String object of the st occurrence of the specified value?`,
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: `Which built-in method returns the index within the calling String object of the st occurrence of the specified value?`,
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: false,
    correctAnswer: "c",
  },{
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: `Which built-in method returns the index within the calling String object of the st occurrence of the specified value?`,
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: false,
    correctAnswer: "c",
  }
];

var form = document.querySelector("form");
buttonNext = document.getElementsByClassName("next");
buttnoPre = document.getElementsByClassName("previous");
var Key = [];
var correctAnswer = [];
for (let i = 0; i < myQuestions.length; i++) {
  correctAnswer.push(myQuestions[i].correctAnswer);
}
document.getElementsByClassName("start")[0].addEventListener("click", () => {
  document.getElementsByClassName("start")[0].style.display = "none";
  document.getElementsByClassName("content")[0].style.display = "block";
  displayQuestion(0);
});

function displayQuestion(index) {
  document.getElementsByClassName("content")[0].innerHTML = `
    <div class="question">
            <form id="quiz" name="quiz">
                  <p >Question ${index + 1}: ${myQuestions[index].question} </p>
                  
                  <div>
                    <input type="radio" id="a" name="question" value="a"  >
                     
                    <label for="Choice1">A. ${
                      myQuestions[index].answers.a
                    }</label> <br>
                               
                     <input type="radio"  id="b" name="question" value="b">
                     
                    <label for="Choice2">B. ${
                      myQuestions[index].answers.b
                    }</label><br>
                                
                     <input type="radio" id="c" name="question" value="c">
                     
                    <label for="Choice3">C. ${
                      myQuestions[index].answers.c
                    }</label><br>
                    
                     <input type="radio" id="d" name="question" value="d">
                     
                    <label for="Choice4">D. ${
                      myQuestions[index].answers.d
                    }</label>
                    
                  </div> 
              </form>
            
        </div>
        <div class="">
            <div><button class="btn previous" onclick="buttonPre(${index})" >Previous Question</button> 
            <button class="btn next" onclick="Next(${index})" >Next Question</button></div> 
            <div class=" submit"><button class="btn"onclick="Submit(${index})" >Submit</button></div> 
            <p>${index + 1} out of 20</p>
        </div>    `;
  if (
    Key[index] == "a" ||
    Key[index] == "b" ||
    Key[index] == "c" ||
    Key[index] == "d"
  ) {
    document.getElementById(Key[index]).checked = true;
  }
}

function buttonPre(index) {
  if (index > 0) {
    checkKey(index);
    displayQuestion(index - 1);
  }
}
function Next(index) {
  checkKey(index);
  if (index < myQuestions.length-1) {
    displayQuestion(index + 1);
  }
  if (index == myQuestions.length-2) {
    document.getElementsByClassName("previous")[0].style.display = "none";
    document.getElementsByClassName("next")[0].style.display = "none";
    document.getElementsByClassName("submit")[0].style.display = "block";
  }
}
function checkKey(index) {
  let qs = document.quiz.question.value;
  Key[index] = qs;
}

function Submit(index) {
  checkKey(index);
  let c = 0;
  for (let i = 0; i < correctAnswer.length; i++) {
    if (Key[i] == correctAnswer[i]) {
      c++;
    }
  }
  document.write(`<h1 style="text-align:center;">Your point: ${c}/20</h1> `);
}
