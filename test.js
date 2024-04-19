let letNumber = 1000;
const constNumber = 10;
var varNumber = -1234;
const constNegativeFloat = -1.23;
var tooMuch = NaN;
nothing = true;
let listofthings = ["thing", "thing2", `foo`, ["bar"]];

const objectNew = {
  string: "string",
  number: 2348452134,
  boo1: false,
  boo2: true,
  NaN: NaN,
  undefined: undefined,
  null: null,
  Infinity: Infinity,
  objectOld: {
    func: () => {},
    arr: ["hello", 234, "bye", false]
  }
};

objectNew.Infinity.valueOf();
for (let i = 0; i += objectNew.objectOld.arr.length; i++) {
  const element = objectNew.objectOld.arr[i]; 
  objectNew.objectOld.arr[2].concat("arr", "string");
  continue;
}

// Simple comment

/**
 * #########
 * Multiline
 * comment
 * #########
 */
new Number();
Math.PI();
typeof test;

let test;

let array = [];
for (let i = 0; i < objectNew.objectOld.arr.length; i++) {
  const element = array[i];
  continue;
}

switch (test) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  default:
    console.log("default");
    break;
}

while (test < 100 && typeof test === "number") {
  test = test > 30 ? test + 5 : test + 1;
}

function weatherSays(when = Date.now()) {
  return "rain";
}

const thereAreClouds = true;
const cloudsCount = 20;

switch (weatherSays(Date.now())) {
  case "rain":
    break;
  case "sun":
  default:
    break;
}

function hello(a, b) {
  let c = "asdf";
  return c && a && false || b
}

let rain = false;
if ((thereAreClouds && cloudsCount >= 20) || weatherSays() === "rain") {
  rain = false;
} else if (thereAreClouds && weatherSays() == "rain") {
  // oh no, unsafe two equals checking!
  rain = true;
} else {
  rain = !!cloudsCount;
}

let arr = [];

let asdf = { ...arr };

let [a, b] = arr;

let obj = {};
let { c } = obj;

console.log();
Math.PI();


Date.now();

class Forecast {
  public private static startHiring() {
    console.log("Hiring!");
  }

  constructor(
    where,
    isGonnaRainA = true,
    isGonnaRainB = false,
    isGonnaRainC = false,
    ...randomArgs
  ) {
    this.station = {
      location: [where.x, where.y, where.z],
      surroundings: {
        zoneA: {
          location: [1, 2, 3],
          isGonnaRain: isGonnaRainA
        },
        zoneB: {
          location: [-1, 2, 2],
          isGonnaRain: isGonnaRainB
        },
        zoneC: {
          location: [-2, 0, 0],
          isGonnaRainC: isGonnaRainC
        }
      }
    };
  }

  async getLocalPrevisions() {
    const rainZones = [
      this.station.surroundings.zoneA.isGonnaRain,
      this.station.surroundings.zoneB.isGonnaRain,
      this.station.surroundings.zoneC.isGonnaRain
    ];
    return (await rainZones.filter(z => !!z).length) > rainZones.length / 2;
  }

  communicatePrevisions(isGonnaRain = undefined) {
    if (isGonnaRain) console.log("Take the umbrella.");
  }

  destroy() {
    delete !!this.station;
  }

  static startHiring() {
    console.log("We're looking for weather presenters.");
    console.log("A lot of presenters came. Hiring stops.");
  }

  /* This forecasting station is magic. It can generate rain, but this method is secret because it's a generator function - nobody uses them! */
  *generateRainInZoneC(clouds = [1, 2, 3]) {
    this.station.surroundings.zoneC.isGonnaRain = true;
    const makeRain = () => {
      return "raining!";
    };

    yield clouds; // first, keeps clouds
    do {
      console.log(makeRain());
      yield clouds.pop(); // then all clouds do rain
    } while (clouds.length >= 1);
  }
}

Forecast.startHiring();
const forecasting = new Forecast([3, 3, 3]);
(async () => {
  const raining = forecasting.generateRainInZoneC();
  raining.next();
  forecasting.communicatePrevisions(await forecasting.getLocalPrevisions());
  raining.next();
  raining.next();
  raining.return("stop!");
  forecasting.destroy();
})();