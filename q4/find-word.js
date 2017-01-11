module.exports = (grid, word) => {
  if (!Array.isArray(grid) && typeof word !== 'string') {
    throw new Error('grid must be array and word must be string');
  }

  let db = [];

  for (let i = 0, len = grid.length ; i < len ; i++) {
    db = db.concat(grid[i]);
  }
  
  for (let i = 0, len = word.length, index ; i < len ; i++) {
    index = db.indexOf(word[i]);
    if (index === -1) {
      return false;
    }
    db.splice(index, 1);
  }

  return true;
};