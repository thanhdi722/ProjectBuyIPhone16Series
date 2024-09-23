/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import './upgrade-modal.scss';

interface Product {
    id: number;
    name: string;
    price: number;
    currency: string;
    products: any[];
}

interface UpgradeModalProps {
    isModalOpen: boolean;
    selectedProduct: Product | null;
    handleCancel: () => void;
}

const query = `
 query getProducts(
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
}
`;

const variables = {
    "filter": {
        "category_uid": {
            "eq": "Mjgy"
        }
    },
    "pageSize": 20,
    "currentPage": 1
};

async function fetchProductData() {
    const response = await fetch('https://beta-api.bachlongmobile.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    const data = await response.json();

    return data.data.products.items;
}


const UpgradeModal: React.FC<UpgradeModalProps> = ({ isModalOpen, selectedProduct, handleCancel }) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['productData'],
        queryFn: fetchProductData,
        staleTime: 300000,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    const filteredData = data.filter((product: any) => {
        const categoryName = product.categories.map((cat: any) => cat.name.toLowerCase());
        return categoryName.includes('iphone 16 series');
    });

    return (
        <Modal
            title={<div style={{ color: '#ff4d4f', fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center' }}>
                BẢNG GIÁ THAM KHẢO THU CŨ {selectedProduct?.name}
            </div>}
            open={isModalOpen}
            onCancel={handleCancel}
            className='modal'
            footer={null}
        >
            {selectedProduct && (
                <div className='modal-list'>
                    {filteredData.map((product: any) => {
                        const buyupPriceAttribute = product?.attributes?.find((attr: any) => attr.attribute_code === 'buyup_price');
                        const buyupPrice = buyupPriceAttribute ? Number(buyupPriceAttribute.value) : null;

                        const finalPrice = product.price_range.minimum_price.final_price.value;

                        const payMore = buyupPrice ? finalPrice - buyupPrice : null;

                        return (
                            <div className='modal-list-item' key={product.id}>
                                <div className="modal-list-item-img">
                                    <Image
                                        src={product?.image?.url}
                                        width={1400}
                                        height={1200}
                                        quality={100}
                                        alt={`product-${product.id}`}
                                    />
                                </div>
                                <div className="modal-list-item-content">
                                    <h4 className='modal-list-item-content-tt'>
                                        {product.name}
                                    </h4>
                                    <div className='modal-list-item-content-body'>
                                        <span className='modal-list-item-content-body-tt red-bg'>Giá dự kiến</span>
                                        <div className="modal-list-item-content-body-price">
                                            {finalPrice.toLocaleString('vi-VN')} {product.price_range.minimum_price.final_price.currency}
                                        </div>
                                    </div>
                                    <div className='modal-list-item-content-body'>
                                        <span className='modal-list-item-content-body-tt blue-bg'>Giá thu dự kiến</span>
                                        <div className="modal-list-item-content-body-price">
                                            {buyupPrice ? buyupPrice.toLocaleString('vi-VN') : '---'} {buyupPrice && product.price_range.minimum_price.final_price.currency}
                                        </div>
                                    </div>
                                    <div className='modal-list-item-content-body'>
                                        <span className='modal-list-item-content-body-tt yellow-bg'>Trả thêm</span>
                                        <div className="modal-list-item-content-body-price">
                                            {payMore ? payMore.toLocaleString('vi-VN') : '---'} {buyupPrice && product.price_range.minimum_price.final_price.currency}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </Modal>
    );
};


export default UpgradeModal;
