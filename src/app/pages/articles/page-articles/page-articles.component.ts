import { Component } from '@angular/core';
import { DetailArticleComponent } from "../../../composants/detail-article/detail-article.component";

@Component({
  selector: 'app-page-articles',
  standalone: true,
  imports: [DetailArticleComponent],
  templateUrl: './page-articles.component.html',
  styleUrl: './page-articles.component.css'
})
export class PageArticlesComponent {

}
