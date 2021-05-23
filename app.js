// Global Variables

const addCurrencyBtn = document.querySelector(".add-currency-btn");
const addCurrencyList = document.querySelector(".add-currency-list");
const currenciesList = document.querySelector(".currencies");

const dataURL =
  "http://data.fixer.io/api/latest?access_key=21fe832a65e8cd32a4e3a9c56ea6b2cb";

const initiallyDisplayedCurrencies = ["USD", "EUR", "BRL", "GBP", "CAD"];
let baseCurrency;
let baseCurrencyAmount;

let currencies = [
  {
    name: "US Dollar",
    abbr: "USD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/us.gif",
  },
  {
    name: "Euro",
    abbr: "EUR",
    symbol: "\u20AC",
    flagURL:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
  },
  {
    name: "Japanese Yen",
    abbr: "JPY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/jp.gif",
  },
  {
    name: "British Pound",
    abbr: "GBP",
    symbol: "\u00A3",
    flagURL: "http://www.geonames.org/flags/l/uk.gif",
  },
  {
    name: "Australian Dollar",
    abbr: "AUD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/au.gif",
  },
  {
    name: "Canadian Dollar",
    abbr: "CAD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/ca.gif",
  },
  {
    name: "Swiss Franc",
    abbr: "CHF",
    symbol: "\u0043\u0048\u0046",
    flagURL: "http://www.geonames.org/flags/l/ch.gif",
  },
  {
    name: "Chinese Yuan Renminbi",
    abbr: "CNY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/cn.gif",
  },
  {
    name: "Swedish Krona",
    abbr: "SEK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/se.gif",
  },
  {
    name: "New Zealand Dollar",
    abbr: "NZD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/nz.gif",
  },
  {
    name: "Mexican Peso",
    abbr: "MXN",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/mx.gif",
  },
  {
    name: "Singapore Dollar",
    abbr: "SGD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/sg.gif",
  },
  {
    name: "Hong Kong Dollar",
    abbr: "HKD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/hk.gif",
  },
  {
    name: "Norwegian Krone",
    abbr: "NOK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/no.gif",
  },
  {
    name: "South Korean Won",
    abbr: "KRW",
    symbol: "\u20A9",
    flagURL: "http://www.geonames.org/flags/l/kr.gif",
  },
  {
    name: "Turkish Lira",
    abbr: "TRY",
    symbol: "\u20BA",
    flagURL: "http://www.geonames.org/flags/l/tr.gif",
  },
  {
    name: "Russian Ruble",
    abbr: "RUB",
    symbol: "\u20BD",
    flagURL: "http://www.geonames.org/flags/l/ru.gif",
  },
  {
    name: "Indian Rupee",
    abbr: "INR",
    symbol: "\u20B9",
    flagURL: "http://www.geonames.org/flags/l/in.gif",
  },
  {
    name: "Brazilian Real",
    abbr: "BRL",
    symbol: "\u0052\u0024",
    flagURL: "http://www.geonames.org/flags/l/br.gif",
  },
  {
    name: "South African Rand",
    abbr: "ZAR",
    symbol: "\u0052",
    flagURL: "http://www.geonames.org/flags/l/za.gif",
  },
  {
    name: "Philippine Peso",
    abbr: "PHP",
    symbol: "\u20B1",
    flagURL: "http://www.geonames.org/flags/l/ph.gif",
  },
  {
    name: "Czech Koruna",
    abbr: "CZK",
    symbol: "\u004B\u010D",
    flagURL: "http://www.geonames.org/flags/l/cz.gif",
  },
  {
    name: "Indonesian Rupiah",
    abbr: "IDR",
    symbol: "\u0052\u0070",
    flagURL: "http://www.geonames.org/flags/l/id.gif",
  },
  {
    name: "Malaysian Ringgit",
    abbr: "MYR",
    symbol: "\u0052\u004D",
    flagURL: "http://www.geonames.org/flags/l/my.gif",
  },
  {
    name: "Hungarian Forint",
    abbr: "HUF",
    symbol: "\u0046\u0074",
    flagURL: "http://www.geonames.org/flags/l/hu.gif",
  },
  {
    name: "Icelandic Krona",
    abbr: "ISK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/is.gif",
  },
  {
    name: "Croatian Kuna",
    abbr: "HRK",
    symbol: "\u006B\u006E",
    flagURL: "http://www.geonames.org/flags/l/hr.gif",
  },
  {
    name: "Bulgarian Lev",
    abbr: "BGN",
    symbol: "\u043B\u0432",
    flagURL: "http://www.geonames.org/flags/l/bg.gif",
  },
  {
    name: "Romanian Leu",
    abbr: "RON",
    symbol: "\u006C\u0065\u0069",
    flagURL: "http://www.geonames.org/flags/l/ro.gif",
  },
  {
    name: "Danish Krone",
    abbr: "DKK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/dk.gif",
  },
  {
    name: "Thai Baht",
    abbr: "THB",
    symbol: "\u0E3F",
    flagURL: "http://www.geonames.org/flags/l/th.gif",
  },
  {
    name: "Polish Zloty",
    abbr: "PLN",
    symbol: "\u007A\u0142",
    flagURL: "http://www.geonames.org/flags/l/pl.gif",
  },
  {
    name: "Israeli Shekel",
    abbr: "ILS",
    symbol: "\u20AA",
    flagURL: "http://www.geonames.org/flags/l/il.gif",
  },
];
console.log(currencies.length);
// Event Listeners

