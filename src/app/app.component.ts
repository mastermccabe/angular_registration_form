import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
    user = new User();
    users = [];
    submitted = false;
    onSubmit(formdata){
      if(formdata.valid){
        this.users.push(this.user);
        // this.user = new User();
        this.submitted = true;
      }
      this.user = new User();

      // formdata.pristine = true;
      // formdata.valid = true;

    }


}
