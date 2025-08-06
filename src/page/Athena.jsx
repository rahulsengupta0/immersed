import React from 'react'
import HeroLMS from '../components/HeroLMS';
import FeaturesLMS from '../components/FeaturesLMS';
import LMSAbout from '../components/LMSAbout';
import LMSCTA from '../components/LMSCTA';
import LMSHowItWorks from '../components/LMSHowItWorks';
import LmsOutcome from '../components/LmsOutcome';
import LMSFAQs from '../components/LMSFAQs';
import AthenaRoadmap from '../components/AthenaRoadmap';
const Athena = () => {
  return (
    <div>
        <HeroLMS/>
        <LMSAbout/>
        <AthenaRoadmap/>
        <FeaturesLMS/>
        <LmsOutcome/>
        <LMSHowItWorks/>
        <LMSFAQs/>
        <LMSCTA/>
    </div>
  );
};
export default Athena;
