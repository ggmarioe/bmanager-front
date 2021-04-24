import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './login-layout.component';

describe('LoginLayoutComponent', () => {
  let component: LoginLayoutComponent;
  let fixture: ComponentFixture<LoginLayoutComponent>;



  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLayoutComponent ],
      imports: [
        CommonModule,
        ReactiveFormsModule
      ],
      providers: []
    })
    .compileComponents();
    
  });


  it('should create', () => {
    fixture = TestBed.createComponent(LoginLayoutComponent);
    component = fixture.componentInstance;
    expect(component).toBeUndefined();
  });

  
  // it('Should test login', () => {
  //   component.buildForm();
  //   fixture.detectChanges(); 
  //   let userName = component.loginForm.controls['username']
  //   let password = component.loginForm.controls['password']

  //   // fixture.detectChanges(); 
  //   expect(component.loginForm).toBeDefined();
    
  // });
});
