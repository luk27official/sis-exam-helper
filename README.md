## SIS exam helper
Pomucka pro prihlasovani na zkousky v SIS UK.

### Instalace
Staci stahnout cely adresar jako zip archiv a rozbalit ho.
Potom v Chrome staci jit do Rozsireni (chrome://extensions/) > "Nacist rozbalene".

### Pouziti
1. Zapnout rozsireni v Chrome
2. Jit na stranku s prihlasovanim na zkousky v SIS a najit si potrebne informace - cislo radku zkousky, barva radku apod.
3. Opet jit do rozsireni, v podrobnostech rozsireni kliknout na "Moznosti rozsireni"
4. Vyplnit hodnoty a ulozit

Priklad pouziti:
- Chci se prihlasit na zkousku, kde bude zapis odemcen v 19:00:00.
- Zapnu rozsireni.
- V SIS se tedy podivam, ze vyhovujici termin je celkove ctvrty - jde o druhy sedy radek.
- Jdu do moznosti rozsireni a vyplnim - na prvni radek dam 1 a na druhy radek dam 2 (druhy radek bude mozna potrebovat cislo 1 nebo 3, je nutne to vyzkouset).
- Do hodin napisu 19, minuty 0, sekundy 1 - doporucuji pouzit sekundu dele, jelikoz v 00 by zapis nemusel byt povolen.
- Jdu zpet do SIS, podivam se, ze radek, kam se chci prihlasit, ma ruzovou barvu - ta je jen orientacni, aby bylo videt, na co skript bude klikat. Pokud nema nic ruzovou barvu, je nutne zkusit zmenit index hledaneho radku, pripadne zkusit znovu nacist/zapnout rozsireni.
- V konzoli bude bezet nejaky vypis - tim se zjisti, ze je skript opravdu aktivni.
- Po uplynuti casu (tedy v 19:00:01) se stranka AUTOMATICKY reloadne a klikne na zapis.
- Vypnu rozsireni.

gl & hf