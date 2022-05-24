function navigate(NewLoc) {
  window.location.replace(NewLoc);
}

function fillRows() {
  var rows = [
    {
      "apakstips": "sāls",
      "daudzums": 100,
      "id": 2,
      "komentari": "",
      "mervienibas": "g",
      "nosaukums": "Kalcija karbonāts CaCO3",
      "skaits": 25,
      "tips": "reaģents"
    },
    {
      "apakstips": "hidroksīds",
      "daudzums": 50,
      "id": 3,
      "komentari": "Šķīdums izvedots un sapildīts 2020.09.23",
      "mervienibas": "ml",
      "nosaukums": "NaOH šķīdums 10%",
      "skaits": 45,
      "tips": "reaģents"
    },
    {
      "apakstips": "skābe",
      "daudzums": 100,
      "id": 4,
      "komentari": "Šķīdums izvedots un sapildīts 2020.10.21",
      "mervienibas": "ml",
      "nosaukums": "Sālsskābes HCl šķīdums 20%",
      "skaits": 24,
      "tips": "reaģents"
    },
    {
      "apakstips": "test1",
      "daudzums": 50,
      "id": 5,
      "komentari": "Šķīdums izvedots un sapildīts 2020.09.23",
      "mervienibas": "ml",
      "nosaukums": "NaOH šķīdums 10%",
      "skaits": 45,
      "tips": "reaģents"
    },
    {
      "apakstips": "hidroksīds",
      "daudzums": 100,
      "id": 6,
      "komentari": "Šķīdums izvedots un sapildīts 2020.10.21",
      "mervienibas": "ml",
      "nosaukums": "NaOH šķīdums 20%",
      "skaits": 413,
      "tips": "reaģents"
    },
    {
      "apakstips": "test2",
      "daudzums": 50,
      "id": 7,
      "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
      "mervienibas": "ml",
      "nosaukums": "NaOH šķīdums 10%",
      "skaits": 45,
      "tips": "reaģents"
    },
    {
      "apakstips": "test2",
      "daudzums": 5,
      "id": 8,
      "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
      "mervienibas": "ml",
      "nosaukums": " lorem ipsum",
      "skaits": 4,
      "tips": "reaģents"
    },
    {
      "apakstips": "test2",
      "daudzums": 5,
      "id": 9,
      "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
      "mervienibas": "ml",
      "nosaukums": " lorem ipsum",
      "skaits": 4,
      "tips": "reaģents"
    },
    {
      "apakstips": "test2",
      "daudzums": 5,
      "id": 10,
      "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
      "mervienibas": "ml",
      "nosaukums": " lorem ipsum",
      "skaits": 4,
      "tips": "reaģents"
    },
    {
      "apakstips": "test2",
      "daudzums": 5,
      "id": 11,
      "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
      "mervienibas": "ml",
      "nosaukums": " lorem ipsum",
      "skaits": 4,
      "tips": "reaģents"
    },
    {
      "apakstips": "test2",
      "daudzums": 5,
      "id": 12,
      "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
      "mervienibas": "ml",
      "nosaukums": " lorem ipsum",
      "skaits": 4,
      "tips": "reaģents"
    },
    {
      "apakstips": "test2",
      "daudzums": 5,
      "id": 13,
      "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
      "mervienibas": "ml",
      "nosaukums": " lorem ipsum",
      "skaits": 4,
      "tips": "reaģents"
    },
    {
      "apakstips": "test2",
      "daudzums": 5,
      "id": 14,
      "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
      "mervienibas": "ml",
      "nosaukums": " lorem ipsum",
      "skaits": 4,
      "tips": "reaģents"
    },
    {
      "apakstips": "test2",
      "daudzums": 5,
      "id": 15,
      "komentari": "Šķīdums izvedots un sapildīts lorem ipsum",
      "mervienibas": "ml",
      "nosaukums": " lorem ipsum",
      "skaits": 4,
      "tips": "reaģents"
    },
    {
      "apakstips": "mehāniskie svari",
      "id": 1,
      "komentari": "",
      "nosaukums": "Mehāniskie svari QWS",
      "skaits": 5,
      "tips": "svari"
    },
    {
      "apakstips": "elektroniskie svari",
      "id": 2,
      "komentari": "Darbojas uz 3 AAA tipa baterijām",
      "nosaukums": "Elektroniskie svari ES-25",
      "skaits": 15,
      "tips": "svari"
    },
    {
      "apakstips": "plītiņa",
      "id": 3,
      "komentari": "Strāvas vada garums 1m",
      "nosaukums": "Elektriskā plītīņa",
      "skaits": 8,
      "tips": "sildītājs"
    },
    {
      "apakstips": "trauki",
      "id": 4,
      "komentari": "Kolbas īpaši lielām vielām",
      "nosaukums": "Milzīgās kolbas",
      "skaits": 100,
      "tips": "trauks"
    },
    {
      "apakstips": "stikls",
      "id": 5,
      "komentari": "Viegli plīstoša",
      "nosaukums": "Stikla mēģene",
      "skaits": 12,
      "tips": "trauks"
    }
  ];

  const table = document.getElementById("myTable");
  rows.forEach((item) => {
    let row = table.insertRow();
    let ID = row.insertCell(0);
    ID.innerHTML = item.id;
    let Nosaukums = row.insertCell(1);
    Nosaukums.innerHTML = item.nosaukums;
    let Tips = row.insertCell(2);
    Tips.innerHTML = item.tips;
    let Apakštips = row.insertCell(3);
    Apakštips.innerHTML = item.apakstips;
    let Skaits = row.insertCell(4);
    Skaits.innerHTML = item.skaits;
    let Daudzums = row.insertCell(5);
    Daudzums.innerHTML = item.daudzums;
    let komentari = row.insertCell(6);
    komentari.innerHTML = item.komentari;
  });
}

function filter() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (var c = 0; c < td.length; c++) {
      var tdi = td[c];
      if (tdi) {
        txtValue = tdi.textContent || tdi.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "table-row";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

function filterSelection(filter) {
  var aprikojumsBttn, vielaBttn, allbttn;
  aprikojumsBttn = document.getElementById("aprikojumsBttn");
  vielaBttn = document.getElementById("vielaBttn");
  allbttn = document.getElementById("allBttn");
    console.log(filter.includes('all'))
  if (!filter.includes('all')) {
    if (filter.includes('svari') || filter.includes('sildītājs') || filter.includes('trauks')) {
      aprikojumsBttn.classList.add("active");
      vielaBttn.classList.remove("active");
      allbttn.classList.remove("active");
    } else {
      aprikojumsBttn.classList.remove("active");
      vielaBttn.classList.add("active");
      allbttn.classList.remove("active");
    }

    var input, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (filter.includes(txtValue)) {
          tr[i].style.display = "table-row";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  } else {
    aprikojumsBttn.classList.remove("active");
    vielaBttn.classList.remove("active");
    allbttn.classList.add("active");

    var input, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "table-row";
    }
  }
}
