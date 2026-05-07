
function filterEvenNumbers(number: number[]): number[] {
    return number.filter((elem) => elem%2 ===0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6])

function reverseString(elem: string): string {
    return elem.split('').reverse().join('');
}

const result = reverseString("typescript");


type StringOrNumber = string | number;

const checkType = (value: StringOrNumber) => {
    if (typeof value === "string" ) {
        return "String";
    } else if (typeof value === "number" ) {
        return "Number";
    } else {
        return "Unknown"
    }
};



const getProperty = <X>(obj: X, key: keyof X) => {
    return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "name");


interface Book {
    title: string, author: string, publishedYear: number;
}

const myBook:Book = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

type IsRead = boolean;


function toggleReadStatus(myBook: Book): Book & { isRead: boolean } {
  return {
    ...myBook,
    isRead: true,
  };
}


toggleReadStatus(myBook)


class person {
  public name: string;
  public age: number;
  
  constructor( name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends person {
  grade: string;

  constructor(name:string, age:number, grade:string){
    super(name, age)
    this.grade = grade
  }

    getDetails():string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }

}

const student = new Student("Alice", 20, "A");

