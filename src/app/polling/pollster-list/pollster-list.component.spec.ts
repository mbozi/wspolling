import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PollsterListComponent } from './pollster-list.component';

describe('PollsterListComponent', () => {
  let component: PollsterListComponent;
  let fixture: ComponentFixture<PollsterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
