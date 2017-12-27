import newHeatmap from '../../index.js'
import makeFakeSource from './fakedata.js'
import { humanTime } from '../../utils.js'


let root = document.getElementById("root")
let src = makeFakeSource(20)
let hm = newHeatmap(root, {
  width: 100,
  height: 20,
  scaleY: 0.05,
  scaleX: 1000,
  onclick: xs => xs.forEach(([t,y,id]) => console.log(id, humanTime(Date.now() - t),y)),
})

setInterval(() => {
  let next = src.next().map(({cpu, t, id}) => [t, cpu, id])
  hm.push_back(next)
}, 500)


