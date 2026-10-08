let avoidance = new Chart(document.getElementById("avoidance"), {
  type: "radar",
  data: {
    labels: ["Exposure 1", "Exposure 2", "Exposure 3"],
    datasets: [{
      data: [1, 10, 5],
    }]
  },
});
