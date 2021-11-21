// 1
const readline = require('readline')

;(async () => {
  let rl = readline.createInterface({ input: process.stdin })

  for await (const line of rl) {
    let n = 0
    for (let i = 1; i <= line; i++) n += i

    console.log(n)
    rl.close()
  }

  process.exit()
})()

// 2
const readline = require('readline')

;(async () => {
  let rl = readline.createInterface({ input: process.stdin })

  for await (const line of rl) {
    let a = (line + '')
      .split('')
      .map(Number)
      .sort((a, b) => b - a)
    console.log(a[0])

    rl.close()
  }

  process.exit()
})()

// 3
const readline = require('readline')

;(async () => {
  let rl = readline.createInterface({ input: process.stdin })
  let n = 0
  for await (const line of rl) {
    let a = []
    let b = 0
    for (let i = 1; i <= 60; i++) a.push(i)

    for (let c = 1; c < line * 60 * 60; c += 60) {
      for (let s = 0; s < 60; s++) {
        if (a[s] === 3) b += 1
        else if (a[s] === 33) b += 2
      }
    }
    console.log(b)
    rl.close()
  }

  process.exit()
})()

123
