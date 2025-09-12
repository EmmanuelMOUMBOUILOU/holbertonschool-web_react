// task_0/js/main.ts

// 1. Définir l'interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Créer deux étudiants
const student1: Student = {
  firstName: "Alice",
  lastName: "Dupont",
  age: 20,
  location: "Paris",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Martin",
  age: 22,
  location: "Lyon",
};

// 3. Stocker dans une liste
const studentsList: Student[] = [student1, student2];

// 4. Créer un tableau HTML
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// 5. Remplir le tableau avec firstName + location
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

// 6. Ajouter le tableau au document
table.appendChild(tableBody);
document.body.appendChild(table);
