import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { without } from 'lodash';

library.add(faTimes);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Welcome Ainkaran</h1>',
  // template: `
  //   <h1>{{title}}</h1>
  //   '<p>{{description}}</p>'
  //   `,  
  // styleUrls: ['./app.component.css']
  // styles: ['p {color: blue}']
})
export class AppComponent implements OnInit{
  // title = 'learnangular';
  title = 'Wisdom Pet Medicine';
  // title = 'First App';
  // description = 'Welcome to wisdom First App';
  theList: object[];

  deleteApt(theApt: object) {
    this.theList = without(this.theList, theApt)
  }
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.http.get<Object[]>('../assets/data.json').subscribe(data => {console.log(data);
      this.theList = data;
    });
  }
}
