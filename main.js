const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    datasets: [{
      data: [1, 10, 5],
    }]
  },
});
