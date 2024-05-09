function findMax(size) {
  let max = 0;
  for (let i = 0; i < size; i++) {
    max = Math.max(max, Math.random());
  }
  return max;
}

self.addEventListener("message", function (event) {
  const size = event.data;

  const maxNumber = findMax(size);

  self.postMessage(maxNumber);
});
