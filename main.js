let avoidance = new Chart(document.getElementById("avoidance"), {
  type: "radar",
  data: {
    labels: ["Exposure 1", "Exposure 2", "Exposure 3"],
    datasets: [{
      data: [1, 10, 5],
    }]
  },
});

let lossPrevention = new Chart(document.getElementById("lossPrevention"), {
  type: "doughnut",
  data: {
    labels: ["Truck Accident", "Driver Training", "No Alcohol or Drugs", "Safety Rules Enforcement"],
    datasets: [{
      data: [1/100, 4/10, 3/10, 3/10 - 1/100],
    }]
  },
});
