let prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {
    let maxProfit = 0;
    let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
          minPrice = prices[i];
      } else if(prices[i]- minPrice > maxProfit) {
          maxProfit = prices[i] - minPrice;
      }
  }

  return maxProfit;
};

console.log(maxProfit(prices));
