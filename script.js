var globalCount = 8000000000
let fr = 0.25
function quarter(num){
    const quarter = num*fr
    return quarter
}

console.log(quarter(10))

function modify(num){
    const globe = globalCount+=num
    const num2 = fr+=num
    console.log(globe)
    console.log(num2) 
}

modify(7)

function student(firstName, lastName, birthYear, Course, Studen_ID){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.Course = Course;
    this.Studen_ID = Studen_ID;
    return this
}

console.log(student("n","d",2006,"coding", 1236789))
console.log(student("m","dv",2005,"library science", 78965412))
console.log(student("t","dv",2002,"animation", 456321789))
console.log(student("w","d",2008,"music", 693258741))

const year = {
    January:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
        Week5: "39-31"
    },
    February:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
    },
    March:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
        Week5: "39-31"
    },
    April:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
        Week5: "39-30"
    },
    May:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
        Week5: "39-31"
    },
    June:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
        Week5: "39-30"
    },
    July:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
        Week5: "39-31"
    },
    August:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
        Week5: "39-31"
    },
    September:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
        Week5: "39-30"
    },
    October:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
        Week5: "39-31"
    },
    November:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
        Week5: "39-30"
    },
    December:{
        Week1: "1-7",
        Week2: "8-14",
        Week3: "9-21",
        Week4: "22-28",
        Week5: "39-31"
    }
}