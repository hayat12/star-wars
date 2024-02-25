import { CustomDatePipe } from './custom-date.pipe';

describe('CustomeDatePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomDatePipe();
    expect(pipe).toBeTruthy();
  });
});
