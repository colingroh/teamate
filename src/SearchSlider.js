import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});




export default function SearchSlider(props) {
    const labelId = `Slider-label-${props.fieldName}`;

    const [sliderWeight, setSliderWeight] = React.useState(5);

    const handleChange = (event, value) => {
      setSliderWeight(value);
    };

  return (
    <div className="SearchSlider">
      <Typography align='left'id={labelId}>{props.fieldName} </Typography>
      <Slider
        color='secondary'
        defaultValue={5}
        aria-labelledby={labelId}
        step={1}
        marks
        min={0}
        max={10}
        value = {sliderWeight}
        onChange= {handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
}