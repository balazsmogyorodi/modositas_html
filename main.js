window.addEventListener("load", init);

function init() {
    document.getElementById("tartalom").innerHTML = '<h1>JavaScriptből írók ide.</h1>'
    kedvencszavak();


}

function kedvencszavak(){
    const szavak = ["piros", "Nintendo", " csokoládé"];
    console.log(szavak);
    document.getElementById("tartalom").innerHTML = (`<ul>`);
    for (let index = 0; index < szavak.length; index++) {
        document.getElementById("tartalom").innerHTML += (`<li>  ${szavak[index]}  </li>`);
    }
    document.getElementById("tartalom").innerHTML += (`</ul>`);





}

