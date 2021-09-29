const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur'];
console.log('OG: ', dinosaurs);

const newStart = dinosaurs.splice(4);
//console.log(newStart);

const newEnd = newStart.slice(0,3);
console.log('Spliced: ', newEnd);