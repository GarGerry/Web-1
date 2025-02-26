function calculateInvestment() {
    let P = parseFloat(document.getElementById("initialDeposit").value);
    let r = parseFloat(document.getElementById("rate").value) / 100;
    let n = parseInt(document.getElementById("compound").value);
    let t = parseInt(document.getElementById("years").value);
    let A = P * Math.pow((1 + r / n), n * t);

    let contribution = parseFloat(document.getElementById("contribution").value);
    let futureValue = 0;

    for (let i = 0; i < t * 12; i++) {
        futureValue += contribution * Math.pow((1 + r / 12), (t * 12 - i) / 12);
    }

    let totalBalance = A + futureValue;

    document.getElementById("totalBalance").innerText = "Rp " + totalBalance.toFixed(2);

    updateChart(A, futureValue);
}

let investmentChart;

function updateChart(principal, interest) {
    let ctx = document.getElementById("investmentChart").getContext("2d");

    if (investmentChart) {
        investmentChart.destroy();
    }

    investmentChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Sekarang", "1 Tahun", "2 Tahun", "3 Tahun", "4 Tahun", "5 Tahun"],
            datasets: [
                {
                    label: "Total Pokok",
                    data: [principal / 5, principal * 2 / 5, principal * 3 / 5, principal * 4 / 5, principal, principal + interest],
                    borderColor: "blue",
                    fill: false
                },
                {
                    label: "Total Bunga",
                    data: [interest / 5, interest * 2 / 5, interest * 3 / 5, interest * 4 / 5, interest, interest + principal],
                    borderColor: "green",
                    fill: true,
                    backgroundColor: "rgba(0, 255, 0, 0.2)"
                }
            ]
        }
    });
}
