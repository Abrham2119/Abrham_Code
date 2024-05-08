"use client"
import React, { useState } from 'react';
import Slider from '@/components/Slider';

const HomePage: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Slider Example</h1>
      <Slider
        min={0}
        max={100}
        step={1}
        initialValue={50}
        onChange={value => setSliderValue(value)}
      />
      <div className="mt-2">
        Selected Value: {sliderValue}
      </div>
    </div>
  );
};

export default HomePage;
