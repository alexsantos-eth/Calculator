let li = document.querySelectorAll("#keyboard > li");
let text = document.getElementById("area");
let resp = document.getElementById("resp");

const ans = () => {
  if(text.value == ""){
    resp.value = "";
  }else{
  resp.value = eval(text.value.replace(/÷/g, "/").replace(/×/g, "*") ) 
  } 
}
const ansC = () => {
  if(resp.value.length > 0){
    text.value = resp.value;
    resp.value = "";
  }
}
const add = (s, e, sign=false) => {
  e.target.classList.add("btn");
  setTimeout(() =>{
    e.target.classList.remove("btn");
  },200)
  if(sign){
    if(text.value.length < 1 && s != "-"){
        text.value = "";
    }else{
      if(text.value.charAt(text.value. length-1) != "+" && text.value.charAt(text.value.length-1) != "-" && text.value.charAt(text.value.length-1) != "%" && text.value.charAt(text.value.length-1) != "." && text.value.charAt(text.value.length-1) != "×" && text.value.charAt(text.value.length-1) != "÷"){
        text.value += s;
      }
    } 
  }else{
    text.value += s;
  }
  if(text.value.length > 16){
    text.style.fontSize = "25px";
  }else{
    text.style.fontSize = "30px";
  } 
 ans();
} 


li[0].addEventListener("click",(e) =>{
  e.target.classList.add("btn");
  setTimeout(() =>{
    e.target.classList.remove("btn");
  },200)
  text.value = "";
  resp.value = "";
})
li[1].addEventListener("click",(e) =>{
  add("÷", e, true);
})
li[2].addEventListener("click",(e) =>{
  add("×",e, true);
})
li[3].addEventListener("click",(e) =>{
  e.target.classList.add("btn");
  setTimeout(() =>{
    e.target.classList.remove("btn");
  },200)
  text.value = text.value.substr(0, text.value.length - 1);
  ans();
})
li[4].addEventListener("click",(e) =>{
  add(7, e);
})
li[5].addEventListener("click",(e) =>{
  add(8, e);
})
li[6].addEventListener("click",(e) =>{
  add(9, e);
})
li[7].addEventListener("click",(e) =>{
  add("-", e, true);
})
li[8].addEventListener("click",(e) =>{
  add(4, e);
})
li[9].addEventListener("click",(e) =>{
  add(5, e);
})
li[10].addEventListener("click",(e) =>{
  add(6, e);
})
li[11].addEventListener("click",(e) =>{
  add("+", e, true);
})
li[12].addEventListener("click",(e) =>{
  add(1, e);
})
li[13].addEventListener("click",(e) =>{
  add(2, e);
})
li[14].addEventListener("click",(e) =>{
  add(3, e);
})
li[15].addEventListener("click",(e) =>{
  add("%", e, true);
})
li[16].addEventListener("click",(e) =>{
  add(0, e);
})
li[17].addEventListener("click",(e) =>{
  add(".", e, true);
})
li[18].addEventListener("click",(e) =>{
  e.target.classList.add("btn");
  setTimeout(() =>{
    e.target.classList.remove("btn");
  },200)
  ansC();
})

if('serviceWorker' in navigator){
  navigator.serviceWorker.register("./sw.js")
  .then(e => console.log(e))
 .catch(er => alert(er));
}