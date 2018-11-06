<!--suppress CheckEmptyScriptTag, CssUnusedSymbol -->
<template>
    <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <svg
                    id="cat"
                    ref="cat"
                    v-bind:class="{light: !isDark, dark: isDark}"
                    viewBox="0 0 60 60">
                <defs>
                    <filter id="cat-shadow">
                        <feFlood flood-color="rgb(0,0,0)" flood-opacity="0.498039" result="flood" />
                        <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1" />
                        <feGaussianBlur in="composite1" stdDeviation="0.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" />
                    </filter>
                </defs>
                <circle
                        v-bind:style="{ fill: backgroundEnabled ? backgroundColor : 'transparent' }"
                        class="background-color"
                        cx="30"
                        cy="30"
                        r="29" />
                <g
                        v-bind:style="{ filter: shadowEnabled ? 'url(#cat-shadow)' : 'none' }"
                        class="body"
                        transform="translate(6, 6)">
                    <path
                            v-bind:style="{ fill: collarEnabled ? collarColor : bodyColor }"
                            class="body-color collar-color"
                            d="M9,18.4h30v1.6h-30z" />
                    <path
                            v-bind:style="{ fill: bodyColor }"
                            class="body-color"
                            d="M15.4,1l5.1000004,5.3l-6.3,2.8000002z" />
                    <path
                            class="ear-inside-color"
                            d="M15.4,1l3.5,6.2l-4.7,1.9z" />
                    <path
                            v-bind:style="{ fill: bodyColor }"
                            class="body-color"
                            d="M32.6,1l-5.0999985,5.3l6.299999,2.8000002z" />
                    <path
                            class="ear-inside-color"
                            d="M33.8,9.1l-4.7,-1.9l3.5,-6.2z" />
                    <path
                            v-bind:style="{ fill: bodyColor }"
                            class="body-color"
                            d="M9,18.5c0,-8.3 6.8,-15 15,-15s15,6.7 15,15H9z" />
                    <path
                            v-bind:style="{ fill: capEnabled ? isDark ? '#ffffff' : capColor : 'transparent' }"
                            class="cap-color"
                            d="M27.2,3.8c-1,-0.2 -2.1,-0.3 -3.2,-0.3s-2.1,0.1 -3.2,0.3c0.2,1.3 1.5,2.2 3.2,2.2C25.6,6.1 26.9,5.1 27.2,3.8z" />
                    <path
                            class="eye-color"
                            d="M20.5,11c0,1.7 -3,1.7 -3,0C17.5,9.3 20.5,9.3 20.5,11z" />
                    <path
                            class="eye-color"
                            d="M30.5,11c0,1.7 -3,1.7 -3,0C27.5,9.3 30.5,9.3 30.5,11z" />
                    <g class="snout" v-bind:class="{light: faceSpotEnabled}">
                        <path
                                class="face-spot-color"
                                d="M19.5,15.2a4.5,3.2 0,1 0,9 0a4.5,3.2 0,1 0,-9 0z" />
                        <path
                                class="snout-color"
                                d="M25.2,13c0,1.3 -2.3,1.3 -2.3,0S25.2,11.7 25.2,13z" />
                        <path
                                class="snout-color stroke mouth-stroke"
                                d="M29,14.3c-0.4,0.8 -1.3,1.4 -2.3,1.4c-1.4,0 -2.7,-1.3 -2.7,-2.7 M24,13c0,1.5 -1.2,2.7 -2.7,2.7c-1,0 -1.9,-0.5 -2.3,-1.4"  />
                    </g>
                    <path
                            v-bind:style="{ stroke: bodyColor }"
                            class="body-color stroke tail-stroke"
                            d="M35,35.5h5.9c2.1,0 3.8,-1.7 3.8,-3.8v-6.2" />
                    <path
                            v-bind:style="{ fill: tailCapEnabled ? '#ffffff' : 'transparent' }"
                            class="tail-cap-color"
                            d="M42.2,25.5c0,-1.4 1.1,-2.5 2.5,-2.5s2.5,1.1 2.5,2.5H42.2z" />
                    <path
                            class="inner-shadow"
                            d="M40,38l0,-5l-1,0l0,5z" />
                    <path
                            v-bind:style="{ fill: feetEnabled && ['a', 'r', '1'].includes(feetSelected) ? '#ffffff' : bodyColor }"
                            class="body-color feet-color right-feet-color foot1-color"
                            d="M11.5,43m-2.5,0a2.5,2.5 0,1 1,5 0a2.5,2.5 0,1 1,-5 0" />
                    <path
                            v-bind:style="{ fill: bodyColor }"
                            class="body-color"
                            d="M9,38h5v5h-5z" />
                    <path
                            v-bind:style="{ fill: feetEnabled && ['a', 'r', '2'].includes(feetSelected) ? '#ffffff' : bodyColor }"
                            class="body-color feet-color right-feet-color foot2-color"
                            d="M18.5,43m-2.5,0a2.5,2.5 0,1 1,5 0a2.5,2.5 0,1 1,-5 0" />
                    <path
                            v-bind:style="{ fill: bodyColor }"
                            class="body-color"
                            d="M16,38h5v5h-5z" />
                    <path
                            v-bind:style="{ fill: feetEnabled && ['a', 'l', '3'].includes(feetSelected) ? '#ffffff' : bodyColor }"
                            class="body-color feet-color left-feet-color foot3-color"
                            d="M29.5,43m-2.5,0a2.5,2.5 0,1 1,5 0a2.5,2.5 0,1 1,-5 0" />
                    <path
                            v-bind:style="{ fill: bodyColor }"
                            class="body-color"
                            d="M27,38h5v5h-5z" />
                    <path
                            v-bind:style="{ fill: feetEnabled && ['a', 'l', '4'].includes(feetSelected) ? '#ffffff' : bodyColor }"
                            class="body-color feet-color left-feet-color foot4-color"
                            d="M36.5,43m-2.5,0a2.5,2.5 0,1 1,5 0a2.5,2.5 0,1 1,-5 0" />
                    <path
                            v-bind:style="{ fill: bodyColor }"
                            class="body-color"
                            d="M34,38h5v5h-5z" />
                    <path
                            class="inner-shadow"
                            d="M16,38h5v1h-5z" />
                    <path
                            v-bind:style="{ fill: bodyColor }"
                            class="body-color"
                            d="M9,20h30v18h-30z" />
                    <path
                            v-bind:style="{ fill: backEnabled ? '#ffffff' : 'transparent' }"
                            class="back-color"
                            d="M37.1,22c-1.1,0 -1.9,0.8 -1.9,1.9v5.6c0,1.1 0.8,1.9 1.9,1.9H39v-1.9v-5.6V22H37.1z" />
                    <path
                            v-bind:style="{ fill: bellyEnabled ? '#ffffff' : 'transparent' }"
                            class="belly-color"
                            d="M20.5,25c-3.6,0 -6.5,2.9 -6.5,6.5V38h13v-6.5C27,27.9 24.1,25 20.5,25z" />
                    <path
                            v-bind:style="{ fill: collarEnabled && bowTieEnabled ? collarColor : 'transparent' }"
                            class="bow-tie-color"
                            d="M29,16.8l-10,5l0,-5l10,5z" />
                </g>
            </svg>
            <v-btn fab absolute bottom right style="bottom: 16px;" v-on:click="onFabClick">
                <v-icon>share</v-icon>
            </v-btn>
        </v-layout>
        <v-navigation-drawer ref="drawer" v-model="rightDrawerEnabled" mobile-break-point="464" right app hide-overlay v-bind:width="drawerWidth">
            <v-list v-bind:style="customColorEnabled ? '' : 'padding-top: 0;'" dense>
                <v-list-tile v-if="!customColorEnabled" class="buttons color-buttons">
                    <v-btn v-bind:color="bodyColors[0]" v-on:click="changeBodyColor(bodyColors[0])" />
                    <v-btn v-bind:color="bodyColors[1]" v-on:click="changeBodyColor(bodyColors[1])" />
                    <v-btn v-bind:color="bodyColors[2]" v-on:click="changeBodyColor(bodyColors[2])" />
                    <v-btn v-bind:color="bodyColors[3]" v-on:click="changeBodyColor(bodyColors[3])" />
                    <v-btn v-bind:color="bodyColors[4]" v-on:click="changeBodyColor(bodyColors[4])" />
                    <v-btn v-bind:color="bodyColors[5]" v-on:click="changeBodyColor(bodyColors[5])" />
                    <v-btn v-bind:color="bodyColors[6]" v-on:click="changeBodyColor(bodyColors[6])" />
                    <v-btn v-bind:color="bodyColors[7]" v-on:click="changeBodyColor(bodyColors[7])" />
                    <v-btn v-bind:color="bodyColors[8]" v-on:click="changeBodyColor(bodyColors[8])" />
                    <v-btn v-bind:color="bodyColors[9]" v-on:click="changeBodyColor(bodyColors[9])" />
                    <v-btn v-bind:color="bodyColors[10]" v-on:click="changeBodyColor(bodyColors[10])" />
                    <v-btn flat v-on:click="changeBodyColor(bodyColors[11])">
                        <v-icon>colorize</v-icon>
                    </v-btn>
                </v-list-tile>
                <v-list-tile v-if="customColorEnabled">
                    <v-switch label="Custom Color" v-model="customColorEnabled" />
                </v-list-tile>
                <div v-if="customColorEnabled" style="padding-bottom: 6px;">
                    <v-divider />
                    <v-list-tile style="height: 32px;">
                        <v-slider v-model="customColorObject.h" max="360" label="H" thumb-label width="100%" />
                    </v-list-tile>
                    <v-list-tile style="height: 32px;">
                        <v-slider v-model="customColorObject.s" max="100" label="S" thumb-label />
                    </v-list-tile>
                    <v-list-tile style="height: 32px;">
                        <v-slider  v-model="customColorObject.v" max="100" label="V" thumb-label />
                    </v-list-tile>
                </div>
                <v-divider />
                <v-list-tile>
                    <v-switch label="Background" v-model="backgroundEnabled" />
                    <v-spacer />
                    <v-toolbar-items v-if="backgroundEnabled">
                        <v-divider vertical />
                        <v-btn v-on:click="backgroundShiftToggle" flat style="min-width: 40px; margin-right: -16px; padding: 0;">
                            <v-icon>{{backgroundShiftEnabled ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
                        </v-btn>
                    </v-toolbar-items>
                </v-list-tile>
                <div v-if="backgroundEnabled && backgroundShiftEnabled">
                    <v-divider  />
                    <v-list-tile>
                        <v-slider v-model="backgroundShift" min="25" max="50" thumb-label />
                    </v-list-tile>
                </div>
                <v-divider />
                <v-list-tile>
                    <v-switch label="Shadow" v-model="shadowEnabled" />
                </v-list-tile>
                <v-divider />
                <v-list-tile>
                    <v-switch label="Cap" v-model="capEnabled" />
                </v-list-tile>
                <div v-if="capEnabled && !isDark">
                    <v-divider />
                    <v-list-tile class="buttons color-buttons">
                        <v-btn v-bind:color="capColors[0]" v-on:click="changeCapColor(capColors[0])" />
                        <v-btn v-bind:color="capColors[1]" v-on:click="changeCapColor(capColors[1])" />
                    </v-list-tile>
                </div>
                <v-divider />
                <v-list-tile>
                    <v-switch label="Face Spot" v-model="faceSpotEnabled" />
                </v-list-tile>
                <v-divider />
                <v-list-tile>
                    <v-switch label="Collar" v-model="collarEnabled" />
                </v-list-tile>
                <div v-if="collarEnabled">
                    <v-divider />
                    <v-list-tile class="buttons color-buttons">
                        <v-btn v-bind:color="collarColors[0]" v-on:click="changeCollarColor(collarColors[0])" />
                        <v-btn v-bind:color="collarColors[1]" v-on:click="changeCollarColor(collarColors[1])" />
                        <v-btn v-bind:color="collarColors[2]" v-on:click="changeCollarColor(collarColors[2])" />
                        <v-btn v-bind:color="collarColors[3]" v-on:click="changeCollarColor(collarColors[3])" />
                        <v-btn v-bind:color="collarColors[4]" v-on:click="changeCollarColor(collarColors[4])" />
                        <v-btn v-bind:color="collarColors[5]" v-on:click="changeCollarColor(collarColors[5])" />
                        <v-btn v-bind:color="collarColors[6]" v-on:click="changeCollarColor(collarColors[6])" />
                        <v-btn v-bind:color="collarColors[7]" v-on:click="changeCollarColor(collarColors[7])" />
                    </v-list-tile>
                </div>
                <v-divider v-if="collarEnabled" />
                <v-list-tile v-if="collarEnabled">
                    <v-switch label="Bow Tie" v-model="bowTieEnabled" />
                </v-list-tile>
                <v-divider />
                <v-list-tile>
                    <v-switch label="Tail Cap" v-model="tailCapEnabled" />
                </v-list-tile>
                <v-divider />
                <v-list-tile>
                    <v-switch label="Back" v-model="backEnabled" />
                </v-list-tile>
                <v-divider />
                <v-list-tile>
                    <v-switch label="Belly" v-model="bellyEnabled" />
                </v-list-tile>
                <v-divider />
                <v-list-tile>
                    <v-switch label="Feet" v-model="feetEnabled" />
                </v-list-tile>
                <v-list-tile v-if="feetEnabled" class="buttons text-buttons">
                    <v-btn color="secondary" v-on:click="changeFeetSelected('a')">All</v-btn>
                    <v-btn color="secondary" v-on:click="changeFeetSelected('r')">R</v-btn>
                    <v-btn color="secondary" v-on:click="changeFeetSelected('l')">L</v-btn>
                    <v-btn color="secondary" v-on:click="changeFeetSelected('1')">1</v-btn>
                    <v-btn color="secondary" v-on:click="changeFeetSelected('2')">2</v-btn>
                    <v-btn color="secondary" v-on:click="changeFeetSelected('3')">3</v-btn>
                    <v-btn color="secondary" v-on:click="changeFeetSelected('4')">4</v-btn>
                </v-list-tile>
                <v-divider />
            </v-list>
        </v-navigation-drawer>
        <v-dialog v-model="dialogEnabled" max-width="500">
            <v-card>
                <v-card-title class="headline grey darken-4" primary-title>Share</v-card-title>
                <v-card-text>
                    <p>Share your cat with the following URL:</p>
                    <v-text-field label="Share URL" v-bind:value="shareUrl" />
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn v-on:click="dialogEnabled = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar bottom right auto-height v-bind:timeout="0" v-bind:value="!cookiesEnabled && !cookiesDismissed">
            <v-card flat color="transparent">
                <v-card-text>
                    This website uses cookies only to remember your preferences.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="accent" v-on:click="enableCookies">Sure</v-btn>
                    <v-btn flat color="accent" v-on:click="cookiesDismissed = true">No Thanks</v-btn>
                </v-card-actions>
            </v-card>
        </v-snackbar>
    </v-container>
</template>

<script>
    import tinycolor from 'tinycolor2'

    export default {
        name: "Cat",
        props: {
            rightDrawerEnabled: Boolean,
            darkMode: Boolean,
            randomizeClicked: Boolean
        },
        data() {
            return {
                updating: null,
                rendering: null,
                drawerWidth: 240,
                backgroundEnabled: true,
                backgroundShiftEnabled: false,
                backgroundShift: 25,
                shadowEnabled: true,
                bodyColor: '#795548',
                bodyColors: [
                    '#212121',
                    '#ffffff',
                    '#616161',
                    '#795548',
                    '#90a4ae',
                    '#fff9c4',
                    '#ff8f00',
                    '#29b6f6',
                    '#ffcdd2',
                    '#ce93d8',
                    '#43a047',
                    false
                ],
                customColorEnabled: false,
                customColorObject: {
                    h: 16,
                    s: 40,
                    v: 47
                },
                capEnabled: false,
                capColor: '#212121',
                capColors: [
                    '#212121',
                    '#6D4C41'
                ],
                faceSpotEnabled: false,
                collarEnabled: false,
                collarColor: '#f44336',
                collarColors: [
                    '#ffffff',
                    '#000000',
                    '#f44336',
                    '#1976d2',
                    '#fdd835',
                    '#fb8c00',
                    '#f48fb1',
                    '#4caf50',
                ],
                bowTieEnabled: null,
                tailCapEnabled: null,
                backEnabled: null,
                bellyEnabled: null,
                feetEnabled: false,
                feetSelected: 'a',
                dialogEnabled: false,
                shareUrl: null,
                cookiesEnabled: this.$cookies.isKey('cookiesEnabled') ? this.$cookies.get('cookiesEnabled') : false,
                cookiesDismissed: false
            };
        },
        mounted() {
            this.$nextTick(function() {
                if (!this.updating) {
                    this.onResize();
                }
                window.addEventListener('resize', () => {
                    if (!this.updating) {
                        this.onResize();
                    }
                });
            });
            const state = new URLSearchParams(document.location.search).get('state');
            if (state) {
                this.updateState(state, true);
            } else if (this.$cookies.isKey('state')) {
                this.updateState(this.$cookies.get('state'), false);
            } else {
                this.randomize();
            }
        },
        computed: {
            backgroundColor() {
                let {h, s, v} = tinycolor(this.bodyColor).toHsv();
                v = v > 0.5 ? v - (this.backgroundShift / 100) : v + (this.backgroundShift / 100);
                return tinycolor({h: h, s: s, v: v}).toHexString();
            },
            isDark() {
                let {r, g, b} = tinycolor(this.bodyColor).toRgb();
                return r + g + b < 0x80;
            },
            customColor() {
                let {h, s, v} = this.customColorObject;
                s = s / 100;
                v = v / 100;
                return tinycolor({h: h, s: s, v: v}).toHexString();
            }
        },
        watch: {
            darkMode(value) {
                if (this.cookiesEnabled) {
                    this.$cookies.set('darkMode', value, '365d');
                }
            },
            isDark() {
                this.$nextTick(this.onResize);
            },
            randomizeClicked(value) {
                if (value) {
                    this.randomize();
                    this.$emit('randomized');
                }
            },
            rightDrawerEnabled(value) {
                if (this.cookiesEnabled) {
                    this.$cookies.set('drawerEnabled', value, '365d');
                }
            },
            customColorEnabled(value) {
                if (!value) {
                    if (!this.bodyColors.includes(this.bodyColor)) {
                        this.bodyColor = '#795548';
                    }
                }
                this.updated();
            },
            customColor(color) {
                this.bodyColor = color;
                this.updated();
            },
            backgroundEnabled(value) {
                this.prepare('backgroundEnabled');
                if (!value && this.backgroundShiftEnabled) {
                    this.backgroundShiftToggle();
                }
                this.updated('backgroundEnabled');
            },
            backgroundColor() {
                this.updated();
            },
            capEnabled() {
                this.updated();
            },
            collarEnabled(value) {
                this.prepare('collarEnabled');
                if (!value) {
                    this.bowTieEnabled = false;
                }
                this.updated('collarEnabled');
            },
            bowTieEnabled() {
                this.updated();
            },
            feetEnabled() {
                this.updated();
            },
        },
        methods: {
            onResize() {
                this.setDrawerWidth();
                this.setCatStyle();
            },
            async setDrawerWidth() {
                if (this.$refs.drawer !== undefined) {
                    if (this.rendering) {
                        return;
                    }
                    let cw = this.$refs.drawer.$el.clientWidth;
                    if (cw !== 240) {
                        this.rendering = true;
                        if (cw < 240) {
                            this.drawerWidth = this.drawerWidth + (this.drawerWidth - cw);
                        } else if (cw > 240) {
                            this.drawerWidth = 240;
                        }
                        setTimeout(() => this.rendering = false, 500);
                    }
                }
            },
            setCatStyle() {
                if (this.$refs.cat !== undefined) {
                    let w = this.$refs.cat.parentElement.clientWidth;
                    let h = this.$refs.cat.parentElement.clientHeight;
                    let el = this.$root.$el;
                    while (el.parentElement) {
                        el = el.parentElement;
                    }
                    let cw = el.clientWidth;
                    let sw = el.scrollWidth;
                    let ch = el.clientHeight;
                    let sh = el.scrollHeight;
                    let n;
                    if (cw !== sw || ch !== sh) {
                        let wd = sw - cw;
                        let hd = sh - ch;
                        if (wd > hd) {
                            n = w - wd;
                        } else {
                            n = h - hd;
                        }
                    } else {
                        if (w < h) {
                            n = w;
                        } else {
                            n = h;
                        }
                    }
                    if (n < 40) {
                        n = 40;
                    }
                    this.$refs.cat.style.width = `${n}px`;
                    this.$refs.cat.style.height = `${n}px`;
                }
            },
            changeBodyColor(color) {
                this.prepare('changeBodyColor');
                if (color) {
                    this.bodyColor = color;
                    this.customColorEnabled = false;
                } else {
                    let hsv = tinycolor(this.bodyColor).toHsv();
                    hsv.h = Math.round(hsv.h);
                    hsv.s = Math.round(hsv.s * 100);
                    hsv.v = Math.round(hsv.v * 100);
                    this.customColorObject = hsv;
                    this.customColorEnabled = true;
                }
                this.updated('changeBodyColor');
            },
            backgroundShiftToggle() {
                this.prepare('backgroundShiftToggle');
                this.backgroundShiftEnabled = !this.backgroundShiftEnabled;
                if (!this.backgroundShiftEnabled) {
                    this.backgroundShift = 25;
                }
                this.updated('backgroundShiftToggle');
            },
            changeCapColor(color) {
                this.capColor = color;
                this.updated();
            },
            changeCollarColor(color) {
                this.collarColor = color;
                this.updated();
            },
            changeFeetSelected(feet) {
                this.feetSelected = feet;
                this.updated();
            },
            getState() {
                let bci = this.bodyColors.indexOf(this.bodyColor);
                let state = {
                    bc: bci >= 0 ? bci : this.bodyColor.substring(1),
                    bge: this.backgroundEnabled ? this.backgroundShiftEnabled && this.backgroundShift !== 25 ? this.backgroundShift : 1 : 0,
                    se: this.shadowEnabled ? 1 : 0,
                    cac: this.capEnabled ? this.isDark ? 0 : this.capColors.indexOf(this.capColor) : -1,
                    fse: this.faceSpotEnabled ? 1 : 0,
                    coc: this.collarEnabled ? this.collarColors.indexOf(this.collarColor) : -1,
                    bte: this.collarEnabled && this.bowTieEnabled ? 1 : 0,
                    tce: this.tailCapEnabled ? 1 : 0,
                    bae: this.backEnabled ? 1 : 0,
                    bee: this.bellyEnabled ? 1 : 0,
                    fs: this.feetEnabled ? this.feetSelected : 0
                };
                return Object.values(state).join();
            },
            saveState() {
                if (this.cookiesEnabled) {
                    let state = this.getState();
                    this.$cookies.set('state', state, '365d');
                }
            },
            onFabClick() {
                this.shareUrl = `${location.protocol}//${location.host}${location.pathname}?state=${this.getState()}`;
                this.dialogEnabled = true;
            },
            updateState(state) {
                this.prepare('updateState');
                const [bc, bge, se, cac, fse, coc, bte, tce, bae, bee, fs] = state.split(',');

                if (bc >= 0 && bc <= this.bodyColors.length - 1) {
                    this.bodyColor = this.bodyColors[bc];
                    this.customColorEnabled = false;
                } else {
                    let hsv = tinycolor(bc).toHsv();
                    hsv.h = Math.round(hsv.h);
                    hsv.s = Math.round(hsv.s * 100);
                    hsv.v = Math.round(hsv.v * 100);
                    this.customColorObject = hsv;
                    this.customColorEnabled = true;
                }
                this.backgroundEnabled = bge !== "0";
                if (this.backgroundEnabled && bge !== "1") {
                    this.backgroundShiftEnabled = true;
                    this.backgroundShift = bge;
                } else {
                    this.backgroundShiftEnabled = false;
                    this.backgroundShift = 25;
                }
                this.shadowEnabled = se === "1";
                this.capEnabled = cac >= 0;
                if (this.capEnabled) {
                    this.capColor = this.isDark ? '#ffffff' : this.capColors[cac];
                }
                this.faceSpotEnabled = fse === "1";
                this.collarEnabled = coc >= 0;
                if (this.collarEnabled) {
                    this.collarColor = this.collarColors[coc];
                }
                this.bowTieEnabled = this.collarEnabled && bte === "1";
                this.tailCapEnabled = tce === "1";
                this.backEnabled = bae === "1";
                this.bellyEnabled = bee === "1";
                this.feetEnabled = fs !== "0";
                if (this.feetEnabled) {
                    this.feetSelected = fs;
                }
                this.updated('updateState');

            },
            randomize() {
                this.prepare('randomize');
                let newState = [];
                let bodyColorIndex = Math.floor(Math.random() * this.bodyColors.length);
                let bodyColor = this.bodyColors[bodyColorIndex];
                if (bodyColor) {
                    newState.push(bodyColorIndex);
                } else {
                    let h = Math.round(Math.random() * 360);
                    let s = Math.round(50 + Math.random() * 50) / 100;
                    let v = Math.round(50 + Math.random() * 50) / 100;
                    bodyColor = tinycolor({h: h, s: s, v: v}).toHexString();
                    newState.push(bodyColor)
                }
                let {r, g, b} = tinycolor(bodyColor).toRgb();
                let isDark = r + g + b < 0x80;
                newState.push(1);
                newState.push(1);
                newState.push(Math.round(Math.random()) ? isDark ? 0 : Math.floor(Math.random() * this.capColors.length) : -1);
                newState.push(Math.round(Math.random()));
                let collarEnabled = Math.round(Math.random());
                newState.push(collarEnabled ? isDark ? 0 : Math.floor(Math.random() * this.collarColors.length) : -1);
                newState.push(collarEnabled && Math.round(Math.random()));
                newState.push(Math.round(Math.random()));
                newState.push(Math.round(Math.random()));
                newState.push(Math.round(Math.random()));
                let feetEnabled = Math.round(Math.random());
                if (feetEnabled) {
                    let footOptions = ['a', 'r', 'l', 1, 2, 3, 4];
                    newState.push(footOptions[Math.floor(Math.random() * footOptions.length)]);
                } else {
                    newState.push(0);
                }
                this.updateState(newState.join(), false);
                this.updated('randomize');
            },
            prepare(caller) {
                if (!this.updating) {
                    this.updating = caller;
                }
            },
            updated(caller) {
                if (!this.updating || this.updating === caller) {
                    this.$nextTick(() => {
                        this.saveState();
                        this.onResize();
                        if (this.updating === caller) {
                            this.updating = null;
                        }
                    });
                }
            },
            enableCookies() {
                this.cookiesEnabled = true;
                this.$cookies.set('cookiesEnabled', true, '365d');
                this.saveState();
            }
        }
    }
</script>

<style scoped>
    svg#cat g.body {
        filter: url(#cat-shadow);
    }
    svg#cat .stroke {
        fill: none !important;
        stroke-linecap: round;
    }
    svg#cat .mouth-stroke {
        stroke-width: 1.2;
    }
    svg#cat .tail-stroke {
        stroke-width: 5;
    }
    svg#cat .background-color {
        fill: #cd907a;
    }
    svg#cat .inner-shadow {
        fill: #000000;
        fill-opacity: 0.125
    }
    svg#cat .body-color {
        fill: #795548;
    }
    svg#cat .body-color.stroke {
        stroke: #795548;
    }
    svg#cat.dark .ear-inside-color {
        fill: #ef9a9a;
    }
    svg#cat.light .ear-inside-color {
        fill: #d50000;
        fill-opacity: 0.125
    }
    svg#cat .cap-color {
        fill: transparent;
    }
    svg#cat.dark .eye-color,
    svg#cat.dark .snout-color {
        fill: #ffffff;
    }
    svg#cat.dark .snout-color.stroke {
        stroke: #ffffff;
    }
    svg#cat.light .eye-color,
    svg#cat.light .snout-color {
        fill: #000000;
    }
    svg#cat.light .snout-color.stroke {
        stroke: #000000;
    }
    svg#cat .face-spot-color {
        fill: transparent;
    }
    svg#cat g.snout.light .face-spot-color {
        fill: #ffffff;
    }
    svg#cat g.snout.light .snout-color {
        fill: #000000;
    }
    svg#cat g.snout.light .snout-color.stroke {
        stroke: #000000;
    }
    svg#cat .bow-tie-color {
        fill: transparent;
    }
    svg#cat .tail-cap-color {
        fill: transparent;
    }
    svg#cat .back-color {
        fill: transparent;
    }
    svg#cat .belly-color {
        fill: transparent;
    }
    .buttons > :first-child {
        display: block;
        padding: 0;
        height: auto;
    }
    .buttons button {
        min-height: 40px;
        margin: 0;
        padding: 0;
    }
    .color-buttons button {
        min-width: 40px;
    }
    .text-buttons button {
        min-width: 34px;
    }
</style>
