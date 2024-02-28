function toggleAnswer(id) {
    var answer = document.getElementById("answer" + id);
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}