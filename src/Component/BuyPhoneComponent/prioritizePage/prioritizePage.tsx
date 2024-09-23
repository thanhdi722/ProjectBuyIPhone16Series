"use client";
import React from "react";
import "./prioritizePage.css";
import Image from "next/image";
import imgUudaiDatHang from "../../../../public/Images/imageUuDaiDatHang.png";
import imgUudaiThanhToan from "../../../../public/Images/imageUuDaiThanhToan.png";
import imgThuCuDoiMoi from "../../../../public/Images/imagesThuCuDoiMoi.png";

export default function PrioritizePage() {
  return (
    <div className="container_uudai_page">
      <div className="container">
        <Image src={imgUudaiDatHang} alt="" />
        <Image src={imgUudaiThanhToan} alt="" />
        <Image src={imgThuCuDoiMoi} alt="" />
      </div>
    </div>
  );
}
