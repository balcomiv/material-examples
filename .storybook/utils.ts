enum TestValues {
  Primary,
  Secondary,
}

export function convertEnumToList(enumType: {
  [key: string]: string | number;
}): {
  [key: string]: number;
} {
  const enumOptions: { [key: string]: number } = {};

  Object.keys(enumType); // ?

  //  Save off numeric values
  const values = Object.keys(enumType).reduce<number[]>((results, key) => {
    const value = +key; // ?
    if (!isNaN(value)) {
      results.push(value);
    }
    return results;
  }, []);

  console.log(values);

  values.forEach((value) => {
    //  Reverse map enum
    const nameKey: unknown = enumType[value]; // ?

    if (typeof nameKey === 'string') {
      // Set object key/value pair
      enumOptions[nameKey] = +value;
    }
  });

  return enumOptions; // ?
}

// convertEnumToList(TestValues);

// test({ name: 'one' }, null);

// const val = of(null).pipe(
//     map(val => {
//         if (val === null) {
//             return null;
//         }
//         return val;
//     })
// )

// let quickFilters: FilterExpression[] | null;

// if (!quickFilters) {
//     const val = quickFilters;
// }
