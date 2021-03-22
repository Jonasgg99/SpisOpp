import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { removeIngredient } from '../reducers/filterReducer'
import { addOption } from '../reducers/optionReducer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
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

  return (
    <Paper component="ul" className={classes.root}>
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
    </Paper>
  );
}