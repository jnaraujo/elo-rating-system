import { describe, expect, test } from "vitest"
import { RESULTS, newRating, rating } from "./elo.js"

describe("Elo Rating System", () => {
  test("rating", () => {
    expect(rating(1500, 1200)).toBeCloseTo(0.849)
    expect(rating(1200, 1500)).toBeCloseTo(0.151)
  })

  test("new rating", () => {
    expect(newRating(1500, RESULTS.WIN, 0.849)).toBeCloseTo(1504.832)
    expect(newRating(1200, RESULTS.LOSE, 0.151)).toBeCloseTo(1195.168)
  })

  test("list of matches", () => {
    const A_RATING = 1613
    expect(newRating(A_RATING,
      sum([
        RESULTS.LOSE, RESULTS.DRAW, RESULTS.WIN, RESULTS.WIN, RESULTS.LOSE
      ]),
      sum([
        rating(A_RATING, 1609), rating(A_RATING, 1477), rating(A_RATING, 1388), rating(A_RATING, 1586), rating(A_RATING, 1720)
      ])
    )).toBeCloseTo(1601.269)
  })
})

function sum(arr: Array<number>) {
  return arr.reduce((acc, curr) => acc + curr, 0)
}