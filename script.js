
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = form.querySelectorAll("input, select, textarea");
    let details = [];

    fields.forEach(function (field) {
      if (["submit", "button", "hidden"].includes(field.type)) return;
      if (!field.value.trim()) return;

      const label =
        field.labels?.[0]?.innerText ||
        field.placeholder ||
        field.name ||
        "Details";

      details.push(label.trim() + ": " + field.value.trim());
    });

    const subject = encodeURIComponent("Website Contact Form");
    const body = encodeURIComponent(details.join("\n\n"));

    window.location.href =
      "mailto:saurabhkr5417@gmail.com?subject=" +
      subject + "&body=" + body;
  });
});
