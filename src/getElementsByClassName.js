// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){/*works for everything except
...if there are different element types. and isn't recursive yet*/ 
  // your code here
 var result=[];
 var body = document.body;
  var children = body.childNodes;
  for (var i=0; i < children.length; i++) {
  	if(children[i].classList===undefined){
  		continue;
  	}
	else if(children[i].classList.contains(className)){
  		result.push(children[i]);
  		}
  	}
  	if(result!=[]){
  result.unshift(body);
}
  return result;
};

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