import { Component } from '@angular/core';
import { ApiService } from 'app/services/api.service'
import {UserService} from 'app/services/user.service'
declare var $:any;

@Component({
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html'
})

export class FooterComponent{
    test : Date = new Date();
    
    constructor(public _userService:UserService) { }
}
