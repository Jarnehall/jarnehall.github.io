---
title:  "API med node.js och Express"
assignment: "Uppgift C_3"
---

Under denna uppgift skulle vi bygga en webbapp som hämtar extern data via öppna API:er. Eftersom den data jag ville åt inte har stöd för CORS eller JSON-P fick jag öva på att bygga ett eget backend med node.js!<!--more-->

Testa [resultatet](http://the-splash.herokuapp.com){:target="_blank"}, och koden på [GitHub](https://github.com/jarnehall/the-splash){:target="_blank"}.

![Node.js kod]({{ site.baseurl }}/img/the-splash-code.png)

Appen jag byggt är tänkt att vara som en startsida för din browser. Om du bor i Stockholm så kan du fylla i vilken station eller hållplats du bor närmast och på så vis se när kollektivtrafiken går från dig, och hur varmt eller kallt det är (temperaturen mäts från den SMHI mätstation som ligger närmast den valda hållplatsen).

Efter en föreläsning om node.js, express och socket.io så besatte jag inte riktigt de kunskaper som krävdes för att bygga ett eget backend. Men efter en kurs på [Tree House](http://teamtreehouse.com){:target="_blank"} och lite googlande så lyckades jag bygga ett eget backend som tar förfrågningar från klienten, hämtar data från två olika API:er med AJAX, formaterar resultatet och sedan skickar det tillbaka till klienten.

Fokus för mig under den här uppgiften låg på backend, så frontend (klienten) lämnar en hel del rum för förbättring. Om jag har tid över kan det hända att jag fortsätter utveckla appen, eftersom det är något jag skulle kunna ha användning av som till exempel en startsida för Google Chrome.
