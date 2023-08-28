// Simulating data retrieval
function getScore(studentId) {
    // Replace this with actual API call or database query
    // For now, we'll use a dummy score
    const scores = {
        "001": 95, // Example score for student 001
        // Add more scores here
    };
    return scores[studentId] || "N/A";
}

// Display scores on the page
document.addEventListener("DOMContentLoaded", function () {
    const scoreElements = document.querySelectorAll(".score");
    scoreElements.forEach(function (element) {
        const studentId = element.id.split("_")[1];
        const score = getScore(studentId);
        element.textContent = score;
    });
});
