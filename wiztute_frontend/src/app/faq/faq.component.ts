import { Component, OnInit, Input } from '@angular/core';
import { FAQService } from './faq.service';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(public faqService : FAQService) { }
  @Input() faqs = [];
  ngOnInit() {
    
  }
}
