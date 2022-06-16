AFRAME.registerComponent("target", {
    init: function() {
        this.target()
    },
    target: function() {
        var sceneEl = document.querySelector("#scene")
        var targetEl = document.createElement("a-entity")

        targetEl.setAttribute("position", {x: -16, y: 0, z: -17})
        targetEl.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 0.5
        })

        sceneEl.appendChild(targetEl)
    }
})