var mang = [];
var pos = 50;
var n = 7;
  for (var d=[],i=0;i<100;++i) d[i]=i;

  function shuffle(array) {
    
      var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      //array.sort(function(a, b){return a-b});
      return array;
    
  }
  mang = shuffle(d);
  // console.log(mang)
  // var mang= [100,40,65,10,5,9]
  
  // mang 
  var vegetables = mang
  var removedItems = vegetables.splice(pos, n); 
//   function sapxep(array){
//     array.sort(function(a, b){return a-b});
// }
  var ketqua = removedItems.sort(function(a, b){return a-b})
  
  console.log(ketqua); 

  
  

  
