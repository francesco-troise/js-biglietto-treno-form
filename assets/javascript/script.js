const form = document.querySelector("form");
//Selezione del form
const full_name_field = document.getElementById("input_full_name");
//Selezione del nome
const km_field = document.getElementById("input-km");
//Selezione dei km
const age_field = document.getElementById("select-age");
//Selezione dell'età

const td_nome = document.getElementById("td-nome");
const td_offerta = document.getElementById("td-offerta");
const td_carrozza = document.getElementById("td-carrozza");
const td_codice = document.getElementById("td-codice");
const td_costo = document.getElementById("td-costo");
//Selezione dei nodi appartenenti alla tabella di riepilogo del biglietto

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //A seconda dell'intervallo impostato, ritorna un numero casuale(per codice biglietto e numero della carrozza)
}

form.addEventListener("submit", function (event) {
  //In ascolto per l'evento -submit del -form
  event.preventDefault();
  //Prevengo comportamento di default e quindi conseguenziale perdita dati javascript

  const nome = full_name_field.value;
  const km = km_field.value;
  const age = age_field.value;
  //Variabili intermedie per poter usare i valori presi dai rispettivi nodi

  const prezzo_base = 0.21 * km;
  let sconto = 0;
  let offerta = "Biglietto Standard";

  if (age === "Minorenne") {
    sconto = 0.2;
    offerta = "Promozione Minorenne( -20% )";
  } else if (age === "Over65") {
    sconto = 0.4;
    offerta = "Promozione over 65( -40% )";
  }

  const costo_finale = (prezzo_base * (1 - sconto)).toFixed(2);
  //Calcola il costo finale del biglietto intercettando lo sconto apposito

  const carrozza = randomNumber(1, 12);
  //Numero casuale per il numero della carrozza
  const codice_cp = randomNumber(10000, 99999);
  //Numero casuale per il codice del biglietto

  td_nome.textContent = nome;
  /*
    td_nome è il nodo che identifica la cella della tabella dove inserire il nome del passeggero.
    La variabile -nome- salva il se il valore(value) passatogli da  -full_name_field.value-
    -full_name_field è il nodo che raffigura il campo di input dove l'utente scriverà, quindi avrà un "value" da passare
*/
  td_offerta.innerText = offerta;
  td_carrozza.innerText = carrozza;
  td_codice.innerText = codice_cp;
  td_costo.innerText = costo_finale;
  //Si procede ad inserire nelle celle della tabelle i valori corrispondenti
});

const btn_delete = document.getElementById("btn-delete");
//Seleziono il nodo relativo al bottone "annulla"

btn_delete.addEventListener("click", () => {
  //Evento che gestisce il click del bottone "annulla"

  full_name_field.value = "";
  km_field.value = 0;
  age_field.value = "Minorenne";
  //Reset dei "value" acquisiti nel form

  td_nome.innerText = "";
  td_offerta.innerText = "";
  td_carrozza.innerText = "";
  td_codice.innerText = "";
  td_costo.innerText = "";
  //Reset dei contenuti delle celle della tabella
});
