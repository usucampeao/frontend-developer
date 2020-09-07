import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
	let component: SearchComponent;
	let fixture: ComponentFixture<SearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SearchComponent],
			imports: [RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Fazer search na tela', () => {
		fixture.detectChanges();
		const app = fixture.debugElement.componentInstance;
		const el = fixture.nativeElement.querySelector('input');
		el.value = '2';
		el.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			expect(app.data).toBeTruthy();
		});
	});

	it('Quando nao encontrar o pokemon', () => {
		fixture.detectChanges();
		const app = fixture.debugElement.componentInstance;
		const el = fixture.nativeElement.querySelector('input');
		el.value = '27687687fygfgyug';
		el.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			expect(app.data).toContain('Não foi encontrado nenhum pokemon');
		});
	});
});