addCurrencyBtn.addEventListener("click", addCurrencyBtnClick);

function addCurrencyBtnClick(event) {
  addCurrencyBtn.classList.toggle("open");
}

addCurrencyList.addEventListener("click", addCurrencyListClick);

function addCurrencyListClick(event) {
  const clickedListItem = event.target.closest("li");
  if (!clickedListItem.classList.contains("disabled")) {
    const newCurrency = currencies.find(
      (c) => c.abbr === clickedListItem.getAttribute("data-currency")
    );
    if (newCurrency) newCurrenciesListItem(newCurrency);
  }
}

currenciesList.addEventListener("click", currenciesListClick);

function currenciesListClick(event) {
  if (event.target.classList.contains("close")) {
    const parentNode = event.target.parentNode;
    parentNode.remove();
    addCurrencyList
      .querySelector(`[data-currency=${parentNode.id}]`)
      .classList.remove("disabled");
    if (parentNode.classList.contains("base-currency")) {
      const newBaseCurrencyLI = currenciesList.querySelector(".currency");
      if (newBaseCurrencyLI) {
        setNewBaseCurrency(newBaseCurrencyLI);
        baseCurrencyAmount = Number(
          newBaseCurrencyLI.querySelector(".input input").value
        );
      }
    }
  }
}

function setNewBaseCurrency(newBaseCurrencyLI) {
  newBaseCurrencyLI.classList.add("base-currency");
  baseCurrency = newBaseCurrencyLI.id;
  const baseCurrencyRate = currencies.find(
    (currency) => currency.abbr === baseCurrency
  ).rate;
  currenciesList.querySelectorAll(".currency").forEach((currencyLI) => {
    const currencyRate = currencies.find(
      (currency) => currency.abbr === currencyLI.id
    ).rate;
    const exchangeRate =
      currencyLI.id === baseCurrency
        ? 1
        : (currencyRate / baseCurrencyRate).toFixed(4);
    currencyLI.querySelector(
      ".base-currency-rate"
    ).textContent = `1 ${baseCurrency} = ${exchangeRate} ${currencyLI.id}`;
  });
}

currenciesList.addEventListener("input", currenciesListInputChange);

