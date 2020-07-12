//移动零
function moveZeroes(nums: number[]): void {
  let j = 0;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
          nums[j] = nums[i];
          if(i !== j) {
              nums[i] = 0
          }
          j++;
      }
  }
};

//删除排序数组中重复项目
function removeDuplicates(nums: number[]): number {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] != nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return i + 1;
};