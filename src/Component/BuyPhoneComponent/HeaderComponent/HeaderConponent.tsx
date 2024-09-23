import React from "react";
import Image from "next/image";
import HeaderPC from "../../../../public/Images/headerPC 1.svg";
import HeaderMB from "../../../../public/Images/headerMB 1.svg";
// import tragopPC from "../../../../public/Images/ưu đãi trả góp PC.svg";
// import tragopMB from "../../../../public/Images/ưu đãi trả góp MB.svg";
import style from "./Header.module.css";
// import { Row, Col } from "antd";

function HeaderConponent() {
  return (
    <div className={style.header_container}>
      <Image src={HeaderPC} alt="headerPC" className={style.ImagesHeaderPC} />
      <Image src={HeaderMB} alt="headerPC" className={style.ImagesHeaderMB} />
      {/* <div className={style.promo_banner_container}>
                <h2 className={style.promo_title}>Ưu đãi độc quyền 5 sao</h2>
                <div className={style.promo_card_container}>
                    <div className={style.promo_card}>
                        <Row>
                            <Col span={6}>
                                <h1 className={style.promo_card_title}>16</h1>
                            </Col>
                            <Col span={18}>
                                <p className={style.promo_card_description}>Hộp quà cốc sạc, pin dự phòng, cường lực</p>
                            </Col>
                        </Row>

                    </div>
                    <div className={style.promo_card}>
                        <Row>
                            <Col span={6}>
                                <h1 className={style.promo_card_title}>16</h1>
                            </Col>
                            <Col span={18}>
                                <p className={style.promo_card_description}>Hộp quà cốc sạc, pin dự phòng, cường lực</p>
                            </Col>
                        </Row>

                    </div>
                    <div className={style.promo_card}>
                        <Row>
                            <Col span={6}>
                                <h1 className={style.promo_card_title}>16</h1>
                            </Col>
                            <Col span={18}>
                                <p className={style.promo_card_description}>Hộp quà cốc sạc, pin dự phòng, cường lực</p>
                            </Col>
                        </Row>

                    </div>
                    <div className={style.promo_card}>
                        <Row>
                            <Col span={6}>
                                <h1 className={style.promo_card_title}>16</h1>
                            </Col>
                            <Col span={18}>
                                <p className={style.promo_card_description}>Hộp quà cốc sạc, pin dự phòng, cường lực</p>
                            </Col>
                        </Row>

                    </div>
                    <div className={style.promo_card}>
                        <Row>
                            <Col span={6}>
                                <h1 className={style.promo_card_title}>16</h1>
                            </Col>
                            <Col span={18}>
                                <p className={style.promo_card_description}>Hộp quà cốc sạc, pin dự phòng, cường lực</p>
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
            <h2 className={style.promo_title}>Ưu Đãi Trả Góp Siêu Hời</h2>
            <Image src={tragopPC} alt="headerPC" className={style.ImagesHeaderPC} />
            <Image src={tragopMB} alt="headerPC" className={style.ImagesHeaderMB} /> */}
    </div>
  );
}

export default HeaderConponent;
