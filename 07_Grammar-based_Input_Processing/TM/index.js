/**
 * @param {string} text - Isi mentah dari file robots.txt
 * @returns {{ agents: Object, Sitemap: string[] }}
 */
function parseRobots(text) {
  const result = {
    agents: {},  // { [namaAgent]: { Allow: [], Disallow: [] } }
    Sitemap: []  // daftar URL sitemap
  };

  let currentAgent = null; // state: agent yang sedang aktif

  const lines = text.split(/\r?\n/);

  for (const rawLine of lines) {
    // Hapus komentar dan whitespace
    const line = rawLine.replace(/#.*$/, "").trim();
    if (!line) continue;

    // Pisahkan key:value pada tanda ':' pertama
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim().toLowerCase();
    const val = line.slice(colonIndex + 1).trim();

    switch (key) {
      case "user-agent":
        // Simpan dalam lowercase agar pengecekan di test konsisten
        currentAgent = val.toLowerCase();
        if (!result.agents[currentAgent]) {
          result.agents[currentAgent] = { Allow: [], Disallow: [] };
        }
        break;

      case "allow":
        if (currentAgent && val) {
          result.agents[currentAgent].Allow.push(val);
        }
        break;

      case "disallow":
        if (currentAgent && val) {
          result.agents[currentAgent].Disallow.push(val);
        }
        break;

      case "sitemap":
        if (val) {
          result.Sitemap.push(val);
        }
        break;

      default:
        break;
    }
  }

  return result;
}

module.exports = parseRobots;