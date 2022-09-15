import './amount.css'

const Amount = (prop) => {

    const P = prop.value.invstValue;
    const R = prop.value.returnRateValue;
    const T = prop.value.timePeriodValue;
    
    const investedAmount = (P*12)
    
    const calcAmount = () => {
        const i = (R/12)/100
        const n = T * 12
        const maturity = P * ((((1 + i)**n)- 1) / i) * (1 + i)
        console.table({P,R,T,investedAmount, n, i, maturity, return: maturity-investedAmount})
        return maturity.toFixed(0)
    }
    
    const maturityAmount = calcAmount()
    return ( 
       <div className="amount">
            <div className="investedAmount">
                <h3>Invested Amount</h3>
                <span>&#8377;{investedAmount}</span>
            </div>

            <div className="investedTime">
                <h3>Est. returns</h3>
                <span>{maturityAmount-investedAmount}</span>
            </div>

            <div className="returnAmount">
                <h3>Total Amount</h3>
                <span>&#8377;{maturityAmount}</span>
            </div>
       </div>
     );
}
 
export default Amount;