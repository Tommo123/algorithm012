//leetcode 70爬楼梯问题
//f(n) = f(n-1) + f(n-2)
function climbStairs(n: number): number {
  let db = [1,1];
  for (let i = 2; i <= n; i++) {
      db[i] = db[i-1] + db[i-2]
  }
  return db[n]  
};