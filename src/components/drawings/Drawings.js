import React from "react";
import CabinDraw from "./CabinDraw";
import BarbacueDraw from "./BarbacueDraw";
import MomentsDraw from "./MomentsDraw";
import TrueLoveDraw from "./TrueLoveDraw";
import SnowGamesDraw from "./SnowGamesDraw";
import DayOffDraw from "./DayOffDraw";
import CupOfTeaDraw from "./CupOfTeaDraw";

const Drawings = () => (
  <div>
    <div className="mt-96">
      <BarbacueDraw />
    </div>

    <div className="mt-112">
      <CabinDraw />
    </div>

    <div className="mt-112">
      <DayOffDraw />
    </div>

    <div className="mt-112">
      <MomentsDraw />
    </div>

    <div className="mt-112">
      <TrueLoveDraw />
    </div>

    <div className="mt-112">
      <SnowGamesDraw />
    </div>

    <div className="mt-112">
      <CupOfTeaDraw />
    </div>
  </div>
);

export default Drawings;
