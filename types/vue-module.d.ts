declare module '*.vue' {
    import * as Vue from 'vue'
    const value: Vue.ComponentOptions<Vue>
    export = value
}
