let container = document.createElement("div");
container.setAttribute("class", "container");

let logo = document.createElement("img");
logo.setAttribute("class", "img-logo-left");
logo.setAttribute("src","https://dheivegam.com/wp-content/uploads/2018/12/thiruvalluvar-5-238x300.jpg");
logo.setAttribute("alt", "Thiruvalluvar");

let mainHeadDiv = document.createElement("div");
mainHeadDiv.setAttribute("class", "Main-head-div");

let mainHead = document.createElement("h2");
mainHead.setAttribute("class","main-head");
mainHead.innerHTML = "Thirukkural";

mainHeadDiv.append(mainHead);

let HeadDiv1 = document.createElement("div");
HeadDiv1.setAttribute("class", "head-div-1");

let Head1 = document.createElement("h4");
Head1.setAttribute("class", "head-1");
Head1.innerHTML =
  "Thirukkural is considered to be the world's greatest work on ethics and morality gifted by the Tamilians.";

HeadDiv1.append(Head1);

let HeadDiv2 = document.createElement("div");
HeadDiv2.setAttribute("class", "head-div-2");

let Head2 = document.createElement("h6");
Head2.setAttribute("class", "head-2");
Head2.innerHTML =
  "Thirukkural is a classic Tamil language text consisting of 1,330 short couplets, or kurals, of seven words each";

HeadDiv2.append(Head2);

let HeadDiv3 = document.createElement("div");
HeadDiv3.setAttribute("class", "head-div-3");

let Head3 = document.createElement("h6");
Head3.setAttribute("class", "head-3");
Head3.innerHTML =
  "The text is divided into three books with aphoristic teachings on virtue (aram), wealth (porul) and love(inbam)";

HeadDiv3.append(Head3);

let form=document.createElement("form");
form.setAttribute("class","form");
form.setAttribute("id","form");
form.addEventListener("submit",fetchThirukkural);

let input1=document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("id","thirukkural-input");
input1.setAttribute("class","thirukkural-input");
input1.setAttribute("placeholder","Enter a Thirukkural Number");

let button1 = document.createElement("button");
button1.setAttribute("type", "submit");
button1.setAttribute("id", "submit");
button1.setAttribute("class", "btn-1");
button1.innerHTML = "Submit";

form.append(input1,button1);

let displayCard=document.createElement("div");
displayCard.setAttribute("id", "main-card");
displayCard.setAttribute("class", "main-card");

container.append(logo,mainHeadDiv,HeadDiv1,HeadDiv2,HeadDiv3,form,displayCard);

document.body.append(container);



async function fetchThirukkural(event) {
  // https://api-thirukkural.vercel.app/api?num=1310

  try {
    event.preventDefault();
    let searchedNumber = document.getElementById("thirukkural-input").value;
  
  if(searchedNumber>0 && searchedNumber<=1330){
  
    let Response = await fetch(
      `https://api-thirukkural.vercel.app/api?num=${searchedNumber}`
    );
  
    let result = await Response.json();
    console.log(result);
    
    displayCard.innerHTML = `
          <div class="row row-cols-1 row-cols-md-1">
              
        
  
                <div class="card">
                <h4 class="thirukkural">${result.line1}</h4>
                <h4 class="thirukkural">${result.line2}</h4>
                
                  <div class="card-body">
                    <h2>Tamil</h2>
                    <h5 class="card-title"> Section : ${result.sect_tam}</h5>
                    <h5 class="card-title"> Chapter Group : ${result.chapgrp_tam}</h5>
                    <h5 class="card-title"> Chapter : ${result.chap_tam}</h5>
                    <p class="card-text"><span><b>Eplanation</b><span/> : ${result.tam_exp}</p>
                  
                  <h2>English</h2>
                  <h5 class="card-title"> Section : ${result.sect_eng}</h5>
                  <h5 class="card-title"> Chapter Group : ${result.chapgrp_eng}</h5>
                  <h5 class="card-title"> Chapter : ${result.chap_eng}</h5>
                  <p class="card-text"><span><b>Eplanation</b><span/> : ${result.eng_exp}</p>
                  </div>
                </div>`;
                document.getElementById("form").reset();
  }
  else{alert("Enter a Valid Thirukkural Number")}
  }
  
   catch (error) {
    
  }
}