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
    <button class="chat-toggle" type="button">Request Care</button>

    <div class="chat-panel" id="chatPanel">
      <h3>Request Appointment Availability</h3>
      <p>Tell us what you need help with and our team will follow up.</p>

      <form name="chat-intake" method="POST" data-netlify="true" action="thank-you.html">
        <input type="hidden" name="form-name" value="chat-intake">

        <select name="service_interest" required>
          <option value="">What do you need help with?</option>
          <option>Auto Accident Injury</option>
          <option>Whiplash</option>
          <option>Back Pain</option>
          <option>Neck Pain</option>
          <option>Physical Therapy</option>
          <option>Sports Injury Recovery</option>
          <option>Headaches / Migraines</option>
          <option>Wellness Chiropractic Care</option>
          <option>Other</option>
        </select>

        <input type="text" name="name" placeholder="Full Name" required>
        <input type="tel" name="phone" placeholder="Phone Number" required>
        <input type="email" name="email" placeholder="Email Address" required>

        <textarea name="message" placeholder="Briefly tell us what is going on"></textarea>

        <label class="consent">
          <input type="checkbox" name="sms_consent" value="Yes" required>
          I agree to be contacted by phone, text, or email regarding my appointment request.
        </label>

        <button class="btn primary" type="submit">Request Availability</button>

        <small>If this is a medical emergency, call 911 immediately.</small>
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
