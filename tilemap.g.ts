// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020505050505050505050505050503091010101010100a0a0a0a0f0a100a04090a0c0a0a0a100d0b0f0b0f0a0a0a04090a0a0a0a0a100a0a0f0a0f0a0f0a04090f1010100a100a0a0f0a0f0a0f0a04090f0a0a0a0a0a0a0a0f0a0a0e0f0a04090a100f100a0a0f0a0a0a10100f0a04090a0c0f0a0b0a0f0b0a0c0a0a0f0a04090a0c0f100a100f1010100a0c0f0a04090b0c0f0a0a0a0a0d0a0a0e0c0f0a04090a0c0f0a0f0a0a0a0c0a0d0b0f0a04090a0a0f0a0f0a0a10101010100f0a04090c0c0e0a0f0d0a0c0c0c0a0a0a0a04090c0f0a0b0f10101010101010100a04090d0f0a0b0a0a0a0a0b0a0a0a0a0b0408070707070707070707070707070706`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . 2 . 2 . 2 
2 . . . . . 2 . . 2 . 2 . . . 2 
2 . . . . . 2 . . 2 . 2 . 2 . 2 
2 2 2 2 2 . 2 . . 2 . 2 . 2 . 2 
2 2 . . . . . . . 2 . . . 2 . 2 
2 . 2 2 2 . . 2 . . . 2 2 2 . 2 
2 . . 2 . . . 2 . . . . . 2 . 2 
2 . . 2 2 . 2 2 2 2 2 . . 2 . 2 
2 . . 2 . . . . . . . . . 2 . 2 
2 . . 2 . 2 . . . . . . . 2 . 2 
2 . . 2 . 2 . . 2 2 2 2 2 2 . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . 2 . . 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.floorDarkDiamond,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
