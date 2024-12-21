import { IPagination } from "@/app/catalog/types/Pagination.interface";

export interface IGetProductsByCategory extends IPagination {
  isParent: boolean;
  category?: string | null | undefined;
}