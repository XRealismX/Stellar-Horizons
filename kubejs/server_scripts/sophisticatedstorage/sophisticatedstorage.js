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
        'sophisticatedstorage:diamond_to_netherite_tier_upgrade'
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