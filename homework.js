// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.

// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.
function remove(array, member) {
    let array2 = array.slice(0);
   for (var i = array2.length; i--; ) {
     if (array2[i] === member) {
       array2.splice(i, 1)
     }
   } return array2
}
// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.
    //see above -- same function satisfies questions one and two.

// 3. Create a function called "sum" that takes an array of numbers and returns the sum of those numbers.
function sum(n) {
    var array5 = n
  for (var i = 0, sum = 0; i < array5.length; sum += array5[i++]);
    return sum;
  }

// 4. Create a function called "average" that takes an array of numbers and returns the average of those numbers.
function average(n) {
    var array5 = n
  for (var i = 0, sum = 0; i < array5.length; sum += array5[i++]);
    if (sum == 0) {
    return undefined; 
    } else if (sum != 0) {
        return sum / n.length;
      }
  }

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(x) {
    var array5 = x
    let y = Math.min.apply(null, array5);
    if (x.length == 0) {
      return undefined
    } else if (x.length == 1){
        return x;
    } else {
        return y;
    }
}



// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

/*function selectionSort(numArray) { 
    //let n = numArray.length;
    let copyArray = numArray; 
    let sortedArray = [];
    let i =0;
    let smallestNum = Infinity; 
    while (i < copyArray.length) { 
        if (numArray.length === 1) {
            return numArray;
        } else {
            if(copyArray[i] < smallestNum) {
                smallestNum = copyArray[i];
                //copyArray = remove(copyArray, smallestNum);
                sortedArray.unshift(smallestNum); 
            } else {
                sortedArray.push(copyArray[i]);
            }
            i++
        
    }
}
    
    return sortedArray;  
}*/

    function selectionSort (numArray) {
       return numArray.sort((a, b) => a - b);  
    }




// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

        function textList(array) {
            return array.join(",");
        }