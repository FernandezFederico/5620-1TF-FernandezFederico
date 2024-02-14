import { TestBed } from "@angular/core/testing"
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Student } from "../../modules/dashboard/pages/students/interface";

describe('Prueba del AuthService', () => {

  let authService: AuthService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule]
    })
    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('Debe existir el AuthService', () => {
    expect(authService).toBeTruthy()
  });

  it(' o', () => {

    const MOCK_RESPONSE: Student[] = [
      {
        id: 10,
        firstName: "mock",
        lastName: "mock",
        email: "mock@mock.com",
        address: "Calle test 123",
        phone: "123456789",
        password: "123456",
        role: "ADMIN",
        token: "kd2sh4dsf21154fsf1dsf4gs3abc"
      }
    ]


    authService.login({ email: 'mosck@mock.com', password: '123456' }).subscribe({
      next: (student) => {
        expect(authService.authUser).toBeTruthy();
        expect(authService.authUser).toEqual(MOCK_RESPONSE[0]);
      }
    });


    httpController.expectOne({
      url: 'http://localhost:3000/students?email=mosck@mock.com&password=123456',
      method: 'GET',
    }).flush(MOCK_RESPONSE);
  });

})