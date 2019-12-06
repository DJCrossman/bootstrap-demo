const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

// const summation = n => n * (n + 1) / 2;


function numberToPower(number,power)
{
  if (power === 0)
    return 1;
  var total = number;
  for (var loop = 1; loop < power; loop ++)
    total = total*number;

  return total;
}
const assetEquals = (callback, p,q, a) => callback(p,q) === a

app.get('', (req, res) => {
  const problems = []
  let numberToPowerValues = [
    { value1: 3,value2:2, answer: 9 },
    { value1: 2,value2:3, answer: 8},
    { value1: 10,value2:6, answer: 1000000}

  ]

  let numberToPowerTests = numberToPowerValues.map(t => ({...t, passed: assetEquals(numberToPower,t.value1,t.value2, t.answer)}))
  problems.push({
    name: 'Grasshopper - power',
    method: 'numberToPower',
    link: 'codewars.com/kata/562926c855ca9fdc4800005b',
    tests: numberToPowerTests,
    passed: !numberToPowerTests.some(t => !t.passed)
  })
  res.render('index', {
    problems
  })
})

app.listen(port, () => console.log(`http://localhost:${port}`))