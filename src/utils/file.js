export const getFileName = (fullpath) => {
  return fullpath.split('\\').pop().split('/').pop();
}

export const fileToBase64 = (file) => {
  if (!file) {
    return null;
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}

