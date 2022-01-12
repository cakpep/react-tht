import React from 'react';
import { waitFor, fireEvent, act } from "@testing-library/react";
import { renderTest } from '../Utils/renderTest';
import App from '../App';
import api from '../Api/Api';

/**
 * this tests is already cover all since the page is only one
 */
describe('AWARDS HOME PAGE', () => {

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(api, "getBallotData").mockResolvedValue({
      items: [
        {
          id: "best-picture 2",
          title: "Best Picture 2",
          items: [
            {
              title: 'ayam',
              photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
              id: 'ayam-id'
            },
            {
              title: 'kambing',
              photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
              id: 'kambing-id'
            },
          ]
        }
      ]
    });
  });

  it("should display title correctly", async () => {
    const { getByText } = renderTest(<App />);
    const titleText = getByText(/AWARDS 2021/i);
    expect(titleText).toBeInTheDocument();
  });

  it("should still display title correctly if the api return empty/error", async () => {
    jest.spyOn(api, "getBallotData").mockResolvedValue({});

    const { getByText } = renderTest(<App />);
    const titleText = getByText(/AWARDS 2021/i);
    expect(titleText).toBeInTheDocument();
  });

  it("should be able to select nominee", async () => {
    const { getByText, queryByTestId } = renderTest(<App />);

    await waitFor(() => expect(getByText(/Best Picture 2/i)).toBeInTheDocument());
    await waitFor(() => expect(getByText(/ayam/i)).toBeInTheDocument());
    await waitFor(() => expect(queryByTestId('select-btn-ayam-id')).toBeInTheDocument());
    // the modal should not yet in the document
    await waitFor(() => expect(queryByTestId('modal-nominee-results')).not.toBeTruthy());

    act(() => {
      fireEvent.click(queryByTestId('select-btn-ayam-id'));
    });

    // click submit to show the modal
    fireEvent.click(queryByTestId('submit-nominee-btn'));
    // the modal should be in the document since the user already submit the selected nominee
    await waitFor(() => expect(queryByTestId('modal-nominee-results')).toBeTruthy());
    // should exist on the table results
    await waitFor(() => expect(queryByTestId('table-result-ayam')).toBeTruthy());
    // should not exist on the table results since not selected
    await waitFor(() => expect(queryByTestId('table-result-kambing')).not.toBeTruthy());

    // dismiss modal by click close icon
    fireEvent.click(queryByTestId('modal-nominee-close-button'));
    await waitFor(() => expect(queryByTestId('modal-nominee-results')).not.toBeTruthy());



    // select another nominee
    act(() => {
      fireEvent.click(queryByTestId('select-btn-kambing-id'));
    });

    fireEvent.click(queryByTestId('submit-nominee-btn'));
    // the modal should be in the document since the user already submit the selected nominee
    await waitFor(() => expect(queryByTestId('modal-nominee-results')).toBeTruthy());

    // kambing should exist since the user selected that item
    await waitFor(() => expect(queryByTestId('table-result-ayam')).not.toBeTruthy());
    await waitFor(() => expect(queryByTestId('table-result-kambing')).toBeTruthy());

    // dismiss modal by click close icon
    fireEvent.click(queryByTestId('modal-nominee-close-button'));
    await waitFor(() => expect(queryByTestId('modal-nominee-results')).not.toBeTruthy());
  });
});
