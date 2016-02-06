---
title:  "API med node.js och Express"
assignment: "Uppgift C_3"
---

Under denna uppgift skulle vi bygga en webbapp som använder extern data via API. Eftersom den data jag ville åt inte hade stöd för CORS eller JSON-P fick jag öva på att bygga ett eget backend med node.js!<!--more-->

Testa gärna [appen](http://the-splash.herokuapp.com){:target="_blank"}, eller spana in [koden](https://github.com/jarnehall/the-splash){:target="_blank"}.

![Node.js kod]({{ site.baseurl }}/img/the-splash-code.png)

Appen jag byggt är tänkt att vara som en startsida för din browser. Om du bor i Stockholm så kan du fylla i vilken station eller hållplats du bor närmast och på så vis se när kollektivtrafiken går från dig, och samtidgt se om du bör ta på dig mössa och halsduk genom att presentera väderdata från mätstationen närmast dig.

Efter endast en föreläsning om node.js, express och socket.io så besatte jag inte riktigt de kunskaper som krävdes för att bygga ett eget backend. Men efter en kurs på [Treehouse](http://teamtreehouse.com){:target="_blank"} och lite googlande så lyckades jag bygga ett eget backend som tar förfrågningar från klienten, hämtar data från två olika API:er med AJAX, formaterar resultatet till önskat format och skickar det sedan tillbaka till klienten.

Fokus för mig under den här uppgiften låg på backend och hämtning av data, så frontend (klienten) lämnar en del rum för förbättring. Om jag har tid över kan det hända att jag fortsätter utveckla appen, eftersom det är något jag har användning av i stort sett varje dag.
