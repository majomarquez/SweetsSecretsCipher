const goToCypherBtn = document.getElementById("goToCypher");
goToCypherBtn.addEventListener('click', () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("icons").style.display = "block";
    document.getElementById("cypherPage").style.display = "block";
    document.getElementById("decypherPage").style.display = "none";
})
const BackToCypherBtn = document.getElementById("BackToCypher");
BackToCypherBtn.addEventListener('click', () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("icons").style.display = "block";
    document.getElementById("cypherPage").style.display = "block";
    document.getElementById("decypherPage").style.display = "none";
})
const goToDecypherBtn = document.getElementById("goToDecypher");
goToDecypherBtn.addEventListener('click', () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("icons").style.display = "block";
    document.getElementById("cypherPage").style.display = "none";
    document.getElementById("decypherPage").style.display = "block";
})


 //DA EL MENSAJE
const cypherB = document.getElementById("cypherbtn");
cypherB.addEventListener('click', () => {

    let cypherTxt = document.getElementById("cypherTxt").value;
    let offsetCypher = document.getElementById("offsetCypher").value;

    if(parseInt(offsetCypher)<1){
        document.getElementById("error").innerHTML =  "Debe ser un numero positivo";
    } else {
        document.getElementById("resultCypher").innerHTML= cipher.cypher(offsetCypher,cypherTxt);
        // document.getElementById("error").innerHTML =  "";
    }
})


  //DA EL MENSAJE
const decypherB = document.getElementById("decypherbtn");
decypherB.addEventListener('click', () => {

    let decypherTxt = document.getElementById("decypherTxt").value;
    let offsetDecypher = document.getElementById("offsetDecypher").value;

    if(parseInt(offsetDecypher)<1){

        document.getElementById("error").innerHTML =  "Debe ser un numero positivo";
    } else {
         document.getElementById("resultDecypher").innerHTML= cipher.decypher(offsetDecypher,decypherTxt);
        //  document.getElementById("error").innerHTML =  "";
        }
    })

