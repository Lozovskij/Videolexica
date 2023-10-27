changeColoring(currentWord)

function setNewValues(word, time, synonyms) {
    console.log(word);
    console.log(time);
    console.log(synonyms);
    let titleElement = document.getElementById("title");
    let synonymsElement = document.getElementById("synonyms");

    titleElement.textContent = word;
    synonymsElement.textContent = synonyms;
    start = time;

    changeColoring(word);

    player.seekTo(time);
}

function changeColoring(word) {
    var elements = document.querySelectorAll('.word-suggestion');
    elements.forEach(element => {
        console.log(element.style);
        if (element.textContent === word) {
            element.style.color = "#e8f9ed";
            element.style.backgroundColor = '#568857';
        }
        else {
            element.style.color = 'black';
            element.style.backgroundColor = '#e8f9ed';
        }
    })

}