---
title: "Bsafer"
heading: "Web of Things"
image: "project_2_Kristian Wobbes.jpg"
---

Hensikten med dette prosjektet var å utvikle en webbasert løsning som kommuniserer med et fysisk objekt. Prosjektet vårt består av et bilsete som oppdager om et barn er glemt igjen i en farlig varm bil, og deretter varsler eieren via en SMS for å forhindre heteslag blant barn 

Prosjektgruppen utviklet dette produktet ved å bruke en Raspberry Pi 3 med en SenseHat festet. Pi-en er liten og tillot gruppen å enkelt installere den på et barnesete. NODE-RED var den enkleste løsningen for oss å lese temperaturene, med dra-og-slipp-funksjoner som gjorde det enkelt å lære. Prosjektet bruker også emqx som en MQTT-broker. For API-en som gruppen opprettet, brukte vi Node.js og Express med Mongoose for å kommunisere med MongoDB-databasen.

For videre utvikling av produktet bør det være en måte for setet å oppdage om eieren er i nærheten av setet for å varsle eieren riktig. Setet bør også inkludere en måte å se om barnet er alene i bilen, slik at det ikke sender varsler når det ikke er noe barn i bilen.
