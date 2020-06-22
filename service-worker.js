/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dc5a55cbee62c948b9b157f39a1d51d2"
  },
  {
    "url": "api/ape/annotated.html",
    "revision": "49f508037a1d355e2e185435477f05a6"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_data_helper-members.html",
    "revision": "6e5882e713d4e64cd7b81111dba93378"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_data_helper.html",
    "revision": "f58906d6761c3c019f0980ba21b6cbc7"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_events_helper-members.html",
    "revision": "5b66991d344740bcedbbe2ad0cedba24"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_events_helper.html",
    "revision": "5f2480b5b096df6651edc4f6a0c9032a"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_knx_client_helper-members.html",
    "revision": "fcc388435c0aaeb86e3375a3d80e5031"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_knx_client_helper.html",
    "revision": "e05d2db6245a256a918d5e5e015c7efa"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_module_helper-members.html",
    "revision": "038bfba6384a0dfed2c88e44c18d2af0"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_module_helper.html",
    "revision": "144fbb1f3823644e012c10e520118b58"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_modules_manager-members.html",
    "revision": "b962fe41c0b0e4755a4d870666af26a0"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_modules_manager.html",
    "revision": "41422899897cdff3ca1f1fd7c4959797"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_mqtt_client_helper-members.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_mqtt_client_helper.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_net_helper-members.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_net_helper.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper-members.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_scheduler_helper-members.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_scheduler_helper.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_serial_port_helper-members.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_serial_port_helper.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_settings_helper-members.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_settings_helper.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_store_helper-members.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_store_helper.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_tcp_client_helper-members.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_tcp_client_helper.html",
    "revision": "10269c5ef32990ee823843279f1e5ac4"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_udp_client_helper-members.html",
    "revision": "68933c8f616a89248a6975e0cb5a6c0d"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_udp_client_helper.html",
    "revision": "4ce58ad6db8c2a011e4e63d8183b5bc8"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_module_parameter-members.html",
    "revision": "7511b18c0ed5d6a8c0a3cc3369565884"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_module_parameter.html",
    "revision": "9fabc32e513b9a79041d14a3d0dfb1e8"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_module-members.html",
    "revision": "32f1b424b5ef8b0ca4179ce08a72737f"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_module.html",
    "revision": "d393f90e14a6af213059518c52065e54"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_value_statistics_1_1_stat_value-members.html",
    "revision": "3023a37585420d1aead94e4f84e5a334"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_value_statistics_1_1_stat_value.html",
    "revision": "395ad003b6344ff8ab2257c58c7144d0"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_value_statistics-members.html",
    "revision": "cfccdbee2786672c054d94f8b7f030ac"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_value_statistics.html",
    "revision": "d118b0415078b871d8af09794f4c889c"
  },
  {
    "url": "api/ape/class_home_genie_1_1_program_helper_base-members.html",
    "revision": "0c10595c94b5978da152e215ea7ccf1c"
  },
  {
    "url": "api/ape/class_home_genie_1_1_program_helper_base.html",
    "revision": "b62e1689b5068926a35cd663dccf987e"
  },
  {
    "url": "api/ape/classes.html",
    "revision": "ec163dd0a09b6e96b299556e62c99018"
  },
  {
    "url": "api/ape/dir_5894cb8a968fa5090f014020b009b0ff.html",
    "revision": "e182283482e03ac8787150614f1b9ccd"
  },
  {
    "url": "api/ape/dir_7ec5998ff1c39af43163d33c02ae0cfc.html",
    "revision": "b915cee3e5dfcb5d8068a172051c00fa"
  },
  {
    "url": "api/ape/dir_8ee72d76c74e8df7ce2f1fcd769ac0c3.html",
    "revision": "c65b5cc25f42d88e79c3e01539e7f135"
  },
  {
    "url": "api/ape/dir_a90b7b186474f4918322abeebe1fee11.html",
    "revision": "29bbcd2fd8dd0dc0f54634a70d2c6d85"
  },
  {
    "url": "api/ape/doxygen.css",
    "revision": "e2ff72818d3b89c2b00ca8169658a4f6"
  },
  {
    "url": "api/ape/dynsections.js",
    "revision": "2c01ff94ad6551755416052b94fbfb13"
  },
  {
    "url": "api/ape/functions_c.html",
    "revision": "c63c859cc30c440a4a1eaec23bac9948"
  },
  {
    "url": "api/ape/functions_d.html",
    "revision": "ef6c91392ae13c51d480e42893b6666b"
  },
  {
    "url": "api/ape/functions_e.html",
    "revision": "301b47ea057e4203fd64a7152eda50e6"
  },
  {
    "url": "api/ape/functions_f.html",
    "revision": "8aaf7edc57e43752dc2514e04be7645d"
  },
  {
    "url": "api/ape/functions_func.html",
    "revision": "c0f99250daa3e76a0a8ba4b2dfef4fb8"
  },
  {
    "url": "api/ape/functions_g.html",
    "revision": "c08e3fd944fff89fc7825e12b708bc2d"
  },
  {
    "url": "api/ape/functions_h.html",
    "revision": "0eb669cffe1d78d5ca82fdc32f8ee22a"
  },
  {
    "url": "api/ape/functions_i.html",
    "revision": "59bfa58fa2683bbc96347e23e2189e0b"
  },
  {
    "url": "api/ape/functions_l.html",
    "revision": "7152f4366f936fdb4738cfc5a36d482a"
  },
  {
    "url": "api/ape/functions_m.html",
    "revision": "14c9af5d2d1e9036a390b3d0b34918ff"
  },
  {
    "url": "api/ape/functions_n.html",
    "revision": "3dfe896edf4129354c811050e34fce64"
  },
  {
    "url": "api/ape/functions_o.html",
    "revision": "b3855b6934fcf5ff3e618495e2de9507"
  },
  {
    "url": "api/ape/functions_p.html",
    "revision": "fc1a969200f1774ea0441d45ef3ed90b"
  },
  {
    "url": "api/ape/functions_prop.html",
    "revision": "78618c5feba5c4695a3386b384d1bc14"
  },
  {
    "url": "api/ape/functions_r.html",
    "revision": "75fc9dc321be78fa6b7802d3ed054dcd"
  },
  {
    "url": "api/ape/functions_s.html",
    "revision": "2279a6cc214801d5420021c5b65c5cfc"
  },
  {
    "url": "api/ape/functions_t.html",
    "revision": "143a24aed3f6785a73262336cc5fcac0"
  },
  {
    "url": "api/ape/functions_u.html",
    "revision": "712d348f5f32ed33d9650b754c0e00b0"
  },
  {
    "url": "api/ape/functions_v.html",
    "revision": "262618e627508e736433b18638804dae"
  },
  {
    "url": "api/ape/functions_vars.html",
    "revision": "942f6f23b45e604d32d5e39eaed5c6e0"
  },
  {
    "url": "api/ape/functions_w.html",
    "revision": "4f709e6e67eff7a4991cdeea4837e528"
  },
  {
    "url": "api/ape/functions.html",
    "revision": "76092a202be2ba8d772cc6a401507641"
  },
  {
    "url": "api/ape/hierarchy.html",
    "revision": "37e0a2e2edafc0fcb89ab45b41f2fac0"
  },
  {
    "url": "api/ape/index.html",
    "revision": "26238e52f96b8e458658baa77a8ce348"
  },
  {
    "url": "api/ape/jquery.js",
    "revision": "ed067826ee972d3c98cc3c1223553a70"
  },
  {
    "url": "api/ape/menu.js",
    "revision": "87073c188202e46cab0291523b08d60d"
  },
  {
    "url": "api/ape/menudata.js",
    "revision": "9b7c83dddeb8486fa3d8594aabad2019"
  },
  {
    "url": "api/ape/namespace_home_genie_1_1_automation_1_1_scripting.html",
    "revision": "040a60b6f3e2e45339b814db37a8ed52"
  },
  {
    "url": "api/ape/namespace_home_genie_1_1_automation.html",
    "revision": "fb9cd371a6fc27ea680e53f735423e87"
  },
  {
    "url": "api/ape/namespace_home_genie_1_1_data.html",
    "revision": "78ed17739327571d5cf2b9a380c8d64c"
  },
  {
    "url": "api/ape/namespace_home_genie.html",
    "revision": "7cf0c046c68a1d2c2de1ba9b9de14a45"
  },
  {
    "url": "api/ape/namespacemembers_enum.html",
    "revision": "548977ccf9481b8e185fc79f74282664"
  },
  {
    "url": "api/ape/namespacemembers.html",
    "revision": "4668ccde436656c348ae8677dbe46cd2"
  },
  {
    "url": "api/ape/search/all_0.html",
    "revision": "78611e65921101a01b9bea07eb5098e2"
  },
  {
    "url": "api/ape/search/all_0.js",
    "revision": "b012a36e7d90986fdfff6768d1d78290"
  },
  {
    "url": "api/ape/search/all_1.html",
    "revision": "b8d714c6cfffaedd33a535ae59633775"
  },
  {
    "url": "api/ape/search/all_1.js",
    "revision": "640dbfe8026710e68bb69799a38e2517"
  },
  {
    "url": "api/ape/search/all_10.html",
    "revision": "227a4ed25e98a1f33b877b766770d19c"
  },
  {
    "url": "api/ape/search/all_10.js",
    "revision": "a9ac6b95c334ae54e698260995f1e96b"
  },
  {
    "url": "api/ape/search/all_11.html",
    "revision": "d1a2771d9324ec9bf478272cc1e4863b"
  },
  {
    "url": "api/ape/search/all_11.js",
    "revision": "cce96654b4fbbf1ac1a79ecd8c204667"
  },
  {
    "url": "api/ape/search/all_12.html",
    "revision": "cb052c7435197a8e59e1178e8a7aa5ce"
  },
  {
    "url": "api/ape/search/all_12.js",
    "revision": "e1e3ea4b8b24af67a96a5f200ff95bf4"
  },
  {
    "url": "api/ape/search/all_13.html",
    "revision": "f631da7aa283e6df1bed395cd3e0187b"
  },
  {
    "url": "api/ape/search/all_13.js",
    "revision": "eaca8f85dcb31d8746005831ae2b011d"
  },
  {
    "url": "api/ape/search/all_2.html",
    "revision": "312d65bf9ce11557c528ba1b9efd0b8a"
  },
  {
    "url": "api/ape/search/all_2.js",
    "revision": "ef4649f0a6c777859a54e132e0ff65a3"
  },
  {
    "url": "api/ape/search/all_3.html",
    "revision": "0e559ef828636db631cc9f5b3acf2dea"
  },
  {
    "url": "api/ape/search/all_3.js",
    "revision": "b21cf918cdb3670cd65b181d5fb42ec0"
  },
  {
    "url": "api/ape/search/all_4.html",
    "revision": "924509a945ca861d866ce8dbd681022c"
  },
  {
    "url": "api/ape/search/all_4.js",
    "revision": "d59ab8cf36b2c2908f0a0b5b124f9e8b"
  },
  {
    "url": "api/ape/search/all_5.html",
    "revision": "83d043aa2b2f18be8a0bbcca05d6c014"
  },
  {
    "url": "api/ape/search/all_5.js",
    "revision": "69c15c7706277c77b97fc8d70c6cd422"
  },
  {
    "url": "api/ape/search/all_6.html",
    "revision": "573d0ff7ab4d5934522b0c67a7d25533"
  },
  {
    "url": "api/ape/search/all_6.js",
    "revision": "cc2f5ca764fd6a6446c0594a829f866b"
  },
  {
    "url": "api/ape/search/all_7.html",
    "revision": "899aa04046ffdec49cd099c6dc22f594"
  },
  {
    "url": "api/ape/search/all_7.js",
    "revision": "38c323965776a935feb0f4c272fa7c79"
  },
  {
    "url": "api/ape/search/all_8.html",
    "revision": "792f3af07836685717922236f6ff6405"
  },
  {
    "url": "api/ape/search/all_8.js",
    "revision": "ae5408ae6a39548cd4ab78f92cad679e"
  },
  {
    "url": "api/ape/search/all_9.html",
    "revision": "3e3fc57ebd7d505e7c52eeb80fe8000c"
  },
  {
    "url": "api/ape/search/all_9.js",
    "revision": "b1172fc6e2b540c43ff5c56f3a5c9790"
  },
  {
    "url": "api/ape/search/all_a.html",
    "revision": "10cfa007c37643bfae1e848b57be1f09"
  },
  {
    "url": "api/ape/search/all_a.js",
    "revision": "0024d9ea80513d200d48dd4390fb3fd3"
  },
  {
    "url": "api/ape/search/all_b.html",
    "revision": "15a0a44711161e091f244f7f82d54d6a"
  },
  {
    "url": "api/ape/search/all_b.js",
    "revision": "63301af3afeda102a31f20f5dfaaf4ba"
  },
  {
    "url": "api/ape/search/all_c.html",
    "revision": "5615ac795076ab2bf6e65c0cdcff739d"
  },
  {
    "url": "api/ape/search/all_c.js",
    "revision": "6751a7f519877cc295c9b4284f08d2ed"
  },
  {
    "url": "api/ape/search/all_d.html",
    "revision": "a2d6bffb86e60593812ff465437692c2"
  },
  {
    "url": "api/ape/search/all_d.js",
    "revision": "57c42dd5816a790aa3eb5cc2803c3d03"
  },
  {
    "url": "api/ape/search/all_e.html",
    "revision": "860398f48ffdf4fb1e07fdd18f3f562b"
  },
  {
    "url": "api/ape/search/all_e.js",
    "revision": "b17c2ea7c5053819fd6ebc9d458ff404"
  },
  {
    "url": "api/ape/search/all_f.html",
    "revision": "06e7a4e3ec59f19de1cff3cdb5aaadae"
  },
  {
    "url": "api/ape/search/all_f.js",
    "revision": "b4498f719c35453c03dab4fe75eb1847"
  },
  {
    "url": "api/ape/search/classes_0.html",
    "revision": "354cc1306757955e98f98cdc8e142295"
  },
  {
    "url": "api/ape/search/classes_0.js",
    "revision": "256f9a1f38c2c97c7067e35757f9f02a"
  },
  {
    "url": "api/ape/search/classes_1.html",
    "revision": "921907fda9270c63ef3b05a1e92b1828"
  },
  {
    "url": "api/ape/search/classes_1.js",
    "revision": "3cd7cd67b5df08f23cebbf24081647d1"
  },
  {
    "url": "api/ape/search/classes_2.html",
    "revision": "9e0157a721e3abb0cddc06181c6a4d29"
  },
  {
    "url": "api/ape/search/classes_2.js",
    "revision": "6cc38ef0e2b5d5ec0baeb8dfa409cb4a"
  },
  {
    "url": "api/ape/search/classes_3.html",
    "revision": "f4d551178fcc25ce17b06f9108c1252c"
  },
  {
    "url": "api/ape/search/classes_3.js",
    "revision": "a5d53c7275aa2221706d9f0347a1b151"
  },
  {
    "url": "api/ape/search/classes_4.html",
    "revision": "dfc59a7d75f5bbe3f160d0a64a6173db"
  },
  {
    "url": "api/ape/search/classes_4.js",
    "revision": "0e6af4248fd79fdb50ce719c23c77561"
  },
  {
    "url": "api/ape/search/classes_5.html",
    "revision": "af7f14f051ee98dde4f30a8e56bb59f9"
  },
  {
    "url": "api/ape/search/classes_5.js",
    "revision": "e04e0ea51da25dc8800851c1d5de2932"
  },
  {
    "url": "api/ape/search/classes_6.html",
    "revision": "41f7509eeb1944f267c0f1b269dcc9cc"
  },
  {
    "url": "api/ape/search/classes_6.js",
    "revision": "4e3ed6379ba320f446fbbccd5b0d9168"
  },
  {
    "url": "api/ape/search/classes_7.html",
    "revision": "4df0e7215eb4877d35f1b28f12fef7bf"
  },
  {
    "url": "api/ape/search/classes_7.js",
    "revision": "c028fd00f34b090683e00ad6d1d4b491"
  },
  {
    "url": "api/ape/search/classes_8.html",
    "revision": "bec0efed730e8d0410994ceb634df45d"
  },
  {
    "url": "api/ape/search/classes_8.js",
    "revision": "b5beac7adcf35d5e157a44d21b197c3b"
  },
  {
    "url": "api/ape/search/classes_9.html",
    "revision": "768104cac34f2f0a2a579343276779fc"
  },
  {
    "url": "api/ape/search/classes_9.js",
    "revision": "01c4db1114af4ce892b96ae836a1a30a"
  },
  {
    "url": "api/ape/search/enums_0.html",
    "revision": "8f8927bd830f8fc6b0a88ee3bbd421ff"
  },
  {
    "url": "api/ape/search/enums_0.js",
    "revision": "bbd1e63b6c2c8f691640b12ba325e9c1"
  },
  {
    "url": "api/ape/search/enumvalues_0.html",
    "revision": "3ace254284c71093a88eec6383e7e48e"
  },
  {
    "url": "api/ape/search/enumvalues_0.js",
    "revision": "37a60f1103c2ce1bb2504386512a426f"
  },
  {
    "url": "api/ape/search/enumvalues_1.html",
    "revision": "12dcd1588be0a318ff785be592254f5b"
  },
  {
    "url": "api/ape/search/enumvalues_1.js",
    "revision": "e381f901ab89ff81cda0026c8a98b920"
  },
  {
    "url": "api/ape/search/functions_0.html",
    "revision": "20367310fa89b9cac832352b5e201e8e"
  },
  {
    "url": "api/ape/search/functions_0.js",
    "revision": "bc15bdcace9a96e9a2378f17766fdb11"
  },
  {
    "url": "api/ape/search/functions_1.html",
    "revision": "594241a225552320d9255129c69d9b40"
  },
  {
    "url": "api/ape/search/functions_1.js",
    "revision": "94f336959b1417454fb341f77d290ecb"
  },
  {
    "url": "api/ape/search/functions_10.html",
    "revision": "7b7334a0aa01594869ad05cdb4cd8737"
  },
  {
    "url": "api/ape/search/functions_10.js",
    "revision": "1feeaff40ce85bb9fc9e55b290baa2d6"
  },
  {
    "url": "api/ape/search/functions_11.html",
    "revision": "8e9b9eb15b309f21719dfa78ab3d8d1e"
  },
  {
    "url": "api/ape/search/functions_11.js",
    "revision": "12a30d845bcac097a313ad9c33c7c4ce"
  },
  {
    "url": "api/ape/search/functions_2.html",
    "revision": "ffdcf91cf831558f314e7e7febdbc676"
  },
  {
    "url": "api/ape/search/functions_2.js",
    "revision": "f3cd1d123e0c51f5704c97168cf78e84"
  },
  {
    "url": "api/ape/search/functions_3.html",
    "revision": "b049166d75edff43a860fab0bfbc1d47"
  },
  {
    "url": "api/ape/search/functions_3.js",
    "revision": "b273b9934f106710357739bd6fd89191"
  },
  {
    "url": "api/ape/search/functions_4.html",
    "revision": "0f9e5dd59c52b640877864f9b7de3f57"
  },
  {
    "url": "api/ape/search/functions_4.js",
    "revision": "fd4974b3aff6d7456a699e34afa402ab"
  },
  {
    "url": "api/ape/search/functions_5.html",
    "revision": "00efc115cd9356d307fd26cc528bdb8f"
  },
  {
    "url": "api/ape/search/functions_5.js",
    "revision": "227bd2db6e7006099880b5585e2efd15"
  },
  {
    "url": "api/ape/search/functions_6.html",
    "revision": "de3d795e7e776c1637dfd93db43bbdbd"
  },
  {
    "url": "api/ape/search/functions_6.js",
    "revision": "8ce5687807fd594b2e8c7ad32c786768"
  },
  {
    "url": "api/ape/search/functions_7.html",
    "revision": "21f27adb8b29e2d52ec7f77f2bbc0462"
  },
  {
    "url": "api/ape/search/functions_7.js",
    "revision": "ed15293f80a99e913d8eeeaac6c500cc"
  },
  {
    "url": "api/ape/search/functions_8.html",
    "revision": "5e77fa40756433727c93bcb25e91ae6e"
  },
  {
    "url": "api/ape/search/functions_8.js",
    "revision": "28f10190d768bdc2876c7c949cfea1e0"
  },
  {
    "url": "api/ape/search/functions_9.html",
    "revision": "29d5ace806309b459ab3fbdf9e466604"
  },
  {
    "url": "api/ape/search/functions_9.js",
    "revision": "4b7cccad18e0d6cd5752a7602009febd"
  },
  {
    "url": "api/ape/search/functions_a.html",
    "revision": "816e516e72e106c872223bb2cab91c93"
  },
  {
    "url": "api/ape/search/functions_a.js",
    "revision": "7a2bf67022a24250a39df4ec7b6c5e78"
  },
  {
    "url": "api/ape/search/functions_b.html",
    "revision": "a50674f7f04e5082b3c55ae59b429781"
  },
  {
    "url": "api/ape/search/functions_b.js",
    "revision": "c6bf85e1210c7ccd7f6274899b5377d2"
  },
  {
    "url": "api/ape/search/functions_c.html",
    "revision": "a5a0bc8faa17ba28e13ba8c3b5c8d126"
  },
  {
    "url": "api/ape/search/functions_c.js",
    "revision": "3abe49f26aad88da6ca7a0b3fbfaa2a7"
  },
  {
    "url": "api/ape/search/functions_d.html",
    "revision": "86a8dee5b1b6d1b99ae1a63ada5f10a1"
  },
  {
    "url": "api/ape/search/functions_d.js",
    "revision": "fa66364d3d477b938f8771b382687368"
  },
  {
    "url": "api/ape/search/functions_e.html",
    "revision": "83f9e8584c68a2158bede4877ee05169"
  },
  {
    "url": "api/ape/search/functions_e.js",
    "revision": "b64ff5bedf7b3ffced26625d3dd63a98"
  },
  {
    "url": "api/ape/search/functions_f.html",
    "revision": "77f4949c58b5c83cb0f7a66c7d55800f"
  },
  {
    "url": "api/ape/search/functions_f.js",
    "revision": "cfc38220273994550bc734a2fc48bd53"
  },
  {
    "url": "api/ape/search/namespaces_0.html",
    "revision": "14a7b8c72bc85e1ac6e98b8abcc066ec"
  },
  {
    "url": "api/ape/search/namespaces_0.js",
    "revision": "944952cb81871f567499b6ed928c3f96"
  },
  {
    "url": "api/ape/search/nomatches.html",
    "revision": "08eb986c4f736f5991d5d15d50aaf608"
  },
  {
    "url": "api/ape/search/pages_0.html",
    "revision": "c8c7795027a150490343473019757fcc"
  },
  {
    "url": "api/ape/search/pages_0.js",
    "revision": "6816eaa7745266b4064517a9f4138832"
  },
  {
    "url": "api/ape/search/properties_0.html",
    "revision": "8d826bee4e6e2287c937711066472cbc"
  },
  {
    "url": "api/ape/search/properties_0.js",
    "revision": "69ec24387b31c6c4fd925863ce2b2ea7"
  },
  {
    "url": "api/ape/search/properties_1.html",
    "revision": "253f41fa5593871397a1f701f80b8830"
  },
  {
    "url": "api/ape/search/properties_1.js",
    "revision": "c1a5b763285319b3cc4c5bdae1d00e41"
  },
  {
    "url": "api/ape/search/properties_2.html",
    "revision": "0c98ea60d4bcf0dbf8d106a114c034bb"
  },
  {
    "url": "api/ape/search/properties_2.js",
    "revision": "db548265a16699d9ebce4c53556fb2a5"
  },
  {
    "url": "api/ape/search/properties_3.html",
    "revision": "f524f915b8faa581ab8b517e932818ef"
  },
  {
    "url": "api/ape/search/properties_3.js",
    "revision": "245b24f606feeadb5cc4e8160c7ad4af"
  },
  {
    "url": "api/ape/search/properties_4.html",
    "revision": "a41fdc820f74dd5787bb5978b2026221"
  },
  {
    "url": "api/ape/search/properties_4.js",
    "revision": "8e4451ea75ab6b3028a0d1dcff7a4abd"
  },
  {
    "url": "api/ape/search/properties_5.html",
    "revision": "522f30f30be6765453e126d6220b06c3"
  },
  {
    "url": "api/ape/search/properties_5.js",
    "revision": "3f3e14688221b697647420d96f147274"
  },
  {
    "url": "api/ape/search/properties_6.html",
    "revision": "4aab4c3e52d0b3a648d018075ce429cf"
  },
  {
    "url": "api/ape/search/properties_6.js",
    "revision": "aa621c6dd92beb55ade466a521e3546b"
  },
  {
    "url": "api/ape/search/properties_7.html",
    "revision": "6117fd9a2fe8729cd8fc61ab0c1bf052"
  },
  {
    "url": "api/ape/search/properties_7.js",
    "revision": "b43a89f0d782b2905f72b414e31fd147"
  },
  {
    "url": "api/ape/search/properties_8.html",
    "revision": "b31761a8182f69fc7f4b676c9c5e6117"
  },
  {
    "url": "api/ape/search/properties_8.js",
    "revision": "c6b1188d4ce8463ddb1f8dd7aeb29d2a"
  },
  {
    "url": "api/ape/search/properties_9.html",
    "revision": "ddab13fc50bee38ce588b9a695744f2a"
  },
  {
    "url": "api/ape/search/properties_9.js",
    "revision": "b3834c9720d90d68315acb076cacfe08"
  },
  {
    "url": "api/ape/search/properties_a.html",
    "revision": "14204c003621785f9d1abe24408e6b0d"
  },
  {
    "url": "api/ape/search/properties_a.js",
    "revision": "b449c2f311fd8b0c618fb3fa0229f8c7"
  },
  {
    "url": "api/ape/search/properties_b.html",
    "revision": "eddc7a22ad4e16baba9490982e474936"
  },
  {
    "url": "api/ape/search/properties_b.js",
    "revision": "82dea35b033b825be5ae26b775a4a7a1"
  },
  {
    "url": "api/ape/search/properties_c.html",
    "revision": "f70c4ef4915af63572c11e2e2b6491f6"
  },
  {
    "url": "api/ape/search/properties_c.js",
    "revision": "780c07d43394ee3f677daa8c51468dc3"
  },
  {
    "url": "api/ape/search/properties_d.html",
    "revision": "6d7c4b105594e43e18990389bda7229f"
  },
  {
    "url": "api/ape/search/properties_d.js",
    "revision": "15a8532453933300e95194d6defcea4a"
  },
  {
    "url": "api/ape/search/properties_e.html",
    "revision": "80994627fc4efd5767dee651b0cfe6a5"
  },
  {
    "url": "api/ape/search/properties_e.js",
    "revision": "3d4bdef0c75e820698b6c713d4dd400c"
  },
  {
    "url": "api/ape/search/properties_f.html",
    "revision": "154ae60d5ec063cb59c0a64f3332f4e1"
  },
  {
    "url": "api/ape/search/properties_f.js",
    "revision": "053e5fcb70cb696817c471ecae27a384"
  },
  {
    "url": "api/ape/search/search.css",
    "revision": "62c88f58334ead8314afc96a8170411e"
  },
  {
    "url": "api/ape/search/search.js",
    "revision": "45ecb6807f17457d9557a058b774773d"
  },
  {
    "url": "api/ape/search/searchdata.js",
    "revision": "73b825ec7d6a8734fe9f2bc4c99d2f84"
  },
  {
    "url": "api/ape/search/variables_0.html",
    "revision": "f3ddb8dfd3ea5d47648f293a13f8652f"
  },
  {
    "url": "api/ape/search/variables_0.js",
    "revision": "a4c680a4e7256851e4ca73a4accaf98b"
  },
  {
    "url": "api/ape/search/variables_1.html",
    "revision": "38692a1d86dbf7ed48d5c31fc6782b1f"
  },
  {
    "url": "api/ape/search/variables_1.js",
    "revision": "b20f53cff3bd442488c7bf1f66cdee0c"
  },
  {
    "url": "api/ape/tabs.css",
    "revision": "03e17602ad41cd3551eb76d9434f8ca0"
  },
  {
    "url": "api/mig/app_api_introduction.html",
    "revision": "7f05a5ee6682a610356487b2e9233b53"
  },
  {
    "url": "api/mig/assets/js/ie10-viewport-bug-workaround.js",
    "revision": "d6b71b89986868b03eab548a8252d7aa"
  },
  {
    "url": "api/mig/assets/js/jquery.min.js",
    "revision": "056fd2a776eae867b7e2b5ddcb754d78"
  },
  {
    "url": "api/mig/bootstrap/css/bootstrap.css",
    "revision": "6199fc2e953656312446004cfec7472f"
  },
  {
    "url": "api/mig/bootstrap/css/docs.css",
    "revision": "a068305cf986892b9ca4c2693221cc9f"
  },
  {
    "url": "api/mig/bootstrap/js/bootstrap.min.js",
    "revision": "046ba2b5f4cff7d2eaaa1af55caa9fd8"
  },
  {
    "url": "api/mig/core_api_automation.html",
    "revision": "c6b822a2db6bf8e570a8bc923ed0a3cc"
  },
  {
    "url": "api/mig/core_api_config.html",
    "revision": "89af43d139cecc37909af1eae0ada0bf"
  },
  {
    "url": "api/mig/core_api_logging.html",
    "revision": "7d4f7301cff24776b70784dd4b12eb52"
  },
  {
    "url": "api/mig/core_api_statistics.html",
    "revision": "53bd8464c8858d9921242dd09d84d607"
  },
  {
    "url": "api/mig/css/bootstrap-doc.css",
    "revision": "5a0b05e7513a446c79f24b4831cbb15a"
  },
  {
    "url": "api/mig/css/bootstrap-responsive.css",
    "revision": "871defe8c1a928bcbcc3efcf4a1dde42"
  },
  {
    "url": "api/mig/css/bootstrap.css",
    "revision": "a503680494d9927b35e02b5759730e9f"
  },
  {
    "url": "api/mig/css/dashboard.css",
    "revision": "47f2d1cffaab64b9329dcf3d888572d0"
  },
  {
    "url": "api/mig/css/prettify.css",
    "revision": "a987f72342eeaece278982a377eca816"
  },
  {
    "url": "api/mig/includes/header.html",
    "revision": "d455e9ca1e61cd407e889359b784b771"
  },
  {
    "url": "api/mig/includes/sidemenu.html",
    "revision": "c4b7fd0ff255e83e18501544681d133d"
  },
  {
    "url": "api/mig/js/bootstrap.js",
    "revision": "c4e4ebc476cf62d4840a19cd42b06255"
  },
  {
    "url": "api/mig/js/common_includes.js",
    "revision": "360da97bc92b89fa99a6c1c35a2971e6"
  },
  {
    "url": "api/mig/js/html5shiv.js",
    "revision": "262bb88879efaaf75c74154fe0308952"
  },
  {
    "url": "api/mig/js/jquery.js",
    "revision": "07c00fb16c1e0e1a6274199b7c334a9a"
  },
  {
    "url": "api/mig/js/prettify.js",
    "revision": "1dff693b7692757c5aeee0c75979301f"
  },
  {
    "url": "api/mig/mig_api_camerainput.html",
    "revision": "bb694cf4b6bc2d1c172048b9ab8d8dcf"
  },
  {
    "url": "api/mig/mig_api_insteon.html",
    "revision": "f51247f96935a6d38691047309eb3091"
  },
  {
    "url": "api/mig/mig_api_interfaces.html",
    "revision": "6787fb3ac70ab8a7c0ae3cebe21fffef"
  },
  {
    "url": "api/mig/mig_api_lircremote.html",
    "revision": "fb0f060b0df7f483bc57923eebf023a1"
  },
  {
    "url": "api/mig/mig_api_upnp.html",
    "revision": "c30aef74bb916a823a30a917c3c875a2"
  },
  {
    "url": "api/mig/mig_api_w800rf.html",
    "revision": "28ce5caebdc82bd6153303ef8036536a"
  },
  {
    "url": "api/mig/mig_api_x10.html",
    "revision": "a2949c10be9f2bf6ad18b296d362e3fb"
  },
  {
    "url": "api/mig/mig_api_zwave.html",
    "revision": "93d72456c4dea8f83692ee916f50b588"
  },
  {
    "url": "api/mig/overview.html",
    "revision": "eb0dec0f8a6d54ca6bf2e8fb4edd9072"
  },
  {
    "url": "app/controllers/content_loader.js",
    "revision": "678b2198197dca1ef8809969dba2e182"
  },
  {
    "url": "app/layout/header.css",
    "revision": "e28dab5c3bbe9109aafe8d9070994d35"
  },
  {
    "url": "app/layout/header.html",
    "revision": "f1416c59dfb4cd34bdd2fee9d481461c"
  },
  {
    "url": "app/layout/side_menu_item.html",
    "revision": "94587de6b6ddbd19c9a084195df8de38"
  },
  {
    "url": "app/layout/side_menu_subitem.html",
    "revision": "0aa41cdfd7240f9be0b279702ec8ba51"
  },
  {
    "url": "app/layout/side_menu.css",
    "revision": "5a1ff467966e7bab8bc26dffca12bc4b"
  },
  {
    "url": "app/layout/side_menu.html",
    "revision": "0068c3511cbcf5e0e89b98fb42f6eb49"
  },
  {
    "url": "app/templates/mdl_card.css",
    "revision": "5895d6fc071fff05095f5872277242e6"
  },
  {
    "url": "app/templates/mdl_card.html",
    "revision": "61f9c04d0602223d14da9df3ffcefd14"
  },
  {
    "url": "config.js",
    "revision": "a1f4ba994353c26e65eb5b64df4e41fb"
  },
  {
    "url": "config/default.json",
    "revision": "9149ec4c9f370722dd885d024707b2eb"
  },
  {
    "url": "config/production.json",
    "revision": "33f7343085457ff6caad8f02a2bee08d"
  },
  {
    "url": "content/about.html",
    "revision": "7154d2d19069ba6f22158d96be917721"
  },
  {
    "url": "content/clients.html",
    "revision": "16a0094817dd211e44fa6bdce18e7d93"
  },
  {
    "url": "content/devs/programs.html",
    "revision": "d123897e651fc95730ca0d99dbf1ac75"
  },
  {
    "url": "content/devs/widgets.html",
    "revision": "8916fdd2bf1165490381e106d8d6a5c6"
  },
  {
    "url": "content/docs/configure.html",
    "revision": "708a9078cfe9b0236f7c5210f6020d0e"
  },
  {
    "url": "content/docs/interconnect.html",
    "revision": "d193372f8ff17502c18823079217b31a"
  },
  {
    "url": "content/docs/remotes.html",
    "revision": "61664c939201ecbd243c1a1714e26ca5"
  },
  {
    "url": "content/docs/scenarios.html",
    "revision": "d7a753c17da924e69c508e6968af4474"
  },
  {
    "url": "content/docs/scheduling.html",
    "revision": "2b88efd1ec400136faae60a190a768df"
  },
  {
    "url": "content/docs/setup.html",
    "revision": "4b44782f3fc55f0d5491349e12783314"
  },
  {
    "url": "content/docs/upnp_dlna.html",
    "revision": "b054a1cb2aa198b736592f7e400e6034"
  },
  {
    "url": "content/install.html",
    "revision": "e37d0bb19d5adb834e5c43b6d61d31c9"
  },
  {
    "url": "content/raspberry.html",
    "revision": "d158aeb6242b42b9b2728c007f7de33d"
  },
  {
    "url": "content/support.html",
    "revision": "87bd82868613738d6b465c88b4dfb480"
  },
  {
    "url": "css/animate.css",
    "revision": "07f146141537e04ee282a965d8053198"
  },
  {
    "url": "css/animate.min.css",
    "revision": "178b651958ceff556cbc5f355e08bbf1"
  },
  {
    "url": "css/flex-layout-attribute.min.css",
    "revision": "c55488315343d9afb4d13ebf9cc8f97b"
  },
  {
    "url": "download.html",
    "revision": "8de3ac415d0e632fd3068052ce16a3d3"
  },
  {
    "url": "google7f8debac56a66e22.html",
    "revision": "28bb828bef7fcac67414e2aa2eaa8567"
  },
  {
    "url": "index.css",
    "revision": "50932a101dbeb4470db95cd6dd8a4b83"
  },
  {
    "url": "index.html",
    "revision": "759b39e634d1674276736554727d4d96"
  },
  {
    "url": "index.js",
    "revision": "d00f314f26a248801b898f1a8173b52e"
  },
  {
    "url": "js/mdl/material.blue-indigo.min.css",
    "revision": "6d51fcda9ed078bf8095b5fe2c569cda"
  },
  {
    "url": "js/mdl/material.green-pink.min.css",
    "revision": "7323c53e0fdbc3c25de3a118c2d85ebe"
  },
  {
    "url": "js/mdl/material.js",
    "revision": "b50a9d9f625f6eb4e09c40957f2e4e02"
  },
  {
    "url": "js/mdl/material.light_green-pink.min.css",
    "revision": "701b49acef871ef13bcbbd95b4ac33fe"
  },
  {
    "url": "js/mdl/material.min.js",
    "revision": "713af0c6ce93dbbce2f00bf0a98d0541"
  },
  {
    "url": "js/prism/clipboard.min.js",
    "revision": "3e5e0fa949e0e7c5ed5fed7b4cc0ee00"
  },
  {
    "url": "js/prism/prism.css",
    "revision": "485c9fc9787ea73d7c802822096c5dfe"
  },
  {
    "url": "js/prism/prism.js",
    "revision": "1a7c3a75daca45e74ca45b4efa3b1bca"
  },
  {
    "url": "js/zuix-bundler.js",
    "revision": "3f474466c27da6a2f22caa4e4630752e"
  },
  {
    "url": "js/zuix-bundler.min.js",
    "revision": "3518a066916b1e027074cb1190fe67d8"
  },
  {
    "url": "js/zuix.js",
    "revision": "00df4495aeee52542e0cda1b7e42ae0d"
  },
  {
    "url": "js/zuix.min.js",
    "revision": "4b4e35d144e2a2a1706c0c491f1ccc68"
  },
  {
    "url": "js/zuix/zuix-bundler.js",
    "revision": "eb1e6896190dc168976e3bfade74e1dc"
  },
  {
    "url": "js/zuix/zuix-bundler.min.js",
    "revision": "b35b5244abbd5fa7d894d5bdba111209"
  },
  {
    "url": "js/zuix/zuix.js",
    "revision": "4b5c494b8a1259cc0e992e7fd7973afd"
  },
  {
    "url": "js/zuix/zuix.min.js",
    "revision": "17b65a7df5599d242e5caae2549c12f2"
  },
  {
    "url": "manifest.json",
    "revision": "de8b1bc31250b8b6e3f63d84bf3cd9d7"
  },
  {
    "url": "package-lock.json",
    "revision": "23a75d4cd0a0d9c50db9a555a5b05592"
  },
  {
    "url": "package.json",
    "revision": "9ce1b3ac3346036f68a48b7e8528928c"
  },
  {
    "url": "site_config.js",
    "revision": "acd555aa511d44f32a5fe11ddf9a8eef"
  },
  {
    "url": "source/404.html",
    "revision": "8f6719c359d1f59ba0fc56c0ea478ed7"
  },
  {
    "url": "source/api/ape/annotated.html",
    "revision": "49f508037a1d355e2e185435477f05a6"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_data_helper-members.html",
    "revision": "6e5882e713d4e64cd7b81111dba93378"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_data_helper.html",
    "revision": "f58906d6761c3c019f0980ba21b6cbc7"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_events_helper-members.html",
    "revision": "5b66991d344740bcedbbe2ad0cedba24"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_events_helper.html",
    "revision": "5f2480b5b096df6651edc4f6a0c9032a"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_knx_client_helper-members.html",
    "revision": "fcc388435c0aaeb86e3375a3d80e5031"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_knx_client_helper.html",
    "revision": "e05d2db6245a256a918d5e5e015c7efa"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_module_helper-members.html",
    "revision": "038bfba6384a0dfed2c88e44c18d2af0"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_module_helper.html",
    "revision": "144fbb1f3823644e012c10e520118b58"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_modules_manager-members.html",
    "revision": "b962fe41c0b0e4755a4d870666af26a0"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_modules_manager.html",
    "revision": "41422899897cdff3ca1f1fd7c4959797"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_mqtt_client_helper-members.html",
    "revision": "d04f80a1100b3fcd348f49d5cef60596"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_mqtt_client_helper.html",
    "revision": "30fa00cdd569904a3c73b72a2d5bd62d"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_net_helper-members.html",
    "revision": "066ea5760afa71ccef59f7965b566f29"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_net_helper.html",
    "revision": "a71c3d3c3f4a7f4e13b5848159ddcb61"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper-members.html",
    "revision": "4e2eb276cb2e6593cbbc6fea7704b880"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper.html",
    "revision": "61b945e369f88271b8b94d02b4b5007b"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_scheduler_helper-members.html",
    "revision": "c3bb79b2b422204a901d60854b13cbd2"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_scheduler_helper.html",
    "revision": "aa32c0487d58ebddec11c127f299e91d"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_serial_port_helper-members.html",
    "revision": "4db5d4ed09838aefeba6886c87bd7e73"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_serial_port_helper.html",
    "revision": "a6ef54180c225e9fc4235479691f5af5"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_settings_helper-members.html",
    "revision": "4c3198bcbc01fff3d15ac55561f4b6f5"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_settings_helper.html",
    "revision": "ee0d099723b248e6c9260ca0209e1471"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_store_helper-members.html",
    "revision": "c786a5e8923421ef5353c65e96773e32"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_store_helper.html",
    "revision": "ae32856527e5fa214b020331e01bad5f"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_tcp_client_helper-members.html",
    "revision": "1bf5c0a46ba9227d574efad5288de319"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_tcp_client_helper.html",
    "revision": "10269c5ef32990ee823843279f1e5ac4"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_udp_client_helper-members.html",
    "revision": "68933c8f616a89248a6975e0cb5a6c0d"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_udp_client_helper.html",
    "revision": "4ce58ad6db8c2a011e4e63d8183b5bc8"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_module_parameter-members.html",
    "revision": "7511b18c0ed5d6a8c0a3cc3369565884"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_module_parameter.html",
    "revision": "9fabc32e513b9a79041d14a3d0dfb1e8"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_module-members.html",
    "revision": "32f1b424b5ef8b0ca4179ce08a72737f"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_module.html",
    "revision": "d393f90e14a6af213059518c52065e54"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_value_statistics_1_1_stat_value-members.html",
    "revision": "3023a37585420d1aead94e4f84e5a334"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_value_statistics_1_1_stat_value.html",
    "revision": "395ad003b6344ff8ab2257c58c7144d0"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_value_statistics-members.html",
    "revision": "cfccdbee2786672c054d94f8b7f030ac"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_value_statistics.html",
    "revision": "d118b0415078b871d8af09794f4c889c"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_program_helper_base-members.html",
    "revision": "0c10595c94b5978da152e215ea7ccf1c"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_program_helper_base.html",
    "revision": "b62e1689b5068926a35cd663dccf987e"
  },
  {
    "url": "source/api/ape/classes.html",
    "revision": "ec163dd0a09b6e96b299556e62c99018"
  },
  {
    "url": "source/api/ape/dir_5894cb8a968fa5090f014020b009b0ff.html",
    "revision": "e182283482e03ac8787150614f1b9ccd"
  },
  {
    "url": "source/api/ape/dir_7ec5998ff1c39af43163d33c02ae0cfc.html",
    "revision": "b915cee3e5dfcb5d8068a172051c00fa"
  },
  {
    "url": "source/api/ape/dir_8ee72d76c74e8df7ce2f1fcd769ac0c3.html",
    "revision": "c65b5cc25f42d88e79c3e01539e7f135"
  },
  {
    "url": "source/api/ape/dir_a90b7b186474f4918322abeebe1fee11.html",
    "revision": "29bbcd2fd8dd0dc0f54634a70d2c6d85"
  },
  {
    "url": "source/api/ape/doxygen.css",
    "revision": "e2ff72818d3b89c2b00ca8169658a4f6"
  },
  {
    "url": "source/api/ape/dynsections.js",
    "revision": "2c01ff94ad6551755416052b94fbfb13"
  },
  {
    "url": "source/api/ape/functions_c.html",
    "revision": "c63c859cc30c440a4a1eaec23bac9948"
  },
  {
    "url": "source/api/ape/functions_d.html",
    "revision": "ef6c91392ae13c51d480e42893b6666b"
  },
  {
    "url": "source/api/ape/functions_e.html",
    "revision": "301b47ea057e4203fd64a7152eda50e6"
  },
  {
    "url": "source/api/ape/functions_f.html",
    "revision": "8aaf7edc57e43752dc2514e04be7645d"
  },
  {
    "url": "source/api/ape/functions_func.html",
    "revision": "c0f99250daa3e76a0a8ba4b2dfef4fb8"
  },
  {
    "url": "source/api/ape/functions_g.html",
    "revision": "c08e3fd944fff89fc7825e12b708bc2d"
  },
  {
    "url": "source/api/ape/functions_h.html",
    "revision": "0eb669cffe1d78d5ca82fdc32f8ee22a"
  },
  {
    "url": "source/api/ape/functions_i.html",
    "revision": "59bfa58fa2683bbc96347e23e2189e0b"
  },
  {
    "url": "source/api/ape/functions_l.html",
    "revision": "7152f4366f936fdb4738cfc5a36d482a"
  },
  {
    "url": "source/api/ape/functions_m.html",
    "revision": "14c9af5d2d1e9036a390b3d0b34918ff"
  },
  {
    "url": "source/api/ape/functions_n.html",
    "revision": "3dfe896edf4129354c811050e34fce64"
  },
  {
    "url": "source/api/ape/functions_o.html",
    "revision": "b3855b6934fcf5ff3e618495e2de9507"
  },
  {
    "url": "source/api/ape/functions_p.html",
    "revision": "fc1a969200f1774ea0441d45ef3ed90b"
  },
  {
    "url": "source/api/ape/functions_prop.html",
    "revision": "78618c5feba5c4695a3386b384d1bc14"
  },
  {
    "url": "source/api/ape/functions_r.html",
    "revision": "75fc9dc321be78fa6b7802d3ed054dcd"
  },
  {
    "url": "source/api/ape/functions_s.html",
    "revision": "2279a6cc214801d5420021c5b65c5cfc"
  },
  {
    "url": "source/api/ape/functions_t.html",
    "revision": "143a24aed3f6785a73262336cc5fcac0"
  },
  {
    "url": "source/api/ape/functions_u.html",
    "revision": "712d348f5f32ed33d9650b754c0e00b0"
  },
  {
    "url": "source/api/ape/functions_v.html",
    "revision": "262618e627508e736433b18638804dae"
  },
  {
    "url": "source/api/ape/functions_vars.html",
    "revision": "942f6f23b45e604d32d5e39eaed5c6e0"
  },
  {
    "url": "source/api/ape/functions_w.html",
    "revision": "4f709e6e67eff7a4991cdeea4837e528"
  },
  {
    "url": "source/api/ape/functions.html",
    "revision": "76092a202be2ba8d772cc6a401507641"
  },
  {
    "url": "source/api/ape/hierarchy.html",
    "revision": "37e0a2e2edafc0fcb89ab45b41f2fac0"
  },
  {
    "url": "source/api/ape/index.html",
    "revision": "26238e52f96b8e458658baa77a8ce348"
  },
  {
    "url": "source/api/ape/jquery.js",
    "revision": "ed067826ee972d3c98cc3c1223553a70"
  },
  {
    "url": "source/api/ape/menu.js",
    "revision": "87073c188202e46cab0291523b08d60d"
  },
  {
    "url": "source/api/ape/menudata.js",
    "revision": "9b7c83dddeb8486fa3d8594aabad2019"
  },
  {
    "url": "source/api/ape/namespace_home_genie_1_1_automation_1_1_scripting.html",
    "revision": "040a60b6f3e2e45339b814db37a8ed52"
  },
  {
    "url": "source/api/ape/namespace_home_genie_1_1_automation.html",
    "revision": "fb9cd371a6fc27ea680e53f735423e87"
  },
  {
    "url": "source/api/ape/namespace_home_genie_1_1_data.html",
    "revision": "78ed17739327571d5cf2b9a380c8d64c"
  },
  {
    "url": "source/api/ape/namespace_home_genie.html",
    "revision": "7cf0c046c68a1d2c2de1ba9b9de14a45"
  },
  {
    "url": "source/api/ape/namespacemembers_enum.html",
    "revision": "548977ccf9481b8e185fc79f74282664"
  },
  {
    "url": "source/api/ape/namespacemembers.html",
    "revision": "4668ccde436656c348ae8677dbe46cd2"
  },
  {
    "url": "source/api/ape/search/all_0.html",
    "revision": "78611e65921101a01b9bea07eb5098e2"
  },
  {
    "url": "source/api/ape/search/all_0.js",
    "revision": "b012a36e7d90986fdfff6768d1d78290"
  },
  {
    "url": "source/api/ape/search/all_1.html",
    "revision": "b8d714c6cfffaedd33a535ae59633775"
  },
  {
    "url": "source/api/ape/search/all_1.js",
    "revision": "640dbfe8026710e68bb69799a38e2517"
  },
  {
    "url": "source/api/ape/search/all_10.html",
    "revision": "227a4ed25e98a1f33b877b766770d19c"
  },
  {
    "url": "source/api/ape/search/all_10.js",
    "revision": "a9ac6b95c334ae54e698260995f1e96b"
  },
  {
    "url": "source/api/ape/search/all_11.html",
    "revision": "d1a2771d9324ec9bf478272cc1e4863b"
  },
  {
    "url": "source/api/ape/search/all_11.js",
    "revision": "cce96654b4fbbf1ac1a79ecd8c204667"
  },
  {
    "url": "source/api/ape/search/all_12.html",
    "revision": "cb052c7435197a8e59e1178e8a7aa5ce"
  },
  {
    "url": "source/api/ape/search/all_12.js",
    "revision": "e1e3ea4b8b24af67a96a5f200ff95bf4"
  },
  {
    "url": "source/api/ape/search/all_13.html",
    "revision": "f631da7aa283e6df1bed395cd3e0187b"
  },
  {
    "url": "source/api/ape/search/all_13.js",
    "revision": "eaca8f85dcb31d8746005831ae2b011d"
  },
  {
    "url": "source/api/ape/search/all_2.html",
    "revision": "312d65bf9ce11557c528ba1b9efd0b8a"
  },
  {
    "url": "source/api/ape/search/all_2.js",
    "revision": "ef4649f0a6c777859a54e132e0ff65a3"
  },
  {
    "url": "source/api/ape/search/all_3.html",
    "revision": "0e559ef828636db631cc9f5b3acf2dea"
  },
  {
    "url": "source/api/ape/search/all_3.js",
    "revision": "b21cf918cdb3670cd65b181d5fb42ec0"
  },
  {
    "url": "source/api/ape/search/all_4.html",
    "revision": "924509a945ca861d866ce8dbd681022c"
  },
  {
    "url": "source/api/ape/search/all_4.js",
    "revision": "d59ab8cf36b2c2908f0a0b5b124f9e8b"
  },
  {
    "url": "source/api/ape/search/all_5.html",
    "revision": "83d043aa2b2f18be8a0bbcca05d6c014"
  },
  {
    "url": "source/api/ape/search/all_5.js",
    "revision": "69c15c7706277c77b97fc8d70c6cd422"
  },
  {
    "url": "source/api/ape/search/all_6.html",
    "revision": "573d0ff7ab4d5934522b0c67a7d25533"
  },
  {
    "url": "source/api/ape/search/all_6.js",
    "revision": "cc2f5ca764fd6a6446c0594a829f866b"
  },
  {
    "url": "source/api/ape/search/all_7.html",
    "revision": "899aa04046ffdec49cd099c6dc22f594"
  },
  {
    "url": "source/api/ape/search/all_7.js",
    "revision": "38c323965776a935feb0f4c272fa7c79"
  },
  {
    "url": "source/api/ape/search/all_8.html",
    "revision": "792f3af07836685717922236f6ff6405"
  },
  {
    "url": "source/api/ape/search/all_8.js",
    "revision": "ae5408ae6a39548cd4ab78f92cad679e"
  },
  {
    "url": "source/api/ape/search/all_9.html",
    "revision": "3e3fc57ebd7d505e7c52eeb80fe8000c"
  },
  {
    "url": "source/api/ape/search/all_9.js",
    "revision": "b1172fc6e2b540c43ff5c56f3a5c9790"
  },
  {
    "url": "source/api/ape/search/all_a.html",
    "revision": "10cfa007c37643bfae1e848b57be1f09"
  },
  {
    "url": "source/api/ape/search/all_a.js",
    "revision": "0024d9ea80513d200d48dd4390fb3fd3"
  },
  {
    "url": "source/api/ape/search/all_b.html",
    "revision": "15a0a44711161e091f244f7f82d54d6a"
  },
  {
    "url": "source/api/ape/search/all_b.js",
    "revision": "63301af3afeda102a31f20f5dfaaf4ba"
  },
  {
    "url": "source/api/ape/search/all_c.html",
    "revision": "5615ac795076ab2bf6e65c0cdcff739d"
  },
  {
    "url": "source/api/ape/search/all_c.js",
    "revision": "6751a7f519877cc295c9b4284f08d2ed"
  },
  {
    "url": "source/api/ape/search/all_d.html",
    "revision": "a2d6bffb86e60593812ff465437692c2"
  },
  {
    "url": "source/api/ape/search/all_d.js",
    "revision": "57c42dd5816a790aa3eb5cc2803c3d03"
  },
  {
    "url": "source/api/ape/search/all_e.html",
    "revision": "860398f48ffdf4fb1e07fdd18f3f562b"
  },
  {
    "url": "source/api/ape/search/all_e.js",
    "revision": "b17c2ea7c5053819fd6ebc9d458ff404"
  },
  {
    "url": "source/api/ape/search/all_f.html",
    "revision": "06e7a4e3ec59f19de1cff3cdb5aaadae"
  },
  {
    "url": "source/api/ape/search/all_f.js",
    "revision": "b4498f719c35453c03dab4fe75eb1847"
  },
  {
    "url": "source/api/ape/search/classes_0.html",
    "revision": "354cc1306757955e98f98cdc8e142295"
  },
  {
    "url": "source/api/ape/search/classes_0.js",
    "revision": "256f9a1f38c2c97c7067e35757f9f02a"
  },
  {
    "url": "source/api/ape/search/classes_1.html",
    "revision": "921907fda9270c63ef3b05a1e92b1828"
  },
  {
    "url": "source/api/ape/search/classes_1.js",
    "revision": "3cd7cd67b5df08f23cebbf24081647d1"
  },
  {
    "url": "source/api/ape/search/classes_2.html",
    "revision": "9e0157a721e3abb0cddc06181c6a4d29"
  },
  {
    "url": "source/api/ape/search/classes_2.js",
    "revision": "6cc38ef0e2b5d5ec0baeb8dfa409cb4a"
  },
  {
    "url": "source/api/ape/search/classes_3.html",
    "revision": "f4d551178fcc25ce17b06f9108c1252c"
  },
  {
    "url": "source/api/ape/search/classes_3.js",
    "revision": "a5d53c7275aa2221706d9f0347a1b151"
  },
  {
    "url": "source/api/ape/search/classes_4.html",
    "revision": "dfc59a7d75f5bbe3f160d0a64a6173db"
  },
  {
    "url": "source/api/ape/search/classes_4.js",
    "revision": "0e6af4248fd79fdb50ce719c23c77561"
  },
  {
    "url": "source/api/ape/search/classes_5.html",
    "revision": "af7f14f051ee98dde4f30a8e56bb59f9"
  },
  {
    "url": "source/api/ape/search/classes_5.js",
    "revision": "e04e0ea51da25dc8800851c1d5de2932"
  },
  {
    "url": "source/api/ape/search/classes_6.html",
    "revision": "41f7509eeb1944f267c0f1b269dcc9cc"
  },
  {
    "url": "source/api/ape/search/classes_6.js",
    "revision": "4e3ed6379ba320f446fbbccd5b0d9168"
  },
  {
    "url": "source/api/ape/search/classes_7.html",
    "revision": "4df0e7215eb4877d35f1b28f12fef7bf"
  },
  {
    "url": "source/api/ape/search/classes_7.js",
    "revision": "c028fd00f34b090683e00ad6d1d4b491"
  },
  {
    "url": "source/api/ape/search/classes_8.html",
    "revision": "bec0efed730e8d0410994ceb634df45d"
  },
  {
    "url": "source/api/ape/search/classes_8.js",
    "revision": "b5beac7adcf35d5e157a44d21b197c3b"
  },
  {
    "url": "source/api/ape/search/classes_9.html",
    "revision": "768104cac34f2f0a2a579343276779fc"
  },
  {
    "url": "source/api/ape/search/classes_9.js",
    "revision": "01c4db1114af4ce892b96ae836a1a30a"
  },
  {
    "url": "source/api/ape/search/enums_0.html",
    "revision": "8f8927bd830f8fc6b0a88ee3bbd421ff"
  },
  {
    "url": "source/api/ape/search/enums_0.js",
    "revision": "bbd1e63b6c2c8f691640b12ba325e9c1"
  },
  {
    "url": "source/api/ape/search/enumvalues_0.html",
    "revision": "3ace254284c71093a88eec6383e7e48e"
  },
  {
    "url": "source/api/ape/search/enumvalues_0.js",
    "revision": "37a60f1103c2ce1bb2504386512a426f"
  },
  {
    "url": "source/api/ape/search/enumvalues_1.html",
    "revision": "12dcd1588be0a318ff785be592254f5b"
  },
  {
    "url": "source/api/ape/search/enumvalues_1.js",
    "revision": "e381f901ab89ff81cda0026c8a98b920"
  },
  {
    "url": "source/api/ape/search/functions_0.html",
    "revision": "20367310fa89b9cac832352b5e201e8e"
  },
  {
    "url": "source/api/ape/search/functions_0.js",
    "revision": "bc15bdcace9a96e9a2378f17766fdb11"
  },
  {
    "url": "source/api/ape/search/functions_1.html",
    "revision": "594241a225552320d9255129c69d9b40"
  },
  {
    "url": "source/api/ape/search/functions_1.js",
    "revision": "94f336959b1417454fb341f77d290ecb"
  },
  {
    "url": "source/api/ape/search/functions_10.html",
    "revision": "7b7334a0aa01594869ad05cdb4cd8737"
  },
  {
    "url": "source/api/ape/search/functions_10.js",
    "revision": "1feeaff40ce85bb9fc9e55b290baa2d6"
  },
  {
    "url": "source/api/ape/search/functions_11.html",
    "revision": "8e9b9eb15b309f21719dfa78ab3d8d1e"
  },
  {
    "url": "source/api/ape/search/functions_11.js",
    "revision": "12a30d845bcac097a313ad9c33c7c4ce"
  },
  {
    "url": "source/api/ape/search/functions_2.html",
    "revision": "ffdcf91cf831558f314e7e7febdbc676"
  },
  {
    "url": "source/api/ape/search/functions_2.js",
    "revision": "f3cd1d123e0c51f5704c97168cf78e84"
  },
  {
    "url": "source/api/ape/search/functions_3.html",
    "revision": "b049166d75edff43a860fab0bfbc1d47"
  },
  {
    "url": "source/api/ape/search/functions_3.js",
    "revision": "b273b9934f106710357739bd6fd89191"
  },
  {
    "url": "source/api/ape/search/functions_4.html",
    "revision": "0f9e5dd59c52b640877864f9b7de3f57"
  },
  {
    "url": "source/api/ape/search/functions_4.js",
    "revision": "fd4974b3aff6d7456a699e34afa402ab"
  },
  {
    "url": "source/api/ape/search/functions_5.html",
    "revision": "00efc115cd9356d307fd26cc528bdb8f"
  },
  {
    "url": "source/api/ape/search/functions_5.js",
    "revision": "227bd2db6e7006099880b5585e2efd15"
  },
  {
    "url": "source/api/ape/search/functions_6.html",
    "revision": "de3d795e7e776c1637dfd93db43bbdbd"
  },
  {
    "url": "source/api/ape/search/functions_6.js",
    "revision": "8ce5687807fd594b2e8c7ad32c786768"
  },
  {
    "url": "source/api/ape/search/functions_7.html",
    "revision": "21f27adb8b29e2d52ec7f77f2bbc0462"
  },
  {
    "url": "source/api/ape/search/functions_7.js",
    "revision": "ed15293f80a99e913d8eeeaac6c500cc"
  },
  {
    "url": "source/api/ape/search/functions_8.html",
    "revision": "5e77fa40756433727c93bcb25e91ae6e"
  },
  {
    "url": "source/api/ape/search/functions_8.js",
    "revision": "28f10190d768bdc2876c7c949cfea1e0"
  },
  {
    "url": "source/api/ape/search/functions_9.html",
    "revision": "29d5ace806309b459ab3fbdf9e466604"
  },
  {
    "url": "source/api/ape/search/functions_9.js",
    "revision": "4b7cccad18e0d6cd5752a7602009febd"
  },
  {
    "url": "source/api/ape/search/functions_a.html",
    "revision": "816e516e72e106c872223bb2cab91c93"
  },
  {
    "url": "source/api/ape/search/functions_a.js",
    "revision": "7a2bf67022a24250a39df4ec7b6c5e78"
  },
  {
    "url": "source/api/ape/search/functions_b.html",
    "revision": "a50674f7f04e5082b3c55ae59b429781"
  },
  {
    "url": "source/api/ape/search/functions_b.js",
    "revision": "c6bf85e1210c7ccd7f6274899b5377d2"
  },
  {
    "url": "source/api/ape/search/functions_c.html",
    "revision": "a5a0bc8faa17ba28e13ba8c3b5c8d126"
  },
  {
    "url": "source/api/ape/search/functions_c.js",
    "revision": "3abe49f26aad88da6ca7a0b3fbfaa2a7"
  },
  {
    "url": "source/api/ape/search/functions_d.html",
    "revision": "86a8dee5b1b6d1b99ae1a63ada5f10a1"
  },
  {
    "url": "source/api/ape/search/functions_d.js",
    "revision": "fa66364d3d477b938f8771b382687368"
  },
  {
    "url": "source/api/ape/search/functions_e.html",
    "revision": "83f9e8584c68a2158bede4877ee05169"
  },
  {
    "url": "source/api/ape/search/functions_e.js",
    "revision": "b64ff5bedf7b3ffced26625d3dd63a98"
  },
  {
    "url": "source/api/ape/search/functions_f.html",
    "revision": "77f4949c58b5c83cb0f7a66c7d55800f"
  },
  {
    "url": "source/api/ape/search/functions_f.js",
    "revision": "cfc38220273994550bc734a2fc48bd53"
  },
  {
    "url": "source/api/ape/search/namespaces_0.html",
    "revision": "14a7b8c72bc85e1ac6e98b8abcc066ec"
  },
  {
    "url": "source/api/ape/search/namespaces_0.js",
    "revision": "944952cb81871f567499b6ed928c3f96"
  },
  {
    "url": "source/api/ape/search/nomatches.html",
    "revision": "08eb986c4f736f5991d5d15d50aaf608"
  },
  {
    "url": "source/api/ape/search/pages_0.html",
    "revision": "c8c7795027a150490343473019757fcc"
  },
  {
    "url": "source/api/ape/search/pages_0.js",
    "revision": "6816eaa7745266b4064517a9f4138832"
  },
  {
    "url": "source/api/ape/search/properties_0.html",
    "revision": "8d826bee4e6e2287c937711066472cbc"
  },
  {
    "url": "source/api/ape/search/properties_0.js",
    "revision": "69ec24387b31c6c4fd925863ce2b2ea7"
  },
  {
    "url": "source/api/ape/search/properties_1.html",
    "revision": "253f41fa5593871397a1f701f80b8830"
  },
  {
    "url": "source/api/ape/search/properties_1.js",
    "revision": "c1a5b763285319b3cc4c5bdae1d00e41"
  },
  {
    "url": "source/api/ape/search/properties_2.html",
    "revision": "0c98ea60d4bcf0dbf8d106a114c034bb"
  },
  {
    "url": "source/api/ape/search/properties_2.js",
    "revision": "db548265a16699d9ebce4c53556fb2a5"
  },
  {
    "url": "source/api/ape/search/properties_3.html",
    "revision": "f524f915b8faa581ab8b517e932818ef"
  },
  {
    "url": "source/api/ape/search/properties_3.js",
    "revision": "245b24f606feeadb5cc4e8160c7ad4af"
  },
  {
    "url": "source/api/ape/search/properties_4.html",
    "revision": "a41fdc820f74dd5787bb5978b2026221"
  },
  {
    "url": "source/api/ape/search/properties_4.js",
    "revision": "8e4451ea75ab6b3028a0d1dcff7a4abd"
  },
  {
    "url": "source/api/ape/search/properties_5.html",
    "revision": "522f30f30be6765453e126d6220b06c3"
  },
  {
    "url": "source/api/ape/search/properties_5.js",
    "revision": "3f3e14688221b697647420d96f147274"
  },
  {
    "url": "source/api/ape/search/properties_6.html",
    "revision": "4aab4c3e52d0b3a648d018075ce429cf"
  },
  {
    "url": "source/api/ape/search/properties_6.js",
    "revision": "aa621c6dd92beb55ade466a521e3546b"
  },
  {
    "url": "source/api/ape/search/properties_7.html",
    "revision": "6117fd9a2fe8729cd8fc61ab0c1bf052"
  },
  {
    "url": "source/api/ape/search/properties_7.js",
    "revision": "b43a89f0d782b2905f72b414e31fd147"
  },
  {
    "url": "source/api/ape/search/properties_8.html",
    "revision": "b31761a8182f69fc7f4b676c9c5e6117"
  },
  {
    "url": "source/api/ape/search/properties_8.js",
    "revision": "c6b1188d4ce8463ddb1f8dd7aeb29d2a"
  },
  {
    "url": "source/api/ape/search/properties_9.html",
    "revision": "ddab13fc50bee38ce588b9a695744f2a"
  },
  {
    "url": "source/api/ape/search/properties_9.js",
    "revision": "b3834c9720d90d68315acb076cacfe08"
  },
  {
    "url": "source/api/ape/search/properties_a.html",
    "revision": "14204c003621785f9d1abe24408e6b0d"
  },
  {
    "url": "source/api/ape/search/properties_a.js",
    "revision": "b449c2f311fd8b0c618fb3fa0229f8c7"
  },
  {
    "url": "source/api/ape/search/properties_b.html",
    "revision": "eddc7a22ad4e16baba9490982e474936"
  },
  {
    "url": "source/api/ape/search/properties_b.js",
    "revision": "82dea35b033b825be5ae26b775a4a7a1"
  },
  {
    "url": "source/api/ape/search/properties_c.html",
    "revision": "f70c4ef4915af63572c11e2e2b6491f6"
  },
  {
    "url": "source/api/ape/search/properties_c.js",
    "revision": "780c07d43394ee3f677daa8c51468dc3"
  },
  {
    "url": "source/api/ape/search/properties_d.html",
    "revision": "6d7c4b105594e43e18990389bda7229f"
  },
  {
    "url": "source/api/ape/search/properties_d.js",
    "revision": "15a8532453933300e95194d6defcea4a"
  },
  {
    "url": "source/api/ape/search/properties_e.html",
    "revision": "80994627fc4efd5767dee651b0cfe6a5"
  },
  {
    "url": "source/api/ape/search/properties_e.js",
    "revision": "3d4bdef0c75e820698b6c713d4dd400c"
  },
  {
    "url": "source/api/ape/search/properties_f.html",
    "revision": "154ae60d5ec063cb59c0a64f3332f4e1"
  },
  {
    "url": "source/api/ape/search/properties_f.js",
    "revision": "053e5fcb70cb696817c471ecae27a384"
  },
  {
    "url": "source/api/ape/search/search.css",
    "revision": "62c88f58334ead8314afc96a8170411e"
  },
  {
    "url": "source/api/ape/search/search.js",
    "revision": "45ecb6807f17457d9557a058b774773d"
  },
  {
    "url": "source/api/ape/search/searchdata.js",
    "revision": "73b825ec7d6a8734fe9f2bc4c99d2f84"
  },
  {
    "url": "source/api/ape/search/variables_0.html",
    "revision": "f3ddb8dfd3ea5d47648f293a13f8652f"
  },
  {
    "url": "source/api/ape/search/variables_0.js",
    "revision": "a4c680a4e7256851e4ca73a4accaf98b"
  },
  {
    "url": "source/api/ape/search/variables_1.html",
    "revision": "38692a1d86dbf7ed48d5c31fc6782b1f"
  },
  {
    "url": "source/api/ape/search/variables_1.js",
    "revision": "b20f53cff3bd442488c7bf1f66cdee0c"
  },
  {
    "url": "source/api/ape/tabs.css",
    "revision": "03e17602ad41cd3551eb76d9434f8ca0"
  },
  {
    "url": "source/api/mig/app_api_introduction.html",
    "revision": "7f05a5ee6682a610356487b2e9233b53"
  },
  {
    "url": "source/api/mig/assets/js/ie10-viewport-bug-workaround.js",
    "revision": "d6b71b89986868b03eab548a8252d7aa"
  },
  {
    "url": "source/api/mig/assets/js/jquery.min.js",
    "revision": "056fd2a776eae867b7e2b5ddcb754d78"
  },
  {
    "url": "source/api/mig/bootstrap/css/bootstrap.css",
    "revision": "6199fc2e953656312446004cfec7472f"
  },
  {
    "url": "source/api/mig/bootstrap/css/docs.css",
    "revision": "a068305cf986892b9ca4c2693221cc9f"
  },
  {
    "url": "source/api/mig/bootstrap/js/bootstrap.min.js",
    "revision": "046ba2b5f4cff7d2eaaa1af55caa9fd8"
  },
  {
    "url": "source/api/mig/core_api_automation.html",
    "revision": "c6b822a2db6bf8e570a8bc923ed0a3cc"
  },
  {
    "url": "source/api/mig/core_api_config.html",
    "revision": "89af43d139cecc37909af1eae0ada0bf"
  },
  {
    "url": "source/api/mig/core_api_logging.html",
    "revision": "7d4f7301cff24776b70784dd4b12eb52"
  },
  {
    "url": "source/api/mig/core_api_statistics.html",
    "revision": "53bd8464c8858d9921242dd09d84d607"
  },
  {
    "url": "source/api/mig/css/bootstrap-doc.css",
    "revision": "5a0b05e7513a446c79f24b4831cbb15a"
  },
  {
    "url": "source/api/mig/css/bootstrap-responsive.css",
    "revision": "871defe8c1a928bcbcc3efcf4a1dde42"
  },
  {
    "url": "source/api/mig/css/bootstrap.css",
    "revision": "a503680494d9927b35e02b5759730e9f"
  },
  {
    "url": "source/api/mig/css/dashboard.css",
    "revision": "47f2d1cffaab64b9329dcf3d888572d0"
  },
  {
    "url": "source/api/mig/css/prettify.css",
    "revision": "a987f72342eeaece278982a377eca816"
  },
  {
    "url": "source/api/mig/includes/header.html",
    "revision": "d455e9ca1e61cd407e889359b784b771"
  },
  {
    "url": "source/api/mig/includes/sidemenu.html",
    "revision": "c4b7fd0ff255e83e18501544681d133d"
  },
  {
    "url": "source/api/mig/js/bootstrap.js",
    "revision": "c4e4ebc476cf62d4840a19cd42b06255"
  },
  {
    "url": "source/api/mig/js/common_includes.js",
    "revision": "360da97bc92b89fa99a6c1c35a2971e6"
  },
  {
    "url": "source/api/mig/js/html5shiv.js",
    "revision": "262bb88879efaaf75c74154fe0308952"
  },
  {
    "url": "source/api/mig/js/jquery.js",
    "revision": "07c00fb16c1e0e1a6274199b7c334a9a"
  },
  {
    "url": "source/api/mig/js/prettify.js",
    "revision": "1dff693b7692757c5aeee0c75979301f"
  },
  {
    "url": "source/api/mig/mig_api_camerainput.html",
    "revision": "bb694cf4b6bc2d1c172048b9ab8d8dcf"
  },
  {
    "url": "source/api/mig/mig_api_insteon.html",
    "revision": "f51247f96935a6d38691047309eb3091"
  },
  {
    "url": "source/api/mig/mig_api_interfaces.html",
    "revision": "6787fb3ac70ab8a7c0ae3cebe21fffef"
  },
  {
    "url": "source/api/mig/mig_api_lircremote.html",
    "revision": "fb0f060b0df7f483bc57923eebf023a1"
  },
  {
    "url": "source/api/mig/mig_api_upnp.html",
    "revision": "c30aef74bb916a823a30a917c3c875a2"
  },
  {
    "url": "source/api/mig/mig_api_w800rf.html",
    "revision": "28ce5caebdc82bd6153303ef8036536a"
  },
  {
    "url": "source/api/mig/mig_api_x10.html",
    "revision": "a2949c10be9f2bf6ad18b296d362e3fb"
  },
  {
    "url": "source/api/mig/mig_api_zwave.html",
    "revision": "93d72456c4dea8f83692ee916f50b588"
  },
  {
    "url": "source/api/mig/overview.html",
    "revision": "eb0dec0f8a6d54ca6bf2e8fb4edd9072"
  },
  {
    "url": "source/app/controllers/content_loader.js",
    "revision": "678b2198197dca1ef8809969dba2e182"
  },
  {
    "url": "source/app/layout/header.css",
    "revision": "e28dab5c3bbe9109aafe8d9070994d35"
  },
  {
    "url": "source/app/layout/header.html",
    "revision": "f1416c59dfb4cd34bdd2fee9d481461c"
  },
  {
    "url": "source/app/layout/side_menu_item.html",
    "revision": "94587de6b6ddbd19c9a084195df8de38"
  },
  {
    "url": "source/app/layout/side_menu_subitem.html",
    "revision": "0aa41cdfd7240f9be0b279702ec8ba51"
  },
  {
    "url": "source/app/layout/side_menu.css",
    "revision": "5a1ff467966e7bab8bc26dffca12bc4b"
  },
  {
    "url": "source/app/layout/side_menu.html",
    "revision": "0068c3511cbcf5e0e89b98fb42f6eb49"
  },
  {
    "url": "source/app/templates/mdl_card.css",
    "revision": "5895d6fc071fff05095f5872277242e6"
  },
  {
    "url": "source/app/templates/mdl_card.html",
    "revision": "61f9c04d0602223d14da9df3ffcefd14"
  },
  {
    "url": "source/css/animate.css",
    "revision": "07f146141537e04ee282a965d8053198"
  },
  {
    "url": "source/css/animate.min.css",
    "revision": "178b651958ceff556cbc5f355e08bbf1"
  },
  {
    "url": "source/css/flex-layout-attribute.min.css",
    "revision": "c55488315343d9afb4d13ebf9cc8f97b"
  },
  {
    "url": "source/index.css",
    "revision": "50932a101dbeb4470db95cd6dd8a4b83"
  },
  {
    "url": "source/index.html",
    "revision": "55c2c52a979d9eab7919483a99de8a71"
  },
  {
    "url": "source/index.js",
    "revision": "d00f314f26a248801b898f1a8173b52e"
  },
  {
    "url": "source/js/mdl/material.blue-indigo.min.css",
    "revision": "60a2d341769bbf72ae8cdba9a59ba2b6"
  },
  {
    "url": "source/js/mdl/material.green-pink.min.css",
    "revision": "4dfad3cb6c678cb2e5aaedd81ebe8b46"
  },
  {
    "url": "source/js/mdl/material.js",
    "revision": "60f3ee61721d5bbac709fad9c239f2ac"
  },
  {
    "url": "source/js/mdl/material.light_green-pink.min.css",
    "revision": "45d2af18d4499a5d70c7bdfc932f9bbf"
  },
  {
    "url": "source/js/mdl/material.min.js",
    "revision": "713af0c6ce93dbbce2f00bf0a98d0541"
  },
  {
    "url": "source/js/prism/clipboard.min.js",
    "revision": "3e5e0fa949e0e7c5ed5fed7b4cc0ee00"
  },
  {
    "url": "source/js/prism/prism.css",
    "revision": "485c9fc9787ea73d7c802822096c5dfe"
  },
  {
    "url": "source/js/prism/prism.js",
    "revision": "1a7c3a75daca45e74ca45b4efa3b1bca"
  },
  {
    "url": "source/js/zuix/zuix-bundler.js",
    "revision": "eb1e6896190dc168976e3bfade74e1dc"
  },
  {
    "url": "source/js/zuix/zuix-bundler.min.js",
    "revision": "b35b5244abbd5fa7d894d5bdba111209"
  },
  {
    "url": "source/js/zuix/zuix.js",
    "revision": "d1c5d94d44d17e5619a1404eab20f862"
  },
  {
    "url": "source/js/zuix/zuix.min.js",
    "revision": "17b65a7df5599d242e5caae2549c12f2"
  },
  {
    "url": "source/manifest.json",
    "revision": "de8b1bc31250b8b6e3f63d84bf3cd9d7"
  },
  {
    "url": "source/site_config.js",
    "revision": "acd555aa511d44f32a5fe11ddf9a8eef"
  },
  {
    "url": "source/walkthrough.html",
    "revision": "e282b57e2966b0f982cf2d614bf72f64"
  },
  {
    "url": "source/workbox-sw.js",
    "revision": "ed25dc64f757df940d68d70073faac6c"
  },
  {
    "url": "tasks/zuix/bin/build.js",
    "revision": "6c1fe699345c261942d65f603637511e"
  },
  {
    "url": "tasks/zuix/bin/watch.js",
    "revision": "85c3d4683a73944820d8551e4bd6e665"
  },
  {
    "url": "tasks/zuix/engines/swig-md.js",
    "revision": "6aa74baca99aa46de47627d8325ebd5b"
  },
  {
    "url": "tasks/zuix/engines/tags/author-tag.js",
    "revision": "fb6590e6295e16af5bd7e956eaf430c8"
  },
  {
    "url": "tasks/zuix/engines/tags/codepen-tag.js",
    "revision": "2e09c7a025fe8ccfc2733b74a06f154d"
  },
  {
    "url": "tasks/zuix/engines/tags/github-tag.js",
    "revision": "82ecb3e5a413eea30e79ec44e62bcbf4"
  },
  {
    "url": "tasks/zuix/engines/tags/glitch-tag.js",
    "revision": "a4eb9d1c8b73ad09477aaf6c3b78f43b"
  },
  {
    "url": "tasks/zuix/engines/tags/link-tag.js",
    "revision": "070f400d56120ef851799650c7a8651b"
  },
  {
    "url": "tasks/zuix/engines/tags/youtube-tag.js",
    "revision": "312f5811921c00c687f7f9cbebc5c193"
  },
  {
    "url": "tasks/zuix/engines/zuix-bundler.js",
    "revision": "857d407011832260814de8e09d478d3c"
  },
  {
    "url": "tasks/zuix/helpers/zuix-context.js",
    "revision": "7d8edef8b13f16ebbe8114839c6e5281"
  },
  {
    "url": "tasks/zuix/lib/logger.js",
    "revision": "0f371f9b865d163d26673f70603bff54"
  },
  {
    "url": "walkthrough.html",
    "revision": "a69fc4d22db19a821f0a5580f0870729"
  },
  {
    "url": "workbox-sw.js",
    "revision": "ed25dc64f757df940d68d70073faac6c"
  },
  {
    "url": "api/ape/bc_s.png",
    "revision": "ceaaae73746596a7519cfe782d8aa065"
  },
  {
    "url": "api/ape/bdwn.png",
    "revision": "6249334b2e7fc28090f26abeb328eb78"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_module_helper.png",
    "revision": "2f11d2d225fdd299a1ffbc63fd732bbe"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_modules_manager.png",
    "revision": "a2dd1a4fc2e8fef6946d717f75716c8e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_program_helper_base.png",
    "revision": "b4694760613b114a8ec4731b476afec5"
  },
  {
    "url": "api/ape/closed.png",
    "revision": "3fa180a1c853204ee64235708fb8e162"
  },
  {
    "url": "api/ape/doc.png",
    "revision": "31ed05886f30a2be256e9df86a25586f"
  },
  {
    "url": "api/ape/doxygen.png",
    "revision": "4d8b8c8f1a68a4f320da8294a085f251"
  },
  {
    "url": "api/ape/folderclosed.png",
    "revision": "0b7046d86103299b2a0306ddf33ec004"
  },
  {
    "url": "api/ape/folderopen.png",
    "revision": "9ff4412a8e93e25320b9e260951c6a04"
  },
  {
    "url": "api/ape/hglogo.png",
    "revision": "bf0ac2e899f527560192f7f9e0d34e31"
  },
  {
    "url": "api/ape/nav_f.png",
    "revision": "4e4d8be23c6d6bbe0184fd891ff59e00"
  },
  {
    "url": "api/ape/nav_g.png",
    "revision": "6cf157aabeb91ae637a6d770b07c1011"
  },
  {
    "url": "api/ape/nav_h.png",
    "revision": "935f050f10b7fe425509491f207f574f"
  },
  {
    "url": "api/ape/open.png",
    "revision": "468c228548b4a85dd54d544810bd0edd"
  },
  {
    "url": "api/ape/search/close.png",
    "revision": "f466a7fdf1edfb1aa52ffab60f819119"
  },
  {
    "url": "api/ape/search/mag_sel.png",
    "revision": "4e1ad7e6dd856201a141aed6ea903ba6"
  },
  {
    "url": "api/ape/search/search_l.png",
    "revision": "b576f6a5b63fe17a09a6160aff7c5beb"
  },
  {
    "url": "api/ape/search/search_m.png",
    "revision": "20910c4cfe0e8efc8211bc9f7e58b7ff"
  },
  {
    "url": "api/ape/search/search_r.png",
    "revision": "fd9de7ab77af6f9a2833a7250f6cba07"
  },
  {
    "url": "api/ape/splitbar.png",
    "revision": "8d590f70c25a81e71b99f6c8246b067e"
  },
  {
    "url": "api/ape/sync_off.png",
    "revision": "12a5e283812e092b5a74b0d47e95e9a9"
  },
  {
    "url": "api/ape/sync_on.png",
    "revision": "b1cc394ed471b4ab97be14f1e1a7cefa"
  },
  {
    "url": "api/ape/tab_a.png",
    "revision": "2a5327b5dfc494fd8688fd887991cdab"
  },
  {
    "url": "api/ape/tab_b.png",
    "revision": "c7cd16cfabe8a14b9848f813df53fc2e"
  },
  {
    "url": "api/ape/tab_h.png",
    "revision": "38c6c507f0ab91770a0ed9a668a03551"
  },
  {
    "url": "api/ape/tab_s.png",
    "revision": "d5a3e094c590d5113232b74cd902f58f"
  },
  {
    "url": "api/mig/ico/apple-touch-icon-114-precomposed.png",
    "revision": "07dffff7f7c2fcc59bd833456e4a06e3"
  },
  {
    "url": "api/mig/ico/apple-touch-icon-144-precomposed.png",
    "revision": "55e3b458c3769678da35e82ab498834d"
  },
  {
    "url": "api/mig/ico/apple-touch-icon-57-precomposed.png",
    "revision": "8c480ffc8a50a4e30dfeb06da221d15a"
  },
  {
    "url": "api/mig/ico/apple-touch-icon-72-precomposed.png",
    "revision": "b425f15a9997e8a979ef469b5bfefba1"
  },
  {
    "url": "api/mig/ico/favicon.png",
    "revision": "5c797ba02adbcad789c83c297bcf3450"
  },
  {
    "url": "images/body-bg.jpg",
    "revision": "3bec2690ab6db82e669eb0c0291b7879"
  },
  {
    "url": "images/docs/admin_page_url.jpg",
    "revision": "863989ace7182e332f1fa2532994040c"
  },
  {
    "url": "images/docs/admin_page_url.png",
    "revision": "5266b6e5def38885c51035028fc0b3f3"
  },
  {
    "url": "images/docs/alarm_system_01.jpg",
    "revision": "a8922ffcbcc18a2f73fe54316ad29796"
  },
  {
    "url": "images/docs/alarm_system_01.png",
    "revision": "3f71d5abba7bdd1b5ac065c792714819"
  },
  {
    "url": "images/docs/chemical_synapse.jpg",
    "revision": "32f1a01637b41516586ce70dfb07d254"
  },
  {
    "url": "images/docs/configure_menu.jpg",
    "revision": "835c8a9997ccdd102ebd019f6503612c"
  },
  {
    "url": "images/docs/configure_menu.png",
    "revision": "967eb447c7d749a286723c51bd262903"
  },
  {
    "url": "images/docs/dashboard_page_01.jpg",
    "revision": "efd5c0e7d47fc340d6e15bbbb6d25f9d"
  },
  {
    "url": "images/docs/dashboard_page_01.png",
    "revision": "77f1fc6539a33329df9885a21f1c829d"
  },
  {
    "url": "images/docs/groups_add_group.jpg",
    "revision": "f4c952475eae45f58aa57c446d68081d"
  },
  {
    "url": "images/docs/groups_add_group.png",
    "revision": "901e33284519b08e2b721df7f172de1b"
  },
  {
    "url": "images/docs/groups_add_module.jpg",
    "revision": "56ef3de5acf68b30dde566c483de4f19"
  },
  {
    "url": "images/docs/groups_add_module.png",
    "revision": "2bf9ad612e9cedc80014be290222f7ac"
  },
  {
    "url": "images/docs/interconnections_01.jpg",
    "revision": "6b4e27ef27220fc820b3943f6d294e65"
  },
  {
    "url": "images/docs/interconnections_01.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/interconnections_02.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/interconnections_02.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/interconnections_03.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/interconnections_03.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/interconnections_04.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/interconnections_04.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/interconnections_04b.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/interconnections_04b.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/interconnections_05.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/interconnections_05.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/macro_record_01.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/macro_record_01.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/media_server_widget_00.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/media_server_widget_00.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/package_repos.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/docs/weather_options_01.jpg",
    "revision": "3f4b7eba62dea084fd2d79b6cf96abd9"
  },
  {
    "url": "images/docs/weather_options_01.png",
    "revision": "db3d80c6134a72b493337643705fcb1d"
  },
  {
    "url": "images/docs/widget_options_01.gif",
    "revision": "0692ef6ad193c7e2ad272c4249df3ced"
  },
  {
    "url": "images/docs/widget_options_01.jpg",
    "revision": "7cfd2dfeb25b304b74148dbe8e965de8"
  },
  {
    "url": "images/docs/widget_options_01.png",
    "revision": "a7e95c12db0544c57a32c3b7127a59df"
  },
  {
    "url": "images/docs/widgets_dimmer_type.jpg",
    "revision": "ed1014ed6aa40db3091bacd143ec519d"
  },
  {
    "url": "images/docs/widgets_dimmer_type.png",
    "revision": "a7a5e18055656fc2edc4ee1a42f9331d"
  },
  {
    "url": "images/docs/widgets_editor_html.jpg",
    "revision": "de93b3dbed14cba3cc2acad1566ea3af"
  },
  {
    "url": "images/docs/widgets_editor_html.png",
    "revision": "f7374c222450e1c7fc4eaefe7d2c5701"
  },
  {
    "url": "images/docs/widgets_editor_js.jpg",
    "revision": "662186a3f097d6d3de41420baf306ba3"
  },
  {
    "url": "images/docs/widgets_editor_js.png",
    "revision": "696c3ab3b786d9e31568c500d5bcb7a0"
  },
  {
    "url": "images/docs/widgets_editor_list.jpg",
    "revision": "1bd328b365d078010e152f61d3479842"
  },
  {
    "url": "images/docs/widgets_editor_list.png",
    "revision": "331a36f2871251798a177a4067f012b0"
  },
  {
    "url": "images/docs/widgets_editor_params.jpg",
    "revision": "2f292ca77f084da43b2303360943c2b4"
  },
  {
    "url": "images/docs/widgets_editor_params.png",
    "revision": "c1711c37d88e75af2abb7488b6fc4db1"
  },
  {
    "url": "images/download-button.png",
    "revision": "c5a69f55d948670636f23b3247ec211f"
  },
  {
    "url": "images/fab-github.png",
    "revision": "1109bacf0ea94134b3b158b0c3030bcd"
  },
  {
    "url": "images/fab-google-plus.png",
    "revision": "c2bbda90657e277e896123b7219a7a6f"
  },
  {
    "url": "images/fab-youtube.png",
    "revision": "ff931d74b4d5cc037eec86c629295b27"
  },
  {
    "url": "images/github-button.png",
    "revision": "d6218ab97a1de1d9cd49b47c158777ed"
  },
  {
    "url": "images/github.png",
    "revision": "bc0550c0fe9c550342b069ada1b33272"
  },
  {
    "url": "images/header-bg.jpg",
    "revision": "7b2b6b84bb8f800dc833dd1f9671ffd6"
  },
  {
    "url": "images/hgplus/hg_phone_01.jpg",
    "revision": "025271dc75d10c2d03b537402bbbd2bd"
  },
  {
    "url": "images/hgplus/hg_phone_01.png",
    "revision": "ec62d1b8635783cb48f585f5872f8b3b"
  },
  {
    "url": "images/hgplus/hg_phone_02.jpg",
    "revision": "22c88abbcd598565c12c8dfb0cd3102e"
  },
  {
    "url": "images/hgplus/hg_phone_02.png",
    "revision": "7c89eba3fb656d82af54223f0035be02"
  },
  {
    "url": "images/hgplus/hg_phone_03.jpg",
    "revision": "30200b41eec87aa05cfac7d4883883ad"
  },
  {
    "url": "images/hgplus/hg_phone_03.png",
    "revision": "aff20632b9028b1584ec22977e63265f"
  },
  {
    "url": "images/hgplus/hg_phone_04.jpg",
    "revision": "9dd19380582030d798165895a6586d6e"
  },
  {
    "url": "images/hgplus/hg_phone_04.png",
    "revision": "4c04c0ee223eefe18895322ac477b59f"
  },
  {
    "url": "images/hgplus/hg_phone_05.jpg",
    "revision": "38334bbf5d71d2f4c9cd1a1c2831dbab"
  },
  {
    "url": "images/hgplus/hg_phone_05.png",
    "revision": "7564c97e33d4804ccbacae39164ab575"
  },
  {
    "url": "images/hgplus/hg_phone_06.jpg",
    "revision": "9e6e4a6026dde129631b3b375b46b261"
  },
  {
    "url": "images/hgplus/hg_phone_06.png",
    "revision": "a6a09d0b884466489581cbb5c032c520"
  },
  {
    "url": "images/hgplus/hg_phone_07.jpg",
    "revision": "fe5a23af6111d6c925693d9df001058b"
  },
  {
    "url": "images/hgplus/hg_phone_07.png",
    "revision": "e452461a23391751f5a4d7b2fac5a666"
  },
  {
    "url": "images/hgplus/hg_phone_media_player.jpg",
    "revision": "6ec310bf4f53c90949e6abc269eaf399"
  },
  {
    "url": "images/hgplus/hg_phone_media_player.png",
    "revision": "4b6a4c9ce5473e9ffb1c9879ed7dac8c"
  },
  {
    "url": "images/hgplus/hg_phone_media_server.jpg",
    "revision": "2b4f1d59a3b9cdc735fa929f9b4a2858"
  },
  {
    "url": "images/hgplus/hg_phone_media_server.png",
    "revision": "eba5718b15aa2664f966265355859908"
  },
  {
    "url": "images/hgplus/hg_tablet_01.jpg",
    "revision": "e78a9f8c3b2180554c6f17075261ba7f"
  },
  {
    "url": "images/hgplus/hg_tablet_01.png",
    "revision": "7c9866efd98da81deabdfcd16ae72ce3"
  },
  {
    "url": "images/hgplus/hg_tablet_02.jpg",
    "revision": "4cf26aaa62fd3a1567a841aaef1487d3"
  },
  {
    "url": "images/hgplus/hg_tablet_02.png",
    "revision": "d8695c17f745ae4fa08ff999125d919c"
  },
  {
    "url": "images/hgplus/hg_tablet_03.jpg",
    "revision": "c457387376acbc13d7e0e32f3ff82983"
  },
  {
    "url": "images/hgplus/hg_tablet_03.png",
    "revision": "ac3518f7c4c6b3b3afb7e894a3421e16"
  },
  {
    "url": "images/hgplus/hg_tablet_04.jpg",
    "revision": "f2947079890e0c60751a2d12620fbab3"
  },
  {
    "url": "images/hgplus/hg_tablet_04.png",
    "revision": "d5761313f2c1831f4fba36fdd132511a"
  },
  {
    "url": "images/hgplus/hg_tablet_05.jpg",
    "revision": "f9298b827efae1325e83f118eb6e9abe"
  },
  {
    "url": "images/hgplus/hg_tablet_05.png",
    "revision": "cacd2823c795c4a6a0a9bf5400fb6870"
  },
  {
    "url": "images/hgplus/hg_tablet_06.jpg",
    "revision": "568eba56b5ac3780668dd34eb77f07cf"
  },
  {
    "url": "images/hgplus/hg_tablet_06.png",
    "revision": "cbab1ea25011f4ea272a4bc6a5a88e9e"
  },
  {
    "url": "images/hgplus/hg_tablet_07.jpg",
    "revision": "2b83d3864f6d950034d601117557a5f7"
  },
  {
    "url": "images/hgplus/hg_tablet_07.png",
    "revision": "25b279bf6e02cab571bd6ae21a3d3167"
  },
  {
    "url": "images/hgplus/hg_tablet_08.jpg",
    "revision": "853ee744cf5b37cce08ea94048fd5820"
  },
  {
    "url": "images/hgplus/hg_tablet_08.png",
    "revision": "2d79334a6045c45404d35be67a156b67"
  },
  {
    "url": "images/hgplus/hgplus_04.jpg",
    "revision": "ad3d2e7057914c1dc3675cf6960cfec8"
  },
  {
    "url": "images/hgplus/hgplus_05.jpg",
    "revision": "632a1a1b282744d8671feb7594d808d2"
  },
  {
    "url": "images/hgplus/hgplus_06.jpg",
    "revision": "d53f613b3740ac48fad944cc5db9c535"
  },
  {
    "url": "images/hgplus/hgplus_07.jpg",
    "revision": "a300f8b9a5689147d1b4b4fa641f095c"
  },
  {
    "url": "images/hgplus/hgplus_08.jpg",
    "revision": "c5c39f8c917d2788f114e7164dcc0d39"
  },
  {
    "url": "images/hgplus/hgplus_09.jpg",
    "revision": "97881a4788e763ca2008bde736272ae3"
  },
  {
    "url": "images/hgplus/hgplus_11.jpg",
    "revision": "10a792b0a8501ae6c672d8ebe30215ae"
  },
  {
    "url": "images/hgplus/hgplus_11.png",
    "revision": "1d86dc7b38b477ddd7fcd4a137de7fb1"
  },
  {
    "url": "images/hgplus/hgplus_12.jpg",
    "revision": "c6111bac3ab626a5ef392b70a7c8b067"
  },
  {
    "url": "images/hgplus/hgplus_12.png",
    "revision": "731baba7f2ea24169142d8df59f5c007"
  },
  {
    "url": "images/hgplus/hgplus_13.jpg",
    "revision": "db49e9e21f2349117d49099cbab66de5"
  },
  {
    "url": "images/hgplus/hgplus_14.jpg",
    "revision": "c48d86cff94d68bd60e241a40c6dcd1b"
  },
  {
    "url": "images/hgplus/hgplus_14.png",
    "revision": "2b22e227c648ccb8f42f0795ea2859c0"
  },
  {
    "url": "images/highlight-bg.jpg",
    "revision": "4603f244bdc991af6019b9029869e236"
  },
  {
    "url": "images/logos/android_logo.png",
    "revision": "9d258cb09c821961e092b9b459399d9e"
  },
  {
    "url": "images/logos/bpilogo.jpg",
    "revision": "bb94ae185fe02e7f0058da149964991a"
  },
  {
    "url": "images/logos/bug.png",
    "revision": "fe8accc42e09fe9d3143df8ff26687b7"
  },
  {
    "url": "images/logos/cubieboard.png",
    "revision": "6235bdfc5d73a0f551bd339fda189a42"
  },
  {
    "url": "images/logos/genie.png",
    "revision": "d311329f6b7f6588be49094a592492c9"
  },
  {
    "url": "images/logos/jeannie.png",
    "revision": "51ea5edf6491235e230b527bfa12155f"
  },
  {
    "url": "images/logos/luxicon_deb.png",
    "revision": "07fc587f5bbe1b0452afd141b15dd36e"
  },
  {
    "url": "images/logos/luxicon.png",
    "revision": "bcc6a157a3003ba322ce13421c1d06c1"
  },
  {
    "url": "images/logos/macicon.png",
    "revision": "6547cc4d78ce397f00f7bb7afdf82f10"
  },
  {
    "url": "images/logos/rpiicon.png",
    "revision": "f8c8809d0c42aae8ea9886c15efb9836"
  },
  {
    "url": "images/logos/winicon.png",
    "revision": "39eca632bcca295452428f45dff0090b"
  },
  {
    "url": "images/logos/wp_logo.png",
    "revision": "06eedf506ea3356872efb22f8b37e4ca"
  },
  {
    "url": "images/sidebar-bg.jpg",
    "revision": "2efe90ece20b7f1a9eb040f9cb6b668c"
  },
  {
    "url": "source/api/ape/bc_s.png",
    "revision": "ceaaae73746596a7519cfe782d8aa065"
  },
  {
    "url": "source/api/ape/bdwn.png",
    "revision": "6249334b2e7fc28090f26abeb328eb78"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_module_helper.png",
    "revision": "2f11d2d225fdd299a1ffbc63fd732bbe"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_modules_manager.png",
    "revision": "a2dd1a4fc2e8fef6946d717f75716c8e"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper.png",
    "revision": "9ed82046b6e36dada8689758e01c221f"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_program_helper_base.png",
    "revision": "b4694760613b114a8ec4731b476afec5"
  },
  {
    "url": "source/api/ape/closed.png",
    "revision": "3fa180a1c853204ee64235708fb8e162"
  },
  {
    "url": "source/api/ape/doc.png",
    "revision": "31ed05886f30a2be256e9df86a25586f"
  },
  {
    "url": "source/api/ape/doxygen.png",
    "revision": "4d8b8c8f1a68a4f320da8294a085f251"
  },
  {
    "url": "source/api/ape/folderclosed.png",
    "revision": "0b7046d86103299b2a0306ddf33ec004"
  },
  {
    "url": "source/api/ape/folderopen.png",
    "revision": "9ff4412a8e93e25320b9e260951c6a04"
  },
  {
    "url": "source/api/ape/hglogo.png",
    "revision": "bf0ac2e899f527560192f7f9e0d34e31"
  },
  {
    "url": "source/api/ape/nav_f.png",
    "revision": "4e4d8be23c6d6bbe0184fd891ff59e00"
  },
  {
    "url": "source/api/ape/nav_g.png",
    "revision": "6cf157aabeb91ae637a6d770b07c1011"
  },
  {
    "url": "source/api/ape/nav_h.png",
    "revision": "935f050f10b7fe425509491f207f574f"
  },
  {
    "url": "source/api/ape/open.png",
    "revision": "468c228548b4a85dd54d544810bd0edd"
  },
  {
    "url": "source/api/ape/search/close.png",
    "revision": "f466a7fdf1edfb1aa52ffab60f819119"
  },
  {
    "url": "source/api/ape/search/mag_sel.png",
    "revision": "4e1ad7e6dd856201a141aed6ea903ba6"
  },
  {
    "url": "source/api/ape/search/search_l.png",
    "revision": "b576f6a5b63fe17a09a6160aff7c5beb"
  },
  {
    "url": "source/api/ape/search/search_m.png",
    "revision": "20910c4cfe0e8efc8211bc9f7e58b7ff"
  },
  {
    "url": "source/api/ape/search/search_r.png",
    "revision": "fd9de7ab77af6f9a2833a7250f6cba07"
  },
  {
    "url": "source/api/ape/splitbar.png",
    "revision": "8d590f70c25a81e71b99f6c8246b067e"
  },
  {
    "url": "source/api/ape/sync_off.png",
    "revision": "12a5e283812e092b5a74b0d47e95e9a9"
  },
  {
    "url": "source/api/ape/sync_on.png",
    "revision": "b1cc394ed471b4ab97be14f1e1a7cefa"
  },
  {
    "url": "source/api/ape/tab_a.png",
    "revision": "2a5327b5dfc494fd8688fd887991cdab"
  },
  {
    "url": "source/api/ape/tab_b.png",
    "revision": "c7cd16cfabe8a14b9848f813df53fc2e"
  },
  {
    "url": "source/api/ape/tab_h.png",
    "revision": "38c6c507f0ab91770a0ed9a668a03551"
  },
  {
    "url": "source/api/ape/tab_s.png",
    "revision": "d5a3e094c590d5113232b74cd902f58f"
  },
  {
    "url": "source/api/mig/ico/apple-touch-icon-114-precomposed.png",
    "revision": "07dffff7f7c2fcc59bd833456e4a06e3"
  },
  {
    "url": "source/api/mig/ico/apple-touch-icon-144-precomposed.png",
    "revision": "55e3b458c3769678da35e82ab498834d"
  },
  {
    "url": "source/api/mig/ico/apple-touch-icon-57-precomposed.png",
    "revision": "8c480ffc8a50a4e30dfeb06da221d15a"
  },
  {
    "url": "source/api/mig/ico/apple-touch-icon-72-precomposed.png",
    "revision": "b425f15a9997e8a979ef469b5bfefba1"
  },
  {
    "url": "source/api/mig/ico/favicon.png",
    "revision": "5c797ba02adbcad789c83c297bcf3450"
  },
  {
    "url": "source/images/body-bg.jpg",
    "revision": "3bec2690ab6db82e669eb0c0291b7879"
  },
  {
    "url": "source/images/docs/admin_page_url.jpg",
    "revision": "863989ace7182e332f1fa2532994040c"
  },
  {
    "url": "source/images/docs/admin_page_url.png",
    "revision": "5266b6e5def38885c51035028fc0b3f3"
  },
  {
    "url": "source/images/docs/alarm_system_01.jpg",
    "revision": "a8922ffcbcc18a2f73fe54316ad29796"
  },
  {
    "url": "source/images/docs/alarm_system_01.png",
    "revision": "a9d670e71fa7bd6bc544f445d8cede67"
  },
  {
    "url": "source/images/docs/chemical_synapse.jpg",
    "revision": "456e71ef6bdb4edd343369a98297b6fb"
  },
  {
    "url": "source/images/docs/configure_menu.jpg",
    "revision": "228deba0785cfbf7aa4e62e7b59e6316"
  },
  {
    "url": "source/images/docs/configure_menu.png",
    "revision": "848690eedfcd01eae92605f4517b93c2"
  },
  {
    "url": "source/images/docs/dashboard_page_01.jpg",
    "revision": "0d07a1aa7b8600ff832761b5f6ff927e"
  },
  {
    "url": "source/images/docs/dashboard_page_01.png",
    "revision": "1e4b075018c5a3153f6c447a3329e278"
  },
  {
    "url": "source/images/docs/groups_add_group.jpg",
    "revision": "f4c952475eae45f58aa57c446d68081d"
  },
  {
    "url": "source/images/docs/groups_add_group.png",
    "revision": "b5e94599e5344a9120edeb9a312ad9f4"
  },
  {
    "url": "source/images/docs/groups_add_module.jpg",
    "revision": "51939e555ff8f64af8ccf6eac2df5a9e"
  },
  {
    "url": "source/images/docs/groups_add_module.png",
    "revision": "c05dc7c6440555b6d10339fc68c3e013"
  },
  {
    "url": "source/images/docs/interconnections_01.jpg",
    "revision": "6b4e27ef27220fc820b3943f6d294e65"
  },
  {
    "url": "source/images/docs/interconnections_01.png",
    "revision": "2b3fef114a1f171292b92c50315c221f"
  },
  {
    "url": "source/images/docs/interconnections_02.jpg",
    "revision": "21121b582a7a7d683bd616debb98b8e8"
  },
  {
    "url": "source/images/docs/interconnections_02.png",
    "revision": "893e23e53c77d77c42204ddb62bde23c"
  },
  {
    "url": "source/images/docs/interconnections_03.jpg",
    "revision": "23ad6deb47d1450d1193eb2612a1f3aa"
  },
  {
    "url": "source/images/docs/interconnections_03.png",
    "revision": "b54fc5553d68779530fe1e614f834647"
  },
  {
    "url": "source/images/docs/interconnections_04.jpg",
    "revision": "6ce3f10fd6d2147a49c04f06df2f7067"
  },
  {
    "url": "source/images/docs/interconnections_04.png",
    "revision": "f764f963331aa630261ad78768c51edf"
  },
  {
    "url": "source/images/docs/interconnections_04b.jpg",
    "revision": "2b1ebe6f8e544d4e5d536846c8fd2b02"
  },
  {
    "url": "source/images/docs/interconnections_04b.png",
    "revision": "486ac2a0840184b0b330d0936f8ba38b"
  },
  {
    "url": "source/images/docs/interconnections_05.jpg",
    "revision": "f67ee7e50241dff0998a8e56c8e095cf"
  },
  {
    "url": "source/images/docs/interconnections_05.png",
    "revision": "b243a65eccbbeff03c0cbf84b64f09eb"
  },
  {
    "url": "source/images/docs/macro_record_01.jpg",
    "revision": "be171293ce73134e9a6cc34145a25e1f"
  },
  {
    "url": "source/images/docs/macro_record_01.png",
    "revision": "fbcdbf324f4a237b107b19be37864053"
  },
  {
    "url": "source/images/docs/media_server_widget_00.jpg",
    "revision": "3bcb8f245cf4dd61311fd3c7e55b18e1"
  },
  {
    "url": "source/images/docs/media_server_widget_00.png",
    "revision": "2460a27773786b158d9bb59e0387f5dc"
  },
  {
    "url": "source/images/docs/package_repos.jpg",
    "revision": "b4014105a8bb692a94d8c2ff27202383"
  },
  {
    "url": "source/images/docs/package_repos.png",
    "revision": "92e12e6e731146af0af8cfb251be1104"
  },
  {
    "url": "source/images/docs/program_editor_01.jpg",
    "revision": "88f19f22be74f1d99bb74febb00412f4"
  },
  {
    "url": "source/images/docs/program_editor_01.png",
    "revision": "995064402485e41b639151822cd5c5c1"
  },
  {
    "url": "source/images/docs/scheduler_calendar_01.jpg",
    "revision": "54b91abf13bf120a2ca90b62fa256371"
  },
  {
    "url": "source/images/docs/scheduler_calendar_01.png",
    "revision": "f5d09539edc6558728e34bd4f785ae0d"
  },
  {
    "url": "source/images/docs/scheduler_wizard_01.jpg",
    "revision": "e9080d00d4f4b0f96ddf11c99668f8b9"
  },
  {
    "url": "source/images/docs/scheduler_wizard_01.png",
    "revision": "aacea54d78ca2ec8e3086ca4ce34271e"
  },
  {
    "url": "source/images/docs/system_settings_01.jpg",
    "revision": "ed9471f69345bd4f805aa380f9a6fe34"
  },
  {
    "url": "source/images/docs/system_settings_01.png",
    "revision": "98a02c995bfd86276c95c914c78d2651"
  },
  {
    "url": "source/images/docs/villa.jpg",
    "revision": "2df6d5269a804fd9a83fa25efc42f2e3"
  },
  {
    "url": "source/images/docs/weather_options_01.jpg",
    "revision": "3f4b7eba62dea084fd2d79b6cf96abd9"
  },
  {
    "url": "source/images/docs/weather_options_01.png",
    "revision": "db3d80c6134a72b493337643705fcb1d"
  },
  {
    "url": "source/images/docs/widget_options_01.gif",
    "revision": "0692ef6ad193c7e2ad272c4249df3ced"
  },
  {
    "url": "source/images/docs/widget_options_01.jpg",
    "revision": "7cfd2dfeb25b304b74148dbe8e965de8"
  },
  {
    "url": "source/images/docs/widget_options_01.png",
    "revision": "a7e95c12db0544c57a32c3b7127a59df"
  },
  {
    "url": "source/images/docs/widgets_dimmer_type.jpg",
    "revision": "ed1014ed6aa40db3091bacd143ec519d"
  },
  {
    "url": "source/images/docs/widgets_dimmer_type.png",
    "revision": "a7a5e18055656fc2edc4ee1a42f9331d"
  },
  {
    "url": "source/images/docs/widgets_editor_html.jpg",
    "revision": "de93b3dbed14cba3cc2acad1566ea3af"
  },
  {
    "url": "source/images/docs/widgets_editor_html.png",
    "revision": "f7374c222450e1c7fc4eaefe7d2c5701"
  },
  {
    "url": "source/images/docs/widgets_editor_js.jpg",
    "revision": "662186a3f097d6d3de41420baf306ba3"
  },
  {
    "url": "source/images/docs/widgets_editor_js.png",
    "revision": "696c3ab3b786d9e31568c500d5bcb7a0"
  },
  {
    "url": "source/images/docs/widgets_editor_list.jpg",
    "revision": "1bd328b365d078010e152f61d3479842"
  },
  {
    "url": "source/images/docs/widgets_editor_list.png",
    "revision": "331a36f2871251798a177a4067f012b0"
  },
  {
    "url": "source/images/docs/widgets_editor_params.jpg",
    "revision": "2f292ca77f084da43b2303360943c2b4"
  },
  {
    "url": "source/images/docs/widgets_editor_params.png",
    "revision": "c1711c37d88e75af2abb7488b6fc4db1"
  },
  {
    "url": "source/images/download-button.png",
    "revision": "c5a69f55d948670636f23b3247ec211f"
  },
  {
    "url": "source/images/fab-github.png",
    "revision": "1109bacf0ea94134b3b158b0c3030bcd"
  },
  {
    "url": "source/images/fab-google-plus.png",
    "revision": "c2bbda90657e277e896123b7219a7a6f"
  },
  {
    "url": "source/images/fab-youtube.png",
    "revision": "ff931d74b4d5cc037eec86c629295b27"
  },
  {
    "url": "source/images/github-button.png",
    "revision": "d6218ab97a1de1d9cd49b47c158777ed"
  },
  {
    "url": "source/images/github.png",
    "revision": "bc0550c0fe9c550342b069ada1b33272"
  },
  {
    "url": "source/images/header-bg.jpg",
    "revision": "7b2b6b84bb8f800dc833dd1f9671ffd6"
  },
  {
    "url": "source/images/hgplus/hg_phone_01.jpg",
    "revision": "025271dc75d10c2d03b537402bbbd2bd"
  },
  {
    "url": "source/images/hgplus/hg_phone_01.png",
    "revision": "ec62d1b8635783cb48f585f5872f8b3b"
  },
  {
    "url": "source/images/hgplus/hg_phone_02.jpg",
    "revision": "22c88abbcd598565c12c8dfb0cd3102e"
  },
  {
    "url": "source/images/hgplus/hg_phone_02.png",
    "revision": "7c89eba3fb656d82af54223f0035be02"
  },
  {
    "url": "source/images/hgplus/hg_phone_03.jpg",
    "revision": "30200b41eec87aa05cfac7d4883883ad"
  },
  {
    "url": "source/images/hgplus/hg_phone_03.png",
    "revision": "aff20632b9028b1584ec22977e63265f"
  },
  {
    "url": "source/images/hgplus/hg_phone_04.jpg",
    "revision": "9dd19380582030d798165895a6586d6e"
  },
  {
    "url": "source/images/hgplus/hg_phone_04.png",
    "revision": "4c04c0ee223eefe18895322ac477b59f"
  },
  {
    "url": "source/images/hgplus/hg_phone_05.jpg",
    "revision": "38334bbf5d71d2f4c9cd1a1c2831dbab"
  },
  {
    "url": "source/images/hgplus/hg_phone_05.png",
    "revision": "7564c97e33d4804ccbacae39164ab575"
  },
  {
    "url": "source/images/hgplus/hg_phone_06.jpg",
    "revision": "9e6e4a6026dde129631b3b375b46b261"
  },
  {
    "url": "source/images/hgplus/hg_phone_06.png",
    "revision": "a6a09d0b884466489581cbb5c032c520"
  },
  {
    "url": "source/images/hgplus/hg_phone_07.jpg",
    "revision": "fe5a23af6111d6c925693d9df001058b"
  },
  {
    "url": "source/images/hgplus/hg_phone_07.png",
    "revision": "e452461a23391751f5a4d7b2fac5a666"
  },
  {
    "url": "source/images/hgplus/hg_phone_media_player.jpg",
    "revision": "6ec310bf4f53c90949e6abc269eaf399"
  },
  {
    "url": "source/images/hgplus/hg_phone_media_player.png",
    "revision": "4b6a4c9ce5473e9ffb1c9879ed7dac8c"
  },
  {
    "url": "source/images/hgplus/hg_phone_media_server.jpg",
    "revision": "2b4f1d59a3b9cdc735fa929f9b4a2858"
  },
  {
    "url": "source/images/hgplus/hg_phone_media_server.png",
    "revision": "eba5718b15aa2664f966265355859908"
  },
  {
    "url": "source/images/hgplus/hg_tablet_01.jpg",
    "revision": "e78a9f8c3b2180554c6f17075261ba7f"
  },
  {
    "url": "source/images/hgplus/hg_tablet_01.png",
    "revision": "7c9866efd98da81deabdfcd16ae72ce3"
  },
  {
    "url": "source/images/hgplus/hg_tablet_02.jpg",
    "revision": "4cf26aaa62fd3a1567a841aaef1487d3"
  },
  {
    "url": "source/images/hgplus/hg_tablet_02.png",
    "revision": "d8695c17f745ae4fa08ff999125d919c"
  },
  {
    "url": "source/images/hgplus/hg_tablet_03.jpg",
    "revision": "c457387376acbc13d7e0e32f3ff82983"
  },
  {
    "url": "source/images/hgplus/hg_tablet_03.png",
    "revision": "ac3518f7c4c6b3b3afb7e894a3421e16"
  },
  {
    "url": "source/images/hgplus/hg_tablet_04.jpg",
    "revision": "f2947079890e0c60751a2d12620fbab3"
  },
  {
    "url": "source/images/hgplus/hg_tablet_04.png",
    "revision": "d5761313f2c1831f4fba36fdd132511a"
  },
  {
    "url": "source/images/hgplus/hg_tablet_05.jpg",
    "revision": "f9298b827efae1325e83f118eb6e9abe"
  },
  {
    "url": "source/images/hgplus/hg_tablet_05.png",
    "revision": "cacd2823c795c4a6a0a9bf5400fb6870"
  },
  {
    "url": "source/images/hgplus/hg_tablet_06.jpg",
    "revision": "568eba56b5ac3780668dd34eb77f07cf"
  },
  {
    "url": "source/images/hgplus/hg_tablet_06.png",
    "revision": "cbab1ea25011f4ea272a4bc6a5a88e9e"
  },
  {
    "url": "source/images/hgplus/hg_tablet_07.jpg",
    "revision": "2b83d3864f6d950034d601117557a5f7"
  },
  {
    "url": "source/images/hgplus/hg_tablet_07.png",
    "revision": "25b279bf6e02cab571bd6ae21a3d3167"
  },
  {
    "url": "source/images/hgplus/hg_tablet_08.jpg",
    "revision": "853ee744cf5b37cce08ea94048fd5820"
  },
  {
    "url": "source/images/hgplus/hg_tablet_08.png",
    "revision": "2d79334a6045c45404d35be67a156b67"
  },
  {
    "url": "source/images/hgplus/hgplus_04.jpg",
    "revision": "ad3d2e7057914c1dc3675cf6960cfec8"
  },
  {
    "url": "source/images/hgplus/hgplus_05.jpg",
    "revision": "632a1a1b282744d8671feb7594d808d2"
  },
  {
    "url": "source/images/hgplus/hgplus_06.jpg",
    "revision": "d53f613b3740ac48fad944cc5db9c535"
  },
  {
    "url": "source/images/hgplus/hgplus_07.jpg",
    "revision": "a300f8b9a5689147d1b4b4fa641f095c"
  },
  {
    "url": "source/images/hgplus/hgplus_08.jpg",
    "revision": "c5c39f8c917d2788f114e7164dcc0d39"
  },
  {
    "url": "source/images/hgplus/hgplus_09.jpg",
    "revision": "97881a4788e763ca2008bde736272ae3"
  },
  {
    "url": "source/images/hgplus/hgplus_11.jpg",
    "revision": "10a792b0a8501ae6c672d8ebe30215ae"
  },
  {
    "url": "source/images/hgplus/hgplus_11.png",
    "revision": "1d86dc7b38b477ddd7fcd4a137de7fb1"
  },
  {
    "url": "source/images/hgplus/hgplus_12.jpg",
    "revision": "c6111bac3ab626a5ef392b70a7c8b067"
  },
  {
    "url": "source/images/hgplus/hgplus_12.png",
    "revision": "731baba7f2ea24169142d8df59f5c007"
  },
  {
    "url": "source/images/hgplus/hgplus_13.jpg",
    "revision": "db49e9e21f2349117d49099cbab66de5"
  },
  {
    "url": "source/images/hgplus/hgplus_14.jpg",
    "revision": "c48d86cff94d68bd60e241a40c6dcd1b"
  },
  {
    "url": "source/images/hgplus/hgplus_14.png",
    "revision": "2b22e227c648ccb8f42f0795ea2859c0"
  },
  {
    "url": "source/images/highlight-bg.jpg",
    "revision": "4603f244bdc991af6019b9029869e236"
  },
  {
    "url": "source/images/logos/android_logo.png",
    "revision": "9d258cb09c821961e092b9b459399d9e"
  },
  {
    "url": "source/images/logos/bpilogo.jpg",
    "revision": "bb94ae185fe02e7f0058da149964991a"
  },
  {
    "url": "source/images/logos/bug.png",
    "revision": "fe8accc42e09fe9d3143df8ff26687b7"
  },
  {
    "url": "source/images/logos/cubieboard.png",
    "revision": "6235bdfc5d73a0f551bd339fda189a42"
  },
  {
    "url": "source/images/logos/genie.png",
    "revision": "d311329f6b7f6588be49094a592492c9"
  },
  {
    "url": "source/images/logos/jeannie.png",
    "revision": "51ea5edf6491235e230b527bfa12155f"
  },
  {
    "url": "source/images/logos/luxicon_deb.png",
    "revision": "07fc587f5bbe1b0452afd141b15dd36e"
  },
  {
    "url": "source/images/logos/luxicon.png",
    "revision": "bcc6a157a3003ba322ce13421c1d06c1"
  },
  {
    "url": "source/images/logos/macicon.png",
    "revision": "6547cc4d78ce397f00f7bb7afdf82f10"
  },
  {
    "url": "source/images/logos/rpiicon.png",
    "revision": "f8c8809d0c42aae8ea9886c15efb9836"
  },
  {
    "url": "source/images/logos/winicon.png",
    "revision": "39eca632bcca295452428f45dff0090b"
  },
  {
    "url": "source/images/logos/wp_logo.png",
    "revision": "06eedf506ea3356872efb22f8b37e4ca"
  },
  {
    "url": "source/images/sidebar-bg.jpg",
    "revision": "2efe90ece20b7f1a9eb040f9cb6b668c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ cacheName: "images", plugins: [new workbox.expiration.Plugin({"maxEntries":50,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/\.(?:html|json|js|css)$/, workbox.strategies.cacheFirst({ cacheName: "default", plugins: [new workbox.expiration.Plugin({"maxEntries":50,"purgeOnQuotaError":false})] }), 'GET');
