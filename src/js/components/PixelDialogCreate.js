import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Lottie from "../components/Lottie";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";

import DeleteIcon from "@material-ui/icons/Delete";
import {t} from "../utils/t";
import actions from "../actions/utils";

const styles = theme => ({
    dialogMobileFullscreen: {
        "& .MuiPaper-root": {
            maxHeight: "calc(100% - -24px)",
            contentVisibility: "auto",
            contain: "paint style layout",
        },
        "& .MuiBackdrop-root": {
            background: "#060e2391",
        }
    },
    dialogContentContainer: {
        marginTop: 16,
        [theme.breakpoints.up("lg")]: {
            display: "inline-flex",
        },
        display: "grid",
    },
    leftImage: {
        display: "none",
        [theme.breakpoints.up("lg")]: {
            display: "inherit",
            cursor: "pointer",
            float: "left",
            width: "384px",
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            "& > button": {
                maxHeight: 36,
                height: 36,
                marginTop: "calc(100% - 18px)",
            }
        },
        "&:hover": {
            backgroundSize: "100%",
        }
    },
    rightImagesContainer: {
        float: "right",
    },
    uploadButtonDesktopPaperplane: {
        background: "#060e23",
        "&:hover": {
            background: "#01030f",
        },
        boxShadow: "none",
        color: "#fff",
        fontWeight: "bold",
        mixBlendMode: "hard-light",
        fontSize: "2.5em",
        "& .MuiSvgIcon-root": {
            marginRight: "1em",
        },
    },
    uploadButtonDesktopUfo: {
        background: "#010218",
        "&:hover": {
            background: "#000000",
        },
        boxShadow: "none",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "2.5em",
        "& .MuiSvgIcon-root": {
            marginRight: "1em",
        },
    },
    mainUploadButton: {
        display: "flex",
        [theme.breakpoints.up("lg")]: {
            display: "none",
        }
    }
});


class PixelDialogCreate extends React.PureComponent {

    constructor(props) {
        super(props);
        this.st4te = {
            classes: props.classes,
            open: props.open,
            size: props.size,
            pixel_arts: props.pixel_arts,
            theme_day: props.theme_day,
            _paperplane: null,
            _horizontal_projects_list_el: {}
        };
    };

    setSt4te(st4te, callback) {
        "use strict";
        let keys = Object.keys(st4te);
        let keys_length = keys.length | 0;
        let key = "";

        for (let i = 0; (i|0) < (keys_length|0); i = (i+1|0)>>>0) {

            key = keys[i]+"";
            this.st4te[key] = st4te[key];
        }

        if(typeof callback === "function") {

            callback();
        }
    }

