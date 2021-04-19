import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServicesService } from '../shared/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiServicesService) { }

  getCategoryLists() {
    return this.apiService.get(environment.categories_url , []);
  }

  getProductLists(categoryName: string) {
    return this.apiService.get(environment.products_url + '/' + categoryName , []);
  }
}
