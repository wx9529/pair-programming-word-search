const transpose = function (matrix) {
  if (matrix.length === 0) return [];
  let newArr = [];
  const numRows = matrix.length;
  const numColumns = matrix[0].length;
  for (let i = 0; i < numColumns; i++) {
    // newArr[i] = [];
    newArr.push([]);
  }
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      newArr[j][i] = matrix[i][j];
    }
  }
  return newArr;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => {
    return ls.join("");
  });
  const horizontalBackwordsJoin = letters.map((ls) => {
    return ls.reverse().join("");
  });
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (el of verticalJoin) {
    if (el.includes(word)) return true;
  }
  for (e of horizontalBackwordsJoin) {
    if (e.includes(word)) return true;
  }
  return false;
};
module.exports = wordSearch;


  
        
                 