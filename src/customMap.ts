interface Location {
    lat: number
    lng: number
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })        
    }

    addMarker(location: Location): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: location
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: 'This is a demonstration of info window popup on clicking the marker !'
            })

            infoWindow.open(this.googleMap, marker)
        })
    }
}