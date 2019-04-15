import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  activeCategory: Subject<string>;
  category = '';

  constructor() {
    this.activeCategory = new Subject();
    this.activeCategory.asObservable();
    this.activeCategory.subscribe((meme: string) => {
      this.category = meme;
    });
  }

}
