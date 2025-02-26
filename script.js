// Inisialisasi Chart.js
let ctx = document.getElementById('investmentChart').getContext('2d');
let investmentChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Total Principal',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                data: []
            },
            {
                label: 'Total Interest',
                backgroundColor: 'rgba(40, 167, 69, 0.2)',
                borderColor: 'rgba(40, 167, 69, 1)',
                data: []
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Fungsi Menghitung Investasi
function calculateInvestment() {
    let initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
    let years = parseInt(document.getElementById('years').value);
    let rate = parseFloat(document.getElementById('rate').value) / 100;
    let frequency = parseInt(document.getElementById('frequency').value);
    let contribution = parseFloat(document.getElementById('contribution').value);

    let months = years * 12;
    let balance = initialDeposit;
    let principal = initialDeposit;
    let interest = 0;
    let labels = [];
    let principalData = [];
    let interestData = [];

    for (let i = 0; i <= months; i++) {
        if (i % 12 === 0) {
            labels.push(new Date().getFullYear() + Math.floor(i / 12));
        } else {
            labels.push('');
        }

        let monthlyRate = rate / frequency;
        balance += contribution;
        interest += balance * monthlyRate / 12;
        balance += balance * monthlyRate / 12;
        principal += contribution;

        principalData.push(principal);
        interestData.push(balance - principal);
    }

    // Perbarui Total Saldo
    document.getElementById('totalBalance').innerText = `Rp ${balance.toLocaleString()}`;

    // Perbarui Chart
    investmentChart.data.labels = labels;
    investmentChart.data.datasets[0].data = principalData;
    investmentChart.data.datasets[1].data = interestData;
    investmentChart.update();
}
