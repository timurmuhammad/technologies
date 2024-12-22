import { RequestMethod } from "@/utils/request/types/RequestMethod.enum";
import request from "../../utils/request/request";
import IProduct from "@/app/catalog/types/Product.interface";
import { IGetProductsByCategory } from "@/app/catalog/types/GetProductsByCategory.interface";
import { IGetProductsBySimilar } from "@/app/catalog/types/GetProductsBySimilar.interface";

const BASE_URL = 'https://658eab4a2871a9866e799292.mockapi.io/goods'

async function handleResponse(url: string, options: any) {
	const response = await fetch(url, options)

	if (!response.ok) {
		new Error(`${response.status} ${response.statusText}`)
	}
	return response.json();
}

interface ProductsResponse {
    products: IProduct[],
    pages: number
}

export class ProductService {
    // async getAll(page: number, size: number): Promise<ProductsResponse | void> {
    //     try {
    //         const response = await request({
    //             method: RequestMethod.GET,
    //             path: "/api/products/find/all",
    //             data: {
    //                 page: page,
    //                 size
    //             },
    //             isParamData: true
    //         });

    //         return { products: response.data, pages: Math.ceil(response.paginationInfo.amount / size) }
    //     } catch (error) {
    //     }
    // }

    getAll() {
        const response = handleResponse(BASE_URL, { method: 'GET' })

		return response
	}

    // async search(text: string, page: number, size: number): Promise<ProductsResponse | void>  {
    //     try {
    //         const response = await request({
    //             method: RequestMethod.GET,
    //             path: "/api/products/find/search",
    //             data: {
    //                 text,
    //                 page: page,
    //                 size
    //             },
    //             isParamData: true
    //         });

    //         return { products: response.data, pages: Math.ceil(response.paginationInfo.amount / size) }
    //     } catch (error) {
    //     }
    // }

    async search(text: string) {
        const response = await handleResponse(BASE_URL, { method: 'GET' })
        const search = response.filter((item: IProduct) => item.title.includes(text))

		return search
    }

    // async findById(id: string): Promise<IProduct | void> {
    //     try {
    //         const foundProduct = await request({
    //         method: RequestMethod.GET,
    //         path: `/api/products/find/${id}`
    //         });
    //         return foundProduct;
    //     } catch (error) {
    //     }
    // }


    async findById(item: string) {
        const response = handleResponse(BASE_URL + `/${item}`, { method: 'GET' })

		return response
    }


    // async getParentCategories(): Promise<string[]> {
    //     const response = await request({
    //         method: RequestMethod.GET,
    //         path: `/api/products/find/all/category/parent`
    //     });
    //     return response;
    // }

    getParentCategories() {
        const response = handleResponse('https://658eab4a2871a9866e799292.mockapi.io/categories', { method: 'GET' })

		return response
    }

    async getCategoryChilds(parentCategoryName: string): Promise<any> {
        const response = await request({
            method: RequestMethod.GET,
            path: `/api/products/find/child/category/by/parent?text=${parentCategoryName}`
        });
        return response;
    }




    async getProductsByCategory(category: string) {
        const response = await handleResponse(BASE_URL, { method: 'GET' })
        const byCategory = response.filter((item: IProduct) => item.categories === category)

		return byCategory
    }

    // async getProductsByCategory(params: IGetProductsByCategory) {
    //     try {
    //         let path = `/api/products/find/all`;

    //         const body: any = {
    //             size: params.size,
    //             page: params.page
    //         }

    //         if(params.category) {
    //             path = `/api/products/find/category/child`;
    //             if(params.isParent) path = `/api/products/find/category/parent`;

    //             body.category = params.category;
    //         }

    //         const response = await request({
    //             method: RequestMethod.GET,
    //             path,
    //             data: body,
    //             isParamData: true
    //         });
    //         return { products: response, pages: Math.ceil(response.paginationInfo.amount / params.size) }
    //     } catch (error) {
    //     }
    // }


    async getSameProducts(params: IGetProductsBySimilar) {
        const response = await handleResponse(BASE_URL, { method: 'GET' })
        const bySpeed = params.flagDelivery ? response.filter((item: IProduct) => item.shipping_cost > 0) : response
        const byPrice = bySpeed.filter((item: IProduct) => item.price <= params.price)
        const flagSort = params.flagSort ? byPrice.sort((a: IProduct, b: IProduct) => a.price - b.price) : byPrice.sort((a: IProduct, b: IProduct) => b.price - a.price);
        const result = flagSort.filter((item: IProduct, index: number) => index < 8)

		return result
    }

    // async getSameProducts(params: IGetProductsBySimilar): Promise<ProductsResponse> {
    //     let path = `/api/products/find/repeaters/${params.productId}`;

    //     const body: any = {
    //         size: params.size,
    //         page: params.page,
    //         flagSort: params.flagSort,
    //         flagDelivery: params.flagDelivery
    //     }
    //     if(params.price) body.price = params.price;

    //     const response = await request({
    //         method: RequestMethod.GET,
    //         path,
    //         data: body,
    //         isParamData: true
    //     });

    //     return { products: response.data, pages: Math.ceil(response.paginationInfo.amount / params.size) };
    // }
}

export default new ProductService();