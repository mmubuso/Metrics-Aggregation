//  Varaibles
const metrics = mockMetrics;
const showData = document.getElementById('showData');


//Functions
const mapOverMetrics = metrics.map(item => {
    return {
        friendly: item.friendly,
        name: item.name
    }
});


// Format Original array
function adjustMapOverMetrics() {
    let i = 0
    let j = 0
    // Run while we still have metrics to iterate over
    while(i < mapOverMetrics.length){
        mapOverMetrics[i].friendly = `${aggregates[j]['friendly']} ${mapOverMetrics[i].friendly}`
        mapOverMetrics[j].name = `${aggregates[j][`function`]}_${mapOverMetrics[j].name}`
        i++
        j++
    }
}

// Update Screen
function updateShowData () {
    showData.innerHTML = JSON.stringify(mapOverMetrics)
}


// Run methods
adjustMapOverMetrics()
updateShowData()
