for (let i = 1; i <= 15; i++) {
  const isMultipleOf3 = i % 3 === 0;
  const isMultipleOf5 = i % 5 === 0;
  const isMultipleOf5And3 = i % 3 === 0 && i % 5 === 0;
  if (isMultipleOf3 && isMultipleOf5) {
    console.log("FizzBuzz");
  } else if (isMultipleOf5) {
    console.log("Buzz");
  } else if (isMultipleOf3) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
