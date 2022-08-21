import isPathInside from "is-path-inside"

export default {
    name: "custom-plugin",
    buildStart: function () {
        console.log(isPathInside("/aaa/bbb", "/aaa"));
    }
}