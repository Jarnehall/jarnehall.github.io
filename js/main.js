// Hey. This document is mostly for adding a couple of easter eggs on my site.

var formName = document.getElementsByName("name"),
    formEmail = document.getElementsByName("email"),
    formContent = document.getElementsByName("content"),
    altForms = [];

smoothScroll.init();

createCharacterObject ("Sherlock Holmes", "sherlock@gmail.com", "Elementary my dear Watson.");
createCharacterObject ("Bruce Banner", "bruce.banner@avengers.com", "Don't get me angry. You would not like me when I'm angry!");
createCharacterObject ("Tobias Fünke", "tobias@bluthcompany.com", "Perhaps an attic shall I seek...");
createCharacterObject ("Tyrion Lannister", "tyrion@thelannisters.com", "It's not easy being drunk all the time. Everyone would do it if it were easy.");
createCharacterObject ("Joe Cooper", "joe.cooper@nasa.gov", "Mankind was born on Earth. It was never meant to die here.");
createCharacterObject ("Walter White", "walter.white@wynne.k12.ar.us", "I AM THE ONE WHO KNOCKS!");

var random = getRandomInt(0, altForms.length);

formName[0].placeholder = altForms[random].name;
formEmail[0].placeholder = altForms[random].email;
formContent[0].placeholder = altForms[random].content;

// Get a random whole integrer between the min and max numbers specified
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Create object and add it to altForms array
function createCharacterObject (name, email, content) {
    var obj = {
        name: name,
        email: email,
        content: content
    };
    altForms.push(obj);
}
