import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: string = '';
  //custFormGroup: FormGroup;
  searchControl: FormControl;

  constructor(private _fb: FormBuilder) {
    //this.custFormGroup = this._fb.group({
    //  'searchControl': ['']
    //});

    //this.custFormGroup.get('searchControl').valueChanges.pipe(debounceTime(2000))
    //  .subscribe(res => {
    //    this.data += ' ' + Math.floor(Math.random() * 10);
    //  });

    this.searchControl = new FormControl();

    this.searchControl.valueChanges
      .pipe(debounceTime(2000),distinctUntilChanged())
      .subscribe((res) => {
        console.log(res);
        // this.data += " " + Math.floor(Math.random() * 10);
      });
  }
}
