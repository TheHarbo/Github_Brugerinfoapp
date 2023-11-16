# Github brugerinfo-finder

Velkommen til min lille opgaveapp. Denne app har til formål at hente data ned på en Github bruger, og fremvise det.

## Kørsel

Sørg for at du har React installeret.
Hent repositoriet ned.
Kør kommandoen "npm start" fra en terminal i hovedmappen.

## Appen i sig selv

Appen indeholder en tekstboks og en knap til at starte med. Meningen er at du indtaster et brugernavn, og derefter trykker på knappen.

Derefter bliver der lavet et Get kald til https://api.github.com/users/ med en parameter som er det indtastede brugernavn.

Du får herefter nogle basale oplysninger at vide om brugeren. Du kan både klikke på brugerens avatar eller det givne link for at åbne brugerens profilside på Github i en ny fane.

Eksisterer brugeren ikke vil du blive informeret om det.

## Andet

Get-kaldene er ikke authentificerede, og der er derfor en begrænsning på 60 i timen kald pr. IP.
