function fetchBitcoinPrice() {
    const binanceApiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
  
    $.getJSON(binanceApiUrl, function (data) {
      const btcValue = parseFloat(data.price).toFixed(2);
      $('#btcValue').text(`$${btcValue}`);
    }).fail(function () {
      $('#btcValue').text('Error fetching data. Please try again later.');
    });
  }
  
  // Fetch Bitcoin price on page load
  fetchBitcoinPrice();
  
  // Update Bitcoin price every minute
  setInterval(fetchBitcoinPrice, 60 * 1000);
  