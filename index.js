// 1) Select the HTML section that will contain all quizz elements
const quizz = document.querySelector("#quizz");

// 2) Create the array which contains all the quizz structure elements required
const questions = [
  {
    pictogram: "bouee.svg",
    question:
      "Combien de tonnes de plastique sont rejetées à la mer chaque année ?",
    answerOptions: [
      "400 000 tonnes",
      "600 000 tonnes",
      "800 000 tonnes",
      "900 000 tonnes",
    ],
    validIndex: 1,
    knowMoreText: "Les tortues sont belles et gentilles",
  },
  {
    pictogram: "bouee.svg",
    question:
      "Selon la législation de la commission européenne, quels produits à usages uniques ne sont plus autorisés à la vente ?",
    answerOptions: [
      "Paille",
      "Couverts plastiques",
      "Sac Plastique",
      "Brosse à dent",
    ],
    validIndex: 0,
    knowMoreText: "Le plastique ce n'est pas fantastique",
  },
  {
    pictogram: "bouee.svg",
    question: "Qu’appelle t-on le 7e continent ?",
    answerOptions: ["Afrique", "Europe", "Asie", "Amat de dechets"],
    validIndex: 3,
    knowMoreText: "Les crabes aussi mais ils pincent !",
  },
  {
    pictogram: "bouee.svg",
    question:
      "Quelles espèces marines sont en voie de disparition à cause de la pollution des eaux ? ",
    answerOptions: ["Thon rouge", "Requin", "Tortue", "Poisson rouge"],
    validIndex: 0,
    knowMoreText: "Le plastique ce n'est pas fantastique",
  },
  {
    pictogram: "bouee.svg",
    question:
      "Quel pourcentage des déchets de la mer représentent les mégots et les filtres de cigarette ? ",
    answerOptions: ["10%", "20%", "30%", "40%"],
    validIndex: 3,
    knowMoreText: "Le plastique ce n'est pas fantastique",
  },
  {
    pictogram: "bouee.svg",
    question: "Qu’à t-on retrouver dans le corps d’un bébé tortue en 2019 ?",
    answerOptions: [
      "Une brosse a dent",
      "100 morceaux de plastique",
      "25 mégots de cigarette",
      "Capsule nespresso",
    ],
    validIndex: 1,
    knowMoreText: "Le plastique ce n'est pas fantastique",
  },
];

function createQuizzElements(singleQuestion) {
  // Create article element which correspond to the block containing the picto, the question and its answers
  const quizzElements = document.createElement("article");
  quizzElements.classList.add("quizz-elements");
  quizz.appendChild(quizzElements);
  // _header
  const headerQuizz = document.createElement("div");
  headerQuizz.classList.add("headerQuizz");
  quizzElements.appendChild(headerQuizz);

  // _picto
  const pictoElement = document.createElement("div");
  pictoElement.classList.add("picto");
  pictoElement.innerHTML = '<img src ="' + singleQuestion.pictogram + '">';
  headerQuizz.appendChild(pictoElement);

  //_h2
  const question = document.createElement("h2");
  question.classList.add("question");
  question.innerHTML = singleQuestion.question;
  headerQuizz.appendChild(question);

  // Answer block that will contain the answer buttons
  const buttonQuizz = document.createElement("div");
  buttonQuizz.classList.add("buttonQuizz");
  quizzElements.appendChild(buttonQuizz);

  //Answer button 1
  singleQuestion.answerOptions.forEach((answer) => {
    const answerElement1 = document.createElement("button");
    answerElement1.classList.add("answer");
    answerElement1.innerHTML = answer;
    answerElement1.addEventListener("click", () => {
      if (
        singleQuestion.answerOptions.indexOf(answer) ===
        singleQuestion.validIndex
      ) {

        answerElement1.classList.add("true");
        explanation.style.display = "inline";
        buttonQuizz.classList.add("stopClick");
      } else {
        console.log("faux");
        answerElement1.classList.add("false");
        explanation.style.display = "inline";
        buttonQuizz.classList.add("stopClick");
      }
    });
    buttonQuizz.appendChild(answerElement1);
  });



  // paragraph that will show the knowMoreText content once the question answered
  const explanation = document.createElement("p");
  explanation.classList.add("explanation");
  explanation.innerHTML = `${singleQuestion.knowMoreText}`;
  quizzElements.appendChild(explanation);
}



// 4) Creation of a loop to generate the different articles/questions elements from the array
for (let i = 0; i < questions.length; i++) {
  createQuizzElements(questions[i]);
}


