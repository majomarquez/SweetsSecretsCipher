window.cipher = {
  encode: (offset1,str) => {
   //CYPHER
    let solved = "";  
    for (let i=0; i<str.length; i++){
    let asciinum = str[i].charCodeAt();
    if (asciinum >= 65 && asciinum <= 90){
    let ascii = ((asciinum  -65 +offset1) % 26 + 65);
    solved += String.fromCharCode(ascii);
    }else {
    solved += str[i];
    }
    }
    return solved;
  },
  
  
  decode: (offset2,str) => {
    //DECYPHER
      let solved1 = "";
      for (let i=0; i < str.length; i++){
      let asciinum1 = str[i].charCodeAt();
      if (asciinum1 >= 65 && asciinum1 <= 90){
      let ascii1 = ((asciinum1 + 65 - offset2) % 26 + 65);
      solved1 += String.fromCharCode(ascii1);
      }else {
      solved1 += str[i];
      }
      }
      return solved1;
    }
  };
  

