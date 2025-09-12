// 1. Interface pour décrire l'instance de StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 2. Interface pour décrire le constructeur de StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// 3. Implémentation de la classe
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
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

// Exemple d’utilisation
const student = new StudentClass("Alice", "Dupont");
console.log(student.displayName());   // Alice
console.log(student.workOnHomework()); // Currently working
