import React from "react";
import HeaderConponent from "../../Component/BuyPhoneComponent/HeaderComponent/HeaderConponent";
import UpgradeList from "@/Component/UpgradeList";
import Ecosystem from "@/Component/Ecosystem";
function page() {
    return (
        <div className="bg-page">
            <HeaderConponent />
            <UpgradeList />
            <Ecosystem />
        </div>
    );
}

export default page;