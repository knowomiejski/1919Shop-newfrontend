import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {CategoryService} from '../../services/category.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  message = '';
  filterd: ProductModel[] = [];
  productlist: ProductModel[] = [];
  css = {
    'flex-basis': '100%',
    'flex-grow': '5'
  };


  constructor(private categoryService: CategoryService, private productService: ProductService) {
  }

  ngOnInit() {
    console.log('BEGINNING: ' + this.categoryService.category);
    this.productService.loadProducts();
    this.productService.currentProductList.subscribe((status: string) => {
      if (status === 'loaded') {
        this.productlist = this.productService.getProducts();
        this.filterByCategory();
        if (this.categoryService.category === 'reload') {
          this.filterd = this.productlist;
          this.message = '';
          console.log(this.categoryService.category + ' category in if!');
        }
      }
    });


    this.categoryService.activeCategory.subscribe(() => {
      if (this.categoryService.category === 'reload') {
        this.filterd = this.productlist;
        this.message = '';
        console.log('in the reload on init');
      } else {
        this.filterByCategory();
      }
    });

    console.log('END: ' + this.categoryService.category);

  }

  filterByCategory() {
    const categoryMeme = this.categoryService.category.toLowerCase();
    this.productlist.forEach(product => {
      const lowerName = product.name.toLowerCase();
      const lowerDesc = product.description.toLowerCase();
      if (lowerName.match(categoryMeme) ||
        lowerDesc.match(categoryMeme)) {
        this.filterd.push(product);
      }
    });

    if (this.filterd.length === 0) {
      this.message = 'No matches for this category';
    }

  }

}
