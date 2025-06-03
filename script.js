document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.getElementById("continueBtn");
  const buyNowBtn = document.getElementById("buyNowBtn");
  const cheatSelector = document.getElementById("cheatSelector");
  const keySelector = document.getElementById("keySelector");

  continueBtn.addEventListener("click", () => {
    const selectedCheat = cheatSelector.value;
    if (!selectedCheat) {
      alert("Please select a product!");
      return;
    }

    document.getElementById("mainScreen").style.display = "none";
    document.getElementById("cheatScreen").style.display = "block";

    const title = document.getElementById("cheatTitle");
    const image = document.getElementById("cheatImage");

    keySelector.style.display = "block";
    keySelector.innerHTML = "";

    if (selectedCheat === "fortnite") {
      title.textContent = "🛡️ Ph4ze (Fortnite)";
      image.src = "https://upload.wikimedia.org/wikipedia/en/0/08/Fortnite_%28video_game%29.jpg";
      keySelector.innerHTML = `
        <option value="">-- Select Key --</option>
        <option value="9">Day Key - $9 AUD</option>
        <option value="16">Week Key - $16 AUD</option>
        <option value="35">Month Key - $35 AUD</option>
      `;
    } else if (selectedCheat === "cs2") {
      title.textContent = "🔫 Eknode (CS2)";
      image.src = "https://upload.wikimedia.org/wikipedia/en/1/1f/Counter-Strike_2_cover.jpg";
      keySelector.innerHTML = `
        <option value="">-- Select Key --</option>
        <option value="7">Day Key - $7 AUD</option>
        <option value="13">Week Key - $13 AUD</option>
        <option value="28">Month Key - $28 AUD</option>
      `;
    } else if (selectedCheat === "siege") {
      title.textContent = "🕵️ RuntClient (Siege)";
      image.src = "https://upload.wikimedia.org/wikipedia/en/6/61/Rainbow_Six_Siege_cover_art.jpg";
      keySelector.innerHTML = `
        <option value="">-- Select Key --</option>
        <option value="8.65">Day Key - $8.65 AUD</option>
        <option value="15">Week Key - $15 AUD</option>
        <option value="32">Month Key - $32 AUD</option>
      `;
    } else if (selectedCheat === "pandanet") {
      title.textContent = "🐼 PandaNet (Botnet)";
      image.src = "https://cdn-icons-png.flaticon.com/512/616/616408.png";
      keySelector.style.display = "none";
    }
  });

  buyNowBtn.addEventListener("click", () => {
    const selected = cheatSelector.value;
    if (selected !== "pandanet") {
      const key = keySelector.value;
      if (!key) {
        alert("Please select a key duration!");
        return;
      }
    }
    window.location.href = "https://discord.gg/VdvkQK4wuG";
  });
});
