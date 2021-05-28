//  @ts-nocheck

/*
// Problem #1: what will assign do?

let obj = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};

let objclone = Object.assign({}, obj); // question: what will this line do?

// 	my answer: assign the key/value pairs from `obj` to the object literal passed as the first parameter on line 11
console.log('objclone: ', objclone); // what will print?

// tslint:disable-next-line: max-line-length
// 	my answer (incorrect): "objclone: [Object object]". Interviewer said it would print the object out, I realized I had misread the line as "console.log('objclone: ' + objclone)", which would print my answer.

// there was a question in here somewhere about the difference between a shallow and deep clones
// question: show me how you'd do a deep clone of `obj`
// my answer:
let objclone2 = {
  ...obj,
  c:  ...obj.c
};
// also could do Object.assign instead, but I prefer spread syntax
// interviewer said they use JSON.stringify(JSON.parse(obj)) for general cloning, which works fine



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Problem #2: Reverse a string
// ex. given 'bat' return 'tab'
reverseString(str: string);: string; {
  // my original answer:
  return str.split('').reverse().join('');

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Problem #3: print the even numbers
// ex. obs$: Observable<number[]> = of([1, 2, 3, 4, 5]);
printEven(obs$: Observable<number[]>): void {
	obs$.subscribe((numbers) => {
    for (const num of numbers) {
      if (num % 2 === 0) {
        console.log(num);
      }
    }

    // follow-up question: are you familiar with the ES6 array methods
    numbers.filter(num => num % 2 === 0).forEach(num => { console.log(num); });
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Problem #4: print the sum
// obsArr: Observable<number>[] = [of(1), of(2), of(3), of(4),]
printSum(obsArr: Observable < number > []): void {
	// scan-based option, assumes that the observables complete after emitting one value
  merge(obsArr).pipe(
  	scan((sum, number) => sum + number, 0),
    last(),
  ).subscribe(sum => {
    console.log(sum);
  });

	// more imperative option, assumes that the observables are all synchronous, cold, and complete after emitting one value
  let sum = 0;
  merge(obsArr).subscribe((number) => {
    sum += number;
  });
	console.log(sum);
}

{
  name: 'John',
  isValid() {
    return name != null;
  }
}

// original:
< form [formGroup]='myFormGroup' [ngClass] ='getColor(myFormGroup)'> ( /form> as )

< form [formGroup]='myFormGroup' [ngClass] ='getColor(myFormGroup)'> ( /form> as )
// questions:
// what's wrong with the above code?
// 	my answer: getColor called during each CD run, plus "formGroup" should be "myFormGroup"
// how would you do it differently?
// 	my answer: like this:
< form [formGroup]='myFormGroup' [ngClass] ='formColorClass | async'> ( /form> as )
// .ts file
// the original sample doesn't show the "getColor" function so idk how it knows what color to return, but I assume it's based on the form state, so I wrote this:
this.formColorClass = myFormGroup.statusChanges.pipe(map((status) => {
  // get color from form value
});

// tslint:disable-next-line: max-line-length
// 	also, you could use a custom pipe or directive to handle this if you're doing it a lot -- adding a class to form based on its status is probably something you're doing on lots of forms, not just one.

*/
