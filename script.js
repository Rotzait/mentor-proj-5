const firstButton = document.querySelector("#first-button");
const secondButton = document.querySelector("#second-button");
const thirdButton = document.querySelector("#third-button");
const forthButton = document.querySelector("#forth-button");

const firstQuestion = document.querySelector("#first-q");
const secondQuestion = document.querySelector("#second-q");
const thirdQuestion = document.querySelector("#third-q");
const forthQuestion = document.querySelector("#forth-q");

const firstAnswer = document.querySelector("#first-a");
const secondAnswer = document.querySelector("#second-a");
const thirdAnswer = document.querySelector("#third-a");
const forthAnswer = document.querySelector("#forth-a");

const buttons = [firstButton, secondButton, thirdButton, forthButton];
const questions = [firstQuestion, secondQuestion, thirdQuestion, forthQuestion];
const answers = [firstAnswer, secondAnswer, thirdAnswer, forthAnswer];

questions[0].onclick = () => change(0);
questions[1].onclick = () => change(1);
questions[2].onclick = () => change(2);
questions[3].onclick = () => change(3);


function change(wichi) {

    if (answers[wichi].style.display == "block")
    {
        getBack();

    } else {
    
        getBack();

    answers[wichi].style.display = "block";
    buttons[wichi].src = "icon-minus.svg";
    }

}

function getBack()  {
     for ( let i = 0; i < buttons.length; i++) {

        if (buttons[i].src = "icon-minus.svg") {

            buttons[i].src = "icon-plus.svg";
    }

    }

    for ( let i = 0; i < answers.length; i++) {

        if (answers[i].style.display != "none") {

        answers[i].style.display = "none";
    }

    }
}