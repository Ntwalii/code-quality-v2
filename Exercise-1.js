const arrayDepth = (array) =>
  Array.isArray(array)
    ? 1 + Math.max(0, ...array.map((element) => arrayDepth(element)))
    : 0;

const flattenArray = (array) => array.flat(arrayDepth(array));
