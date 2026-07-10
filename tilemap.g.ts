// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`5600090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000305060000000a0b0000000000000000000000000000000000000000000000000003050600000000000000000000000000000305060000000000000000000000000000000000000000000000000000000000000000000102080000000000000000000000000000000000000000000000000000000000030102080000000a0c0b00000a0c0b000000040008060000000000000000000000000000000000000000000000100000000305060000040007000000000000000a0b000000000306000003060000000000000000000304000007000000000000000000000000000004000008060000000000000000000000000000000000000000000000000000010208000004000700000000000000000000000003010800000108060000000000000003010000000700000000000000000000000000000400000008060000000000000000000000000000000f00000e000305060d0d0400070d0d0400070d000d00000000000000000301000700000400080600000000000304000000000700000000000000000000000000000400000000080600000000000000000505050505050505050505010208050504000705050400070505050505050505050505040000070909040000080505050505010000000000070909090909090909090909090909040000000000070505050505050505`, img`
......................................................................................
......................................................................................
......................................................................................
.....................222...22.........................222..............222............
.....................222.............................2222...222..222...2222...........
................222..222.......22....22..22.........22222..............22222..........
................222..222............222..222.......222222..............222222.........
...........222..222..222...........2222..2222.....2222222..............2222222........
222222222222222222222222222222222222222..2222222222222222..............222222222222222
`, [myTiles.transparency16,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles1,sprites.builtin.forestTiles9,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.dungeon.hazardLava1,sprites.builtin.forestTiles21,sprites.builtin.forestTiles23,sprites.builtin.forestTiles22,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "obstaculo1":
            case "tile3":return tile3;
            case "recompensa1":
            case "tile4":return tile4;
            case "recompensa2":
            case "tile5":return tile5;
            case "recompensa3":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
