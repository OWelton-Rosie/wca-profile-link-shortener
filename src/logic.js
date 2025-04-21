function shortenUrl() {
    const input = document.getElementById("wcaUrl").value.trim();
    const base = "https://www.worldcubeassociation.org/persons/";
    const shortBase = "https://wca.link/";
    const resultDiv = document.getElementById("result");

    if (input.startsWith(base)) {
      const wcaId = input.replace(base, "").replace(/\/+$/, "");
      const shortUrl = shortBase + wcaId;
      resultDiv.innerHTML = `
        Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>
        <br/><button class="copy-btn" onclick="copyToClipboard('${shortUrl}')">Copy</button>
      `;
    } else {
      resultDiv.innerHTML = "❌ Please enter a valid WCA profile URL.";
    }
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("Copied to clipboard!");
    }).catch(err => {
      showToast("Failed to copy.");
    });
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }
