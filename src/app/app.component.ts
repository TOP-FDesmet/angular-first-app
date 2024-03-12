import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HelloComponent} from "./components/hello/hello.component";
import {UserService} from "./services/user/user.service";
import {UserComponent} from "./components/user/user.component";
import {CounterComponentComponent} from "./components/counter-component/counter-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HelloComponent, UserComponent, CounterComponentComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'firstApp';
    users: string[];

    constructor(private userService: UserService) {
        this.users = this.userService.getUsers();
    }
}
