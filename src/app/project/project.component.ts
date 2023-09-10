import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Signature and Stamp checking website',
      technologies: 'HTML, CSS, JS, TS and Angular',
      description: [
        'It checks whether the stamp and signature are real or not',
        'Reduces illegal things done to withdraw a large amount of money.',
        'Risks from accountants, the time needed to verify the stamp and signature, and ',
        'Saves a large amount of money stolen from the bank.'
      ]
    },
    {
      title: 'Face Mask Detection and Temperature Measuring',
      technologies: 'Python, Machine learning, AI, and Tensor flow',
      description: [
        'To recognize individuals in a live video stream, was developed an algorithm.',
        'Provide an infrared sensor for temperature detection that has a range of 3-6 inches.',
        'Used Python, OpenCV, artificial intelligence, algorithms and data structures and other hardware materials.',
        'Gathered over 4,500 images of people wearing and not wearing masks for our machine to learn from.',
        'Collecting or photographing people with and without masks',
        'Machine learning with Python Tensorflow'
      ]
    },
    {
      title: 'System controlling website',
      technologies: 'HTML, CSS, JS, TS and Angular',
      description: [
        'The admin can control the transfer of data from department to department,',
        'The website deletes old data so that the server will have more space,',
        'The admin can access data that is less than 10 months old',
        'Reduce the time needed to access the files.'
      ]
    }
  ]
  ngOnInit(): void {}

}
