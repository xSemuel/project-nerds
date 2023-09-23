import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const SORT_TYPE = [
    {text: 'По ціні', value: 'forPrice'},
    {text: 'По типу', value: 'forType'},
    {text: 'По назві', value: 'forName'},
]

export const SORT_DIR = [
    {text: 'Значок зростання', value: 'ascending', icon: <ArrowDropUpIcon sx={{ color: '#e1e1e1'}} />, checkedIcon: <ArrowDropUpIcon sx={{color: '#d7373b'}} />},
    {text: 'Значок спадання', value: 'descending', icon: <ArrowDropDownIcon sx={{ color: '#e1e1e1'}} />, checkedIcon: <ArrowDropDownIcon sx={{color: '#d7373b'}} /> },
]