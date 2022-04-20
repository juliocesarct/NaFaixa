import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories: string[] = ["Cartões","Cursos","E-books/Livros","Jogos","Softwares/Apps","Streamings","Vales"];

  constructor() { }

  ngOnInit(): void {
  }

}
