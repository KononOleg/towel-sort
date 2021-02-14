
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var arr=[]

  for(var i=0;i<matrix.length;i++)
  {
    for(var j=0;j<matrix[i].length;j++)
    {
      arr.push(matrix[i][j]);
    }
  }
  return arr;
}
