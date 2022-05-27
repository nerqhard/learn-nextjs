import { update } from "js-coroutines"
import React, { useEffect, useRef } from "react"
import { Box, makeStyles } from "@mui/material"

let x = 0
let y = 0

function trackMousePosition() {
    document?.addEventListener("mousemove", storeMousePosition)
}

trackMousePosition()

function storeMousePosition(event) {
    x = event.pageX
    y = event.pageY
}

function clamp(t) {
    return Math.max(0, Math.min(1, t))
}

function lerp(a, b, t) {
    return (b - a) * t + a
}

export function magnify(
    element,
    from = 0.9,
    to = 1.5,
    radius = 5,
    flipFrames = 60
) {
    if (!element) return
    const pos = rect()
    const zIndex = element.style.zIndex || 0
    const initialTransform = element.style.transform || ""
    const SCALING_FACTOR = pos.width + pos.height * 2
    return update(run)

    //Standard animation
    function* run() {
        let inside = false
        while (true) {
            const [, middleX] = resize()
            const outside = Math.abs(middleX - x) > pos.width
            if (!outside) {
                inside = true
            } else {
                if (inside) {
                    inside = false
                    yield* flip(middleX > x ? 1 : -1)
                }
            }
            yield
        }
    }

    //Box is flipping
    function* flip(direction = 1) {
        for (let angle = 0; angle < 360; angle += 360 / flipFrames) {
            resize()
            if (angle > 90 && angle < 270) {
                element.style.filter = `grayscale(1)`
            } else {
                element.style.filter = ``
            }
            element.style.transform = `${
                element.style.transform
            } rotate3d(0,1,0,${angle * direction}deg)`
            yield
        }
    }

    function resize() {
        const pos = rect()
        let middleX = pos.width / 2 + pos.x
        let middleY = pos.height / 2 + pos.y
        let d = Math.sqrt((x - middleX) ** 2 + (y - middleY) ** 2)
        const value = lerp(to, from, clamp((d - radius) / SCALING_FACTOR))
        element.style.transform = `scale(${value}) ${initialTransform}`
        element.style.zIndex =
            zIndex + ((((value - from) / (to - from)) * 1000) | 0)
        return [d, middleX, middleY]
    }

    function rect() {
        return element.getBoundingClientRect()
    }
}

const useStyles = makeStyles(() => {
    magnify: {
        position: "relative"
    }
})

export function MagnifyBox({
    children,
    from = 1,
    to = 1.8,
    flipFrames = 60,
    radius = 15,
    ...props
}) {
    const ref = useRef()
    const classes = useStyles()
    useEffect(() => {
        const promise = magnify(ref.current, from, to, radius, flipFrames)
        return promise.terminate
    })
    return (
        <Box ref={ref} className={classes.magnify} {...props}>
            {children}
        </Box>
    )
}
