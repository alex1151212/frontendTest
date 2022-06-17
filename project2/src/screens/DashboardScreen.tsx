import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useContext, useState } from 'react';

import clsx from 'clsx';

import { Store } from '../Store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    table: {
      minWidth: 550,
    },
  })
);

export default function DashboardScreen() {
  const initFormState = {
    keyword: '',
    type: '全部',
    rangePicker: ['2022-06-01T00:00', '2022-06-01T00:00'],
  };

  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);

  const [keyword, setKeyword] = useState(initFormState.keyword);
  const [type, setType] = useState(initFormState.type);
  const [rangePicker, setRangePicker] = useState(initFormState.rangePicker);
  const [tableData, setTableData] = useState(initFormState);
  const ctxContext = useContext(Store);
  if (!ctxContext) return null;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const selectHandler = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setTableData({ keyword, type, rangePicker });
  };
  const resetHandler = () => {
    setKeyword(initFormState.keyword);
    setType(initFormState.type);
    setRangePicker(initFormState.rangePicker);
  };

  return (
    <>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <CardHeader
              title="搜尋設定"
              action={
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              }
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <form onSubmit={submitHandler}>
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item xs={4}>
                    <InputLabel id="demo-simple-select-label">類型</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={type}
                      onChange={selectHandler}
                      fullWidth
                    >
                      <MenuItem value={'全部'}>全部</MenuItem>
                      <MenuItem value={'信心值過低'}>信心值過低</MenuItem>
                      <MenuItem value={'信心值低'}>信心值低</MenuItem>
                      <MenuItem value={'信心值高'}>信心值高</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="standard-basic"
                      label="關鍵字"
                      fullWidth
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Paper variant="outlined" square>
                      <TextField
                        id="datetime-local"
                        label="時間"
                        type="datetime-local"
                        defaultValue="2022-06-01T00:00"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) =>
                          setRangePicker([e.target.value, rangePicker[1]])
                        }
                      />
                      <ArrowRightAltIcon
                        fontSize="large"
                        className="timeArrow"
                        viewBox="0 0 24 8"
                      />
                      <TextField
                        id="datetime-local"
                        label="時間"
                        type="datetime-local"
                        defaultValue="2022-06-01T00:00"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) =>
                          setRangePicker([rangePicker[0], e.target.value])
                        }
                      />
                    </Paper>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item>
                    <Button variant="contained" color="primary" type="submit">
                      送出
                    </Button>{' '}
                    <Button
                      variant="contained"
                      onClick={resetHandler}
                      type="reset"
                    >
                      重設
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Collapse>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
