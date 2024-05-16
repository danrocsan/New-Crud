import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent  implements OnInit{

  displayedColumns =['name', 'category'];

  courses: Course [] = [
    {_id:'1', name: 'Angular', category:'front-end'}
  ];

  constructor(){

  }

  ngOnInit(): void {

  }

}
