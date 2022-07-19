// 試題1
function isTriangle(a,b,c)
{
  let triangle = [a,b,c];
  // 先對數值小到大進行排序
  triangle.sort();
  
  // 符合>0 且 任兩邊相加>第三邊的原則
  if (triangle[2] <=0 || triangle[0] + triangle[1] <= triangle[2]) {
    document.write("這不是三角形");
  }
  else{
    document.write("是三角形");
  }
}

isTriangle(3,4,2);
