"use client"
import React, { useState } from 'react';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  initialValue?: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  initialValue = min,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default Slider;
