
const events = [
    {
        name: "Technical Fest",
        date: "15 November 2026",
        venue: "Main Auditorium"
    },
    {
        name: "Coding Competition",
        date: "20 November 2026",
        venue: "Computer Lab"
    },
    {
        name: "Cultural Fest",
        date: "25 November 2026",
        venue: "College Ground"
    }
];

const eventContainer = document.getElementById("events");

events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Date: ${event.date}</p>
        <p>Venue: ${event.venue}</p>
    `;

    eventContainer.appendChild(card);
});


const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const selectedEvent = document.getElementById("eventName").value;

    document.getElementById("message").textContent =
        `Thank you, ${name}! You registered for ${selectedEvent}.`;

    form.reset();
});
