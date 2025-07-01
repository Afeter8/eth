const css = `body {
  background-color: #0d0d0d;
  color: #00ffd5;
}`;

calculateSHA256(css).then(hash => console.log(hash));
