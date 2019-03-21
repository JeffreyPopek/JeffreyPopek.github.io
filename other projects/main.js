let sport = window.prompt("what sport do you play?");
let sportTags = document.getElementsByClassName("sport");
for (let oneSportTag of sportTags) {
    oneSportTag.innerText = sport;
}

let name = window.prompt("what is your name?");
let nameTags = document.getElementsByClassName("name");
for (let oneNameTag of nameTags) {
    oneNameTag.innerText = name;
}

let people = window.prompt("Who is talking to your person?");
let peopleTags = document.getElementsByClassName("people");
for (let onePeopleTag of peopleTags) {
    onePeopleTag.innerText = people;
}

let time = window.prompt("How long did your character in jail for?");
document.getElementById("time").innerText = time;