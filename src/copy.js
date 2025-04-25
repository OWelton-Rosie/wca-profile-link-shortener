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