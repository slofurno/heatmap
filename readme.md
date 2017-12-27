
- performant canvas heatmap
- rank-based color saturation
- supports both historical and streaming data

![](https://raw.githubusercontent.com/slofurno/heatmap/master/heatmap.png)


### usage

```javascript
  let hm = newHeatmap(document.getElementById("hm"), {
    width: 172,
    height: 40,
    scaleY: 1000,
    scaleX: 1000*60*60,
    onmousemove: xs => xs.forEach(([t,y,p]) => console.log(t,y,p)),
  })

  hm.push_back([
    [Date.now() - 3000, 1000, "point 1"],
    [Date.now() - 2000, 2000, "point 2"],
    [Date.now() - 1000, 3000, "point 3"],
  ])
```

