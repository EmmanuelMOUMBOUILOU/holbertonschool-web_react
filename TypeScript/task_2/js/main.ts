// task_2/js/main.ts

// --------------------
// Interfaces
// --------------------
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// --------------------
// Classes
// --------------------
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// --------------------
// Fonction createEmployee
// --------------------
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// --------------------
// Type predicate
// --------------------
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// --------------------
// Fonction executeWork
// --------------------
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// --------------------
// Type littéral Subjects
// --------------------
type Subjects = "Math" | "History";

// Mapping des matières à leur message
const classMap: Record<Subjects, string> = {
  Math: "Teaching Math",
  History: "Teaching History",
};

// --------------------
// Fonction teachClass
// --------------------
function teachClass(todayClass: Subjects): string {
  return classMap[todayClass];
}

// --------------------
// Exemple d'utilisation
// --------------------
console.log(createEmployee(200).constructor.name);    // Teacher
console.log(createEmployee(1000).constructor.name);   // Director
console.log(createEmployee("$500").constructor.name); // Director

executeWork(createEmployee(200));    // Getting to work
executeWork(createEmployee(1000));   // Getting to director tasks

console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching History
