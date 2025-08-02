const balanceEl = document.getElementById("balance");
const addFundsBtn = document.getElementById("addFundsBtn");
const fundAmount = document.getElementById("fundAmount");
const logoutBtn = document.getElementById("logoutBtn");
const cryptoList = document.getElementById("cryptoList");

let balance = parseFloat(localStorage.getItem("balance")) || 0;
balanceEl.textContent = `$${balance.toFixed(2)}`;

// Handle Add Funds
addFundsBtn.addEventListener("click", () => {
  const amount = parseFloat(fundAmount.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid amount!");
    return;
  }
  balance += amount;
  localStorage.setItem("balance", balance);
  balanceEl.textContent = `$${balance.toFixed(2)}`;
  fundAmount.value = "";
});

// Handle Logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
});

// Fake crypto prices
const cryptos = [
  { name: "Bitcoin", symbol: "BTC", price: 68000 },
  { name: "Ethereum", symbol: "ETH", price: 3400 },
  { name: "Cardano", symbol: "ADA", price: 0.42 },
  { name: "Dogecoin", symbol: "DOGE", price: 0.13 },
  { name: "Solana", symbol: "SOL", price: 145 }
];

// Render crypto list
function renderCryptos() {
  cryptoList.innerHTML = "";
  cryptos.forEach(c => {
    const card = document.createElement("div");
    card.classList.add("crypto-card");
    card.innerHTML = `
      <h4>${c.name} (${c.symbol})</h4>
      <p>Price: $${c.price.toLocaleString()}</p>
    `;
    cryptoList.appendChild(card);
  });
}

renderCryptos();
