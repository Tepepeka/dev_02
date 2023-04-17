const computeSquareRoot = (n, start = 0, end = n) => {
  if (n < 0) {
    return NaN; // Renvoie NaN pour les nombres négatifs
  }
  if (n === 0 || n === 1) {
    return n; // La racine carrée de 0 et 1 est égale à elle-même
  }
  if (start > end) {
    return end; // La valeur de fin est la racine carrée la plus proche de n
  }
  let middle = Math.floor((start + end) / 2); // Calcule le milieu
  let middleSquared = middle * middle; // Calcule le carré de la valeur moyenne
  if (middleSquared === n) {
    return middle; // La valeur moyenne est la racine carrée de n
  } else if (middleSquared < n) {
    return computeSquareRoot(n, middle + 1, end); // Si la valeur moyenne est trop petite, ajuste la borne inférieure
  } else {
    return computeSquareRoot(n, start, middle - 1); // Si la valeur moyenne est trop grande, ajuste la borne supérieure
  }
};

console.log(computeSquareRoot(25));