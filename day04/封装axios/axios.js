function get(url,obj){
	let ajax=new XMLHttpRequest();
	ajax.open("get",url,true);
	ajax.send();//发送请求
	
	
	return new Promise((resolve,reject)=>{
		
		ajax.onreadystatechange=function(){
			if(ajax.readyState==4 && ajax.status==200){
				
				resolve(ajax.responseText);//将状态调到成功，将要返回的数据带上
			
			}
			
		}

	})
	
	
	
	
}





function post(url,obj){
	let ajax=new XMLHttpRequest();
	ajax.open("post",url,true);
	
	ajax.send();
	
	
	return new Promise((resolve,reject)=>{
		
		ajax.onreadystatechange=function(){
			if(ajax.readyState==4 && ajax.status==200){
				
				resolve(ajax.responseText);//将状态调到成功，将要返回的数据带上
			
			}
			
		}

	})
	
	
	
	
}



export default{
	get,
	post
	
	
	
}