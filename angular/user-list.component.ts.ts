import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    constructor(private userService: UserService) { }

    // input property coming from parent component
    @Input() name: string = '';
    @Input() email: string = '';
    @Input() age: number = 0;

    // simple method
    getUserInfo() {
        return `${this.name} (${this.age})`;
    }


    ngOnInit() {
        this.userService.getUsers();
    }
}
