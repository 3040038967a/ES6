import axios  from "./axios.js"
console.log(axios);

axios.get("user.json")

.then((res)=>{
	
	console.log(res);
	return axios.get("user.json")
	
},(err)=>{
	console.log("错误");
})

.then((res)=>{
	console.log(res);
	return axios.get("users.json");
},(err)=>{
	console.log(err);
})


.then((res)=>{
	console.log(res);
	
},(err)=>{
	console.log(err);
})


