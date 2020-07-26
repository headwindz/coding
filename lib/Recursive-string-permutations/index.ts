const merge = (char: string, perms: string[]) => {
  if (perms.length === 0) {
    return [char];
  }
  const length = perms[0].length; // all permutation at the same level should have same length
  const results = [];
  let index = length;
  while(index-- >= 0) {
    const arr = perms.map(perm => `${perm.slice(0, index)}${char}${perm.slice(index)}`)
    results.push(...arr);
  }
  return results;
}

const allPermutation = (str: string): string[] => {
  if(str.length === 0) {
    return [];
  }
  return merge(str[0], allPermutation(str.slice(1)));
}

console.log(allPermutation('a'));
console.log(allPermutation('ab'));
console.log(allPermutation('abc'));