// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var test = function(word){
  	if(word==='null'||word==='false'||word==='true'){
  		return true;
  	}
  	else{
  		return false;
  	}
}
  	if(json.charAt(0)==="["){
  		var arr = [];
  		var text;
  		for(var j=1; j<json.length-1; j++){
  			if(json.charAt(j)!=='"'){
  				
  				if(text===undefined){
  			    	text=json.charAt(j);
  				}
  				else{
  					text+=json.charAt(j);
  				}
  				if(json.charAt(j)===","&& text!==""){
  			    		arr.push(text.slice(0, text.length-1));
  			    		text=undefined;
  			    	if(json.charAt(j+1)===" "){
  			    		j++;
  			    	}
  		    	}
  		    }
  		    	if(json.charAt(j)==="["||json.charAt(j)==="{"){
  					for(var k=j; k<json.length-1; k++){
  						if(json.charAt(k)==="}"||json.charAt(k)==="]"){
  							var stop = k;
  							break;
  						}
  					}
  					var hold = parseJSON(json.slice(j, k+1));//2nd to 2nd to last char
  					arr.push(hold);
  					j=k+1;
  				}
  		    	if(typeof (+json.charAt(j))==='number'&&!isNaN(+json.charAt(j))&&json.charAt(j)!==(""||" ")){//test for numbers
  					for(var i=j; i<json.length-1; i++){
  						if(json.charAt(i)===","){
  							var num = json.slice(j, i);
  							arr.push(parseFloat(num));
  							j+=(i-j+1);
  						}
  						else if(i===json.length-2){
  							var num = json.slice(j, i+1);
  							arr.push(parseFloat(num));
  							j+=(i-j+1);
  						}
  					}
  				}
  		    	if(json.charAt(j)==='n'){//test for null
  					if(test(json.slice(j, j+4))){
  						arr.push(null);
  						j+=4;
  					}
  				}
  				if(json.charAt(j)==='t'){//test for true
  					if(test(json.slice(j, j+4))){
  						arr.push(true);
  						j+=4;
  					}
  				}
  				if(json.charAt(j)==='f'){//test for false
  					if(test(json.slice(j, j+5))){
  						arr.push(false);
  						j+=5;
  					}
  				}
  		    	if(j===json.length-2){
  		        	arr.push(text);
  		    	}
  		}
  	}
  	
  	else if(json.charAt(0)==="{"){
  		var obj = {};
  		var key;
  		var val;
  		var isItKey=true;
  		for(var j=1; j<json.length-1; j++){
  		if(json.charAt(j)!=='"'){
  			if(isItKey===true){
  			    val=undefined;
  			   		if(key===undefined){
  			        	key=json.charAt(j);
  			    	}
  			    	else{
  						key+=json.charAt(j);
  			    	}
  			}
  			else{
  			    if(val===undefined){
  			    	val=json.charAt(j);
  			    }
  			    else{
  					if(json.charAt(j)===","||j===json.length-2){
  			      		obj[key]=val;
  			      		isItKey=true;
  			      		key=undefined;
  			      		j++;
  			  		}
  			  		val+=json.charAt(j);
  			    }
  			}
  			if(json.charAt(j)===":"){
  			    isItKey=false;
  			    key=key.slice(0, key.length-1);
  			    if(json.charAt(j+1)===" "){
  			    	j++;
  				}
  		    }
  		}
  		else if(json.charAt(j)==='"' &&json.charAt(j+1)==='"'){
  			val="";
  		}
  				if(json.charAt(j)==="["||json.charAt(j)==="{"){
  					for(var k=j; k<json.length-1; k++){
  						if(json.charAt(k)==="}"||json.charAt(k)==="]"){
  							var stop = k;
  							break;
  						}
  					}
  					val = parseJSON(json.slice(j, k+1));//2nd to 2nd to last char
  					obj[key]=val;
  					isItKey=true;
  					key=undefined;
  					if(json.charAt(k+2)===" "){
  						j=k+2;
  					}
  					else{
  						j=k+1;
  					}
  				}
  				if(json.charAt(j)==='n' &&isItKey===false){
  					if(test(json.slice(j, j+4))){
  						obj[key]=null;
  						isItKey=true;
  						key=undefined;
  						j+=5;
  					}
  				}
  				if(json.charAt(j)==='t' &&isItKey===false){
  					if(test(json.slice(j, j+4))){
  						obj[key]=true;
  						isItKey=true;
  						key=undefined;
  						j+=5;
  					}
  				}
  				if(json.charAt(j)==='f' &&isItKey===false){
  					if(test(json.slice(j, j+5))){
  						obj[key]=false;
  						isItKey=true;
  						key=undefined;
  						j+=6;
  					}
  				}
  	}
  		if(obj[key]===undefined&&key!==undefined){
  			obj[key]=val;
  			}
  		}
  	else{
  		return json.charAt(0);
  	}
  if(arr===undefined){
  	return obj;
  }
  else{
  	return arr;
  }
};
