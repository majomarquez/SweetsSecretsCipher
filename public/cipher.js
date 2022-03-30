window.cipher = {
  cypher: (offsetCypher, cypherTxt) => {
    let ascii1 =0;
    let ascii2 =0;
    let result ="";

    for (let i = 0; i < cypherTxt.length; i++)
    {ascii1= cypherTxt.charCodeAt(i);
        if(ascii1 >=32 && ascii1 <=  47 || ascii1>= 58 && ascii1<= 64 ||ascii1>=91 && ascii1 <=96 ||ascii1>=123 && ascii1 <=163 ||ascii1>=165 ) 
        {ascii2=ascii1}
        else if(ascii1 >=48 && ascii1 <=  57)
        {ascii2= (ascii1- 48 + parseInt(offsetCypher))%10 + 48}
        else if(ascii1 >=97 && ascii1 <= 122)
        {ascii2= (ascii1- 97 + parseInt(offsetCypher))%26 + 97}
        else
        {ascii2= (ascii1- 65 + parseInt(offsetCypher))%26 + 65}
        result += String.fromCharCode(ascii2);
    }
    return result;
  },

   //DECYPHER
  decypher: (offsetDecypher, decypherTxt) => {
    let ascii1 =0;
    let ascii2 =0;
    let result ="";

    for (let i = 0; i < decypherTxt.length; i++)
    {ascii1= decypherTxt.charCodeAt(i);
        if(ascii1 >=32 && ascii1 <=  47 || ascii1>= 58 && ascii1<= 64 ||ascii1>=91 && ascii1 <=96 ||ascii1>=123 && ascii1 <=163 ||ascii1>=165 ) 
        {ascii2=ascii1}
        else if(ascii1 >=48 && ascii1 <=  57)
        {ascii2= (ascii1- 57 - parseInt(offsetDecypher))%10 + 57}
        else if(ascii1 >=97 && ascii1 <= 122)
        {ascii2= (ascii1- 122 - parseInt(offsetDecypher))%26 + 122}
        else
        {ascii2= (ascii1- 90 - parseInt(offsetDecypher))%26 + 90}
        result += String.fromCharCode(ascii2);
    }
    return result;
  }
};
