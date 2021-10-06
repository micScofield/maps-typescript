import faker from 'faker'

import { Mappable } from './CustomMap'

// this is a better way to catch errors by using implements clause. This will help us write class in a structured way where we know that we have to implement functionality for some interface.

export class Company implements Mappable {
    companyName: string
    catchPhrase: string
    
    location: {
        lat: number
        lng: number
    }

    constructor() {
        this.companyName = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()

        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `This is marker for company - <strong>${this.companyName}</strong>, ${this.catchPhrase}`
    }
}