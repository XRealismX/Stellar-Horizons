// Sophisticated Storage Changes with Recipes

// Removing Recipes for Overpowered Upgrades
ServerEvents.recipes(event => {
    const itemsToRemove = [
        'sophisticatedstorage:auto_blasting_upgrade',
        'sophisticatedstorage:crafting_upgrade',
        'sophisticatedstorage:stonecutter_upgrade',
        'sophisticatedstorage:stack_upgrade_omega_tier',
        'sophisticatedstorage:compression_upgrade',
        'sophisticatedstorage:survival_infinity_upgrade',
        'sophisticatedstorage:alchemy_upgrade',
        'sophisticatedstorage:compacting_upgrade',
        'sophisticatedstorage:advanced_compacting_upgrade',
        'sophisticatedstorage:void_upgrade',
        'sophisticatedstorage:advanced_void_upgrade',
        'sophisticatedstorage:smelting_upgrade',
        'sophisticatedstorage:auto_smelting_upgrade',
        'sophisticatedstorage:smoking_upgrade',
        'sophisticatedstorage:auto_smoking_upgrade',
        'sophisticatedstorage:blasting_upgrade',
        'sophisticatedstorage:stack_upgrade_tier_1',
        'sophisticatedstorage:stack_upgrade_tier_1_plus',
        'sophisticatedstorage:stack_upgrade_tier_2',
        'sophisticatedstorage:stack_upgrade_tier_3',
        'sophisticatedstorage:stack_upgrade_tier_4',
        'sophisticatedstorage:stack_upgrade_tier_5',
        'sophisticatedstorage:advanced_alchemy_upgrade',
        'sophisticatedstorage:stack_downgrade_tier_1',
        'sophisticatedstorage:stack_downgrade_tier_2',
        'sophisticatedstorage:stack_downgrade_tier_3',
        'sophisticatedstorage:basic_to_copper_tier_upgrade',
        'sophisticatedstorage:basic_to_iron_tier_upgrade',
        'sophisticatedstorage:basic_to_gold_tier_upgrade',
        'sophisticatedstorage:basic_to_diamond_tier_upgrade',
        'sophisticatedstorage:basic_to_netherite_tier_upgrade',
        'sophisticatedstorage:copper_to_iron_tier_upgrade',
        'sophisticatedstorage:copper_to_gold_tier_upgrade',
        'sophisticatedstorage:copper_to_diamond_tier_upgrade',
        'sophisticatedstorage:copper_to_netherite_tier_upgrade',
        'sophisticatedstorage:iron_to_gold_tier_upgrade',
        'sophisticatedstorage:iron_to_diamond_tier_upgrade',
        'sophisticatedstorage:iron_to_netherite_tier_upgrade',
        'sophisticatedstorage:gold_to_diamond_tier_upgrade',
        'sophisticatedstorage:gold_to_netherite_tier_upgrade',
        'sophisticatedstorage:diamond_to_netherite_tier_upgrade',
    ];

    itemsToRemove.forEach(item => {
        event.remove({ output: item });
    });

    // Recipes for Upgrades
    // Basic to Copper Tier Upgrade Recipes
    event.shaped('sophisticatedstorage:basic_to_copper_tier_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:copper_block',
        B: 'minecraft:lever'
    });

    // Basic to Iron Tier Upgrade Recipes
    event.shaped('sophisticatedstorage:basic_to_iron_tier_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:lever'
    });
    event.shaped('sophisticatedstorage:basic_to_iron_tier_upgrade', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:iron_block',
        B: 'sophisticatedstorage:basic_to_copper_tier_upgrade'
    });

    // Basic to Gold Tier Upgrade Recipes
    event.shaped('sophisticatedstorage:basic_to_gold_tier_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:gold_block',
        B: 'sophisticatedstorage:basic_to_iron_tier_upgrade'
    });

    // Basic to Diamond Tier Upgrade Recipes
    event.shaped('sophisticatedstorage:basic_to_diamond_tier_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:diamond_block',
        B: 'sophisticatedstorage:basic_to_gold_tier_upgrade'
    });

    // Basic to Netherite Tier Upgrade Recipes
    event.shapeless('sophisticatedstorage:basic_to_netherite_tier_upgrade', [
        'sophisticatedstorage:basic_to_diamond_tier_upgrade',
        'minecraft:netherite_block'
    ]);

    // Copper to Iron Tier Upgrade Recipes
    event.shaped('sophisticatedstorage:copper_to_iron_tier_upgrade', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:iron_block',
        B: 'minecraft:lever'
    });

    // Copper to Gold Tier Upgrade Recipes
    event.shaped('sophisticatedstorage:copper_to_gold_tier_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:gold_block',
        B: 'sophisticatedstorage:copper_to_iron_tier_upgrade'
    });

    // Copper to Diamond Tier Upgrade Recipes
    event.shaped('sophisticatedstorage:copper_to_diamond_tier_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:diamond_block',
        B: 'sophisticatedstorage:copper_to_gold_tier_upgrade'
    });

    // Copper to Netherite Tier Upgrade Recipes
    event.shapeless('sophisticatedstorage:copper_to_netherite_tier_upgrade', [
        'sophisticatedstorage:copper_to_diamond_tier_upgrade',
        'minecraft:netherite_block'
    ]);

    // Iron to Gold Tier Upgrade Recipes
    event.shaped('sophisticatedstorage:iron_to_gold_tier_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:gold_block',
        B: 'minecraft:lever'
    });

    // Iron to Diamond Tier Upgrade Recipes
    event.shaped('sophisticatedstorage:iron_to_diamond_tier_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:diamond_block',
        B: 'sophisticatedstorage:iron_to_gold_tier_upgrade'
    });

    // Iron to Netherite Tier Upgrade Recipes
    event.shapeless('sophisticatedstorage:iron_to_netherite_tier_upgrade', [
        'sophisticatedstorage:iron_to_diamond_tier_upgrade',
        'minecraft:netherite_block'
    ]);

    // Gold to Diamond Tier Upgrade Recipes
    event.shaped('sophisticatedstorage:gold_to_diamond_tier_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:diamond_block',
        B: 'minecraft:lever'
    });

    // Gold to Netherite Tier Upgrade Recipes
    event.shapeless('sophisticatedstorage:gold_to_netherite_tier_upgrade', [
        'sophisticatedstorage:gold_to_diamond_tier_upgrade',
        'minecraft:netherite_block'
    ]);

    // Diamond to Netherite Tier Upgrade Recipes
    event.shapeless('sophisticatedstorage:diamond_to_netherite_tier_upgrade', [
        'minecraft:lever',
        'minecraft:netherite_block'
    ]);
});

