import { useState } from 'react';
import Amount from './amount';
import './range.css';

const Range = () => {
    const[invst, setInvst] = useState(1000)

    const[returnRate, setReturnRate] = useState(12)

    const[timePeriod, setTimePeriod] = useState(1)
    
    let propValue = {
        invstValue : invst,
        returnRateValue : returnRate,
        timePeriodValue : timePeriod
    }

    const handleClick = (e) => {
        console.log(e)
        setInvst(e)
        console.log(e)
    }

    return (
        <>
            <div className="range">
                <div className="monthlyInvestment">
                    <div className="rangeHeading">
                        <h2>Monthly investment</h2>
                        <div>
                            <span>&#8377;</span>
                            <input type='text' value={invst} onKeyPress={(event)=>handleClick(event.target.value)}/>
                        </div>
                    </div>
                    <div className="rangeSlider">
                        <input type="range" className='slider' value={invst} min='500' max='100000' id="investSlider" onChange={(event)=>setInvst(event.target.value)}/>
                    </div>
                </div>
                
                <div className="returnRate">
                    <div className="rangeHeading">
                        <h2>Expected return rate (p.a)</h2>
                        <div>
                            <input type='text' value={returnRate}/>
                            <span>%</span>
                        </div>
                    </div>
                    <div className="rangeSlider">
                        <input type="range" className='slider' min='1' max='30' value={returnRate} id="returnRateSlider" onChange={(event)=>setReturnRate(event.target.value)}/>
                    </div>
                </div>

                <div className="timePeriod">
                    <div className="rangeHeading">
                        <h2>Time period</h2>
                        <div>
                            <input type='text' value={timePeriod}/>
                            <span>Yr</span>
                        </div>
                    </div>
                    <div className="rangeSlider">
                        <input type="range" className='slider' value={timePeriod} min='1' max='30' id="timePeriodSlider" onChange={(event)=>setTimePeriod(event.target.value)}/>
                    </div>
                </div>
            </div>
            <Amount value={propValue}/>
        </>
     );
}
 
export default Range;