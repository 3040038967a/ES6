
// import 变量名 from "引用文件的地址"
import {a,s1,s3} from "./export.js";
import * as sum from "./bie.js"


// 别名部分
console.log(sum.num1);
console.log(sum.num2);
sum.num3();
console.log("---------------------------------");





// 导出部分
console.log(a);


s1();
console.log(s3.aa);
console.log(s3.bb);
s3.s2();