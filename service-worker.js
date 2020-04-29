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
    "revision": "de69bca1ed54e5ff752a48eeecdaaf44"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_data_helper-members.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_data_helper.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_events_helper-members.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_knx_client_helper-members.html",
    "revision": "93c8974b18a871d12a2592d6c9ba922a"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_knx_client_helper.html",
    "revision": "e5e9f18552a9487108f823fbb297b34a"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_module_helper-members.html",
    "revision": "78d2f53b73c20d6f93a7b65da78aeb3e"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_module_helper.html",
    "revision": "92752fbdab7da8e56c0b7d8d5716a074"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_modules_manager-members.html",
    "revision": "e1d644eb8a9757ad66eee371e9f33e6c"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_modules_manager.html",
    "revision": "d1adf5ed559afda5c9d5e652f84fd41c"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_mqtt_client_helper-members.html",
    "revision": "624359c9069387ed5cbd1bfa6ae241aa"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_mqtt_client_helper.html",
    "revision": "9b0da12b37839269155bcb8aab5c6b3f"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_net_helper-members.html",
    "revision": "5df8e4b2d6f2a8c50007d299ddea4613"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_net_helper.html",
    "revision": "f87756a76c7e0b6b2409b24e406ebb52"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper-members.html",
    "revision": "c132bf75e2921406a8839cb51fa70b67"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper.html",
    "revision": "666a68c7b86c5b0951804b6cbb3f5ae8"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_scheduler_helper-members.html",
    "revision": "5fea796b6e076e9c6d488f83fcc7ee25"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_scheduler_helper.html",
    "revision": "fb614a4dd07da253d173c634d3405b8c"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_serial_port_helper-members.html",
    "revision": "f4540879a568d2099a7aa4dfc509391b"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_serial_port_helper.html",
    "revision": "410b67e86dfa8990e8663acc7cdd5336"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_settings_helper-members.html",
    "revision": "f72cc7f856e722a789e95c1590c8234c"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_settings_helper.html",
    "revision": "e3e7e590b71624b16cb0b13e5f63c2be"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_store_helper-members.html",
    "revision": "926dccec53ef80b84f8b71ab438d8548"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_store_helper.html",
    "revision": "0ab96fa01d4ea908b6cc2329a8066fbd"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_tcp_client_helper-members.html",
    "revision": "cd1c4e9f5c975f4db5aad02c0af7249c"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_tcp_client_helper.html",
    "revision": "c4f6b578abcefe33588bd511d53ae859"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_udp_client_helper-members.html",
    "revision": "3a03b45f213f533181cc0fb5527df622"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_udp_client_helper.html",
    "revision": "7dccb04ed6f4b6f3eed0bd4f82ac5a02"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_module_parameter-members.html",
    "revision": "56f6ad468935d613bc69c16f8bbe0d93"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_module_parameter.html",
    "revision": "c37167c30eb23d0dccef810306e0f677"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_module-members.html",
    "revision": "4f475bf77a98ca9dc68b09a2bd0e52c3"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_module.html",
    "revision": "72f15e8cf78cb24086ac6a84771ee563"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_value_statistics_1_1_stat_value-members.html",
    "revision": "b567cef17c8b583f609cef1569a4ca3c"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_value_statistics_1_1_stat_value.html",
    "revision": "5515545b3c5fbe891f6af4f371cf3279"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_value_statistics-members.html",
    "revision": "9d12d201bd4d24156fed5c9b28aaf7b7"
  },
  {
    "url": "api/ape/class_home_genie_1_1_data_1_1_value_statistics.html",
    "revision": "050be9dd6e88e6358a93d1c44d270a87"
  },
  {
    "url": "api/ape/classes.html",
    "revision": "01e684560fed45151e3797f14d01e30c"
  },
  {
    "url": "api/ape/dir_5894cb8a968fa5090f014020b009b0ff.html",
    "revision": "b55e4c16bb30f2d66568d633eb99ae72"
  },
  {
    "url": "api/ape/dir_7ec5998ff1c39af43163d33c02ae0cfc.html",
    "revision": "7cd9eddcb85b2281d6825b77dcada227"
  },
  {
    "url": "api/ape/dir_8ee72d76c74e8df7ce2f1fcd769ac0c3.html",
    "revision": "bc8194b459039c0709b037c6b2a6f0a6"
  },
  {
    "url": "api/ape/dir_a90b7b186474f4918322abeebe1fee11.html",
    "revision": "45ba3ced977919ddfcd2be5f92d643ab"
  },
  {
    "url": "api/ape/doxygen.css",
    "revision": "3687cc95e3a2655c3a778a9128f90d92"
  },
  {
    "url": "api/ape/dynsections.js",
    "revision": "fbc22f07caf51cf90cbae1412067567c"
  },
  {
    "url": "api/ape/functions_func.html",
    "revision": "f9f4346f599fd92ebc0641e0511cb9f6"
  },
  {
    "url": "api/ape/functions_prop.html",
    "revision": "1f0d8bdbd7b33105d5f0de7884310d03"
  },
  {
    "url": "api/ape/functions_vars.html",
    "revision": "775adc9ec8108c3de03b3bdfd83b460b"
  },
  {
    "url": "api/ape/functions.html",
    "revision": "4e9dc73a3a2b7c35e74a2411a6f7686c"
  },
  {
    "url": "api/ape/hierarchy.html",
    "revision": "7bc994825f700260d5e063b3899d1211"
  },
  {
    "url": "api/ape/index.html",
    "revision": "2e6d4b89641ccd5adceb9384fb65a026"
  },
  {
    "url": "api/ape/jquery.js",
    "revision": "390dbe00ac8bf9e8ebf1735f291773ab"
  },
  {
    "url": "api/ape/menu.js",
    "revision": "0214be704544abaa89713b78402e44f7"
  },
  {
    "url": "api/ape/menudata.js",
    "revision": "d3aea2f2f535c5690a5c49badc189965"
  },
  {
    "url": "api/ape/namespace_home_genie_1_1_automation_1_1_scripting.html",
    "revision": "20f2b1497b5a1026fce9cff1e8685735"
  },
  {
    "url": "api/ape/namespace_home_genie_1_1_automation.html",
    "revision": "84a30d18b0e8c5d8ed7eff010e2a9842"
  },
  {
    "url": "api/ape/namespace_home_genie_1_1_data.html",
    "revision": "0a3a35a9a98dcfde686881d70d45a8d0"
  },
  {
    "url": "api/ape/namespace_home_genie.html",
    "revision": "6e53d29dfeb1ab16176e1f17a5d58422"
  },
  {
    "url": "api/ape/namespacemembers_enum.html",
    "revision": "0b44dc7e39a07b91887f936a6f65c2fe"
  },
  {
    "url": "api/ape/namespacemembers.html",
    "revision": "5e9cc43abcff824c837e99554885db76"
  },
  {
    "url": "api/ape/search/all_0.html",
    "revision": "219acecd0c54423124470c35ac1d6203"
  },
  {
    "url": "api/ape/search/all_0.js",
    "revision": "59a75f576f4532a0865e1e8b66d76092"
  },
  {
    "url": "api/ape/search/all_1.html",
    "revision": "2d9ed2d0960b706922a1c6808d0e5aa5"
  },
  {
    "url": "api/ape/search/all_1.js",
    "revision": "f6f801c5e9af62b30e0dd8cd811f0e93"
  },
  {
    "url": "api/ape/search/all_10.html",
    "revision": "be785e8abb0b34aac3ce4c4326757ea2"
  },
  {
    "url": "api/ape/search/all_10.js",
    "revision": "d48602f4fda5669cc8059b388b7f02dc"
  },
  {
    "url": "api/ape/search/all_11.html",
    "revision": "60ff5a3b43663da9673cdedc521ac12d"
  },
  {
    "url": "api/ape/search/all_11.js",
    "revision": "9d434074326467b19f840d73c94fcda1"
  },
  {
    "url": "api/ape/search/all_12.html",
    "revision": "9096e35bdfa12aed2b7c68faa1573661"
  },
  {
    "url": "api/ape/search/all_12.js",
    "revision": "7af08b303c398d8d35dbad2d599d4ce9"
  },
  {
    "url": "api/ape/search/all_13.html",
    "revision": "cdd8d81f6668bccada80ecf087b0f0cc"
  },
  {
    "url": "api/ape/search/all_13.js",
    "revision": "2c0f6aa91754f658b6c3acf814b49f63"
  },
  {
    "url": "api/ape/search/all_2.html",
    "revision": "0f7b464088b16f11660f306c4a0be719"
  },
  {
    "url": "api/ape/search/all_2.js",
    "revision": "ab09d8e407fd659e38f0557c46883f56"
  },
  {
    "url": "api/ape/search/all_3.html",
    "revision": "10b88bacd2313076919a43eba49e7652"
  },
  {
    "url": "api/ape/search/all_3.js",
    "revision": "73bf32dc0fbaa07c3d495a9eea8f5428"
  },
  {
    "url": "api/ape/search/all_4.html",
    "revision": "75840e73e86fb80e78d46c08c5d6877d"
  },
  {
    "url": "api/ape/search/all_4.js",
    "revision": "34017c3c42b19dea82e41839f655fe6c"
  },
  {
    "url": "api/ape/search/all_5.html",
    "revision": "c6cdac1ebccef45b496b6157d806f129"
  },
  {
    "url": "api/ape/search/all_5.js",
    "revision": "57c446b80a9f0e6d3ff16718f94da5a0"
  },
  {
    "url": "api/ape/search/all_6.html",
    "revision": "a06412effd73a10fd72db8ac4f641978"
  },
  {
    "url": "api/ape/search/all_6.js",
    "revision": "94805c5dbb099e0a9d2da39254179c6f"
  },
  {
    "url": "api/ape/search/all_7.html",
    "revision": "709253c21b217f8384cd46a1c78e8421"
  },
  {
    "url": "api/ape/search/all_7.js",
    "revision": "663c361e4565555e689d6e754dd78221"
  },
  {
    "url": "api/ape/search/all_8.html",
    "revision": "96031640124c95abbf38ed84a507cf9e"
  },
  {
    "url": "api/ape/search/all_8.js",
    "revision": "74e77e2b338d8d6e48d098e980851664"
  },
  {
    "url": "api/ape/search/all_9.html",
    "revision": "84f2db41c1cfc18559107362e18a02a8"
  },
  {
    "url": "api/ape/search/all_9.js",
    "revision": "56a43b3d7750f8852e8ae8f5cf536e91"
  },
  {
    "url": "api/ape/search/all_a.html",
    "revision": "8f41a8b35b028b178f6e88d47cfe7061"
  },
  {
    "url": "api/ape/search/all_a.js",
    "revision": "75db7def3a6ad2e3a828428ff51ea90f"
  },
  {
    "url": "api/ape/search/all_b.html",
    "revision": "78bb044a106f043feaae30263e9ee299"
  },
  {
    "url": "api/ape/search/all_b.js",
    "revision": "6245c731729d30f98ea2c6dadd074428"
  },
  {
    "url": "api/ape/search/all_c.html",
    "revision": "f2e4a7539ff5fdf0e99cac032bc88e3e"
  },
  {
    "url": "api/ape/search/all_c.js",
    "revision": "b47a35cf8bf4bb5eb06b2c0c32512220"
  },
  {
    "url": "api/ape/search/all_d.html",
    "revision": "9e5fddcb9fad5e3b83bcec109f93a90a"
  },
  {
    "url": "api/ape/search/all_d.js",
    "revision": "4d17318ec5cf391f034034bf8357108c"
  },
  {
    "url": "api/ape/search/all_e.html",
    "revision": "a87af55dbcf674b0ab5b7c8028d3825b"
  },
  {
    "url": "api/ape/search/all_e.js",
    "revision": "dad251f55eda118acff6944e297bc6d4"
  },
  {
    "url": "api/ape/search/all_f.html",
    "revision": "30e5e9a354e28dbd9b0a68d2eeb0248c"
  },
  {
    "url": "api/ape/search/all_f.js",
    "revision": "1ca6ad0e9a12ea24916ce5217d4b7ea6"
  },
  {
    "url": "api/ape/search/classes_0.html",
    "revision": "f12fac5d7e2fa87f79b8b2fde935eeb7"
  },
  {
    "url": "api/ape/search/classes_0.js",
    "revision": "0a04497b51e265454dd5cab3eb98473e"
  },
  {
    "url": "api/ape/search/classes_1.html",
    "revision": "e20d77d55d43abfa3c45fa422f8f2603"
  },
  {
    "url": "api/ape/search/classes_1.js",
    "revision": "1f5d9d50033d3f068f011e6f9400a8c8"
  },
  {
    "url": "api/ape/search/classes_2.html",
    "revision": "733b2f7a69f1260fc603ecf3631d8c2d"
  },
  {
    "url": "api/ape/search/classes_2.js",
    "revision": "74e77e2b338d8d6e48d098e980851664"
  },
  {
    "url": "api/ape/search/classes_3.html",
    "revision": "970b189eb48c338fbc94f137946eb097"
  },
  {
    "url": "api/ape/search/classes_3.js",
    "revision": "2d535ab9f0c89c66f200b46fda724af5"
  },
  {
    "url": "api/ape/search/classes_4.html",
    "revision": "630d3b1be73c331afbff0ac84bb23b93"
  },
  {
    "url": "api/ape/search/classes_4.js",
    "revision": "5d1a4890ec0b57a7f6781db7a38e412c"
  },
  {
    "url": "api/ape/search/classes_5.html",
    "revision": "783408bcc6f6a4e3f9d9be81a626e472"
  },
  {
    "url": "api/ape/search/classes_5.js",
    "revision": "9738048cc56780bbecc97a4aa5e2ed45"
  },
  {
    "url": "api/ape/search/classes_6.html",
    "revision": "d323ba303da0b3f2eb32993a7b26ad08"
  },
  {
    "url": "api/ape/search/classes_6.js",
    "revision": "ed41740f1f1b80524b74581791f77517"
  },
  {
    "url": "api/ape/search/classes_7.html",
    "revision": "ba970fd1631fe9600b46aa9f4fae06fe"
  },
  {
    "url": "api/ape/search/classes_7.js",
    "revision": "3b9a8e57070db58d6b75e4f804a16f62"
  },
  {
    "url": "api/ape/search/classes_8.html",
    "revision": "b8e4eb100e342391ccd3e597868ecaf2"
  },
  {
    "url": "api/ape/search/classes_8.js",
    "revision": "e9eaa7d22198dce12089750c630e5e5c"
  },
  {
    "url": "api/ape/search/classes_9.html",
    "revision": "62c6e3a2ecc2c775b21e3b8c58fa59f2"
  },
  {
    "url": "api/ape/search/classes_9.js",
    "revision": "a7c04487bc19fc855a2617c7ec0436f2"
  },
  {
    "url": "api/ape/search/enums_0.html",
    "revision": "8c2485d9319c2288e58dbe49d992a92e"
  },
  {
    "url": "api/ape/search/enums_0.js",
    "revision": "68ef34a3ea06ecefe0b16d602c879e4f"
  },
  {
    "url": "api/ape/search/enumvalues_0.html",
    "revision": "8f3d751c7219888273b9286eacede8a8"
  },
  {
    "url": "api/ape/search/enumvalues_0.js",
    "revision": "784b775352b40c6a2809ee2a75e9c494"
  },
  {
    "url": "api/ape/search/enumvalues_1.html",
    "revision": "1b727b379498406dd1619262948e5f83"
  },
  {
    "url": "api/ape/search/enumvalues_1.js",
    "revision": "5d5336cd9369af033d386ebc4df20e33"
  },
  {
    "url": "api/ape/search/functions_0.html",
    "revision": "c9d8cf5d680223abd476a69aa120b966"
  },
  {
    "url": "api/ape/search/functions_0.js",
    "revision": "5ef0f96dace67b88b3a240f98af7cf24"
  },
  {
    "url": "api/ape/search/functions_1.html",
    "revision": "ad514ec358a99d195752d49d9cd60003"
  },
  {
    "url": "api/ape/search/functions_1.js",
    "revision": "10fae5b97b0634e07a25728b9a3e22f2"
  },
  {
    "url": "api/ape/search/functions_10.html",
    "revision": "fcb7f69953f6dbf7a1e4a21d7dba4c6a"
  },
  {
    "url": "api/ape/search/functions_10.js",
    "revision": "82a68d2d6e75d2e5aca2ac7b86d85e65"
  },
  {
    "url": "api/ape/search/functions_11.html",
    "revision": "abeb3d3ba02d32cbc7743030e52b2b4e"
  },
  {
    "url": "api/ape/search/functions_11.js",
    "revision": "2c0f6aa91754f658b6c3acf814b49f63"
  },
  {
    "url": "api/ape/search/functions_2.html",
    "revision": "f26984ef755a176aeaf1ea30ff587272"
  },
  {
    "url": "api/ape/search/functions_2.js",
    "revision": "d35678128e7f34799bf33f871fd90837"
  },
  {
    "url": "api/ape/search/functions_3.html",
    "revision": "6c9cf010f69bcac8d733555a6a4970c9"
  },
  {
    "url": "api/ape/search/functions_3.js",
    "revision": "b4763926f1ed0ee91e08291734b6e241"
  },
  {
    "url": "api/ape/search/functions_4.html",
    "revision": "3ae4ca8d450d223933ffd55bcdd51a71"
  },
  {
    "url": "api/ape/search/functions_4.js",
    "revision": "c32f35751693d2be9e92dadc00f2f610"
  },
  {
    "url": "api/ape/search/functions_5.html",
    "revision": "5877a280ee692dcf184749501ac810d4"
  },
  {
    "url": "api/ape/search/functions_5.js",
    "revision": "29bbbe5823388e4cf9963904e0d6a3ed"
  },
  {
    "url": "api/ape/search/functions_6.html",
    "revision": "8fd903b1b778e1484cc47f98553cf013"
  },
  {
    "url": "api/ape/search/functions_6.js",
    "revision": "eee0a6e6b88dd76ea503a252362bcf7b"
  },
  {
    "url": "api/ape/search/functions_7.html",
    "revision": "fb02c5da6f65123103702466a986a1f8"
  },
  {
    "url": "api/ape/search/functions_7.js",
    "revision": "e617dd6fa06f01119667f283d08167d0"
  },
  {
    "url": "api/ape/search/functions_8.html",
    "revision": "9ce410914d1f1cdd4e4ff475dbfa9457"
  },
  {
    "url": "api/ape/search/functions_8.js",
    "revision": "73ac3869d1772647f840c51373e1dbbe"
  },
  {
    "url": "api/ape/search/functions_9.html",
    "revision": "c67b0557a14119fd4f4ee04e7a016b2c"
  },
  {
    "url": "api/ape/search/functions_9.js",
    "revision": "bef99d992a09290267b863c22b8163e6"
  },
  {
    "url": "api/ape/search/functions_a.html",
    "revision": "305a882510f37a689bd4a01a1d4e3b4d"
  },
  {
    "url": "api/ape/search/functions_a.js",
    "revision": "eb7f2c8a9b4d85d5dda784675dba978e"
  },
  {
    "url": "api/ape/search/functions_b.html",
    "revision": "7f8f080c07b30c084063c560179d2c39"
  },
  {
    "url": "api/ape/search/functions_b.js",
    "revision": "b47a35cf8bf4bb5eb06b2c0c32512220"
  },
  {
    "url": "api/ape/search/functions_c.html",
    "revision": "e103b752ceaae9cfc11123652b865c41"
  },
  {
    "url": "api/ape/search/functions_c.js",
    "revision": "7cd10c4a85f7d889aa0da9e4d32fb1c1"
  },
  {
    "url": "api/ape/search/functions_d.html",
    "revision": "946b1ea6d07ef626bcf90f8e9c79e96f"
  },
  {
    "url": "api/ape/search/functions_d.js",
    "revision": "dad251f55eda118acff6944e297bc6d4"
  },
  {
    "url": "api/ape/search/functions_e.html",
    "revision": "11d305e98700c5f978618605205a25dc"
  },
  {
    "url": "api/ape/search/functions_e.js",
    "revision": "46ca52c4d630a3b8b98d64e58947d6c8"
  },
  {
    "url": "api/ape/search/functions_f.html",
    "revision": "1f007f27d486ff4263f7fd5db53fa624"
  },
  {
    "url": "api/ape/search/functions_f.js",
    "revision": "9e4734ec5ef5aa51dfe706269fba6041"
  },
  {
    "url": "api/ape/search/namespaces_0.html",
    "revision": "75ecabac46ae736e4da0581c3643afe5"
  },
  {
    "url": "api/ape/search/namespaces_0.js",
    "revision": "a6ded7ff199bf60f4cec944ed33596df"
  },
  {
    "url": "api/ape/search/nomatches.html",
    "revision": "2414ad3cc0ed34da17bdc0d12c6d8ed6"
  },
  {
    "url": "api/ape/search/pages_0.html",
    "revision": "0282632ea07cbf7acc1764625f4d589f"
  },
  {
    "url": "api/ape/search/pages_0.js",
    "revision": "20363d82cf9a4eabe586537420d3238a"
  },
  {
    "url": "api/ape/search/properties_0.html",
    "revision": "8db4bdc0cd7e960e49f025af613ed4cd"
  },
  {
    "url": "api/ape/search/properties_0.js",
    "revision": "e88833d8936e45f5ff1f0af0759d5144"
  },
  {
    "url": "api/ape/search/properties_1.html",
    "revision": "430256d8fa24664bb949909ec2317e8e"
  },
  {
    "url": "api/ape/search/properties_1.js",
    "revision": "72f179b6cf20f6f531a82bb09a158e67"
  },
  {
    "url": "api/ape/search/properties_2.html",
    "revision": "9292cc9ed0332c6927353dc69477b0aa"
  },
  {
    "url": "api/ape/search/properties_2.js",
    "revision": "dae966dc6449c4fb3adbdc1982c97e43"
  },
  {
    "url": "api/ape/search/properties_3.html",
    "revision": "5cebd09bf1509a7bdcdfb4b1e7c4db69"
  },
  {
    "url": "api/ape/search/properties_3.js",
    "revision": "12ec0037738e87b4471d7a3a3d7f803a"
  },
  {
    "url": "api/ape/search/properties_4.html",
    "revision": "d77f927e21739b89ad0e09f730c54e43"
  },
  {
    "url": "api/ape/search/properties_4.js",
    "revision": "de8216724ab9e63aa7e1a48d05b599eb"
  },
  {
    "url": "api/ape/search/properties_5.html",
    "revision": "b582b2e3ae3e63fbbf76b385a6ceb00f"
  },
  {
    "url": "api/ape/search/properties_5.js",
    "revision": "5aea5c297f7af9c3d3864e70b1f4924e"
  },
  {
    "url": "api/ape/search/properties_6.html",
    "revision": "793d4dc31cf071646fdf259c94ede52e"
  },
  {
    "url": "api/ape/search/properties_6.js",
    "revision": "c53d3d56c9f586d5010dc80d98ba366e"
  },
  {
    "url": "api/ape/search/properties_7.html",
    "revision": "93c42842538ae6a1c62964556b1f3c55"
  },
  {
    "url": "api/ape/search/properties_7.js",
    "revision": "8759f1033be3c76cf99d4b7fc90ac5ca"
  },
  {
    "url": "api/ape/search/properties_8.html",
    "revision": "f6158d4e83f71b7f89112329d3e1b785"
  },
  {
    "url": "api/ape/search/properties_8.js",
    "revision": "0ba28ad9748721f46a21a1c7c1e1e6be"
  },
  {
    "url": "api/ape/search/properties_9.html",
    "revision": "a857d0746217b9d806b34c91ab2cb2db"
  },
  {
    "url": "api/ape/search/properties_9.js",
    "revision": "e71b7c768805f80705c89d2b78bc7aa4"
  },
  {
    "url": "api/ape/search/properties_a.html",
    "revision": "7b8ebd613f9eb6d29e519981f56fffd4"
  },
  {
    "url": "api/ape/search/properties_a.js",
    "revision": "2345c34db3734795a3abb2f34fadff75"
  },
  {
    "url": "api/ape/search/properties_b.html",
    "revision": "e267d6005f81e124dd9678af4d52646d"
  },
  {
    "url": "api/ape/search/properties_b.js",
    "revision": "09dce84ced0045a20852a7fc5c9d47e8"
  },
  {
    "url": "api/ape/search/properties_c.html",
    "revision": "5cdd98c3f960f5ab2c6b7bce924495dc"
  },
  {
    "url": "api/ape/search/properties_c.js",
    "revision": "7dafdb1430f89613fd9639f19b9f2a57"
  },
  {
    "url": "api/ape/search/properties_d.html",
    "revision": "428f643a2b193554864f60dc9ca1f0ba"
  },
  {
    "url": "api/ape/search/properties_d.js",
    "revision": "822b1345249ac3ce91958db62f128c10"
  },
  {
    "url": "api/ape/search/properties_e.html",
    "revision": "095ca1a1f7e92e4a82e60b77a381492a"
  },
  {
    "url": "api/ape/search/properties_e.js",
    "revision": "f1c152b1a77c218b52e38b283b6bfd39"
  },
  {
    "url": "api/ape/search/properties_f.html",
    "revision": "e850ec5348b76eb3041f128914f250db"
  },
  {
    "url": "api/ape/search/properties_f.js",
    "revision": "1b0c2e082f53ae311715f0f5aeadd088"
  },
  {
    "url": "api/ape/search/search.css",
    "revision": "62c88f58334ead8314afc96a8170411e"
  },
  {
    "url": "api/ape/search/search.js",
    "revision": "d525b5ee84b57d4abe6187fbd499a580"
  },
  {
    "url": "api/ape/search/searchdata.js",
    "revision": "73b825ec7d6a8734fe9f2bc4c99d2f84"
  },
  {
    "url": "api/ape/search/variables_0.html",
    "revision": "95113a9a10b93748125dc03c6214ba54"
  },
  {
    "url": "api/ape/search/variables_0.js",
    "revision": "144b61508817de6edaf8e47802740186"
  },
  {
    "url": "api/ape/search/variables_1.html",
    "revision": "c204a4a07346e9fc1a24bbb9d222cf46"
  },
  {
    "url": "api/ape/search/variables_1.js",
    "revision": "e23dd3c4c599fd7a1cfa7291c8a65d66"
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
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
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
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/mig/includes/sidemenu.html",
    "revision": "c4b7fd0ff255e83e18501544681d133d"
  },
  {
    "url": "api/mig/js/bootstrap.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
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
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/mig/mig_api_w800rf.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/mig/mig_api_x10.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/mig/mig_api_zwave.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/mig/overview.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
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
    "revision": "e3e1261a8e95fcd6795b1abe0ed27ba7"
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
    "revision": "adab8698c1315df3aa0bdc95f7c06ac3"
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
    "revision": "2bee21872f78a29d249fe8d731853d7e"
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
    "revision": "de69bca1ed54e5ff752a48eeecdaaf44"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_data_helper-members.html",
    "revision": "affdd01273a6d834ec795382b7bb877e"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_data_helper.html",
    "revision": "425e42d566bb6648080fdc84a7afff29"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_events_helper-members.html",
    "revision": "a93a424b9668dceda0e7079aec5b6ba2"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_events_helper.html",
    "revision": "959bab51eddfb6a84373f86dbf4b156f"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_knx_client_helper-members.html",
    "revision": "93c8974b18a871d12a2592d6c9ba922a"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_knx_client_helper.html",
    "revision": "e5e9f18552a9487108f823fbb297b34a"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_module_helper-members.html",
    "revision": "78d2f53b73c20d6f93a7b65da78aeb3e"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_module_helper.html",
    "revision": "92752fbdab7da8e56c0b7d8d5716a074"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_modules_manager-members.html",
    "revision": "e1d644eb8a9757ad66eee371e9f33e6c"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_modules_manager.html",
    "revision": "d1adf5ed559afda5c9d5e652f84fd41c"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_mqtt_client_helper-members.html",
    "revision": "624359c9069387ed5cbd1bfa6ae241aa"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_mqtt_client_helper.html",
    "revision": "9b0da12b37839269155bcb8aab5c6b3f"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_net_helper-members.html",
    "revision": "5df8e4b2d6f2a8c50007d299ddea4613"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_net_helper.html",
    "revision": "f87756a76c7e0b6b2409b24e406ebb52"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper-members.html",
    "revision": "c132bf75e2921406a8839cb51fa70b67"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper.html",
    "revision": "666a68c7b86c5b0951804b6cbb3f5ae8"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_scheduler_helper-members.html",
    "revision": "5fea796b6e076e9c6d488f83fcc7ee25"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_scheduler_helper.html",
    "revision": "fb614a4dd07da253d173c634d3405b8c"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_serial_port_helper-members.html",
    "revision": "f4540879a568d2099a7aa4dfc509391b"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_serial_port_helper.html",
    "revision": "410b67e86dfa8990e8663acc7cdd5336"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_settings_helper-members.html",
    "revision": "f72cc7f856e722a789e95c1590c8234c"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_settings_helper.html",
    "revision": "e3e7e590b71624b16cb0b13e5f63c2be"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_store_helper-members.html",
    "revision": "926dccec53ef80b84f8b71ab438d8548"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_store_helper.html",
    "revision": "0ab96fa01d4ea908b6cc2329a8066fbd"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_tcp_client_helper-members.html",
    "revision": "cd1c4e9f5c975f4db5aad02c0af7249c"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_tcp_client_helper.html",
    "revision": "c4f6b578abcefe33588bd511d53ae859"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_udp_client_helper-members.html",
    "revision": "3a03b45f213f533181cc0fb5527df622"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_udp_client_helper.html",
    "revision": "7dccb04ed6f4b6f3eed0bd4f82ac5a02"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_module_parameter-members.html",
    "revision": "56f6ad468935d613bc69c16f8bbe0d93"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_module_parameter.html",
    "revision": "c37167c30eb23d0dccef810306e0f677"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_module-members.html",
    "revision": "4f475bf77a98ca9dc68b09a2bd0e52c3"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_module.html",
    "revision": "72f15e8cf78cb24086ac6a84771ee563"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_value_statistics_1_1_stat_value-members.html",
    "revision": "b567cef17c8b583f609cef1569a4ca3c"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_value_statistics_1_1_stat_value.html",
    "revision": "5515545b3c5fbe891f6af4f371cf3279"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_value_statistics-members.html",
    "revision": "9d12d201bd4d24156fed5c9b28aaf7b7"
  },
  {
    "url": "source/api/ape/class_home_genie_1_1_data_1_1_value_statistics.html",
    "revision": "050be9dd6e88e6358a93d1c44d270a87"
  },
  {
    "url": "source/api/ape/classes.html",
    "revision": "01e684560fed45151e3797f14d01e30c"
  },
  {
    "url": "source/api/ape/dir_5894cb8a968fa5090f014020b009b0ff.html",
    "revision": "b55e4c16bb30f2d66568d633eb99ae72"
  },
  {
    "url": "source/api/ape/dir_7ec5998ff1c39af43163d33c02ae0cfc.html",
    "revision": "7cd9eddcb85b2281d6825b77dcada227"
  },
  {
    "url": "source/api/ape/dir_8ee72d76c74e8df7ce2f1fcd769ac0c3.html",
    "revision": "bc8194b459039c0709b037c6b2a6f0a6"
  },
  {
    "url": "source/api/ape/dir_a90b7b186474f4918322abeebe1fee11.html",
    "revision": "45ba3ced977919ddfcd2be5f92d643ab"
  },
  {
    "url": "source/api/ape/doxygen.css",
    "revision": "3687cc95e3a2655c3a778a9128f90d92"
  },
  {
    "url": "source/api/ape/dynsections.js",
    "revision": "fbc22f07caf51cf90cbae1412067567c"
  },
  {
    "url": "source/api/ape/functions_func.html",
    "revision": "f9f4346f599fd92ebc0641e0511cb9f6"
  },
  {
    "url": "source/api/ape/functions_prop.html",
    "revision": "1f0d8bdbd7b33105d5f0de7884310d03"
  },
  {
    "url": "source/api/ape/functions_vars.html",
    "revision": "775adc9ec8108c3de03b3bdfd83b460b"
  },
  {
    "url": "source/api/ape/functions.html",
    "revision": "4e9dc73a3a2b7c35e74a2411a6f7686c"
  },
  {
    "url": "source/api/ape/hierarchy.html",
    "revision": "7bc994825f700260d5e063b3899d1211"
  },
  {
    "url": "source/api/ape/index.html",
    "revision": "2e6d4b89641ccd5adceb9384fb65a026"
  },
  {
    "url": "source/api/ape/jquery.js",
    "revision": "390dbe00ac8bf9e8ebf1735f291773ab"
  },
  {
    "url": "source/api/ape/menu.js",
    "revision": "0214be704544abaa89713b78402e44f7"
  },
  {
    "url": "source/api/ape/menudata.js",
    "revision": "d3aea2f2f535c5690a5c49badc189965"
  },
  {
    "url": "source/api/ape/namespace_home_genie_1_1_automation_1_1_scripting.html",
    "revision": "20f2b1497b5a1026fce9cff1e8685735"
  },
  {
    "url": "source/api/ape/namespace_home_genie_1_1_automation.html",
    "revision": "84a30d18b0e8c5d8ed7eff010e2a9842"
  },
  {
    "url": "source/api/ape/namespace_home_genie_1_1_data.html",
    "revision": "0a3a35a9a98dcfde686881d70d45a8d0"
  },
  {
    "url": "source/api/ape/namespace_home_genie.html",
    "revision": "6e53d29dfeb1ab16176e1f17a5d58422"
  },
  {
    "url": "source/api/ape/namespacemembers_enum.html",
    "revision": "0b44dc7e39a07b91887f936a6f65c2fe"
  },
  {
    "url": "source/api/ape/namespacemembers.html",
    "revision": "5e9cc43abcff824c837e99554885db76"
  },
  {
    "url": "source/api/ape/search/all_0.html",
    "revision": "219acecd0c54423124470c35ac1d6203"
  },
  {
    "url": "source/api/ape/search/all_0.js",
    "revision": "59a75f576f4532a0865e1e8b66d76092"
  },
  {
    "url": "source/api/ape/search/all_1.html",
    "revision": "2d9ed2d0960b706922a1c6808d0e5aa5"
  },
  {
    "url": "source/api/ape/search/all_1.js",
    "revision": "f6f801c5e9af62b30e0dd8cd811f0e93"
  },
  {
    "url": "source/api/ape/search/all_10.html",
    "revision": "be785e8abb0b34aac3ce4c4326757ea2"
  },
  {
    "url": "source/api/ape/search/all_10.js",
    "revision": "d48602f4fda5669cc8059b388b7f02dc"
  },
  {
    "url": "source/api/ape/search/all_11.html",
    "revision": "60ff5a3b43663da9673cdedc521ac12d"
  },
  {
    "url": "source/api/ape/search/all_11.js",
    "revision": "9d434074326467b19f840d73c94fcda1"
  },
  {
    "url": "source/api/ape/search/all_12.html",
    "revision": "9096e35bdfa12aed2b7c68faa1573661"
  },
  {
    "url": "source/api/ape/search/all_12.js",
    "revision": "7af08b303c398d8d35dbad2d599d4ce9"
  },
  {
    "url": "source/api/ape/search/all_13.html",
    "revision": "cdd8d81f6668bccada80ecf087b0f0cc"
  },
  {
    "url": "source/api/ape/search/all_13.js",
    "revision": "2c0f6aa91754f658b6c3acf814b49f63"
  },
  {
    "url": "source/api/ape/search/all_2.html",
    "revision": "0f7b464088b16f11660f306c4a0be719"
  },
  {
    "url": "source/api/ape/search/all_2.js",
    "revision": "ab09d8e407fd659e38f0557c46883f56"
  },
  {
    "url": "source/api/ape/search/all_3.html",
    "revision": "10b88bacd2313076919a43eba49e7652"
  },
  {
    "url": "source/api/ape/search/all_3.js",
    "revision": "73bf32dc0fbaa07c3d495a9eea8f5428"
  },
  {
    "url": "source/api/ape/search/all_4.html",
    "revision": "75840e73e86fb80e78d46c08c5d6877d"
  },
  {
    "url": "source/api/ape/search/all_4.js",
    "revision": "34017c3c42b19dea82e41839f655fe6c"
  },
  {
    "url": "source/api/ape/search/all_5.html",
    "revision": "c6cdac1ebccef45b496b6157d806f129"
  },
  {
    "url": "source/api/ape/search/all_5.js",
    "revision": "57c446b80a9f0e6d3ff16718f94da5a0"
  },
  {
    "url": "source/api/ape/search/all_6.html",
    "revision": "a06412effd73a10fd72db8ac4f641978"
  },
  {
    "url": "source/api/ape/search/all_6.js",
    "revision": "94805c5dbb099e0a9d2da39254179c6f"
  },
  {
    "url": "source/api/ape/search/all_7.html",
    "revision": "709253c21b217f8384cd46a1c78e8421"
  },
  {
    "url": "source/api/ape/search/all_7.js",
    "revision": "663c361e4565555e689d6e754dd78221"
  },
  {
    "url": "source/api/ape/search/all_8.html",
    "revision": "96031640124c95abbf38ed84a507cf9e"
  },
  {
    "url": "source/api/ape/search/all_8.js",
    "revision": "74e77e2b338d8d6e48d098e980851664"
  },
  {
    "url": "source/api/ape/search/all_9.html",
    "revision": "84f2db41c1cfc18559107362e18a02a8"
  },
  {
    "url": "source/api/ape/search/all_9.js",
    "revision": "56a43b3d7750f8852e8ae8f5cf536e91"
  },
  {
    "url": "source/api/ape/search/all_a.html",
    "revision": "8f41a8b35b028b178f6e88d47cfe7061"
  },
  {
    "url": "source/api/ape/search/all_a.js",
    "revision": "75db7def3a6ad2e3a828428ff51ea90f"
  },
  {
    "url": "source/api/ape/search/all_b.html",
    "revision": "78bb044a106f043feaae30263e9ee299"
  },
  {
    "url": "source/api/ape/search/all_b.js",
    "revision": "6245c731729d30f98ea2c6dadd074428"
  },
  {
    "url": "source/api/ape/search/all_c.html",
    "revision": "f2e4a7539ff5fdf0e99cac032bc88e3e"
  },
  {
    "url": "source/api/ape/search/all_c.js",
    "revision": "b47a35cf8bf4bb5eb06b2c0c32512220"
  },
  {
    "url": "source/api/ape/search/all_d.html",
    "revision": "9e5fddcb9fad5e3b83bcec109f93a90a"
  },
  {
    "url": "source/api/ape/search/all_d.js",
    "revision": "4d17318ec5cf391f034034bf8357108c"
  },
  {
    "url": "source/api/ape/search/all_e.html",
    "revision": "a87af55dbcf674b0ab5b7c8028d3825b"
  },
  {
    "url": "source/api/ape/search/all_e.js",
    "revision": "dad251f55eda118acff6944e297bc6d4"
  },
  {
    "url": "source/api/ape/search/all_f.html",
    "revision": "30e5e9a354e28dbd9b0a68d2eeb0248c"
  },
  {
    "url": "source/api/ape/search/all_f.js",
    "revision": "1ca6ad0e9a12ea24916ce5217d4b7ea6"
  },
  {
    "url": "source/api/ape/search/classes_0.html",
    "revision": "f12fac5d7e2fa87f79b8b2fde935eeb7"
  },
  {
    "url": "source/api/ape/search/classes_0.js",
    "revision": "0a04497b51e265454dd5cab3eb98473e"
  },
  {
    "url": "source/api/ape/search/classes_1.html",
    "revision": "e20d77d55d43abfa3c45fa422f8f2603"
  },
  {
    "url": "source/api/ape/search/classes_1.js",
    "revision": "1f5d9d50033d3f068f011e6f9400a8c8"
  },
  {
    "url": "source/api/ape/search/classes_2.html",
    "revision": "733b2f7a69f1260fc603ecf3631d8c2d"
  },
  {
    "url": "source/api/ape/search/classes_2.js",
    "revision": "74e77e2b338d8d6e48d098e980851664"
  },
  {
    "url": "source/api/ape/search/classes_3.html",
    "revision": "970b189eb48c338fbc94f137946eb097"
  },
  {
    "url": "source/api/ape/search/classes_3.js",
    "revision": "2d535ab9f0c89c66f200b46fda724af5"
  },
  {
    "url": "source/api/ape/search/classes_4.html",
    "revision": "630d3b1be73c331afbff0ac84bb23b93"
  },
  {
    "url": "source/api/ape/search/classes_4.js",
    "revision": "5d1a4890ec0b57a7f6781db7a38e412c"
  },
  {
    "url": "source/api/ape/search/classes_5.html",
    "revision": "783408bcc6f6a4e3f9d9be81a626e472"
  },
  {
    "url": "source/api/ape/search/classes_5.js",
    "revision": "9738048cc56780bbecc97a4aa5e2ed45"
  },
  {
    "url": "source/api/ape/search/classes_6.html",
    "revision": "d323ba303da0b3f2eb32993a7b26ad08"
  },
  {
    "url": "source/api/ape/search/classes_6.js",
    "revision": "ed41740f1f1b80524b74581791f77517"
  },
  {
    "url": "source/api/ape/search/classes_7.html",
    "revision": "ba970fd1631fe9600b46aa9f4fae06fe"
  },
  {
    "url": "source/api/ape/search/classes_7.js",
    "revision": "3b9a8e57070db58d6b75e4f804a16f62"
  },
  {
    "url": "source/api/ape/search/classes_8.html",
    "revision": "b8e4eb100e342391ccd3e597868ecaf2"
  },
  {
    "url": "source/api/ape/search/classes_8.js",
    "revision": "e9eaa7d22198dce12089750c630e5e5c"
  },
  {
    "url": "source/api/ape/search/classes_9.html",
    "revision": "62c6e3a2ecc2c775b21e3b8c58fa59f2"
  },
  {
    "url": "source/api/ape/search/classes_9.js",
    "revision": "a7c04487bc19fc855a2617c7ec0436f2"
  },
  {
    "url": "source/api/ape/search/enums_0.html",
    "revision": "8c2485d9319c2288e58dbe49d992a92e"
  },
  {
    "url": "source/api/ape/search/enums_0.js",
    "revision": "68ef34a3ea06ecefe0b16d602c879e4f"
  },
  {
    "url": "source/api/ape/search/enumvalues_0.html",
    "revision": "8f3d751c7219888273b9286eacede8a8"
  },
  {
    "url": "source/api/ape/search/enumvalues_0.js",
    "revision": "784b775352b40c6a2809ee2a75e9c494"
  },
  {
    "url": "source/api/ape/search/enumvalues_1.html",
    "revision": "1b727b379498406dd1619262948e5f83"
  },
  {
    "url": "source/api/ape/search/enumvalues_1.js",
    "revision": "5d5336cd9369af033d386ebc4df20e33"
  },
  {
    "url": "source/api/ape/search/functions_0.html",
    "revision": "c9d8cf5d680223abd476a69aa120b966"
  },
  {
    "url": "source/api/ape/search/functions_0.js",
    "revision": "5ef0f96dace67b88b3a240f98af7cf24"
  },
  {
    "url": "source/api/ape/search/functions_1.html",
    "revision": "ad514ec358a99d195752d49d9cd60003"
  },
  {
    "url": "source/api/ape/search/functions_1.js",
    "revision": "10fae5b97b0634e07a25728b9a3e22f2"
  },
  {
    "url": "source/api/ape/search/functions_10.html",
    "revision": "fcb7f69953f6dbf7a1e4a21d7dba4c6a"
  },
  {
    "url": "source/api/ape/search/functions_10.js",
    "revision": "82a68d2d6e75d2e5aca2ac7b86d85e65"
  },
  {
    "url": "source/api/ape/search/functions_11.html",
    "revision": "abeb3d3ba02d32cbc7743030e52b2b4e"
  },
  {
    "url": "source/api/ape/search/functions_11.js",
    "revision": "2c0f6aa91754f658b6c3acf814b49f63"
  },
  {
    "url": "source/api/ape/search/functions_2.html",
    "revision": "f26984ef755a176aeaf1ea30ff587272"
  },
  {
    "url": "source/api/ape/search/functions_2.js",
    "revision": "d35678128e7f34799bf33f871fd90837"
  },
  {
    "url": "source/api/ape/search/functions_3.html",
    "revision": "6c9cf010f69bcac8d733555a6a4970c9"
  },
  {
    "url": "source/api/ape/search/functions_3.js",
    "revision": "b4763926f1ed0ee91e08291734b6e241"
  },
  {
    "url": "source/api/ape/search/functions_4.html",
    "revision": "3ae4ca8d450d223933ffd55bcdd51a71"
  },
  {
    "url": "source/api/ape/search/functions_4.js",
    "revision": "c32f35751693d2be9e92dadc00f2f610"
  },
  {
    "url": "source/api/ape/search/functions_5.html",
    "revision": "5877a280ee692dcf184749501ac810d4"
  },
  {
    "url": "source/api/ape/search/functions_5.js",
    "revision": "29bbbe5823388e4cf9963904e0d6a3ed"
  },
  {
    "url": "source/api/ape/search/functions_6.html",
    "revision": "8fd903b1b778e1484cc47f98553cf013"
  },
  {
    "url": "source/api/ape/search/functions_6.js",
    "revision": "eee0a6e6b88dd76ea503a252362bcf7b"
  },
  {
    "url": "source/api/ape/search/functions_7.html",
    "revision": "fb02c5da6f65123103702466a986a1f8"
  },
  {
    "url": "source/api/ape/search/functions_7.js",
    "revision": "e617dd6fa06f01119667f283d08167d0"
  },
  {
    "url": "source/api/ape/search/functions_8.html",
    "revision": "9ce410914d1f1cdd4e4ff475dbfa9457"
  },
  {
    "url": "source/api/ape/search/functions_8.js",
    "revision": "73ac3869d1772647f840c51373e1dbbe"
  },
  {
    "url": "source/api/ape/search/functions_9.html",
    "revision": "c67b0557a14119fd4f4ee04e7a016b2c"
  },
  {
    "url": "source/api/ape/search/functions_9.js",
    "revision": "bef99d992a09290267b863c22b8163e6"
  },
  {
    "url": "source/api/ape/search/functions_a.html",
    "revision": "305a882510f37a689bd4a01a1d4e3b4d"
  },
  {
    "url": "source/api/ape/search/functions_a.js",
    "revision": "eb7f2c8a9b4d85d5dda784675dba978e"
  },
  {
    "url": "source/api/ape/search/functions_b.html",
    "revision": "7f8f080c07b30c084063c560179d2c39"
  },
  {
    "url": "source/api/ape/search/functions_b.js",
    "revision": "b47a35cf8bf4bb5eb06b2c0c32512220"
  },
  {
    "url": "source/api/ape/search/functions_c.html",
    "revision": "e103b752ceaae9cfc11123652b865c41"
  },
  {
    "url": "source/api/ape/search/functions_c.js",
    "revision": "7cd10c4a85f7d889aa0da9e4d32fb1c1"
  },
  {
    "url": "source/api/ape/search/functions_d.html",
    "revision": "946b1ea6d07ef626bcf90f8e9c79e96f"
  },
  {
    "url": "source/api/ape/search/functions_d.js",
    "revision": "dad251f55eda118acff6944e297bc6d4"
  },
  {
    "url": "source/api/ape/search/functions_e.html",
    "revision": "11d305e98700c5f978618605205a25dc"
  },
  {
    "url": "source/api/ape/search/functions_e.js",
    "revision": "46ca52c4d630a3b8b98d64e58947d6c8"
  },
  {
    "url": "source/api/ape/search/functions_f.html",
    "revision": "1f007f27d486ff4263f7fd5db53fa624"
  },
  {
    "url": "source/api/ape/search/functions_f.js",
    "revision": "9e4734ec5ef5aa51dfe706269fba6041"
  },
  {
    "url": "source/api/ape/search/namespaces_0.html",
    "revision": "75ecabac46ae736e4da0581c3643afe5"
  },
  {
    "url": "source/api/ape/search/namespaces_0.js",
    "revision": "a6ded7ff199bf60f4cec944ed33596df"
  },
  {
    "url": "source/api/ape/search/nomatches.html",
    "revision": "2414ad3cc0ed34da17bdc0d12c6d8ed6"
  },
  {
    "url": "source/api/ape/search/pages_0.html",
    "revision": "0282632ea07cbf7acc1764625f4d589f"
  },
  {
    "url": "source/api/ape/search/pages_0.js",
    "revision": "20363d82cf9a4eabe586537420d3238a"
  },
  {
    "url": "source/api/ape/search/properties_0.html",
    "revision": "8db4bdc0cd7e960e49f025af613ed4cd"
  },
  {
    "url": "source/api/ape/search/properties_0.js",
    "revision": "e88833d8936e45f5ff1f0af0759d5144"
  },
  {
    "url": "source/api/ape/search/properties_1.html",
    "revision": "430256d8fa24664bb949909ec2317e8e"
  },
  {
    "url": "source/api/ape/search/properties_1.js",
    "revision": "72f179b6cf20f6f531a82bb09a158e67"
  },
  {
    "url": "source/api/ape/search/properties_2.html",
    "revision": "9292cc9ed0332c6927353dc69477b0aa"
  },
  {
    "url": "source/api/ape/search/properties_2.js",
    "revision": "dae966dc6449c4fb3adbdc1982c97e43"
  },
  {
    "url": "source/api/ape/search/properties_3.html",
    "revision": "5cebd09bf1509a7bdcdfb4b1e7c4db69"
  },
  {
    "url": "source/api/ape/search/properties_3.js",
    "revision": "12ec0037738e87b4471d7a3a3d7f803a"
  },
  {
    "url": "source/api/ape/search/properties_4.html",
    "revision": "d77f927e21739b89ad0e09f730c54e43"
  },
  {
    "url": "source/api/ape/search/properties_4.js",
    "revision": "de8216724ab9e63aa7e1a48d05b599eb"
  },
  {
    "url": "source/api/ape/search/properties_5.html",
    "revision": "b582b2e3ae3e63fbbf76b385a6ceb00f"
  },
  {
    "url": "source/api/ape/search/properties_5.js",
    "revision": "5aea5c297f7af9c3d3864e70b1f4924e"
  },
  {
    "url": "source/api/ape/search/properties_6.html",
    "revision": "793d4dc31cf071646fdf259c94ede52e"
  },
  {
    "url": "source/api/ape/search/properties_6.js",
    "revision": "c53d3d56c9f586d5010dc80d98ba366e"
  },
  {
    "url": "source/api/ape/search/properties_7.html",
    "revision": "93c42842538ae6a1c62964556b1f3c55"
  },
  {
    "url": "source/api/ape/search/properties_7.js",
    "revision": "8759f1033be3c76cf99d4b7fc90ac5ca"
  },
  {
    "url": "source/api/ape/search/properties_8.html",
    "revision": "f6158d4e83f71b7f89112329d3e1b785"
  },
  {
    "url": "source/api/ape/search/properties_8.js",
    "revision": "0ba28ad9748721f46a21a1c7c1e1e6be"
  },
  {
    "url": "source/api/ape/search/properties_9.html",
    "revision": "a857d0746217b9d806b34c91ab2cb2db"
  },
  {
    "url": "source/api/ape/search/properties_9.js",
    "revision": "e71b7c768805f80705c89d2b78bc7aa4"
  },
  {
    "url": "source/api/ape/search/properties_a.html",
    "revision": "7b8ebd613f9eb6d29e519981f56fffd4"
  },
  {
    "url": "source/api/ape/search/properties_a.js",
    "revision": "2345c34db3734795a3abb2f34fadff75"
  },
  {
    "url": "source/api/ape/search/properties_b.html",
    "revision": "e267d6005f81e124dd9678af4d52646d"
  },
  {
    "url": "source/api/ape/search/properties_b.js",
    "revision": "09dce84ced0045a20852a7fc5c9d47e8"
  },
  {
    "url": "source/api/ape/search/properties_c.html",
    "revision": "5cdd98c3f960f5ab2c6b7bce924495dc"
  },
  {
    "url": "source/api/ape/search/properties_c.js",
    "revision": "7dafdb1430f89613fd9639f19b9f2a57"
  },
  {
    "url": "source/api/ape/search/properties_d.html",
    "revision": "428f643a2b193554864f60dc9ca1f0ba"
  },
  {
    "url": "source/api/ape/search/properties_d.js",
    "revision": "822b1345249ac3ce91958db62f128c10"
  },
  {
    "url": "source/api/ape/search/properties_e.html",
    "revision": "095ca1a1f7e92e4a82e60b77a381492a"
  },
  {
    "url": "source/api/ape/search/properties_e.js",
    "revision": "f1c152b1a77c218b52e38b283b6bfd39"
  },
  {
    "url": "source/api/ape/search/properties_f.html",
    "revision": "e850ec5348b76eb3041f128914f250db"
  },
  {
    "url": "source/api/ape/search/properties_f.js",
    "revision": "1b0c2e082f53ae311715f0f5aeadd088"
  },
  {
    "url": "source/api/ape/search/search.css",
    "revision": "62c88f58334ead8314afc96a8170411e"
  },
  {
    "url": "source/api/ape/search/search.js",
    "revision": "d525b5ee84b57d4abe6187fbd499a580"
  },
  {
    "url": "source/api/ape/search/searchdata.js",
    "revision": "73b825ec7d6a8734fe9f2bc4c99d2f84"
  },
  {
    "url": "source/api/ape/search/variables_0.html",
    "revision": "95113a9a10b93748125dc03c6214ba54"
  },
  {
    "url": "source/api/ape/search/variables_0.js",
    "revision": "144b61508817de6edaf8e47802740186"
  },
  {
    "url": "source/api/ape/search/variables_1.html",
    "revision": "c204a4a07346e9fc1a24bbb9d222cf46"
  },
  {
    "url": "source/api/ape/search/variables_1.js",
    "revision": "e23dd3c4c599fd7a1cfa7291c8a65d66"
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
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "api/ape/bdwn.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
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
    "revision": "be03e63d7379983b28a2c092867a1d67"
  },
  {
    "url": "api/ape/search/search_l.png",
    "revision": "496450f84d51c69db49f756b2d0acc20"
  },
  {
    "url": "api/ape/search/search_m.png",
    "revision": "20910c4cfe0e8efc8211bc9f7e58b7ff"
  },
  {
    "url": "api/ape/search/search_r.png",
    "revision": "03ee24f1971c0e31ffb6246882e18edd"
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
    "revision": "21b36318ea414faa3dbc3821e977bc25"
  },
  {
    "url": "images/docs/configure_menu.jpg",
    "revision": "228deba0785cfbf7aa4e62e7b59e6316"
  },
  {
    "url": "images/docs/configure_menu.png",
    "revision": "9f768b1a778e1110053c112b22c7553d"
  },
  {
    "url": "images/docs/dashboard_page_01.jpg",
    "revision": "c1b3aa62205898f3d1157ce2b21ae663"
  },
  {
    "url": "images/docs/dashboard_page_01.png",
    "revision": "45511dbbd1733c184f33cf72a2604fa5"
  },
  {
    "url": "images/docs/groups_add_group.jpg",
    "revision": "f4c952475eae45f58aa57c446d68081d"
  },
  {
    "url": "images/docs/groups_add_group.png",
    "revision": "b5e94599e5344a9120edeb9a312ad9f4"
  },
  {
    "url": "images/docs/groups_add_module.jpg",
    "revision": "51939e555ff8f64af8ccf6eac2df5a9e"
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
    "revision": "be03e63d7379983b28a2c092867a1d67"
  },
  {
    "url": "source/api/ape/search/search_l.png",
    "revision": "496450f84d51c69db49f756b2d0acc20"
  },
  {
    "url": "source/api/ape/search/search_m.png",
    "revision": "20910c4cfe0e8efc8211bc9f7e58b7ff"
  },
  {
    "url": "source/api/ape/search/search_r.png",
    "revision": "03ee24f1971c0e31ffb6246882e18edd"
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
