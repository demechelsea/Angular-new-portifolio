import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/models/models';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: 75,
    },
    {
      name: 'Python',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML, CSS and JS',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'Django',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Spring boot',
      level: 'Beginner',
      rating: 55,
    }
  ]
  ngOnInit(): void {}

}
