// 笔试题内容：
// 语料拓展题：一行文本，其中定义两种特殊语法结构
// 1."[-1二]'，表示当前位置可选 一 或 二 或空
// 2."[一1二)，表示当前位署可选 一 或 二
// 两神语法不可嵌套，即不存在[(—|二)|三]这种语法。
// 给定一行文本，请输出它所有可能的音通文本的排列组合。
// 举例：我要去[一|二]的地方吃(三|四)可以吗？
// 可能的展开包括
// 1. 我要去一的地方吃三可以吗？
// 2. 我要去一的地方吃四可以吗？
// 3. 我要去二的地方吃三可以吗？
// 4. 我要去二的地方吃四可以吗？
// 5. 我要去的地方吃三可以吗？
// 6. 我要去的地方吃四可以吗？

const arr = [
  ["上午", "中午"],
  ["王府井", "万达广场"],
  ["肯德基", "麦当劳", "披萨"],
];


function getData(arr) {
  const result = [];
  const arrlength = arr.length;
  let index = 0;
  const data = [];
  const dfs = (arr, index) => {
    if (index === arrlength) {
      result.push([...data]);
      return;
    }

    for (let i = 0; i< arr[index].length; i++) {
      data.push(arr[index][i]);
      dfs(arr, index + 1);
      data.pop();
    }
  }
  dfs(arr, index);
  // console.log(result);
  return result;

}

const result = getData(arr);
console.log(result);
