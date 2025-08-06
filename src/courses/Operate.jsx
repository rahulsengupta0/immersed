import React from 'react';
import OperateAbout from '../components/OperateAbout.jsx';
import { motion } from 'framer-motion';
import InfoOp from '../components/InfoOp';
import CTAOp from '../components/CTAOp.jsx';
import GameBanner from '../components/GameBanner.jsx';
const Operate = () => {
  return (
    <div>
      <OperateAbout />
      <InfoOp />
      <GameBanner />
      <CTAOp />

    </div>
  );
};

export default Operate;