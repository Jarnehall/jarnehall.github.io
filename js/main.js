// Hey. This document is mostly for adding a couple of easter eggs on my site.

var formName = document.getElementsByName("name"),
    formEmail = document.getElementsByName("email"),
    formContent = document.getElementsByName("content"),
    altForms = [];

smoothScroll.init();

createCharacterObject ("Sherlock Holmes", "I prefer to text...", "Elementary, my dear Watson.");
createCharacterObject ("Bruce Banner", "bruce.banner@avengers.com", "Don't make me angry. You wouldn't like me when I'm angry.");
createCharacterObject ("Tobias Fünke", "tobias@bluthcompany.com", "Perhaps an attic shall I seek...");
createCharacterObject ("Tyrion Lannister", "tyrion@lannister.com", "It's not easy being drunk all the time. Everyone would do it if it were easy.");
createCharacterObject ("Joe Cooper", "joe.cooper@nasa.gov", "Mankind was born on Earth. It was never meant to die here.");
createCharacterObject ("Walter White", "walter.white@wynne.k12.ar.us", "I am the one who knocks!");
createCharacterObject ("Kylo Ren", "kylo.ren@thefirstorder.com", "Forgive me. I feel it again... the call from light. Supreme Leader senses it. Show me again the power of the darkness, and I'll let nothing stand in our way.");
createCharacterObject ("The Doctor", "N/A", "I am and always will be the optimist, the hoper of far-flung hopes, and the dreamer of improbable dreams.");
createCharacterObject ("Yoda", "N/A", "Do or do not. There is no try.");
createCharacterObject ("Jack Sparrow", "jack.sparrow@theblackpearl.ship", "The problem is not the problem. The problem is your attitude about the problem.");
createCharacterObject ("Hoban Washburne", "hoban@serenity.space", "I'm a leaf in the wind. Watch how I soar.");
createCharacterObject ("Andrew Ryan", "andrew.ryan@rapture.com", "We all make choices; but in the end our choices make us.");
createCharacterObject ("Fox Mulder", "fox.mulder@fbi.gov", "I want to believe.");

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
