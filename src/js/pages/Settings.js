import React from "react";
import {Divider, withStyles} from "@material-ui/core";

import { t } from "../utils/t";

import {CardHeader, Container, Card, CardContent, FormControlLabel, Switch, TextField, Fade} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";

import { LANGUAGES, LOCALES, CURRENCY_COUNTRIES } from "../utils/constants";

import ScopeEarth from "../icons/ScopeEarth";
import BlingBling from "../icons/BlingBling";
import SwissTweemoji from "../twemoji/react/1F1E81F1Ed";
import DangerTweemoji from "../twemoji/react/26A0";
import ShieldTweemoji from "../twemoji/react/1F6E1";
import get_svg_in_b64 from "../utils/svgToBase64";

import api from "../utils/api";
import actions from "../actions/utils";

import fuzzy from "fuzzy";

const styles = theme => ({
    container: {
        overflow: "overlay",
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2, 0)
        }
    },
    marginTop: {
        marginTop: theme.spacing(2)
    }
});


class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            _locales: LOCALES,
            _currency_countries: CURRENCY_COUNTRIES,
            _selected_locales_code: null,
            _language: document.documentElement.lang,
            _selected_currency: null,
            _fees: 1,
            _sfx_enabled: true,
            _music_enabled: false,
            _jamy_enabled: true,
            _panic_mode: false
        };
    };

    componentDidMount() {

        this._update_settings();

        actions.trigger_loading_update(0);
        setTimeout(() => {

            actions.trigger_loading_update(100);
        }, 250);
    }

    _process_settings_query_result = (error, settings) => {

        // Set new settings from query result
        const _fees = typeof settings.fees !== "undefined" ? settings.fees: 1;
        const _sfx_enabled = typeof settings.sfx_enabled !== "undefined" ? settings.sfx_enabled: true;
        const _music_enabled = typeof settings.music_enabled !== "undefined" ? settings.music_enabled: false;
        const _jamy_enabled = typeof settings.jamy_enabled !== "undefined" ? settings.jamy_enabled: true;
        const _selected_locales_code =  typeof settings.locales !== "undefined" ? settings.locales: "en-US";
        const _language = _selected_locales_code.split("-")[0];
        const _selected_currency = typeof settings.currency !== "undefined" ? settings.currency: "USD";
        const _panic_mode = typeof settings.panic !== "undefined" ? settings.panic: false;

        actions.trigger_loading_update(0);
        actions.trigger_loading_update(100);

        this.setState({ _fees, _sfx_enabled, _jamy_enabled, _selected_locales_code, _language, _selected_currency, _panic_mode, _music_enabled });
    };

    _update_settings() {

        // Call the api to get results of current settings and send it to a callback function
        api.get_settings(this._process_settings_query_result);
    }

    _on_settings_changed = () => {

        const { _language } = this.state;

        actions.trigger_loading_update(0);
        setTimeout(() => {

            actions.trigger_loading_update(100);
        }, 250);

        actions.trigger_settings_update();
        actions.trigger_snackbar(t( "pages.settings.settings_changed"));
    }

    _handle_locales_changed = (event, value) => {

        if(value) {

            const settings = { locales: value.original.code };
            this.setState({_selected_locales_code: value.original.code, _language: value.original.code.split("-")[0]});
            api.set_settings(settings, this._on_settings_changed);
            actions.trigger_sfx("ui_lock");
            actions.jamy_update("happy");
        }
    }

    _handle_sfx_enabled_switch_change = (event) => {

        const checked = Boolean(this.state._sfx_enabled);

        if(checked){

            actions.trigger_sfx("ui_lock");
            actions.jamy_update("happy");
        }else {

            actions.trigger_sfx("ui_unlock");
            actions.jamy_update("happy");
        }

        const settings = { sfx_enabled: !checked };
        this.setState({_sfx_enabled: !checked});
        api.set_settings(settings,  this._on_settings_changed);
    };

    _handle_music_enabled_switch_change = (event) => {

        const checked = Boolean(this.state._music_enabled);

        if(checked){

            actions.trigger_sfx("ui_lock");
            actions.jamy_update("happy");
            actions.stop_sound();
        }else {

            actions.trigger_sfx("ui_unlock");
            actions.jamy_update("happy");
        }

        const settings = { music_enabled: !checked };
        this.setState({_music_enabled: !checked});
        api.set_settings(settings,  this._on_settings_changed);
    };

    _handle_jamy_enabled_switch_change = (event) => {

        const checked = Boolean(this.state._jamy_enabled);

        if(checked){

            actions.trigger_sfx("ui_lock");
            actions.jamy_update("sad");
        }else {

            actions.trigger_sfx("ui_unlock");
            actions.jamy_update("happy");

            setTimeout(async () => {

                actions.trigger_snackbar("I am Jamy, a kind Emoji, developed on IntelliJ, life in vectors, sometimes not working on tor,\n\n you can click my face, I am perfect like an Ace, in imagination only is default of my perfections...", 20000)
            }, 3000);
        }

        const settings = { jamy_enabled: !checked };
        this.setState({_jamy_enabled: !checked});
        api.set_settings(settings,  this._on_settings_changed);
    };

    _fuzzy_filter_locales = (list, input_value) => {

        const options = {
            pre: "<b style=\"color: #000244;\">"
            , post: "</b>"
            , extract: function(element) { return element.name; }
        };

        return fuzzy.filter(input_value.inputValue, list, options);
    };

    render() {

        const { _locales,  _sfx_enabled, _music_enabled, _jamy_enabled, _currency_countries, _selected_locales_code, classes } = this.state;

        let locales = _locales[0];

        for (let i = 0; i < _locales.length; i++) {
            if(_locales[i].code == _selected_locales_code) {
                locales = _locales[i];
            }
        }

        let currencies = [];
        Object.entries(_currency_countries).forEach(entry => {
            const [key, value] = entry;
            currencies.push(key);
        });

        return (
            <div style={{overflow: "overlay", maxHeight: "100%"}}>
                <Container maxWidth="sm" className={classes.container}>
                    <Fade in timeout={300*1}>
                        <Card>
                            <CardHeader title={t( "pages.settings.language")} />
                            <CardContent>
                                <Autocomplete
                                    fullWidth
                                    value={locales}
                                    filterOptions={this._fuzzy_filter_locales}
                                    onChange={this._handle_locales_changed}
                                    id="locales-autocomplete"
                                    options={_locales}
                                    getOptionLabel={(option) => option.name || option.original.name}
                                    renderOption={(option) =>
                                        <div>
                                            <img src={get_svg_in_b64(option.original.svg, !LANGUAGES.includes(option.original.code.split("-")[0]))} style={{marginRight: 8, verticalAlign: "middle", height: 24}}/>
                                            <span
                                                style={{color: LANGUAGES.includes(option.original.code.split("-")[0]) ? "#1c1882": "inherit"}}
                                                dangerouslySetInnerHTML={{ __html: option.string }}>
                                            </span>
                                        </div>
                                    }
                                    renderInput={(params) => <TextField {...params} label={t( "words.locales", {FLC: true})} margin="normal" />}
                                />
                            </CardContent>
                        </Card>
                    </Fade>
                    <Fade in timeout={300*3}>
                        <Card className={classes.marginTop}>
                            <CardHeader title={t( "pages.settings.sound")} />
                            <CardContent>
                                <FormControlLabel
                                    value={t( "pages.settings.enable_sound_effects")}
                                    control={<Switch checked={_sfx_enabled} onChange={this._handle_sfx_enabled_switch_change} color="primary" />}
                                    label={t( "pages.settings.enable_sound_effects")}
                                    labelPlacement="end"
                                /> <br />
                                <FormControlLabel
                                    value={"Enable music effects"}
                                    control={<Switch checked={_music_enabled} onChange={this._handle_music_enabled_switch_change} color="primary" />}
                                    label={ "Enable music effects"}
                                    labelPlacement="end"
                                />
                            </CardContent>
                        </Card>
                    </Fade>
                    <Fade in timeout={300*4}>
                        <Card style={{position: "relative", zIndex: 1}} className={classes.marginTop}>
                            <div style={{backgroundImage: "url(/src/images/Team.svg)", backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat", padding: 0, margin: 0, position: "absolute", width: "100%", height: "100%", filter: "contrast(0.777) saturate(1.314) opacity(0.369)", zIndex: "-1"}}></div>
                            <CardHeader title={t( "pages.settings.superintendent")} />
                            <CardContent>
                                <FormControlLabel
                                    value={t( "pages.settings.enable_the_superintendent")}
                                    control={<Switch checked={_jamy_enabled} onChange={this._handle_jamy_enabled_switch_change} color="primary" />}
                                    label={t( "pages.settings.make_jamy_active")}
                                    labelPlacement="end"
                                />
                                <p>{t( "pages.settings.description_of_jamy")}</p>
                                <Divider />
                                <p>
                                    <div style={{position: "relative"}}>
                                        <h2>The following semi-annual report, warns : <img style={{verticalAlign: "sub", width: "1.25em"}} src={get_svg_in_b64(<DangerTweemoji/>)}/></h2>
                                        <p><b>Social networks are often thought of as a sort of parallel world yet they offer the possibility of creating one's own profile with relatively little effort and presenting oneself on the Internet, they can serve cybercriminals as a welcome supplier of information. This perceived "community" may however be deceiving.</b></p>
                                        <blockquote style={{color: "navy"}}>
                                            "The use of social networking sites should be governed by the same principles as use of the Internet in general. As little personal information as possible should be divulged. The information should be well protected and only made accessible to clearly defined persons. Ultimately, the responsibility lies with each individual Internet user. Prior to publication, everyone should think and decide for themselves which personal data to publish on the Internet, thereby making it available to the public for an indeterminate time period."
                                        </blockquote><br/>
                                    </div>
                                    <br/>
                                    <b style={{color: "midnightblue"}}>— Federal Strategy Unit for IT & Federal Office of Police fedpol  <img style={{verticalAlign: "sub", width: "1.25em"}} src={get_svg_in_b64(<ShieldTweemoji/>)}/> | Swiss Confederation <img style={{verticalAlign: "sub", width: "1.25em"}} src={get_svg_in_b64(<SwissTweemoji/>)}/> around 2008. <i style={{textDecoration: "underline", cursor: "pointer"}} onClick={() => {window.open("https://www.ncsc.admin.ch/ncsc/en/home/dokumentation/berichte/lageberichte/semi-annual-report-2008-1.html")}}>See ncsc.admin.ch...</i></b>
                                </p>
                            </CardContent>
                        </Card>
                    </Fade>
                    <Fade in timeout={300*5}>
                        <Card style={{position: "relative", zIndex: 1, minHeight: "600px",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MTAgNTY0IiBzdHJva2Utd2lkdGg9IjMiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PHBhdGggc3Ryb2tlPSIjMDAwIiBvcGFjaXR5PSIwIiBkPSJNMSAwbDgwOSAxdjU2M2gtODlsNS0xMHEtMi0xNCAzLTE5bDI3LTM1di0zMXE5LTkgNi0zMGw2LTEwLTYtOXE0LTIwLTUtMjcgNy00IDUtMTZsLTgtMTEtMTEgNS0zLTEtMTAtMTYtNCAxcS04IDQtNiAxOWwxMSAyMC0yIDEtMjEtMTQtMi04LTE0LTMtMjgtNTEtMTYtMTctNzItMzgtNi0xMC01LTItMSAyLTE0LTggMi01LTYtMXYtMjNsMzQtNDMgMi0xNyAxMi0xN3EtNC0yNyA2LTM5bC0xMi0xN1Y2NWwtMTgtMjctMTEtMi0zNS0xOGgtMzlsLTggNS0xMC01cS05IDktMzAgNmwtOSA3LTIgMjktOSAyNC0xNSAyM3YyMWwxNSAzMyA3IDQgMjAgNjMtMTIgM3YzcS0xNyAyLTIzLTZsLTEgMi00LTEgNC0xLTExLTYtMSAyLTE0LTIgMi01cS0yMCAyLTI4LTdoLTE5bC0xOS05di0zbC0yOC0xOGgtMTVsLTMzIDI1LTUgMTdxLTI1IDE0LTMzIDQ1bC0yMyA1LTM3IDMxIDEgMyA1LTJ2OGwtMTYgMTMtMiA3IDYgMTItMi0yLTQgMXYybC03IDItMy0xLTItMTVxMTAtMTAgNi0zMmwtNi05cS0xNi01LTI0LTE3di0xNXEtMTctMy0yMiA3bC03IDE1LTUgM3EtMTMgMTItOCA0M2wxOCAzN2gxcTEzIDM1IDM2IDYxbDExIDYtNiAyMiA2IDE2LTYgMTJoNGwyLTFxMiAxMy0zIDE5LTE1LTItMTkgN2wtMiAxOSA2IDhxLTQgMjIgNSAzMkgxVjB6Ii8+PGcgZmlsbD0iIzA3MDUzMiIgc3Ryb2tlPSIjMDcwNTMyIj48cGF0aCBkPSJNNDY3IDE4bDExIDUgNy01aDM5bDUwIDI1IDE0IDIydjE5bDEyIDIwcS0xMCAxMC02IDM2bC0xMiAxN3YxM2wtMzYgNDd2MjNsNiAxLTIgNS00IDIgMiA0IDQgMyAxLTIgNSA4IDUgMy0yIDEgNSA1IDItMSAyLTktNi01IDEtMyAxMSA5IDEgMyA3MSAzOCAxNiAxNyAyOSA1MSAxNCA1IDIgNiAyMSAxNCAxLTItMTEtMTl2LTZoMWwxMiAxNiA1LTN2LTNsLTQtMS0zLTE3LTggMSAzLTQgMS0zIDkgNyA1IDkgNSAxIDgtNXExMCAzIDggMjBsLTUgOHE5IDYgNSAyNmw2IDEwLTYgOXEzIDIxLTYgMzB2MzFsLTI3IDM1cS01IDUtMyAxOWwtNSAxMGgtMTNsNi0yNiA2LTgtNC0zLTMtMTEtMTUtMS0zLTExLTExLTMtMS0zLTUgMi0xIDItMTUgNy0yLTEgOC04IDE2LTktNS0xNiAzLTEgMTIgMTEgMjAtMjMtMTItMjEgMTEtMyAzIDE4aDEzbDEtMiAxMS05IDMtN3EtNi0yMC0yMS0zMGwtOC0yMS0xOC05aC0xMGwtNy02cTAgMTQtNyAyMiA3IDUgNSAyMGwtMTIgMiAxIDE2IDUgMy0xIDNoLTExbC0xLTM2LTExLTEgNi0xMHEtMy0yMiA2LTMxbC02LTExLTEtMjVoLTV2LTZsLTUgMy0xLTloMmw0LTEtMS01cS0xNi0yLTIyLTEyaC0xM2wtNy0xMC0xNi04LTEgMyAzIDNoLTEwbDEtMTAtNi0yLTE3IDEyLTItNC01LTJxLTcgOC0yMyA2bC0yLTEyLTIzLTYtNS05LTEyLTMgMTctMjQtNi0xMiA2LTktNi04LTEtMTktOS0xLTItNXE4LTcgNi0yNGwtMy01LTktNCAxLTMgMTEgMSAyIDUgNC0xIDItOSAxNi0xMHEtMTEtNy0xMy0yMmwtMzQtMTJoLTEzbC0xOCA4IDEgNCA1LTN2MjFsLTMgNi05IDQgMiAyIDQgMXYzM3EtOCAyLTYgMTUgOCA2IDYgMjNoLTFsLTEzLTQwLTktNC0xMy0zMnYtMjFsMTgtMjlxLTEtMTQgNi0xOFYzNWw3LTkgMjMtMiAxMS02em0tMjcgMTJsLTIgNSA1IDEgMS00LTQtMnptLTYgMTJsLTIgMyAxMSA5IDEtMTAtMTAtMnptLTEwIDQybC0xMCAxMiAyIDEyIDE2LTctNi0xNS0yLTJ6bTgyIDU0bC0yIDQ3IDE3IDFxLTEtMTYgNy0yM2wtMy03LTExLTYtNC0xMC00LTJ6bTYgNjBsLTIgMTcgNSAxIDEtMTYtNC0yem0yNDAgMTc0bC0yIDExIDUgMSAxLTEwLTQtMnptLTEyIDEybC0yIDJxLTUgMjYgOSAzNGwzLTEtNi0zMy00LTJ6bS0xNCAxMTRsLTIgMXEtOCA1LTQgMjJsNSAxcTktNSA3LTIybC02LTJ6TTI3NSAxODBoMTVsMjUgMThoLTExcS02LTExLTIyLTEybC0yNyAxMiAyIDEtOCA1LTEyIDMwLTEyIDYtNCAxMC0xMSA0cTIgMTItMyAxNmwtNDggMjQgMiAxLTggNS0yIDUtMyAxaC00bDEzLTE2IDI4LTIwcTEzIDIgMTktM2w4LTIwIDI1LTI1cTItMjAgMTYtMjhsMjItMTR6bTQ0IDIxbDE4IDloMTlxOCA5IDI4IDdsLTIgNXEtMjAgMy0yNy02aC0xOWwtMTgtOSAxLTZ6bTEyMCA0bDUgMTdoLTFsLTQtMTd6bS00MiAxN2wyNCAxMmgxMWwxLTQgMTEtMiAxLTVxNyA0IDUgMTdsLTMgNi04IDMtMi03LTE3LTItMTMtOSAxLTItMy0xaC0ybC04LTMgMi0zek04MyAyNThsNiAxLTcgNSAxIDEtOCA1IDEgMS0zIDEtMS0zIDctOSA0LTJ6bTE0IDE1bDI3IDIyIDIgMjVxLTggNi02IDIybDMgNCA1IDEgNC0yIDEtMyA1IDNxMyAxOS02IDI3bC0xIDMwLTE3LTlxMy0xOS02LTI3bDYtOS02LTkgNi0xMXYtMTNxNy01IDYtMThsLTctMTgtMTAtMy0xIDItNS0xNHptMzg3IDlsMTEgNyAyIDctNCA4LTUgNC0yIDQtMSA3OC01LTEtOS0yM2gtM2w2LTExdi00OWwxMC0yNHptLTQyNCA2djQ4aC0xcS05LTEyLTUtMzdsNi0xMXoiLz48cGF0aCBkPSJNMTQ3IDMxMmwzIDEtMTIgMTd2MTJsLTYtMTMgMTUtMTd6bS04NiAyNWw1IDcgMSAxIDYgMTctNS0yLTgtMTYgMS03em01ODUgNWwyIDF2MzVsLTQgMi0yIDIzLTkgMTdoLTN2LTE1bDYtOHYtMjJsNi04cS00LTE4IDQtMjV6TTc5IDM2N2wxNyAzMWgxbDExIDE4aDFsNyAxMGgtM2wtOS02LTI3LTQ4IDItNXptNTQ2IDJsNSA1LTEgNGgtNWwxLTl6bS0xNyAzbDQgMiAyIDM0IDQtMSAxLTUgOCA2LTkgMy02IDl2NDdsNSAxIDMtMTIgNCAxdjM2bDE4IDQxaC02bC0yOC0xMi0yIDE5LTYgOXE3IDIgNiAxNGgtOTVsLTEtMyA2LThxLTQtMTggNC0yNWwyLTEtMS01LTUtMiAzLTQgMy0xLTEtNS01LTJxLTMtMTMgMy0xNmw5IDIgMiA0MCA0LTFxLTQtMjMgOS0yOWwzIDIgMiAxMHExMSAxIDE2IDlsLTYgMTQgMTEgMSA3LTI0LTYtMTIgNi0xMi0xMi0yOCAxNi05IDctMjAtNS0zIDctMTIgNS0yIDMtNCA5LTEgMi00MXptLTMwIDk2bC0yIDUgNSAxIDEtNC00LTJ6bTAgNzJsLTIgNSA1IDEgMS00LTQtMnptNDktMTE0bDMgMS0yIDVoLTRsMy02em0tNTA2IDRsMyA2cS02IDUtNCAxOWwxMiA0LTExIDIwLTMgMWgtNGw2LTE3LTYtMTQgNy0xOXptNDUyIDJsMyAxLTEgNWgtNWwzLTZ6bS0xMjcgNmw3IDYgMyAxNy0xMCAxLTItMjIgMi0yem00MSA2bDUgM3YxMTdsLTctMS0yLTUtMyAxdjVoLTZsLTEtNi01IDJ2NGgtNmw5LTEyIDkgNiA1LTktNS05LTEwIDYtMi0zIDUtNi01LTYgMTgtMTUtNi05IDYtOCAxLTU1em0tMyA3OGwtOSA5IDYgOSA0LTItNS02IDYtOS0yLTF6bTE0MS03OGwzIDIgMiA3LTYtNSAxLTR6bS04NCAzMGw4IDYtMyAxLTEgMTctMTEtMSAxLTE3IDUtMyAxLTN6bS0zMDUgNmw0IDItMSA0LTUtMSAyLTV6bTAgMTJsNCAyLTEgNC01LTEgMi01em0tMTI5IDZsOSAxcS01IDctMTcgNmw0LTUgNC0yem00NTQgMGwzIDItMSA0LTUtMSAzLTV6TTk3IDUxNWwzIDMgMiAxMy00LTMtMS0xM3ptNiAzMmw1IDggMS0yIDUgMTFoLTZsLTUtMTd6bTU0MyA2bDggMTFoLTE3di0xbDctOSAyLTF6Ii8+PC9nPjxnIGZpbGw9IiMxZDI3NTgiIHN0cm9rZT0iIzFkMjc1OCI+PHBhdGggZD0iTTQ0MCAzMGw0IDItMSA0LTUtMSAyLTV6bS02IDEybDEwIDItMSAxMC0xMS05IDItM3ptLTEwIDQybDIgMiA2IDE1LTE2IDctMi0xMiAxMC0xMnptMjYgOWwtNCA1LTEgMy0xLTItNSAzLTEtNCAxMi01em0tMTIgNzN2NmwtNSA3LTEtNSA2LTh6bTEgMzRsNSAxNWgtMWwtNC0xNXptNiAxOGw1IDEyLTQtMy0xLTl6bS0zIDI4bDQgMS03IDQtMS0xIDQtNHpNOTAgMjU4djVsLTYgMiAyLTUgNC0yem00MzEgMTJsNyAyIDEgMTEtNCAxMC0xMyAxLTEtMSAzLTUgOC0xLTEtMTd6bTU1IDBsNiAyLTEgMTAtNS0yLTEtNC0xNiA5LTEtMi0zIDVxLTE5IDQtMjQtNSAxNSAwIDIyLTdsNSA0IDEgMiAxNy0xMnptMTMgNmwyMyAxNiAxIDMtMyA1LTQtMi0zLTktOS0xLTEtNi01LTMgMS0zem0tNTIzIDRsMSAxLTYgMTEtMS00IDYtOHptNDE1IDJsMiAxLTkgMjN2NDlsLTYgMTEgNCAyIDEwIDIyIDQtMSAxLTE2IDUgMTUtNiA0IDIgNCA0IDNxLTEwIDYtNiAyOCA4IDQgNiAxOWwtMi0yLTQgMXY1NGwtNiA5IDYgOC0xOCAxNSA1IDctNSA3IDQgMSA4LTYtNS05IDExLTl2M2wtNiA3IDUgNi01IDMgNSA5LTUgOCA0IDIgMiA0aC01bC0xLTYtOS02LTkgMTJoLTM2bDYtMTYtNi01cS0yLTE1IDYtMTlsMS01MyA1IDN2LTJsLTYtNyA2LThxLTQtMjIgNC0zMWwyLTFxLTQtMjMgNi0zM2wxMC05IDItMTYgNi0xMXYtNDNxOS05IDctMjhsNi0zem0tNSAxNTBsLTIgMjkgNSAxIDEtMjgtNC0yem0tMzAgNmwtMiAyIDIgMjIgMTAtMS0zLTE3LTctNnpNMTA1IDI4OGw5IDJ2NmwtOS04em0zNTUgMGwyIDFxMiA5LTMgMTFsLTggMXYtMWw1LTEwIDQtMnptMTEzIDBsMyAxLTEgNS01LTEgMy01em0yMSAxdjhsLTQgMi0yLTMgMi0zIDMtMiAxLTJ6bS01NCAydjNsLTExIDE2LTYgM3YtMWw2LTEyaDNsMi00IDYtNXptLTQyIDJ2MmgtMWwxLTJ6bTEyMiAxbDI4IDE0LTEgNC02LTEtMi00LTE0LTYtMi01LTMtMnptLTcxIDZsMyAzLTIgMy00LTIgMy00eiIvPjxwYXRoIGQ9Ik00OTIgMzA0bDEgMS02IDExLTEtNCA2LTh6bTE1NCAxNGwyIDEgMSA2LTEgNCA1IDFoMXEtMyAyMSA2IDMxLTkgOC02IDMwbC02IDEwIDEyIDN2MjFsLTctMTctNS0yLTEtNC01IDItNiAxNiAzIDEtNSAxMS0yIDEtMiAxNi0zLTUtMyAxIDggMTEgNC0xcS0yLTkgNC0xMWwyIDEtNSAxNi0zIDFoLTRsLTEtNi00IDEtNS0xLTMgMTItNS0xIDEtMTggNCAxIDEtNS00LTEtMiAxdi0yNWw2LTggMiAxNCAxMC03IDMgMXExMC03IDEwLTI1bDQgMSAxLTEwLTQtMi0yIDEgNC03aDJsMS0xMyA0IDEgMS0xNi0yLTItNCAzLTEtOSAxLTQtNC0zLTItMTMgNC00em0tMTkgMTA4bC0zIDZoNGwyLTUtMy0xek02MSAzMzJsNiAxMmgtMWwtNS0xMnoiLz48cGF0aCBkPSJNNjQyIDM0NGwxIDMtMSAyMC01IDctMS0xOSA2LTExem0tMjcgNGwzIDNxMiAxNS02IDIybDQgNSA4LTEgNSAxaDFxLTggNi02IDIzbDUgMSA3LTE3djEybC02IDE0LTUtMiAyLTEtOC02aC0ybC00IDEtMi0zMS00IDEtMS02IDktMTl6bS01NDIgOGw1IDE1aC0xbC00LTE1eiIvPjxwYXRoIGQ9Ik02MjcgMzYwbDMgM3YxMGwtNi00IDMtOXptOTcgMGw4IDJxLTIgMTIgNCAxNmwyIDEtMyA1aC0zbC0xMi0xOCA0LTZ6bS00NCAxMmwxMSA3cTEgMTUtNyAyM3YyNGwtNCAyLTIgMTUgMTggMyAxIDEwIDEwIDYgMi0xMSA1IDEyLTIwIDIyLTE0LTExLTEgMyA1IDEyLTMtMi0xMC0zNy0xMSAyIDYgMjEtNiAxLTYtM3EzLTE5LTYtMjdoMmw4LTcgMi00IDEgNSAxMS0xLTItNWgtNGwyLTE4aDEwcTItMTYtNS0yMSA3LTcgNy0yMXptMTQgODRsLTEwIDExIDExIDEgMS0xMS0yLTF6bTU4LTg0bDQgMnY1bC00LTEtMiAxIDItN3ptLTU2IDZsMTEgNmgtNWwtNi0zdi0zem0tNjA1IDhsNSAxMCAxIDEtNS0yLTMtNSAyLTR6bTUxNSA2djIxbC0xMSAzLTctMTggNS0yIDMgMTIgMi0xIDgtMTV6bS0zMCAxMWwxIDIgNC0yIDQgMTEgMyAzIDEgMy03IDEyIDUgMy01IDE2LTcgOS0xMSA0IDEyIDI5LTYgMTJxNyA0IDYgMThsLTcgMTctMTEtMSA2LTE0LTE4LTEwLTEtMTEtOCA2LTQgMjQtNS0xLTEtNDEtMTAgMi0xLTIyIDEwLTQgNCA2IDQtMXEtMy0xNCA0LTE3bDggMSAyIDE3IDQtMSAzLTUgMy0xLTEtNS0zLTEtMi0xMSA0LTYgMTItNyAzLTExIDExLTMtMS0zaC0xMXEtMi0xMyA2LTE3em0tMyAyOWwtMyA2aDVsMS01LTMtMXptMSAxMmwtNCA1IDUgMSAxLTQtMi0yem0tNTAgMzBsLTIgMiAyIDEwIDEwLTF2MTJsMTEgMSAyLTE3IDUgMTAgNSAxIDEtNC0zLTItMy01LTExLTctMSAzLTYgNC01LTEtMS00LTQtMnptMzcgMjRsLTMgNSA1IDEgMS00LTMtMnptLTQ1OC05M2w1IDExLTQtMy0zLTYgMi0yem0yMzkgOWwzIDEgOCAxNi03IDEtNS0xMmgtNWwyLTQgNC0yem0zMDYgNnYxOGgtMnEtNi0yLTQtMTJsNC01IDItMXptLTMzNCAxMmw0IDN2M2gtNmwyLTZ6bS0xIDE4bDUgMS0yIDUtNC0xIDEtNXptMjY1IDE4bDQgMi0xIDQtNS0xIDItNXptNjEgNmwzIDN2M2gtNmwzLTZ6bS0xNCAxbDkgMTEgMi0xdjJsLTMgNS0zIDFxLTEgMTEgNiAxNHYxMWwtNC0zLTgtMjIgMS0xOHptNDMgMTFsNCAyLTEgNGgtNWwyLTZ6bTEwIDZsMiAxLTkgNiAxLTQgNi0zem00OCA2bDEgMS0xIDE3IDIgMS0zIDUtNS0xcS00LTE3IDQtMjJsMi0xem0tMjA5IDEwbDUgNC0xIDQtNCAydi0xMHptLTEwIDJsMyAzLTIgM2gtNGwzLTZ6bTEwIDEwbDUgNC0xIDQtMyAyLTEgM3YtMTN6bS0xNiAxNGwzIDJ2MjhoLTEybDEtMTkgNCAxIDQtMTJ6bTE1IDF2MThsLTUgNy0xLTE5IDQtMiAyLTR6bTYyIDVsNCAyLTEgNC01LTEgMi01em0tMTA4IDE4bDQgMnY0aC02bDItNnoiLz48L2c+PHBhdGggZD0iTTQ1NiA5MGw1IDEtMTAgNS0xLTIgNi00em0xMSAwbDI0IDEyaC01bC0xOS0xMnptNDMgMjlsNSA0LTIgMy0zIDEtNS0xIDUtM3YtNHptLTQ2IDdsNCAydjRsLTYtMSAyLTV6bTM2IDVsMyAyLTEwIDV2MWwtNi0xIDEzLTd6bS0yNiA2bDkgNy01LTUtMiAxLTEgMy0xLTItNiAzdi0xbDItMyAzLTEgMS0yem0xMSA3bDYgNCAxIDQtNy04em0yNiAxbDcgMTEtMiAxLTYtMS0xLTUgMi02em0tMzQgNWwzIDMtMiAzLTQtMiAzLTR6bTI4IDEwbDE2IDJoMXE0IDE5LTggMjNsLTQtMi0xLTMgMi0zIDUgMnYtOWwtMTAtMi0xIDJ2LTEwem0tMTMgMXYybC01IDEwLTEtNSA0LTYgMi0xem0yNCA0N3Y2bC0zIDItMy00IDYtNHptLTIwIDIwbDIgNC02IDYtNSAxNCAxNiAxMiAyIDEtMyA1LTE5LTE3LTMtNiA2LTMgMTEtMTMtMS0zek05NiAyNjlsNiAxOCAyIDFoLTRsLTEwLTE1IDYtNHptMTkgMjZsNSAxOC01IDEwLTItNSAxLTEwLTYtMiA0LTZoMmwxLTV6bS0xIDMydjZsLTExIDE0LTEtNSA2LTExIDEgMiA1LTZ6bS0zNSAzNGw1IDE2aC0xbC00LTE2em0yMyAwbDEgNSA1IDR2MmwtNiAxLTYtMSA2LTExem0zMSAxOGwxMSAyNiA2IDMgMS0zIDQgMy00IDEgMTAgNS01IDEgMiA1aDRsMS01IDYgMTItMiAxLTUgMTctMTgtNC0xNy0xNS0xIDJxLTEyLTEtMTYtOWwtMi02IDMgMSAxMS01di0ybDMtMS02LTgtNC0xIDYtMSAxMCA2IDItMjN6bS0zMCAzbDUgMTEtMy0yLTItNmgtM2wyLTEgMS0yem02MzggMmwzIDN2NmwtNi00IDMtNXptLTI2IDEybDMgMiAyIDYtNC0zLTEtNXptMjUgMGw0IDJoMXE3IDUgNSAyMGwtMiAyLTgtNy0yLTE1IDItMnptLTI5IDEybDE1IDEyIDEtOCAxNiAyNC0xNyAxNS00LTFoLTJsLTYtMy0xLTloLTExbDktMzB6bS0zNjggMTlsMyA1IDgtMS0xIDItMiA1LTggMnYtMTN6bS0xNTYgMjBsNSA1LTEgNC00IDN2LTEyem0xMzMgM2w0IDIgMyA0LTggMy0yLTMgMy02em0tMTAyIDZsMTAgNmgybDE0IDIgNSAxMC0zIDEgMiAxMSAxMCA0LTIgMTQgMSAxcS0xMCA4LTI5IDZ2MmwtNS0yIDQtMS0xMC01LTItNS0xNy0xMC0yLTQtNC0yIDMtNCAzLTEgMS01IDUtMSAyLTMgMTYtMy0xLTUtNS0yIDItNHptMTggMjRsLTIgNmgtNWwtNyAxMCA2IDJ2LTJsNi00IDIgNiA3LTEgMy00LTItMTEtOC0yem01OC0xMnY0bC01IDJ2LTFsMy00IDItMXptLTIxIDE4bDMgMS0yIDUtNCAzLTIgM2gtNGwxLTYgOC02em00MTUgMjRsMyAxLTEgNCA2IDV2MmwtMTgtMSAxMC0xMXptLTUxIDlsMTcgMzNoLTJsLTEyLTE3IDItMS01LTE1em03NCAyMWwzIDItNiAyMmgtMTJsMTUtMjR6bS01NiAxOGwzIDIgMiA0aC01di02eiIgZmlsbD0iIzk5MTkzNSIgc3Ryb2tlPSIjOTkxOTM1Ii8+PHBhdGggZD0iTTQ2MiA5MGwxIDEtMSAyIDMgMy0xMCAxLTQtMSAxMS02em0tMTggMzJ2MTBsLTMgNi0yIDEtMi03IDItMSA1LTl6bTE0IDRsNSAxLTEgNCAxIDEtNy0xIDItNXptMTAgMGwxMSA2LTMgMWgtM3YtMmwtNS0ydi0zem0tMTUgMTJsMyAxLTEgNS01LTEgMy01em01NCAwbDMgM3Y0bC00LTEtMiAxIDMtN3ptLTIgMTFsNSAzLTEgNC01LTEgMS02em0xMiA3bDUgMy0xIDMtNS0xIDEtNXptLTc4IDM3bDUgMTZoLTFsLTQtMTZ6bTYgMThsNSAxNmgtMWwtNC0xNnptNjEgNTNsMTQgOCAyIDUtMS0xLTE1LTExLTIgMSAyLTJ6bS00MjcgNWwtMSA0LTcgMyAyLTMgNS0yIDEtMnptNDAxIDdsMTAgNi0xNiA0djNsLTgtMS00IDN2LTNoLTVsMjMtMTJ6bTk0IDBsMiA3LTMgNS0yIDEtMS03aC01bDktNnptLTUyIDV2NWwtMTAgNC0yIDQgNSAxLTExIDV2LTFsLTEtNCAzLTEgNC0xcS0yLTkgNC0xMWw4LTF6bS00MjEgN2w5IDYtMiAxLTYtMy0xLTR6bTQ0MyAwbDMgMS02IDctMS0yIDQtNnptLTcwIDV2OGwtNSAxMC0xLTVoLTNsMy01LTItMS00IDN2LTNsLTIgMSAyLTMgMSAxIDMtNSA4LTF6bTE4IDE0djZsLTUgMTAtMS01IDYtMTF6bS0zNzggMTJ2OGwtOCAzIDItMyAxIDIgNS0xMHptNTM3IDVsMyAzLTIgMy00LTIgMy00em0tMTgzIDEzdjZsLTYgMTEgNSAxLTQgMTAtNSAzcS0yIDIxLTEzIDMzbC0xLTUgNi0xMSA2LTI1IDEyLTIzek03MyAzNDlsNSAxNmgtMWwtNi0xMiAyLTR6bTUzOSAxdjVsLTUgMTAtMS00IDYtMTF6bTM4IDRsNCAydjVsLTQtMS0yIDEgMi03ek04NSAzNzNsNSAxMCAxLTQgMiA1LTMgMnYybC01LTE1em02MTEgMTFsMjEgMTItMyAxIDQgMTAgMiAxIDEtNHE3IDMgNSAxNmgtMmwtMTMtMTItOSA4IDIgNCAzIDMtNyAxNS0xMC0xIDYtMTUtMi0yLTkgNS0xLTExaDJsNC0xdi01bC01IDEtMS0xIDgtMjIgNC0yem0tOTAgM3Y0bC01IDEwLTIgMSAxLTIgNi0xM3ptLTE4IDR2MTZoLTFsLTItNS0zLTEgMi01IDItMSAyLTR6bS00OTEgMmw1IDYtNy00IDItMnptMjQwIDZsNSA1LTEgNC01LTEgMS04em0xNTUgMXYzbC01IDEwLTEtNSA2LTh6bTkxIDVsNSA5aC0ybC0zLTl6bTY1IDNsNiAzLTEgM2gtOGwzLTZ6bS00OTEgNmw1IDR2MmwtNi0xIDEtNXptMjgyIDVsNSAzLTUgOXYtMTJ6bS0xMDEgMWw0IDN2NGwtNC0xLTIgMSAyLTd6bTMxMiAwbDQgMiAzIDQtOCAzLTEtNyAyLTJ6bS00ODAgNmwxNSAxMCAxIDMxLTQgMXEtMS0yMS0xNC0yOXYtMTFsMi0yem02IDEybC0yIDUgNSAxIDEtNC00LTJ6bTEyLTEybDQgMmgxbDIgNGgtN2wtMi00IDItMnptMTQ5IDVsNSAzLTEgNC01LTEgMS02em0yOTcgMWwxMiA4IDIgNS0xLTEtNCAxLTQtMSAyLTUtMS0xLTQgM3YtM2wtNSAxLTEtMSA0LTZ6bS00NzYgMTJsNCAyLTEgNC01LTEgMi01em0xNzggM3Y2bC01IDN2MWwtNC0xIDEtMiA4LTd6bTMyNyAzbDMgMnY0bC02LTEgMy01em0tMzYyIDNsOCA0LTQgNS01LTEtMy00IDMtMSAxLTN6bS03MSAzbDQgMi0xIDQtNS0xIDItNXptODIgMGw2IDEtMSA1LTUtMXYtNXptMzMwIDN2OWgtNWwtMS0zIDYtNnptLTQ3MyAzbDUgMnY0bC02LTMgMS0zem0zMSAwbDQgMi0xIDEwLTUtMSAyLTExem0xMiAwbDEwIDItMSA0LTExLTEgMi01em0zNSAzbDUgOWgtMmwtMy05em00MDcgMHEtMyAxMSAzIDE1bC0zIDEtNC0xaC0ybC00LTEtMS00aC0ybDMtMSAxMC05em0tMTA3IDJsNCAxaDFsLTIgNi00LTIgMS01em0tMjQ5IDFsNyAxLTE4IDExIDExLTEyem0tMTYgM3Y4bC00IDEtMy00LTQtMSAxMS00em0tMjIgOWw2IDUgMSAxIDMgMS0yIDQtOC02di01em0zNzggMGw0IDMgMiAzIDQtMSAxIDcgMiAxLTMgOC03LTE1LTQgMS0xLTUgMi0yem0tODUgNmw1IDMtMiAzLTQtMiAxLTR6bS0yODMgMTB2NWwtMjIgOXYtMWwyMi0xM3ptNDAzIDhsMTcgMi0xIDQtMTAgNC0xIDcgMTggMSAxLTMgMTUgNSAyIDgtMTggMzItMzctMS00LTEwLTEgNC0zLTQgMy0xLTEyLTIzLTUtMTggMjEtMSA2IDEyIDgtMS02LTExaC00bDExLTZ6bS0xNyAxMmwtMiA1IDYgMXYtNGwtNC0yem0zMCAxOGwtMiA1IDUgMSAxLTQtNC0yeiIgZmlsbD0iI2E3NTY1ZSIgc3Ryb2tlPSIjYTc1NjVlIi8+PHBhdGggZD0iTTQ2NCA5MGw5IDYtMiAxIDggNS0zIDEtMTItNi0yLTQgMi0zem0xOCAxMmwxNCA2aC00bC0xMC02em0yMiAyNGw0IDEtMjIgMTF2LTFsMi0zIDE2LTh6bS0yNyAxM2w5IDl2N2wtNS04LTctMiAzLTZ6bS0xNCA0bDEwIDItNSAzIDEgMmgtMmwtNS0yIDEtNXptNDIgMTJsNCAxIDIgMS0xIDQgMSAxLTctMyAxLTR6bS0xOSA4djVsLTMgNi0yIDEtMS0xIDYtMTF6bTIxIDVsNCAxLTEgNWgtM2wtMi00IDItMnptLTIwIDEzbDMgNSAxIDEtMiA1aC02bDItM2gxbC0xLTQgMi00em0tMTkgMTdsMiAxLTggNXYtMWwyLTMgNC0yem0xOCAyMWwxIDMtMSA0IDIgMi04LTIgMy00aC0ybDUtM3ptLTEwIDIxbDQgMiAzIDQtMyAxdjFsLTQtMi0yIDF2LTJsMi01em0tMzggMTBsMSAyIDQgMS0xMSA1di0xbDItMyAzLTEgMS0zem0tMzI5IDQ0bDUgNHYybC00IDItMiA0IDIgMS0yIDYgMyA1aC02bC0zLTYgNy0xOHptLTMgMzZsNCAxLTMgMS0xMCAyMC0xLTQgMTAtMTh6bS0xMCAzMWwxIDEyLTEgNHYybDEwIDE4LTExLTExLTQtMSAyLTEtMi01LTEgNC0zLTQgMy0xIDYtMTd6bTYxOSAzNmw1IDExLTEtMS00LTJ2LTh6bS02MDYgMmw0IDMtNCAxIDUgMyAyIDIgNC0xdjRsLTggMy02LTExIDItMSAxLTN6bTkwIDM2bDExIDd2MmwtMTEtM3YtNnptMTQ3IDNsNSAxLTMgMTMtNi0ydi02aC0ybDYtNnptLTEwNyAxMmw1IDIgMiA2LTctOHptNTIgNmw5IDQgMSAyLTEyIDItMS01IDMtM3ptMTkgMGwyIDIgMSA0LTEgMy03LTMgNS02em0zOCA0djEwbC0yLTItNC0yIDMtNCAzLTJ6bS05NyA4cTE3LTIgMjQgNmwtMTEgMSA1IDktMiAxdjFsLTUtNi0zIDEtMS03LTctNnptOTcgMTB2M2wtNSAxMC0xLTUgNi04em0zMTEgMzJsNyAxIDYgMTAtOCAxLTUtMTJ6bTI1IDBsMiAxLTggNyA0LTcgMi0xeiIgZmlsbD0iI2RjM2I1YSIgc3Ryb2tlPSIjZGMzYjVhIi8+PGcgZmlsbD0iIzU5Mzc2NSIgc3Ryb2tlPSIjNTkzNzY1Ij48cGF0aCBkPSJNNDUwIDk0bDEgMiAzIDEtMyAxaC0ybC00IDktMS01IDYtOHptLTggMzFsLTIgMy0xIDMtNCAxLTItMyA5LTR6bTU2IDEwdjdsLTMgMi0zLTQgMi0zIDQtMnptLTYwIDM3djE4aC0xbC01LTEwIDYtOHpNOTEgMjU4bDUgM3Y0bC03LTEgMi02em0tNiA2bDMgMS0xMCA1djFsMS00IDYtM3ptNDkyIDE2bDYgMy03IDE0LTQgMi0yLTVoMmw0LTF2LTVoLTNsNC04em0tMTIgMWwxIDItOSA5LTMgMS0zLTQgNS0yIDItNCAxIDIgNi00em0tMzUgMXEyIDcgMTMgN2wtMiA0LTEtMi02IDV2LTFsLTEtNy01IDIgMSAxMC0xIDItOS02IDgtNSAzLTl6bTY0IDVsMSAyLTIgMS0yIDMtMiAxdjFsLTEtMSA0LTYgMi0xem0tMTM1IDFsLTIgMy0xLTIgMy0xem0xNTkgNmw4IDZoLTJsLTYtM3YtM3ptLTE1NiAzbC0yIDN2MWwtNCAyLTIgMy00LTIgMS0zdi0ybDggMSAzLTN6bTE2OSA2bDEwIDcgMSAyMSA0IDUgMiAyLTEgNC0zIDEtMSAzLTItMiAxLThxLTgtNy02LTI0bC01LTl6bS0xMDMgN2wxIDEtNCA3LTMtNCAxLTMgMyAxIDItMnptLTYwIDMzdjEzaC0xdi0yaC01bDYtMTF6bTE4NCA1bDIgMnY1bC00LTEtMiAxIDQtN3ptLTE5MCAxNnYzcTMgMjEtMTEgMjVoLTJsMTMtMjh6bTIzMCAxNGw0IDIgMiAyIDE5IDkgMyAxMGgtMWwtNC04LTE5LTktNSAzLTEtNyAyLTJ6bTYwIDBsNCAyLTIgNC00LTIgMi00em0tMjYwIDEwdjEwbC0yLTItNC0xIDItNSA0LTJ6bTI0NyAxbDUgNXY0bC00LTItMiAxIDEtOHptLTE0OSAxbDQgM3Y0bC00LTEtMiAxIDItN3ptMTAwIDF2NmwtNSAxMC0xLTUgNi0xMXptLTU5MyAzbDEwIDgtMiAxIDMgMTBoLTFsLTQtOC0yIDEtNC0xMGgtMmwyLTJ6bTI0MCAybDUgM3Y0bC02LTQgMS0zem0yNTggNWw0IDEgMi0xLTIgMy0yIDQtMy0xIDEtNnptLTIxIDFsOCAyLTEtMS00IDItMS0yLTUgNy0xLTIgNC02em03MCAwbDQgMiAyIDQtNyAzLTEtNyAyLTJ6bS01NSAxbDUgMTQtNCAzLTQtNSAyLTEtMi01IDItMSAxLTV6bTMzIDVsOCA0djNsLTgtMS00IDMgNC05em0tMTc4IDF2MTJsLTEtMS01LTEgNi0xMHptMjEwIDRsNiAxNC0xLTEtNS0zLTEtMy00IDFoLTJsLTQgMy0xIDExIDYgMyAxMi03djJsLTkgMTEtNC0xLTYtOS03LTIgNS0xMS0zLTEgMTgtN3ptLTMzMyAxbDMgMSAyIDUgMTAtMXYzbDIgMTYgNC0xdjRsLTE1IDE0LTQtNS00IDEtMS0yLTEtNS01IDIgMSA0LTEgNSAxIDFxLTExIDItMTMtM2wxMC0yMSAzIDEtMSA1aDZsMS0yIDQgMiAxLTYtNi0xNSAzLTN6bTI0OSAxbDEgNSA2IDEtMSA0IDIgMS04IDEtNi0yIDYtMTB6bS04MyA0bDMgMyAyIDEyLTQtMy0xLTEyem0yMDcgMWwyIDItNiAxNSAxMCAxIDItMSAxIDItMSAzcTggNCA2IDE5bC0yIDEtOS02LTIgMTItMTEtMSAxMC0xMWgybC0xLTEyLTE3LTFxLTItMTMgNC0xN2wxMi02em0tMTI0IDl2NGwtNSA3LTEtMiA2LTl6bS05NCAzbDQgMi0xIDI4LTUtMSAyLTI5em03MiAxbDEwIDggMSAyIDEgMS02IDItMiAxMSA0IDUgMiAyLTEgNC00IDItMi0xNC00IDEtNi0xIDktNyAyLTUtNC0xMXptMjYgMTFsMiAyLTEgNC01LTEgNC01em00MCAwbDQgMS0xIDUtNS0xIDItNXptMjUgMGwtMyA0LTEgOC01LTEgMS02IDgtNXptLTIwMSAxdjEybC01IDctMS04IDYtMTF6bTIxMSAwbDUgMTZoLTFsLTQtMTZ6Ii8+PHBhdGggZD0iTTY2NiA0NTBsNiAydjExbDEyIDI3LTE1IDggMSAxLTEwIDggMSAyIDEgMS0yNSAxIDUgMTZoLTFsLTUtOHYtMTJxLTctMy02LTE0bDQtMiAyLTRxLTIgMTIgNCAxNmw3IDEgNS0xMiA4LTEtNi0xOWgybDkgMiAxLTYtNi0xMmgyIDR2LTZ6bTIgMzZsLTIgNmg1bDEtNC00LTJ6bTU0LTM2bDQgMiAyIDRoLTExbDEtMiAyLTEgMi0zeiIvPjxwYXRoIGQ9Ik02NDIgNDUxdjhsLTYgNXYtMmwtNiA0IDEgMTMgNS0yIDEgNC0yIDUtOS03LTItMjEgNS0yIDIgNiA1LTIgMSAxIDUtMTB6bS0yMDkgMTVsNSA4aC0ybC0zLTh6bTEwMSAxdjZsLTQgMS00LTUgOC0yem0tMTAgN2w0IDIgMSA1LTEgNCAxIDEtNy0xIDItMTF6bTExNyAwbDIgMiAzIDQgMiAxLTEgNS01LTEtMi00IDItMS0xLTZ6bS05NCA2bDUgMSAyIDUtMiAxdjFsLTUtOHptLTQwIDEybDMgMy0xIDMtNS0xIDMtNXptMTc0IDZsMyAzIDEgMSAzIDJoLTEzdi0xbDMtMSAzLTR6bTQ3IDBsNCAzLTMgMTVoLTNsMi0xOHptLTM4IDZsNiAzdjRsLTctMSAxLTR2LTJ6bS0yNTggN3YxM2gtMXYtMmwtNS0xIDItNSAyLTEgMi00em0yNjUgMWwyIDRxMTItMyAxNSAzbDMgOSAzIDMtNiAxMC0zLTEtMyAyIDYtMTQtMy02cS0xMiAzLTE1LTNsMS03em0tMTkzIDIybDYgNCAxIDItMSA3LTQtMS0yIDF2LTEzem0xNDQgMThsNCAyIDIgMyAxLTQgMiA1LTMgMXYzbC02LTEweiIvPjwvZz48cGF0aCBkPSJNNDU3IDk2bDE1IDZoLTE4bC0zIDMtMS01IDctNHptLTUgMTJsNCAyIDEgMTBoMTdsMy02aDNsLTMtNSA0LTEgOSA4IDIgOS00MSAxLTEtMTYgMi0yem0tNyAzNmw1IDQgMiAycTgtMiAxMCA0djJsLTEyIDIgMiA0aDIybC02LTEwIDYtMiAyIDYgNCAxLTMgMTEtOSAyIDYgMjJxLTE2LTMtMjMgM2wtMi0xNXEtOSAyLTExLTN2LTE4bDctMTV6bTAgMThsLTEgNiAxMSA2IDEtOC0xMS00em0tNiAyMmw1IDhoLTJsLTMtOHptMTYgMjZsMTMgMXEtMiAxNSA1IDIxbC0xIDIgMSAxLTcgNC04LTYtMy0yM3ptLTEgMzBxMTMgMiAxOCAxNGwzIDE2IDUgNC0xIDItMTAgMnExLTIyLTEwLTMxbC01LTEtNCAzIDQtOXptLTI5IDE4bDEyIDEtNSAzLTEgMi01LTEtMS01em0tMzM0IDZsLTEgMnYxMGwtNiAyIDMgNCA2IDYgMyA3LTYgMTAgNiAyIDEgMjMgMiAxLTggMjItMS0yLTYgMy0xMS04LTIgMS01LTE1aDFsMyA0IDE0LTEtMS0xMS05IDYtMy0xMi00IDEtMS0zIDMtNGgtMmw4LTUgOS0yMy02LTItNSA0LTQgOGgtM2w2LTE2IDMtMXYtMmw2LTR2LTJsMTAtNXptLTkgMzZsLTQgNmg1bDEtNS0yLTF6bTMzMi0zNmw1IDEtMTUgNXYtMWwxMC01em0tMjQgNmw1IDEtMTUgNXYtMWwxMC01em0tNDIgMThsMyAxLTEzIDV2LTFsMTAtNXptLTEyIDlsLTUgNi0xLTIgNi00em0tMzYgNDB2NmwtMTcgMjAtMS0zIDE4LTIzem0tMjQgMzBsMSA0LTEyIDE2LTItMiAxMy0xOHptLTIzIDMzbDIgMiAxMSAyNHExMSAxIDE2IDlsMSAzIDQgMXEtNiA4LTIzIDVsLTExLTZoLTJsLTQgMS0xLTFxMTEtMTIgNy0zOHptMTAxIDM5djI4bC00IDEtMi0yMCA2LTl6bS01IDMybDUgNS0xIDQtMyAyLTEgM3YtMTR6bS0xIDE2djEybC01IDEwLTEtMTEgNi0xMXptLTYgMzF2NDVoLTFxLTktMTEtNS0zNGw2LTExeiIgZmlsbD0iI2YzZTlhNSIgc3Ryb2tlPSIjZjNlOWE1Ii8+PHBhdGggZD0iTTQ3MiA5NmwxMyA2LTUgMXYxbC00LTEgMy0xLTctNnptMjUgMTFsNSAzIDQgOCAzIDJoLTdsLTUtMTAtNC0xIDQtMnptLTI4IDIybDQgMyAxIDMtMSAzaC03bDMtOXptNSAxMnY2bC02IDN2LTFsMi0zIDMtMS00LTEgNS0zem0zOCAxNWw0IDIgMSA0aC01bC0yLTQgMi0yem0wIDEybDQgMnY5bC01LTItMSAyLTMtNCAzLTEgMi02em0tMjcgMTJsNyA0djNsLTQtMi0xLTQtMSAzLTEtNHptLTI1IDEybDQgMS03IDV2MWwtMS0zIDQtNHptMjQgMGw0IDEtMyAxLTIgNC0yIDF2LTFsMy02em04IDIwcS0yIDE0IDUgMjBsLTExIDEwIDUtMTMtNS0zIDYtMTR6bS0xNyAzM2w1IDNoMWwxOSAyMmgtMmwtMTEtNSAyLTEtMTAtOC00LTExem03OCA1bDE3IDExLTIgMy0xMy02LTItOHptLTQ0MiA1NmwzIDItMSAxMC0zLTEtMi04IDMtM3ptLTEzIDQ4bDQgMi0xIDQtMyAyLTEgMy0xLTkgMi0yem0wIDE4bDQgMi0xIDQtNS0xIDItNXptMSAxMWw0IDMgNSA3IDE3IDEydjFsLTQgMnYybC0yLTgtNSAxdjJsLTUtMiA0LTEtNC0zLTIgMS04LTE3em01MyAyNWwzNCAxNiAxIDMtMSA0IDEyIDQgNCA4IDggMXYtMmwtMi00IDMxIDEyIDcgOXY4bC0zLTVoLTEwbDEtNC00LTJoLTJsLTYgMXYxbC00LTItMiA0IDIgMi04IDIgMSA0LTYgMy0yLTktNSAyIDEgMTBoLTJsLTUgMiAxIDQgMSAxLTIgMyAyIDItMiAxIDIgMyA0IDIgMS0yIDEwIDhoLTVsLTE0LTYtMjgtMjYtMi00LTIzLTIyLTEwLTIgNS0zIDEtNXE2IDEzIDI0IDE1bC0xIDQgNSAxaDIgNWwtNi0xMiA2LTExdjEybDEyIDE3IDEgMTItMSA1IDUgMSAxLTV2LTJxLTItOSA0LTExbDItMS0xLTUtNS0zcTItMTEtMy0xNGwtMTEtNiAyLTEtNS05LTYtMy0xIDItMS0zLTktNXptMTcgNTRsLTEgNCA2IDJ2LTRsLTUtMnptNTM5LTUwdjEwbC0yLTItNC0yIDMtNCAzLTJ6bS01MzEgMjZsMyAzLTIgMy00LTIgMy00em0xNDUgMThsOCAxIDEgNWgtMTN2LTFsNC01em0tMzEgNnExNy0zIDIzIDZsLTE5IDItMS0yLTUgNC0xIDIgMiAxLTExIDE3aC01bDItNS0zLTEtMyAydi0yaC0zbDEtMmgxbC01LTkgNy0xIDUgNCAyIDIgNC0xcS0yLTEzIDYtMTZsMy0xem0tMzggOWw1IDRxLTEgMTMgOCAxN2wtMiAxLTEtMi0xNy02IDEtNiA0IDEgMS00di0ybDEtM3ptMTEgMjVsMSAyIDEgMS05IDUgMy00IDMtMSAxLTN6bS00NyA2bDEgMyA5IDVoLTVsLTExLTUgNS0xIDEtMnptMTcgOGwxNyAxLTE3IDV2LTEtNXoiIGZpbGw9IiNkYjJmM2MiIHN0cm9rZT0iI2RiMmYzYyIvPjxwYXRoIGQ9Ik00ODIgOTZsMjIgOHExIDE0IDEyIDIwbC0xNSA4di0xbDE0LTctMi00LTktMy0yLTktMjAtMTJ6bS03IDM3bDUgMyAxIDItMSAyLTYtMiAxLTV6bS0xMCA1bDggMS01IDMtMSAyLTUtMiAzLTR6bTIyIDlsNSAxMC0xLTEtMy0xLTEtOHptMjcgM2wxMSA2IDMgNy01IDEwLTItMTctNy02em0tOSAyMGw4IDE1IDktOHY4bC0xNiAxLTEtMTZ6bS0xNiA5bDkgM3EtMyAxOSA2IDI2bC02IDkgNiAxMi0xNCAxNyAyLTMgNi0xMi02LTE1IDQtNiAyLTEtMS01LTExLTMgNi0xOC00LTIgMS0yem0tMjA3IDdxMTUgMSAyMSAxMmgtM3EtOS05LTI5LTZsMTEtNnptLTE4IDZsNSAxLTExIDYtMy0xIDktNnptNDggNmw2IDJ2OGwtNi0xMHptMjAwIDBsNCAyLTIgMTAtMyAxLTEtMTEgMi0yem0tMjY2IDEzdjZsLTUgMTAtMS01IDYtMTF6bTEyMiAxMWwyMSAxLTExIDUtMTAtNnptLTEyOCA5djZsLTEyIDYtNSA4LTEtMiA2LTEyIDEyLTZ6bTMwOCAxNWw3IDItMS0xLTIgMXY3bC02LTQgMi01em0tNTggNmwxNCA5LTEgMy0xMy0xMnptODAgMTF2MmwtMyA1LTMtMS0zLTQgOS0yem0tMzY2IDdsMiAxLTEwIDUgMi0zIDYtM3ptLTM0IDE3bC0xIDQtOSAzIDItMyA4LTR6bS01NiA0NnY0bC02IDEyIDYgOS02IDlxOCA5IDggMjdsMyAyaC00bC03LTMtNi0xMXYtOWw2LTEtMy02aC0zcS00LTI2IDEyLTMzem0yNSA1bDUgMTYtNSAxdi0xN3ptLTEgMjN2NmwtNSAxMC0xLTUgNi0xMXptLTE5IDY1bDcgMy0zIDE1LTIgMS0xLTEgNS05LTYtOXptNjI0IDEwbDEgMy0xMSAxNC00IDItMy00IDE3LTE1em0tMjggMTFsNSA0LTEgMy00IDF2LTh6bS01ODMgMTJ2N2wtMTEgMTktMS01IDEyLTIxem0xMDggMjFsNCAyIDIgMTEtMyA0LTMgMXYtMWwtMS01LTQgMWgtMmwtNSAzdjJsLTYtMiA3LTEwIDYtMSA0IDEgMS00di0yem0tMTIwIDEzdjZsLTMgNC0yMCA4LTEtMSA0LTZxMTQgMiAxOC03bDItNHptNTcyIDE3bDQgM3Y2bC02LTQgMi01em0tODQgMTJsMzQgMTVxMSAxMSA5IDE1bC0xMyA4LTEgMy0xLTUtOS01LTkgMTFoLTEybC02LTE1IDYtOCAyLTE5em0tNTA1IDJsNSAxMS00IDEwIDUgOC0xIDJxLTExLTktNS0zMXoiIGZpbGw9IiM4OTA0MmUiIHN0cm9rZT0iIzg5MDQyZSIvPjxwYXRoIGQ9Ik00NTAgOTd2NmwtNSAxMC0xLTUgNi0xMXptMyAyOWw0IDEtMSA0IDEgMS03LTIgMy00em0tMTQgMTdsNSA0LTEgMy0zIDItMSAzdi0xMnptMTEgOTl2N3EtMiA1LTEwIDN2LTFsOC01IDItNHptNTYgMjNsMTIgMTEtMiAxdjFsLTEtMi0xMCA1LTItMTEgMy01ek03MyAyNzV2M2gtMmwtMTAgMjEtMS01IDEwLTE4IDMtMXptNDAxIDFsNSAxLTIyIDExdjJsLTEtNCAxOC0xMHptMzkgNmwtMyA0LTEgOC01LTEgMi01IDItMSAyLTQgMy0xem01MSA0bDEgMiA1LTJ2MTBsLTItMmgtMTVsMTEtOHptLTk4IDJsOCAyLTEgNC05IDItMSAzLTEtNyA0LTR6bTEzMSAwbDMgMiAyIDQtNyAyLTEtNSAzLTN6bS05IDFsMSAxMCAxIDFoLTZsLTItNCA0LTMgMi00em0tNzIgNWw1IDEtMTUgNXYtMWwxMC01em0tNTAgNmwyIDEtMyA1aC0zbDQtNnptMTUwIDBsMTAgNmgtMmwtOC02em0tNTAgNmwzIDEtMiA1LTMtNCAyLTJ6bTE4IDBsNCAyLTMgMTAtMy0xMCAyLTJ6bS0xMTYgMXYzMGwtNSAxMC0xLTI5IDYtMTF6bTEzNiA2bDIgMS0xIDQtNCAxLTEtMyA0LTN6TTYxIDMyNWw1IDE2aC0xbC00LTE2em01MzUgNWwzIDEtMiA1LTMtNCAyLTJ6bTI1IDBsMyAyLTEgMTYtNS0zLTEtMy00IDEtMS0xIDktMTJ6bTE1IDExdjZsLTQgMS0yLTQgNi0zem0tMTgwIDE0djEybC0xMSAyOC0xLTExIDEyLTI5em0xOTQgNWw0IDItMiA0LTQtMiAyLTR6bS00NCAxM3Y2bC02IDExIDMgMS01IDExLTQtMi0xLTEwaC0xMGw1LTMgMS0yIDExIDQgNi0xNnptLTI3MCA1bDYgMy0xIDMtNS0xdi01em0yODkgMTdsNCAxaDFsLTIgNi00LTIgMS01em0tMjkzIDFsNCAyIDEgMTAtMSAyLTYtMTIgMi0yem0yMTcgMGwzIDMtMiA5LTQtMiAzLTEwem0zMSAwbDMgMS0xIDQgMSAxLTEwIDEgMy00IDQtM3ptLTI1OSA2bDMgMyAyIDMtNyAzLTEtNiAzLTN6bTM2NSA2bDQgMS0xIDUtNS0xIDItNXptLTM1NiA1bDEgN2gtNGwtMy00IDYtM3ptMjk2IDFsNCAzLTIgMy0zIDItMS0yaC0ybDQtNnptLTI3NyAybDUgMTQtMi0xLTMtMTN6bTIxMCAzbDQgMSAyIDEtMSA3LTUtOXptLTI0MCAybDUgMTVxLTMgNS02LTFsLTEtMy0xMCAyLTEtMiA0LTZoOGwxLTV6bTE5IDVsNCAydjVsLTYtMiAyLTV6bTMxNiAwbDYgMy0yIDMtMyAyLTEtMi01IDEtMS0zIDYtNHptLTEwNSAxbDEyIDExaC01bC0xMC01IDMtNnptMiAxNGwxIDQtMyA1aC01bDMtMSA0LTh6bS0yMzYgM2wzIDMtMiAzLTQtMiAzLTR6bTMzNCA3bDUgMTQtMTAgOS0zLTUgMy0xIDItMSAzLTE2em0tMTAxIDExbDQgMi0xIDQtNS0xIDItNXptLTU1IDRsMTEgNS01IDgtMS01LTQtMS0xLTd6bTE0MyAwbDEgMiAxIDEtMyA1LTUtMSAyLTUgNC0yem0xNCAxNGw0IDJxMiA4LTMgMTBoLTNsMi0xMnptLTE0MyA2bDMgMnY1bC00LTEtMiAxIDMtN3ptMTM1IDVsNiAxMS02IDItNS0zLTEtNSA2LTV6bS0xMzggMjBsMSA1IDEgMS04IDctMS0yIDEtNHYtMmw0LTEgMi00em0tMTEgMjJsNCAxaDFsLTEgNi01LTEgMS02eiIgZmlsbD0iI2I0ODQ5MyIgc3Ryb2tlPSIjYjQ4NDkzIi8+PHBhdGggZD0iTTQ1NCAxMDJxMTgtMyAyNSA2bC0yIDEgMyA1LTYgM3YzaC0xOGwtMS0xMi00IDEtMS0zIDQtNHptLTggMzBsNCAyLTEgNGgtNWwyLTZ6bS0xIDMwbDExIDQtMSA4LTExLTYgMS02em05IDg0bDcgNHExMCA4IDcgMjlsLTE1IDktNiAxMi0zIDIgMiA0IDE2LTIgMSAyIDEgMS0yIDE4LTYgMTF2MTNsLTkgMjMtOSAyIDIgMTAgNC0ydjNsLTEyIDMwIDYgMTItMyA1LTkgMiAzIDQgMyAxLTYgMTd2MTNsNiAxMC0xMiAzcTcgNCA2IDE3bC02IDEwIDMgMSAzLTV2MjBsLTYgOCA1IDRxLTggOC01IDI3aC02bC0xLTE4LTUgMnYxNmgtNjZ2LTU0bDYtMTFxLTMtMTQgNC0xOWwyLTEtMS01LTUtMyAxLTQgNCAxIDEtNDMtNi0xMXYtMTJxLTgtOC03LTI0bC01LTMtMS05LTUgMi0xIDM0LTUtMXYtMTFsLTYgMnE1IDE3LTMgMjJoLTNsLTItNi00IDItMyA5LTkgM3EtMSAxMi05IDE2aC0zbC01LTktMTMtNC0xMS0yNSAxMS0xNSAxIDJxMTItOSAxNy0yNmwxIDIgMTQtMTQgMzMtNDcgOC02IDEzLTctMi0xIDIzLTEyaDEzbDExLTZoMTNxNy04IDIzLTdsMi0zIDIwLTE0em0tNDQgMTgwbC0yIDExIDUgMSAxLTEwLTQtMnptMTM0LTEzMmwyIDEtMyA1aC0zbDQtNnptOSAwbDcgMS0yIDUtNC0xLTEtNXptLTQ3MSA2bDIgMS0xIDVoLTVsNC02em00OTggMGwyIDItNiAxNnYxM2wtMTQgMTYtNy01LTkgMTAgNSA2LTUgMTMgNCAxIDEwLTE4IDEwIDItNiAxMC0xIDE4LTE0LTYtMTUgMTYgNiAxMy0xMiAzIDYgMTZ2MTFoLTJsLTgtNi0zLTExLTExIDJxMiAxMyAxMSAyMC05IDExLTI3IDE0bC0yLTIgNy0xMCA1LTItMS00cS05IDItMTEtM3YtNDdsNC00IDItMS0xLTUtMy0xLTItMTYgNi0zLTUtNyAxMS0xMi0xMi05IDQtNiAyIDEgMiA1cTctOSAyNS02bDEzLTE4IDIgMXEyIDE2LTYgMjJsMTEgMSAyLTE4IDExLTZ2MTNsLTYgMTAgMTEgMSAxNy0zMHptLTQ0IDQybC0yIDUgNSAxIDEtNC00LTJ6bS02IDE4bC0yIDUgNSAxIDEtNC00LTJ6bS0yNCAxOGwtMiA1IDUgMSAxLTQtNC0yem0xOCAwbC0yIDUgMTEgMSAxLTQtMTAtMnptMCAxOGwtMiA1IDUgMSAxLTQtNC0yem0tMTggMTJsLTIgNSA1IDEgMS00LTQtMnptOTItMTA4bDIgMi0zIDEwaC0zbDQtMTJ6TTY4IDMxOGw0IDIgMiAxMCA5LTYgMSAxMS0xNCAxcS02LTQtNC0xNmwyLTJ6bTUyNCAwbDIgMS0xIDVoLTVsNC02em0xMiAxOGwyIDFxNSAyMS0zIDI5aC0zcS01LTIyIDQtMzB6bS0yMCA2bDEwIDJxLTExIDctMTMgMjJsLTUtMSA4LTIzem0tNCAzMGwyIDItMSAxNC0xMCAyLTEtNiAxMC0xMnptLTIwIDMwbDQgMS0xIDVoLTVsMi02em0tNDkgNjBsNSAzLTEgM2gtNWwxLTZ6IiBmaWxsPSIjZjFmNWUzIiBzdHJva2U9IiNmMWY1ZTMiLz48cGF0aCBkPSJNNDcwIDEwMmwxNCA2aC00bC0xMC02em0yMyAxNWw1IDUtNSA3LTEwIDMtOC01IDE3LTIgMS04em0xNCAyN2wzIDN2M2wtNi0yIDMtNHptLTI2IDRsNSA5LTEtMS00IDEtMS0yLTEtNCAyLTN6bS0xOCAxbDYgMi0xIDIgMyAzLTktMiAxLTV6bTcgMTlsNyAxLTcgNy0yLTEgMi03em0xMCAzcS0yIDEzIDUgMThsLTIgMy03LTEtNS0xMCA0LTIgNS04em0tMjQgMjFsMiAxLTggMTQtNi05aDJsNC0xIDItMyA0LTJ6bTI0IDNsMiA5IDEwIDMtNSA2LTEyIDctMSA3IDEgMS01LTEtMi0xN2gtM2wzLTUtMi0xLTUgNi01LTIgMS00IDIzLTl6bS02IDM5bDIgMS04IDV2LTNsNi0zem0tOCAxMmw2IDIgMiA5aC0xbC03LTExem0yMiAyNGwxMCA0djJsLTEwLTZ6bS00MDIgNmwyIDIgMiAzIDEtNCAyIDVoLTZsLTMtNCAyLTJ6bS04IDZsMSAxLTEgNWg1IDFsLTUgMTEtMS01aC05bDctMTEgMi0xem0tNiAxM2wxIDUgMiAxLTMgNSAzIDEtMTQgNy0xLThoMmwyLTEgMi00IDQtMiAyLTR6bTI0IDBsMSA1IDQgMS05IDUtMi0zIDYtOHptNiAzMXYxMWwtOSAxN2gtOGw1LTMgMSAyIDExLTI3em0yNTIgMTA4djVsLTUgOC0xLTMgNi0xMHptLTEwNiA0bDQgMi0xIDQtNS0xIDItNXoiIGZpbGw9IiNmMmFlOWIiIHN0cm9rZT0iI2YyYWU5YiIvPjxwYXRoIGQ9Ik00ODEgMTAybDEwIDZoLTRsLTctMyAxLTN6bS0xNiA5MGw5IDMtMiAzLTkgMy0xLTNoLTVsOC02em0tMjAxIDZsNDMgMS0xIDQgNiAxIDEtMiA5IDE0cTEwLTIgMTQgNGwxIDJoLTdsLTEzLTEwLTExLTItMTAgNi0zLTEyLTE3IDIgMTIgMjAtNiAxMyAxMiAzLTEgNC0xNy0xcS0yLTE1IDUtMjBsLTE3LTEwLTMtMTEtOSA0cTUgMjgtMTEgMzVsLTE3IDExLTMgMTAtOSAyLTUgMTBoLTdsOC02cTEtMTIgMTAtMTZsMTAtNSAxLTYgMTQtOHE2LTggMy0yNGw0LTcgMTQtNnptNDQgMjRsMTAgOS02IDktMSAxOC01LTEtNi0xNyA4LTE4em0xNjkgMGw1IDEtMiA0IDEgMS03LTIgMy00em0tOTAgMmwxMSAxMHEtOCA4LTI2IDZsLTktNS00LTggMi0xIDE5IDIgNy00em0xOSAxMGw4IDQgMSA4IDQgMS05IDUtNC0xOHptMTggMTJsOCA0IDEgMiA0IDEtOSA1LTQtMTJ6bTU3IDlsOCA5LTctMS0xLTh6bS0yOTUgMjV2M2wtNyA5LTYgMiAxMy0xNHptLTIzIDE0bDQgMS05IDctMiAxMS00LTItMi00IDctMTAgNi0zem0tMTUgMjRsNSAxLTkgMTd2N3ExMCAxMCA2IDM2LTcgNS02IDE5LTktNS02LTIwIDgtNyA2LTIydi0ybC02LTIzIDEwLTEzem0zNiAxMDJsOCAydjVsLTYtMS0yLTZ6bS01OCAyMGwxIDMtMSAyIDMgNWgtN2wtMi0zIDQtMyAyLTR6bTIxNCA0bDIgMSAxIDUgNSA0LTMgOC0zIDIgMiA0IDQgNC02IDE0djE5bC01IDgtNyAzLTktNS0zLTcgNS05LTUtNiA1LTYtNi0xNS01LTIgMS00IDIzLTF2LTVoLTRsNC0yIDQtMTB6bS0yMDcgMjVsNSAxMnEtOSA5LTcgMjlsLTEwIDQtMiA4LTExIDIgMTggMjh2MTJoLTVxLTktNy03LTI0bC01LTktMiAxcS02LTYtNS0xOGwyMS05cTYtOCAzLTI1bDQtNmgybDEtNXptNTcgMjNsMjUgMTJoLTVsLTIwLTEyem0xNDIgNDhsNCAyLTEgNC01LTEgMi01eiIgZmlsbD0iI2YzMmUyYSIgc3Ryb2tlPSIjZjMyZTJhIi8+PHBhdGggZD0iTTQ4OCAxMDJsMTIgNmgtMmwtMTAtNnptLTEgNDlsMyA1IDIgMi0xIDQtMyAyLTEgM3YtMTZ6bS0xIDE4bDIgMTFoLTVsLTMtMyA2LTh6bTAgMjRsMiA5IDEwIDQtMSA0LTMgMi0xIDMtMi0xMS0xMS0yIDItNCAyLTEgMi00em0tMjI2IDRsMyAyLTEyIDUgMi0zIDctNHptMTk4IDFsNCAxLTIgNS00LTIgMi00em0tMTM1IDExbDExIDdoLTRsLTExLTUgNC0yem0yNSA3bDEgMS0xIDItNiAzdi0xbDItMyA0LTJ6bTYgMGwyMyAxMmgtMTRsLTQtMi01LTEwem0tMTA4IDF2MTJsLTYgOXYtMXEtMi0xNSA2LTIwem0xNDQgNWwxIDFoLTF2LTF6bTExIDVsOSA3aC0ybC05LTUgMi0yem0xNCAxMXExMCAwIDE0IDhoLTE0di04em0xNSAybDggNC0zIDhoLTNsLTItMTJ6bS0yMDIgNHY1bC0xNyAxMi0xLTYgMTItNSAxIDEgNS03em0zMjUgM2wxMyAxMWgtMmwtMTItOCAxLTN6bS0zNzIgMzVsMiAxLTExIDExaC04di0xbDctNHYtMmwxMC01em0tMzAgMjVsMyA1IDIgMi0yIDRoLTZsMy0xMXptLTQ5IDM2djEybC0xLTEtNCAxLTEtMSA2LTExem0zOCAxMWw0IDJ2MTFxLTggNi02IDIybC02LTExcTgtOCA4LTI0em0tMzggNXYybC01IDgtMS0zIDQtNiAyLTF6bTAgMTh2N2gtMmwtNC01IDYtMnptMzcgMTRsNSA3IDEgMSA1IDktMS0xLTgtNC0yLTEyem0yNCAyM2w4IDYgMyA2aC01bC02LTEyem0tMzYgMTJsNSA0LTEgNi00IDIgMSAzLTIgMS0xLTIgMi0xNHptMzYgMTVsNSA5aC01di05em0tNDIgOGw4IDIgMyA2LTEtMS0xMS0yIDEtNXptMTAyIDdsNSAxdjVsLTYtMyAxLTN6bS05MSAxMHY4bC00IDItMiAyMy01IDgtMTkgN3Y2bC0yLTQtNC0yIDItNCAyMS05cS0xLTI1IDEzLTM1em00OSAybDUgMS0xIDUtNS0xIDEtNXptMTMgNmw0IDItMSA0aC01bDItNnptNTMgMGw1IDItMSA0LTUtMSAxLTV6bS01NCAxMmw1IDN2M2wtNi0zIDEtM3ptNjYgM2w0IDMgMSA0LTEgMy00IDJ2LTEyem0tNTMgOWwxMCA0djJsLTEwLTZ6bTIzIDEybDUgMi0xIDQtNS0yIDEtNHptLTEyMCAyMWw1IDlxLTIgMTcgNiAyNGgtNWwtMTEtMjIgNC04IDEtM3ptNTE4IDIybDkgNnY1aC0xOGw5LTExeiIgZmlsbD0iI2Q4MDgyOCIgc3Ryb2tlPSIjZDgwODI4Ii8+PHBhdGggZD0iTTQ1MCAxMDN2MTJsLTUgMTAtMS0xMSA2LTExem04IDI5bDkgMi0yIDQtMiAxLTItNS0zLTJ6bTE5IDBsMTQgMS01IDMtMSAyLTUtMnYtMmwtMy0yem0tMjYgMTFsNCAxaDFsLTIgNi00LTIgMS01em0tMTIgNDVsNSAxNWgtMWwtNC0xNXptNiAxN2w1IDE2aC0xbC00LTE2em02IDE4bDUgMTItNSA5di0yMXptMjMgMTRsMSA0LTEgNnYyIDJsLTMtNS0zLTEgMi0zIDMtMS00LTEgNS0zem03IDJsNCAxaDFsLTIgNS00LTItMS0yIDItMnpNOTMgMjY0bDMgMy0yIDMtMyAxLTEtNCAzLTN6bS0yIDExbDMgMyAzIDYtNC0xLTItNi0xIDQtMy00IDQtMnptLTExIDdsNCAzLTEgM2gtNWwyLTZ6bTIzIDEwbDUgNC0xIDQtMyAyLTEgM3YtMTN6bTUgMjZsNiAxLTUgMTAtMS0yLTUgOC0xLTExaDJsNC0xdi01em0tNDEgMjBsNSAxNGgtMWwtNC0xNHptMjkgMTF2OGwtOSAzIDEtMiA2LTUgMi00em0tMTcgOGw1IDYgMS0yIDMgNSA1IDEtMyAxMS00LTEtNy0yMHptMTMgMjhsNiA1LTIgMXYzbC00LTl6bTExIDlsNCA3aC0xbC02LTQgMi0xIDEtMnptMTIgOGw1IDMtMSAzLTUtMSAxLTV6bTE4NSA0NnY4bC0xMSAyLTEtMmgtNWwxNy04em0tMzYgMTFsMSAzaDVsMS0zIDUgMyAxLTIgNSAzLTEgMy0xMSAzdjJxLTYtNi0yMC0zbC00LTMgMS01IDYgNyAxMC00LTItMSAzLTN6bTM5MiA1N2w0IDJ2NGwtNi0xIDItNXptMzAgMThsNCAyLTEgNC01LTEgMi01eiIgZmlsbD0iI2RkOGY2NSIgc3Ryb2tlPSIjZGQ4ZjY1Ii8+PHBhdGggZD0iTTQ4MiAxMDhoN2wxNCAxNS0yIDMgMSAxLTE0IDV2LTFsMTAtNy0xLTQtNC0zLTEgMi01LTgtNS0zem0tNiAzN2w0IDN2MmwtNSAxLTUtMSA0LTIgMi0zem0tMTMgOWwxMSA2djJoLTIxbC0zLTIgMy00aDlsMS0yem0xOSAybDQgMi01IDE0LTQgMi0zIDYtNC0xLTEtMnExMC03IDEzLTIxem0tMSAyM2wyIDIgMyA3LTQtMy0xLTZ6bS02IDhsMyA1IDQgMS0xIDMtNCAyaC00bDEtNHYtMmwxLTV6bS0xOSA5bDEgOC0xIDQgMiAyLTgtMyA2LTExem0xMCA4bDIgMS0zIDVoLTRsNS02em0yNiA0djJsLTUgMTAtMi0xLTEwIDQtMS0xIDQtNSAxNC05em0tNDEgM2w1IDE2aC0xbC00LTE2em0tMTAwIDVsMyAzdjNoLTZsMy02em0xMjkgMTJsNCAyIDIgOS00IDEtMy02IDEtNHYtMnptLTIzIDFsNSA4IDExIDQtNSAzIDEgMmgtM2wtMTItNi0yIDEgNS0xMnptMTggMTlsMTEgMTkgNSAzaC04bC00LTFxLTctNy00LTIxek05NyAyOTFsNSA1LTEgMi00IDJ2LTl6bS0yNyAzbDUgMS0yIDQtMS00LTMgNWgtM2w0LTZ6bTggNHYzbC0zIDVoLTNsNi04em0yNCAzdjI1aC0xdi0ybC0zLTEtMi0xMSA2LTExem0tMjAgNTNsMTAgMS02IDUtNC02em0xMzkgODRsOCAxLTEgMiA1IDNoLTVsLTctNnptMjYgNWw0IDFoMWwyIDZxMTgtMyAyNiA1bDgtNyAxIDIgNCAxLTE3IDZ2NWwtOS02LTUgNiAxIDEtMTAgNC04LTIxLTQtMSA2LTJ6bS04MyAzMXExMC0yIDEyIDZoLTJsLTEwLTZ6bTE4NCA4djVsLTUgMTAtMS00IDYtMTF6bS05MCAyOGwzIDEtMTMgNXYtMWwxMC01eiIgZmlsbD0iI2YyYWU2NSIgc3Ryb2tlPSIjZjJhZTY1Ii8+PHBhdGggZD0iTTQ5MCAxMDhsOCA0IDQgOCA4IDMtOCAzIDEtMi0xMy0xNnptLTYgMTIwbDcgMS00IDEwLTMtMTF6bS02IDZsMiAxdjVoLTZsNC02em02IDMwbDEzIDZoLTVsLTgtNnpNNzYgMjk0bDIgMS0yIDVoLTRsNC02em0zMiA1djJsLTUgMTAtMS01IDQtNiAyLTF6bS01IDE3bDUgNC0xIDQtNS0xIDEtN3ptLTcgNDF2NGwtMyA1LTctMS0xLTQtMSAyLTItM3ExMSAzIDE0LTN6bTEgMzNsNSA0djJsLTYtMyAxLTN6bTQ4IDFsOCAxMSAzMiAxOGgtNWwtMzQtMTktMS0xMHptNDggMzJsMTYgNSAxMiAxMCAzIDQgMyAyaC01cS01LTctMTgtNmwtMTAtNy0xLTh6bS01OSAxNWwyNCAyNGgtNWwtNS02LTE2LTE0IDItNHptOTYgNnExMi0yIDE2IDRsNiAxNy02LTUtMy0xMC0xMy02em0zNyAxMmwzIDN2M2gtNmwzLTZ6bTEwIDBsMTEgMXExIDEyLTcgMTVsLTUgMi02LTMgMS0zIDExLTN2LTNsLTYtMiAxLTR6bTU1IDBsNCAxLTEgNS01LTEgMi01em0tMTY5IDEwbDcgOC04LTMgMS01em0xNDMgMmw1IDEtNDAgMjl2MmwtMS00IDEyLTcgNC05IDIwLTEyem0tNDIgMzZsMiAxLTI0IDExdi0xbDIyLTExem0tNDMgNWw3IDUgMSAyaC0xbC05LTUgMi0yeiIgZmlsbD0iI2UzOGMzYSIgc3Ryb2tlPSIjZTM4YzNhIi8+PHBhdGggZD0iTTQ1MCAxMTV2NmwtNSA4LTEtMyA2LTExem0yMCAxMWwxMiA2aC0ybC0xMC02em0tMTYgNmw4IDR2OWwtNC0xLTIgMXYtN2gtM2wyLTMtMS0zem0tMTAgMTd2MmwtNSA3LTEtMiA0LTYgMi0xem0xIDUwbDUgOCA1IDMtNSAxdjRsLTUtMTZ6bTYgMThsNSAxNmgtMWwtNC0xNnptMzAgNTFsMTcgOHYtMmwtNS0zIDExLTF2MTJoLTNxLTMtNy0xNC02bC0xIDMtNy0zIDItOHpNODkgMjgybDcgM2gxbDUgMTAtMS0xLTQtMy0xIDItNy0xMXptNDc5IDBsMiAxLTMgNWgtM2w0LTZ6TTY5IDI5NGwtMyA0IDEgMiAxIDEtMyAxLTIgNC0zLTEgNi0xMCAzLTF6bTMzIDN2NGwtNSAxMC0xLTVoLTJsNy01LTQtMSA1LTN6bTM2NCA5bDIgMS01IDEwLTEtNyA0LTR6TTczIDM0NmwxMCA4LTIgMSA0IDVoLTNsLTQtMnYxbC01LTEzem0zODMgM3Y2bC01IDEwLTEtNSA2LTExem0tMTY4IDg5djlsLTYgNSAyLTEyIDQtMnoiIGZpbGw9IiNlMWJkODciIHN0cm9rZT0iI2UxYmQ4NyIvPjxnIGZpbGw9IiNkOGNjYmQiIHN0cm9rZT0iI2Q4Y2NiZCI+PHBhdGggZD0iTTQ1MCAxMjFsMSA2LTEgNCA1IDQtMiAzLTMgMnY3bC01LTNoLTJsLTUtMiAzLTRoMWwyLTQgMSA0IDUtMS0xLTUtNCAxLTEtMyA2LTl6bTAgMTI4bC01IDYtMTAgM3YtMWwxNS04em0zNyAyN3ExMyAwIDE3IDEwdjhoLTNsLTQtMTItMTEtMyAxLTN6bTI3IDB2M2wtMSAzaC0zbDQtNnptLTU3IDhsLTEgMi02IDE5IDEgMS03LTEgMi01IDItMSA5LTE1em0tMzkxIDZsMSA0IDEgMS0zIDEtNCA2LTEtMSA2LTExem00NjggM2wtMSAyLTIgNS0zLTMgNi00em0yNyAxbDkgNCAyIDIgMTAtNnY3bC0xLTEtMyAyLTE1IDI4LTExLTFxOC02IDYtMjJsLTItMS03IDZxNi00IDQtMTdsMyA1aDJsMy02em00IDZsLTEgMTEgNCAxIDItNC0yLTYtMy0yem0tMTktNWwyIDE3LTIgMXEyIDktMyAxMWwtMyAyIDEgNGgtNWwtMi0zcTktNSA2LTIwbC0yLTEtMTMgMTgtMy01IDQtMSAxNC0yMiAxIDQgMy0xIDItNHptNTEgMGw5IDggMTggN3YycS0xNiAzLTIwLTYtNiA0LTQgMTdsNSAxIDUtNiAyIDEgNiAxNC0xMSAyNS0xLTIyLTQgMi0yIDI4aDNsMy01djhxLTggNi03IDIwbC0xMS01LTYgNHYtMWwtMS0xNS05IDgtMTEgMjItMyAyIDEgNCA1LTEgNC01IDIgMXEyIDktMyAxMS0xMS0yLTE0IDRsLTEgMyA2IDExaC0ybC03LTR2LTJsLTggNC0xIDgtMTIgMS02IDggMTIgNHEyIDktMyAxMWwtOS0zLTMtOS05IDQgMyA4LTMgMSAxIDUgNS0xdjEwbC02IDktNiAycTUgMTctMyAyMmwtOS0zdi04bDEwLTI1IDItMS0xLTVxLTkgMi0xMS0zbDEtMTAgNiAxIDIyLTE0cS05LTctMTEtMjBsMTEtMiA5IDE2IDQgMXYtMTFsLTYtMTYgMTItMy02LTE0IDE2LTE1IDEzIDYgMS0xOCA2LTEwLTEwLTItMTAgMTgtNC0xIDUtMTQtNS02IDEwLTkgNiA1IDE1LTE5IDUgMnYtM2wtNC0zLTIgMSA2LTE4IDIgMTFoMmwyLTE0LTUtMyAxNC02em0xIDVsLTQgMTJoM2wzLTEwLTItMnptLTYgMThsLTQgNmg1bDEtNS0yLTF6bTUgN2wtMyAxMCA0IDEgMi00LTItNi0xLTF6bS0xMyAxN2wtOCAyMyA1IDFxMi0xNSAxMy0yMmwtMTAtMnptLTM2IDU0bC0yIDExIDUgMSAxLTEwLTQtMnptLTQ2LTk2bDMgMS0xIDQgNCAxIDktNiA1IDQtMyA4LTMgMiAyIDEwcS0xMy0xLTE4IDZsLTItMiA2LTEwLTMtNi05IDhxLTEtMTQgNi0xOWwxIDIgMy0zem0tNDEgMWwxIDEtMiA0aC01bDItMyA0LTJ6TTY0IDMxMmw1IDEtMyAzdjE4cS03LTUtNi0xOGw0LTR6bTU2NyAwbDIgMSAyIDRoLTNsLTEtNXptLTMgMTJsOCA0djJsLTYgMS0zIDExLTMtMXEtMy0xNCA0LTE3em0tMTY2IDF2NmwtNSAxMC0xLTUgNi0xMXptMzAgM2wxIDIgMTEgOS0xMSAxMyA1IDYtNiAzdjRxLTExLTgtNi0zMWw2LTZ6bTE0NSA4bDUgNC0xIDItMyAyLTEgM3YtMTF6bS0xMDEgNmw0IDItMSA0LTUtMSAyLTV6bTkyIDZsOCAxLTEgMTctNS0xLTEtMTFoLTVsNC02em0tOTggMTJsNCAyLTEgNC01LTEgMi01em0tMTk4IDZsNCAyIDMgMTAtOCAxLTEtMTEgMi0yem0xMTggM3YzbC01IDEwLTUgMi0yLTEwIDEyLTV6bTQzIDRsMyA1IDIgMi0xIDQtNCAzdi0xNHptMTMgNWw0IDItMSA0LTUtMSAyLTV6bTE4IDBsMTAgMi0xIDQtMTEtMSAyLTV6Ii8+PHBhdGggZD0iTTU3OCAzODlsMiAyLTkgNS0xLTIgOC01em0tMjU4IDFsNCAxIDIgMTEgNC0xIDYgMTctMyAyLTQtMTItNS0zLTEtMy00IDEtMS0xMSAyLTJ6bTIzIDFsNSAxNmgtMWwtNC0xNnptMTAxIDB2NnEtOSA3LTYgMjZsLTYtOSAxMi0yM3ptODAgNWw0IDItMSA0LTUtMSAyLTV6bS0yMTYgMTJsNCAzIDEgMyA1LTN2NHEtMTMgOS0xNSAyOWwtMTQgNi0xLTIgNi05LTMtMS0zIDJ2LTJoLTNxOS02IDExLTE4bDktMyAzLTl6bTM2IDBsNCAyIDEgNS0xIDMtMi00LTQtMiAyLTR6bTE2MiAwbDQgMi0xIDQtNS0xIDItNXptMTE1IDEybDMgMS0zIDUtMy0zIDMtM3ptLTIxMSA2bDQgMi0xIDEwLTUtMSAyLTExem0yOCAxdjExbC02IDExdjI4cS05LTUtNi0yMWw2LTE3LTYtMyAyLTQgOC0xIDItNHptNTUgOGwxMSA1LTIgNC00IDEtNSA4di0xOHptNTMgOXYzcS0yIDUtMTAgM3YtMWwxMC01em0tMTE0IDM1djE2bC05IDE1LTMtMXE3LTUgNi0xN2wtNi0xMCAxMi0zem03OSA4bDMgNSAyLTF2NDFsLTQgMi0xLTQ3em0tMTUgMzVsMiAxLTIgMTEtNC0yIDQtMTB6bS03MCAzdjI0bC01IDgtMS0xMSA1LTktNS00IDYtOHptLTE2IDIxbDQgMnYxNmgtNmwyLTE4eiIvPjwvZz48cGF0aCBkPSJNNDU4IDE0NGw0IDJ2N2wtNy0zIDMtNnptLTE5IDMzbDExIDVxNCAxMy0yIDE2bC0zLTItMiAxLTItNCAzLTFxLTgtNC01LTE1em0xMiAzM2w1IDN2OGwtNS0xMXptMjEgMThsOCAyLTEgNGgtOGwyLTMtMS0zem0tNTIgMzBsNiAzIDEgMy0zNSA2di0xbDQtMiAxLTQgMTIgMSAxMS02em01NSAxbDUgMTQtMy0zaC0zbDEtMTF6bS05NyAxMWw1IDFxLTMgNy0xNSA1di0xbDEwLTV6bS0xMzYgNDJsNCAydjI0bC03LThoMWwyLTE4em0tMTQ1IDdsMyA1IDEgMS0yIDVoLTNsMS0xMXptNjUgMTJ2NmwtMyA0LTQgMSA0LTUgMy02em0tMTEgMTRsNSA4IDEtMiAyIDMtMyAxLTQtMi0xLTh6bTg5IDEydjRsLTUgMTAtMS01IDYtOXptLTg0IDJsNCAxMyAyIDItMSA0LTQgM3ExLTEzLTYtMTdsMy00IDItMXptMTIwIDRsMSAzIDEgMS0xIDMtMS0zLTIzIDMzLTEtNGgtMTRsNS02IDMgMyAyIDIgMTYtMTN2LTRsLTYtMiA2LTUgMSAxIDExLTl6bS00MiAxOHYxMmwtMy0zLTMtMSAyLTUgNC0zem0tNzYgM2w0IDJ2NmwtNi00IDItNHptLTcgMTJsMyAyIDIgMyAxLTIgMiAzLTktMyAxLTN6bTEwMSAyNXY2bC02IDE3LTI0LTggMS03cTMgNyAxOCAzbDgtNSAzLTZ6bS00NiA1cTgtMiAxMCA0djRsLTEwLTh6bTQ3IDEycTcgOSAyNiA2bDMtMi0yIDEzLTktNS0xOS0xIDEtMTF6bS05MyAzNmwxMyA2aC01bC04LTZ6bTE0MCA0djZsLTcgMiA3LTh6bS0yNCAyM3Y2bC01IDN2LTFsNS04em0tMTIgNnY0bC0zIDQtNyAxdi0xbDctNC0yLTEgNS0zem00MyAzbDUgMi0xIDRoLTVsMS02em0zMCA0M2w1IDExaC01di0xMXoiIGZpbGw9IiNmM2UyNjciIHN0cm9rZT0iI2YzZTI2NyIvPjxwYXRoIGQ9Ik0yNzEgMTkycTE5LTMgMjcgNmgtMzd2LTFsMTAtNXptNDggMTZsMyAyLTMgMSAxMCA1aC03bC0zLTh6bTEzIDhsMTUgMS01IDMtMSAyLTUtMS0xLTMtMy0yem01NyA3bDExIDUgMiAzIDUgM2gtOGwtMTAtMTF6bTM2IDE3bDcgNHY1bC01LTIgMi0xLTQtNnoiIGZpbGw9IiNmMjA3MjkiIHN0cm9rZT0iI2YyMDcyOSIvPjxnIGZpbGw9IiNmNGE2MjgiIHN0cm9rZT0iI2Y0YTYyOCI+PHBhdGggZD0iTTMwOCAxOThsNCAzdjNsLTYtMSAyLTV6Ii8+PHBhdGggZD0iTTI1OCAyMDRsNCAyIDQgMTBxMTEgMCAxNSA5LTcgNS01IDIwbDE3IDEgMS00LTEyLTMgNi0xNC0xMi0xOSAxNy0yIDMgMTJxNC03IDE3LTZsMTcgMTJoMTRsNC0yIDEgMmg1bDEtMiAxMSAxNyA1IDNoLTExbC05LTUtOCA1LTI1IDJxMiAxMS0zIDE1bC0zIDF2LTFxLTMtMjAgNi0yNmwtMTAtOS04IDE5IDcgMTctMiA2LTUtMS0xLTE3LTE3IDEyLTktNS05LTE2IDYtOC0xMC0xLTMgMTItOSAyLTE4IDE4LTUgOS0xMSAxLTkgOS0yNSAxMy0yIDhxLTE3LTItMjEgOGwtMS0yIDgtMTBxMTQgMCAyMC05bDMtOHE2LTUgMjAtM2wzLTMgNC05IDgtMXEwLTExIDgtMTVsMTktMTMgMy02IDItMjMgNC0yem0xMzggMzBxMTAtMiAxMiA0bDIgMTQgMTMtNiA0IDEyLTE4IDZoLTExbC0xLTIgNS04LTYtMnEtOCA5LTI4IDZsLTItNCAxMi0zLTMtMTBxMTQgMCAyMS03em0tMjQwIDgzbDEgNyAzIDIgMiA1LTkgMTEtMyAxIDQgMTEgMiAyLTEgNC0zIDItMSA0IDMgMiA0IDIyIDEzIDEyIDcgMTJoMmwyLTQgMTUtOCAxIDQtNSA2IDYgMTRoLTNsLTUtNi0zNy0xNyA4LTEtMS00LTEwLTItMSAyLTYtOHExMC0xMSA2LTM2LTctNS02LTE4bDEwLTE4IDItMXptODAgMTNsMzEgMzAgMSA1LTMgNC03IDYgMiAzIDQgMS0xMyAxNS0yIDEtNC01LTUgMi0zIDQtMy0xdi0yM3E5LTkgNi0zMGwtNi0xMCAyLTJ6TTEzMCA0MzhsMyAxLTEgMyAxNCAxNC04IDFxLTIgMTYgNiAyNGwtNiAxNiA3IDEgMTgtMTIgMTAgNiAxLTYtMy01IDYtMXExNSAyMSA0MyAzMGwyIDNxOSA3IDI5IDRsLTM1IDExLTE4LTctMS0yMS0xNS0yLTggMzEgNiA5LTUgNiA1IDktNiAxMWgtNDh2LTEybC0xOC0yOCAxMi0zIDQtMTAgOC0ycS0zLTIxIDYtMjktOC04LTYtMjVsLTYtMTAgNC03em0xMDAgMGwxNSA2aC0xMWwtNi0zIDItM3ptLTc5IDIybDExIDYgMiA2IDMgMmgtNWwtOS01LTItOXptMTYxIDhsNiAyIDUgMTQtNSA2IDUgNi01IDkgNiA4IDcgMyA4LTUgMy02djExcS04IDctNiAyNWwtNC0xLTIgNSA1IDFoMXYxOGgtMzZsMTItMjNxLTQtMTggNC0yNWgybC02LTExdi0zN3ptLTE4IDEybDIgMS0yNSAyMCAxLTQgMjItMTd6bS01MiA2MGw0IDItMSA0LTUtMSAyLTV6bTMwIDE4bDQgMnY0aC02bDItNnoiLz48L2c+PGcgZmlsbD0iI2Y0ZTYyYyIgc3Ryb2tlPSIjZjRlNjJjIj48cGF0aCBkPSJNMjYwIDIyOGwxMCAxLTYgOSAxMiAxNyA3IDMgMTYtMTIgMyAxOCA0LTEgMS01IDEwLTMgMy0xNXEyMiA0IDMyLTVsOCA1cTE0LTQgMTggNGwtMSA4LTExIDIgMiA0aDE3bDE2LTYgMSAzLTcgMTMtMTcgMi0xNCA2IDItM3YtM3EtMTMtMy0xNyA0bC0yIDEyLTQgMiA0IDEtNCAyLTEtM2gtNmwtNi04IDIyLTE3IDItNS0zLTUtMTUtNy0xMCA4LTUgMTUtMjEgMS0xMi02LTEyIDYtOS01LTYtMTgtOS0xLTE2IDE0LTcgMTMtMTMgN3YyaC0xMmwtMjUgMTggMS0yIDQtMTBxMTktNCAzMC0xOCAxMCAyIDEzLTNsMjEtMjUgMTAtMyAyLTExem0tOTIgNzJsMyAxLTEwIDUgMy00IDQtMnptNDggMGwyNSA2IDIxIDExcTMtNiAxNS01bDQgNCAxIDMtMTggMjQgMTAgMTcgMiAxLTcgOS00IDItMS0yIDQtOC0yMi0yMy0xLTI3LTUgMnYxNmwtNiAycTkgNiA2IDI1bC02IDlxNCAxNC0zIDE4bC0yIDEtMS0zNy02LTkgNi0zLTItMTAtMTYtMjAgNC01IDItMXptLTU3IDZsLTIgMyAxNyAzN3EtMSAxMC0xNCA4bC00LTJ2MWwtNi0xMCAxMS00IDEtOS0zLTZoLTNxLTQtMTQgMy0xOHptLTIgNTdsOCA5IDcgMTcgMTQgN3ExMy0zIDE3IDQtMiAyNCAxNSAzMGwzIDItNCAxIDcgNWgtMmwtNi0zLTMtOS0xNS0xLTUtMTQgNS03LTMtMi0xNSAxMHYybC02LTNxLTItMTMtMTItMThsLTEtOS00IDEtMS0zIDYtNS0xLTUtMy0xLTEtOHptNDUgOWwyIDEtMiAxMGgtMmwtMi01IDQtNnptMjcgMTdsNSA1IDIgMiAxNiAxdjhsLTUtMy00IDExLTMgMS05LTVxLTUtNy0yLTIwem0tNzUgN2w4IDR2MmwtNS0zLTEgMi0yLTV6bS0xNSA2MHE5LTIgMTEgNGw2IDExIDUgMy0yIDEgMTMgNyAyIDktMiAxLTEwLTYtMTMgMTAtOSAyLTItNiA2LTEycS05LTgtNS0yNHoiLz48cGF0aCBkPSJNMzEwIDQ2OWwyIDF2MzVsNiAxMS00IDItMiAyMy0xMiAyM2gtMjRsLTEtNi01IDJ2NGgtNTRsLTMtMTEtOC00LTE1LTI2LTIgMS0yIDVxMTEgNyAxMiAyNGwtNiAxMWgtMThsNi0xMi01LTkgNS02cS03LTQtNi0xNSA4LTggOC0yNCAxMi0yIDE2IDRsMiAyMCAxNyA2IDExLTZoMTNsMjItOSAxMS0xNSA0LTF2MmwtOCAxMWgzbDMtMi0xNyAzMCAzMyAxOSAyLTUtNi05IDExLTEyLTUtOSA0LTUgNy0zcS04LTktNS0yOGgtMnExLTEyIDEwLTE2bDItMXptLTMgNDFsLTEgNmg1bDEtNC01LTJ6bS02NSAzMGwtMiA1IDUgMSAxLTQtNC0yeiIvPjwvZz48cGF0aCBkPSJNMjUyIDI0NmwxMSA0IDcgMTcgNyAzIDEyLTZxOCA5IDMwIDZsNC0zcTAtMTQgOS0xOWw1LTIgMTYgMTAgMSAzLTEzIDE1LTExIDYgNyA4IDUgMS0xIDMtMTAgNi0xMiAxOC0xOSAxMC0yIDE1LTE1IDE4LTUgMy0xIDMtMS01LTQtMS04LTE3IDE4LTI0LTMtNS05LTEtOSA1LTIwLTExLTI1LTYtNSA0LTEgMyAxNiAxOSAyIDEwLTYgMyA2IDl2NTVsNiA4IDcgMyA0LTMgMi05IDUgNHEzIDE5LTcgMjRsLTkgMi00LTEwLTE5LTIwLTMgMiA2IDgtNSA2IDExIDE3LTEtMS00LTEgNC0xLTE1LTEzLTItMTctMy01cS0yMyAxLTMyLTEwLTEtMTgtMTMtMjRsNS02LTEtM3ExMyAyIDE0LThsLTE3LTM3IDE1LTkgMTUtM3E1LTEyIDIwLTE1bC0zIDQgMiA4IDE2LTEtNy05LTQtMSA1LTEgMi00IDEzLTdxNS0xNSAxNy0yM2w0LTJ6bS03NiA2NmwtMiA1IDUgMSAxLTQtNC0yem0xMyA0OWwtOSAxMSAyIDZxMTEgMCAxNS04bC0xLTItNy03em0xMyAxMWwtNCA2IDIgNWgybDItMTAtMi0xem0xNTItMTAybDEyIDEtMyA1LTE0IDktMS05IDQtNSAyLTF6bS02MiAyMTZsOCAxcS0zIDE5IDUgMjdsLTEwIDYtMSAzIDUgOS0xMSAxMiA2IDktMiA0LTMzLTE5cTctMjQgMjMtMzlsLTItMS00IDMgMy00IDEzLTExem0tMjYgNDhsLTIgNSAxMSAxIDEtNC0xMC0yem0tNzctMTFsNyA3IDEyIDIxIDcgNSAxIDhoLTIzdi0xbDUtMTctMTItMTggMy01eiIgZmlsbD0iI2Y0ZjcyYyIgc3Ryb2tlPSIjZjRmNzJjIi8+PHBhdGggZD0iTTM4NCAyNzBsNSAxLTEyIDUgMy00IDQtMnptLTI0IDZsMTEgMS0yNyAxMXYtMWwxNi0xMXptLTE1MiA2bDE0IDEwLTEgMi0xNy0xcS0yLTkgNC0xMXptMTI4IDEybDUgMS0xMCA3di0zbDMtNCAyLTF6bS0xNjAgMThsNCAyLTEgNC01LTEgMi01em0xNDIgNGwxIDEtMTggMjQtMS0xNSAxOC0xMHptLTE2MSAzOGw0IDMtNCA1di04em0xMjUgNHYzbC0zIDVoLTNsNi04em0tOTMgM2w3IDcgMSAycS00IDgtMTUgOGwtMi02IDktMTF6bTIzIDQxbDIwIDIwIDMgMTBoLTlsLTQtMnYxbC0xMS0xMyA1LTctNi03IDItMnptNjggOTZsMiAxLTUgNy0xLTQgNC00em0tMTQgMzZsMTAgMi0xIDQtMTEtMSAyLTV6IiBmaWxsPSIjZjRmOTZiIiBzdHJva2U9IiNmNGY5NmIiLz48ZyBmaWxsPSIjNTk4NDkzIiBzdHJva2U9IiM1OTg0OTMiPjxwYXRoIGQ9Ik01MTcgMjc2bDUgMi0xIDRoLThsNC02em0tMjkgNmwxMCAzIDQgOSAyIDItMSA0aC04bDMtNi01LTktNS0zem0xMDAgMGw2IDMtMSAzLTMgMi0xIDMtMS0xMXptLTYgNHYzbC01IDctMS0yIDYtOHptMTggMmw1IDQgMSA1LTYtNXYtNHptLTUyIDZsNCAydjVsLTQtMS0yIDEgMi03em02NyAwbDMgMiAyIDIgMTQgMTAgMiAxOC0yLTItMTYtMSAyLTVoMTVsLTYtMTAtNC0xLTItNS0xMi0yIDQtNnptLTkyIDNsNSA3LTMgMiAyLTMtNC02em0tMzEgMTZ2NmwtNSAxMC0xLTUgNi0xMXptMTE0IDR2NWwtMyAyLTMtNCA2LTN6bTI2IDE5bDQgMi0xIDQtNCAxLTEtNSAyLTJ6bS0xOCA2bDQgMiAzIDQtMyAxLTQtMS0yIDEgMi03em0xMiAxMmw0IDN2NGwtNC0xLTIgMTMtNS0xLTEgNSAxIDEtNS0xLTItNSA2LTExIDEgNSAzLTEgNC0xMXptLTEzOSAxM2w1IDE2aC0xbC00LTE2em0tMTU0IDExbDMgMiAxIDRoLTVsLTItMyAzLTN6bTI3MyAxdjhsLTUgM3YtMWw1LTEwem0yNCAwbDEgNSA1LTN2NGwtNSAxMC0xLTUtNSAxLTEtMSA2LTExem0xNSA1bDMgMy0yIDktNC0yIDMtMTB6bS0zMTIgNmw3IDIgMiA2LTItMi00IDEtNC0xLTIgMSAzLTd6bTI0OSAwbDcgMS0yIDEtMiA0LTggMy0xLTUgNi00em0wIDEybDQgMiAyIDRoLTJsLTQtNnptMzMgMGwzIDMtMiAzLTQtMiAzLTR6bS0xMjMgMXY2bC0zIDUtMiAxLTEtMSA2LTExem0tMTUwIDRsMSA3LTYgMy0xLTggNi0yem0tMTggMWw2IDMtMSAzLTQgMS00LTEtMyAyIDItNiA0LTJ6bTMxOCAxbDEgMiA0LTJ2MmwtNiA3LTMgMS0xLTEgNS05em0tODIgNWw0IDItMSA0LTUtMSAyLTV6bTYyIDBsMyAxLTMgNS0zIDEtMS0zIDQtNHptLTQ0IDZsNCAzLTUgMi0xLTMgMi0yem0tMTMgNWw1IDMtNyAxNC00IDEtMy00IDgtMiAxLTEyem03NSAxM2wxIDEtNiA5LTQgMS0xLTVoMmw0LTEgNC01em0tMjAyIDF2NmwtNSAxMC0xLTUgNi0xMXptMjA2IDVsNCAydjVsLTQtMS0yIDEgMi03em0tMTA4IDZsMTIgMS0xMyA3LTEtNiAyLTJ6bS0xOCA2bDQgMyAzIDMgNiA2LTE0IDItMS0xMiAyLTJ6bTMwIDBsNCAydjVsLTQtMS0yIDEgMi03em04OCA2djRsLTUgMy0xLTMgNi00em0zIDZsMyAydjRsLTYgMi0xIDItNCAxLTEtNWgybDQtMSAzLTV6bS0xNDYgMWwzIDUgMiAxcTIgMTYtNSAyMnYtMjh6bTM3IDExbDQgMy0yIDMtNC0xIDItNXptMTI1IDBsMyAyIDIgOS04IDEgMi0zIDEtOXptLTE1MCAxN2w0IDFoMXYxM2wtNC0xLTIgMSAxLTE0em0tNzMgMnYxMmwtMyA1LTIgMS0xLTcgNi0xMXptNjEgMTRsNSA1LTEgNC00IDJ2LTExeiIvPjxwYXRoIGQ9Ik01MTAgNTE1djhsLTYgMTAgMTEgMWgxbC0zIDYtMy0xLTEtMy05LTItMiAxcS0zLTE2IDktMTlsMy0xem0tODMgNmw0IDItNCA3di05em0wIDIzbDUgNS01IDh2LTEzem03OSAybDQgMnYxNmgtNmwyLTE4eiIvPjwvZz48cGF0aCBkPSJNNTEwIDI3OWwxIDMgMSAxLTMgMS0yIDQtMiAxLTMtNiA4LTR6bTIxIDlsMyAzLTEgMy00IDEtMS00IDMtM3ptLTEzIDhsOSA3LTUgMTR2MiAybC0yLTNoMWwtNS0zIDItMyAyLTEgMi03LTYtNC0xMCA2LTItNCAxNC02em00NyA0bDMgMiAyIDUtMS0xLTQgMXYtN3ptNTYgMTJsMyAyLTIgNGgtNGwzLTZ6bS0xMTggNGwxIDMtNSA3LTEtMmgtM2w4LTh6bTk0IDlsMSAxIDIgNS0xLTEtNCAxLTEtMSAzLTV6bTM0IDVsMyAyIDIgMyAxLTQgMiA1LTMgMS00LTEtMiAxIDEtN3ptLTE2OSA3djEybC01IDEwLTEtMTEgNi0xMXptMTYyIDE4djZsLTMgNWgtM2w2LTExem0tMTM3IDhsNSAxNGgtMWwtNC0xNHptMTE5IDd2M2wtNSAxMC0xLTUgNi04em0tMTE0IDM5djE1aC0xbC0xLTQtNC0yIDItNCAyLTEgMi00em03OCAzdjJsLTMgNmgtM2wtMS01IDctM3ptLTI1MiAzdjExaC03bDQtNSAzLTZ6bTIyOCAxMWwyIDEtNyA4LTEtMyA0LTUgMi0xem0xMyAwbDUgMy0xIDMtMy0xLTEtNXptOTEgNmw0IDF2MmwtNCAyLTItMyAyLTJ6bS0zNTggNmwyIDEtNSA3LTEtNCA0LTR6bTIzNyAwbDggMS04IDV2LTZ6bTE4IDBsMiAxIDEgNC0zIDYtMS01aC0zbDQtNnptODYgMGwzIDEtMSA1LTUtMSAzLTV6bS0zMzMgNmwyIDEtMSAzLTQgMmgtNWw4LTZ6bTM0NCA2bDQgMi0xIDgtNCAydjFsLTEtMTEgMi0yem0tMTEwIDEwdjZxLTQgNi04LTNsOC0zem0xMDUgMjZsMyAzLTEgMy00IDMtMS02IDMtM3oiIGZpbGw9IiNiM2JkOTAiIHN0cm9rZT0iI2IzYmQ5MCIvPjxwYXRoIGQ9Ik01ODUgMjgybDMgMi0zIDEwLTIgMS0zLTEtNSA0IDEwLTE2em0tMzYgNmwzIDMgMSAzaC0ybC00IDEtMy0xIDUtNnptNDggNmw5IDQgMiAyaDdsMTcgMTItMiAxIDMgNWgtMTBsMS0yLTEtMyAxLTMtMTgtNy05LTgtNCAzIDQtNHptLTE0IDVsMSAyIDQgM3YzbC00LTEtMiAxIDEtOHptLTg3IDFsNSAxLTMgMnYtMmwtNSAxMC0xLTQgNC03em01MSA1bDQgMWgxbC0zIDYtMi03em01NyAxcTMgOCAxNiA3bC0yIDV2MmwyIDQgNyAxLTMgNi0zLTEtMyAyLTYtMTQtNSAzLTEtOC01IDItMS0zIDQtNnptLTEwMyA2bDIgNC0xNiAxNy0xLTMgNi0xMSA5LTd6bTE2IDNsNCAzLTIgMSA1IDR2MWwtOC0yIDEtN3ptMjkgNnY3bC00IDItMi00IDYtNXptMzIgM2w0IDN2M2wtNi0yIDItNHptNTYgMGwzIDMgNSAxMi0zLTItMi02LTEgNC0zLTQgMy0xLTItNnptLTE3MiA3djZsLTUgMTAtMS01IDYtMTF6bTE2OCA2bDEgMTEtNSAyLTIgNCAxIDEtMiAxLTQgNi0xLTEzIDYtMiAxLTYgMiAxIDMtNXptMTIgNGwtMSAyLTQgOS0yLTQgMi0xIDMtNSAyLTF6bS0xNTUgMTZsNSAxNGgtMWwtNC0xNHptMTQ0IDhsNCAxaDFxNCAxNC0zIDE4aC0zbDEtMTl6bS0xMiA3bDUgMi0yIDQtNC0xIDEtNXptLTI4OCAxMWwxMCAxaDF2MTFsLTMtNS04IDJ2LTl6bTI1NyAxbDIgMS0yIDEtMSAyLTYgMy0zLTEgMTAtNnptLTE0NCAydjVsLTUgMTAtMS00IDYtMTF6bTEyNiAxbDEgMyAyIDEtMyA1aDNsNC0zLTYgMTMtMS00LTUgMy0xLTNoLTNsOS0xNXptNTYgM2w0IDEtMSA1LTUtMSAyLTV6bS0yODMgN2w1IDEyLTEtMS00IDF2LTEyem0xMDEgMHYxMWwtMyA2LTIgMS0xLTcgNi0xMXptMTE0IDE3bDEgMS0xIDYgMyA1LTMgMSA0IDUgMi0xdjZsLTIgMS01LTZoMWwtNi0xMiA0LTUgMi0xem0tMTIgMTZsMiA4LTIgMS0zIDUgMiAxLTEwIDV2MWwtMTMtNCA2LTUgMSAyIDExLTYgNi04em0tMzAgMjBsNCAyIDIgNi0yLTItNCAydjVsLTQtMi0yLTcgNi00em0xMzIgOXY0bC0zIDUtMy0xIDItNiA0LTJ6bS0xMzIgMTh2MTRsLTIgMS0zLTVoLTJsNy0xMHptLTg0IDE4djRsLTUgMTAtMS01IDYtOXptNjEgMTJsOCAzIDMtMi0zIDgtOS0zIDEtNnptMTcgMTZsMSAxMWgtNWwtMi0yIDYtOXptLTE3IDE2bDQgMWgxbC0yIDYtNC0yIDEtNXptLTY3IDEwdjE1aC01bC0xLTYgNi05eiIgZmlsbD0iI2IzYmRiNCIgc3Ryb2tlPSIjYjNiZGI0Ii8+PC9zdmc+)`,
                            backgroundPosition: "bottom"}} className={classes.marginTop}>
                            <CardHeader title={
                                <span>
                                    <BlingBling className="emoji-150" style={{verticalAlign: "middle", transformOrigin: "right", transform: "translate(50%, 0px) scale(2)", filter: "drop-shadow(white 0px 0px 6px)"}} />
                                    <span>Sponsored+ Supporters</span>
                                </span>
                            }/>
                            <CardContent>
                                <h3>Coming soon!</h3>
                            </CardContent>
                        </Card>
                    </Fade>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Settings);
