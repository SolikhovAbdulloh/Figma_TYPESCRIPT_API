const Login_btn = document.getElementById("Login") as HTMLInputElement;
const Close = document.getElementById("Close") as HTMLInputElement;
const Modal = document.getElementById("modal_Send") as HTMLDivElement;
const Plus = document.querySelectorAll<HTMLButtonElement>(".pluss");

// Plus.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     let panel1 = panel.nextElementSibling as HTMLDivElement | null;
//     if (panel1){
//       panel1.style.display = panel1.style.display === "none" ? "block" : "none";
      
//     }
//   });
// });

Plus.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      let panel = btn.nextElementSibling as HTMLElement
console.log(panel);
      
      
      if(panel){
        panel.style.display = panel.style.display === "none" ? "block" : "none";
      }

    })
    })

Login_btn.addEventListener("click", () => {
  Modal.style.display = "block";
});

Close.addEventListener("click", () => {
  Modal.style.display = "none";
});

window.addEventListener("click", (modal) => {
  if (modal.target === Modal) Modal.style.display = "none";
});

// const products: any[] = [];

// async function Nation(url: string): Promise<any> {
//   const respon = await fetch(url);
//   const promise = await respon.json();
//   //   console.log(promise);

//   products.push(...promise);

//   return promise;
// }

// Nation("http://localhost:3000/posts");

// let card = JSON.stringify(localStorage.getItem("card")) || [];
