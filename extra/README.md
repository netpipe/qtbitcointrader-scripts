# QtBitcoinTraderScripts

These scripts are working with QT Bitcoin Trader: https://sourceforge.net/projects/bitcointrader/

If you made profit using this script, please send me some Bitcoins, Litecoins or Ethereum:

Bitcoin:
3DmSBjaNptXp5dPNiPejzC6Un8HkWdWnxW

LiteCoin:
MD1N2f4fDaYdLACZRMwTomQwbuLe11Mx6h

Ethereum:
0xd7d06a9c025797153959f988833c40e8a28ac23a

Frans Schreuder

# How it works

               -----   ~~~Store this value as SellCeiling
             /       \ 
            /         \
           /           \ ~~~ Sell at PercentageTop (1.5%) below SellCeiling.
       ---              \
     /                    ----
    /                         \
                               \
                                \       / ~~ Buy at PercentageBot (0.75%) above BuyFloor
                                 \     /
                                  ----- ~~~ Store this value as BuyFloor

# How to setup


Current scripts are for buying and selling Bitcoin in Euros(BTCEUR). If you want to use it as something like BTCLTC trader, then change BTCEUR to BTCLTC.

**Create a new script in QT Bitcoin trader**

Open a new script in your QT Bitcoin Trader and name it

- MinMaxFollower

**Copy script file into QT Bitcoin Trader**

Copy script file MinMaxTrader.js in the script of QT Bitcoin Trader.

**Set variables and log files path**

Set Variables (percentages where you want to buy and sell) and the log file path in script to your path where where you want to save your log file.


**Setting the variables**

Please see the comments above the variables in MinMaxFollower.js
