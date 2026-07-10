namespace SpriteKind {
    export const obstaculo = SpriteKind.create()
    export const Vida = SpriteKind.create()
    export const Puntos = SpriteKind.create()
    export const Ayudante = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        cantidadSaltos = 0
    }
})
function crearObstaculos () {
    for (let valor of tiles.getTilesByType(assets.tile`obstaculo1`)) {
        mySprite7 = sprites.create(assets.image`Obstaculo`, SpriteKind.obstaculo)
        tiles.placeOnTile(mySprite7, valor)
        tiles.setTileAt(valor, assets.tile`baseTransparency16`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cantidadSaltos < MaxSalto) {
        cantidadSaltos += 1
        pebble.vy = -200
    }
})
function SpawnEnemigo () {
    if (nivelActual == 1) {
        crearEnemigo("enemigo1", 23, 2, 0, 0, 3)
        crearEnemigo("enemigo2", 7, 7, -30, 0, 2)
    }
}
function configurarPersonaje () {
    pebble = sprites.create(assets.image`Idle`, SpriteKind.Player)
    pebble.ay = 300
    controller.moveSprite(pebble, velocidadX, 0)
    scene.cameraFollowSprite(pebble)
    info.setLife(3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Puntos, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
function crearEnemigo (tipo: string, columna: number, fila: number, velocidad_X: number, velocidad_y: number, vida: number) {
    if (tipo == "enemigo1") {
        mySprite8 = sprites.create(assets.image`Enemigo1`, SpriteKind.Enemy)
        sprites.setDataString(mySprite8, "tipo", "enemigo1")
        tiles.placeOnTile(mySprite8, tiles.getTileLocation(columna, fila))
        mySprite8.setVelocity(velocidad_X, velocidad_y)
    } else if (tipo == "enemigo2") {
        mySprite9 = sprites.create(assets.image`enemigo2`, SpriteKind.Enemy)
        sprites.setDataString(mySprite9, "tipo", "enemigo2")
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(columna, fila))
        mySprite9.setVelocity(velocidad_X, velocidad_y)
        mySprite9.setBounceOnWall(true)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    velocidadX = 200
    controller.moveSprite(pebble, velocidadX, 0)
    timer.after(2000, function () {
        velocidadX = 100
        controller.moveSprite(pebble, velocidadX, 0)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.obstaculo, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    timer.after(500, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Vida, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
})
function crearNivel () {
    if (nivelActual == 1) {
        tiles.setCurrentTilemap(tilemap`nivel2`)
        tiles.placeOnTile(pebble, tiles.getTileLocation(0, 1))
    }
    crearRecompensas()
    crearObstaculos()
    SpawnEnemigo()
}
function crearRecompensas () {
    for (let valor of tiles.getTilesByType(assets.tile`recompensa1`)) {
        mySprite4 = sprites.create(assets.image`Recompensa1`, SpriteKind.Vida)
        tiles.placeOnTile(mySprite4, valor)
        tiles.setTileAt(valor, assets.tile`baseTransparency16`)
    }
    for (let valor of tiles.getTilesByType(assets.tile`recompensa2`)) {
        mySprite5 = sprites.create(assets.image`recompensa2`, SpriteKind.Food)
        tiles.placeOnTile(mySprite5, valor)
        tiles.setTileAt(valor, assets.tile`baseTransparency16`)
    }
    for (let valor of tiles.getTilesByType(assets.tile`recompensa3`)) {
        mySprite6 = sprites.create(assets.image`recompensa3`, SpriteKind.Puntos)
        tiles.placeOnTile(mySprite6, valor)
        tiles.setTileAt(valor, assets.tile`baseTransparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
let direccion = 0
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let pebble: Sprite = null
let mySprite7: Sprite = null
let cantidadSaltos = 0
let velocidadX = 0
let MaxSalto = 0
let nivelActual = 0
scene.setBackgroundColor(9)
music.setVolume(255)
nivelActual = 1
MaxSalto = 2
velocidadX = 100
configurarPersonaje()
crearNivel()
game.onUpdate(function () {
    pebble.setImage(assets.image`Walking`)
    direccion = 1
    if (pebble.vx == 0) {
        pebble.setImage(assets.image`Idle`)
    }
    if (pebble.vy < 0) {
        pebble.setImage(assets.image`Jump`)
    } else if (pebble.vy > 0) {
        pebble.setImage(assets.image`Idle`)
    } else if (pebble.vx < 0) {
        pebble.setImage(assets.image`Walking`)
    }
    if (pebble.vx < 0) {
        direccion = -1
        pebble.image.flipX()
        pebble.setImage(pebble.image)
    }
})
