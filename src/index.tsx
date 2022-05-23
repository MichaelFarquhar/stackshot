import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

declare module '@mui/material/styles' {
    interface Theme {
        typography: {
            overline: {
                fontWeight: number;
            };
        };
    }
    // allow configuration using `createTheme`
    interface TypographyOptions {
        typography?: {
            overline?: {
                fontWeight: number;
            };
        };
    }
}

const theme = createTheme({
    typography: {
        overline: {
            fontWeight: 700,
            color: blue[300],
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
