const scriptURL = "https://script.google.com/macros/s/AKfycbztr1qexZoP00RKeNT4GvDDBbgW4xiLXIUMp6jRxZVWk3Hrz9_AKHegFS1EK3RQqvVdbg/exec";

const form = document.getElementById("orderForm");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form)
  })
  .then(() => {
    alert("Pesanan berhasil dikirim!");
    form.reset();
  })
  .catch(() => {
    alert("Gagal mengirim pesanan!");
  });
});