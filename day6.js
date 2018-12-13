const testInput = [
  { x: 1, y: 1 },
  { x: 1, y: 6 },
  { x: 8, y: 3 },
  { x: 3, y: 4 },
  { x: 5, y: 5 },
  { x: 8, y: 9 }
];

const input = [
  {x: 292, y: 73},
  {x: 204, y: 176},
  {x: 106, y: 197},
  {x: 155, y: 265},
  {x: 195, y: 59},
  {x: 185, y: 136},
  {x: 54, y: 82},
  {x: 209, y: 149},
  {x: 298, y: 209},
  {x: 274, y: 157},
  {x: 349, y: 196},
  {x: 168, y: 353},
  {x: 193, y: 129},
  {x: 94, y: 137},
  {x: 177, y: 143},
  {x: 196, y: 357},
  {x: 272, y: 312},
  {x: 351, y: 340},
  {x: 253, y: 115},
  {x: 109, y: 183},
  {x: 252, y: 232},
  {x: 193, y: 258},
  {x: 242, y: 151},
  {x: 220, y: 345},
  {x: 336, y: 348},
  {x: 196, y: 203},
  {x: 122, y: 245},
  {x: 265, y: 189},
  {x: 124, y: 57},
  {x: 276, y: 204},
  {x: 309, y: 125},
  {x: 46, y: 324},
  {x: 345, y: 228},
  {x: 251, y: 134},
  {x: 231, y: 117},
  {x: 88, y: 112},
  {x: 256, y: 229},
  {x: 49, y: 201},
  {x: 142, y: 108},
  {x: 150, y: 337},
  {x: 134, y: 109},
  {x: 288, y: 67},
  {x: 297, y: 231},
  {x: 310, y: 131},
  {x: 208, y: 255},
  {x: 246, y: 132},
  {x: 232, y: 45},
  {x: 356, y: 93},
  {x: 356, y: 207},
  {x: 83, y: 97}
];

function findExtent (arr) {
  return arr.reduce((acc, {x, y}) => {
    acc.max.x = acc.max.x < x ? x : acc.max.x;
    acc.max.y = acc.max.y < y ? y : acc.max.y;
    acc.min.x = acc.min.x > x ? x : acc.min.x;
    acc.min.y = acc.min.y > y ? y : acc.min.y;
    return acc;
  }, { max: { x: Number.MIN_SAFE_INTEGER, y: Number.MIN_SAFE_INTEGER }, min: { x: Number.MAX_SAFE_INTEGER, y: Number.MAX_SAFE_INTEGER }});
}

function buildExtent(extent) {
  return Array.from({length: extent.max.y - extent.min.y +1 }, (() => Array.from({length: extent.max.x - extent.min.x + 1}, (() => undefined))));
}

function calcManhattan ( a, b ) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function markArea(extent, arr) {
  const area = buildExtent(extent);

  area.forEach((row, y) => {
    row.forEach((block, x) => {
      const c = {
        x: x + extent.min.x,
        y: y + extent.min.y
      }
      let mark = undefined;
      let marks = 0;
      let distance = Number.MAX_SAFE_INTEGER;
      arr.forEach((coord, index) => {
        const dist = calcManhattan(c, coord);
        if (dist < distance) {
          distance = dist;
          marks = 1;
          mark = index;
        } else if (dist === distance) {
          marks++;
          mark = -1;
        }
      })

      area[y][x] = mark;
    });
  });
  return area;
}

function countMarks(area) {
  const acc = {};
  let mark;
  for (y = 1; y < area.length -1; y++) {
    for (x = 1; x < area[y].length -1; x++) {
      mark = area[y][x];
      acc[mark] = (acc[mark] || 0) + 1;
    }
  };
  return acc;
}

function zeroBordersAndShared(area, counts) { // Side Effect
  sx = area[0].length;
  sy = area.length;

  for(x = 0; x < sx; x++) {
    counts[area[0][x]] = 0;
    counts[area[sy-1][x]] = 0;
  }
  for(y = 1; y < sy - 1; y++) {
    counts[area[y][0]] = 0;
    counts[area[y][sx-1]] = 0;
  }
  counts[-1] = 0;
  return counts;
}

function part1(arr) {
  const extent = findExtent(arr);
  const markedArea = markArea(extent, arr);
  const counts = countMarks(markedArea);
  const finiteCounts = zeroBordersAndShared(markedArea, counts);
  let max = Number.MIN_SAFE_INTEGER;
  for (key in finiteCounts) {
    max = Math.max(max, finiteCounts[key])
  }
  return max;
};

function part2(arr) {
};

console.log(part1(testInput));
console.log(part1(input));

// console.log(part2(testInput));
// console.log(part2(input));
