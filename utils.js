const minute = 1000 * 60
const hour = minute * 60
const day = hour * 24


export function humanTime(dt) {
  var d = dt/day|0
  var h = (dt-d*day)/hour|0
  var m = (dt-d*day-h*hour)/minute|0

  if (d > 0) {
    return `${d}d ${h}h ago`
  }

  if (h > 0) {
    return `${h}h ${m}m ago`
  }

  return `${m}m ago`
}

export function fromHumanTime(ht) {
  var acc = 0
  var time = 0
  for(var i = 0; i < ht.length; i++) {
    switch(ht[i]) {
    case 'h':
      time += acc * hour
      acc = 0
      break
    case 'd':
      time += acc * day
      acc = 0
      break
    case 'm':
      time += acc * minute
      acc = 0
      break

    case '0': acc = acc * 10; break
    case '1': acc = acc * 10 + 1; break
    case '2': acc = acc * 10 + 2; break
    case '3': acc = acc * 10 + 3; break
    case '4': acc = acc * 10 + 4; break
    case '5': acc = acc * 10 + 5; break
    case '6': acc = acc * 10 + 6; break
    case '7': acc = acc * 10 + 7; break
    case '8': acc = acc * 10 + 8; break
    case '9': acc = acc * 10 + 9; break
    }
  }
  return time
}
