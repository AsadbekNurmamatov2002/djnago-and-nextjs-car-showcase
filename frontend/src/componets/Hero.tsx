"use client";

// "use server";

import CostomButton from './CostomButton'

export default function Hero() {
    function handleScroll(){

    }
  return (
    <div className=" hero ">
        <div className='flex-1 pt-3 padding-x'>
            <h1 className='hero__title'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, iusto?
            </h1>
            <p className='hero__subtitle'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam asperiores corrupti ducimus et porro, voluptates sapiente architecto harum exercitationem incidunt aut a, ea repellendus culpa dolore labore eaque nobis.
            </p>
            <CostomButton 
                title="Exiplore Cars"
                contenstStayle="bg-primary-blue text-white rounded-full mt-10"
                handleClicks={handleScroll}
            />
        </div>
    </div>
  )
}
