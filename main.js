// function superFunzione() {
//     console.log('sto eseguendo il codice dentro il timeout');
// }

// const pippo = 1;

// const pluto = 2;

// setTimeout(superFunzione, 20000);

// const paperino = pippo + pluto;

// const topolino = 'Javascript'

// console.log(topolino + paperino);

// setInterval(() => {
    
// }, 2000);

// function gestisciRisposta(resp) {
//     // return resp.text();
//     resp.json()
//     return;
// }

// function gestisciRisultatoFinale(res) {
//     // const dittoObj = JSON.parse(res);
//     // console.log(dittoObj);
//     console.log(res);
// }

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(gestisciRisposta)
// .then(gestisciRisultatoFinale)

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((resp) => resp.json())
.then((res) => console.log(res))
.catch((error) => console.log(error.message));