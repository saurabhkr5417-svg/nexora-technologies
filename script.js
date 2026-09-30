
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.elements.namedItem("name").value.trim();
    const email = form.elements.namedItem("email").value.trim();
    const service = form.elements.namedItem("service").value;
    const details = form.elements.namedItem("details").value.trim();

    const subject = encodeURIComponent("Website Contact Form");
    const body = encodeURIComponent(
      "Full name: " + name + "\n" +
      "Email address: " + email + "\n" +
      "Service required: " + service + "\n" +
      "Project details: " + details
    );

    window.location.href =
      "mailto:saurabhkr5417@gmail.com?subject=" +
      subject + "&body=" + body;
  });
});
