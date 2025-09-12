// 7. String literal types

// Définition du type littéral
type Subjects = "Math" | "History";

// Fonction teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Tests
console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching History
