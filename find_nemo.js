const nemo = ['nemo'];

const large = new Array(1000000).fill('nemo');

function FindNemo(array) {
  let st = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log("Found Nemo!");
      //const var_x = 'raj';
    }
  }
  let et = performance.now();
  console.log("Time took: " + (et - st) / 1000 + " seconds")
}

FindNemo(large);