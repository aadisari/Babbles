// script.js
document.addEventListener('DOMContentLoaded', () => {
    // This code ONLY runs once the HTML is fully loaded
    // and data.js is officially 'in the building'

    console.log("Data loaded! Total messages:", chatStats.total_messages);

    // Now you can safely update your HTML
    const messageElement = document.getElementById('they_sent');
    messageElement.innerText = chatStats.sent_by_them;

    const proportionElement = document.getElementById('props');
    proportionElement.innerText = (chatStats.totals_proportions['babbles '] * 100).toString() + '%';

    const hourElement = document.getElementById('hours');
    const hourArray = chatStats.hourly_distribution
    hourElement.innerText = '11pm';
});
