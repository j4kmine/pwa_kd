

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from '../components/frontend/header/header.component';
import { ListingComponent } from '../components/frontend/listing/listing.component';
import { CardNewsComponent } from '../components/frontend/card-news/card-news.component';
import { HeadlineComponent } from '../components/frontend/headline/headline.component';
import { ButtonComponent } from '../components/frontend/button/button.component';
import { FooterComponent } from '../components/frontend/footer/footer.component';
@NgModule({
    declarations:[
        HeaderComponent,
        ListingComponent,
        CardNewsComponent,
        HeadlineComponent,
        ButtonComponent,
        FooterComponent,
    ],
    imports:[
        CommonModule
    ],exports:[
        HeaderComponent,
        ListingComponent,
        CardNewsComponent,
        HeadlineComponent,
        ButtonComponent,
        FooterComponent,
    ] 
})
export class SharedModule{
}