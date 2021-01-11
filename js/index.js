// Iteration 1: Names and Input
const hacker1 = 'Batman'
const hacker2 = 'Robin'

console.log(`The driver's name is ${hacker1}`);
console.log(`the navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else if (hacker2.length < hacker1.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
  

// Iteration 3: Loops
let hacker1toUpperCase = '';
for (let i = 0; i < hacker1.length; i++) {
  //console.log(i)
  //console.log(hacker1[i].toUpperCase())  
  hacker1toUpperCase = hacker1toUpperCase + hacker1[i].toUpperCase() + ' '
}

console.log(hacker2.split('').reverse().join(''))


if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first")
} else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log('What?! You both have the same name?')
}

// Bonus 1
const threeParagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum nibh, posuere ut sapien in, viverra accumsan est. Aliquam lacinia nisl egestas mi interdum, id semper quam malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dictum at velit non posuere. Aenean nec cursus leo. Vivamus a lobortis elit, et elementum ipsum. Nullam bibendum nec odio vel dignissim. Duis interdum, eros a vestibulum fringilla, sapien sapien ultrices arcu, sed placerat justo lacus id nibh. Donec quis tempor lorem, in auctor magna. Fusce eu libero sit amet arcu pulvinar facilisis. Proin congue felis sit amet arcu efficitur, in cursus leo fringilla. Sed maximus ex libero, rhoncus mattis justo consectetur eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis interdum lacinia nunc, non faucibus velit commodo a. Donec quis ipsum nec sem dictum tristique ut id purus.

Maecenas sed lorem iaculis, ullamcorper velit vel, imperdiet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam lectus orci, mattis vel tincidunt eu, commodo ac metus. Etiam felis massa, sagittis fringilla velit eget, scelerisque consequat leo. Phasellus non tincidunt risus. Vivamus dapibus volutpat purus, eu pharetra lacus mattis eu. Vivamus nunc metus, eleifend in justo vel, cursus congue tortor. Integer sit amet varius ex. Donec maximus tempus lacus, ut fermentum lacus vestibulum fringilla. Aenean malesuada eget tortor vitae suscipit. Quisque nec est a urna suscipit consequat ut sed erat.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla blandit turpis eget enim faucibus, sed tempus metus tincidunt. Ut pellentesque, ante sit amet tristique mattis, ante tellus egestas neque, nec molestie lectus ante sit amet odio. Sed rutrum gravida diam, ac molestie nunc vulputate a. Curabitur et metus enim. Nunc consequat tempus risus, convallis faucibus orci suscipit sed. Mauris volutpat quam odio, id auctor nisl posuere in. Nulla id diam lobortis, condimentum augue eget, feugiat turpis. Proin convallis, elit ut facilisis egestas, nunc purus lobortis eros, sit amet placerat tortor sem eget neque. Donec leo ligula, porta quis viverra a, posuere pharetra urna. Suspendisse suscipit sem quis quam iaculis, non porta enim feugiat. Donec at nulla enim. Maecenas nec porta eros. Morbi varius egestas lorem. Fusce nec leo viverra, tempor justo ac, commodo eros.`;

const paragraphsArr = threeParagraphs.split('');
console.log(`The paragraphs contain ${paragraphsArr.length} words`)

paragraphsArr.filter(function(value) {
  return value === ' et ';
}).length // result is wrong
