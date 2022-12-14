import Chart from 'chart.js/auto'

export const bars = () => {
  const ctx = document.getElementById('myChart2');
  const totalCrypto = parseInt(ctx.dataset.crypto, 10)
  const totalReal = parseInt(ctx.dataset.real, 10)
  const totalCustom = parseInt(ctx.dataset.custom, 10)
  const totalBank = parseInt(ctx.dataset.bank, 10)
  const test2 = new Chart(ctx, {
    type: 'bar',
    data: {
      // via le controller de pages et donc vue dashboard, récupérer infos conso de la journée
      labels: [`Crypto: ${totalCrypto}$`,`Real Estate: ${totalReal}$`,`Custom Invest: ${totalCustom}$`, `Bank Acount: ${totalBank}$`],
      datasets: [{
        label: '$',
        data: [totalCrypto, totalReal, totalCustom, totalBank],
        borderWidth: 1,
        backgroundColor: ["#FFFE50" , "#F11CB5","#74EEEA","#F76865"]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      responsive: true,
      plugins: {
        legend: {
          display:false,
          position: 'top'
        },
        title: {
          display: true
          // text: "Ma consommation de viande aujourd'hui"
        }
      }
    }
  });
}
