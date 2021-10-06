/// <reference types="@types/google.maps" />

// We integrated google maps into our project to access the "google" object directly. TS somehow throws error inside the editor, that's why above line is added to root ts file.

import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User()
const company = new Company()

const customMap = new CustomMap('map') // instantiates a new google map instance with predefined options for us and links with a div with an id of "map"

customMap.addMarker({ location: user.location, markerContent: user.markerContent })
customMap.addMarker(company)
// Two ways - Pass entire user object: the function on other end will use the properties it needs OR pass only required properties from user / company object. These classes are implementing the Mappable Interface, so passing entire object will not cause any errors.