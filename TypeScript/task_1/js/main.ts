// 1. Définir l’interface Teacher
interface Teacher {
  readonly firstName: string;      // ne peut être défini qu’à l’initialisation
  readonly lastName: string;       // idem
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;      // optionnel
  location: string;
  [propName: string]: any;         // permet d’ajouter d’autres propriétés
}

// 2. Exemple d’utilisation
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // propriété ajoutée dynamiquement
};

console.log(teacher3);
