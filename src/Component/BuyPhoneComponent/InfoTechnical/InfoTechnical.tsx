"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./InfoTechnical.css";
import InfoTechnicalComponent from "../../../Component/InfoTechnicalComponent/InfoTechnicalComponent";
import iphone16Green from "../../../../public/Images/iphone/iphone-16-green.png";
import iphone16Black from "../../../../public/Images/iphone/iphone16_Black.png";
import iphone16ProBlack from "../../../../public/Images/iphone/iphone16_BlackPro.png";
import iphone16WhitePro from "../../../../public/Images/iphone/iphone16_White.png";
import iphone16White from "../../../../public/Images/iphone/iphone16_WhitePro.png";
import iphone16Pink from "../../../../public/Images/iphone/iphone16_Pink.png";
import iphone16Blue from "../../../../public/Images/iphone/iphone16_blue.png";
import iphone16TitanPro from "../../../../public/Images/iphone/iphone16_titan.png";
import iphone16DesertPro from "../../../../public/Images/iphone/iphone16_desert.png";
import imagesModal from "../../../../public/Images/imagesSoSanh.jpg";
import { RightCircleOutlined } from "@ant-design/icons";
import { StaticImageData } from "next/image";
import { Modal, Row, Col } from "antd";
import { Form, Input } from "antd";
import { FormProps } from "antd";
import { fetchProducts } from "../../../app/utils/utils";
type GraphQLResponse = {
  data: {
    route: {
      variants: Array<{
        product: {
          price_range: {
            minimum_price: {
              final_price: {
                value: number;
              };
            };
          };
        };
      }>;
    };
  };
};

type ProductImage = { [key: string]: StaticImageData };

type Product = {
  productName: string;
  productPrices: { [capacity: string]: { [color: string]: string } };
  images: ProductImage;
  capacities: string[];
  colors: Array<{ name: string; colorCode: string }>;
  productLink: string;
};

