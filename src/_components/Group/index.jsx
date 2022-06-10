import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './index.css';

export default function GroupedSelect() {
  return (
    <div class name="app-container" style={{background: 'white'}}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Bulk Action</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="absolute" value="" />
          <optgroup label="Listing">
            <option value={1}>Archive Listings</option>
            <option value={2}>Deactivate Listings</option>
          </optgroup>
          <optgroup label="Shipping">
            <option value={3}>Add to NithiTex for Free Shipping</option>
            <option value={4}>Remove from NithiTex</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Request Download</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Request Download">
            <option value={1}>Listing File</option>
            <option value={2}>Catalog File</option>
          </optgroup>         
        </Select>
      </FormControl>

      {/* //add extra grroup for more options// */}

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Category">
            <option value={1}>Clothing</option>
            <option value={2}>other product</option>
          </optgroup>
          
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Brand</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Brand">
            <option value={1}>NithiTex</option>
            </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Listing Price</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Listing Price">
            <option value={1}>0-2000</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">NTAssured</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="NithiTex">
         <option value={1}>Assured</option>
         <option value={2}>NonAssured</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Fulfillment</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Fulfillment">
            <option value={1}>Seller Only</option>
            <option value={1}>NithiTex Only</option>
            <option value={1}>Smart Only</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Stock</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Stock Bar">
          <option value={1}>1</option>
          <option value={1}>2</option>
          <option value={1}>3</option>
          <option value={1}>More</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Size Chart</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Size Chart">
          <option value={1}>Avaiable</option>
          <option value={2}>Not Avaiable</option>
          <option value={3}>In Progress</option>
          </optgroup>
        </Select>
      </FormControl><FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Procurement Type</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Procurement Type">
          <option value={1}>Regular</option>
          <option value={1}>International</option>
          <option value={1}>Made to Order</option>
         </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}