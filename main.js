// Sample data (replace with actual data from your backend)
const userData = {
    totalSpent: 1500,
    budget: 2000,
    categories: {
        'Food': 500,
        'Rent': 800,
        'Entertainment': 200
    },
    timeData: {
        'Jan': 1200,
        'Feb': 1300,
        'Mar': 1100,
        'Apr': 1500
    }
};

// Update summary
document.getElementById('totalSpent').textContent = userData.totalSpent;
document.getElementById('budget').textContent = userData.budget;
document.getElementById('remaining').textContent = userData.budget - userData.totalSpent;

// Create category pie chart
const categoryCtx = document.getElementById('categoryChart').getContext('2d');
new Chart(categoryCtx, {
    type: 'pie',
    data: {
        labels: Object.keys(userData.categories),
        datasets: [{
            data: Object.values(userData.categories),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Expenditure by Category'
        }
    }
});

// Create time line chart
const timeCtx = document.getElementById('timeChart').getContext('2d');
new Chart(timeCtx, {
    type: 'line',
    data: {
        labels: Object.keys(userData.timeData),
        datasets: [{
            label: 'Spending Over Time',
            data: Object.values(userData.timeData),
            borderColor: '#36A2EB',
            fill: false
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Monthly Spending'
        }
    }
});

// Generate financial advice
function generateAdvice() {
    const adviceContent = document.getElementById('adviceContent');
    const remainingBudget = userData.budget - userData.totalSpent;
    
    if (remainingBudget > 0) {
        adviceContent.innerHTML = `
            <p>Great job! You're under budget by $${remainingBudget}. Consider investing this amount.</p>
            <ul>
                <li>Look into low-cost index funds for long-term growth.</li>
                <li>Consider opening a high-yield savings account for your emergency fund.</li>
                <li>If you have high-interest debt, prioritize paying it off.</li>
            </ul>
        `;
    } else {
        adviceContent.innerHTML = `
            <p>You've overspent by $${-remainingBudget}. Here are some tips to get back on track:</p>
            <ul>
                <li>Review your expenses and look for areas to cut back.</li>
                <li>Consider creating a more detailed budget.</li>
                <li>Look for ways to increase your income, such as freelancing or selling unused items.</li>
            </ul>
        `;
    }
}

generateAdvice();