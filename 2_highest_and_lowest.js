// 負數排序時會有問題，需套用此參數(按照編碼順序排序)
function sortNumber(a,b){
    return a - b
  }

// 試題2
function highest_and_lowest(inputList){
  try{
    let myList=inputList;
    // 按照小到大排序
    myList.sort(sortNumber);
    let len1 = myList.length;
    document.write("lowest number:",myList[0], " ; highest number:",myList[len1-1]);
  }
  catch{
    document.write('僅能輸入數字陣列');
  }
}

highest_and_lowest([0, 8, 5, -10, -3]);
