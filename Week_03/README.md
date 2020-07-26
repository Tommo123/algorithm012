学习笔记

# 递归
1、模板
- recursion terminator (递归结束条件)
- process current level (执行当前代码逻辑)
- drill down (进入下一层)
- clean current level status if needed (清理当前递归的缓存)

```
// JavaScript
const recursion = (level, params) =>{
   // recursion terminator
   if(level > MAX_LEVEL){
     process_result
     return
   }
   // process current level
   process(level, params)
   //drill down
   recursion(level+1, params)
   //clean current level status if needed

}
```
2、递归要点
- 不要人肉递归
- 找到最简单方法，拆解成可重复解决的问题
- 数学归纳法思维