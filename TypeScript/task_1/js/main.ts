// task_1/js/main.ts

// Définition de l'interface Teacher
interface Teacher {
  readonly firstName: string;      // ne peut être défini qu'à l'initialisation
  readonly lastName: string;       // ne peut être défini qu'à l'initialisation
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;      // optionnel
  location: string;
  [key: string]: any;              // permet d'ajouter des propriétés supplémentaires
}

// Exemple d'utilisation
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // propriété supplémentaire
};

const teacher2: Teacher = {
  firstName: "Alice",
  lastName: "Martin",
  fullTimeEmployee: true,
  location: "Paris",
  yearsOfExperience: 5,
  subject: "Math", // propriété supplémentaire
};

// Affichage dans la console
console.log(teacher1);
console.log(teacher2);

// task_1/js/main.ts (mise à jour pour task_2)

// Définition de l'interface Teacher
interface Teacher {
  readonly firstName: string;      // ne peut être défini qu'à l'initialisation
  readonly lastName: string;       // ne peut être défini qu'à l'initialisation
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;      // optionnel
  location: string;
  [key: string]: any;              // permet d'ajouter des propriétés supplémentaires
}

// Définition de l'interface Directors qui étend Teacher
interface Directors extends Teacher {
  numberOfReports: number;        // nouvelle propriété obligatoire
}

// Exemple d'utilisation
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

const director1: Directors = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "New York",
  numberOfReports: 17,
};

console.log(teacher1);
console.log(director1);

// task_1/js/main.ts (mise à jour pour task_3)

// Interface pour la fonction printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implémentation de la fonction printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Exemple d'utilisation
console.log(printTeacher("John", "Doe"));   // J. Doe
console.log(printTeacher("Alice", "Martin")); // A. Martin

// task_1/js/main.ts (mise à jour pour task_4)

// Interface pour le constructeur de StudentClass
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface pour la classe StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implémentation de la classe
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Exemple d'utilisation
const student = new StudentClass({ firstName: "John", lastName: "Doe" });

console.log(student.displayName());  // John
console.log(student.workOnHomework()); // Currently working
