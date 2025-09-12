// 1. Interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// 2. Interface Directors qui étend Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// 3. Définir l’interface pour la fonction printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 4. Implémenter la fonction printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// 🔹 Exemples
console.log(printTeacher("John", "Doe"));   // J. Doe
console.log(printTeacher("Alice", "Dupont")); // A. Dupont
