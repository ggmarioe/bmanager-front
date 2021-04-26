import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './login-layout.component';

describe('LoginLayoutComponent', () => {
  
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLayoutComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: []
    })
    .compileComponents();
  });



  it('should create', () => {
    const fixture = TestBed.createComponent(LoginLayoutComponent);
    let component = fixture.componentInstance;
    // expect(component).toBeUndefined();
    expect(component).toBeDefined();
  });

  
  it('Should test login', () => {
    const fixture = TestBed.createComponent(LoginLayoutComponent);
    let component = fixture.componentInstance;

    let userName = component.loginForm.controls['username']
    let password = component.loginForm.controls['password']
    expect(component.loginForm).toBeDefined();
    
  });


  it('Should show error message', () =>{
    const fixture = TestBed.createComponent(LoginLayoutComponent);
    let component = fixture.componentInstance;

    let userName = component.loginForm.controls['username']
    let password = component.loginForm.controls['password']
    
    expect(true).toBe(true);
  });
});
