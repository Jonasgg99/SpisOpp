import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { removeIngredient, removeAllIngredients } from '../reducers/filterReducer'
import { addOption, resetOptions } from '../reducers/optionReducer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray() {
  const ingredients = useSelector(state => state.filter.ingredients)
  const dispatch = useDispatch()
  const classes = useStyles();

  const handleDelete = (ingredient) => () => {
    dispatch(addOption(ingredient))
    dispatch(removeIngredient(ingredient))
  };

  if (ingredients.length !== 0) {
  return (
    <Paper elevation={0} component="ul" className={classes.root}>
      {ingredients.map((data) => {
        let icon;

        return (
          <li key={data}>
            <Chip
              icon={icon}
              label={data}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Chip 
        color="secondary" 
        className={classes.chip} 
        label="Clear all" 
        onClick={() => {
          dispatch(removeAllIngredients())
          dispatch(resetOptions())
        }} />
    </Paper>
  );
    } else {
      return (null
        /*<Paper elevation={0} className={classes.root}>
        <Chip className={classes.chip} disabled />
        </Paper>*/
        )

    }
}