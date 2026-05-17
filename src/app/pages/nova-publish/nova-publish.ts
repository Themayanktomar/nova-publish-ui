import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nova-publish',
  imports: [RouterLink],
  templateUrl: './nova-publish.html',
  styleUrl: './nova-publish.scss',
})
export class NovaPublish {
  summaryCards = [
    { label: 'Books reviewed', value: '1,248', trend: '+18% this quarter' },
    { label: 'Alt text approved', value: '8,430', trend: '94% acceptance rate' },
    { label: 'Open QA items', value: '126', trend: '32 high priority' },
  ];

  graphBars = [
    { label: 'Jan', value: 58 },
    { label: 'Feb', value: 72 },
    { label: 'Mar', value: 64 },
    { label: 'Apr', value: 86 },
    { label: 'May', value: 78 },
    { label: 'Jun', value: 92 },
  ];

  historyRows = [
    {
      year: '2021',
      milestone: 'Accessibility review team formed',
      impact: 'Created the first book image-description checklist.',
      score: '62%',
    },
    {
      year: '2022',
      milestone: 'Alt text QA workflow launched',
      impact: 'Centralized chapter reviews and publisher approvals.',
      score: '74%',
    },
    {
      year: '2023',
      milestone: 'Organization-wide tracking added',
      impact: 'Improved visibility across editorial and production teams.',
      score: '83%',
    },
    {
      year: '2024',
      milestone: 'AI-assisted suggestions introduced',
      impact: 'Reduced first-pass writing time for complex figures.',
      score: '91%',
    },
  ];

}
