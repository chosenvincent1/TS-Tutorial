

// tuple example
let user: [number, string] = [1, 'Chosen']; 

//enum example
// enum Size {small = 1, medium, large};

//adding const
const enum Size {small = 1, medium, large};
let MySize: Size = Size.medium

//declaring type alias
type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void
}

//usage of type
let employee: Employee = {
    id: 1,
    name: 'Chosen',
    retire: (date: Date) => {
      console.log(date)
    } 
}