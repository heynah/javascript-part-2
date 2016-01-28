var arr = ["hi", "this is the longest string"];

arr.sort(function(a,b){
           return a.length<b.length;
        });
        console.log(arr);