import React from "react";
import SearchSelector from "./SearchSelector";
import SearchSlider from "./SearchSlider";
import SearchButton from "./SearchButton"
import {Box} from "@material-ui/core";

const INTERESTS = ["Class #1", "Class #2", "Basketball", "Gaming", "Dogs"]

export default function Preferences() {
    return(
        <div className="Preferences">
            <Box px={1}>
            <SearchSelector />
            <p>Who shares my interest in...</p>
            {INTERESTS.map((fieldName) =>(
                <SearchSlider fieldName = {fieldName} />
            ))}
            <SearchButton />
            </Box>
        </div>
    )
}