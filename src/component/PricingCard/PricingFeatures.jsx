import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    console.log(feature)
    return (
        <div>
            <p className='flex mt-3'><CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</p>
        </div>
    );
};

export default PricingFeatures;