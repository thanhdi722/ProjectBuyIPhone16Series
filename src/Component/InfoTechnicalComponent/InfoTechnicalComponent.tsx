"use client";
import React, { useState } from "react";
import "./infoTechnicalComponent.css";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface InfoTechnicalProps {
  productName: string;
  productPrices: { [color: string]: string };
  images: { [key: string]: StaticImageData };
  colors: { name: string; colorCode: string }[];
}

export default function InfoTechnicalComponent({
  productName,
  productPrices,
  images,
  colors,
}: InfoTechnicalProps) {
  const [activeColor, setActiveColor] = useState(colors[0].name);
  const getImageKey = (colorName: string) => {
    return colorName.replace("Màu ", "");
  };
  const scrollToRegisterForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="infoTechnicalComponent">
      <div className="productName">{productName}</div>
      <div className="itemProduct">
        <div className="wrapImg">
          <Image
            src={images[getImageKey(activeColor)]}
            alt={productName}
            title={productName}
            style={{}}
          />
        </div>
        <p style={{ textAlign: "center", marginBottom: "10px", color: "#000" }}>
          {activeColor}
        </p>
        <div className="listColorProduct">
          {colors.map((color) => (
            <div
              key={color.name}
              title={color.name}
              className={`${
                color.name === activeColor ? `active selected` : ""
              }`}
              style={{ backgroundColor: color.colorCode }}
              onClick={() => setActiveColor(color.name)}
            ></div>
          ))}
        </div>
        <div className="productPrice">
          <span>Giá</span>
          <b>{productPrices[activeColor]}</b>
        </div>
        <div className="productPrice">
          <p>
            Hoặc thanh toán:{" "}
            {(
              parseInt(productPrices[activeColor].replace(/\D/g, "")) / 12
            ).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}{" "}
            / tháng <br /> trong 12 tháng
          </p>
        </div>
        <div>
          <a
            href="#"
            onClick={scrollToRegisterForm}
            style={{ color: "#fff" }}
            className="groupButtonMobile"
          >
            <button type="submit" className="button_buy">
              Đăng ký
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
