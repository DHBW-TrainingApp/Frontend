import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFirestore],
    });
    service = TestBed.inject(CrudService);
  });

  /* it('should be created', () => {
    expect(service).toBeTruthy();
  }); */
});
