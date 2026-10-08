const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["1", "2", "3"],
    datasets: [{
      data: [1, 10, 5],
    }]
  },
});
