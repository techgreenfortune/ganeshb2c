/**
 * Deals service - handles all deal-related operations
 * Following the Single Responsibility Principle - this service handles only deal operations
 */
import { Deal, DealFilter, ApiResponse, PaginatedResponse } from '@/types/common';
import { apiService } from './api';

class DealsService {
  /**
   * Get all deals with optional filtering, pagination and sorting
   */
  async getDeals(
    page = 1, 
    pageSize = 10, 
    filters?: DealFilter, 
    sort?: string
  ): Promise<ApiResponse<PaginatedResponse<Deal>>> {
    const queryParams = new URLSearchParams();
    
    // Add pagination params
    queryParams.append('page', page.toString());
    queryParams.append('pageSize', pageSize.toString());
    
    // Add sorting if provided
    if (sort) {
      queryParams.append('sort', sort);
    }
    
    // Add filters if provided
    if (filters) {
      if (filters.category) queryParams.append('category', filters.category);
      if (filters.status) queryParams.append('status', filters.status);
      if (filters.minPrice) queryParams.append('minPrice', filters.minPrice.toString());
      if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice.toString());
      if (filters.tags && filters.tags.length) {
        filters.tags.forEach(tag => queryParams.append('tags', tag));
      }
    }
    
    return apiService.get<PaginatedResponse<Deal>>(`/deals?${queryParams.toString()}`);
  }
  
  /**
   * Get a single deal by ID
   */
  async getDealById(id: string): Promise<ApiResponse<Deal>> {
    return apiService.get<Deal>(`/deals/${id}`);
  }
  
  /**
   * Get deals by category
   */
  async getDealsByCategory(category: string, page = 1, pageSize = 10): Promise<ApiResponse<PaginatedResponse<Deal>>> {
    return apiService.get<PaginatedResponse<Deal>>(
      `/deals/category/${category}?page=${page}&pageSize=${pageSize}`
    );
  }
  
  /**
   * Get featured deals
   */
  async getFeaturedDeals(): Promise<ApiResponse<Deal[]>> {
    return apiService.get<Deal[]>('/deals/featured');
  }
  
  /**
   * Search deals by query
   */
  async searchDeals(query: string, page = 1, pageSize = 10): Promise<ApiResponse<PaginatedResponse<Deal>>> {
    return apiService.get<PaginatedResponse<Deal>>(
      `/deals/search?q=${encodeURIComponent(query)}&page=${page}&pageSize=${pageSize}`
    );
  }
  
  /**
   * Get available deal categories
   */
  async getCategories(): Promise<ApiResponse<string[]>> {
    return apiService.get<string[]>('/deals/categories');
  }
  
  /**
   * Get popular tags
   */
  async getPopularTags(): Promise<ApiResponse<string[]>> {
    return apiService.get<string[]>('/deals/tags');
  }
}

// Export as a singleton
export const dealsService = new DealsService();
