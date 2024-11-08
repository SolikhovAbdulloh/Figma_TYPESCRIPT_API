"use strict";
const Login_btn = document.getElementById("Login");
const Close = document.getElementById("Close");
const Modal = document.getElementById("modal_Send");
const Plus = document.querySelectorAll(".pluss");
// Plus.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     let panel1 = panel.nextElementSibling as HTMLDivElement | null;
//     if (panel1){
//       panel1.style.display = panel1.style.display === "none" ? "block" : "none";
//     }
//   });
// });
Plus.forEach((btn) => {
    btn.addEventListener("click", () => {
        let panel = btn.nextElementSibling;
        console.log(panel);
        if (panel) {
            panel.style.display = panel.style.display === "none" ? "block" : "none";
        }
    });
});
Login_btn.addEventListener("click", () => {
    Modal.style.display = "block";
});
Close.addEventListener("click", () => {
    Modal.style.display = "none";
});
window.addEventListener("click", (modal) => {
    if (modal.target === Modal)
        Modal.style.display = "none";
});
let api = "https://api.currencyapi.com/v3/latest?apikey=cur_live_5k3XE4VO37hh2y7knCAF7K3nzj5RTIAxVedvJyA4";
async function Dollar(api) {
    const respon = await fetch(api);
    const promise = await respon.json();
    return promise;
}
console.log(Dollar(api));
const data = Dollar(api);
const Usd = document.getElementById("USD");
const Uzs = document.getElementById("UZS");
async function displayCurrencyData() {
    try {
        const data = await Dollar(api);
        const currencyOutput = document.getElementById("currency-output");
        const usdRate = data.data.USD.value;
        const UZSRate = data.data.UZS.value;
        const UZB = UZSRate.toFixed(2);
        if (Usd) {
            Usd.innerHTML = `USD: ${usdRate} $ dollar <i class="fa-solid fa-down-long"></i> <img src="../img/Flag_of_the_United_States.svg" alt=""> `;
            Uzs.innerHTML = `UZS: ${UZB} So'm  <img class="w-4 h-7" src="../img/flag-for-flag-uzbekistan-svgrepo-com.svg" alt="">`;
        }
    }
    catch (error) {
        console.error("Xatolik yuz berdi:", error);
    }
}
displayCurrencyData();
//# sourceMappingURL=main.js.map