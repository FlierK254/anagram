           
 
  // Code for an anagram
function Anagram(word1, word2){

    let string1=word1.replaceAll(' ', '').toLowerCase().split('').sort().join('')
    let string2=word2.replaceAll(' ', '').toLowerCase().split('').sort().join('')
    // console.log(string1);
    // console.log(string2);
    if(string1 === string2){
      return(`${word1}and ${word2} are anagrams`);
    }else{
      return(`${str1}and ${str2} are not anagrams`)
    }
  }
  let Firstword="LISTEN  "
  let Secondword="SILENt"
  console.log(Anagram(Firstword,Secondword))


