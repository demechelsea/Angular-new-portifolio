import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit{
workExpList: WorkExperience[] = [
  {
    role: 'Full-stack developer',
    company: 'Cooperative Bank of Oromia',
    duration: 'Nov 2022 - present',
    description: ['Core System Full-stack developer.',
    'Developing web and mobile applications using Angular.',
    'Monitoring the core system of the bank.']
  },
  {
    role: 'Bank Trainee',
    company: 'Bank of Abyssinia',
    duration: 'Sep 2022 - Nov 2022',
    description: ['Managing opening and closing accounts.',
    'Processing deposits, payments, and withdrawals.',
    'Understand and practice all guidelines of KYC.']
  },
  {
    role: 'Frontend Developer',
    company: 'Oromia Broadcastig Network',
    duration: 'Apr 2021 - Dec 2021',
    description: ['System automation front-end developer.',
    'Developed a web app which helps monitoring data flow.']
  },
  {
    role: 'Full-stack Developer',
    company: 'Hawi Software Solution',
    duration: 'Jun 2018 - Jun 2020',
    description: ['Developed a web app by using Angular and Django.',
    'A telegram bot for student registration.']
  }
]


constructor(){}

ngOnInit(): void {}
}
