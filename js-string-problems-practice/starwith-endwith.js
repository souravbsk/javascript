// startwith _____________________

const hindiSong = 'tu jo mila tu ho geya hum fida'
console.log(hindiSong.startsWith('tu'));
// true
console.log(hindiSong.startsWith('tumko'));
// false

// startwith value check with Position
console.log(hindiSong.startsWith('jo',2));
//false
console.log(hindiSong.startsWith('jo',3));
//true

// _________________________________________________________
//endwith_____________________
const imageFile = 'image.pdf';
console.log(imageFile.endsWith('.pdf'));
// true
console.log(imageFile.endsWith('.jpg'));
// false

console.log(imageFile.endsWith('.pdf', 9));
// true 
console.log(imageFile.endsWith('.pdf', 8));
// false
