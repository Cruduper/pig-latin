# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Tests

### Describe: pigLatin();
Test: "with input that is a single vowel character, add 'way' to end"
Code:
const char = "a";
pigLatin(char);
Expected Output: "away"

Test: "with input that is a single consonant character, add 'ay' to the end"
Code:
const char = "b"
pigLatin(char);
Expected Output: "bay"

Test: "with input that is uppercase, the previous tests still work"
Code:
const char = "B"
pigLatin(B);
Expected Output: "Bay"

Test: "with input words that start with a vowel, add 'way' to end"
Code:
const word = "all";
pigLatin(word);
Expected Output: "allway"

Test: "with input words that start with a consonant, move the all beginning consecutive consonants to end, then add 'ay' to the end"
Code:
const word = "bell";
pigLatin(word);
Expected Output: "ellbay"

Test: "with input word that starts with a consonant and end the leading consonants with 'qu', move everything up til the 'qu' to the end, then add 'ay' to the end"
Code:
const word = "quest";
pigLatin(word);
Expected Output: "estquay

Test: "with multiple word input, each word is treated the same as single words in all previous tests"
Code:
const text = "quest bell all";
pigLatin(word);
Expected Output: "estquay ellbay allway"

Test: "ignore all leading the ending whitespace in the text input"
Code:
const text = "     bell all          ";
pigLatin(text);
Expected Output: "ellbay allway"

Test: "move punctuation at the end of original word to end of translated word"
Code:
const text = "bell. all? squest!";
pigLatin(text);
Expected Output: "ellbay. allway? estsquay!

Test: "ignore words that start with numbers"
Code:
const text = "9ine 8ight";
pigLatin(text);
Expected Output: "9ine 8ight"

Test: "ignore extra inner whitespace between words
Code: 
const text = " ignore    this     space ";
pigLatin(text);
Expected Output: "ignore this space" 


## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_