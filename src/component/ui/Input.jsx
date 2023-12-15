import { FormControl, InputLabel, Select, InputBase, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { alpha, styled } from '@mui/material/styles'
import React from 'react'
 
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // marginRight: theme.spacing(2),
  // marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(3),
    width: 'auto',
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    }
  }
}))

export default function Input({type, placeholder, onSelect, onSearch, name, idName, children, size, className, selectedValue, onText, searchText}) {

    if(type === 'select'){
        return(
          <FormControl fullWidth size={size} className={className}>
            <InputLabel
              id={`${idName}-select-label`}
              sx={{ color: "white" }}
            >
              {name}
            </InputLabel>
            <Select
              fullWidth
              labelId={`${idName}-select-label`}
              id= {`${idName}-select`}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "none",
                color: "#fff",
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
              label= {name}
              value={selectedValue}
              onChange={(e) => {
                onSelect(e.target.value)
              }}
            >   
              {children}
            </Select>
          </FormControl>
        )
    } else if (type === 'search') {
        return (
            <Search fullWidth className={`text-white ${className}`}>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    className="text-white"
                    placeholder={placeholder}
                    value={searchText}
                    inputProps={{ "aria-label": "search" }}
                    onChange={(e) => {
                      onSearch(e.target.value)
                    }}
                />
            </Search>
        )
    }
}