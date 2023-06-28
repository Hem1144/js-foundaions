/* eslint-disable no-unused-vars */
function renameFiles(files) {
  const renamedFiles = [];
  const fileCounts = {};

  for (const file of files) {
    if (renamedFiles.includes(file)) {
      let count = fileCounts[file] || 1;
      console.log(count);
      let newName = `${file}(${count})`;

      while (renamedFiles.includes(newName)) {
        count++;
        newName = `${file}(${count})`;
      }

      renamedFiles.push(newName);
      fileCounts[file] = count + 1;
    } else {
      renamedFiles.push(file);
    }
  }

  return renamedFiles;
}
renameFiles(["a(1)", "a(6)", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]);
