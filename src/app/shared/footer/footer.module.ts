import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { UserService } from 'app/services/user.service';
@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ FooterComponent ],
    providers: [UserService],
    exports: [ FooterComponent ]
})

export class FooterModule {}
