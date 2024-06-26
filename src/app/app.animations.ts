// src/app/animations.ts
import { trigger, style, transition, animate, state } from '@angular/animations';

export const taskAnimations = [
  trigger('taskAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ]),
    transition(':leave', [
      animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
    ])
  ]),
  trigger('toggleCompletion', [
    state('false', style({ textDecoration: 'none', color: 'black' })),
    state('true', style({ textDecoration: 'line-through', color: 'gray' })),
    transition('false <=> true', [
      animate('300ms ease-in-out')
    ])
  ])
];
