import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const OrderOperations = ({ openDialog, closeDialog }) => {
    const classes = useStyles();

    return (
        <Dialog fullScreen open={openDialog} onClose={closeDialog} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={closeDialog} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Add order
            </Typography>
                    <Button autoFocus variant='contained' color="secondary" onClick={closeDialog}>
                        save
            </Button>
                </Toolbar>
            </AppBar>
            <div className='container'>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Example select</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Count</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Add selected drink's count" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Table No:</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Add table number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Small note</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Add quick note here' rows="3"></textarea>
                    </div>
                </form>
            </div>
        </Dialog>

    )
}
