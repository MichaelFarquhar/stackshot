import { Autocomplete, TextField } from '@mui/material';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { svgState } from '../../../App';
import svgSelectOptions from '../../../utils/svgSelectOptions';

interface SelectOption {
    label: string;
    file: string;
}

export const StackSelector: FC = () => {
    // String array of svgs, where string is the file name of the svg file
    const [svgs, setSvgs] = useRecoilState(svgState);

    // When svg is selected in the multi-select Box, add to the string array
    const addSvgToState = (strArray: string[]) => {
        setSvgs((oldSvgList) => [
            ...oldSvgList,
            ...strArray.filter((svg) => !oldSvgList.includes(svg)),
        ]);
    };

    // When svg is removed from the multi-select Box, remove from the string array
    const removeSvgFromState = (strArray: string[]) => {
        setSvgs((oldSvgList) => [...oldSvgList.filter((svg) => strArray.includes(svg))]);
    };

    const handleChange = (value: SelectOption[] | null) => {
        if (value != null) {
            // If empty is selected, all options were cleared from the select box -- so clean up the state
            if (value.length === 0) {
                setSvgs([]);
                return;
            }

            // Get the 'file' property from each of the selected options
            const svgStrArray = value.map((obj: SelectOption) => obj.file);

            // Add svg to state
            if (svgStrArray.length > svgs.length) {
                addSvgToState(svgStrArray);
            }
            // Else remove svg from state
            else {
                removeSvgFromState(svgStrArray);
            }
        }
    };

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={svgSelectOptions}
            multiple
            onChange={(_, value) => handleChange(value)}
            renderInput={(params) => <TextField {...params} label="Add stack" />}
        />
    );
};