    componentDidMount() {

        actions.trigger_loading_update(100);

        this.setSt4te({
            _paperplane: <Lottie
                id={"paperplane"}
                loop={true}
                autoplay={true}
                src="/src/js/lottie/paperplane.json"
                style={{ transform: "translateZ(10px)", height: '75%', width: '100%', position: "absolute", top: 0, left: 0, zIndex: 0}}/>,
            _ufo: <Lottie
                id={"ufo"}
                loop={true}
                autoplay={true}
                src="/src/js/lottie/ufo.json"
                style={{ transform: "translateZ(10px)", height: '100%', width: '100%', position: "absolute", top: 0, left: 0, zIndex: 0}}/>
        }, () => {

            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        try {
            this.st4te._horizontal_projects_list_el.removeEventListener("wheel", this._horizontal_projects_list_el_wheel);
        } catch (e) {}
    }

    componentWillReceiveProps(new_props) {

        const open_changed = this.st4te.open !== new_props.open;
        if(
            open_changed ||
            this.st4te.size !== new_props.size ||
            Object.keys(this.st4te.pixel_arts).join("-") !== Object.keys(new_props.pixel_arts).join("-")
        ) {

            this.setSt4te(new_props, () => {

                this.forceUpdate();
                
                if(open_changed) {
                    if(this.st4te.open) {

                        try {
                            var video = document.getElementById("presentation-video");
                            video.pause();
                        } catch(e){}

                    }else {

                        try {
                            var video = document.getElementById("presentation-video");
                            video.play();
                        }catch(e){}
                    }
                }
            });
        }
    }

    _go_to_editor = (load_with = "", trigger_activation = false) => {

        if (load_with.startsWith("data:image/png;base64,")) {

            actions.load_with(load_with, trigger_activation);
        } else {

            if (load_with.length > 0) {

                fetch(load_with).then((resp) => {

                    resp.blob().then((blob) => {

                        new Promise(function (resolve, _) {
                            var reader = new FileReader();
                            reader.onload = function () {
                                resolve(reader.result)
                            };
                            reader.onerror = function () {
                                var u = URL.createObjectURL(blob);
                                resolve(u);
                            };
                            reader.readAsDataURL(blob);
                        }).then((base64) => {

                            actions.load_with(base64, trigger_activation);
                        });
                    });
                });

            } else {

                actions.load_with(load_with, trigger_activation)
            }
        }
    };

    _notify_size_from_slider = (event, value) => {

        if(this.props.on_import_size_change) {

            this.props.on_import_size_change(event, value);
        }
    };

    _handle_pixel_art_delete = (id) => {

        if(this.props.on_pixel_art_delete) {

            this.props.on_pixel_art_delete(id);
        }
    };

    _set_horizontal_projects_list_el_ref = (el) => {

        if(typeof el === "undefined") {return null;}
        if(el === null) {return null;}
        this.setSt4te({_horizontal_projects_list_el: el}, () => {
            try {
                this.st4te._horizontal_projects_list_el.addEventListener("wheel", this._horizontal_projects_list_el_wheel, {passive: false});
            } catch (e) { }
        });
    };

    _horizontal_projects_list_el_wheel = (e) => {
        if (e.deltaY > 0) {
            this.st4te._horizontal_projects_list_el.scrollLeft += 100;
            e.preventDefault();
        } else {
            this.st4te._horizontal_projects_list_el.scrollLeft -= 100;
            e.preventDefault();
        }
    };

    render() {

        const {
            classes,
            size,
            open,
            pixel_arts,
            theme_day,
            _paperplane,
            _ufo
        } = this.st4te;

        const _is_ufo = !theme_day;

        return (
            <Dialog open={open}
                    className={classes.dialogMobileFullscreen}
                    maxWidth={"xl"}
                    onClose={this.props.onClose}
                    disablePortal={false}
                    keepMounted={false}>
                <DialogContent>
                    <Typography component={"h2"} variant={"h6"}>Latest artworks</Typography>
                    <div className={classes.dialogContentContainer}>
                        <div className={classes.leftImage}>
                            <input
                                onChange={this.props.on_upload}
                                accept="image/jpg, image/svg, image/jpeg, image/png, image/webp, image/gif"
                                style={{display: "none"}}
                                id="button-file-dialog-primary"
                                type="file"
                            />
                            <Button
                                component={"label"}
                                htmlFor="button-file-dialog-primary"
                                fullWidth variant="contained"
                                color="secondary"
                                className={_is_ufo ? classes.uploadButtonDesktopUfo: classes.uploadButtonDesktopPaperplane}
                                autoFocus onClick={this.props.on_upload}>{_is_ufo ? _ufo: _paperplane} <span style={{zIndex: 1, pointerEvents: "none", transform: "translateY(200%)"}}>Let's upload!</span></Button>
                        </div>
                        <div className={classes.rightImagesContainer}>
                            <div className={classes.rightImagesContainer} style={{padding: "8px 24px", position: "relative", overflow: "hidden", boxSizing: "border-box", width: "100%"}}>
                                <Typography id="size-slider" gutterBottom>Reduce size of the image down to :</Typography>
                                <Slider key={size}
                                        defaultValue={parseInt(size)}
                                        step={8}
                                        valueLabelDisplay="auto"
                                        min={16} max={size > 512 ? size: 512}
                                        onChangeCommitted={this._notify_size_from_slider}
                                        aria-labelledby="size-slider"
                                />
                            </div>
                            <input
                                onChange={this.props.on_upload}
                                accept="image/jpg, image/svg, image/jpeg, image/png, image/webp, image/gif"
                                style={{display: "none"}}
                                id="button-file-dialog-secondary"
                                type="file"
                            />
                            <Button
                                component={"label"}
                                htmlFor="button-file-dialog-secondary"
                                className={classes.mainUploadButton}
                                fullWidth
                                variant="contained"
                                color="primary"
                                autoFocus>
                                UPLOAD
                            </Button>
                            <Typography component={"h2"} variant={"h6"} style={{marginTop: 16, marginLeft: 24}}>{Boolean(Object.keys(pixel_arts).length === 0) ? <span>Demo projects</span>: <span>Unsaved projects</span>}</Typography>
                            <div
                                style={{
                                padding: "8px 24px",
                                position: "relative",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-around",
                                overflow: "hidden",
                                boxSizing: "border-box",
                                width: "100%"
                            }}>
                                <ImageList rowHeight={288}
                                           cols={2.0}
                                           ref={this._set_horizontal_projects_list_el_ref}
                                           style={{
                                                flexWrap: "nowrap",
                                                contain: "paint style layout",
                                                contains: "strict",
                                                maxWidth: "min(576px, calc(100vw - 96px))"
                                            }}>
                                    {

                                        Boolean(Object.keys(pixel_arts).length === 0) ?
                                            ["/src/images/demo/Redstar.jpg","/src/images/demo/Beast.jpg",  "/src/images/demo/Disney.jpg", "/src/images/demo/Masterc.jpg", "/src/images/demo/Man.jpg", "/src/images/demo/Tower.jpg"].map((u, id) => {

                                                return (
                                                    <ImageListItem style={{
                                                        display: "inline-block",
                                                        width: "auto",
                                                        userSelect: "none"
                                                    }} key={id}>
                                                        <img onClick={() => {
                                                            this._go_to_editor(u);
                                                        }} src={u} alt={`demo #${id}`} style={{
                                                            zIndex: 0,
                                                            width: "auto",
                                                            height: "100%",
                                                            cursor: "pointer"
                                                        }}/>
                                                        <ImageListItemBar
                                                            title={"Try with this image"}
                                                            subtitle={"This is a demo"}
                                                        />
                                                    </ImageListItem>
                                                );
                                            })
                                            : Object.values(pixel_arts).sort((a, b) => b.timestamp - a.timestamp).map((v, i) => {

                                                const {id, kb, preview, timestamp} = v;
                                                return (
                                                    <ImageListItem style={{
                                                        display: "inline-block",
                                                        width: "auto",
                                                        userSelect: "none"
                                                    }} className={"pixelated"} key={id}>
                                                        <img onClick={() => {
                                                            this.props.import_JSON_state(id)
                                                        }} src={preview} alt={`preview ${i}`} style={{
                                                            zIndex: 0,
                                                            width: "auto",
                                                            height: "100%",
                                                            cursor: "pointer"
                                                        }}/>
                                                        <ImageListItemBar
                                                            title={t(timestamp)}
                                                            subtitle={<span>{kb.toFixed(2)} Kb</span>}
                                                            actionIcon={
                                                                <IconButton style={{color: "#fff"}}
                                                                            onClick={(event) => {
                                                                                this._handle_pixel_art_delete(id)
                                                                            }} aria-label={`Delete`}>
                                                                    <DeleteIcon/>
                                                                </IconButton>
                                                            }
                                                        />
                                                    </ImageListItem>
                                                );
                                            })
                                    }
                                </ImageList>
                            </div>
                        </div>
                    </div>
                 </DialogContent>
                <DialogActions>
                    <Button variant="text" color="primary" autoFocus onClick={this.props.onClose}>{t( "words.close" )}</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(PixelDialogCreate);
