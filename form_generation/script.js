let drop = document.getElementById("ftype");
let div = document.querySelector(".select");
let submit = document.querySelector(".submit");

let msg= document.querySelector(".asd");
msg.textContent= `Copy this text to your form tag <form action=""></form>`;

let fieldName = document.getElementById("fname").value;
let fieldId = document.getElementById("fid").value;
let fieldType = document.getElementById("ftype").value;
let fieldA;
let fieldB;

let result= document.querySelector(".result");

//type selection
drop.addEventListener("change", function (e) {
  const a = e.target.value;

  switch (a) {
    case "Radio":
      div.innerHTML = `<input placeholder="number of buttons required" class="Radio" type="number"> <input type="text" class="choices" placeholder="enter box choices" name="" id="">`;
      fieldA = document.querySelector(".Radio").value;
      fieldB = document.querySelector(".choices").value;
      break;
    case "Checkbox":
      div.innerHTML = `<input placeholder="number of box required" class="check" type="number"> <input type="text" class="choice" placeholder="enter box choices" name="" id="">`;
      fieldA = document.querySelector(".check").value;
      fieldB = document.querySelector(".choice").value;
      break;
    case "Textarea":
      div.innerHTML = `<input placeholder="rows" id="rows" type="number"> <input placeholder="cols" id="cols" type="number">`;
      fieldA = document.getElementById("rows").value;
      fieldB = document.getElementById("cols").value;
      break;
    case "text":
      div.innerHTML =``;
      break;
    case "File":
      div.innerHTML =``;
      break;
  }
});

//on submission
submit.addEventListener("click", function (e) {
  e.preventDefault();
  fieldName = document.getElementById("fname").value;
  fieldId = document.getElementById("fid").value;
  fieldType = document.getElementById("ftype").value;

  if(div.lastChild){
  fieldA = div.childNodes[0].value;
  fieldB = div.lastChild.value;
  }

  generator(fieldName, fieldId, fieldType, fieldA, fieldB);

  console.log(fieldA);
  console.log(fieldB);
});

const generator = function (a, b, c, d, e) {
 
  if(c=="Textarea"){
    result.textContent += `<p>${a}</p>  <input type="${c}" id="${b}" rows="${d}" cols="${e}"/> <br>`;
   }
  else if(c=="text" || c=="File"){
    result.textContent += `<p>${a}</p>  <input type="${c}" id="${b}" />  <br>`;
  }
  else if(c=="Radio"){
    let temp= e.split(" ");

     for(let i=0; i<d; i++){
       result.textContent += `<input type="radio" id="${i}" name="choice${i}" value="${temp[i]}"> <label for="${i}">${temp[i]}</label><br>`; 
     }
  }

}
