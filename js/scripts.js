function isVowel(char)  {
  const vowels = ["a", "e", "i", "o", "u"];
  let isVowel = false;

  vowels.forEach(function(vowel)  {
    if (char === vowel)
      isVowel = true
  });

  return isVowel;


}

function pigLatin(text)  {
  let prefix = "";
  let suffix = "";

  if  ( isVowel(text.charAt(0)) ) {
    return text + "way";
  }
  else  {
    for ( currentChar = 0; !isVowel(text.charAt(currentChar)) || (currentChar != (text.length -1)) ; currentChar++ )
    {
      prefix = text.slice(currentChar+1);
      suffix += text.charAt(currentChar);
    }
    suffix += "ay";
    return prefix + suffix;
  }

}



$(document).ready(function() {



});