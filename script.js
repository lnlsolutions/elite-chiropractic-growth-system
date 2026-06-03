function toggleMenu() {
  const nav = document.getElementById("mainNav");
  if (nav) {
    nav.classList.toggle("open");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const widget = document.createElement("div");
  widget.className = "chat-widget";

  widget.innerHTML = `
    <button class="chat-toggle" type="button">Need Help?</button>
    <div class="chat-panel" id="chatPanel">
      <h3>How can we help?</h3>

      <form name="chat-intake" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="chat-intake">

        <select name="service_interest" required>
          <option value="">Select concern</option>
          <option>Auto Accident Injury</option>
          <option>Back Pain</option>
          <option>Neck Pain</option>
          <option>Whiplash</option>
          <option>Physical Therapy</option>
          <option>Sports Injury</option>
          <option>Wellness Adjustment</option>
        </select>

        <input type="text" name="name" placeholder="Full Name" required>
        <input type="tel" name="phone" placeholder="Phone Number" required>
        <input type="email" name="email" placeholder="Email Address" required>

        <button type="submit">Send Request</button>
      </form>
    </div>
  `;

  document.body.appendChild(widget);

  const toggle = widget.querySelector(".chat-toggle");
  const panel = widget.querySelector("#chatPanel");

  toggle.addEventListener("click", function () {
    panel.classList.toggle("open");
  });
});
