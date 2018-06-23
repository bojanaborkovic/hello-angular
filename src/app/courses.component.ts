import { Component } from '@angular/core'
import { CoursesService } from 'src/app/courses.service';

@Component({
    selector: 'courses', // <courses>
    template: `
            {{ text | summary: 10}} 

        `
    /* PIPES

     {{ course.title | uppercase | lowercase }} <br/>
          {{ course.students | number }} <br/>
          {{ course.rating | number: '2.1-1' }} <br/>
          {{ course.price | currency: 'AUD': true: '3.2-2' }} <br/>
          {{ course.releaseDate | date: 'shortDate' }} <br/>
          */

    // two way binding ==>  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    // template variables ==> input #email (keyup.enter)="onKeyUp(email.value)" /> 
    // event filtering -->  <input (keyup.enter)="onKeyUp()" />
     // event binding --> <button (click)="onSave()">Save</button>   
    //<button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    //<button class="btn btn-primary" [class.active]="isActive">Save</button> 
       // property/attribute binding with [] 
    // colspan is not known attibute of HTML, but attribute if DOM 
    // so we put "attr" prefix so angular knows how to bind the attribute
    // string interpolation, using backtick ` because template it can be broke donw
    // to more readble form
    // * is directive, because ngFor modifies DOM
})

export class CoursesComponent {

    text = "Lorem Ipsum је једноставно модел текста који се користи у штампарској и словослагачкој индустрији. Lorem ipsum је био стандард за модел текста још од 1500. године, када је непознати штампар узео кутију са словима и сложио их како би направио узорак књиге";
    // course = {
    //     title: "The Complete Angular Course",
    //     rating: 4.9789,
    //     students: 30123,
    //     price: 190.13,
    //     releaseDate: new Date(2016, 3, 1)
    // }

    title = "List of courses";
    isActive = false; // class binding , style binding
    imageUrl = "http://lorempixel.com/400/200";
    colSpan =2;


    email = "me@example.com";

    courses;
    // courses is gathered from some HTTP endpoint (server)
    // logic for gathering data should not be put here because it would
    // tightly couple this component to the HTTP endpoint

    //traditional way
    // onKeyUp($event){
    //     if($event.keyCode == 13) console.log("Enter was pressed!");
    // }

    
    onKeyUp() {
        console.log(this.email);  
    }

    onDivClicked(){
        console.log("Div was clicked");
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked", $event); 
    }

    constructor(service: CoursesService) {
        
        this.courses = service.getCourses();
    }
}