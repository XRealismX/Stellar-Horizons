// Tags for Staging in AE2
// AE2 Storage Tag
ServerEvents.tags('item', event => {
  // AE2 Storage Tag
  const ae2Storage = [
    // Main AE2 blocks
    'ae2:controller',
    'ae2:drive',
    'ae2:chest',
    'ae2:inscriber',
    'ae2:charger',
    'ae2:smooth_sky_stone_chest',
    'ae2:sky_stone_tank',
    'ae2:energy_cell',
    'ae2:dense_energy_cell',
    'ae2:creative_energy_cell',
    'ae2:spatial_io_port',
    'ae2:io_port',

    // Terminals
    'ae2:crafting_terminal',
    'ae2:terminal',
    'ae2:wireless_crafting_terminal',
    'ae2:wireless_terminal',
    'ae2:storage_monitor',

    // Storage cells
    'ae2:item_storage_cell_1k',
    'ae2:item_storage_cell_4k',
    'ae2:item_storage_cell_16k',
    'ae2:item_storage_cell_64k',
    'ae2:item_storage_cell_256k',
    'ae2:creative_storage_cell',
    'ae2:view_cell',

    // Fluid storage cells
    'ae2:fluid_storage_cell_1k',
    'ae2:fluid_storage_cell_4k',
    'ae2:fluid_storage_cell_16k',
    'ae2:fluid_storage_cell_64k',
    'ae2:fluid_storage_cell_256k',

    // Spatial storage
    'ae2:spatial_cell_component_2',
    'ae2:spatial_cell_component_16',
    'ae2:spatial_cell_component_128',
    'ae2:spatial_storage_cell_2',
    'ae2:spatial_storage_cell_16',
    'ae2:spatial_storage_cell_128',

    // Cables & components
    'ae2:fluix_glass_cable',
    'ae2:quartz_fiber',
    'ae2:fluix_covered_dense_cable',
    'ae2:fluix_smart_dense_cable',
    'ae2:quartz_glass',
    'ae2:toggle_bus',
    'ae2:inverted_toggle_bus',
    'ae2:cable_anchor',
    'ae2:fluix_smart_cable',
    'ae2:fluix_covered_cable',
    'ae2:quantum_link',
    'ae2:quantum_ring',
    'ae2:storage_bus',
    'ae2:cable_energy_acceptor',
    'ae2:wireless_access_point',
    'ae2:spatial_pylon',
    'ae2:cell_workbench',
    'ae2:energy_acceptor',
    'ae2:crank',
    'ae2:spatial_anchor',
    'ae2:wireless_receiver',

    // Cell components
    'ae2:cell_component_1k',
    'ae2:cell_component_4k',
    'ae2:cell_component_16k',
    'ae2:cell_component_64k',
    'ae2:cell_component_256k',

    // Housings
    'ae2:item_cell_housing',
    'ae2:fluid_cell_housing',

    // Materials
    'ae2:certus_quartz_crystal',
    'ae2:charged_certus_quartz_crystal',
    'ae2:printed_calculation_processor',
    'ae2:printed_engineering_processor',
    'ae2:printed_logic_processor',
    'ae2:printed_silicon',
    'ae2:logic_processor',
    'ae2:calculation_processor',
    'ae2:engineering_processor',
    'ae2:blank_pattern',
    'ae2:network_tool',
    'ae2:annihilation_core',
    'ae2:formation_core',
    'ae2:sky_dust',
    'ae2:ender_dust',
    'ae2:quantum_entangled_singularity',
    'ae2:singularity',
    'ae2:fluix_pearl',
    'ae2:fluix_dust',
    'ae2:fluix_crystal',
    'ae2:certus_quartz_dust',
    'ae2:silicon',

    // Paint & color tools
    'ae2:color_applicator',
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
    'ae2:black_lumen_paint_ball'
  ]

  const ae2LogisticsUpgrade = [
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
    'ae2:wireless_booster',
    'ae2:level_emitter',
    'ae2:condenser',
    'ae2:export_bus',
    'ae2:cable_interface',
    'ae2:me_p2p_tunnel',
    'ae2:redstone_p2p_tunnel',
    'ae2:item_p2p_tunnel',
    'ae2:fluid_p2p_tunnel',
    'ae2:fe_p2p_tunnel',
    'ae2:light_p2p_tunnel',
    'ae2:annihilation_plane',
    'ae2:interface',
    'ae2:export_bus',
    'ae2:import_bus',
    'ae2:level_emitter',
    'ae2:energy_level_emitter',
    'ae2:formation_plane',
    'ae2:light_detector'
  ]

  const ae2Autocrafting = [
    'ae2:molecular_assembler',
    'ae2:pattern_provider',
    'ae2:crafting_monitor',
    'ae2:256k_crafting_storage',
    'ae2:64k_crafting_storage',
    'ae2:16k_crafting_storage',
    'ae2:4k_crafting_storage',
    'ae2:1k_crafting_storage',
    'ae2:crafting_accelerator',
    'ae2:crafting_unit',
    'ae2:pattern_encoding_terminal',
    'ae2:pattern_access_terminal',
    'ae2:cable_pattern_provider',
    'ae2:conversion_monitor',
    'ae2:growth_accelerator'
  ]

  const ae2PersonalStorage = [
    'ae2:portable_item_cell_1k', 
    'ae2:portable_item_cell_4k', 
    'ae2:portable_item_cell_16k', 
    'ae2:portable_item_cell_64k', 
    'ae2:portable_item_cell_256k', 
    'ae2:portable_fluid_cell_1k', 
    'ae2:portable_fluid_cell_4k', 
    'ae2:portable_fluid_cell_16k', 
    'ae2:portable_fluid_cell_64k', 
    'ae2:portable_fluid_cell_256k'
  ]

  event.add('stellarhorizons:ae2_storage', ae2Storage)
  event.add('stellarhorizons:ae2_logistics_upgrade', ae2LogisticsUpgrade)
  event.add('stellarhorizons:ae2_autocrafting', ae2Autocrafting)
  event.add('stellarhorizons:ae2_personal_storage', ae2PersonalStorage)
})