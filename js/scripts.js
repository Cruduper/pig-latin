function isVowel(char)  {
  const vowels = ["a", "e", "i", "o", "u"];
  let isVowel = false;

  vowels.forEach(function(vowel)  {
    if (char.toLowerCase() === vowel)
      isVowel = true
  });

  return isVowel;

}

function pigLatin(inputText)  {

  const text = inputText.trim().split(" ");
  let newText = new Array(text.length);

  
  for ( i=0; i < text.length ;i++ )
  {
    let prefix = "";
    let suffix = "";

    if  ( isVowel(text[i].charAt(0)) ) {
      newText[i] = text[i] + "way";
    }
    else  {
      for ( currentChar = 0; !isVowel(text[i].charAt(currentChar)) && (currentChar < (text[i].length)) ; currentChar++ )
      {
        prefix = text[i].slice(currentChar+1);
        suffix += text[i].charAt(currentChar);

        if ( (text[i].charAt(currentChar) === "q") && ( text[i].charAt(currentChar + 1) === "u") ) {
          prefix = prefix.slice(1);
          suffix += "u";
        }

      }
      suffix += "ay";
      newText[i] = prefix + suffix;
    }
  }
  return newText;
}



$(document).ready(function() {



});