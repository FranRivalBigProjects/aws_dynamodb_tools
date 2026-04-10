function calc(){
let reads=parseFloat(document.getElementById('a').value)||0;
let writes=parseFloat(document.getElementById('b').value)||0;
let items=parseFloat(document.getElementById('c').value)||0;

// simplified cost model
let cost = (reads * 0.00013) + (writes * 0.00065);
let loadScore = items * (reads + writes);

let level = loadScore < 10000 ? "Low load ✅" :
            loadScore < 100000 ? "Moderate load ⚖️" :
            "High load ⚠️";

let insights = "";
if(reads > writes * 5) insights += "Read-heavy workload. Optimize caching.<br>";
if(writes > reads * 2) insights += "Write-heavy workload. Optimize partitioning.<br>";
if(items > 1000000) insights += "Large dataset. Review partition key strategy.<br>";

document.getElementById('result').innerHTML =
"Estimated Cost: $" + cost.toFixed(4) + "<br><br>" +
"Load Score: " + loadScore.toFixed(0) + "<br><br>" +
level + "<br><br>" + insights;
}
