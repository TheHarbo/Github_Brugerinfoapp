# Github brugerinfo-finder

Velkommen til min lille opgaveapp. Denne app har til formål at hente data ned på en Github bruger, og fremvise det.

## Appen i sig selv

Appen indeholder en tekstboks og en knap til at starte med. Meningen er at du indtaster et brugernavn, og derefter trykker på knappen

Derefter bliver der lavet et Get kald til https://api.github.com/users/ med en parameter som er det indtastede brugernavn

Du får herefter nogle basale oplysninger at vide om brugeren.

Eksisterer brugeren ikke vil du blive indformeret om det.