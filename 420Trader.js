//trader.say("looks like a bull market");

 //old floor average trend, peak detector, trend ahead of other exchanges 
 //long and short trade stratagy ? tradesanta has these 
 //volatile market like bitcoin or slow market like dogecoin 

//if increasing from the daily low and is close to the high still 
//increasing volume could mean to sell at the high (pump detector)
//if 10 min volume is going up then put sell order at the top when volume decreases for a period of time?

//old floor average trend, peak detector, trend ahead of other exchanges
  //             -----   ~~~Store this value as SellCeiling
 //            /       \ 
//            /         \
//           /           \ ~~~ Sell at PercentageTop (1.5%) below SellCeiling.
//       ---              \
//     /                    ----
//    /                         \
 //                              \
 //                               \       / ~~ Buy at PercentageBot (0.75%) above BuyFloor
 //                                \     /
 //                                 ----- ~~~ Store this value as BuyFloor
 


//ashi=(Open+High+Low+Close)/4
var ashi=( trader.get("AskPrice")+trader.get("HighPrice")+trader.get("LowPrice")+ trader.get("BidPrice"))/4;
trader.log(ashi);
    var balanceBTC = trader.get("Balance","BTC");
    var BidPrice = trader.get("BidPrice");
    var openBids = trader.get("OpenBidsCount");
 //   var PercentageBot = PercentageBotLoss;
    var LastSellPrice = trader.get("LastMySellPrice");
    
//    if((BidPrice * (1.0 + trader.get("Fee") / 100.0)) < LastSellPrice) //Check if we are winning
 //trader.buy("BTCUSDexchange" , amount / price , price);
//bidprice volume bursts while going up predictions

//buy vs sell volume calculator for minute graph calculations

//rounding

var bidPriceFile = "bidPrice.txt";
var bidPrice = trader.get("BidPrice");
//eventLogger("bidPrice: " + bidPrice);
trader.fileWrite(bidPriceFile, bidPrice);


//trader.get("ApiLag")

var DogeBalance = trader.get("Balance","DOGE");
//trader.log(DogeBalance);

var time = trader.get("Time");

var SellCeiling = trader.get("DOGEBTC" , "AskPrice");
//trader.log(SellCeiling);

//4 hour buyprice  sell if double or higher then buy at bid price again otherwise buy under the floor and sell at peak or long peak cancel before dropping lower than floor possibly to a higher currency

//wait for bid price to drop according to fill orders on the exchange

//if dayvolume high then price will tend to go up ?

//how do bid and ask go up differently

var ammount = 20;
trader.on("AskPrice").changed()
{
    if(symbol != "DOGEBTC")return;
    if(trader.get("ApiLag")>10)
    {
        log("Api lag is to high");
        return;
    } 
//trader.get("AsksVolume",price)

 var oldprice = trader.get("DOGEBTC" , "LastMyBuyPrice"); // eventually make a db for this
 var nprice = oldprice * 1.5;

//when higher by  percent
if (trader.get("AskPrice") >= oldprice ){

//trader.sell("DOGEBTC" , amount , price);
trader.log(DogeBalance);
}
}

trader.on("BidPrice").changed()
{
    if(symbol != "DOGEBTC")return;
    if(trader.get("ApiLag")>10)
    {
        log("Api lag is to high");
        return;
    } 

}

//trader.sell(20,0.00000770);


//trader.get("BidPrice")
//trader.get("HighPrice")trader.get("LowPrice")
//trader.get("LastPrice")

trader.on("DayVolume").changed()
{

}

trader.on("LastTrade").changed()
{

}


trader.on("MyLastTrade").changed()
{
// put in order book profit tracking
}




function log (str)
{
    trader.log(str);
    trader.fileAppend(fileLoggerFile, trader.dateTimeString() + " - " + str);
}

function round2(number)
{
    return Math.round(number*100)/100;
}

