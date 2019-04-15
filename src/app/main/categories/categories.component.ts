import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private e: string;

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
  }

  onChooseCategory(meme) {
    if (meme.match('strat')) {
      this.categoryService.activeCategory.next('Stratocaster');
      this.router.navigate(['/shop']);
    } else if (meme.match('lespaul')) {
      this.categoryService.activeCategory.next('Les Paul');
      this.router.navigate(['/shop']);
    } else if (meme.match('acoustic')) {
      this.categoryService.activeCategory.next('Acoustic');
      this.router.navigate(['/shop']);
    }
  }
}
