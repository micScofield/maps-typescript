/// <reference types="@types/google.maps" />

// We integrated google maps into our project to access the "google" object directly. TS somehow throws error inside the editor, that's why above line is added to root ts file.

import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User()
const company = new Company()

const customMap = new CustomMap('map') // instantiates a new google map instance with predefined options for us and links with a div with an id of "map"

customMap.addMarker(user)
customMap.addMarker(company)
// customMap.addMarker({ location: company.location, markerContent: company.markerContent() })
// since we expect the passed value to match with some interface defined in the CustomMap.ts, we can pass in above two manners