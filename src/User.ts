import faker from 'faker'

import { Mappable } from './CustomMap'

// this is a better way to catch errors by using implements clause. This will help us write class in a structured way where we know that we have to implement functionality for some interface.

export class User implements Mappable {
    name: string
    location: {
        lat: number
        lng: number
    }

    constructor() {
        this.name = faker.name.firstName()

        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `This is marker for user - ${this.name}`
    }
}