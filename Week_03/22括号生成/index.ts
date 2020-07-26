//22、括号生成
const result:string[] = []
function generateParenthesis(n: number): string[] {
  _generate(0, 0, n, "");
  return result;
}
function _generate(left: number, right: number, n: number, s: string) {
  if (left === n && right === n) {
    console.log(s)
    result.push(s)
    return;
  }

  if (left < n) {
    _generate(left + 1, right, n, s + "(");
  }
  if (left > right) {
    _generate(left, right + 1, n, s + ")");
  }
}

generateParenthesis(1);
