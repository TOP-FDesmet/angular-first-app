import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    user = {
        firstName: 'Florian',
        lastName: 'Desmet',
        age: 33,
        email: 'contact.floriandesmet@gmail.com'
    };
}
