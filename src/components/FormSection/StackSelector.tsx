import { Autocomplete, TextField } from '@mui/material';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { svgState } from '../../App';
import svgSelectOptions from '../../utils/svgSelectOptions';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const selectOptions = [
    { label: 'React', file: 'react' },
    { label: 'Javascript', file: 'javascript' },
    { label: 'CSS', file: 'css' },
];

interface SelectOption {
    label: string;
    file: string;
}

export const StackSelector: FC = () => {
    const [svgs, setSvgs] = useRecoilState(svgState);

    const addSvgToState = (strArray: string[]) => {
        setSvgs((oldSvgList) => [
            ...oldSvgList,
            ...strArray.filter((svg) => !oldSvgList.includes(svg)),
        ]);
    };
    const removeSvgFromState = (strArray: string[]) => {
        setSvgs((oldSvgList) => [...oldSvgList.filter((svg) => strArray.includes(svg))]);
    };

    const handleChange = (value: SelectOption[] | null) => {
        if (value != null) {
            // If empty is selected, all stacks were removed
            if (value.length === 0) {
                setSvgs([]);
                return;
            }

            // If not empty fill state will string array
            const svgStrArray = value.map((obj: SelectOption) => obj.file);

            // Add svg to state
            if (svgStrArray.length > svgs.length) {
                addSvgToState(svgStrArray);
            }
            // Else remove svg from state
            else {
                removeSvgFromState(svgStrArray);
            }

            console.log(value);
        }
    };

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={selectOptions}
            multiple
            onChange={(_, value) => handleChange(value)}
            renderInput={(params) => <TextField {...params} label="Add stack" />}
        />
    );
};
