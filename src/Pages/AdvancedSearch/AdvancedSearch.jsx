import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./AdvancedSearch.css";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AdvancedSearchFunction } from "../../redux/Application/action";
import AdvancedTable from "./AdvancedTable";

const AdvancedSearch = () => {
  const [show, setShow] = useState(false);
  const [inputValueMaterialType, setInputValueMaterialType] = useState("");
  const [valueMaterialType, setValueMaterialType] = useState(null);
  const [inputValueArtifactType, setInputValueArtifactType] = useState("");
  const [valueArtifactType, setValueArtifactType] = useState(null);
  const [inputValueFieldSymbol, setInputValueFieldSymbol] = useState("");
  const [valueFieldSymbol, setValueFieldSymbol] = useState(null);
  const [inputValueSite, setInputValueSite] = useState("");
  const [valueSite, setValueSite] = useState(null);

  const dispatch = useDispatch();

  const { isLoading, AdvancedSearchData } = useSelector(
    (state) => state.ApplicationReducer
  );

  const handleSearch = () => {
    dispatch(
      AdvancedSearchFunction({
        site: valueSite ? valueSite : null,
        field_symbol: valueFieldSymbol ? valueFieldSymbol : null,
        material_type: valueMaterialType ? valueMaterialType : null,
      })
    );
    setShow(true);
  };

  const handleReset = () => {
    setValueSite(null);
    setValueFieldSymbol(null);
    setValueMaterialType(null);
    setValueArtifactType(null);
    setShow(false);
  };

  return (
    <div className="AdvacnedSearch_Container">
      <Box className="AdvancedSearch_Main">
        <Box className="AdvancedSearch_Select">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={ArtifactType}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="ArtifactType" />
            )}
            inputValue={inputValueArtifactType}
            onInputChange={(event, newInputValue) => {
              setInputValueArtifactType(newInputValue);
            }}
            value={valueArtifactType}
            onChange={(event, newValue) => {
              setValueArtifactType(newValue);
            }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={MaterialType}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="MaterialType" />
            )}
            inputValue={inputValueMaterialType}
            onInputChange={(event, newInputValue) => {
              setInputValueMaterialType(newInputValue);
            }}
            value={valueMaterialType}
            onChange={(event, newValue) => {
              setValueMaterialType(newValue);
            }}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Condition}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Condition" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={FieldSymbol}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="FieldSymbol" />
            )}
            inputValue={inputValueFieldSymbol}
            onInputChange={(event, newInputValue) => {
              setInputValueFieldSymbol(newInputValue);
            }}
            value={valueFieldSymbol}
            onChange={(event, newValue) => {
              setValueFieldSymbol(newValue);
            }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Site}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Site" />}
            inputValue={inputValueSite}
            onInputChange={(event, newInputValue) => {
              setInputValueSite(newInputValue);
            }}
            value={valueSite}
            onChange={(event, newValue) => {
              setValueSite(newValue);
            }}
          />
        </Box>

        <Box className="AdvancedSearch_Button_Div">
          <button
            className="AdvancedButton"
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
          <button
            className="AdvancedButton"
            onClick={() => {
              handleReset();
            }}
          >
            Reset
          </button>
        </Box>
        <Box>
          <AdvancedTable
            AdvancedData={AdvancedSearchData}
            loading={isLoading}
            show={show}
          />
        </Box>
      </Box>
    </div>
  );
};

export default AdvancedSearch;

const ArtifactType = [
  "BNGL",
  "IMPL",
  "MISC",
  "POT",
  "ROD",
  "SEAL",
  "TAB",
  "TAG",
];

const MaterialType = ["Steatite", "Clay"];

const Condition = [];

const FieldSymbol = ["None"];

const Site = ["Alamgirpur"];
