# Inlämningsuppgift Javascript 2

Detta är en applikation för att boka biobiljetter byggt med React.

## Installation

1. Klona repon:
   ```sh
   git clone https://github.com/v43rus/javascriptmovieseatbookSTART.git
   ```
2. Gå till projektkatalogen:
   ```sh
   cd javascriptmovieseatbookSTART
   ```
3. Installera dependencies:
   ```sh
   npm install
   ```

## Användning

För att köra projektet använd:

```sh
npm start
```

Detta kommer köra projektet lokalt på https://localhost:3000

Du kan även bygga programmet med hjälp av kommandot:

```sh
npm deploy
```

## Ramverk

- Jag valde att använda React då det känns som ett bra ramverk för att strukturera upp en applikation som har flera delar.
- Då det delar upp applikationen i mindre moduler är det enklare att förstå och felsöka koden då det separerar potentiella felkoder.
- Denna separationen gör det även mer visuellt tillgängligt då man enklare ser vad som skickas mellan de olika komponenterna, i detta fallet reservedSeats & ticketPrice. Det gör det enklare att förstå själva uppbyggnaden av projektet.

## Struktur

- Moviecontainer.jsx är en av de primära komponenterna som resten av applikationen bygger på då den innehåller logiken för att ändra vilken den valda filmen är och modulen 'Book' hämtar biljettpris från den, det är även den som hanterar logiken för att ändra postern.
- En annan central komponent är SeatBooking.jsx som skickar över antalet säten till 'Book' och hanterar logiken för att markera och avmarkera säten. Det är även här man hade kunnat implementera hämtning av livedata från en databas istället för att använda en hårdkodad sätesmap som vi gör i detta projektet.
- Book.jsx står för text och boknings-knapp. Med hjälp av datan den hämtar från de andra två komponenterna, avgör den vilken text är lämplig med hjälp av Reacts "if-satser" och om den skall visa 'Book'-knappen eller inte.
