function WordWithVowels(str){
  const vowels = [aeiouAEIOU]/g;
  const words = str.split(" ");

  let maximumVowelC = 0;
  let WordWM = "";

  words.forEach((word) => {
    const vowelCount = (word.match(vowels) || []).length;

    if(vowelCount > maximumVowelC){
      maximumVowelC = vowelCount;
      WordWM = word;
    }
  });

  return WordWM;
}
