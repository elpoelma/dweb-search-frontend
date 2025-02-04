const mime = require('mime/lite');

// Howler (audio player) requires the following extensions:
// "mp3", "mpeg", "opus", "ogg", "oga", "wav", "aac", "caf", "m4a", "m4b",
// "mp4", "weba", "webm", "dolby", "flac"
//
// Hence, we override 'audio/mpeg' to mp3 (defaults to mpga).
//
// Legacy types, for reference (they might turn out to need overriding as well).
// const mimetypeMap = {
//   'audio/mpeg': 'mp3',
//   'audio/mp3': 'mp3',
//   'audio/vorbis': 'ogg',
//   'audio/mp4': 'mp4',
//   'video/mp4': 'mp4',
//   'audio/aac': 'aac',
//   'audio/opus': 'opus',
//   'audio/wav': 'wav',
//   'audio/vnd.wave': 'wav',
//   'application/pdf': 'pdf',
//   'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
//   // omitting weba and webm because they have the same mimetype
// };

mime.define({
  'audio/mpeg': ['mp3'],
}, true);

/**
 * Get file extension based on mimetype, or if inconclusive, the references of the file.
 * If no extension is found, returns an empty string.
 * @param file
 * @returns {string|string|*}
 */
export function getFileExtension(file) {
  // Mimetype is leading
  if (file.mimetype) {
    const ext = mime.getExtension(file.mimetype);
    if (ext) return ext;
  }

  const filename = file.references?.[0]?.name;
  if (filename) {
    // Get filename extension, dealing with edge cases
    // https://www.jstips.co/en/javascript/get-file-extension/
    /* eslint no-bitwise: ["error", { "allow": [">>>"] }] */
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
  }

  return '';
}

export default {
  getFileExtension,
};