ServerEvents.recipes(function(event) {

    var cond = function(id) {
        return [{ type: 'almostunified:conditional', conditions_met: true, original_conditions: [{ type: 'sophisticatedcore:item_enabled', itemRegistryName: id }] }]
    }

    var makeSurround = function(id, keyChar, tag, base, result) {
        event.remove({ id: id })
        var key = { S: { item: base } }
        key[keyChar] = { tag: tag }
        event.custom({
            'neoforge:conditions': cond(result),
            type: 'sophisticatedstorage:storage_tier_upgrade',
            category: 'misc',
            key: key,
            pattern: [keyChar+keyChar+keyChar, keyChar+'S'+keyChar, keyChar+keyChar+keyChar],
            result: { count: 1, id: result }
        })
    }

    var makeCross = function(id, keyChar, tag, base, result) {
        event.remove({ id: id })
        var key = { S: { item: base } }
        key[keyChar] = { tag: tag }
        event.custom({
            'neoforge:conditions': cond(result),
            type: 'sophisticatedstorage:storage_tier_upgrade',
            category: 'misc',
            key: key,
            pattern: [' '+keyChar+' ', keyChar+'S'+keyChar, ' '+keyChar+' '],
            result: { count: 1, id: result }
        })
    }

    var makeShapeless = function(id, base, tag, result) {
        event.remove({ id: id })
        event.custom({
            'neoforge:conditions': cond(result),
            type: 'sophisticatedstorage:storage_tier_upgrade_shapeless',
            category: 'misc',
            ingredients: [{ item: base }, { tag: tag }],
            result: { count: 1, id: result }
        })
    }

    // ── COPPER creation (ingots → blocks) ──────────────────────────────────
    makeSurround('sophisticatedstorage:copper_chest',            'C', 'c:storage_blocks/copper', 'sophisticatedstorage:chest',            'sophisticatedstorage:copper_chest')
    makeSurround('sophisticatedstorage:copper_barrel',           'C', 'c:storage_blocks/copper', 'sophisticatedstorage:barrel',           'sophisticatedstorage:copper_barrel')
    makeSurround('sophisticatedstorage:copper_shulker_box',      'C', 'c:storage_blocks/copper', 'sophisticatedstorage:shulker_box',      'sophisticatedstorage:copper_shulker_box')
    makeSurround('sophisticatedstorage:limited_copper_barrel_1', 'C', 'c:storage_blocks/copper', 'sophisticatedstorage:limited_barrel_1', 'sophisticatedstorage:limited_copper_barrel_1')
    makeSurround('sophisticatedstorage:limited_copper_barrel_2', 'C', 'c:storage_blocks/copper', 'sophisticatedstorage:limited_barrel_2', 'sophisticatedstorage:limited_copper_barrel_2')
    makeSurround('sophisticatedstorage:limited_copper_barrel_3', 'C', 'c:storage_blocks/copper', 'sophisticatedstorage:limited_barrel_3', 'sophisticatedstorage:limited_copper_barrel_3')
    makeSurround('sophisticatedstorage:limited_copper_barrel_4', 'C', 'c:storage_blocks/copper', 'sophisticatedstorage:limited_barrel_4', 'sophisticatedstorage:limited_copper_barrel_4')

    // ── IRON from vanilla (ingots → blocks, 8-surround) ────────────────────
    makeSurround('sophisticatedstorage:iron_chest',            'I', 'c:storage_blocks/iron', 'sophisticatedstorage:chest',            'sophisticatedstorage:iron_chest')
    makeSurround('sophisticatedstorage:iron_barrel',           'I', 'c:storage_blocks/iron', 'sophisticatedstorage:barrel',           'sophisticatedstorage:iron_barrel')
    makeSurround('sophisticatedstorage:iron_shulker_box',      'I', 'c:storage_blocks/iron', 'sophisticatedstorage:shulker_box',      'sophisticatedstorage:iron_shulker_box')
    makeSurround('sophisticatedstorage:limited_iron_barrel_1', 'I', 'c:storage_blocks/iron', 'sophisticatedstorage:limited_barrel_1', 'sophisticatedstorage:limited_iron_barrel_1')
    makeSurround('sophisticatedstorage:limited_iron_barrel_2', 'I', 'c:storage_blocks/iron', 'sophisticatedstorage:limited_barrel_2', 'sophisticatedstorage:limited_iron_barrel_2')
    makeSurround('sophisticatedstorage:limited_iron_barrel_3', 'I', 'c:storage_blocks/iron', 'sophisticatedstorage:limited_barrel_3', 'sophisticatedstorage:limited_iron_barrel_3')
    makeSurround('sophisticatedstorage:limited_iron_barrel_4', 'I', 'c:storage_blocks/iron', 'sophisticatedstorage:limited_barrel_4', 'sophisticatedstorage:limited_iron_barrel_4')

    // ── IRON from copper (ingots → blocks, cross) ──────────────────────────
    makeCross('sophisticatedstorage:iron_chest_from_copper_chest',                       'I', 'c:storage_blocks/iron', 'sophisticatedstorage:copper_chest',            'sophisticatedstorage:iron_chest')
    makeCross('sophisticatedstorage:iron_barrel_from_copper_barrel',                     'I', 'c:storage_blocks/iron', 'sophisticatedstorage:copper_barrel',           'sophisticatedstorage:iron_barrel')
    makeCross('sophisticatedstorage:iron_shulker_box_from_copper_shulker_box',           'I', 'c:storage_blocks/iron', 'sophisticatedstorage:copper_shulker_box',      'sophisticatedstorage:iron_shulker_box')
    makeCross('sophisticatedstorage:limited_iron_barrel_1_from_limited_copper_barrel_1', 'I', 'c:storage_blocks/iron', 'sophisticatedstorage:limited_copper_barrel_1', 'sophisticatedstorage:limited_iron_barrel_1')
    makeCross('sophisticatedstorage:limited_iron_barrel_2_from_limited_copper_barrel_2', 'I', 'c:storage_blocks/iron', 'sophisticatedstorage:limited_copper_barrel_2', 'sophisticatedstorage:limited_iron_barrel_2')
    makeCross('sophisticatedstorage:limited_iron_barrel_3_from_limited_copper_barrel_3', 'I', 'c:storage_blocks/iron', 'sophisticatedstorage:limited_copper_barrel_3', 'sophisticatedstorage:limited_iron_barrel_3')
    makeCross('sophisticatedstorage:limited_iron_barrel_4_from_limited_copper_barrel_4', 'I', 'c:storage_blocks/iron', 'sophisticatedstorage:limited_copper_barrel_4', 'sophisticatedstorage:limited_iron_barrel_4')

    // ── GOLD (ingots → blocks) ─────────────────────────────────────────────
    makeSurround('sophisticatedstorage:gold_chest',            'G', 'c:storage_blocks/gold', 'sophisticatedstorage:iron_chest',            'sophisticatedstorage:gold_chest')
    makeSurround('sophisticatedstorage:gold_barrel',           'G', 'c:storage_blocks/gold', 'sophisticatedstorage:iron_barrel',           'sophisticatedstorage:gold_barrel')
    makeSurround('sophisticatedstorage:gold_shulker_box',      'G', 'c:storage_blocks/gold', 'sophisticatedstorage:iron_shulker_box',      'sophisticatedstorage:gold_shulker_box')
    makeSurround('sophisticatedstorage:limited_gold_barrel_1', 'G', 'c:storage_blocks/gold', 'sophisticatedstorage:limited_iron_barrel_1', 'sophisticatedstorage:limited_gold_barrel_1')
    makeSurround('sophisticatedstorage:limited_gold_barrel_2', 'G', 'c:storage_blocks/gold', 'sophisticatedstorage:limited_iron_barrel_2', 'sophisticatedstorage:limited_gold_barrel_2')
    makeSurround('sophisticatedstorage:limited_gold_barrel_3', 'G', 'c:storage_blocks/gold', 'sophisticatedstorage:limited_iron_barrel_3', 'sophisticatedstorage:limited_gold_barrel_3')
    makeSurround('sophisticatedstorage:limited_gold_barrel_4', 'G', 'c:storage_blocks/gold', 'sophisticatedstorage:limited_iron_barrel_4', 'sophisticatedstorage:limited_gold_barrel_4')

    // ── DIAMOND (gems → blocks) ────────────────────────────────────────────
    makeSurround('sophisticatedstorage:diamond_chest',            'D', 'c:storage_blocks/diamond', 'sophisticatedstorage:gold_chest',            'sophisticatedstorage:diamond_chest')
    makeSurround('sophisticatedstorage:diamond_barrel',           'D', 'c:storage_blocks/diamond', 'sophisticatedstorage:gold_barrel',           'sophisticatedstorage:diamond_barrel')
    makeSurround('sophisticatedstorage:diamond_shulker_box',      'D', 'c:storage_blocks/diamond', 'sophisticatedstorage:gold_shulker_box',      'sophisticatedstorage:diamond_shulker_box')
    makeSurround('sophisticatedstorage:limited_diamond_barrel_1', 'D', 'c:storage_blocks/diamond', 'sophisticatedstorage:limited_gold_barrel_1', 'sophisticatedstorage:limited_diamond_barrel_1')
    makeSurround('sophisticatedstorage:limited_diamond_barrel_2', 'D', 'c:storage_blocks/diamond', 'sophisticatedstorage:limited_gold_barrel_2', 'sophisticatedstorage:limited_diamond_barrel_2')
    makeSurround('sophisticatedstorage:limited_diamond_barrel_3', 'D', 'c:storage_blocks/diamond', 'sophisticatedstorage:limited_gold_barrel_3', 'sophisticatedstorage:limited_diamond_barrel_3')
    makeSurround('sophisticatedstorage:limited_diamond_barrel_4', 'D', 'c:storage_blocks/diamond', 'sophisticatedstorage:limited_gold_barrel_4', 'sophisticatedstorage:limited_diamond_barrel_4')

    // ── NETHERITE (ingots → blocks, shapeless) ─────────────────────────────
    makeShapeless('sophisticatedstorage:netherite_chest',            'sophisticatedstorage:diamond_chest',            'c:storage_blocks/netherite', 'sophisticatedstorage:netherite_chest')
    makeShapeless('sophisticatedstorage:netherite_barrel',           'sophisticatedstorage:diamond_barrel',           'c:storage_blocks/netherite', 'sophisticatedstorage:netherite_barrel')
    makeShapeless('sophisticatedstorage:netherite_shulker_box',      'sophisticatedstorage:diamond_shulker_box',      'c:storage_blocks/netherite', 'sophisticatedstorage:netherite_shulker_box')
    makeShapeless('sophisticatedstorage:limited_netherite_barrel_1', 'sophisticatedstorage:limited_diamond_barrel_1', 'c:storage_blocks/netherite', 'sophisticatedstorage:limited_netherite_barrel_1')
    makeShapeless('sophisticatedstorage:limited_netherite_barrel_2', 'sophisticatedstorage:limited_diamond_barrel_2', 'c:storage_blocks/netherite', 'sophisticatedstorage:limited_netherite_barrel_2')
    makeShapeless('sophisticatedstorage:limited_netherite_barrel_3', 'sophisticatedstorage:limited_diamond_barrel_3', 'c:storage_blocks/netherite', 'sophisticatedstorage:limited_netherite_barrel_3')
    makeShapeless('sophisticatedstorage:limited_netherite_barrel_4', 'sophisticatedstorage:limited_diamond_barrel_4', 'c:storage_blocks/netherite', 'sophisticatedstorage:limited_netherite_barrel_4')

})