import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpCliente: HttpClient) { }

  list() {
    return this.httpCliente.get<Course[]>(this.API)
    .pipe(
      first(),
      //delay(1000),
      tap(courses => console.log(courses))
    );


  }

  save (record: Partial<Course>){

   return this.httpCliente.post<Course>(this.API, record).pipe(first());

  }
}
