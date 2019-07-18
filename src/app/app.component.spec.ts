import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { ClientesService } from './clientes.service';

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;

export interface TestData {
  id: string;
  nome: string;
}

describe('AppComponent', () => {

  const dataStub = [
    {
      'id': 1,
      'nome': 'Hambúrgueres'
    },
    {
      'id': 2,
      'nome': 'Refrigerantes'
    }
  ];

  const userService = jasmine.createSpy('ClientesService');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .overrideComponent( AppComponent, {
      set: {
        providers: [
          {provide: ClientesService, useValue: userService}
        ]
      }
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  }));

  it('FAKE ASYNC', fakeAsync(() => {
    const service = new ClientesService(undefined);
    spyOn(service, 'getProduto').and.returnValue(of(dataStub));
    service.getProduto().subscribe(res => {
      console.log('=====================', res);
      expect(res).toEqual(dataStub);
    });
  }));

});
