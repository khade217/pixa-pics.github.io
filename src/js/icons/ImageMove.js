import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from "@material-ui/core";

const styles = theme => ({});

class ImageMove extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <SvgIcon {...this.props}>
                <path d="M15,3H19V0L24,5L19,10V7H15V3M21,11.94V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H12.06C12,3.33 12,3.67 12,4A8,8 0 0,0 20,12C20.33,12 20.67,12 21,11.94M19,18L14.5,12L11,16.5L8.5,13.5L5,18H19Z" />
            </SvgIcon>
        );
    }
}

export default withStyles(styles)(ImageMove);