import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resumen2',
  templateUrl: './resumen2.component.html',
  styleUrls: ['./resumen2.component.css']
})
export class Resumen2Component implements OnInit {

  constructor(private router: Router ,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
    this.router.navigate(['/resumen']);
  }

}
