function test(param) {
  if (typeof param === "undefined") {
    console.log("Parameter is undefined");
  } else {
    console.log("Parameter is defined");
  }
}

test();        // Parameter is undefined
test("Hello"); // Parameter is defined
