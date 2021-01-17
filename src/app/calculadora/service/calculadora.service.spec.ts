import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', inject([CalculadoraService], (Service: CalculadoraService) => {
    expect(Service).toBeTruthy();
  })
  );

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (Service: CalculadoraService) => {
      const soma = Service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve garantir que 1 - 4 = -3',
    inject([CalculadoraService], (Service: CalculadoraService) => {
      const subtracao = Service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    })
  );

  it('deve garantir que 1 / 4 = 0.25',
    inject([CalculadoraService], (Service: CalculadoraService) => {
      const divisao = Service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.25);
    })
  );

  it('deve garantir que 1 * 4 =4',
    inject([CalculadoraService], (Service: CalculadoraService) => {
      const multiplicacao = Service.calcular(1, 4, CalculadoraService.MUTIPLICACAO);
      expect(multiplicacao).toEqual(4);
    })
  );

  it('deve retornar 0 para operação inválida',
    inject([CalculadoraService], (Service: CalculadoraService) => {
      const operacaoinvalida = Service.calcular(1, 4, '%');
    })
  );
});
