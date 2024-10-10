import { Component } from '@angular/core';
import { DetailArticleComponent } from "../../../composants/detail-article/detail-article.component";
import { PaginationComponent } from "../../../composants/pagination/pagination.component";
import { BottonActionComponent } from "../../../composants/botton-action/botton-action.component";

@Component({
  selector: 'app-page-articles',
  standalone: true,
  imports: [DetailArticleComponent, PaginationComponent, BottonActionComponent],
  templateUrl: './page-articles.component.html',
  styleUrl: './page-articles.component.css'
})
export class PageArticlesComponent {

}
