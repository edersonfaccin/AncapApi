import { Test, TestingModule } from '@nestjs/testing';
import { SupplierService } from './supplier.service';

describe('SupplierService', () => {
  let provider: SupplierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplierService],
    }).compile();

    provider = module.get<SupplierService>(SupplierService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
