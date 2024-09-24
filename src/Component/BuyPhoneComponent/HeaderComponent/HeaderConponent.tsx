import React from "react";
import Image from "next/image";
import HeaderPC from "../../../../public/Images/HEAD MO BAN iPhone 16.jpg";
import HeaderMB from "../../../../public/Images/headerMB 1.svg";
import dichvu1 from "../../../../public/Images/Asset 50.png";
import dichvu2 from "../../../../public/Images/Asset 51.png";
import dichvu3 from "../../../../public/Images/Asset 52.png";
import dichvu4 from "../../../../public/Images/Asset 53.png";
import dichvu5 from "../../../../public/Images/Asset 54.png";
import dichvu6 from "../../../../public/Images/Asset 55.png";
import dichvu7 from "../../../../public/Images/Asset 56.png";
import icon_khien from "../../../../public/Images/iconKhien.png";
import icon_pos from "../../../../public/Images/iconPos.png";
import style from "./Header.module.css";
import { Row, Col } from "antd";

function HeaderConponent() {
  return (
    <div className={style.header_container}>
      <Image src={HeaderPC} alt="headerPC" className={style.ImagesHeaderPC} />
      <Image src={HeaderMB} alt="headerPC" className={style.ImagesHeaderMB} />
      <div className="container">
        <div className={style.promo_banner_container}>
          <h2 className={style.promo_title}>Ưu đãi độc quyền 5 sao</h2>
          <div className={style.promo_card_container}>
            <div className={style.promo_card}>
              <Row>
                <Col span={7}>
                  <h1 className={style.promo_card_title}>16</h1>
                </Col>
                <Col span={17}>
                  <p className={style.promo_card_description}>
                    Hộp quà cốc sạc, pin dự phòng, cường lực
                  </p>
                </Col>
              </Row>
            </div>
            <div className={style.promo_card}>
              <Row>
                <Col span={15}>
                  <p className={style.promo_card_description}>
                    Ưu đãi trả góp lên góp lên đến
                  </p>
                </Col>
                <Col span={9} style={{ display: "flex" }}>
                  <h1 className={style.promo_card_title}>100</h1>
                  <p className={style.promo_card_description}>%</p>
                </Col>
              </Row>
            </div>
            <div className={style.promo_card}>
              <Row>
                <Col span={6}>
                  <Image
                    src={icon_khien}
                    alt="icon_16"
                    className={style.icon_images}
                  />
                </Col>
                <Col span={18}>
                  <p className={style.promo_card_description}>
                    Gói bảo hành lên đến 16 tháng
                  </p>
                </Col>
              </Row>
            </div>
            <div className={style.promo_card}>
              <Row>
                <Col span={6}>
                  <Image
                    src={icon_pos}
                    alt="icon_pos"
                    className={style.icon_images}
                  />
                </Col>
                <Col span={12}>
                  <p className={style.promo_card_description}>
                    Trả góp 0% giảm ngay
                  </p>
                </Col>
                <Col span={6} style={{ display: "flex" }}>
                  <p className={style.promo_card_title}>1</p>
                  <p className={style.promo_card_description}>Triệu</p>
                </Col>
              </Row>
            </div>
            <div className={style.promo_card}>
              <Row>
                <Col span={14}>
                  <p className={style.promo_card_description}>
                    Combo phụ kiện giảm đến
                  </p>
                </Col>
                <Col span={10} style={{ display: "flex" }}>
                  <h1 className={style.promo_card_title}>60</h1>
                  <p className={style.promo_card_description}>%</p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <h2 className={style.promo_title}>Ưu Đãi Trả Góp Siêu Hời</h2>
        <div className={style.dichvu_container}>
          <Image src={dichvu1} alt="dichvu1" className={style.dichvu_images} />
          <Image src={dichvu2} alt="dichvu2" className={style.dichvu_images} />
          <Image src={dichvu3} alt="dichvu3" className={style.dichvu_images} />
          <Image src={dichvu4} alt="dichvu4" className={style.dichvu_images} />
          <Image src={dichvu5} alt="dichvu5" className={style.dichvu_images} />
          <Image src={dichvu6} alt="dichvu6" className={style.dichvu_images} />
          <Image src={dichvu7} alt="dichvu7" className={style.dichvu_images} />
        </div>
      </div>
    </div>
  );
}

export default HeaderConponent;
