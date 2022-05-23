import { Container, Stack } from '@mui/material';
import { atom } from 'recoil';
import './App.css';
import { FormSection } from './components/FormSection';
import { Preview } from './components/Preview';

export const svgState = atom<string[]>({
    key: 'svgState',
    default: [],
    effects: [
        ({ onSet }) => {
            onSet((svg) => {
                console.log('svg list:', svg);
            });
        },
    ],
});

function App() {
    return (
        <div className="App">
            <Container maxWidth="sm">
                <Stack spacing={5}>
                    <FormSection />
                    <Preview />
                </Stack>
            </Container>
        </div>
    );
}

export default App;
