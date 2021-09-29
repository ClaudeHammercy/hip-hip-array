const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

symmetricalCapitals.shift(symmetricalCapitals[0]);
symmetricalCapitals.shift(symmetricalCapitals[1]);
console.log(symmetricalCapitals);