// 1、有效的字母异位词
// 判断两个字符串长度是否一致，否则返回false
// 若相等，则初始化 26 个字母哈希表，遍历字符串 s 和 t
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const alpha: number[] = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  for (let i = 0; i < s.length; i++) {
    alpha[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    alpha[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }
  for (let i = 0; i < alpha.length; i++) {
    if (alpha[i] !== 0) return false;
  }
  return true;
}