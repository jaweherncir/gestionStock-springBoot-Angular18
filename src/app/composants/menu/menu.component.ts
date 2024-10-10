import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { Menu } from './menu';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent  {

  public menuProperties:Array<Menu>=[{
    id:'1',
    titre:'Tableau de bord',
    icon:'fa-solid fa-chart-line',
    url:'',
    sousMenu:[
      {
        id:'11',
        titre:'Vue d\'ensemble',
        icon:'fa-solid fa-chart-pie',
        url:'',
      },
      {
        id:'12',
        titre:'Statstique',
        icon:'fa-solid fa-chart-column',
        url:'statstique',
      }
    ]},
    {
      id:'2',
      titre:'Articles',
      icon:'fas fa-boxes',
      url:'',
      sousMenu:[
        {
          id:'21',
          titre:'Articles',
          icon:'fas fa-boxes',
          url:'articles',
        },
        {
          id:'22',
          titre:'Mouvements de Stock',
          icon:'fab fa-stack-overflow',
          url:'mvtstk',
        }
      ]
    },
    {
      id:'3',
      titre:'Clients',
      icon:'fas fa-users',
      url:'',
      sousMenu:[
        {
          id:'31',
          titre:'Clients',
          icon:'fas fa-users',
          url:'',
        },
        {
          id:'32',
          titre:'Commandes clients',
          icon:'fas fa-shopping-basket',
          url:'',
        }
      ]
    },
    {
      id:'4',
      titre:'Fournisseurs',
      icon:'fas fa-users',
      url:'',
      sousMenu:[
        {
          id:'41',
          titre:'Fournisseurs',
          icon:'fas fa-users',
          url:'',
        },
        {
          id:'42',
          titre:'Commandes Fournisseurs',
          icon:'fas fa-truck',
          url:'',
        }
      ]
    },
    {
      id:'5',
      titre:'Paramètrage',
      icon:'fas fa-cogs',
      url:'',
      sousMenu:[
        {
          id:'51',
          titre:'catégories',
          icon:'fas fa-tools',
   
          url:'',
        },
        {
          id:'52',
          titre:'Utilisateurs',
          icon:'fas fa-users-cog',
          url:'',
        }
      ]
    },
  
  ];

constructor(
  private router:Router
){

}
navigate(url?:string):void{
this.router.navigate([url]);
}

}
