import { atom } from 'recoil';
import './App.css';
import { Preview } from './components/Preview';
import { StackSelector } from './components/StackSelector';

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
            <StackSelector />
            <Preview />
        </div>
    );
}

export default App;
