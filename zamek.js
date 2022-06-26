player.onChat("castle", function () {
    player.teleport(pos(100, 0, 100))
    builder.setOrigin()
    builder.teleportTo(pos(5, 0, 0))
    castle(5, 20, 5, 7)
})
function wall (forward: number, left: number, height: number) {
    builder.mark()
    builder.shift(forward, 0, left)
    builder.raiseWall(POLISHED_ANDESITE, height)
    builder.line(COBBLESTONE)
}
function window () {
    builder.mark()
    builder.turn(RIGHT_TURN)
    builder.move(RIGHT, 8)
    builder.move(UP, 1)
    builder.mark()
    builder.raiseWall(GLASS, 4)
    builder.move(RIGHT, 1)
    builder.mark()
}
function tower (side: number, height: number, turns: number) {
    builder.pushState()
    for (let index = 0; index < 4; index++) {
        builder.turn(LEFT_TURN)
    }
    builder.shift(2 - side, 0, 2 - side)
    builder.mark()
    for (let index = 0; index < 4; index++) {
        builder.move(FORWARD, side)
        builder.turn(LEFT_TURN)
    }
    builder.raiseWall(STONE, 7)
    for (let index = 0; index < 4; index++) {
        builder.raiseWall(DIORITE, 7)
        builder.tracePath(COBBLESTONE)
    }
    builder.popState()
}
function castle (wallHeight: number, wallLength: number, towerLength: number, towerHeight: number) {
    tower(towerLength, towerHeight, 2)
    wall(wallLength, 0, wallHeight)
    tower(towerLength, towerHeight, 0)
    wall(0, wallLength, wallHeight)
    tower(towerLength, towerHeight, 0)
    wall(0 - wallLength, 0, wallHeight)
    tower(towerLength, towerHeight, 0)
    wall(0, 0 - wallLength, wallHeight)
    gate()
    window()
}
function gate () {
    builder.mark()
    builder.turn(RIGHT_TURN)
    builder.move(BACK, 4)
    builder.mark()
    builder.move(UP, 4)
    builder.turn(LEFT_TURN)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 4)
    builder.move(DOWN, 4)
    builder.tracePath(BLOCK_OF_QUARTZ)
    builder.turn(LEFT_TURN)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 1)
    builder.mark()
    builder.move(FORWARD, 2)
    builder.raiseWall(IRON_BARS, 4)
    builder.move(FORWARD, 2)
    builder.mark()
}
