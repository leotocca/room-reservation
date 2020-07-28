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

    <div className="mt-128">
      <CabinDraw />
    </div>

    <div className="mt-128">
      <DayOffDraw />
    </div>

    <div className="mt-128">
      <MomentsDraw />
    </div>

    <div className="mt-128">
      <TrueLoveDraw />
    </div>

    <div className="mt-128">
      <SnowGamesDraw />
    </div>

    <div className="mt-128">
      <CupOfTeaDraw />
    </div>
  </div>
);

export default Drawings;
