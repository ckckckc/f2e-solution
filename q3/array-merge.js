function isOverLap(interval, pattern) {
  return !(interval[0] > pattern[1] || interval[1] < pattern[0]);
}

module.exports = (intervals, pattern) => {
  if (!Array.isArray(intervals) && !Array.isArray(pattern)) {
    throw new Error('intervals and pattern must be array');
  }

  let output = [],
      min    = pattern[0],
      max    = pattern[1];
      
  
  if (intervals[0][0] > max) {
    output = intervals;
    output.unshift(pattern);
    return output;
  } else if (intervals[intervals.length - 1][1] < min) {
    output = intervals;
    output.push(pattern);
    return output;
  }

  for (let interval ; intervals[0] ; ) {
    interval = intervals.shift();

    if (isOverLap(interval, pattern)) merge:{
      let overlapMin = Math.min(interval[0], min),
          overlapMax;
    
      while (interval[1] < max && intervals[0]) {
        interval = intervals.shift();
    
        if (interval[0] > max) {
          overlapMax = max;
          output.push([overlapMin, max]);
          output.push(interval);
          break merge;
        }
      }
      overlapMax = Math.max(interval[1], max);
      output.push([overlapMin, overlapMax]);
    }  
    else if (interval[1] < min && intervals[0][0] > max) {
      output.push(interval);
      output.push(pattern);
    }
    else {
      output.push(interval);
    }
  }

  return output;
};