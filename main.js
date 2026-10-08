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

let duplication = new Chart(document.getElementById("duplication"), {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Car Tire",
        data: [
          {x: 10, y: 20},
          {x: 15, y: 20},
          {x: 50, y: 40},
        ],
      }
    ]
  },
});

let separation = new Chart(document.getElementById("separation"), {
  type: "bar",
  data: {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Part 1",
        data: [40, 100, 30],
      },
      {
        label: "Part 2",
        data: [20, 50, 10],
      },
    ]
  },
  options: {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    },
  },
});

let diversification = new Chart(document.getElementById("diversification"), {
  type: "bubble",
  data: {
    datasets: [
      {
        label: "Stocks",
        data: [
          {x: 20, y: 10, r: 5, name: "AAPL"},
          {x: 22, y: 12, r: 4, name: "MSFT"},
        ],
      },
      {
        label: "Bonds",
        data: [
          {x: 50, y: 40, r: 2, name: "WMT"},
          {x: 60, y: 22, r: 3, name: "MRNA"},
        ],
      },
    ]
  },
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            const point = context.raw;
            return `${point.name} ${point.x} ${point.y} ${point.r}`
          }
        }
      }
    }
  }
});
