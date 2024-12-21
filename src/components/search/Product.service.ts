import { RequestMethod } from "@/utils/request/types/RequestMethod.enum";
import request from "../../utils/request/request";
import IProduct from "@/app/catalog/types/Product.interface";
import { IGetProductsByCategory } from "@/app/catalog/types/GetProductsByCategory.interface";
import { IGetProductsBySimilar } from "@/app/catalog/types/GetProductsBySimilar.interface";

interface ProductsResponse {
    products: IProduct[],
    pages: number
}

export class ProductService {
    async getAll(page: number, size: number): Promise<ProductsResponse | void> {
        try {
            const response = await request({
                method: RequestMethod.GET,
                path: "/api/products/find/all",
                data: {
                    page: page,
                    size
                },
                isParamData: true
            });

            return { products: response.data, pages: Math.ceil(response.paginationInfo.amount / size) }
        } catch (error) {
        }
    }

    async search(text: string, page: number, size: number): Promise<ProductsResponse | void>  {
        try {
            const response = await request({
                method: RequestMethod.GET,
                path: "/api/products/find/search",
                data: {
                    text,
                    page: page,
                    size
                },
                isParamData: true
            });

            return { products: response.data, pages: Math.ceil(response.paginationInfo.amount / size) }
        } catch (error) {
        }
    }

    async findById(id: string): Promise<IProduct | void> {
        try {
            const foundProduct = await request({
            method: RequestMethod.GET,
            path: `/api/products/find/${id}`
            });
            return foundProduct;
        } catch (error) {
        }
    }

    async getParentCategories(): Promise<string[]> {
        const response = await request({
            method: RequestMethod.GET,
            path: `/api/products/find/all/category/parent`
        });
        return response;
    }

    async getCategoryChilds(parentCategoryName: string): Promise<any> {
        const response = await request({
            method: RequestMethod.GET,
            path: `/api/products/find/child/category/by/parent?text=${parentCategoryName}`
        });
        return response;
    }

    async getProductsByCategory(params: IGetProductsByCategory) {
        try {
            let path = `/api/products/find/all`;

            const body: any = {
                size: params.size,
                page: params.page
            }

            if(params.category) {
                path = `/api/products/find/category/child`;
                if(params.isParent) path = `/api/products/find/category/parent`;

                body.category = params.category;
            }

            const response = await request({
                method: RequestMethod.GET,
                path,
                data: body,
                isParamData: true
            });
            return { products: response, pages: Math.ceil(response.paginationInfo.amount / params.size) }
        } catch (error) {
        }
    }

    async getSameProducts(params: IGetProductsBySimilar): Promise<ProductsResponse> {
        let path = `/api/products/find/repeaters/${params.productId}`;

        const body: any = {
            size: params.size,
            page: params.page,
            flagSort: params.flagSort,
            flagDelivery: params.flagDelivery
        }
        if(params.price) body.price = params.price;

        const response = await request({
            method: RequestMethod.GET,
            path,
            data: body,
            isParamData: true
        });

        return { products: response.data, pages: Math.ceil(response.paginationInfo.amount / params.size) };
    }
}

export default new ProductService();