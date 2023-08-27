import React from 'react';
import InvestmentPlan from '../InvestmentPlan/InvestmentPlan';
import InvestmentFeatured from '../InvestmentFeatured/InvestmentFeatured';
import CalculateProfit from '../CalculateProfit/CalculateProfit';
import Commission from '../Commission/Commission';
import OurClient from '../OurClient/OurClient';
import FAQ from '../FAQ/FAQ';
import BlogPost from '../BlogPost/BlogPost';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div className='bg-[#40096E]'>
            <Banner />
            <InvestmentPlan></InvestmentPlan>
            <InvestmentFeatured></InvestmentFeatured>
            <CalculateProfit></CalculateProfit>
            <Commission></Commission>
            <OurClient></OurClient>
            <FAQ></FAQ>
            {/* <BlogPost></BlogPost> */}
        </div>
    );
};

export default Home;