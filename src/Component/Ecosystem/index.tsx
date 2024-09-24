/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Spin } from 'antd';

export interface Product {
  id: number;
  title: string;
  oldPrice: string;
  products: any[];
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
      "eq": "MzIz"
    }
  },
  "pageSize": 300,
  "currentPage": 1
};

async function fetchEcosystemData() {
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

const Ecosystem: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['ecosystemData'],
    queryFn: fetchEcosystemData,
    staleTime: 300000,
  });


  if (isLoading) return <div className='loading'>
    <Spin />
  </div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className='upgrade-list'>
      <div className='container'>
        <div className='upgrade'>
          <div className='upgrade-header'>
            <h3 className='upgrade-header-tt'>Hệ sinh thái Apple</h3>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView="auto"
            speed={1000}
            navigation
            breakpoints={{
              400: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              850: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {data.map((product: any, index: number) => (
              <SwiperSlide key={index}>
                <Link
                  href={`https://bachlongmobile.com/products/${product.url_key}`}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <div className='upgrade-item'>
                    <div className="upgrade-item-img">
                      <Image
                        src={product.image.url}
                        width={1400}
                        height={1200}
                        quality={100}
                        alt={`product-${index}`}
                      />
                    </div>
                    <div className="upgrade-item-content">
                      <h4 className='upgrade-item-content-tt'>
                        {product.name}
                      </h4>
                      <div className='upgrade-item-content-body'>
                        <span className='upgrade-item-content-body-tt'>Giá: </span>
                        <div className="upgrade-item-content-body-price">
                          {product.price_range.minimum_price.final_price.value.toLocaleString('vi-VN')} {product.price_range.minimum_price.final_price.currency}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