export default function InfoTechnical() {
  const [activeCapacity, setActiveCapacity] = useState("512GB");
  const [data16ProMax512, setData16ProMax512] = useState<GraphQLResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-pro-max-512gb");
      console.log("data512", data);
      setData16ProMax512(data);
    };
    fetchData();
  }, []); const [data16ProMax1TB, setData16ProMax1TB] = useState<GraphQLResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-pro-max-1tb");
      console.log("data1tb", data);
      setData16ProMax1TB(data);
    };
    fetchData();
  }, []); const [data16ProMax256, setData16ProMax256] = useState<GraphQLResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-pro-max-256gb");
      console.log("data256", data);
      setData16ProMax256(data);
    };
    fetchData();
  }, []);
  const [data16Pro1TB, setData16Pro1TB] = useState<GraphQLResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-pro-1tb");
      setData16Pro1TB(data);
    };
    fetchData();
  }, []); const [data16Pro512, setData16Pro512] = useState<GraphQLResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-pro-512gb");
      setData16Pro512(data);
    };
    fetchData();
  }, []); const [data16Pro256, setData16Pro256] = useState<GraphQLResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-pro-256gb");
      setData16Pro256(data);
    };
    fetchData();
  }, []); const [data16Pro128, setData16Pro128] = useState<GraphQLResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-pro-128gb");
      setData16Pro128(data);
    };
    fetchData();
  }, []);
  const [productsData, setProductsData] = useState<GraphQLResponse | null>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-plus-512gb");
      setProductsData(data);
    };
    fetchData();
  }, []);
  const [data16Plus256, setData16Plus256] = useState<GraphQLResponse | null>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-plus-256gb");
      setData16Plus256(data);
    };
    fetchData();
  }, []);
  const [data16Plus128, setData16Plus128] = useState<GraphQLResponse | null>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-plus-128gb");
      setData16Plus128(data);
    };
    fetchData();
  }, []);
  const [data16512, setData16512] = useState<GraphQLResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-512gb");
      setData16512(data);
    };
    fetchData();
  }, []);
  const [data16256, setData16256] = useState<GraphQLResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-256gb");
      setData16256(data);
    };
    fetchData();
  }, []);
  const [data16128, setData16128] = useState<GraphQLResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts("iphone-16-128gb");
      setData16128(data);
    };
    fetchData();
  }, []);
  const [modal2Open, setModal2Open] = useState(false);
  const products: Product[] = [
    {
      productName: "iPhone 16 Pro Max",
      productPrices: {
        "1TB": {
          "Titan Đen": `${data16ProMax1TB?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}  `,
          "Titan Sa Mạc": `${data16ProMax1TB?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Tự Nhiên": `${data16ProMax1TB?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Trắng": `${data16ProMax1TB?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
        "512GB": {
          "Titan Đen": `${data16ProMax512?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Sa Mạc": `${data16ProMax512?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Tự Nhiên": `${data16ProMax512?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Trắng": `${data16ProMax512?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
        "256GB": {
          "Titan Đen": `${data16ProMax256?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Sa Mạc": `${data16ProMax256?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Tự Nhiên": `${data16ProMax256?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Trắng": `${data16ProMax256?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
      },
      images: {
        "Titan Đen": iphone16ProBlack,
        "Titan Sa Mạc": iphone16DesertPro,
        "Titan Tự Nhiên": iphone16TitanPro,
        "Titan Trắng": iphone16WhitePro,
      },
      capacities: ["1TB", "512GB", "256GB"],
      colors: [
        { name: "Titan Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Titan Sa Mạc", colorCode: "rgb(255, 218, 185)" },
        { name: "Titan Tự Nhiên", colorCode: "rgb(250, 235, 215)" },
        { name: "Titan Trắng", colorCode: "rgb(251, 247, 244)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro-max?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16 Pro",
      productPrices: {
        "1TB": {
          "Titan Đen": `${data16Pro1TB?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Sa Mạc": `${data16Pro1TB?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Tự Nhiên": `${data16Pro1TB?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Trắng": `${data16Pro1TB?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
        "512GB": {
          "Titan Đen": `${data16Pro512?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Sa Mạc": `${data16Pro512?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Tự Nhiên": `${data16Pro512?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Trắng": `${data16Pro512?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
        "256GB": {
          "Titan Đen": `${data16Pro256?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Sa Mạc": `${data16Pro256?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Tự Nhiên": `${data16Pro256?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Trắng": `${data16Pro256?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
        "128GB": {
          "Titan Đen": `${data16Pro128?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Sa Mạc": `${data16Pro128?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Tự Nhiên": `${data16Pro128?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Titan Trắng": `${data16Pro128?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
      },
      images: {
        "Titan Đen": iphone16ProBlack,
        "Titan Sa Mạc": iphone16DesertPro,
        "Titan Tự Nhiên": iphone16TitanPro,
        "Titan Trắng": iphone16WhitePro,
      },
      capacities: ["1TB", "512GB", "256GB", "128GB"],
      colors: [
        { name: "Titan Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Titan Sa Mạc", colorCode: "rgb(255, 218, 185)" },
        { name: "Titan Tự Nhiên", colorCode: "rgb(250, 235, 215)" },
        { name: "Titan Trắng", colorCode: "rgb(251, 247, 244)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16 Plus",
      productPrices: {
        "512GB": {
          Đen: `${productsData?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Trắng: `${productsData?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Mòng Két": `${productsData?.data.route.variants[4].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Hồng: `${productsData?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Lưu Ly": `${productsData?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
        "256GB": {
          Đen: `${data16Plus256?.data.route.variants[4].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Trắng: `${data16Plus256?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Mòng Két": `${data16Plus256?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Hồng: `${data16Plus256?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Lưu Ly": `${data16Plus256?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
        "128GB": {
          Đen: `${data16Plus128?.data.route.variants[4].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Trắng: `${data16Plus128?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Mòng Két": `${data16Plus128?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Hồng: `${data16Plus128?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Lưu Ly": `${data16Plus128?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
      },
      images: {
        Đen: iphone16Black,
        Trắng: iphone16White,
        "Xanh Mòng Két": iphone16Green,
        Hồng: iphone16Pink,
        "Xanh Lưu Ly": iphone16Blue,
      },
      capacities: ["512GB", "256GB", "128GB"],
      colors: [
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Trắng", colorCode: "rgb(251, 247, 244)" },
        { name: "Xanh Mòng Két", colorCode: "rgb(176, 212, 210)" },
        { name: "Hồng", colorCode: "rgb(255, 110, 180)" },
        { name: "Xanh Lưu Ly", colorCode: "rgb(72, 118, 255)" },
      ],
      productLink:
        "/dtdd/iphone-16-plus?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16",
      productPrices: {
        "512GB": {
          Đen: `${data16512?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Trắng: `${data16512?.data.route.variants[4].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Mòng Két": `${data16512?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Hồng: `${data16512?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Lưu Ly": `${data16512?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
        "256GB": {
          Đen: `${data16256?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Trắng: `${data16256?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Mòng Két": `${data16256?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Hồng: `${data16256?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Lưu Ly": `${data16256?.data.route.variants[4].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
        "128GB": {
          Đen: `${data16128?.data.route.variants[2].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Trắng: `${data16128?.data.route.variants[3].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Mòng Két": `${data16128?.data.route.variants[4].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          Hồng: `${data16128?.data.route.variants[1].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
          "Xanh Lưu Ly": `${data16128?.data.route.variants[0].product.price_range.minimum_price.final_price.value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`,
        },
      },
      images: {
        Đen: iphone16Black,
        Trắng: iphone16White,
        "Xanh Mòng Két": iphone16Green,
        Hồng: iphone16Pink,
        "Xanh Lưu Ly": iphone16Blue,
      },
      capacities: ["512GB", "256GB", "128GB"],
      colors: [
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Trắng", colorCode: "rgb(251, 247, 244)" },
        { name: "Xanh Mòng Két", colorCode: "rgb(176, 212, 210)" },
        { name: "Hồng", colorCode: "rgb(255, 110, 180)" },
        { name: "Xanh Lưu Ly", colorCode: "rgb(72, 118, 255)" },
      ],
      productLink:
        "/dtdd/iphone-16?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
  ];
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [activeColor, setActiveColor] = useState(activeProduct.colors[0].name);

  const getImageKey = (colorName: string) => {
    return colorName.replace("Màu ", "");
  };
  type FieldType = {
    userName?: string;
    phoneNumber?: string;
    email?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const handleProductChange = (product: Product) => {
    setActiveProduct(product);
    setActiveCapacity(product.capacities[0]);
    setActiveColor(product.colors[0].name);
  };

  const handleCapacityChange = (capacity: string) => {
    setActiveCapacity(capacity);
    setActiveColor(activeProduct.colors[0].name);
  };
  return (
    <div className="container_info_technical">
      <div className="container">
        <div className="infoTechnical">
          <h4 className="title">Hãy chọn ngay iPhone 16 Series cho bạn nhé!</h4>
          <div className="productList">
            {products.map((product, index) => (
              <div
                key={index}
                className="productItem"
                onClick={() => {
                  setActiveProduct(product);
                  setActiveColor(product.colors[0].name); // Set default color
                }}
              >
                <InfoTechnicalComponent
                  productLink={product.productLink}
                  productName={product.productName}
                  productPrices={product.productPrices}
                  images={product.images}
                  capacities={product.capacities}
                  colors={product.colors}
                />
              </div>
            ))}
          </div>
        </div>

        <button className="button_so_sanh" onClick={() => setModal2Open(true)}>
          <p>
            So sánh các phiên bản iPhone{" "}
            <RightCircleOutlined style={{ color: "blue", fontSize: "24px" }} />
          </p>
        </button>

        <Modal
          title="SO SÁNH CÁC PHIÊN BẢN IPHONE"
          centered
          width={800}
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <Image
            className="image_modal"
            src={imagesModal}
            alt="iphone comparison"
          />
        </Modal>

        <Row className="row_info_technical">
          <Col span={8} className="col8_info_technical">
            <div className="itemProduct">
              <div className="wrapImgFrom">
                <Image
                  src={activeProduct.images[getImageKey(activeColor)]}
                  alt={activeProduct.productName}
                  title={activeProduct.productName}
                />
              </div>

              <div className="FromPrice">
                <div className="productPriceFrom">
                  <span>Giá</span>
                  <b>{activeProduct.productPrices[activeCapacity][activeColor]}</b>
                </div>
                <p>
                  Hoặc thanh toán:{" "}
                  {(
                    parseInt(
                      activeProduct.productPrices[activeCapacity][activeColor].replace(
                        /\D/g,
                        ""
                      )
                    ) / 12
                  ).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}{" "}
                  / tháng <br /> trong 12 tháng
                </p>
              </div>
            </div>
          </Col>
          <Col span={16} className="col16_info_technical">
            <h2 className="title_info_technical">Đặt hàng - Không cần cọc</h2>
            <p className="content_info_technical">
              Vui lòng chọn phiên bản yêu thích nhất của bạn
            </p>
            <div className="btn_productIphone">
              {products.map((product, index) => (
                <button
                  key={index}
                  className={`btn_productIphone_item ${product.productName === activeProduct.productName ? "active" : ""}`}
                  onClick={() => handleProductChange(product)}
                >
                  {product.productName}
                </button>
              ))}
            </div>
            <div className="btn_productIphone" style={{ marginTop: "10px" }}>
              {activeProduct.capacities.map((capacity, index) => (
                <button
                  key={index}
                  className={`btn_productIphone_item ${capacity === activeCapacity ? "active" : ""}`}
                  onClick={() => handleCapacityChange(capacity)}
                >
                  {capacity}
                </button>
              ))}
            </div>
            <div className="listColorProduct" style={{ marginTop: "10px" }}>
              {activeProduct.colors.map((color) => (
                <div
                  key={color.name}
                  title={color.name}
                  className={`${color.name === activeColor ? "active selected" : ""}`}
                  style={{ backgroundColor: color.colorCode }}
                  onClick={() => setActiveColor(color.name)}
                ></div>
              ))}
            </div>
            <Form
              name="basic"
              style={{ maxWidth: 600, margin: "0 auto" }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Tên Khách Hàng"
                name="userName"
                rules={[
                  { required: true, message: "Vui lòng nhập tên khách hàng!" },
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input className="input_info_technical" />
              </Form.Item>

              <Form.Item<FieldType>
                label="Số điện thoại ( Có dùng Zalo)"
                name="phoneNumber"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                  {
                    pattern: /^\d{10}$/,
                    message: "Số điện thoại phải có 10 số!",
                  },
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input className="input_info_technical" />
              </Form.Item>
              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập email!" },
                  { type: "email", message: "Vui lòng nhập email hợp lệ!" },
                ]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input className="input_info_technical" />
              </Form.Item>
              <button className="btn_submitBuyIphone">Đặt hàng</button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
