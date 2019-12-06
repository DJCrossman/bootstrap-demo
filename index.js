const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

const summation = n => n * (n + 1) / 2;
const assetEquals = (callback, q, a) => callback(q) === a

app.get('', (req, res) => {
  const problems = []
  let summationValues = [
    { value: 1, answer: 1},
    { value: 8, answer: 36},
    { value: 22, answer: 253},
    { value: 100, answer: 5050},
    { value: 213, answer: 22791}
  ]
  let summationTests = summationValues.map(t => ({...t, passed: assetEquals(summation, t.value, t.answer)}))
  problems.push({
    name: 'Grasshopper - Summation',
    method: 'summation',
    link: 'https://www.codewars.com/kata/grasshopper-summation',
    tests: summationTests,
    passed: !summationTests.some(t => !t.passed)
  })

const powerEquals = (callback, ...q, a) => callback(q) === a

function numberToPower(number,power)
{
  if (power === 0)
    return 1;
  var total = number;
  for (var loop = 1; loop < power; loop ++)
    total = total*number;

  return total;
}

app.get('', (req, res) => {
  const problems = []
  let numberToPowerValues = [
    { value: (3,2), answer: 9 },
    { value: (2,3), answer: 8},
    { value: (10,6), answer: 1000000}

  ]

  let numberToPowerTests = numberToPowerValues.map(t => ({...t, passed: powerEquals(numberToPower,t.value, t.answer)}))
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