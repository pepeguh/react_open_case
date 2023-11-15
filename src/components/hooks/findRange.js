

const findRange = (chances,rand) => {
   
    if (!Array.isArray(chances) || chances.length === 0) {
      throw new Error("invalid input");
    }
    const total = 999;
    const absoluteChances = chances.map((percentage) =>
      Math.floor((percentage / 100) * total)
    );
    const ranges = [];
    let start = 1;
    for (const absoluteChance of absoluteChances) {
      const end = start + absoluteChance - 1;
      ranges.push({ start, end });
      start = end + 1;
    }
    
    for (let i = 0; i < ranges.length; i++) {
        const range = ranges[i];
        if (rand >= range.start && rand <= range.end) {
          return i;
        }
      }
      return -1;
  };




export default findRange