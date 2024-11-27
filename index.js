'use strict'; 

const btn = document.querySelector('.advice_generate--btn'); 
const adviceText =document.querySelector('.advice_text')
const adviceID =document.querySelector('.advice_num')


btn.addEventListener('click' , async function(){
  const [newAdvice] = await generateAdvice() ;
  adviceID.textContent = `advice #${newAdvice.id}`
  adviceText.textContent = `${newAdvice.advice}`
})



const generateAdvice = async function(){
  try{
    const res = await fetch('https://api.adviceslip.com/advice') ; 
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data  = await res.json()
    return Object.values(data)

  }catch(err){
    console.error(err);
  }
}


// async function getData() {
//   const url = "https://example.org/products.json";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
