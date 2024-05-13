import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import {t} from "../utils/t";

const styles = theme => ({

});


class ImageFileDialog extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            keepMounted: props.keepMounted || false,
            open: props.open,
            object: props.object,
            _path: "",
        };
    };

    componentWillReceiveProps(new_props) {

        this.setState(new_props, () => {

            this.forceUpdate();
        });
    }

    _handle_path_open_index = (index) => {

        const {_path} = this.state;
        const paths = _path.split("/").splice(0, index);
        const new_path = paths.join("/");

        this.setState({_path: new_path}, () => {

            this.forceUpdate();
        });
    };

    _handle_path_open_next_object = (key) => {

        const {_path} = this.state;
        let paths = _path.split("/");
        paths.push(key);
        const new_path = paths.join("/");

        this.setState({_path: new_path}, () => {

            this.forceUpdate();
        });
    };

    render() {

        const {
            classes,
            _path,
            object,
            open,
            keepMounted,
        } = this.state;

        let paths = _path.split("/");
        let current_object = object || {};

        paths.forEach((p) => {

            if(p !== "") {

                try {
                    current_object = current_object[p];
                } catch (e) {}
            }
        });

        return (
            <Dialog open={open}
                    fullWidth={true}
                    disablePortal={false}
                    onClose={this.props.onClose}
                    keepMounted={keepMounted}>
                <DialogContent>
                   <Breadcrumbs style={{paddingBottom: 16}}>
                       <a variant={"outlined"} onClick={() => {this._handle_path_open_index(0)}}>ROOT</a>
                       {
                           paths.map((p, i) => {

                               if(p !== "") {

                                   return <Link key={i} variant={"outlined"} onClick={() => {this._handle_path_open_index(i+1)}}>{p}</Link>;
                               }
                           })
                       }
                   </Breadcrumbs>
                    <Divider/>
                    <div style={{paddingBottom: 16, paddingTop: 16}}>
                        {
                            Object.entries(current_object).map((e, i) => {

                                const [ key, value ] = e;

                                if(typeof value !== "string") {

                                    return <Button style={{margin: 8}} key={i} variant={"outlined"} onClick={() => {this._handle_path_open_next_object(key)}}>{key}</Button>
                                }else {

                                    return <img style={{margin: 8}} key={i} src={value} onClick={(e) => {this.props.onSelectImage(value)}}/>
                                }

                            })
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="text" color="primary" autoFocus onClick={this.props.onClose}>{t( "words.close" )}</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(ImageFileDialog);
