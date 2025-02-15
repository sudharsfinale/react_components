const StockMarketTraining = () => {
  return (
    <div className="bg-[#0D1B2A] text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">
        Who Can Make the <br /> Most of Our Stock Market Training?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="h-16 mb-4 flex items-center justify-center">
            <img src="/icon1.svg" />
          </div>
          <h3 className="text-green-400 font-semibold text-lg mb-2">
            Beginners in The Stock Market
          </h3>
          <p className="text-gray-300">
            You are new to the stock market and you have never traded before are
            interested in learning.
          </p>
        </div>
        <div className="text-center">
          <div className="h-16 mb-4 flex items-center justify-center">
            <img src="/icon2.svg" />
          </div>
          <h3 className="text-green-400 font-semibold text-lg mb-2">
            Job Seekers
          </h3>
          <p className="text-gray-300">
            You have tried your hands on trading and investing but you have not
            gotten the expected results.
          </p>
        </div>
        <div className="text-center">
          <div className="h-16 mb-4 flex items-center justify-center">
            <img src="/icon3.svg" />
          </div>
          <h3 className="text-green-400 font-semibold text-lg mb-2">
            Investors Looking At Getting Results
          </h3>
          <p className="text-gray-300">
            You are looking to start a career in the stock market or planning to
            become a stock trader.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StockMarketTraining;
