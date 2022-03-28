console.log("Hello world...");

let age = 13;
console.log('In 10 years you will be ' + (age + 10));

let name = 'Sue';
if (name === 'bob') {
  console.log('I knew it was you, ' + name + '!');
} else {
  console.log("Hey " + name + " you're no \"Bob.\"");
}

let iAmWearingABelt = true;
let iAmWearingGlasses = false;

if (iAmWearingABelt && iAmWearingGlasses) {
  console.log('Probably not Mr. Gorton');
}

if (iAmWearingABelt && !iAmWearingGlasses) {
  console.log('Probably is Mr. Gorton');
}
