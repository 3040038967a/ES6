//封装get请求
function get(url){
	// 创建一个异步请求对象
	let ajax=new XMLHttpRequest();
	//设置异步请求
	ajax.open("get",url,true);
	// 发送请求
	ajax.send();
	return new Promise((resolve,reject)=>{
		ajax.onreadystatechange=function(){
			// 如果请求成功
			if(ajax.readyState==4 && ajax.status==200){
				// console.log(ajax.readyState,ajax.status);
				//ajax.responseText是拿到的数据
				resolve(ajax.responseText);
				
			}else{
				
				
			}
		}
	})

}


//封装get请求
function post(url){
	// 创建一个异步请求对象
	let ajax=new XMLHttpRequest();
	//设置异步请求
	ajax.open("post",url,true);
	// 发送请求
	ajax.send();
	return new Promise((resolve,reject)=>{
		ajax.onreadystatechange=function(){
			// 如果请求成功
			if(ajax.readyState==4 && ajax.status==200){
				
				//ajax.responseText是拿到的数据
				resolve(ajax.responseText);
				
			}
		}
	})

}


export default{
	get,
	post
}