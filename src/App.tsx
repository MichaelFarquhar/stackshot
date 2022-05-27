import { Container, Stack } from '@mui/material';
import { atom } from 'recoil';
import './App.css';
import { FormSection } from './components/FormSection';
import { Preview } from './components/Preview';

// Side effect for logging out any state value on change
const logEffect = [
    ({ onSet, node }: any) => {
        onSet((item: any) => {
            console.log(`${node.key}:`, item);
        });
    },
];

// Border line size
export const borderSizeState = atom<number>({
    key: 'borderSizeState',
    default: 0,
});

// Border radius
export const borderRadiusState = atom<number>({
    key: 'borderRadiusState',
    default: 0,
});

// Border color of imaage
export const borderColorState = atom<string>({
    key: 'borderColorState',
    default: '#aabbcc',
});

// List of svg's currently selected
export const svgState = atom<string[]>({
    key: 'svgState',
    default: [],
    effects: logEffect,
});

// spacing on x-axis between svgs
export const svgSpacingXState = atom<number>({
    key: 'svgSpacingXState',
    default: 5,
});

// spacing on y-axis between svgs
export const svgSpacingYState = atom<number>({
    key: 'svgSpacingYState',
    default: 0,
});

// Width and height of svgs
export const svgSizeState = atom<number>({
    key: 'svgSizeState',
    default: 50,
});

function App() {
    return (
        <div className="App">
            <Container maxWidth="md">
                <Stack spacing={5}>
                    <FormSection />
                    <hr />
                    <Preview />
                </Stack>
            </Container>
        </div>
    );
}

export default App;
