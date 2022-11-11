import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-segmentation',
  templateUrl: './customer-segmentation.component.html',
  styleUrls: ['./customer-segmentation.component.scss']
})
export class CustomerSegmentationComponent implements OnInit {

  selectedItem = 0;
  body = [
    `<p>Segmentation allows marketers to better tailor their marketing efforts to various audience subsets. Those
    efforts can relate to both communications and product development. Specifically, segmentation helps a company:
  </p>

  <ul>
    <li>
      Create and communicate targeted marketing messages that will resonate with specific groups of customers, but
      not
      with others (who will receive messages tailored to their needs and interests, instead).</li>
    <li>Select the best communication channel for the segment, which might be email, social media posts, radio
      advertising, or another approach, depending on the segment.</li>
    <li>Identify ways to improve products or new product or service opportunities.</li>
    <li>Establish better customer relationships.</li>
    <li>Test pricing options.</li>
    <li>Focus on the most profitable customers.</li>
    <li>Improve customer service.</li>
    <li>Upsell and cross-sell other products and services.</li>
  </ul>`,
    `<ul>
      <li>
        Missing key customers</li>
      <li>Free & reduced lunch and Bid/RFP are not the best parameters to evaluate</li>
      <li>Leverage our new market insights and align with Organization value proposition</li>
    </ul>`,
    `
    <ul>
      <li>
        General feedback</li>
      <li>How to integrate this into how Key Impact views customers</li>
      <li>How to make this actionable</li>
    </ul>
    `
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
