/**
 * 兔子繁衍问题
 * 
 * 一对兔子，从出生后第5个月起每个月都生一对兔子，
 * 小兔子长到第5个月后每个月又生一对兔子，假如兔子都不死，
 * 请问第n个月总共有多少只兔子？
 * 
 * 示例：
 * 输入：5
 * 输出：2
 * 
 * 思路：
 * 如果 n 小于 5，直接返回 1，否则从第 5 月开始遍历，
 * 每个月的兔子 = 上个月的兔子数 + 4个月前的兔子数（4个月前的兔子已经都可以生了）
 */

function rabbit(n) {
  let res = [1,1,1,1,1]
  if(n < 5) return res[n]
  for(let i = 5; i <= n; i ++) {
    res[i] = res[i - 1] + res[i - 4]
  }
  return res[n]
}

console.log(rabbit(10))