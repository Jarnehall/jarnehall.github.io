---
title:  "Simple Chat, mer backend med JavaScript"
assignment: "Uppgift E_5"
---

På grund av LIA (Lärande i Arbete - praktik), samt en annorlunda struktur på skoluppgifterna de senaste kurserna har det varit ont med uppdateringar under vårterminen då jag inte haft något att visa upp.

Men nu har jag ett projekt värt att skriva om. En chatapp som använder Node.js, Express och Socket.io!<!--more-->

Spana in ett [demo av appen](http://chat.jarnehall.se){:target="_blank"} (vem som helst kan skriva vad som helst, så jag tar INTE ansvar för vad som står i appen), eller ta ett djupdyk i [koden](https://github.com/jarnehall/chat-project){:target="_blank"}.

### Utvecklingen

Kursen fokuserade på backend med Node.js, Express och MongoDB. Därför har jag inte lagt så mycket tyngd på frontend i den här uppgiften. Appen använder Vue.js för att renderera meddelanderna i frontend, men frontend skulle behöva byggas om från grunden om appen ska vara redo för produktion, då uppgiften fokuserade på backend.

Backend är intressantare, jag byggde ett eget användarhanteringssystem, med registrering, inloggning, uppdatering av användarnamn, samt möjligheten att ta bort en användare och alla dess meddelanden. Användarens uppgifter sparas i databasen, lösenordet lagras saltat och hashat för att öka säkerheten (dock körs appen just nu inte över HTTPS, så trafiken mellan client och server är inte krypterad, därför rekommenderar jag att inte använda ett riktigt lösenord för att testa appen).

Det absolut största problemet jag stötte på under utvecklingen var att få Socket.io att få tillgång till användarens verifieringstoken (som används för att intyga att användaren faktiskt är giltigt inloggad). Det var svårt eftersom dokumentationen för Socket.io lämnar mycket att önska, men jag lyckades till slut lösa problemet genom att titta på hur andra projekt gjort.

### Lärdomar

Jag lärde mig mycket kring hur man bygger ett projekt i Node.js, och framförallt hantering och autentisering av användare.

Det var även första gången jag använt en no-SQL databas (har framförallt använt MySQL tidigare). Jag fann MongoDB mycket behagligt att använda med hjälp av Mongoose.
