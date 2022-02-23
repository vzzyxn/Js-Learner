// find the factorial using function 
function factorial(n) { 
  let fact = 1; // factorial
  for(var i=0;i<=n;i++) {
    fact*=i;
  }
  return fact; // Same as console.log 
}
factorial(n);
