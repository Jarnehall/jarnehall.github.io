---
title:  "Få saker gjorda med webbappen to-do"
assignment: "Uppgift C_1"
---

**Uppdatering:** Efter feedback så fick jag reda på att min webbapp inte fungerade som den skulle i vissa webbläsare jag inte haft möjlighet att testa i (framförallt Microsoft Edge).<!--more--> Efter felsökning så visade det sig att jQueryfunktionen .closest() inte hade speciellt bra kompabilitet med ett gäng webbläsare. Jag bytte ut .closest() mot .parent() och ändrade på några funktioner för att få det att fungera. Nu ska webbappen fungera som den ska även i Microsoft Edge :).

---

Första uppgiften i kursen Webbapplikationsutveckling var att skapa en to-do applikation där man kan lägga in saker man ska göra, och sedan flytta dem till en "klar"-lista när de är avklarade.

Kika på [resultatet](http://jarnehall.github.io/to-do), eller kolla in koden på min lösning av uppgiften på [GitHub](https://github.com/jarnehall/to-do){:target="_blank"}.

### Designen

![Design mockup för uppgiften]({{ site.baseurl }}/img/to-do-design.png)

Slutresultatet ser ganka annorlunda ut från min första mockup som kan ses här ovan (skapad i Sketch), men det är en naturlig utveckling utifrån originaltanken. Om man vandrar tillbaka i kodhistoriken på GitHub så kan man se att designen var väldigt nära min mockup innan jag påbörjade min utökning av uppgiften.

### Inspiration från Trello

Men jag ville testa och lära mig nya saker! Jag började fundera på hur [Trello](http://trello.com){:target="_blank"} (som vi använt under flera gruppuppgifter) ser ut och fungerar, och utmana mig själv att utveckla min to-do app till någon liknande.

Några saker jag använde för att efterlikna Trellos funktionalitet är drag & drop för listor och listobjekt, möjligheten att skapa hur många listor man vill, horizontellt skrollande design som anpassar sidans bredd efter antalet listor (räknas ut och appliceras med javascript) samt att spara användarens listor och listobjekt (görs ganska rudamentärt med localStorage av html objekten just nu, men jag lekte runt med att använda [Firebase](http://firebase.com){:target="_blank"} för att spara listorna till en användare med riktig backend, men hann inte implementera det innan deadline).

### Sluttankar

Jag testade och lärde mig många nya saker under uppgiftens gång, och jag är nöjd med resultatet. Men det vore roligt att återvända till uppgiften i framtiden och implementera riktig backend (via t.ex. Firebase) och lägga till fler funktioner så som olika färgteman och att olika användare kan samarbeta på en gemensam lista.
