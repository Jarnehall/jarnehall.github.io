---
title:  "Jakten på de hemliga orden!"
assignment: "Uppgift C_2"
---

Uppgiften gick ut på att vi, individuellt, skulle utveckla ett utbildande spel med hjälp av html, css och javascript.

Mitt spel kallar jag för [Ordjakten](http://jarnehall.github.com/ordjakten/){:target="_blank"}! <!--more--> Testa gärna spela spelet, eller inspektera koden som finns versionshanterad på [GitHub](https://github.com/jarnehall/ordjakten/){:target="_blank"}.


### Idéskiss

Ordjakten är en variant på spelet Hänga gubbe (eller Hang Man).

Hänga gubbe är naturligt utbildande både när det kommer till stavning och ordförråd, och de egenskaperna ville jag också att mitt spel skulle ha. Skillnaden mot Hänga gubbe är att man i mitt spel får ett antal försök på sig som representeras av en siffra, istället för en gubbe på väg till hängning. Anledningen till det är framförallt att det blir enklare att ändra och tydligt representera antalet försök spelaren får på sig baserat på vald svårighetsgrad, men också för att anpassa spelet till barn vars föräldrar kanske inte tycker det är så bra att de spelar spel där människor hängs och dör.

Spelet går ut på att spelaren ska lista ut vilket ord spelet ”tänker på” genom att gissa på vilka bokstäver som finns i ordet. Man gissar på en bokstav genom att klicka på den (alla bokstäver i alfabetet ska finnas representerade som en knapp, så man enkelt kan spela genom att bara trycka), och får då direkt feedback ifall den bokstaven faktiskt är med i ordet eller inte. Om bokstaven finns i ordet så avslöjas alla instanser av bokstaven, och deras position i ordet för spelaren. Om bokstaven inte finns i ordet så markeras bokstaven som fel och spelaren förlorar ett av sina försök (eller extraliv).

Om spelaren lyckas lista ut hela ordet så vinner hen, men om spelaren förbrukar alla sina försök (extraliv) innan dess så förlorar hen. Om man vinner så ökar poängräknaren med ett, men när man förlorar sätts poängräknaren till noll, på så viss kan man tävla i hur många vinster man lyckas få i rad.

Målgruppen för spelet är framförallt barn i åldrarna 6-9 år, eftersom jag tror de har mest att lära sig från den här typen av spel (och för att det vore roligt att utveckla ett spel jag kan spela tillsammans med min systerdotter så småning om). Men om jag hinner vill jag lägga till olika svårighetsgrader (som jag nämnde ovan) som både minskar antalet försök (extraliv) spelaren får, och väljer längre och svårare ord så att spelet kan vara underhållande för alla, oavsett ålder.


### Programmeringen

Vi fick tillgång till att använda vilka bibliotek och ramverk vi ville, men jag var sugen på att testa något jag inte hade gjort förut. Vad jag ville göra var att bygga hela spelet som en webbapplikation, där allt dynamiskt innehåll skapas med hjälp av javascript, och jag ville göra det utan ramverk (så som jQuery) för att öva mer på att arbeta med vanlig javascript.

Förutom att jag fick kolla in [Mozillas javascript-dokumentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} en hel del så gick programmeringen relativt smärtfritt.

Spelet är strukturerat så att det finns en html-fil (index.html), som bara innehåller element som är statiska och aldrig ändras (header och footer i det här fallet). Sedan använder jag javascript för att skapa, ta bort och redigera element allt eftersom det behövs.

Ett exempel på detta är när sidan laddas, så skapas en välkomsttext, tre klickbara alternativ för att välja svårighetsgrad och en knapp som startar spelet. När användaren klickar på knappen för att starta spelet så tas alla de nyligen skapade elementen bort, och nya element som krävs för att spela spelet skapas (så som en knapp för varje bokstav i alfabetet till exempel).


### Lessions learned

Något som hade underlättat (och som jag kommer testa under nästa projekt) vore om jag hade tänkt igenom vilka funktioner jag behövde och vad de skulle göra, innan jag började skriva min kod. Kanske till och med gå så långt att skriva hela programmet med pseudokod innan jag satte igång med riktig kod.

Spelet är fullt fungerande och gick ganska fort att utveckla trots att jag experimenterade mig fram med riktig kod från start, men den slutgiltiga koden hade nog blivit elegantare om jag tog mig tid till att tänka igenom hur jag skulle strukturera koden innan jag skrev den.

Eftersom det här var första gången jag utvecklat en webbapplikation helt och hållet med javascript utan ramverk lärde jag mig en annan sak också, nämligen att det fort blir väldigt bökigt att lägga till och ta bort element många html-element. Jag tänkte inte på det under utvecklingen av spelet, men nu i efterhand kom jag på att jag borde skrivit en funktion som skapar html-element åt mig. När tanken slog mig ville jag snabbt testa hur något sådant skulle kunna se ut, så jag gjorde ett exempel du kan [kolla in på Codepen](http://codepen.io/jarnehall/pen/adJEdE){:target="_blank"}.
