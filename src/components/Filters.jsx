import {
  Paper,
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  IconButton,
  Badge,
} from '@mui/material';
import {
  DirectionsBoatOutlined,
  SearchOutlined,
  KeyboardArrowDownOutlined,
  TuneOutlined,
} from '@mui/icons-material';

export const Filters = () => {
  return (
    <Paper
      style={{ padding: 16, borderRadius: '15px', background: '#f2eeeb' }}
      elevation={0}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          padding: '0.5em',
        }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            variant='standard'
            placeholder='My Responsibilities'
            sx={{ flex: 6 }}
            InputProps={{
              sx: {
                padding: '2px 15px',
                '.MuiInputBase-input': {
                  fontSize: '12.5px',
                  padding: '10px 2px',
                },
                borderRadius: '25px',
                background: '#e1dbd2',
              },
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position='start'>
                  <DirectionsBoatOutlined />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant='standard'
            select
            defaultValue='PO'
            sx={{ flex: 3 }}
            InputProps={{
              sx: {
                padding: '2px 15px',
                '.MuiInputBase-input': {
                  fontSize: '13px',
                  padding: '9px 1px',
                },
                borderRadius: '25px',
                background: '#e1dbd2',
                '> svg': {
                  display: 'none',
                },
              },
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position='end'>
                  <KeyboardArrowDownOutlined />
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value='PO'>PO</MenuItem>
            <MenuItem value='Responsibility 1'>Responsibility 1</MenuItem>
            <MenuItem value='Responsibility 2'>Responsibility 2</MenuItem>
          </TextField>
          <Badge
            badgeContent={10}
            color='secondary'
            sx={{ marginTop: '5px', marginRight: '10px' }}
          >
            <IconButton
              sx={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: '#000',
                color: '#60cc65',
                '&:hover': {
                  background: '#000',
                },
              }}
            >
              <TuneOutlined />
            </IconButton>
          </Badge>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            id='standard-basic'
            label='Copy id'
            placeholder='Enter copy id'
            variant='standard'
            sx={{ flex: 6 }}
            InputLabelProps={{ shrink: true, sx: { marginLeft: '15px' } }}
            InputProps={{
              sx: {
                padding: '2px 15px',
                '.MuiInputBase-input': {
                  fontSize: '13px',
                  padding: '8px 2px',
                },
              },
            }}
          />
          <TextField
            id='standard-basic'
            label='Order no'
            placeholder='Enter order no'
            variant='standard'
            sx={{ flex: 6 }}
            InputLabelProps={{ shrink: true, sx: { marginLeft: '15px' } }}
            InputProps={{
              sx: {
                padding: '2px 15px',
                '.MuiInputBase-input': {
                  fontSize: '13px',
                  padding: '8px 2px',
                },
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            marginTop: '-7px',
          }}
        >
          <Box
            sx={{
              flex: 6,
              display: 'flex',
              justifyContent: 'felx-start',
              gap: 6,
              padding: '0px 10px',
              marginTop: '-25px',
            }}
          >
            <FormControl
              variant='standard'
              sx={{
                width: 30,
                fontWeight: 'bold',
                '& > div': { fontSize: '12px' },
                borderBottom: '1px solid',
              }}
            >
              <InputLabel
                id='demo-simple-select-standard-label'
                sx={{ fontWeight: 'bold', color: 'black', fontSize: '13px' }}
                shrink={false}
              >
                Sort
              </InputLabel>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                label='Sort'
                size='small'
                disableUnderline
                IconComponent={() => <KeyboardArrowDownOutlined />}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant='standard'
              sx={{
                width: 60,
                fontWeight: 'bold',
                '& > div': { fontSize: '12px' },
                borderBottom: '1px solid',
              }}
            >
              <InputLabel
                id='demo-simple-select-standard-label'
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: '13px',
                }}
                shrink={false}
              >
                Group By
              </InputLabel>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                label='Sort'
                size='small'
                disableUnderline
                IconComponent={() => (
                  <KeyboardArrowDownOutlined sx={{ marginLeft: '25px' }} />
                )}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              flex: 2.8,
              display: 'flex',
              gap: 2,
            }}
          >
            <Button
              variant='text'
              sx={{
                textTransform: 'none',
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                display: 'inline-block',
                padding: 0,
                minHeight: 0,
                minWidth: 0,
                '&:focus': {
                  border: 'none',
                  outline: 'none',
                },
              }}
            >
              Clear
            </Button>

            <Button
              variant='text'
              sx={{
                textTransform: 'none',
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                display: 'inline-block',
                padding: 0,
                minHeight: 0,
                minWidth: 0,
                '&:focus': {
                  border: 'none',
                  outline: 'none',
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
