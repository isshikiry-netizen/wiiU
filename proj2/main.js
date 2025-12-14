const form = document.getElementById("sampleForm");
const result = document.getElementById("formResult");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const topicSelect = document.getElementById("topic");

    const name = nameInput?.value.trim() || "名無し";
    const topic = topicSelect?.value || "未選択";

    result.textContent = `${name} さん、${topic} を選びました。`;
  });
}

