function simulateValidate(numberOfRows) {
  for (let i = 0; i < numberOfRows; i++) {
    const start = Date.now();
    while (Date.now() - start < 1) {}
  }
}

self.addEventListener("message", function (event) {
  const size = event.data;

  simulateValidate(size);

  self.postMessage("Done!");
});
