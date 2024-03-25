export function rating(a: number, b: number) {
  return 1 / (
    1 + Math.pow(10, (b - a) / 400)
  );
}

export enum RESULTS {
  WIN = 1,
  LOSE = 0,
  DRAW = 1/2
}

export function newRating(oldRating: number, actualScore: number, expectedScore: number, K = 32) {
  return oldRating + K * (actualScore - expectedScore);
}