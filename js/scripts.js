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
    suffix = "way";
  }
  else  {
    for ( currentChar = text.charAt(0); isVowel(0)
    
  }

  return text + suffix;
}



$(document).ready(function() {



});