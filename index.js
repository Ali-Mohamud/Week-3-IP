function answer() {
    var b = 0;
    var q1 = document.quiz.quiz1.value;
    var q2 = document.quiz.quiz2.value;
    var q3 = document.quiz.quiz3.value;
    var q4 = document.quiz.quiz4.value;
    var q5 = document.quiz.quiz5.value;
    var output = document.getElementById('output');
    var quiz = document.getElementById('quiz');

    if (q1 == "Programming language used both on the client-side and server-side to make web pages interactive") {
        b++
    }


    if (q2 == "Adding interactive behavior to web pages") {
        b++
    }


    if (q3 == "Brendan Eich") {
        b++
    }


    if (q4 == "React") {
        b++
    }


    if (q5 == "Mocha") {
        b++
    }


    quiz.style.display = "none";

    output.textContent = `${b}`;


    if (b <= 3) {
        output.textContent = `Your score is ${b}.  Not satisfying, please try again.`
    } else {
        output.textContent = `Your score is ${b}. Well done!`

    }

}