function currenciesListInputChange(event) {
  const isNewBaseCurrency = event.target.closest("li").id !== baseCurrency;
  if (isNewBaseCurrency) {
    currenciesList
      .querySelector(`#${baseCurrency}`)
      .classList.remove("base-currency");
    setNewBaseCurrency(event.target.closest("li"));
  }
  const newBaseCurrencyAmount = isNaN(event.target.value)
    ? 0
    : Number(event.target.value);
  if (baseCurrencyAmount !== newBaseCurrencyAmount || isNewBaseCurrency) {
    baseCurrencyAmount = newBaseCurrencyAmount;
    const baseCurrencyRate = currencies.find(
      (currency) => currency.abbr === baseCurrency
    ).rate;
    currenciesList.querySelectorAll(".currency").forEach((currencyLI) => {
      if (currencyLI.id !== baseCurrency) {
        const currencyRate = currencies.find(
          (currency) => currency.abbr === currencyLI.id
        ).rate;
        const exchangeRate =
          currencyLI.id === baseCurrency
            ? 1
            : (currencyRate / baseCurrencyRate).toFixed(4);
        currencyLI.querySelector(".input input").value =
          exchangeRate * baseCurrencyAmount !== 0
            ? (exchangeRate * baseCurrencyAmount).toFixed(4)
            : "";
      }
    });
  }
}

currenciesList.addEventListener("focusout", currenciesListFocusOut);

function currenciesListFocusOut(event) {
  const inputValue = event.target.value;
  if (isNaN(inputValue) || Number(inputValue) === 0) event.target.value = "";
  else event.target.value = Number(inputValue).toFixed(4);
}

currenciesList.addEventListener("keydown", currenciesListKeyDown);

function currenciesListKeyDown(event) {
  if (event.key === "Enter") event.target.blur();
}

// Auxiliary Functions

function populateAddCyrrencyList() {
  for (let i = 0; i < currencies.length; i++) {
    addCurrencyList.insertAdjacentHTML(
      "beforeend",
      `<li data-currency=${currencies[i].abbr}>
        <img src=${currencies[i].flagURL} class="flag"><span>${currencies[i].abbr} - ${currencies[i].name}</span>
      </li>`
    );
  }
}

function populateCurrenciesList() {
  for (let i = 0; i < initiallyDisplayedCurrencies.length; i++) {
    const currency = currencies.find(
      (c) => c.abbr === initiallyDisplayedCurrencies[i]
    );
    if (currency) newCurrenciesListItem(currency);
  }
}

function newCurrenciesListItem(currency) {
  if (currenciesList.childElementCount === 0) {
    baseCurrency = currency.abbr;
    baseCurrencyAmount = 0;
  }
  addCurrencyList
    .querySelector(`[data-currency=${currency.abbr}]`)
    .classList.add("disabled");
  const baseCurrencyRate = currencies.find((c) => c.abbr === baseCurrency).rate;
  const exchangeRate =
    currency.abbr === baseCurrency
      ? 1
      : (currency.rate / baseCurrencyRate).toFixed(4);
  const inputValue = baseCurrencyAmount
    ? (baseCurrencyAmount * exchangeRate).toFixed(4)
    : "";

  currenciesList.insertAdjacentHTML(
    "beforeend",
    `<li class="currency ${
      currency.abbr === baseCurrency ? "base-currency" : ""
    }" id=${currency.abbr}>
    <img src=${currency.flagURL} class="flag">
      <div class="info">
      <p class="input"><span class="currency-symbol">${
        currency.symbol
      }</span><input placeholder="0.0000" value=${inputValue}></p>
        <p class="currency-name">${currency.abbr} - ${currency.name}</p>
        <p class="base-currency-rate">1 ${baseCurrency} = ${exchangeRate} ${
      currency.abbr
    }</p>
        </div>
        <span class="close">&times;</span>
        </li>`
  );
}

fetch(dataURL)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(".date").textContent = data.date;
    data.rates["EUR"] = 1;
    currencies = currencies.filter((currency) => data.rates[currency.abbr]);
    currencies.forEach(
      (currency) => (currency.rate = data.rates[currency.abbr])
    );
    populateAddCyrrencyList();
    populateCurrenciesList();
  })
  .catch((err) => console.log(err));
