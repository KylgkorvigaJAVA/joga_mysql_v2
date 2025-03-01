# **Joga_MySQL** Teamwork

## Millega tegu

Tegemist on lihtsa paarilehelise projektiga, mille raames saab _esialgu_ kuvada ja lisada jooga harjutuste artikleid.

## Tarkvara ja selle paigaldamine

- Soovituslik IDE: Visual Studio Code
  
[]([https://www.google.com](https://visualstudio.microsoft.com/downloads/))

- Programm kasutab NODE.js mootorit

Paigaldamine kastades cmd terminali

```
curl -o- https://fnm.vercel.app/install | bash

fnm install 23

# Kontroll, kas on paigaldatud node:
node -v # Peab printima "v23.9.0".

# Kontroll, kas on paigaldatud npm:
npm -v # Peab printima "10.9.2".


```
## Projekti allalaadimise juhend

Esmalt tuleb navigeerida cmd terminalis soovitud kausta
näiteks:

```
cd asukoht
user@user:~$

```

PS! Laadides alla projekti, ei ole vaja luua uut kausta. Kausta loomine toimub automaatselt.<br/>
Seejärel tuleb cmd terminalis, soovitud kaustas sisestada järgmine käsk:

```
git clone git@github.com:KylgkorvigaJAVA/joga_mysql_v2.git
```

Palju õnne! Projekt on edukalt alla laetud ning valmis käivituseks.

## Projekti käivitamine

```
cd joga_mysql_v2
```

Koheselt ei saa projekt käivitada, esmalt tuleb installida 'sõltuvused' või inglise keeles "**Dependency**", et projektivälised haldamisraamatukogud või paketud õigesti töötaksid.<br/>
Selleks tuleb minna projektikausta ning sisestada cmd terminalis järgmie käsk:

```
npm install
```

Npm edukalt installitud, saab projekti käivitada samas kaustas, kasutades järgmist käsku:

```
npm start
```

---

## Kasutamise juhend

## Arendajad (nende kontaktid)

- Kaspar Viitkar
- Henrik Seaga
- Kaarel Viilvere

## Lisaallikad, mis oli kasutusel

-Stackoverflow
-ChatGPT
-W3Schools
