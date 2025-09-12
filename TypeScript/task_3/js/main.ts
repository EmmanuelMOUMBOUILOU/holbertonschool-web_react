/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Création d’un RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insertion -> renvoie un RowID
const newRowID: RowID = CRUD.insertRow(row);

// Mise à jour avec age
const updatedRow: RowElement = {
  ...row,
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow);

// Suppression
CRUD.deleteRow(newRowID);
