import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sw-sub-section',
    template:  `<div class="my-3 my-md-4">
    <h4 class="text-muted">{{subTitle}}</h4></div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubSectionComponent implements OnInit {
    @Input({required: true}) subTitle:string = ""
    constructor() { }

    ngOnInit() { }
}
