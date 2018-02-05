export class Init{
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
            console.log('No markers found....creating...');
            
            var markers = [
                {
                    name:'Ground one',
                    lat: 12.979033,
                    lng: 77.599593,
                    draggable: true
                  },
                  {
                    name:'Ground two',
                    lat: 13.0874417,
                    lng: 77.4453762,
                    draggable: true
                  },
                  {
                    name:'Ground three',
                    lat: 13.0703551,
                    lng: 77.3170808,
                    draggable: false
                  }
            ];
            
            localStorage.setItem('markers', JSON.stringify(markers));
        } else {
            console.log('Loading markers...');
        }
    }
}