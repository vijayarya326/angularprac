import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
    }));
    describe('Compute Test', () => {
        it('Zero Test', () => {
            const appC = new AppComponent();
            const res = appC.compute(0);
            expect(res).toBe('ZERO');
        })
        it('Positive Test', () => {
            const appC = new AppComponent();
            const res = appC.compute(5);
            expect(res).toBe('+ive');
        })
        it('Negative Test', () => {
            const appC = new AppComponent();
            const res = appC.compute(-9);
            expect(res).toBe('-ive');
        })
    })
});
