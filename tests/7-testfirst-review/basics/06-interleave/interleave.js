function interleave(...strings) {
  const maxLength = strings.reduce((max, str) => Math.max(max, str.length), 0);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    for (const str of strings) {
      result += str[i] || "";
    }
  }

  return result;
}
