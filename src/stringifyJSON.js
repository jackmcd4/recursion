// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:




var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj==='undefined' || typeof obj === 'function'){
  	return '{}';
  }
   else if(Array.isArray(obj)){
 			var hold = '[';
 				for(var j in obj){
 					hold+=stringifyJSON(obj[j]);
 					if(j!=obj.length-1){
 					    hold+=","
 					}
 				}
 			hold += ']';
   }
  else if(typeof obj === 'object'){
  		if(obj===null){
  			return 'null';
  		}
 	    else{
 			var hold = '{';
            if(Object.keys(obj).length !== 0){
 				for(var key in obj){
 				    if(typeof obj[key]==='undefined' || typeof obj[key] === 'function'){
  	return '{}';}
 					hold+=stringifyJSON(key)+":"+stringifyJSON(obj[key])+",";
 				}
 				hold=hold.slice(0, hold.length-1);
            }
 			    hold += '}';
 		}
	}

 	else if(typeof obj === "string"){
 		var hold = '"';
 			for(var i=0; i<obj.length; i++){
 				hold+=obj.charAt(i);
 			}
 			hold+='"';
 	}
	else{
		return obj.toString();
	}
	
	    return hold;
	
};

