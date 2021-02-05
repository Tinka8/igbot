/**
 * Instagram Scraper
 * 
 * @author rozklad <jan.rozklad@gmail.com>
 */
console.log('Hello world');
const Nightmare = require('nightmare')          // Nahrat knihovnu nightmare
const nightmare = Nightmare({ show: true })     // Vytvorit instanci prohlizece
nightmare
    .goto('https://www.instagram.com/accounts/login')   // Jit na IG login
    .click('.aOOlW.bIiDR')                              // Prijmout cookies
    .wait('[name="username"]')                          // Pockat az bude existovat prvek [name="username"]
    .type('[name="username"]', process.argv[2])         // Vyplnit jmeno
    .type('[name="password"]', process.argv[3])         // Vyplnit heslo
    .click('button[type="submit"]')                     // Odeslat
    .wait(9000)                                         // Pockat 9s
    .goto(`https://www.instagram.com/fatallik`)         // Otevrit fatallikuv profil
    .wait(9000)                                         // Pockat 9s
    .end()                                              // Skoncit
    .then(console.log);