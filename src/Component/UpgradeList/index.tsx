/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import './upgrade.scss';
import UpgradeModal from '../UpgradeModal';
import { useQuery } from '@tanstack/react-query';

export interface Product {
    id: number;
    title: string;
    oldPrice: string;
    products: any[];
}


const UpgradeList: React.FC = () => {
    const [selectedSeries, setSelectedSeries] = useState<string>('iphone15');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        setSelectedSeries(value);
    };

    const showModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


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
          sku
          uid
          name
          categories {
            name
          }
          price_range {
            minimum_price {
              final_price {
                value
                currency
              }
            }
          }
          image {
            url
          }
        }
      }
    }`;

    const variables = {
        "filter": {
            "category_uid": {
                "eq": "Mjgx"
            }
        },
        "pageSize": 500,
        "currentPage": 1
    };

    async function fetchListProductData() {
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

        const dataList = await response.json();
        return dataList.data.products.items;
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ['productData'],
        queryFn: fetchListProductData,
        staleTime: 300000,
    });

    useEffect(() => {
        if (data) {
            const filtered = data.filter((product: any) => {
                const categoryName = product.categories.map((cat: any) => cat.name.toLowerCase());
                if (selectedSeries === 'iphone13' && categoryName.includes('iphone 13 series')) {
                    return true;
                }
                if (selectedSeries === 'iphone14' && categoryName.includes('iphone 14 series')) {
                    return true;
                }
                if (selectedSeries === 'iphone15' && categoryName.includes('iphone 15 series')) {
                    return true;
                }
                if (selectedSeries === 'iphone11' && categoryName.includes('iphone 11 series')) {
                    return true;
                }
                return false;
            });
            setFilteredProducts(filtered);
        }
    }, [data, selectedSeries]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <div className='upgrade-list'>
            <div className='container'>
                <div className='upgrade'>
                    <div className='upgrade-header'>
                        <h3 className='upgrade-header-tt'>Lên đời iPhone 16 Series</h3>
                        <Select
                            defaultValue="iphone15"
                            className='upgrade-select'
                            onChange={handleChange}
                            options={[
                                { value: 'iphone15', label: 'iPhone 15 Series' },
                                { value: 'iphone14', label: 'iPhone 14 Series' },
                                { value: 'iphone13', label: 'iPhone 13 Series' },
                                { value: 'iphone11', label: 'iPhone 11 Series' },
                            ]}
                            placeholder="Chọn dòng máy bạn đang dùng"
                        />
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
                        {filteredProducts.map((product: any, index: number) => (
                            <SwiperSlide key={index}>
                                <div className='upgrade-item' onClick={() => showModal({
                                    id: product.uid,
                                    title: product.name,
                                    oldPrice: `${product.price_range.minimum_price.final_price.value.toLocaleString('vi-VN')} ${product.price_range.minimum_price.final_price.currency}`,
                                    products: []
                                })}>
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
                                        <button
                                            className='upgrade-item-content-button'
                                            onClick={() => showModal(product)}
                                        >
                                            Xem chi tiết
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <UpgradeModal
                isModalOpen={isModalOpen}
                selectedProduct={selectedProduct ? {
                    id: selectedProduct.id,
                    name: selectedProduct.title,
                    price: 0,
                    currency: 'VNĐ', products: []
                } : null}
                handleCancel={handleCancel}
            />
        </div>
    );
};

export default UpgradeList;
