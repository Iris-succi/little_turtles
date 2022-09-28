
// 1) Select the HTML section that will contain all quizz elements
const quizz = document.querySelector("#quizz");

// 2) Create the array which contains all the quizz structure elements required
const questions = [{
    pictogram: "https://placekitten.com/200/287",
    question: "Combien de tonnes de plastique sont rejetées à la mer chaque année ?",
    answerOptions: {
        text1: "400 000 tonnes", correct: false,
        text2: "600 000 tonnes", correct: true,
        text3: "800 000 tonnes", correct: false,
        text4: "900 000 tonnes", correct: false
    },
    knowMoreText: "Les tortues sont belles et gentilles",
}, {
    pictogram: "https://placekitten.com/200/287",
    question: "Selon la législation de la commission européenne, quels produits à usages uniques ne sont plus autorisés à la vente ?",
    answerOptions: {
        text1: "Paille", correct: true,
        text2: "Couverts plastiques", correct: true,
        text3: "Sac Plastique", correct: false,
        text4: "Brosse à dent", correct: false
    },
    knowMoreText: "Le plastique ce n'est pas fantastique",
}, {
    pictogram: "https://placekitten.com/200/287",
    question: "Qu’appelle t-on le 7e continent ?",
    answerOptions: {
        text1: "Afrique", correct: false,
        text2: "Europe", correct: false,
        text3: "Asie", correct: false,
        text4: "Amat de dechets", correct: true
    },
    knowMoreText: "Les crabes aussi mais ils pincent !",
}, {
    pictogram: "https://placekitten.com/200/287",
    question: "Quelles espèces marines sont en voie de disparition à cause de la pollution des eaux ? ",
    answerOptions: {
        text1: "Thon rouge", correct: true,
        text2: "Requin", correct: false,
        text3: "Tortue", correct: true,
        text4: "Poisson rouge", correct: false
    },
    knowMoreText: "Le plastique ce n'est pas fantastique",
}, {
    pictogram: "https://placekitten.com/200/287",
    question: "Quel pourcentage des déchets de la mer représentent les mégots et les filtres de cigarette ? ",
    answerOptions: {
        text1: "10%", correct: false,
        text2: "20%", correct: false,
        text3: "30%", correct: false,
        text4: "40%", correct: true
    },
    knowMoreText: "Le plastique ce n'est pas fantastique",
}, {
    pictogram: "https://placekitten.com/200/287",
    question: "Qu’à t-on retrouver dans le corps d’un bébé tortue en 2019 ?",
    answerOptions: {
        text1: "Une brosse a dent", correct: false,
        text2: "100 morceaux de plastique", correct: true,
        text3: "25 mégots de cigarette", correct: false,
        text4: "Capsule nespresso", correct: false
    },
    knowMoreText: "Le plastique ce n'est pas fantastique",
}]

// 3) Create a function to create all the elements required for the quizz

function createQuizzElements(picto, request, answer1, answer2, answer3, answer4, text) {
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
    pictoElement.innerHTML = picto;
    headerQuizz.appendChild(pictoElement);

    //_h2
    const question = document.createElement("h2");
    question.classList.add("question");
    question.innerHTML = request;
    headerQuizz.appendChild(question);

    // Answer block that will contain the answer buttons
    const buttonQuizz = document.createElement("div");
    buttonQuizz.classList.add("buttonQuizz");
    question.appendChild(buttonQuizz);

    //_Answer button 1
    const answerElement1 = document.createElement("button");
    answerElement1.classList.add("answer");
    answerElement1.innerHTML = answer1;
    buttonQuizz.appendChild(answerElement1);

    //_Answer button 2
    const answerElement2 = document.createElement("button");
    answerElement2.classList.add("answer");
    answerElement2.innerHTML = answer2;
    buttonQuizz.appendChild(answerElement2);

    //_Answer button 3
    const answerElement3 = document.createElement("button");
    answerElement3.classList.add("answer");
    answerElement3.innerHTML = answer3;
    buttonQuizz.appendChild(answerElement3);

    //_Answer button 4
    const answerElement4 = document.createElement("button");
    answerElement4.classList.add("answer");
    answerElement4.innerHTML = answer4;
    buttonQuizz.appendChild(answerElement4);

    // paragraph that will show the knowMoreText content once the question answered
    const explanation = document.createElement("p");
    explanation.classList.add("explanation");
    explanation.innerHTML = `${text}`;
    quizzElements.appendChild(explanation);
}

// 4) Creation of a loop to generate the different articles/questions elements from the array
for (let i = 0; i < questions.length; i++) {
    createQuizzElements(questions[i].pictogram, questions[i].question, questions[i].answerOptions.text1, questions[i].answerOptions.text2, questions[i].answerOptions.text3, questions[i].answerOptions.text4, questions[i].knowMoreText);
}