import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import actions from "../actions/utils";
import Lottie from "../components/Lottie";

const styles = theme => ({
    backgroundImage: {
        minHeight: "calc(100% - 64px)",
        position: "relative",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "content-box",
        textAlign: "center",
        padding: theme.spacing(4)
    }
});

class Unknown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes
        };
    };

    componentWillMount() {

        actions.trigger_loading_update(0);
        actions.trigger_page_render_complete();
        setTimeout(() => {

            actions.trigger_loading_update(100);
        }, 300);
    }

    componentDidMount() {

        actions.jamy_update("annoyed");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        return false;
    }

    render() {

        const { classes } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.backgroundImage}>
                    <Lottie
                        id={"brainplode"}
                        loop={true}
                        autoplay={true}
                        src="/src/js/lottie/404.json"
                        style={{ height: '100%' }}/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Unknown);
