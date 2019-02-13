
function welcome2(){
  window.location.href='page3.html'
}

function goToDecypher(){
  window.location.href='page4.html'
}

function goToCypher(){
  window.location.href='page3.html'
}


  //DA EL MENSAJE
  function cypherA(){
    let cypherText = document.getElementById("cypherText").value;
    let offsetCypher = parseInt(document.getElementById("offsetCypher").value);
    let cypherResult = encode (offsetCypher, cypherText);
    document.getElementById("resultCypher").innerHTML = cypherResult;
  }

  
    //DA EL MENSAJE
  function decypherA(){
    let decypherText = document.getElementById("decypherText").value;
    let offsetDecypher = document.getElementById("offsetDecypher").value;
    let decypherResult = decode(offsetDecypher, decypherText);
    document.getElementById("resultDecypher").innerHTML = decypherResult;
  }