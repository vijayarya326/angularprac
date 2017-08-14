import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    compute(num: number) {
        if (num === 0) {
            return 'ZERO';
        } else if (num > 0) {
            return '+ive';
        } else {
            return '-ive';
        }
    }
}
