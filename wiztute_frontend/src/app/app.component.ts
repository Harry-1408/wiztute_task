import { Component, OnInit } from '@angular/core';
import { FAQService } from './faq/faq.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  dataSource = [];
  constructor(public faqService : FAQService) { }
  ngOnInit(){
    this.faqService.getFaqs().subscribe(res =>{
      this.dataSource= res.FAQs;
    });
  }
}
