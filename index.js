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
    knowMoreText:
      "Chaque année, ce sont 8 millions de tonnes de plastique qui finissent dans les océans. Ces déchets menacent l'écosystème et sont responsables de la mise en danger (voir de la disparition) de la majorité des espèces marines. Source : https://www.liberation.fr/planete/2019/11/14/chaque-annee-8-millions-de-tonnes-de-plastique-finissent-dans-les-oceans_1763117/",
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
    knowMoreText:
      "Ce sont les pailles qui ne sont plus autorisées à la vente. Toutefois, chacunes des réponses peuvent ête considérées comme correctes car nous devons éviter d'utiliser chacun de ces objets au quotidien. Source : https://ec.europa.eu/commission/presscorner/detail/fr/qanda_21_2709",
  },
  {
    pictogram: "./assets/waterwings.svg",
    question: "Qu’appelle t-on le 7e continent ?",
    answerOptions: ["Afrique", "Europe", "Asie", "Amat de dechets"],
    validIndex: 3,
    knowMoreText:
      "Le 7e continent n'est en réalité pas un vrai continent mais plutôt un aglomérat de déchet qui se trouve dans le Pacifique Nord (entre le Japon et la Californie). Malheureusement, il n'existe pas qu'un seul endroit où les déchets s'agglomèrent... Source : https://www.conservation-nature.fr/ecologie/la-pollution-des-oceans/#:~:text=L'effondrement%20de%20la%20biodiversit%C3%A9,abandonn%C3%A9s%20au%20fond%20des%20eaux.",
  },
  {
    pictogram: "./assets/waterwings.svg",
    question:
      "Quelles espèces marines sont en voie de disparition à cause de la pollution des eaux ? ",
    answerOptions: ["Thon rouge", "Requin", "Tortue", "Poisson rouge"],
    validIndex: 2,
    knowMoreText:
      "Comme nous l'avons dit précédemment, toutes les espèces marines sont mises en danger par la pollution des eaux. Toutefois, parmi les espèces citées, ce sont les tortues qui en patîssent le plus, mourant régulièrement étouffées par des sacs plastiques. Source : https://www.conservation-nature.fr/animaux-habitat/mer-et-ocean/#:~:text=Baleine%20bleue&text=Sous%20l'effet%20de%20l,une%20dizaine%20d'ann%C3%A9es%20seulement.",
  },
  {
    pictogram: "./assets/waterwings.svg",
    question:
      "Quel pourcentage des déchets de la mer représentent les mégots et les filtres de cigarette ? ",
    answerOptions: ["10%", "20%", "30%", "40%"],
    validIndex: 3,
    knowMoreText:
      "La majorité des gens jetent leurs mégots dans le caniveau. Ainsi, ils représentent quasiment 40% des déchets de la mer. Rien qu'en France, on estime que c'est environ un millier de mégots qui sont jetés chaque SECONDES dans la nature. Source : https://www.generationsanstabac.org/actualites/le-megots-gros-pollueur-des-mers-des-oceans/",
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
    knowMoreText:
      "Lors de la période d'éclosion des tortues, en 2019 sur les côtes de Floride, des bénévoles ont trouvés une petite tortue (assez petite pour tenir dans la paume d'une main) en train de mourir à petit feu, étouffée par plus de 100 morceaux de plastique. Source : https://www.huffingtonpost.fr/actualites/article/cette-tortue-est-morte-avec-104-morceaux-de-plastique-dans-l-estomac_152723.html#:~:text=Gumbo%20Limbo%20Nature%20Center%20%2F%20Facebook,%C3%A9t%C3%A9%20retrouv%C3%A9s%20dans%20son%20estomac.&text=POLLUTION%20%2D%20Un%20triste%20rappel%20%C3%A0,%C3%A9closion%20des%20%C5%93ufs%20de%20tortues",
  },
];

function createQuizzElements(singleQuestion) {
  // Create article element which correspond to the block containing the picto, the question and its answers
  const quizzElements = document.createElement("article");
  quizzElements.classList.add("quizz-elements");
  quizzElements.style.height = "100vh";
  quizzElements.style.display = "flex";
  quizzElements.style.flexDirection = "column";
  quizzElements.style.justifyContent = "center";
  quizzElements.style.alignItems = "center";
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

//GAME PART !!

//create canvas + contex
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//load images
const turtle = new Image();
turtle.src = "./assets/game/tortue_blanchev2.svg";
const straw = new Image();
straw.src = "./assets/game/paille1.png";
const bg = new Image();
bg.src = "./assets/game/bg_game.png";

//general settings
let tX = 20; //turtle position
let tY = 260; //turtle position
let tWidth = 40;
let tHeight = 40;
let gravity = 1;
let dechet = [];
dechet[0] = {
  x: canvas.width,
  y: 0,
  w: 45,
  h: 78,
};
let gamePlaying = false;

//Function move turtle Up + gravity and create random straw

document.addEventListener("click", moveUp);

function moveUp() {
  tY -= 80;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(turtle, tX, tY, tWidth, tHeight);
  ctx.drawImage(bg, 0, 400, 320, 100);

  if (gamePlaying) {
    for (let i = 0; i < dechet.length; i++) {
      ctx.drawImage(straw, dechet[i].x, dechet[i].y);
      dechet[i].x--;

      if (dechet[i].x === 150) {
        dechet.push({
          x: canvas.width,
          y: Math.floor(Math.random() * canvas.height),
          w: 45,
          h: 78,
        });
      }
      //collision
      if (
        tX < dechet[i].x + dechet[i].w &&
        tX + tWidth > dechet[i].x &&
        tY < dechet[i].y + dechet[i].h &&
        tY + tHeight > dechet[i].y
      ) {
        location.reload();
      }
    }
    tY += gravity;
  } else {
    ctx.fillText(`Cliquez pour jouer`, 50, 200);
    ctx.font = "20px Courier";
    ctx.fillStyle = "#eee";
  }

  requestAnimationFrame(draw);
}

draw();
document.addEventListener("click", () => (gamePlaying = true));
