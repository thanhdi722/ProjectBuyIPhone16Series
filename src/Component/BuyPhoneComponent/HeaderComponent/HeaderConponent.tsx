import React from "react";
import Image from "next/image";
import HeaderPC from "../../../../public/Images/HEAD MO BAN iPhone 16.jpg";
import HeaderMB from "../../../../public/Images/HEAD mobile.jpg";
import dichvu1 from "../../../../public/Images/Asset 50.png";
import dichvu2 from "../../../../public/Images/Asset 51.png";
import dichvu3 from "../../../../public/Images/Asset 52.png";
import dichvu4 from "../../../../public/Images/Asset 53.png";
import dichvu5 from "../../../../public/Images/Asset 54.png";
import dichvu6 from "../../../../public/Images/Asset 55.png";
import dichvu7 from "../../../../public/Images/Asset 56.png";
import dichvu8 from "../../../../public/Images/Asset 57.png";
import uudai1 from "../../../../public/Images/1.png";
import uudai2 from "../../../../public/Images/2.png";
import uudai3 from "../../../../public/Images/3.png";
import uudai4 from "../../../../public/Images/4.png";
import uudai5 from "../../../../public/Images/5.png";
// import icon_khien from "../../../../public/Images/iconKhien.png";
// import icon_pos from "../../../../public/Images/iconPos.png";
// import gif from "../../../../public/Images/gif.png";
import "../../../Style/Header.scss";
// import { Row, Col } from "antd";

function HeaderConponent() {
  return (
    <div className="header_container">
      <Image src={HeaderPC} alt="headerPC" className="ImagesHeaderPC" />
      <Image src={HeaderMB} alt="headerPC" className="ImagesHeaderMB" />
      <div className="container">
        {/* <div className={style.promo_banner_container}>
          <h2 className={style.promo_title}>Ưu đãi độc quyền 5 sao</h2>
          <div className={style.dichvu_container}>
            <div className={style.promo_card}>
              <Row>
                <Col span={6}>
                  <Image src={gif} alt="gif" className={style.icon_images} />
                </Col>
                <Col span={18}>
                  <p className={style.promo_card_description}>
                    100 hộp quà trị giá 1 triệu 6
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
            <div className={style.promo_card}>
              <Row>
                <Col span={6}>
                  <Image
                    src={icon_pos}
                    alt="icon_pos"
                    className={style.icon_images}
                  />
                </Col>

                <Col span={18} style={{ display: "flex" }}>
                  <p className={style.promo_card_description}>
                    1 Phiếu hẹn tham gia vòng quay vật lý trúng thưởng iPhone 16
                    CHÍNH HÃNG
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </div> */}
        <div className="uudai_container">
          <Image src={uudai1} alt="uudai1" className="uudai_images" />
          <Image src={uudai2} alt="uudai2" className="uudai_images" />
          <Image src={uudai3} alt="uudai3" className="uudai_images" />
          <Image src={uudai4} alt="uudai4" className="uudai_images" />
          <Image src={uudai5} alt="uudai5" className="uudai_images" />
        </div>
        <h2 className="promo_title">Ưu Đãi Trả Góp Siêu Hời</h2>
        <div className="dichvu_container">
          <Image src={dichvu8} alt="dichvu8" className="dichvu_images" />
          <Image src={dichvu5} alt="dichvu5" className="dichvu_images" />
          <Image src={dichvu6} alt="dichvu6" className="dichvu_images" />
          <Image src={dichvu7} alt="dichvu7" className="dichvu_images" />
          <Image src={dichvu1} alt="dichvu1" className="dichvu_images" />
          <Image src={dichvu2} alt="dichvu2" className="dichvu_images" />
          <Image src={dichvu3} alt="dichvu3" className="dichvu_images" />
          <Image src={dichvu4} alt="dichvu4" className="dichvu_images" />
        </div>
      </div>
    </div>
  );
}

export default HeaderConponent;
