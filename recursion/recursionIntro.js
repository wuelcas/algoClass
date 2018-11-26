//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

function loop(n) {
  for (let number = n; number >= 0; number--) {
    console.log(number);
  }
}

// loop(3);

//2. Next, try looping just like above except using recursion

function recursionLoop(n) {
  console.log(n);

  const newN = n - 1;
  if (newN > 0) {
    recursionLoop(newN);
  } else {
    console.log(0);
  }
}

// recursionLoop(3);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

function exponent(base, expo) {
  let count = 1;
  let result = base;
  while (count < expo) {
    result = result * base;
    count = count + 1;
  }
  console.log(result);
}

// exponent(2, 3);

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function RecursiveExponent(base, expo) {
  function multiplies(n, count) {
    if (count >= expo) {
      return n;
    }

    n = n * base;
    count = count + 1;
    return multiplies(n, count);
  }

  const initialCount = 1;
  console.log(multiplies(base, initialCount));
}

// RecursiveExponent(2, 3);

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier(arr, num) {
  const multipliedArray = [];

  function multiply(initialArray) {
    if (initialArray.length === 0) {
      return;
    }

    multipliedArray.push(initialArray.shift() * num);
    multiply(initialArray);
  }

  multiply(arr);

  console.log(multipliedArray);
}

recursiveMultiplier([1, 2, 3], 3);

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function recursiveReverse(array) {
  const reversedArray = [];

  function addToReversedArray(orderedArray) {
    if (orderedArray.length === 0) {
      return;
    }
    reversedArray.push(orderedArray.pop());
    addToReversedArray(orderedArray);
  }

  addToReversedArray(array);
  console.log(reversedArray);
}

// recursiveReverse([1, 2, 3, 4, 5]);
