function shortenUrl() {
  const input = document.getElementById("wcaUrl").value.trim();
  const base = "https://www.worldcubeassociation.org/persons/";
  const shortBase = "https://wca.link/";
  const resultDiv = document.getElementById("result");

  if (input.startsWith(base)) {
    const wcaId = input.replace(base, "").replace(/\/+$/, "");
    const shortUrl = shortBase + wcaId;
    const htmlLink = `<a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
    const markdownLink = `[${shortUrl}](${shortUrl})`;

    resultDiv.innerHTML = `
      <div class="output-box">
        <strong>Shortened URL (Clickable)</strong>
        <code><a href="${shortUrl}" target="_blank">${shortUrl}</a></code>
        <br><button class="copy-btn" onclick="copyToClipboard('${shortUrl}', this)">Copy</button>
      </div>
      <div class="output-box">
        <strong>Plain Text</strong>
        <code>${shortUrl}</code>
        <br><button class="copy-btn" onclick="copyToClipboard('${shortUrl}', this)">Copy</button>
      </div>
      <div class="output-box">
        <strong>HTML</strong>
        <code>${escapeHtml(htmlLink)}</code>
        <br><button class="copy-btn" onclick="copyToClipboard('${escapeHtml(htmlLink)}', this)">Copy</button>
      </div>
      <div class="output-box">
        <strong>Markdown</strong>
        <code>${markdownLink}</code>
        <br><button class="copy-btn" onclick="copyToClipboard('${markdownLink}', this)">Copy</button>
      </div>
    `;
  } else {
    resultDiv.innerHTML = "❌ Please enter a valid WCA profile URL.";
  }
}

function copyToClipboard(text, buttonElement) {
  navigator.clipboard.writeText(text).then(() => {
    if (buttonElement) {
      const originalText = buttonElement.textContent;
      buttonElement.textContent = "Copied!";
      buttonElement.disabled = true;

      setTimeout(() => {
        buttonElement.textContent = originalText;
        buttonElement.disabled = false;
      }, 1500);
    }
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}

// Escapes special characters for HTML output
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
