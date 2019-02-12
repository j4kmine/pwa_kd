

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from '../components/frontend/header/header.component';
import { ListingEkonografikComponent } from '../components/frontend/listingekonografik/listing.ekonografik.component';
import { ListingComponent } from '../components/frontend/listing/listing.component';
import { CardNewsComponent } from '../components/frontend/card-news/card-news.component';
import { HeadlineComponent } from '../components/frontend/headline/headline.component';
import { ButtonComponent } from '../components/frontend/button/button.component';
import { FooterComponent } from '../components/frontend/footer/footer.component';
import { BreadCumbComponent } from '../components/frontend/breadcumb/breadcumb.component';
import { CardEkonografikComponent } from '../components/frontend/card-ekonografik/card-ekonografik.component';
import { CardVideoheadlineComponent } from '../components/frontend/card-videoheadline/card-videoheadline.component';
@NgModule({
    declarations:[
        HeaderComponent,
        ListingComponent,
        CardNewsComponent,
        HeadlineComponent,
        ButtonComponent,
        FooterComponent,
        BreadCumbComponent,
        CardEkonografikComponent,
        ListingEkonografikComponent,
        CardVideoheadlineComponent,
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
        BreadCumbComponent,
        CardEkonografikComponent,
        ListingEkonografikComponent,
        CardVideoheadlineComponent,
    ] 
})
export class SharedModule{
}