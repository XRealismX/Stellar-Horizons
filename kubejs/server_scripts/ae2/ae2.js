// Tags for Staging in AE2
ServerEvents.tags('item', event => {
  const ae2Foundation = [
    'ae2:guide',
    'ae2:network_tool',
    'ae2:memory_card',
    'ae2:energy_acceptor',
    'ae2:inscriber',
    'ae2:condenser',
    'ae2:charger',
    'ae2:growth_accelerator',
    'ae2:meteorite_compass',
    'ae2:certus_quartz_crystal',
    'ae2:charged_certus_quartz_crystal',
    'ae2:certus_quartz_dust',
    'ae2:silicon',
    'ae2:matter_ball',
    'ae2:fluix_crystal',
    'ae2:fluix_dust',
    'ae2:ender_dust',
    'ae2:sky_dust',
    'ae2:calculation_processor_press', 
    'ae2:engineering_processor_press',
    'ae2:logic_processor_press',
    'ae2:silicon_press',
    'ae2:logic_processor',
    'ae2:calculation_processor',
    'ae2:engineering_processor',
    'ae2:printed_calculation_processor',
    'ae2:printed_engineering_processor',
    'ae2:printed_logic_processor',
    'ae2:printed_silicon',
    'ae2:monitor',
    'ae2:semi_dark_monitor',
    'ae2:dark_monitor',
    'ae2:name_press',
    'ae2:spatial_cell_component_2',
    'ae2:spatial_cell_component_16',
    'ae2:spatial_cell_component_128',
    'ae2:cell_component_1k',
    'ae2:cell_component_4k',
    'ae2:cell_component_16k',
    'ae2:cell_component_64k',
    'ae2:cell_component_256k',
    'ae2:annihilation_core',
    'ae2:formation_core',
    'ae2:small_quartz_bud',
    'ae2:medium_quartz_bud',
    'ae2:large_quartz_bud',
    'ae2:quartz_cluster',
    'ae2:flawless_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:damaged_budding_quartz',
    'ae2:quartz_block',
    'ae2:cut_quartz_block',
    'ae2:smooth_quartz_block',
    'ae2:quartz_bricks',
    'ae2:quartz_pillar',
    'ae2:chiseled_quartz_block',
    'ae2:quartz_stairs',
    'ae2:cut_quartz_stairs',
    'ae2:smooth_quartz_stairs',
    'ae2:quartz_brick_stairs',
    'ae2:chiseled_quartz_stairs',
    'ae2:quartz_pillar_stairs',
    'ae2:quartz_wall',
    'ae2:cut_quartz_wall',
    'ae2:smooth_quartz_wall',
    'ae2:quartz_brick_wall',
    'ae2:chiseled_quartz_wall',
    'ae2:quartz_pillar_wall',
    'ae2:quartz_slab',
    'ae2:cut_quartz_slab',
    'ae2:smooth_quartz_slab',
    'ae2:quartz_brick_slab',
    'ae2:chiseled_quartz_slab',
    'ae2:quartz_pillar_slab',
    'ae2:fluix_block',
    'ae2:fluix_stairs',
    'ae2:fluix_slab',
    'ae2:fluix_wall',
    'ae2:sky_stone_block',
    'ae2:smooth_sky_stone_block',
    'ae2:sky_stone_brick',
    'ae2:sky_stone_small_brick',
    'ae2:sky_stone_chest',
    'ae2:smooth_sky_stone_chest',
    'ae2:sky_stone_tank',
    'ae2:mysterious_cube',
    'ae2:not_so_mysterious_cube',
    'ae2:sky_stone_stairs',
    'ae2:smooth_sky_stone_stairs',
    'ae2:sky_stone_brick_stairs',
    'ae2:sky_stone_small_brick_stairs',
    'ae2:sky_stone_slab',
    'ae2:smooth_sky_stone_slab',
    'ae2:sky_stone_brick_slab',
    'ae2:sky_stone_small_brick_slab',
    'ae2:sky_stone_wall',
    'ae2:smooth_sky_stone_wall',
    'ae2:sky_stone_brick_wall',
    'ae2:sky_stone_small_brick_wall',
    'ae2:quartz_glass',
    'ae2:quartz_vibrant_glass',
    'ae2:crank',
    'ae2:quartz_fixture',
    'ae2:tiny_tnt',
    'ae2:fluix_glass_cable',
    'ae2:cable_anchor',
    'ae2:quartz_fiber',
    'ae2:white_paint_ball',
    'ae2:orange_paint_ball',
    'ae2:magenta_paint_ball',
    'ae2:light_blue_paint_ball',
    'ae2:yellow_paint_ball',
    'ae2:lime_paint_ball',
    'ae2:pink_paint_ball',
    'ae2:gray_paint_ball',
    'ae2:light_gray_paint_ball',
    'ae2:cyan_paint_ball',
    'ae2:purple_paint_ball',
    'ae2:blue_paint_ball',
    'ae2:brown_paint_ball',
    'ae2:green_paint_ball',
    'ae2:red_paint_ball',
    'ae2:black_paint_ball',
    'ae2:white_lumen_paint_ball',
    'ae2:orange_lumen_paint_ball',
    'ae2:magenta_lumen_paint_ball',
    'ae2:light_blue_lumen_paint_ball',
    'ae2:yellow_lumen_paint_ball',
    'ae2:lime_lumen_paint_ball',
    'ae2:pink_lumen_paint_ball',
    'ae2:gray_lumen_paint_ball',
    'ae2:light_gray_lumen_paint_ball',
    'ae2:cyan_lumen_paint_ball',
    'ae2:purple_lumen_paint_ball',
    'ae2:blue_lumen_paint_ball',
    'ae2:brown_lumen_paint_ball',
    'ae2:green_lumen_paint_ball',
    'ae2:red_lumen_paint_ball',
    'ae2:black_lumen_paint_ball',
    'ae2:color_applicator'
  ]
  
  const ae2Storage = [
    'ae2:controller',
    'ae2:creative_storage_cell',
    'ae2:view_cell',
    'ae2:item_storage_cell_1k',
    'ae2:item_storage_cell_4k',
    'ae2:item_storage_cell_16k',
    'ae2:item_storage_cell_64k',
    'ae2:item_storage_cell_256k',
    'ae2:fluid_storage_cell_1k',
    'ae2:fluid_storage_cell_4k',
    'ae2:fluid_storage_cell_16k',
    'ae2:fluid_storage_cell_64k',
    'ae2:fluid_storage_cell_256k',
    'ae2:spatial_storage_cell_2',
    'ae2:spatial_storage_cell_16',
    'ae2:spatial_storage_cell_128',
    'ae2:chest',
    'ae2:drive',
    'ae2:spatial_io_port',
    'ae2:spatial_pylon',
    'ae2:quantum_ring',
    'ae2:quantum_link',
    'ae2:singularity',
    'ae2:quantum_entangled_singularity',
    'ae2:fluix_pearl',
    'ae2:storage_bus',
    'ae2:item_cell_housing',
    'ae2:fluid_cell_housing',
    'ae2:energy_cell',
    'ae2:dense_energy_cell',
    'ae2:creative_energy_cell',
    'ae2:crafting_terminal',
    'ae2:terminal',
    'ae2:storage_monitor',
    'ae2:cell_workbench',
    'ae2:io_port'
  ]

  const ae2PortableStorage = [
    'ae2:portable_item_cell_1k',
    'ae2:portable_item_cell_4k',
    'ae2:portable_item_cell_16k',
    'ae2:portable_item_cell_64k',
    'ae2:portable_item_cell_256k',
    'ae2:portable_fluid_cell_1k',
    'ae2:portable_fluid_cell_4k',
    'ae2:portable_fluid_cell_16k',
    'ae2:portable_fluid_cell_64k',
    'ae2:portable_fluid_cell_256k',
    'ae2:wireless_access_point',
    'ae2:wireless_terminal',
    'ae2:wireless_crafting_terminal',
    'ae2:wireless_receiver'
  ]

  const ae2Logistics = [
    'ae2:fluix_smart_cable',
    'ae2:fluix_covered_cable',
    'ae2:fluix_covered_dense_cable',
    'ae2:fluix_smart_dense_cable',
    'ae2:inverted_toggle_bus',
    'ae2:toggle_bus',
    'ae2:storage_bus', 
    'ae2:import_bus', 
    'ae2:export_bus', 
    'ae2:level_emitter', 
    'ae2:energy_level_emitter',
    'ae2:light_detector',
    'ae2:annihilation_plane',
    'ae2:formation_plane',
    'ae2:cable_interface',
    'ae2:cable_energy_acceptor',
    'ae2:me_p2p_tunnel',
    'ae2:redstone_p2p_tunnel',
    'ae2:item_p2p_tunnel',
    'ae2:fluid_p2p_tunnel',
    'ae2:fe_p2p_tunnel',
    'ae2:light_p2p_tunnel',
    'ae2:interface'
  ]

  const ae2Upgrades = [
    'ae2:basic_card',
    'ae2:redstone_card',
    'ae2:capacity_card',
    'ae2:void_card',
    'ae2:advanced_card',
    'ae2:fuzzy_card',
    'ae2:speed_card',
    'ae2:inverter_card',
    'ae2:crafting_card',
    'ae2:equal_distribution_card',
    'ae2:energy_card',
    'ae2:wireless_booster'
  ]

  const ae2Autocrafting = [
    'ae2:crafting_unit', 
    'ae2:crafting_accelerator',
    'ae2:1k_crafting_storage',
    'ae2:4k_crafting_storage',
    'ae2:16k_crafting_storage',
    'ae2:64k_crafting_storage',
    'ae2:256k_crafting_storage',
    'ae2:crafting_monitor',
    'ae2:pattern_provider',
    'ae2:molecular_assembler',
    'ae2:blank_pattern',
    'ae2:pattern_encoding_terminal',
    'ae2:cable_pattern_provider',
    'ae2:pattern_access_terminal',
    'ae2:conversion_monitor',
    'ae2:spatial_anchor'
  ]

  event.add('stellarhorizons:ae2_foundation', ae2Foundation)
  event.add('stellarhorizons:ae2_storage', ae2Storage)
  event.add('stellarhorizons:ae2_portable_storage', ae2PortableStorage)
  event.add('stellarhorizons:ae2_logistics', ae2Logistics)
  event.add('stellarhorizons:ae2_autocrafting', ae2Autocrafting)
  event.add('stellarhorizons:ae2_upgrades', ae2Upgrades)
})

