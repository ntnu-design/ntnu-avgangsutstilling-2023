---
title: "Gryt"
heading: "Åpen kildekodebasert tekst-, tale- og videochat-plattform"
image: "project_1_Sivert Gullberg Hansen.webp"
---

<a target='_blank' href='https://gryt.chat/'>gryt.chat</a>

Gryt er en åpen kildekodebasert tekst-, tale- og videochat-plattform som verdsetter personvern. Prosjektet er i start-fasen og under konstant endring.

Gryt gir brukerne muligheten til å drifte sine egne servere, slik at de har full kontroll over samtaler og data som deles. Gryt er en sikker og privat kommunikasjonsplattform som gir brukerne mulighet til å kommunisere fritt og samtidig beskytte personvernet sitt.

Prosjektet er drevet av meg selv og ligger ute tilgjengelig hos <a href='https://github.com/Gryt-chat'>GitHub</a>.

Gryt består av en klient, en autentiserings-server og en selv-drevet server.

Alle prosjektene til Gryt benytter design systemet kalt <a href='https://www.npmjs.com/package/@gryt/ui'>Gryt-UI</a>. Dette gir alle applikasjonene identisk utseende og følelse. Gryt-UI er basert på React og benytter Tailwind + DaisyUI.

## Klienten:
<strong>Teknologi: Next.js + Electron</strong>
Brukerne kobler seg opp ved bruk av en webapplikasjon, som kan kjøres i nettleser eller som en skrivebords-applikasjon.

## Autentisering:
<strong>Teknologi: Supabase</strong>
Vi håndterer autentisering slik at brukere kan benytte applikasjonen over flere enheter. På denne måten vil alt være synkronisert mellom enhetene. Våre databaser inneholder kun informasjon om innlogging og hvilke servere man tar del i.

## Servere:
<strong>Teknologi: Supabase + Socket.IO (Ubestemt)</strong>
Brukerne har muligheten til å drifte sine egne servere, som andre brukere kan koble seg opp mot. Dette gjør at brukere kan kommunisere seg i mellom. Det er og planlagt muligheten til å opprette flere samfunn innad i en server, slik at man kan eksempelvis ha en plass for vennegjengen og en annen for kollegaer/klassekamerater.

Besøk gjerne <a target='_blank' href='https://gryt.chat/'>hovedsiden til Gryt</a> for å se flere egenskaper Gryt tilbyr.
