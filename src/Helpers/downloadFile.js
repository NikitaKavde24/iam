/**
 * Notes:
 *
 * FilePath: Mention the file url path
 * Type: refer the below link for passing correct mime type as a parameter
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 *
 */

export function downloadFile(filePath, type) {
  if (!filePath || !type) {
    return;
  }
  var link = document.createElement('a');
  var file = new Blob([filePath], { type });

  link.href = URL.createObjectURL(file);
  // removing query parameters if any
  const absoluteFilePath = `${filePath}`.split('?')[0];
  link.download = absoluteFilePath.substring(
    absoluteFilePath.lastIndexOf('/') + 1
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
