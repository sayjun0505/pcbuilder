import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef, useState } from 'react';
const MultiRangeSlider = ({ min, max, minval, maxval, symbol, onValuesChange }) => {
    const [minVal,
        setMinVal] = useState(min);
    const [maxVal,
        setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(value => Math.round(((value - min) / (max - min)) * 100), [min, max]);

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
        onValuesChange(minPercent, maxPercent);
        // console.log(minPercent,maxPercent)
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);
        onValuesChange(minPercent, maxPercent);
        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    return (
        <div className="pt-20 container">
            <div className="slider">
                <div className="left">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={minVal}
                        onChange={event => {
                            const value = Math.min(Number(event.target.value), maxVal - 1);
                            setMinVal(value);
                            minValRef.current = value;
                        }}
                        className="thumbmulti thumb--left"
                        style={{ zIndex: minVal > max - 100 && "5" }}></input>
                </div>
                <div className="right">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={maxVal}
                        onChange={event => {
                            const value = Math.max(Number(event.target.value), minVal);
                            setMaxVal(value);
                            maxValRef.current = value;
                        }}
                        className="thumbmulti thumb--right" />
                </div>
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
                <div className="slider" style={{ width: "calc(100% - 34px)", margin: "auto" }}>
                    <div
                        className={`slider__left-value`}
                        style={{
                            left: `${getPercent(minVal)}%`, background: `url("https://raw.githubusercontent.com/sayjun0505/carse…ges/range.svg?token=A67VWOA3TGFTU4Q5MX7CFALGPCTI2")`, backgroundSize: "cover",
                        }}>{minVal === 0 ? "Min Price" : symbol + (minVal).toLocaleString()}</div>
                </div>

                <div className="slider" style={{ width: "calc(100% - 34px)", margin: "auto" }}>
                    <div
                        className="slider__right-value"
                        style={{
                            left: `${getPercent(maxVal)}%`, background: `url("https://raw.githubusercontent.com/sayjun0505/carse…ges/range.svg?token=A67VWOA3TGFTU4Q5MX7CFALGPCTI2")`, backgroundSize: "cover",
                        }}>{maxVal === 0 ? "Max Price" : symbol + (maxVal).toLocaleString()}</div>
                </div>
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};
MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};

export default MultiRangeSlider;