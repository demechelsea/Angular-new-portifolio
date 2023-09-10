import { Component, OnInit } from '@angular/core';
import { Education } from 'src/models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit{
  educationList: Education[] = [
    {
      institute: 'Adama Science and Technology',
      course: "Computer Science and Engineering",
      duration: ' 2017-2022',
      score: '3.72 CGPA'
    },
    {
      institute: 'Rift valley university',
      course: "Business Management",
      duration: ' 2018-2022',
      score: '4.00 CGPA'
    },
  ]
  consructor(){}

   ngOnInit(): void {
     
   }
}
