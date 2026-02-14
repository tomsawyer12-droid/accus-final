
try {
  const icons = require('lucide-react');
  console.log('TikTok exists:', 'TikTok' in icons);
  console.log('Tiktok exists:', 'Tiktok' in icons); // Check capitalization
  console.log('Video exists:', 'Video' in icons); // Fallback
} catch (e) {
  console.error('Error:', e.message);
}
