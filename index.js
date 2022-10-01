//Menu burger//
const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
  sidenav.classList.remove("close");
  sidenav.style.display = "block";
}

function closeNav() {
  sidenav.classList.remove("active");
  sidenav.classList.add("close");
  sidenav.style.display = "none";
}
//Fin menu burger//


// 1) Select the HTML section that will contain all quizz elements
const quizz = document.querySelector("#quizz");

// 2) Create the array which contains all the quizz structure elements required
const questions = [
  {
    pictogram: "./assets/waterwings.svg",
    question:
      "Combien de tonnes de plastique sont rejetées à la mer chaque année ?",
    answerOptions: [
      "4 millions de tonnes",
      "600 000 tonnes",
      "8 millions de tonnes",
      "1 milliard de tonnes",
    ],
    validIndex: 2,
    knowMoreText: "Chaque année, ce sont 8 millions de tonnes de plastique qui finissent dans les océans. Ces déchets menacent l'écosystème et sont responsables de la mise en danger (voir de la disparition) de la majorité des espèces marines. Source : Liberation.fr",
  },
  {
    pictogram: "./assets/waterwings.svg",
    question:
      "Selon la législation de la commission européenne, quels produits à usages uniques ne sont plus autorisés à la vente ?",
    answerOptions: [
      "Paille",
      "Couverts plastiques",
      "Sac Plastique",
      "Brosse à dent",
    ],
    validIndex: 0,
    knowMoreText: "Ce sont les pailles qui ne sont plus autorisées à la vente. Toutefois, chacunes des réponses peuvent ête considérées comme correctes car nous devons éviter d'utiliser chacun de ces objets au quotidien. Source : ec.europa.eu - Site de la comission européenne",
  },
  {
    pictogram: "./assets/waterwings.svg",
    question: "Qu’appelle t-on le 7e continent ?",
    answerOptions: ["Afrique", "Europe", "Asie", "Amat de dechets"],
    validIndex: 3,
    knowMoreText: "Le 7e continent n'est en réalité pas un vrai continent mais plutôt un aglomérat de déchet qui se trouve dans le Pacifique Nord (entre le Japon et la Californie). Malheureusement, il n'existe pas qu'un seul endroit où les déchets s'agglomèrent... Source : conservation-nature.fr",
  },
  {
    pictogram: "./assets/waterwings.svg",
    question:
      "Quelles espèces marines sont en voie de disparition à cause de la pollution des eaux ? ",
    answerOptions: ["Thon rouge", "Requin", "Tortue", "Poisson rouge"],
    validIndex: 2,
    knowMoreText: "Comme nous l'avons dit précédemment, toutes les espèces marines sont mises en danger par la pollution des eaux. Toutefois, parmi les espèces citées, ce sont les tortues qui en patîssent le plus, mourant régulièrement étouffées par des sacs plastiques. Source : conservation-nature.fr",
  },
  {
    pictogram: "./assets/waterwings.svg",
    question:
      "Quel pourcentage des déchets de la mer représentent les mégots et les filtres de cigarette ? ",
    answerOptions: ["10%", "20%", "30%", "40%"],
    validIndex: 3,
    knowMoreText: "La majorité des gens jetent leurs mégots dans le caniveau. Ainsi, ils représentent quasiment 40% des déchets de la mer. Rien qu'en France, on estime que c'est environ un millier de mégots qui sont jetés chaque SECONDES dans la nature. Source : www.generationsanstabac.org",
  },
  {
    pictogram: "./assets/waterwings.svg",
    question: "Qu’à t-on retrouvé dans le corps d’un bébé tortue en 2019 ?",
    answerOptions: [
      "Une brosse a dent",
      "100 morceaux de plastique",
      "25 mégots de cigarette",
      "Capsule nespresso",
    ],
    validIndex: 1,
    knowMoreText: "Lors de la période d'éclosion des tortues, en 2019 sur les côtes de Floride, des bénévoles ont trouvés une petite tortue (assez petite pour tenir dans la paume d'une main) en train de mourir à petit feu, étouffée par plus de 100 morceaux de plastique. Source : www.huffingtonpost.fr",
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
        answerElement1.style.boxShadow = " -0.8px 2px 1px 0.5px #eee";
        explanation.innerHTML = `Bravo !` + ` ${singleQuestion.knowMoreText}`;
        explanation.style.display = "inline-block";

        buttonQuizz.classList.add("stopClick");
      } else {
        console.log("faux");
        answerElement1.classList.add("false");
      answerElement1.style.boxShadow = " -0.8px 2px 1px 0.5px #eee";
        explanation.innerHTML = `Faux !` + ` ${singleQuestion.knowMoreText}`;
        explanation.style.display = "inline-block";

        buttonQuizz.classList.add("stopClick");
      }
    });
    buttonQuizz.appendChild(answerElement1);
  });

  // paragraph that will show the knowMoreText content once the question answered
  const explanation = document.createElement("p");
  explanation.classList.add("explanation");
  explanation.style.textAlign = "center";
  explanation.style.width = "100%";
  explanation.style.backgroundColor = "rgb(101 165 230 / 30%)";
  explanation.style.borderRadius = "12px";
  explanation.innerHTML = `${singleQuestion.knowMoreText}`;
  quizzElements.appendChild(explanation);
}

// 4) Creation of a loop to generate the different articles/questions elements from the array
for (let i = 0; i < questions.length; i++) {
  createQuizzElements(questions[i]);
}
