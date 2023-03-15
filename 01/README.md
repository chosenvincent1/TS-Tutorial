1. TS is a programming language that was created by microsoft to solve some of the shortcomings of JS. Benefits of TS includes: static typing, code completion, refactoring, and shorthand notation. In TS, we set the type of our variable upon declaration. The drawback of TS is that you must compile your code and you must be discipline in coding.

2. To declare a variable in TS, you must specify the type. We have different types in TS which includes: string, boolean, number, any, array, enum, tuple, unknown, etc. The types are all in lowercase.

3. We don't define "int" or "float" in TS. Everything is treated as "number".

4. Tuples are new types. With turples, you can have different types in an array. you'll also have to specify the length of the array too. e.g: "let listItems: [number, string] = [1, 'Chosen'];" with this, you cannot specify more than two elements in the array, and it must go in the order specified. Tuples compiles to plain JS arrays.

5. Enums can be used to generate list of related constants. If you add const keyword, its going to generate more optimized code.

6. While declaring functions in TS, you have to specify the type of the parameter. When a function is void, it means that the function doesn't return anything.Always properly anotate your functions.

7. In typealias, you can reuse TS objects anywhere in your code by declaring it just once. 

