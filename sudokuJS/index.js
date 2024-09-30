
const sudoku1 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];

const sudoku2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]

  ];

function checkCorrectSudoku(array) {
    
    let check = true;
    let sum = 45;
    for (let i = 0; i < array.length; i++) {
        const outerArr = array[i];
        let element = 0;
        for (let j = 0; j < outerArr.length; j++) {
            element += outerArr[j];
        }

        if(element != 45){
            return false;
        }
    }
    
    for (let i = 0; i < array.length; i++) {
        let element = 0;

        for (let j = 0; j < array.length; j++) {
            element += array[j][i];
        }

        if(element != 45){
            return false;
        }
    }

    return check;
}

let correctSudoku = checkCorrectSudoku(sudoku1);

console.log(correctSudoku);

correctSudoku = checkCorrectSudoku(sudoku2);

console.log(correctSudoku);
  
  