/* 
  A. Deteksi Paindrom
*/

const palindrom = (word) => {
  const str1 = word.toLowerCase();
  const str2 = word.split("").reverse().join("").toLowerCase();

  if (str1 === str2) {
    return "kata ini palindrom";
  } else {
    return "kata ini bukan palindrom";
  }
};

console.log(palindrom("Malam"));

/* 
  b. Reverse Words
*/

const reverseWords = (value) => {
  const str = value.split(" ").reverse().join(" ");
  console.log(str);
};

reverseWords("Saya Belajar Javascript");
