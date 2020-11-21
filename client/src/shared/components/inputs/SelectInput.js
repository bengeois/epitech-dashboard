import {FormControl} from "@material-ui/core";
import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

export default function(props) {
    return (
        <FormControl style={{minWidth: 300}} variant="outlined">
            <InputLabel>{props.label}</InputLabel>
            <Select
                label={props.label}
                value={props.value}
                onChange={props.onChange}
                renderValue={props.renderValue}
            >
                <MenuItem disabled value="">
                    <em>{props.name}</em>
                </MenuItem>
                {props.array.map((a) => (
                    <MenuItem key={a[props.arrayKey]} value={a[props.arrayValue]}>
                        {a[props.arrayValue]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}