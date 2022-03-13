const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[3-3];
  }
  else if (strokes == 2) {
    return names[3-2];
  }
  else if (strokes == 3) {
    return names[3-1];
  }
  else if (strokes == par) {
    return names[3];
  }
  else if(strokes == 5) {
    return names[3+1];
  }
  else if(strokes == 6) {
    return names[3+2];
  }
  else if(strokes == 7) {
    return names[3+3];
  }
  else if(strokes > 7) {
    return names[3+3];
  }
  return "Change Me";
}

golfScore(5, 4);
