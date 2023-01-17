const spin = (print, time) => {
  setTimeout(() => {
    process.stdout.write(print);
  }, time);
};

const spinSequence = ['\r|   ', '\r/   ', '\r-   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 100;

const runSpin = () => {
  for (const seq of spinSequence) {
    spin(seq, delay);
    delay += 200;
  }
};

runSpin();