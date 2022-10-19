// custom function to add all the numbers passed as any number of arguments to the function
function add(...args) {
  let sum = 0;
  let x = [...args];
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }

  return sum;
}
//  The memoize function which will save the results in a cache map , to return previous result directly for same inputs
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = args.toString();
    console.log("fn called with key", key);
    console.log("cache", cache);
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}
// creating a new memoized function of add
const memoizeAdd = memoize(add);

// a time function to show the time elapsed from start and of function
function time(fn) {
  console.time();
  console.log(fn());
  console.timeEnd();
}

// calling custom memoized function multiple time to check if add function is memoized
time(() => {
  return memoizeAdd(
    200,
    34,
    556,
    4545,
    3453,
    5567,
    67678,
    9789,
    3457,
    5585,
    3345
  );
});
time(() => {
  return memoizeAdd(100, 3453, 6, 687, 789, 59, 567, 55);
});

time(() => {
  return memoizeAdd(
    200,
    34,
    556,
    4545,
    3453,
    5567,
    67678,
    9789,
    3457,
    5585,
    3345
  );
});

time(() => {
  return memoizeAdd(200, 34, 556, 4545);
});

time(() => {
  return memoizeAdd(
    200,
    34,
    556,
    4545,
    3453,
    5567,
    67678,
    9789,
    3457,
    5585,
    3345
  );
});
