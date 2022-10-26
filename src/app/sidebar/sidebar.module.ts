import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { UserService } from 'app/services/user.service';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarComponent],
    providers: [UserService],
    exports: [SidebarComponent]
    
})

export class SidebarModule {}
