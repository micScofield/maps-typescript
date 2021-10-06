/// <reference types="@types/google.maps" />

// We integrated google maps into our project to access the "google" object directly. TS somehow throws error inside the editor, that's why above line is added to root ts file.

import { Company } from "./Company";
import { User } from "./User";

const user = new User()
const company = new Company()

console.log(user)
console.log(company)