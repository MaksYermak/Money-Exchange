// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = {};
    var H = 0;
    var Q = 0;
    var D = 0;
    var N = 0;
    var P = 0;

    if (currency<=0) return coins;
    if (currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    while (currency != 0){
    	if (currency >= 50){
    		H++;
    		currency -= 50;
    		continue;
    	}else{
    		if(currency >= 25){
    			Q++;
    			currency -= 25;
    			continue;
    		}else{
    			if(currency >= 10){
    				D++;
    				currency -=10;
    				continue;
    			}else{
    				if(currency >= 5){
    					N++;
    					currency -= 5;
    					continue;
    				}else{
    					if(currency >= 1){
    						P++;
    						currency -= 1;
    						continue
    					}
    				}
    			}
    		}
    	}
    }

    if(H != 0) coins.H = H;
    if(Q != 0) coins.Q = Q;
    if(D != 0) coins.D = D;
    if(N != 0) coins.N = N;
    if(P != 0) coins.P = P;
    			
    return coins;
}
