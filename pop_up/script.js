console.log("hi, am running");
    
let i = document.querySelector(".img1");
let j = document.querySelector(".modal");
let k = document.querySelector(".grid-container");
let l = document.querySelector(".btn");
let o = document.querySelector(".overlay");

console.log(j);
console.log(i);

i.addEventListener("click", function () {
  j.classList.remove("hidden");
  o.classList.remove("hidden");
  //k.classList.toggle("hidden");
});

l.addEventListener("click", function(){

  j. classList.add("hidden");
  //k.classList.remove("hidden");
})
