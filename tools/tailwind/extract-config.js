// Mengambil konfigurasi Tailwind dari halaman (sumber: hasil Stitch) dan menulisnya sebagai file konfigurasi.
const fs = require('fs');
function grab(file) {
  const html = fs.readFileSync(file, 'utf8');
  const m = html.match(/<script[^>]*>\s*(tailwind\.config\s*=[\s\S]*?)<\/script>/);
  if (!m) throw new Error('config tidak ditemukan di ' + file);
  const tailwind = {}; eval(m[1]);
  return tailwind.config;
}
const out = (name, cfg, content) => fs.writeFileSync(name,
  'module.exports = ' + JSON.stringify({ ...cfg, content }, null, 2) + ';\n');
out('tailwind.public.config.js', grab('../../index.html'), ['../../*.html', '../../assets/js/*.js']);
out('tailwind.admin.config.js', grab('../../admin/dashboard.html'), ['../../admin/*.html', '../../assets/js/*.js']);
console.log('ok');
