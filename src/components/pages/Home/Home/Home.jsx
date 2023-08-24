import React from 'react';
import InvestmentPlan from '../InvestmentPlan/InvestmentPlan';
import InvestmentFeatured from '../InvestmentFeatured/InvestmentFeatured';
import CalculateProfit from '../CalculateProfit/CalculateProfit';
import Commission from '../Commission/Commission';

const Home = () => {
    return (
        <div className='bg-[#40096E]'> 
            <InvestmentPlan></InvestmentPlan>
            <InvestmentFeatured></InvestmentFeatured>
            <CalculateProfit></CalculateProfit>
            <Commission></Commission>
        </div>
    );
};

export default Home;