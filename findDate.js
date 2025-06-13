document.querySelector('.js-calculate-button').addEventListener('click', () => {
    const input = document.querySelector('.js-date-input').value;
    const result = document.querySelector('.js-result');

    if (!input) {
        result.textContent = "Please select a valid date.";
        return;
    }

    const today = new Date();
    const targetDate = new Date(input);

    today.setHours(0, 0, 0, 0,);
    targetDate.setHours(0, 0, 0, 0);

    const one_day = 1000 * 60 * 60 * 24;
    const diff = Math.ceil((targetDate - today) / one_day);

    if (diff > 1) {
        result.textContent = `There are ${diff} days left until ${targetDate.toDateString()}.`;
    } else if (diff === 1) {
        result.textContent = `There is ${diff} day left until ${targetDate.toDateString()}!`;
    } else if (diff === 0) {
        result.textContent = `That's today!`
    } else {
        result.textContent = `That date was ${Math.abs(diff)} day(s) ago.`;
    }
});