function LongestWord(str){
  
  str = str.split(" "); // .split() method is uses to divide the string into array of substrings.

  return str.sort((a,b) => b.length - a.length)[0]; // This will return the first element of the array which will be longest as the array is sorted in a descending order.
}

console.log(LongestWord("Hey my name is Keshav")) // output: Keshav
