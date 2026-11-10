// Monthly / yearly switch on the pricing cards: swaps each [data-m]/[data-y] text.
document.querySelectorAll(".billing").forEach(function (group) {
  group.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-period]");
    if (!btn) return;
    var period = btn.dataset.period;
    group.querySelectorAll("button[data-period]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b === btn));
    });
    document.querySelectorAll("[data-m][data-y]").forEach(function (el) {
      el.textContent = el.dataset[period];
    });
  });
});
