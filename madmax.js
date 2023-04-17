const max = (array) => {
  if (array.length === 0 ) {
    return "-Infinity"
  } else if (array.length === 1) {
    return array[0];
  } else {
    const subMax = max(array.slice(1));
    if (array[0] > subMax) {
      return array[0];
    } else {
      return subMax;
    }
  }
}

console.log(max([5,18,15]));