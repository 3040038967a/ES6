
let s1=1111;
let s2=2222;

let s3=()=>{
	console.log(s1+s2);
	
}
// 起别名导出
 export{
	s1 as num1,
	s2 as num2,
	s3 as num3
	
}