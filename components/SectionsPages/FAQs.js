import React from "react";
import CollapseFAQs from "../Tools/CollapseFAQs";
import DataCollapseFAQs from "../Data/DataCollapseFAQs";
export default function FAQs() {
  return (
    <>
      <CollapseFAQs data={DataCollapseFAQs}/>
    </>
  );
}
