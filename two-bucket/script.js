// You can only do one action at a time.
// After an action, you may not arrive at a state where the starting bucket is empty and the other bucket is full.
const bucketOne = {
  size: 5,
  current: 5,
}
const bucketTwo = {
  size: 2,
  current: 0,
};



const solve = function (bucketSizeOne, bucketSizeTwo, goal, firstFilledBucket) {
  
  bucketOne.size = bucketSizeOne;
  bucketTwo.size = bucketSizeTwo;

// first fill 
  if (firstFilledBucket = 1) {
    fill(bucketOne)
  } else {
    fill(bucketTwo)
  }


  




  /*return {
    moves: ,
    goalBucket: ,
    otherBucket: 
  }*/
}

// Pouring one bucket into the other bucket until either: a) the first bucket is empty b) the second bucket is full
// mod doesnt quite work cos can sometimes go into more than one eg. 5 mod 2, 2 goes into 5 twice, with 1 remainder 5 % 2 = 1, whereas what we would want is 5 - 2 = 3 ... 3 in the 5 ubkcet and 2 in the 2 bucket
// how about one.current = one.current - two.size, fill(two)  
// but what about when buckets arent empyr or full then it doesnt work again perhaps
const pour = (firstBucket, secondBucket) => {
  if (firstBucket > secondBucket) {
    firstBucket.current = firstBucket.current - secondBucket.size;
    fill(secondBucket)
  }
  
  console.log(firstBucket)
  console.log(secondBucket)
}
// Emptying a bucket and doing nothing to the other.
const empty = (bucket) => {
  bucket.current = 0
}

// Filling a bucket and doing nothing to the other.
const fill = (bucket) => {
  bucket.current = bucket.size
}



/* example 
  



*/