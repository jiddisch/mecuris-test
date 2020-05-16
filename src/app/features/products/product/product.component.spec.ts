import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../products-routing.module';
import { ProductService } from 'src/app/core/product/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared/shared.module';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule, SharedModule],
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
