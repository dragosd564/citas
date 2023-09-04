import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarNotificationsComponent } from './toolbar-notifications.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { PopoverModule } from '../../../components/popover/popover.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { RelativeDateTimeModule } from '../../../pipes/relative-date-time/relative-date-time.module';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { ToolbarNotificationsDropdownComponent } from './toolbar-notifications-dropdown/toolbar-notifications-dropdown.component';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
    declarations: [ToolbarNotificationsComponent, ToolbarNotificationsDropdownComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        PopoverModule,
        FlexLayoutModule,
        MatTabsModule,
        MatMenuModule,
        RelativeDateTimeModule,
        RouterModule,
        MatRippleModule,
        IconModule
    ],
    exports: [ToolbarNotificationsComponent]
})
export class ToolbarNotificationsModule {
}
