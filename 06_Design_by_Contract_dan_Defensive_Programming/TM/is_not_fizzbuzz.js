function is_not_fizzbuzz(number) {
  if (typeof number !== "number" || !Number.isFinite(number) || !Number.isInteger(number)) {
    throw new TypeError("Input harus bilangan bulat!");
  }

  if (number % 15 === 0) return false;
  if (number % 3 === 0) return false;
  if (number % 5 === 0) return false;

  return true;
}


console.log(is_not_fizzbuzz(1)) 
console.log(is_not_fizzbuzz(3))   
console.log(is_not_fizzbuzz(5))    
console.log(is_not_fizzbuzz(30))   
console.log(is_not_fizzbuzz(7))    


try { console.log(is_not_fizzbuzz(null)) } catch(e) { console.log("TypeError ✅") }
try { console.log(is_not_fizzbuzz(NaN)) } catch(e) { console.log("TypeError ✅") }
try { console.log(is_not_fizzbuzz(Infinity)) } catch(e) { console.log("TypeError ✅") }