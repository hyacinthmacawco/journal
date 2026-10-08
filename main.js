const avoidance = document.getElementById('avoidance');

new Chart(avoidance, {
  type: "radar",
  data: {
    labels: ["Exposure 1", "Exposure 2", "Exposure 3"],
    datasets: [{
      data: [1, 10, 5],
    }]
  },
});
