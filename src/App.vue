<!--suppress CheckEmptyScriptTag, CssUnusedSymbol -->
<template>
    <v-app v-bind:dark="darkMode">
        <v-toolbar ref="toolbar" app fixed clipped-left>
            <v-toolbar-side-icon class="hidden-md-and-up" v-on:click.native="leftDrawerEnabled = !leftDrawerEnabled" />
            <v-btn flat icon v-bind:href="url">
                <svg id="logo" viewBox="0 0 24 24">
                    <path d="M12,2C6.5,2 2,6.5 2,12c0,5.5 4.5,10 10,10s10,-4.5 10,-10C22,6.5 17.5,2 12,2zM5.5,11c0,-1.6 3,-1.6 3,0C8.5,12.7 5.5,12.7 5.5,11zM17.5,14.6c-0.6,1 -1.7,1.7 -2.9,1.7c-1.1,0 -2,-0.6 -2.6,-1.4c-0.6,0.9 -1.6,1.4 -2.7,1.4c-1.3,0 -2.3,-0.7 -2.9,-1.8c-0.2,-0.3 0,-0.7 0.3,-0.8c0.3,-0.2 0.7,0 0.8,0.3c0.3,0.7 1,1.1 1.8,1.1c0.9,0 1.6,-0.5 1.9,-1.3c-0.2,-0.2 -0.4,-0.4 -0.4,-0.7c0,-1.3 2.3,-1.3 2.3,0c0,0.3 -0.2,0.6 -0.4,0.7c0.3,0.8 1.1,1.3 1.9,1.3c0.8,0 1.5,-0.6 1.8,-1.1c0.2,-0.3 0.6,-0.4 0.9,-0.2C17.6,13.9 17.7,14.3 17.5,14.6zM15.5,11c0,-1.6 3,-1.6 3,0C18.5,12.7 15.5,12.7 15.5,11z" />
                    <path d="M5.2,1.0l4.1000004,4.2l-5.0,2.1000004z" />
                    <path d="M18.8,1.0l-4.0999994,4.2l5.000001,2.1000004z" />
                </svg>
            </v-btn>
            <v-toolbar-title class="headline text-uppercase" style="margin-left: 0.25em;">
                <span>Android</span>
                <span class="font-weight-light">Cat</span>
            </v-toolbar-title>
            <v-spacer />
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-on:click.stop="darkMode = !darkMode">
                    <v-switch label="Dark Mode" v-model="darkMode" readonly hide-details />
                </v-btn>
                <v-btn flat v-on:click.stop="randomizeClicked = !randomizeClicked">
                    <span class="mr-2">Randomize</span>
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-side-icon v-on:click.native="rightDrawerEnabled = !rightDrawerEnabled" />
        </v-toolbar>
        <v-content>
            <cat v-bind:right-drawer-enabled="rightDrawerEnabled" v-bind:dark-mode="darkMode" v-bind:randomize-clicked="randomizeClicked" v-on:randomized="randomizeClicked = false" />
        </v-content>
        <v-navigation-drawer v-model="leftDrawerEnabled" width="240" app temporary hide-overlay class="hidden-md-and-up" v-bind:style="drawerStyle">
            <v-list>
                <v-list-tile>
                    <v-switch label="Dark Mode" v-model="darkMode" />
                </v-list-tile>
                <v-list-tile>
                    <v-btn flat v-on:click.stop="randomizeClicked = !randomizeClicked">
                        <span class="mr-2">Randomize</span>
                    </v-btn>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
    import Cat from './components/Cat'

    export default {
        name: 'App',
        components: {
            cat: Cat
        },
        data() {
            return {
                darkMode: this.$cookies.isKey('darkMode') ? this.$cookies.get('darkMode') === "true" : true,
                url: null,
                randomizeClicked: false,
                leftDrawerEnabled: false,
                rightDrawerEnabled: this.$cookies.isKey('drawerEnabled') ? this.$cookies.get('drawerEnabled') === "true" : true
            }
        },
        mounted() {
            this.url = `${location.protocol}//${location.host}${location.pathname}`;
        },
        computed: {
            drawerStyle() {
                return {
                    marginTop: `${this.drawerMarginTop}px`,
                    maxHeight: `calc(100% - ${this.drawerMaxHeight}px)`
                };
            },
            drawerMarginTop() {
                return this.$vuetify.application.bar + this.$vuetify.application.top;
            },
            drawerMaxHeight() {
                return (
                    this.$vuetify.application.bottom +
                    this.$vuetify.application.footer +
                    this.$vuetify.application.bar
                ) + this.$vuetify.application.top;
            }
        }
    }
</script>

<style scoped>
    svg#logo {
        width: 38px;
        height: 38px;
    }
    a.v-btn.theme--dark svg#logo {
        fill: #ffffff;
    }
    a.v-btn.theme--light svg#logo {
        fill: #000000;
    }
</style>
