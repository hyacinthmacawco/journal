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
  type: "bar",
  data: {
    labels: ["Driver Training", "No Alcohol or Drugs", "Safety Rules Enforcement"],
    datasets: [
      {
        label: "Before",
        data: [40, 100, 30],
      },
      {
        label: "After",
        data: [20, 50, 10],
      },
    ]
  },
});

let lossReduction = new Chart(document.getElementById("lossReduction"), {
  type: "doughnut",
  data: {
    labels: ["Damage from Fire", "Automatic Sprinkler System", "First-Aid Boxes", "Fire Service Response"],
    datasets: [{
      data: [1/100, 4/10, 3/10, 3/10 - 1/100],
    }]
  },
});
