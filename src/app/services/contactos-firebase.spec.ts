import { TestBed } from '@angular/core/testing';

import { ContactosFirebase } from './contactos-firebase';

describe('ContactosFirebaseService', () => {
  let service: ContactosFirebase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactosFirebase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});