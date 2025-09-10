import { App } from './app';

describe('App Component', () => {
  it('should create the App component', () => {
    const app = new App();
    expect(app).toBeTruthy();
  });

  it('should have title signal with value "app-salas"', () => {
    const app = new App();
    expect(app.title()).toBe('app-salas');
  });
});
