---
title:  "Presentera information"
assignment: "Uppgift B_5"
---

Den här uppgiften handlade om att göra en webbsida som presenterar information av något slag. Kolla gärna in [resultatet](http://jarnehall.github.io/infographic), uppgiften är [versionshanterad på GitHub](https://github.com/jarnehall/infographic).<!--more-->

Jag var sugen på att göra en design som använde sig av bilder, och jag ville också lära mig om hur man kan använda flexbox. Så slutligen bestämde jag mig för att göra en "filmsida" över Tarantinos filmer, eftersom jag då kunde använda mig av posters för filmerna samt att jag är väldigt förtjust i hans filmer.

Eftersom jag aldrig har arbetat med flexbox tidigare så är designen ganska sparsmakad och gjord på papper, för jag visste inte riktigt vad jag kunde åstakomma rent tekniskt. Men huvudpoängen står kvar. En enkel sida med bara en tydlig rubrik, och ett sätt att sortera filmerna på. Efter det så är designen fokuserad på en gridlayout som anpassar sig efter skärmens storlek av filmernas posters, där man kan få mer information genom att klicka på en bild.

![Design mockup för uppgiften]({{ site.baseurl }}/img/infographic-design.jpg)

Jag använda jQuery för att bygga sorteringslösningen, där jag använder flexbox inbyggda order attribut, som jag manipulerar då med hjälp av jQuery. Jag använder också vanlig javascript för att känna av och aktivera filmen om den blir klickad på.

Det är kanske inte det häftigaste slutresultatet i världen, men på vägen lärde jag mig hur man använder flexbox och testade alla dess attribut, vilket kändes väldigt nyttigt att öva på!
