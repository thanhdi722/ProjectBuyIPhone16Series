import React from "react";
import HeaderComponent from "../../Component/BuyPhoneComponent/HeaderComponent/HeaderConponent";
import InfoTechnical from "../../Component/BuyPhoneComponent/InfoTechnical/InfoTechnical";
import PrioritizePage from "../../Component/BuyPhoneComponent/prioritizePage/prioritizePage";
function page() {
  return (
    <div>
      <HeaderComponent />
      <InfoTechnical />
      <PrioritizePage />
    </div>
  );
}

export default page;
