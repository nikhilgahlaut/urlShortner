const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function encodeBase62(num) {
  if (num === 0n) return "0";

  let result = "";

  while (num > 0n) {
    const remainder = num % 62n;
    result = BASE62[Number(remainder)] + result;
    num = num / 62n;
  }

  return result;
}