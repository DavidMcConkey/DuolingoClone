export const range = (lo: number, hi: number): number[] => {
    const res = Array<number>(hi - lo);
    for(let i = 0; i < hi; i++) {
        res[i - lo] = i;
    }
    return res;
};

export const sum = (numbers: number[]): number => {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  };