// Remove recipes for items that shouldn't be obtainable in the pack
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:vibration_chamber' })
  event.remove({ id: 'ae2:crystal_resonance_generator' })
  event.remove({ id: 'ae2:matter_cannon' })
  event.remove({ id: 'ae2:entropy_manipulator' })
  event.remove({ id: 'ae2:charged_staff' })
  event.remove({ id: 'ae2:fluix_upgrade_smithing_template' })
  event.remove({ id: 'ae2:nether_quartz_sword' })
  event.remove({ id: 'ae2:certus_quartz_sword' })
  event.remove({ id: 'ae2:fluix_sword' })
  event.remove({ id: 'ae2:nether_quartz_hoe' })
  event.remove({ id: 'ae2:certus_quartz_shovel' })
  event.remove({ id: 'ae2:fluix_shovel' })
  event.remove({ id: 'ae2:fluix_hoe' })
  event.remove({ id: 'ae2:certus_quartz_axe' })
  event.remove({ id: 'ae2:nether_quartz_axe' })
  event.remove({ id: 'ae2:nether_quartz_shovel' })
  event.remove({ id: 'ae2:certus_quartz_pickaxe' })
  event.remove({ id: 'ae2:certus_quartz_hoe' })
  event.remove({ id: 'ae2:fluix_axe' })
  event.remove({ id: 'ae2:nether_quartz_pickaxe' })
  event.remove({ id: 'ae2:fluix_pickaxe' })
});