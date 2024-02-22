import React, { useState } from 'react';
import './Hero.css';
import hero from '../images/hero.jpg';

function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingInfo, setTrackingInfo] = useState(null);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [unit, setUnit] = useState('cms');
    const [length, setLength] = useState('');
    const [breadth, setBreadth] = useState('');
    const [height, setHeight] = useState('');
    const [dimensionalWeight, setDimensionalWeight] = useState(0);

    const handleTrackShipment = async () => {
        const apiKey = 'demo-key'; // Replace this with your actual DHL API key

        const options = {
            method: 'GET',
            headers: {
                'DHL-API-Key': apiKey
            }
        };

        fetch(`https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                setTrackingInfo(data);
                setError(null);
            })
            .catch(error => {
                setTrackingInfo(null);
                setError('Error fetching tracking information');
                console.error('There was a problem with your fetch operation:', error)
            });
    };

    const handlePop = () => {
        setShowPopup(!showPopup);
    };
    const handlePopclose = () => {
        setShowPopup(false);
    };
    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    };

    const handleCalculate = () => {
        let weight;
        if (unit === 'cms') {
            weight = (length * breadth * height) / 5000; // Divisor for centimeters
        } else {
            weight = (length * breadth * height) / 139; // Divisor for inches
        }
        weight = Math.round(weight)
        setDimensionalWeight(weight);
    }

    return (
        <>
            <main>
                <div className="containerr">
                    <img src={hero} alt="" />
                    <div className="hero-text">
                        <h1>Fast and Reliable Courier Services</h1>
                        <p>Get your packages delivered securely and on time with our professional courier service.</p>
                        <div className="trackk">
                            <button onClick={() => setIsOpen(!isOpen)}>Track Shipment</button>
                        </div>
                        <div className={`track ${isOpen ? 'open' : ''}`}>
                            <h3>Track Your Shipment</h3>
                            <form onSubmit={e => { e.preventDefault(); handleTrackShipment(); }}>
                                <input
                                    type="text"
                                    placeholder="Enter tracking number"
                                    value={trackingNumber}
                                    onChange={e => setTrackingNumber(e.target.value)}
                                />
                                <button type="submit">Track</button>
                            </form>
                            {trackingInfo && (
                                <div>
                                    <p>Shipment Status: {trackingInfo.status.description}</p>
                                    <p>Estimated Delivery Date: {trackingInfo.status.timestamp}</p>
                                </div>
                            )}
                            {error && <p>{error}</p>}
                        </div>
                    </div>
                </div>
            </main>
            {showPopup && (
                <div className="popup">
                      <div class="popup-content">
                            <div class="tophead">
                                <h1>Volumetric Calculator</h1>
                            </div>
                            <div class="popupfields">
                                <label for="unit">Unit:</label>
                                <select id="unit" value={unit} onChange={handleUnitChange}>
                                    <option value="cms">cms</option>
                                    <option value="inches">inches</option>
                                </select><br />
                            
                                <div className="input-group">
    <label htmlFor="length">Length:</label>
    <input type="number" id="length" value ={length}
    onChange={e => setLength(e.target.value)} /> 
    {unit === 'cms' ? <><span>cm</span> </> : <span>in</span>}
</div>
    <div className="input-group">
        <label for="breadth">Breadth:</label>
        <input type="number" id="breadth" value ={breadth}
    onChange={e => setBreadth(e.target.value)} />{unit === 'cms' ? 'cm' : 'in'}
    </div>
    <div className="input-group">
                                <label for="height">Height:</label>
                                <input type="number" id="height" value={height} 
    onChange={e => setHeight(e.target.value)}/>   {unit === 'cms' ? 'cm' : 'in'}<br />
                                </div>
                                <div className="result">
    <label htmlFor="dimen">Dimensional Weight:</label>
    <input type="number" id="resultValue" value={dimensionalWeight} readOnly />
</div>
                                <button id="calculate" onClick={handleCalculate}>Calculate</button>
                                <button id="close" onClick={handlePopclose}>Close</button>
                                
                            </div>
                        </div>
                </div>

            )}
<div className='btncalc' >                
<button className="button" onClick={handlePop}><span>Volumetric Calculator </span></button>
                <button className="button"><span>Rate Calculator </span></button>
                <button className="button"><span>Prohibited List </span></button>
                
            </div>
        </>
    );
}

export default Hero;
