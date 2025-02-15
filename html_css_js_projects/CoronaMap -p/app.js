function updatemap() {
    fetch('./data.json')
        .then((value) => {
            return value.json()
        }).then((value) => {
            console.log(value.data)

            value.data.forEach(element => {
                longitude = element.longitude;
                latitude = element.latitude;

                //Infected cases 
                cases = element.infected;
                color = `rgb(${cases},0,0)`;
                
                // if (cases > 255) {
                // color = 'rgb(255, 0, 0)';
                // }
                // else {
                    // color = `rgb(${cases},0,0)`;
                // }

                //Marker on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });

        })
}
updatemap()