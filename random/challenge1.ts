/**
 * https://twitter.com/abozhilov/status/1553500256687591424
 * Write a function that adds space after every two characters starting from the end
 * @param str: string
 * @returns string
 */

// function job(str: string): string {
//   let firstSpace = str.length;
//   while (firstSpace > 2 || firstSpace < 0) {
//     str =
//       str.substring(0, firstSpace - 2) + ' ' + str.substring(firstSpace - 2);
//     firstSpace -= 2;
//   }
//   return str;
// }

// function job(str: string): string {
//   const chars = str.split('');
//   let result = [];
//   while (chars.length > 2) {
//     result.push(chars.pop());
//     result.push(chars.pop());
//     result.push(' ');
//   }
//   result = result.concat(chars.reverse());
//   return result.reverse().join('');
// }

// function job(str: string): string {
//   return str.replace(/(.(?=(.{2})+$))/g, '$1 ');
// }

// // Needs Array.prototype.group function
// function job(str: string): string {
//   return Object.values(
//     Array.from(str).group(
//       (ch, i, arr) => '_' + Math.ceil((arr.length - i) / 2) * 2
//     )
//   )
//     .map((arr) => arr.join(''))
//     .join(' ');
// }

// Second last
// function job(str: string): string {
//   function reverse(str: string): string {
//     return Array.from(str).reverse().join('');
//   }
//   const m = reverse(str).match(/\w{1,2}/gu);
//   return reverse(m?.join(' ') as string);
// }

// Fastest
function job(str: string): string {
  return Array.from(str)
    .map((ch, i, arr) => (i > 0 && (arr.length - i) % 2 === 0 ? ' ' : '') + ch)
    .join('');
}
let t1 = performance.now();
// console.log(job('123456789')); // should print "1 23 45 67 89"
job('t'.repeat(100_000));
let t2 = performance.now();
console.log('took', t2 - t1);
