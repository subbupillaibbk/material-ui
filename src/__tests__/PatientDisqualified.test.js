import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { ThemeProvider, StyledEngineProvider } from '@mui/styles';
import { muiTheme, commonStyledValues } from 'styles/baseTheme'
import { CssBaseline } from '@mui/material'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import * as backendModules from 'services/backend'
import PatientDisQualified from 'components/private/addPatient/PatientDisQualified'

const initialAddPatientReducerState = {
  addPatientFlow: false,
  addPatientPage: false,
  addPatientPrescreener: false,
  showPatientDisqualifiedPage: false,
  userPrescreenerId: 4,
  /** patientInfoInProgress : {"name":"nn nn","tcnId":"9999-iyndMJc","userId":25}  */
  patientInfoInProgress: { name: 'nn nn', tcnId: '9999-iyndMJc', userId: 50 },
  larDetails: undefined,
}

const initialUserInteractionsState = {
  isLoading: false,
  activeStep: 0,
  totalSteps: 5,
  isEditMode: false,
}

const initialGlobalState = {
  selectedInstanceId: null,
  tcnUsersLookup: [],
  countriesLookup: [],
  statesLookup: [],
  siteClientId: 'c6cc1812-bf58-4085-a543-1549651be6ff',
}

const addPatient = createReducer(initialAddPatientReducerState, {})
const userInteractions = createReducer(initialUserInteractionsState, {})
const application = createReducer(initialGlobalState, {})

const store = configureStore({
  reducer: { addPatient, userInteractions, application },
})

jest.mock('services/backend', () => {
  return {
    addUserPrescreenerDisqualified: jest.fn(() => {
      return new Promise(() => {})
    }),
  }
})

describe('PatientDisqualified component', () => {
  beforeEach(() => {
    backendModules.addUserPrescreenerDisqualified.mockImplementation(() => {
      return Promise.resolve({})
    })
  })

  test('renders successfully', async () => {
    const spy = jest.spyOn(backendModules, 'addUserPrescreenerDisqualified')
    await act(async () => {
      const { container } = await render(
        <StyledThemeProvider theme={commonStyledValues}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={muiTheme}>
              <CssBaseline />
              <Provider store={store}>
                <PatientDisQualified />{' '}
              </Provider>
            </ThemeProvider>
          </StyledEngineProvider>
        </StyledThemeProvider>,
      )
    })

    const yesButton = screen.getByRole('button', { name: 'Yes' })
    await fireEvent.click(yesButton)

    await waitFor(() =>
      expect(spy).toBeCalledWith({
        userPrescreenerId: 4,
        siteClientId: 'c6cc1812-bf58-4085-a543-1549651be6ff',
      }),
    )
  })
})
