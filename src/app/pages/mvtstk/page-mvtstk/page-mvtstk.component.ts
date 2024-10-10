import { Component } from '@angular/core';
import { DetailArticleComponent } from "../../../composants/detail-article/detail-article.component";
import { PaginationComponent } from "../../../composants/pagination/pagination.component";
import { BottonActionComponent } from "../../../composants/botton-action/botton-action.component";
import { DetailMvtStkArticleComponent } from "../../../composants/detail-mvt-stk-article/detail-mvt-stk-article.component";
import { DetailMvtStkComponent } from "../../../composants/detail-mvt-stk/detail-mvt-stk.component";

@Component({
  selector: 'app-page-mvtstk',
  standalone: true,
  imports: [DetailArticleComponent, PaginationComponent, BottonActionComponent, DetailMvtStkArticleComponent, DetailMvtStkComponent],
  templateUrl: './page-mvtstk.component.html',
  styleUrl: './page-mvtstk.component.css'
})
export class PageMvtstkComponent {

}
