const query = `query router($url:String!){route(url:$url){... on ConfigurableProduct{...ProductFields Installment_products image_banner categories{__typename name id uid level url_path parent_id}media_gallery{__typename url label disabled position ... on ProductVideo{video_content{video_provider video_url video_title media_type video_metadata}}}...PoductFiledConfigurable ...ConfigurableProductField options{...CustomizableOption}}... on SimpleProduct{...ProductFields image_banner __typename categories{__typename name uid level url_path}media_gallery{__typename url label disabled position ... on ProductVideo{video_content{video_provider video_url video_title media_type video_metadata}}}...PoductFiledSimple options{...CustomizableOption}}}}fragment PoductFiledSimple on ProductInterface{Installment_products attribute_set_id canonical_url category_for_product color country_of_manufacture created_at gift_message_available id manufacturer meta_description meta_keyword meta_title name new_from_date new_to_date only_x_left_in_stock options_container percent rating_summary review_count sku special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path url_suffix attributes{attribute_code label value}image{__typename disabled label position url}special_price price_range{__typename maximum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}}minimum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}}}short_description{html}description{html}}fragment PoductFiledConfigurable on ProductInterface{attribute_set_id category_for_product color country_of_manufacture created_at id manufacturer meta_description meta_keyword meta_title name options_container rating_summary sku special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path url_suffix accessories_bought_together{sku attribute_set_id canonical_url category_for_product color country_of_manufacture id manufacturer meta_description meta_keyword meta_title name new_from_date new_to_date options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}maximum_price{final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}old_products{sku attribute_set_id canonical_url category_for_product color id manufacturer meta_description meta_keyword meta_title name options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}maximum_price{final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}upsell_products{sku attribute_set_id canonical_url category_for_product color country_of_manufacture id manufacturer meta_description meta_keyword meta_title name options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}related_products{sku attribute_set_id canonical_url category_for_product color country_of_manufacture id manufacturer meta_description meta_keyword meta_title name options_container percent rating_summary review_count special_from_date special_price special_to_date stock_status swatch_image type_id uid url_key url_path attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{discount{amount_off percent_off}final_price{currency value}regular_price{currency value}}}reviews{items{average_rating created_at nickname summary text}}small_image{disabled label position url}thumbnail{disabled label position url}}crosssell_products{name category_for_product color created_at id meta_title name options_container rating_summary sku special_from_date special_price special_to_date stock_status swatch_image type_id uid updated_at url_key url_path price_range{minimum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}regular_price{__typename currency value}}}attributes{attribute_code label value}image{disabled label position url}small_image{disabled label position url}...ConfigurableProductField}attributes{attribute_code label value}image{disabled label position url}price_range{minimum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}regular_price{__typename currency value}}}review_count short_description{html}description{html}small_image{disabled label position url}thumbnail{disabled label position url}}fragment ConfigurableProductField on ConfigurableProduct{configurable_options{label attribute_code uid attribute_uid values{default_label label uid swatch_data{__typename value}}}configurable_product_options_selection{__typename configurable_options{attribute_code label uid values{__typename uid label is_use_default is_available}}}variants{attributes{code label uid value_index}product{__typename sku name daily_sale{sale_price}image{url}price_range{maximum_price{__typename discount{__typename amount_off percent_off}final_price{__typename currency value}}minimum_price{discount{__typename amount_off percent_off}final_price{__typename currency value}regular_price{__typename currency value}}}small_image{__typename disabled label position url}url_key}}}fragment CustomizableOption on CustomizableOptionInterface{... on CustomizableDropDownOption{option_id required sort_order title uid value{option_type_id price price_type title sort_order uid}}}fragment ProductFields on ProductInterface{daily_sale{end_date entity_id sale_price sale_qty saleable_qty sold_qty start_date __typename}} `;
const productUrls = {
    "iphone-16-plus-512gb": "iphone-16-plus-512gb-chinh-hang-vn-a",
    "iphone-16-pro-max-1tb": "iphone-16-pro-max-1tb-chinh-hang-vn-a",
    "iphone-16-pro-max-512gb": "iphone-16-pro-max-512gb-chinh-hang-vn-a",
    "iphone-16-pro-max-256gb": "iphone-16-pro-max-256gb-chinh-hang-vn-a",
    "iphone-16-pro-1tb": "iphone-16-pro-1tb-chinh-hang-vn-a",
    "iphone-16-pro-512gb": "iphone-16-pro-512gb-chinh-hang-vn-a",
    "iphone-16-pro-256gb": "iphone-16-pro-256gb-chinh-hang-vn-a",
    "iphone-16-pro-128gb": "iphone-16-pro-128gb-chinh-hang-vn-a",
    "iphone-16-plus-256gb": "iphone-16-plus-256gb-chinh-hang-vn-a",
    "iphone-16-plus-128gb": "iphone-16-plus-128gb-chinh-hang-vn-a",
    "iphone-16-512gb": "iphone-16-512gb-chinh-hang-vn-a",
    "iphone-16-256gb": "iphone-16-256gb-chinh-hang-vn-a",
    "iphone-16-128gb": "iphone-16-128gb-chinh-h-ng-vn-a",
  };
  
  export const fetchProducts = async (productKey: keyof typeof productUrls) => {
    const variables = { url: productUrls[productKey] };
  
    const response = await fetch("https://beta-api.bachlongmobile.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  
    const data = await response.json();
    return data;
  };
  