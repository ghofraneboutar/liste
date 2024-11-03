import { Component } from '@angular/core';
import { Article } from '../models/article';
import { AjoutArticleComponent } from "../add-article/add-article.component";

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [AjoutArticleComponent],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent {
  title = "Liste des nouveaux articles :";
   Articles = [
    new Article(1,"Article 1", "photo1","02/11/2024","description1",0),//jib des articles mil internet 
    new Article(2,"Article 2", "photo2","02/11/2024","description2", 0),
    new Article(3,"Article 3", "photo3","02/11/2024","description3", 0),
  ];
  action = "";

  changeAction(action : string){
    this.action = action;
  }
  addArticle(Article:Article){
    this.Articles=[...this.Articles,Article];
    this.changeAction("");
  }
  add(Article :Article){
  Article.score++;
  }
  remove(Article :Article){
    if (Article.score > 0) {
      Article.score--; 
  }
}
  TriArticles() {
  return this.Articles.sort((a,b) => b.score -a.score);
}
 filtrerArticle(searchInput :string):void{
  this.Articles=this.Articles.filter(Article => Article.titre.includes(searchInput));
    }
}

