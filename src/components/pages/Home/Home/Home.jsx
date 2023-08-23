import React from 'react';
import InvestmentPlan from '../InvestmentPlan/InvestmentPlan';
import InvestmentFeatured from '../InvestmentFeatured/InvestmentFeatured';
import CalculateProfit from '../CalculateProfit/CalculateProfit';

const Home = () => {
    return (
        <div className='bg-[#40096E]'> 
            <InvestmentPlan></InvestmentPlan>
            <InvestmentFeatured></InvestmentFeatured>
            <CalculateProfit></CalculateProfit>
        </div>
    );
};

export default Home;