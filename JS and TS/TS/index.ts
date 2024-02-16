/* What is TS?
It is programming language to address shortcomings of JS. It is created by Microsoft.
TS is a JS with type checking.
Benefits
1. Static Typing => if variable declared as a number, you can not change it into string
2. Code Completion
3. Refactoring
4. Shorthand notations

Drawbacks
1. Compilation => transpilation happens when the code u write in TS should be compiled and translated into JS
2. Discipline in coding

TS => intoduces new types like:
1. any
2. unknown
3. never
4. enum
5. tuple

In TS, if u are using a large number, you separate it with _ , to make it easier to read.

You do not have to add annotation => type of value. For example:
let sales = 123_456_789; it will know that it is number by looking to value.

// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let is_published: boolean = true;

--------- Any type ----------

Any can represent any kind of values. For example: if u declare a variable and do not initialize it, TS compiler will assume that this variable is the type of any. So u can then give a value as a number and then change it to the string. Try to avoid using any!

function render(document: any){
    console.log(document)
}

 --------- Arrays ------------

 In TS, in an array there should be similar type of elements.
 let numbers: number[] = [1, 2, 3];
 let numbers = [1, 2, 3]; => u can write like this too, TS will know that the array consists of only numbers.

  ----------- Tuples ----------

  It is a fixed length array where each element has a particular type.
  let user: [number, string] = [1, "Mosh"] => because you wrote only number and string inside of the array, you can not add 3 element, because it will show error.

  ----------- Enums ----------

  Using an enum we can represent a list of related constantsand if we define our enums using the constant keyword, the compiler will generatemore optimazed code.

  const small = 1;
  const medium = 2;
  const large = 3; => we can rewrite this code with enums

  //PascalCase

  enum Size { Small = 1, Medium, Large } => you can write ur own values and it can be other type too. Foe example: Small = 's', but if u do this you should add value to each of them. 

  let mySize: Size = Size.Medium;
  console.log(mySize); //2

 ------------ Functions ----------

  function calculateTax( income: number => u should write void, not a number, if ur function does not return value. , taxYear = 2022 ){
if (taxYear < 2022) {
    return income * 1.2;
}  return income * 1.3;
}
calculateTax(10_000); 

 ----------- Objects ------------

 let employee: {
    id: number,
    name?: string
 } = { id: 1 };
 employee.name ="Mosh";
 Use ? mark when it is necessary. For exmaple: we should not use this mark here because every employee has a name, when it was, for example fax, you could use ? mark since not everyone has a fax machine. So that's why do like this.
 let employee: {
    id: number,
    name: string
 } = { id: 1, name: 'Mosh };

 If u add read only modifier before the, for example, id => 
  let employee: {
    readonly id: number,
    name: string
 } = { id: 1, name: 'Mosh };
 employee.id = 0; => this will show error since you can not modify the value of the property.

  let employee: {
    id: number,
    name: string, 
    retire: (date: Date) => void
 } = { id: 1,
     name: 'Mosh,
    retire: (date:Data)=> {
        console.log(date)
    } };


    -------------------------- Advanced levels ---------------------------------

    ------- Type Aliases -------

    Using type alias you can define a custom type.
      let employee: {
    id: number,
    name: string, 
    retire: (date: Date) => void
 } = { id: 1,
     name: 'Mosh,
    retire: (date:Data)=> {
        console.log(date)
    } }; => there are several problems here, so i would write this code in an alias type

    type Employee = {
        readonly id: number,
         name: string, 
    retire: (date: Date) => void
    }
    let employee: Employee = {
        id: 1, 
        name: 'Mosh',
        retire: (date:Data)=> {
        console.log(date)
    }
    } => so now you have a single place where we define the shape of an employee object and we can reuse this in multiple places.


    ----- Union Types -------

    With union types we can give a variable or a function parameter more than one type. 

    function kgToLbs( weight: number | string ): number {
        //Narrowing => use this technique to narrow down this union type into a more specific type, to see the methods of the type

        if( typeof weight === 'number'){
return weight * 2.2;
        }else{
            return parseInt(weight) * 2.2;
        }
    }


    ------ Intersection Types -----

    Technique for combining types called intersection.

    type Draggable = { 
    drag: () => void
    };'

     type Resizable = { 
    resize: () => void
    };

    type UIwidget = Draggable & Resizable;

    let textBox: UIWidget = {
        drag: () => {},
         resize: () => {}
    }


    ------ Literal types ------

    Sometimes we want to limit values. We can assign to a variable. This is where we use literal types. 
    Literal (exact, specific)

    let quantity: number; => we should change number to a specific number. 
    let quantity: 50 = 50; => if we write 51, not 50 it will show error.
    let metric: 'cm' | 'inch';


    -------- Nullable types -------

    function greet(name: string | null | undefined){
        if(name){
            console.log(name.upperCase())
        }else{
            console.log('Hola!)
        }
    }
    greet(undefined);












*/











    