import {sortNumber} from './2_highest_and_lowest'

// 加分題
function array_diff(inputList1,inputList2){
    let list1=inputList1;
    let list2=inputList2;
    let tempList,resultList;
  
    // 刪除重複值並由小到大進行排序
    list1=[...new Set(list1)];
    list1.sort(sortNumber);
    
    // 刪除重複值並由小到大進行排序
    list2=[...new Set(list2)];
    list2.sort(sortNumber);
  
    // temp_list用來暫存list2的資料，在刪除list1、list2的資料時list的數值長度才不會受影響 (暫存list1也行)
    tempList = list2;
    var len1 = tempList.length;
  
    for(var i=0;i<len1;i+=1){
      // 不等於-1代表該值有重複，同時移除list1、list2的值
      if(list1.indexOf(tempList[i])!=-1){
        list1 = list1.filter(function(item) {
          return item != tempList[i];
        });
        list2 = list2.filter(function(item) {
          return item != tempList[i];
        });
      }
    }
    resultList=list1.concat(list2);
    resultList.sort(sortNumber);
    
    document.write(resultList);
  }

array_diff([2, 3, 4], [1, 2, 2, 2, 3, 3]);
