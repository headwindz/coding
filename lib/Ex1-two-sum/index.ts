type Indices = [number, number];

const twoSum = (arr: number[], sum: number): Indices | null => {
  const map: { [key: string]: number } = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    const num = arr[i];
    const complement = sum - num;
    if (map[complement] != null) {
      return [map[complement], i]
    }
    map[num] = i;
  }
  return null;
}
