import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from "@material-ui/core";

const styles = theme => ({});

class AllLayers extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <SvgIcon {...this.props}>
                <path d="M12.51 8.7l.006.73h0c.028.101.03.205.014.31l-.011.061.005.569h5.949a1.9 1.9 0 0 1 3.517.996 1.9 1.9 0 0 1-3.513 1.004h0 0-5.939l.002 1.48.004.45h4.746v3.184h0a1.9 1.9 0 0 1-1 3.516 1.9 1.9 0 0 1-1-3.515V16.3h-2.755l-.085 2.78a2.65 2.65 0 0 1-1.2 1.68c-.54.3-1.14.45-1.75.43-.65-.01-1.3-.13-1.91-.36-.63-.22-1.23-.53-1.78-.92A5.56 5.56 0 0 1 4.4 18.5c-.41-.57-.63-1.25-.65-1.95v-.12c-.27-.3-.52-.61-.75-.94-.27-.37-.5-.77-.69-1.19-.2-.43-.34-.88-.43-1.35-.07-.43-.09-.87-.05-1.31.05-.46.15-.9.32-1.32.19-.47.43-.92.73-1.33.27-.39.58-.75.92-1.09a14.76 14.76 0 0 1 1.19-1.04h0l-.03-.65c-.02-.72.13-1.44.41-2.1.26-.58.64-1.09 1.12-1.5.85-.7 1.91-1.08 3-1.07.65-.02 1.29.13 1.86.43a2.22 2.22 0 0 1 .76.67c.22.31.34.68.34 1.06v.03.02l.03 2.22.008.73h2.802V5.515a1.9 1.9 0 0 1 1-3.515 1.9 1.9 0 0 1 1 3.516h0 0V8.7h-4.78zm-1.97 4.221v.939l-.08 4.9c-.05.11-.13.21-.23.28a1.33 1.33 0 0 1-.68.15c-.44 0-.87-.08-1.28-.24-.46-.16-.91-.39-1.31-.68-.36-.25-.68-.56-.93-.92a1.53 1.53 0 0 1-.28-.83c.01-.24.09-.48.26-.66-.52-.46-.99-.97-1.39-1.54-.19-.26-.36-.55-.49-.85-.13-.28-.22-.57-.28-.88-.04-.25-.05-.5-.03-.76.03-.26.09-.52.19-.77.13-.32.3-.63.5-.92a5.91 5.91 0 0 1 .69-.81l.29-.27.29.77a1.02 1.02 0 0 0 .54.54.98.98 0 0 0 .77-.01 1.02 1.02 0 0 0 .54-.54.98.98 0 0 0-.01-.77c-.21-.52-.39-1.05-.51-1.6a5.36 5.36 0 0 1-.15-1.26c-.01-.44.07-.88.24-1.28.14-.3.33-.56.58-.77a2.66 2.66 0 0 1 1.73-.6c.31-.01.62.05.89.2.02.01.04.02.05.03h0L10.48 6l.038 3.626a3.24 3.24 0 0 1-.248.784 1.46 1.46 0 0 1-.35.5c-.14.14-.3.25-.48.32a3.15 3.15 0 0 1-.85.23.96.96 0 0 0-.68.36c-.16.21-.24.47-.21.73.02.27.16.51.36.68.21.16.47.24.73.21a4.64 4.64 0 0 0 1.43-.37l.32-.149h0zM4.99 6.86c.01 0 .01-.01.02-.01l-.02.01h0 0z" />
            </SvgIcon>
        );
    }
}

export default withStyles(styles)(AllLayers);