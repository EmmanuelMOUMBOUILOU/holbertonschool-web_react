// 1. Définir l’interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // permet d’ajouter d’autres propriétés
}

// 2. Définir l’interface Directors qui étend Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// 3. Exemple d’utilisation
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
