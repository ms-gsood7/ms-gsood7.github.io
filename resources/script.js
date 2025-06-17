document.addEventListener("DOMContentLoaded", () => {
  const tips = [
    "The human brain has about 86 billion neurons.",
    "In JavaScript, '==' checks value, while '===' checks value and type.",
    "SQL stands for Structured Query Language and was developed in the 1970s.",
    "CSS Flexbox is great for one-dimensional layouts. Grid is better for two.",
    "Data without context is just noise. Always ask what question you're answering.",
    "The median is less sensitive to outliers than the mean.",
    "Python was named after Monty Python, not the snake.",
    "In data storytelling, less is more. Focus on clarity, not clutter."
  ];

  let lastIndex = -1;
  const tipElement = document.getElementById("random-tip");
  const button = document.getElementById("new-tip-button");

  function showRandomTip() {
    if (!tipElement) return;

    let index;
    do {
      index = Math.floor(Math.random() * tips.length);
    } while (index === lastIndex && tips.length > 1);
    lastIndex = index;

    tipElement.textContent = tips[index];
  }

  showRandomTip(); // Show one immediately
  setInterval(showRandomTip, 30000); // Auto every 30s

  if (button) {
    button.addEventListener("click", showRandomTip);
  }
});
