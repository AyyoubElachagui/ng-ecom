import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistSidebarComponent } from './wishlist-sidebar.component';

describe('WishlistSidebarComponent', () => {
  let component: WishlistSidebarComponent;
  let fixture: ComponentFixture<WishlistSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishlistSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
