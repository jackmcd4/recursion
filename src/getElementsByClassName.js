// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){/*works for everything except
...if there are different element types*/ 
  // your code here
var result=[];
 var isItHere = function(tag){
	var children = tag.childNodes;
  	for (var i=0; i < children.length; i++) {
  		if(children[i].hasChildNodes()){
  				isItHere(children[i]);
  			}
   		if(children[i].classList===undefined){
  			continue;
  		}
		else if(children[i].classList.contains(className)){
  			result.push(children[i]);
  		}
	}
 }	
isItHere(document.body);
if(result!='undefined'){
	result.unshift(document.body);
}
return result;
}






  /*
 var result=[];
 if(tag===undefined){
 tag = document.body;
}
  var children = tag.childNodes;
  for (var i=0; i < children.length; i++) {
  	if(children[i].classList===undefined){
  		continue;
  	}
	else if(children[i].classList.contains(className)){
  		result.push(children[i]);
  		}
  	}
  	if(result!=[]){
  result.unshift(tag);
}
  return result;
};
*/
/*var getElementsByClassName = function(className
){
  // your code here
  arr=[];
  var allElements = document.getElementsByTagName("*");
  	for (var i=0; i<allElements.length; i++) {
     	if(allElements[i].classList.contains(className)){
     		arr.push(allElements[i]);
     	}
	}
  //
  if(document.body.classList.contains(className)){
  	arr.push(this);
  };
  className.childNodes
  className.classList
  //
  return arr;
};
*/