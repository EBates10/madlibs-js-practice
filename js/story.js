// 1. Declare variables and capture input.
const firstBlank = prompt("Please enter a proper noun (Person's name):");
const secondBlank = prompt("Please enter a noun:");
const thirdBlank = prompt("Please enter an adjective (feeling):");
const fourthBlank = prompt("Please enter a verb:");
const fifthBlank = prompt("Please enter an adjective (feeling):");
const sixthBlank = prompt("Please enter an animal:");
const seventhBlank = prompt("Please enter a verb");
const eighthBlank = prompt("Please enter a color:");
const ninthBlank = prompt("Please enter a verb (ending in ing):");
const tenthBlank = prompt("Please enter an adverb (ending in -ly):");
const eleventhBlank = prompt("Please enter a number:");
const twelfthBlank = prompt("Please enter a measure of time:");
const thirteenthBlank = prompt("Please enter a color:");
const fourteenthBlank = prompt("Please enter an animal:");
const fifteenthBlank = prompt("Please enter a number:");
const sixteenthBlank = prompt("Please enter a silly word:")
const seventeenthBlank = prompt("Please enter a noun (This is the last one!):");


// 2. Combine the input with other words to create a story.
const story = `<p>This weekend I am going camping with ${firstBlank}. I packed my lantern, sleeping bag, and
${secondBlank}. I am so ${thirdBlank} to ${fourthBlank} in a tent. I am ${fifthBlank} we
might see a ${sixthBlank}, they are kind of dangerous. We are going to hike, fish, and ${seventhBlank}.
I have heard that the ${eighthBlank} lake is great for ${ninthBlank}. Then we will
${tenthBlank} hike through the forest for ${eleventhBlank} ${twelfthBlank}. If I see a
${thirteenthBlank} ${fourteenthBlank} while hiking, I am going to bring it home as a pet! At night we will tell
${fifteenthBlank} ${sixteenthBlank} stories and roast ${seventeenthBlank} around the campfire!! </p>`



// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story; 