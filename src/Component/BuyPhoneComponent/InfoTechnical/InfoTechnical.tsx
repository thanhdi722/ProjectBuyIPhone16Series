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
// Types for the product and colors
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

type Product = {
  productName: string;
  productPrices: { [color: string]: string };
  images: { [key: string]: StaticImageData };
  colors: Array<{ name: string; colorCode: string }>;
  productLink: string;
};
const query = `query getProducts(
  $search: String
  $filter: ProductAttributeFilterInput
  $sort: ProductAttributeSortInput
  $pageSize: Int
  $currentPage: Int
) {
  products(
    search: $search
    filter: $filter
    sort: $sort
    pageSize: $pageSize
    currentPage: $currentPage
  ) {
    items {
      ...ProductInterfaceField
    }
    aggregations {
      attribute_code
      count
      label
      options {
        count
        label
        value
        swatch_data {
          type
          value
        }
      }
      position
    }
    sort_fields {
      default
      options {
        label
        value
      }
    }
    total_count
    page_info {
      current_page
      page_size
      total_pages
    }  }
}
fragment ProductInterfaceField on ProductInterface {
 image_banner
  __typename
  sku
  uid
  name
  url_key
  url_suffix
  canonical_url
  stock_status
  categories {
    __typename
    name
    url_key
    url_path
    level
    uid
    position
    icon_image
    image
    path
  }
  id
  meta_description
  meta_keyword
  meta_title
  new_from_date
  new_to_date
  rating_summary
  review_count
  thumbnail {
    url
    position
  }
  image {
    url
  }
  price_range {
    ...PriceRangeField
  }
  ...CustomField
}
fragment CustomField on ProductInterface {
  color
  country_of_manufacture
  daily_sale {
    end_date
    entity_id
    sale_price
    sale_qty
    saleable_qty
    sold_qty
    start_date
    __typename
  }
  rating_summary_start {
    star_1
    star_2
    star_3
    star_4
    star_5
  }
  attributes {
    attribute_code
    label
    value
  }
}
fragment PriceRangeField on PriceRange {
  __typename
  maximum_price {
    ...ProductPriceField
  }
  minimum_price {
    ...ProductPriceField
  }
}
fragment ProductPriceField on ProductPrice {
  discount {
    amount_off
    percent_off
  }
  final_price {
    currency
    value
  }
  regular_price {
    currency
    value
  }
} `;
const variables = {
  filter: {
    category_uid: {
      eq: "Mjgy",
    },
  },
  pageSize: 20,
  currentPage: 1,
};
export default function InfoTechnical() {
  const [productsData, setProductsData] = useState<GraphQLResponse | null>(
    null
  );
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const response = await fetch(
      "https://beta-api.bachlongmobile.com/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      }
    );

    const data = await response.json();
    setProductsData(data);
  };

  const [modal2Open, setModal2Open] = useState(false);
  console.log("productsData", productsData);
  const products: Product[] = [
    {
      productName: "iPhone 16 Pro Max",
      productPrices: {
        "Titan Đen": `${
          productsData?.data?.route?.variants[0]?.product?.price_range?.minimum_price?.final_price?.value.toLocaleString(
            "vi-VN"
          ) ?? "N/A"
        }`,
        "Titan Sa Mạc": "45.690.000₫",
        "Titan Tự Nhiên": "45.990.000₫",
        "Titan Trắng": "45.990.000₫",
      },
      images: {
        "Titan Đen": iphone16ProBlack,
        "Titan Sa Mạc": iphone16DesertPro,
        "Titan Tự Nhiên": iphone16TitanPro,
        "Titan Trắng": iphone16WhitePro,
      },

      colors: [
        { name: "Titan Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Titan Sa Mạc", colorCode: "rgb(255, 218, 185)" },
        { name: "Titan Tự Nhiên", colorCode: "rgb(250, 235, 215)" },
        { name: "Titan Trắng", colorCode: "rgb(232, 232, 232)	" },
      ],
      productLink:
        "/dtdd/iphone-16-pro-max?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16 Pro",
      productPrices: {
        "Titan Đen": "42.690.000₫",
        "Titan Sa Mạc": "42.690.000₫",
        "Titan Tự Nhiên": "42.690.000₫",
        "Titan Trắng": "42.690.000₫",
      },
      images: {
        "Titan Đen": iphone16ProBlack,
        "Titan Sa Mạc": iphone16DesertPro,
        "Titan Tự Nhiên": iphone16TitanPro,
        "Titan Trắng": iphone16WhitePro,
      },

      colors: [
        { name: "Titan Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Titan Sa Mạc", colorCode: "rgb(255, 218, 185)" },
        { name: "Titan Tự Nhiên", colorCode: "rgb(250, 235, 215)" },
        { name: "Titan Trắng", colorCode: "rgb(232, 232, 232)	" },
      ],
      productLink:
        "/dtdd/iphone-16-pro?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16 Plus",
      productPrices: {
        Đen: "33.690.000₫",
        Trắng: "33.690.000₫",
        "Xanh Mòng Két": "33.690.000₫",
        Hồng: "33.690.000₫",
        "Xanh Lưu Ly": "33.690.000₫",
      },
      images: {
        Đen: iphone16Black,
        Trắng: iphone16White,
        "Xanh Mòng Két": iphone16Green,
        Hồng: iphone16Pink,
        "Xanh Lưu Ly": iphone16Blue,
      },

      colors: [
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Trắng", colorCode: "rgb(232, 232, 232)	" },
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
        Đen: "30.690.000₫",
        Trắng: "30.690.000₫",
        "Xanh Mòng Két": "30.690.000₫",
        Hồng: "30.690.000₫",
        "Xanh Lưu Ly": "30.690.000₫",
      },
      images: {
        Đen: iphone16Black,
        Trắng: iphone16White,
        "Xanh Mòng Két": iphone16Green,
        Hồng: iphone16Pink,
        "Xanh Lưu Ly": iphone16Blue,
      },
      colors: [
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Trắng", colorCode: "rgb(232, 232, 232)	" },
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
                  productName={product.productName}
                  productPrices={product.productPrices}
                  // productPrices={product.productPrices}
                  images={product.images}
                  // capacities={product.capacities}
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
                  <b>{activeProduct.productPrices[activeColor]}</b>
                </div>
                <p>
                  Hoặc thanh toán:{" "}
                  {(
                    parseInt(
                      activeProduct.productPrices[activeColor].replace(
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
              <button className="btn_productIphone_item">
                iPhone 16 Pro Max
              </button>
              <button className="btn_productIphone_item">iPhone 16 Pro</button>
              <button className="btn_productIphone_item">iPhone 16 Plus</button>
              <button className="btn_productIphone_item">iPhone 16</button>
            </div>
            <div className="btn_productIphone" style={{ marginTop: "10px" }}>
              <button className="btn_productIphone_item">128GB</button>
              <button className="btn_productIphone_item">256GB</button>
              <button className="btn_productIphone_item">512GB</button>
              <button className="btn_productIphone_item">1TB</button>
            </div>
            <div className="listColorProduct" style={{ marginTop: "10px" }}>
              {activeProduct.colors.map((color) => (
                <div
                  key={color.name}
                  title={color.name}
                  className={`${
                    color.name === activeColor ? "active selected" : ""
                  }`}
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
