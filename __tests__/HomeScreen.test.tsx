import {RenderAPI, waitFor, fireEvent} from '@testing-library/react-native';
import waitForExpect from 'wait-for-expect';

import {renderApp} from '../tests/config/renderApp';

describe('Home', () => {
  describe('render user informations', () => {
    let app: RenderAPI;

    beforeEach(() => {
      app = renderApp();
    });
    it('should render infos', async () => {
      const emailText = await app.findByTestId('emailText');
      const nameText = await app.findByTestId('nameText');
      await waitForExpect(() => {
        expect(emailText).toBeTruthy();
        expect(nameText).toBeTruthy();
      });
    });
  });
  describe('Block user actions when dont have token', () => {
    let app: RenderAPI;

    beforeEach(() => {
      app = renderApp();
    });
    it('should loading when dont have token', async () => {
      const loadingContainer = await app.findByTestId('loadingContainer');
      await waitForExpect(() => {
        expect(loadingContainer).toBeTruthy();
      });
    });
    it('the buttons should not appear when loading token', async () => {
      const buttons = await app.queryByTestId('buttons');
      await waitForExpect(() => {
        expect(buttons).toEqual(null);
      });
    });
    it('should show buttons when have token', async () => {
      const buttons = await waitFor(() => app.getByTestId('buttons'));
      await waitForExpect(() => {
        expect(buttons).toBeTruthy();
      });
    });
  });
  describe('Navigate when press buttons', () => {
    let app: RenderAPI;

    beforeEach(() => {
      app = renderApp();
    });
    it('should go to contacts when click button goToContacts', async () => {
      const goToContacts = await waitFor(() => app.getByTestId('goToContacts'));
      await fireEvent.press(goToContacts);
      const header = await app.findByText('ENVIAR DINHEIRO');
      await waitForExpect(() => {
        expect(header).toBeTruthy();
      });
    });
    it('should go to transfer when click button goToHistory', async () => {
      const goToHistory = await waitFor(() => app.getByTestId('goToHistory'));
      await fireEvent.press(goToHistory);
      const header = await app.findByText('HISTÓRICO DE ENVIOS');
      await waitForExpect(() => {
        expect(header).toBeTruthy();
      });
    });
  });
});
