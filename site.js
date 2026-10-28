(function () {
  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.querySelector("[data-mobile-menu]");

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    menu.hidden = !open;
    menu.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
  }

  var revealNodes = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.2 });
    revealNodes.forEach(function (node) { revealObserver.observe(node); });

    var words = document.querySelectorAll("[data-word]");
    var wordObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-on");
        wordObserver.unobserve(entry.target);
      });
    }, { rootMargin: "-42% 0px -42% 0px", threshold: 0.5 });
    words.forEach(function (word) { wordObserver.observe(word); });
  } else {
    revealNodes.forEach(function (node) { node.classList.add("is-in"); });
    document.querySelectorAll("[data-word]").forEach(function (word) {
      word.classList.add("is-on");
    });
  }

  document.querySelectorAll("[data-skel]").forEach(function (skel) {
    var img = skel.parentElement.querySelector("img");
    if (!img) return;
    function clear() { skel.classList.add("is-gone"); }
    if (img.complete) clear();
    else img.addEventListener("load", clear);
    img.addEventListener("error", clear);
  });

  var form = document.querySelector("[data-brief]");
  if (!form) return;
  var nameInput = form.querySelector("[name=name]");
  var emailInput = form.querySelector("[name=email]");
  var noteInput = form.querySelector("[name=note]");
  var nameError = form.querySelector("[data-error=name]");
  var emailError = form.querySelector("[data-error=email]");
  var noteError = form.querySelector("[data-error=note]");
  var status = form.querySelector("[data-status]");
  var submit = form.querySelector("[type=submit]");

  function showError(node, on) {
    node.classList.toggle("is-on", on);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var note = noteInput.value.trim();
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    showError(nameError, name.length === 0);
    showError(emailError, !emailOk);
    showError(noteError, note.length === 0);
    status.textContent = "";
    if (!name || !emailOk || !note) return;

    submit.disabled = true;
    submit.setAttribute("aria-busy", "true");
    submit.textContent = "Opening mail";
    var subject = "Project brief from " + name;
    var body = note + "\n\nFrom: " + name + "\nEmail: " + email;
    var href = "mailto:rangolee302@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = href;
    status.textContent = "Mail draft opened for rangolee302@gmail.com. Close it if you are not ready to send.";
    submit.disabled = false;
    submit.removeAttribute("aria-busy");
    submit.textContent = "Email about a project";
  });
})();
