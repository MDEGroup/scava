import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    private mode: Number = 0;

    constructor(
        private  router: Router,
        private loginService: LoginService
    ) {}

    ngOnInit() {
    }

    onLoggedin(data) {
        localStorage.clear();
        this.loginService.login(data).subscribe(resp => {
                const jwtToken = resp.headers.get('Authorization');
                this.loginService.saveToken(jwtToken);
                console.log(jwtToken);
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigateByUrl('/home');
            }, error => {
                this.mode = 1;
            }
        );
    }

}
