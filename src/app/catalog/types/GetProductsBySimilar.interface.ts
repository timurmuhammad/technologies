import { IPagination } from "@/app/catalog/types/Pagination.interface";

export interface IGetProductsBySimilar extends IPagination {
  productId: string;
  flagSort: boolean;
  flagDelivery: boolean;
  price?: number;
}