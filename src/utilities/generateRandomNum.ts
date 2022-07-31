export function generateRandomNum(min: number = 1, max: number = 151): number {
  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;

  return rand;
}
