//----------
// Variables
//----------
const videoList = document.querySelectorAll('[data-time]');
let timeArray = [],
  totalSeconds = 0,
  hours = 0,
  minutes = 0,
  seconds = 0;

//----------
// Functions
//----------

videoList.forEach((video) =>
  timeArray.push(
    parseInt(video.dataset.time.split(':')[0]) * 60 +
      parseInt(video.dataset.time.split(':')[1])
  )
);

totalSeconds = timeArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

hours = Math.floor(totalSeconds / 3600);
minutes = Math.floor((totalSeconds - hours * 3600) / 60);
seconds = totalSeconds % 60;

console.log(`${hours}:${minutes}:${seconds}`);
