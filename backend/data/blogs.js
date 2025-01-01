const blogs = [
  {
    title: "Understanding Bull and Bear Markets",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Bull and bear markets are two common phases in the stock market. A bull market signifies rising prices, investor confidence, and economic growth, often driven by strong corporate earnings or other favorable economic indicators. On the other hand, a bear market is marked by falling prices, widespread pessimism, and reduced confidence. Understanding these cycles helps investors align their strategies, making decisions that maximize profits or minimize losses. Successful navigation of these markets requires studying trends, identifying key signals, and staying informed about macroeconomic factors.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Bull markets often create opportunities for long-term investment, with tech and growth sectors historically outperforming during these phases. Conversely, bear markets might be ideal for value investing, as prices fall below their intrinsic value. Portfolio diversification and a mix of assets can help reduce risks during both phases.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "Using historical data and technical analysis is crucial for identifying trends in bull and bear markets. These insights can guide entry and exit points, ensuring that investors maximize returns and reduce exposure to risks during volatile periods.",
    category: "Market Trends",
    views: 220,
  },
  {
    title: "The Importance of Diversification in Investing",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Diversification is a fundamental principle of investing, aimed at reducing risks by spreading investments across different asset classes, industries, and geographical regions. This strategy helps mitigate the impact of poor performance in any one sector or market, as gains in other areas can offset losses. Diversification doesn’t guarantee against loss but helps create a stable and resilient portfolio over the long term.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Including a mix of stocks, bonds, and alternative investments, like real estate or commodities, can improve the performance of a diversified portfolio. Investors should consider rebalancing regularly to maintain their desired asset allocation.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "Sector-specific ETFs are a modern way to achieve diversification. These funds allow investors to gain exposure to various industries without buying individual stocks, providing an affordable way to balance risk and return.",
    category: "Investment Tips",
    views: 340,
  },
  {
    title: "Stock Market Basics: Understanding Indices",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Stock market indices, like the S&P 500, NASDAQ, and Dow Jones, represent a segment of the market and provide a benchmark to gauge overall performance. These indices are often used by investors to assess the health of the market and inform investment decisions. Each index has its unique criteria for selecting the stocks it includes.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Understanding indices helps investors identify opportunities and evaluate performance trends. For instance, growth-oriented investors often monitor tech-heavy indices like NASDAQ, while conservative investors might focus on blue-chip indices like the Dow.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "ETFs that track popular indices have made it easier for retail investors to gain exposure to broad markets, offering a cost-effective and diversified investment strategy.",
    category: "Stock Insights",
    views: 290,
  },
  {
    title: "Understanding Bull and Bear Markets",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Bull and bear markets are two common phases in the stock market. A bull market signifies rising prices, investor confidence, and economic growth, often driven by strong corporate earnings or other favorable economic indicators. On the other hand, a bear market is marked by falling prices, widespread pessimism, and reduced confidence. Understanding these cycles helps investors align their strategies, making decisions that maximize profits or minimize losses. Successful navigation of these markets requires studying trends, identifying key signals, and staying informed about macroeconomic factors.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Bull markets often create opportunities for long-term investment, with tech and growth sectors historically outperforming during these phases. Conversely, bear markets might be ideal for value investing, as prices fall below their intrinsic value. Portfolio diversification and a mix of assets can help reduce risks during both phases.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "Using historical data and technical analysis is crucial for identifying trends in bull and bear markets. These insights can guide entry and exit points, ensuring that investors maximize returns and reduce exposure to risks during volatile periods.",
    category: "Market Trends",
    views: 220,
  },
  {
    title: "The Importance of Diversification in Investing",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Diversification is a fundamental principle of investing, aimed at reducing risks by spreading investments across different asset classes, industries, and geographical regions. This strategy helps mitigate the impact of poor performance in any one sector or market, as gains in other areas can offset losses. Diversification doesn’t guarantee against loss but helps create a stable and resilient portfolio over the long term.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Including a mix of stocks, bonds, and alternative investments, like real estate or commodities, can improve the performance of a diversified portfolio. Investors should consider rebalancing regularly to maintain their desired asset allocation.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "Sector-specific ETFs are a modern way to achieve diversification. These funds allow investors to gain exposure to various industries without buying individual stocks, providing an affordable way to balance risk and return.",
    category: "Investment Tips",
    views: 340,
  },
  {
    title: "Stock Market Basics: Understanding Indices",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Stock market indices, like the S&P 500, NASDAQ, and Dow Jones, represent a segment of the market and provide a benchmark to gauge overall performance. These indices are often used by investors to assess the health of the market and inform investment decisions. Each index has its unique criteria for selecting the stocks it includes.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Understanding indices helps investors identify opportunities and evaluate performance trends. For instance, growth-oriented investors often monitor tech-heavy indices like NASDAQ, while conservative investors might focus on blue-chip indices like the Dow.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "ETFs that track popular indices have made it easier for retail investors to gain exposure to broad markets, offering a cost-effective and diversified investment strategy.",
    category: "Stock Insights",
    views: 290,
  },
  {
    title: "Understanding Bull and Bear Markets",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Bull and bear markets are two common phases in the stock market. A bull market signifies rising prices, investor confidence, and economic growth, often driven by strong corporate earnings or other favorable economic indicators. On the other hand, a bear market is marked by falling prices, widespread pessimism, and reduced confidence. Understanding these cycles helps investors align their strategies, making decisions that maximize profits or minimize losses. Successful navigation of these markets requires studying trends, identifying key signals, and staying informed about macroeconomic factors.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Bull markets often create opportunities for long-term investment, with tech and growth sectors historically outperforming during these phases. Conversely, bear markets might be ideal for value investing, as prices fall below their intrinsic value. Portfolio diversification and a mix of assets can help reduce risks during both phases.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "Using historical data and technical analysis is crucial for identifying trends in bull and bear markets. These insights can guide entry and exit points, ensuring that investors maximize returns and reduce exposure to risks during volatile periods.",
    category: "Market Trends",
    views: 220,
  },
  {
    title: "The Importance of Diversification in Investing",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Diversification is a fundamental principle of investing, aimed at reducing risks by spreading investments across different asset classes, industries, and geographical regions. This strategy helps mitigate the impact of poor performance in any one sector or market, as gains in other areas can offset losses. Diversification doesn’t guarantee against loss but helps create a stable and resilient portfolio over the long term.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Including a mix of stocks, bonds, and alternative investments, like real estate or commodities, can improve the performance of a diversified portfolio. Investors should consider rebalancing regularly to maintain their desired asset allocation.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "Sector-specific ETFs are a modern way to achieve diversification. These funds allow investors to gain exposure to various industries without buying individual stocks, providing an affordable way to balance risk and return.",
    category: "Investment Tips",
    views: 340,
  },
  {
    title: "Stock Market Basics: Understanding Indices",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Stock market indices, like the S&P 500, NASDAQ, and Dow Jones, represent a segment of the market and provide a benchmark to gauge overall performance. These indices are often used by investors to assess the health of the market and inform investment decisions. Each index has its unique criteria for selecting the stocks it includes.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Understanding indices helps investors identify opportunities and evaluate performance trends. For instance, growth-oriented investors often monitor tech-heavy indices like NASDAQ, while conservative investors might focus on blue-chip indices like the Dow.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "ETFs that track popular indices have made it easier for retail investors to gain exposure to broad markets, offering a cost-effective and diversified investment strategy.",
    category: "Stock Insights",
    views: 290,
  },
  {
    title: "Understanding Bull and Bear Markets",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Bull and bear markets are two common phases in the stock market. A bull market signifies rising prices, investor confidence, and economic growth, often driven by strong corporate earnings or other favorable economic indicators. On the other hand, a bear market is marked by falling prices, widespread pessimism, and reduced confidence. Understanding these cycles helps investors align their strategies, making decisions that maximize profits or minimize losses. Successful navigation of these markets requires studying trends, identifying key signals, and staying informed about macroeconomic factors.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Bull markets often create opportunities for long-term investment, with tech and growth sectors historically outperforming during these phases. Conversely, bear markets might be ideal for value investing, as prices fall below their intrinsic value. Portfolio diversification and a mix of assets can help reduce risks during both phases.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "Using historical data and technical analysis is crucial for identifying trends in bull and bear markets. These insights can guide entry and exit points, ensuring that investors maximize returns and reduce exposure to risks during volatile periods.",
    category: "Market Trends",
    views: 220,
  },
  {
    title: "The Importance of Diversification in Investing",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Diversification is a fundamental principle of investing, aimed at reducing risks by spreading investments across different asset classes, industries, and geographical regions. This strategy helps mitigate the impact of poor performance in any one sector or market, as gains in other areas can offset losses. Diversification doesn’t guarantee against loss but helps create a stable and resilient portfolio over the long term.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Including a mix of stocks, bonds, and alternative investments, like real estate or commodities, can improve the performance of a diversified portfolio. Investors should consider rebalancing regularly to maintain their desired asset allocation.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "Sector-specific ETFs are a modern way to achieve diversification. These funds allow investors to gain exposure to various industries without buying individual stocks, providing an affordable way to balance risk and return.",
    category: "Investment Tips",
    views: 340,
  },
  {
    title: "Stock Market Basics: Understanding Indices",
    image_1:
      "https://images.unsplash.com/photo-1467664631004-58beab1ece0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_1:
      "Stock market indices, like the S&P 500, NASDAQ, and Dow Jones, represent a segment of the market and provide a benchmark to gauge overall performance. These indices are often used by investors to assess the health of the market and inform investment decisions. Each index has its unique criteria for selecting the stocks it includes.",
    image_2:
      "https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_2:
      "Understanding indices helps investors identify opportunities and evaluate performance trends. For instance, growth-oriented investors often monitor tech-heavy indices like NASDAQ, while conservative investors might focus on blue-chip indices like the Dow.",
    image_3:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description_3:
      "ETFs that track popular indices have made it easier for retail investors to gain exposure to broad markets, offering a cost-effective and diversified investment strategy.",
    category: "Stock Insights",
    views: 290,
  },
];

export default blogs;
