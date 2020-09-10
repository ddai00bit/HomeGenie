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
    "revision": "d04f80a1100b3fcd348f49d5cef60596"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_mqtt_client_helper.html",
    "revision": "30fa00cdd569904a3c73b72a2d5bd62d"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_net_helper-members.html",
    "revision": "066ea5760afa71ccef59f7965b566f29"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_net_helper.html",
    "revision": "a71c3d3c3f4a7f4e13b5848159ddcb61"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper-members.html",
    "revision": "4e2eb276cb2e6593cbbc6fea7704b880"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper.html",
    "revision": "61b945e369f88271b8b94d02b4b5007b"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_scheduler_helper-members.html",
    "revision": "c3bb79b2b422204a901d60854b13cbd2"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_scheduler_helper.html",
    "revision": "aa32c0487d58ebddec11c127f299e91d"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_serial_port_helper-members.html",
    "revision": "4db5d4ed09838aefeba6886c87bd7e73"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_serial_port_helper.html",
    "revision": "a6ef54180c225e9fc4235479691f5af5"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_settings_helper-members.html",
    "revision": "4c3198bcbc01fff3d15ac55561f4b6f5"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_settings_helper.html",
    "revision": "ee0d099723b248e6c9260ca0209e1471"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_store_helper-members.html",
    "revision": "c786a5e8923421ef5353c65e96773e32"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_store_helper.html",
    "revision": "ae32856527e5fa214b020331e01bad5f"
  },
  {
    "url": "api/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_tcp_client_helper-members.html",
    "revision": "1bf5c0a46ba9227d574efad5288de319"
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
    "url": "api/ape/functions_func.html",
    "revision": "c0f99250daa3e76a0a8ba4b2dfef4fb8"
  },
  {
    "url": "api/ape/functions_prop.html",
    "revision": "78618c5feba5c4695a3386b384d1bc14"
  },
  {
    "url": "api/ape/functions_vars.html",
    "revision": "942f6f23b45e604d32d5e39eaed5c6e0"
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
    "revision": "f495e562918a36e178a1b800602119f6"
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
    "revision": "94eab6ba9a559c461247e5e7eb25fa3d"
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
    "revision": "71faa653b22f62574be7db8fb51c5978"
  },
  {
    "url": "package.json",
    "revision": "744e70902ef6d5d226e5aafd187c13e2"
  },
  {
    "url": "packages/Microsoft.NETCore.Platforms.1.1.0/runtime.json",
    "revision": "912338c617e52bc5682100c39044d59c"
  },
  {
    "url": "packages/MQTTnet.3.0.11/lib/netstandard1.3/MQTTnet.deps.json",
    "revision": "dbdfd54230e2f82242f14981f252067b"
  },
  {
    "url": "packages/MQTTnet.3.0.11/lib/netstandard2.0/MQTTnet.deps.json",
    "revision": "5379a640b9722b64e2acf679372a1ac7"
  },
  {
    "url": "packages/MQTTnet.3.0.11/lib/netstandard2.1/MQTTnet.deps.json",
    "revision": "bec1011a24718943b7279cbe0c5027e9"
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
    "url": "source/api/ape/functions_func.html",
    "revision": "c0f99250daa3e76a0a8ba4b2dfef4fb8"
  },
  {
    "url": "source/api/ape/functions_prop.html",
    "revision": "78618c5feba5c4695a3386b384d1bc14"
  },
  {
    "url": "source/api/ape/functions_vars.html",
    "revision": "942f6f23b45e604d32d5e39eaed5c6e0"
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
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/fonts/lobster/lobster.css",
    "revision": "f14972cbbeb874ab7c4bdd8572d191df"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/i18n/en.json",
    "revision": "9406145ed189a7cd0db29dee2ff05e7e"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/i18n/homegenie/en.json",
    "revision": "c7a1c014345d0aa411ac048ffb30a84f"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/i18n/homegenie/it.json",
    "revision": "8962e012a50b89f4484bebd0341e1b4c"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/i18n/it.json",
    "revision": "eadef6a7d63c03e00e6924d23552dceb"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/i18n/module/en.json",
    "revision": "a0c62d8d8a7ed2923f86a8cbb518f60f"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/i18n/module/it.json",
    "revision": "1ad37fb6c3b138026d70cd04e08b617c"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/i18n/zwave/en.json",
    "revision": "e3edf1b8ed616b2ac1239f49879653f9"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/i18n/zwave/it.json",
    "revision": "57f1ccee15d0980058cfa5a7c65dd3ca"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/workers/typings-worker.js",
    "revision": "d74b3cc49ffe404a489daead64cf7103"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/index.html",
    "revision": "87033df5732d04e654d8ff71a87cdba2"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/main.8d426548cc9756179b48.js",
    "revision": "6e380bee57d78267e7a2a17ef1712c54"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/polyfills.a4021de53358bb0fec14.js",
    "revision": "0235fcf5e8b7aa3bfffbd24a8ab63bc9"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/runtime.d31d42a2d3ecac8830c7.js",
    "revision": "824b94f7d96cf539c755332af032fd6c"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/styles.decfb14c9be6a41e6f4d.css",
    "revision": "58f5c791aedf4584311a6dbbc9b0bb4f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/fonts/lobster/lobster.css",
    "revision": "f14972cbbeb874ab7c4bdd8572d191df"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/i18n/en.json",
    "revision": "9406145ed189a7cd0db29dee2ff05e7e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/i18n/homegenie/en.json",
    "revision": "c7a1c014345d0aa411ac048ffb30a84f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/i18n/homegenie/it.json",
    "revision": "8962e012a50b89f4484bebd0341e1b4c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/i18n/it.json",
    "revision": "eadef6a7d63c03e00e6924d23552dceb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/i18n/module/en.json",
    "revision": "a0c62d8d8a7ed2923f86a8cbb518f60f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/i18n/module/it.json",
    "revision": "1ad37fb6c3b138026d70cd04e08b617c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/i18n/zwave/en.json",
    "revision": "e3edf1b8ed616b2ac1239f49879653f9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/i18n/zwave/it.json",
    "revision": "57f1ccee15d0980058cfa5a7c65dd3ca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/workers/typings-worker.js",
    "revision": "d74b3cc49ffe404a489daead64cf7103"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/index.html",
    "revision": "87033df5732d04e654d8ff71a87cdba2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/main.1e3bada5f57cd661ce6c.js",
    "revision": "8a687d7bc13fc53e610e33fead371441"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/main.7c88b9bebdf545599a41.js",
    "revision": "f1d4e7715c5ceb8cc2acd4452a1a2753"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/main.8d426548cc9756179b48.js",
    "revision": "6e380bee57d78267e7a2a17ef1712c54"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/main.aa07a1a626a970d55e58.js",
    "revision": "8a687d7bc13fc53e610e33fead371441"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/main.c1f02d44aa0cdcba0ab0.js",
    "revision": "db1f239f0c9d1f7eb53ec27e883477aa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/main.cf3345a9b97e9447013f.js",
    "revision": "d49d7355e61d900e682e1c843b3058de"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/polyfills.a4021de53358bb0fec14.js",
    "revision": "0235fcf5e8b7aa3bfffbd24a8ab63bc9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/runtime.674a1f4753daabad6773.js",
    "revision": "9cd6f51e22920d1a2807bb891b8b9bc2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/runtime.d31d42a2d3ecac8830c7.js",
    "revision": "824b94f7d96cf539c755332af032fd6c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/runtime.e227d1a0e31cbccbf8ec.js",
    "revision": "1244d3f2f28ecc6619157927aca95200"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/styles.decfb14c9be6a41e6f4d.css",
    "revision": "58f5c791aedf4584311a6dbbc9b0bb4f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/blank.html",
    "revision": "ecaa88f7fa0bf610a5a26cf545dcd3aa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/cli.html",
    "revision": "7539b48ccaad4db12916cd6872775ee8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/font-awesome/css/font-awesome.css",
    "revision": "5343ee1a287a65ff20961476fd8a6188"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/font-awesome/css/font-awesome.min.css",
    "revision": "4fbd15cb6047af93373f4f895639c8bf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/fonts/hg-fonts.css",
    "revision": "cbd14377cab1fb02e8ccbe1dace2cb30"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/homegenie.css",
    "revision": "cfb4ee1b422661643f4d5d124510c73d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/homegenie.min.css",
    "revision": "0f7a713fb4e67008178841713f263bbf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/jqm-font-awesome-isvg-ipng.min.css",
    "revision": "f9a28dcd30e9568dd454308afeafbd61"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/jquery-ui.min.css",
    "revision": "b059dd0f6967f4e8ba50c9ca728c91b5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/jquery.mobile.icons.min.css",
    "revision": "e5d30611614c33d91ca7fe10b2f5ac8f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/jquery.qtip.min.css",
    "revision": "6fa1b7ce01c0bdc927c9f662f74ddf21"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/jquery.snippet.min.css",
    "revision": "ca836dbf578ff7edd9acc5556147469a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/jtsage-datebox.min.css",
    "revision": "0f444e7d18eaee2977f1d34f835a256a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/my.css",
    "revision": "8a8b2ec70bb9075cd69491505072c698"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/ui.notify.css",
    "revision": "b5da7fd09901162a9ed353308eb1bf1b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ext/zwave/_nodesetup.js",
    "revision": "36d449967d4cfe1ca67290cdb9cbfcb8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ext/zwave/setupnode.html",
    "revision": "3fad6284fb3d3aa2a30180262de72806"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/icons.html",
    "revision": "a4e8c938edacd5e8c55c5441054dcf9a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/index.html",
    "revision": "e771f168e3c8f7ae7107ccb909b9f7da"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.automation.js",
    "revision": "06a1e550f35b432cb9dd586d0b16d1e1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.automation.macro.js",
    "revision": "f72be0194990fb4ae799823f534b2abb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.automation.programs.js",
    "revision": "6caaa74fb092d50d131b329be4bfd15e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.automation.scheduling.js",
    "revision": "cc84cb47c6f6a07c871a028677bcd20a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.configure.groups.js",
    "revision": "f6f38244eb0b80a459395f7b955b3598"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.configure.interfaces.js",
    "revision": "5ba1bf1e440e148ddb1328565956ebe6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.configure.js",
    "revision": "faa14a9566c25454ddfd47f9895dd022"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.configure.mig.js",
    "revision": "7f3eef0bda509020eafdc3810aec6da3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.configure.modules.js",
    "revision": "3bcdb189bcefb9afdf06b260ec62f998"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.configure.stores.js",
    "revision": "26e4a43815fc28044f68feb44c4c1842"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.configure.system.js",
    "revision": "a2a3de29247e64f7b43d9730fb7e5ad3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.configure.widgets.js",
    "revision": "017236d671994f5b1f084651681a3c9f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.control.js",
    "revision": "2637b71fd19ae18f6ae6730272f93496"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.control.modules.js",
    "revision": "5cfd97f8dfa97ee1141a430d3203a88b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.statistics.js",
    "revision": "8a5e1f82b4a0d521a053d48ac124dd40"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.system.js",
    "revision": "e770e126d62acd7d634b5a944ed09be0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.system.updatemanager.js",
    "revision": "0fc128a3099fc871e47993e1489d9cff"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.ui.js",
    "revision": "f11d434fdc40d18b10d1069074de6a9b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/api/homegenie.voicecontrol.js",
    "revision": "a89f99c89bfded5426fa0037f17f86ee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/app/homegenie.webapp.home.js",
    "revision": "73bc8eccd7fbb4cc727d81cd284f2be4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/app/homegenie.webapp.locales.js",
    "revision": "2425d75e393793bb3cb02c136c311c9c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/app/homegenie.webapp.utility.js",
    "revision": "975e8d99c62fd0e0f270621c84746b3f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/comment/comment.js",
    "revision": "983f318427db728f83de1f79be9a5a88"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/comment/continuecomment.js",
    "revision": "f9b0e8a95c77dcb7766acef3710e42e9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/dialog/dialog.css",
    "revision": "910c1893a275073be1f80f32b77cd5a4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/dialog/dialog.js",
    "revision": "5313293614d5eb85dafa26df6b0dda0d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/display/fullscreen.css",
    "revision": "1a278e72b51528270f8ce9ec991929a1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/display/fullscreen.js",
    "revision": "893000c6ef04cb127c23aae9933c9ec4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/display/placeholder.js",
    "revision": "61ed0cc4d000f3dee5390e8111797d80"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/display/rulers.js",
    "revision": "7835756be0815b06307e91f79a73543d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/edit/closebrackets.js",
    "revision": "7e837f844384e1264dc04a5320a3ea6f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/edit/closetag.js",
    "revision": "46ea535d3a17ee4aaabdfa74b741b8b7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/edit/continuelist.js",
    "revision": "32a633aabf220ecbd585e517891b797d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/edit/matchbrackets.js",
    "revision": "7161292fcb7991bc001216f1ff4660cc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/edit/matchtags.js",
    "revision": "4b0b6b3278dd26ee7de91fb57a746f2f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/edit/trailingspace.js",
    "revision": "53775246494a906f35c176064b0e1790"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/fold/brace-fold.js",
    "revision": "7fd555e31badb4918a7ec8b9080b600e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/fold/comment-fold.js",
    "revision": "67ac591c23fd52e10b21bca75a904fd7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/fold/foldcode.js",
    "revision": "9e2ee7846dfad540a3abaa8277005f17"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/fold/foldgutter.css",
    "revision": "e97c93ebd0bc7b0d3dfc54ccf0d6b26a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/fold/foldgutter.js",
    "revision": "f128b2e16b974ea6c10e0fcf95956e24"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/fold/indent-fold.js",
    "revision": "4412c591f48b2d2bbe9c5139bb1d52b2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/fold/markdown-fold.js",
    "revision": "6c40139c3c6a06a7c7d6fedde26dafeb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/fold/xml-fold.js",
    "revision": "e064e5342614b3f859d9250635a6cdc7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/hint/anyword-hint.js",
    "revision": "26c98398f27a02685ce046fa1b990bca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/hint/css-hint.js",
    "revision": "5d8c5d6dbddad1ccdba5188806127ab8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/hint/html-hint.js",
    "revision": "8e8160c22d56fd2ab5e6076c7d111567"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/hint/javascript-hint.js",
    "revision": "d79ae58e0f25aabc775c71bb0af99357"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/hint/python-hint.js",
    "revision": "ba8376020ec5868f56a94034bf396726"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/hint/show-hint.css",
    "revision": "6909e2a9d8f4b5a51b0fbe5e6768b722"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/hint/show-hint.js",
    "revision": "75e04d8e1d7e3ba1f4488eadbdcb06b8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/hint/sql-hint.js",
    "revision": "4c27642784664b7e0484a11ad2850c57"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/hint/xml-hint.js",
    "revision": "2518cfc347e5a11de902c509267378b5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/lint/coffeescript-lint.js",
    "revision": "5b4cdc79d41492bca3a33aa974f879af"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/lint/css-lint.js",
    "revision": "c2f92159f243d5aa127f835068c4a7e2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/lint/javascript-lint.js",
    "revision": "618bf1f00fc8161c71613f443a34d13f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/lint/json-lint.js",
    "revision": "82769a33f1e18715fd1da3cb3c3c833e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/lint/lint.css",
    "revision": "fd707304c56316320cd8cb2a78efd68b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/lint/lint.js",
    "revision": "6ebc8915cbf8e7c9fd1e7fbbfecb10ce"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/lint/yaml-lint.js",
    "revision": "a71679086add6c29d3e09cea1b85b20f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/merge/dep/diff_match_patch.js",
    "revision": "ecbc571af41c4fbbaac460b86ac394ac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/merge/merge.css",
    "revision": "a4593271aafe6badc91465e10db409c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/merge/merge.js",
    "revision": "108249d50e4ff8b3fc6b709b8209c902"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/mode/loadmode.js",
    "revision": "6723cf5089729dc508502d24fa336f5f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/mode/multiplex_test.js",
    "revision": "9b495b24f2c22cc50dbb554a396f733b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/mode/multiplex.js",
    "revision": "33ad8c8d3b016bc2935afdc223dc8ccf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/mode/overlay.js",
    "revision": "9db99d52d4b1dc3a8c2e5b96dfd32eb3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/runmode/colorize.js",
    "revision": "9e9364426c3d48fd1f11f27a93fc1e69"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/runmode/runmode-standalone.js",
    "revision": "99ad186a1edecb50feba263b0babcb22"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/runmode/runmode.js",
    "revision": "ef6cb4132f65f02f4742c7167227315a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/runmode/runmode.node.js",
    "revision": "0f59030a5774824053d1f1460eec2fe3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/scroll/scrollpastend.js",
    "revision": "ba2b499d177929af53c8f5600251ae50"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/search/match-highlighter.js",
    "revision": "9453d57dd359fd804723e49c044d943e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/search/search.js",
    "revision": "ac43e7caf6206430cfcbe6e7eebf57ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/search/searchcursor.js",
    "revision": "e25169181322c4462986f7aacb99be52"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/selection/active-line.js",
    "revision": "9a393ed5437f0f43e129c675084c5309"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/selection/mark-selection.js",
    "revision": "507aa55d1fcd70b91dcb696dc3bd778e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/tern/tern.css",
    "revision": "9efc2db8874ce62b6956e7bb9b5649a1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/tern/tern.js",
    "revision": "ddf920002ba22167a9e91276ee853704"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/tern/worker.js",
    "revision": "e7d878b6ff56802451d357f81204a3b8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/addon/wrap/hardwrap.js",
    "revision": "ef9a6f7c7640e3af40060a9066d19acd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/keymap/emacs.js",
    "revision": "5dd76136dd50082ee7a16d9f833595a9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/keymap/sublime.js",
    "revision": "4e6c3c4acaad046fc1b94a7f1c22693a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/keymap/vim.js",
    "revision": "fc356e82253486efbcbb25268292e953"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/lib/codemirror.css",
    "revision": "1c26f7d1f30cbcc58982178f588906d5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/lib/codemirror.js",
    "revision": "a0ab03cb257499995a9567ba6f95e951"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/clike/clike.js",
    "revision": "09795a457900698f8e997dc1f5ce0673"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/clike/index.html",
    "revision": "728b065e155e47d8368fa859d967e6dc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/clike/scala.html",
    "revision": "f9f3301b645181ec9468d80377a00967"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/css/css.js",
    "revision": "7b4b4a9dc4ee409e24fe00bf7fa85e6d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/css/index.html",
    "revision": "e15d40b9ea9943820e4ac5506ff0a168"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/css/less_test.js",
    "revision": "a06869e83247f2a85153902498e9e198"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/css/less.html",
    "revision": "759c1c5baac1322c9edcd063aff2b84e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/css/scss_test.js",
    "revision": "c2adc306cbf77581fba085dc2d9a1b29"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/css/scss.html",
    "revision": "3810643e50736ef69e6d067eb6657979"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/css/test.js",
    "revision": "32e64016ecdc154b4dfffcc94894a89f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/htmlembedded/htmlembedded.js",
    "revision": "5aa5d89f3ca53a988a8be20d608e6234"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/htmlembedded/index.html",
    "revision": "fa518fc6ccd409ece91931f50caa221e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/htmlmixed/htmlmixed.js",
    "revision": "b8f2528cde883f78ede34ce9487c616e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/htmlmixed/index.html",
    "revision": "757e635618703275eced97323ccbe024"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/javascript/index.html",
    "revision": "963b354fadfdc4790d9308b73bf7b551"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/javascript/javascript.js",
    "revision": "a4481395cdeecee5924f763410ede76a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/javascript/json-ld.html",
    "revision": "a2a5069194b78b6b5523cace263cab06"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/javascript/test.js",
    "revision": "59f3e3d1e748e7ce1bec96fa24f3ddf2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/javascript/typescript.html",
    "revision": "76c2ffb883a133aa0fc5cc75ec0c56f5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/meta.js",
    "revision": "327ffd1122c292df9aeb47cf74fddef1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/python/index.html",
    "revision": "52b1443604f6660ff12307bd9a03f48b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/python/python.js",
    "revision": "1437195b42c866a6e9c6583bb0546f01"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/ruby/index.html",
    "revision": "32d10c9933f77c19d30f79b883bf3dc8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/ruby/ruby.js",
    "revision": "3aca2e83affce042b9e76d385186328c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/ruby/test.js",
    "revision": "644313ffd916604577e26445c21c62c2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/xml/index.html",
    "revision": "ae456da1c5a6fa78aad09132b09a2890"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/xml/test.js",
    "revision": "0559a8ca5956d08c2cfbd89a103e002d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/mode/xml/xml.js",
    "revision": "4304a1cbddb1f976e42893f59de690a1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/3024-day.css",
    "revision": "5f9d1aed05eeb4c641ed628e11910371"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/3024-night.css",
    "revision": "58e39199d831f62942ea321594f84a63"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/ambiance-mobile.css",
    "revision": "256f2dd130b80c6afaa40fddf700d12a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/ambiance.css",
    "revision": "c32bb2a84b7041288ee4291118fc1658"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/base16-dark.css",
    "revision": "ba93d89f6a3cac2e1724465edbd9359c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/base16-light.css",
    "revision": "d90825f641978083516b13f62398bf11"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/blackboard.css",
    "revision": "6727849421970253cb4160061f86da25"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/cobalt.css",
    "revision": "2b8af7f47848649528be2663bcae50c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/eclipse.css",
    "revision": "7c2f7b4b44b33fc9a5f857f542d007ac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/elegant.css",
    "revision": "c98914a034be0b11803bd3c24fba25dd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/erlang-dark.css",
    "revision": "f97e6881fdcb33921e7b36289a539935"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/lesser-dark.css",
    "revision": "3b48abd8ca32ea8324efe26d2a566fcf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/mbo.css",
    "revision": "a6aaca2c437f0ec44e403100b59a827b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/mdn-like.css",
    "revision": "770bc206c1fc62fe40e729b799380f66"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/midnight.css",
    "revision": "78463966e11f1039d20155e2813ae1cc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/monokai.css",
    "revision": "08a3a96660343d2be8ccb226bfc0cdcb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/neat.css",
    "revision": "673552ecebac76569063801293e9c76c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/night.css",
    "revision": "f1a3ca7c9c7fe113734658096be130c0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/paraiso-dark.css",
    "revision": "0d29029548001357f5642755c504035b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/paraiso-light.css",
    "revision": "f6abba0dea78563d040db00a8a2e9463"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/pastel-on-dark.css",
    "revision": "cd4f7fccbd8d5335b0fe907d8d9f3083"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/rubyblue.css",
    "revision": "d2184d8d026064e15cecceb92bf7334b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/solarized.css",
    "revision": "a65089bce1d7f95fbe0ab77115349819"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/the-matrix.css",
    "revision": "4c78f185d16aea6e2c59e4dd8a635fd7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/tomorrow-night-eighties.css",
    "revision": "48dcd4477bd48cc321aa259bf22b6b59"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/twilight.css",
    "revision": "3e74c51694e2e1be13a09a333760ec69"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/vibrant-ink.css",
    "revision": "2c35cc6da0e2b21db5a39fd1f2f0092d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/xq-dark.css",
    "revision": "2c6c8eff4ffd7f7327cbb70b5e38d755"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/codemirror-4.03/theme/xq-light.css",
    "revision": "481023ea9d2e1d4c1707a1867c500326"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/colorwheel.js",
    "revision": "c6512bc70dcbf5ac8b7c2721cbd52351"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/draggabilly.pkgd.min.js",
    "revision": "cc5a311e327e5cfba6b4d1104f34c3fe"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/error-stack-parser.min.js",
    "revision": "fb71f3b3141b77c63ac727bf30eb47e0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/eventsource.js",
    "revision": "c5980a2ab542f1faf296b7cf46520d43"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/excanvas.js",
    "revision": "5c015eb45975966e2330bb564500e81a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/excanvas.min.js",
    "revision": "3682670784157eca627a91ae04f925b8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.colorhelpers.js",
    "revision": "c4cfe1c0db251f00e4a074d1c3556d27"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.crosshair.js",
    "revision": "cd99cb81c084374a130b1c9781068178"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.fillbetween.js",
    "revision": "62001e803c55571594a327da3781fbe7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.image.js",
    "revision": "a8ac5bc33b9578d6f735efb8963611f9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.js",
    "revision": "fcd6ce5924fd781fab9e6060b1ecdcbf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.navigate.js",
    "revision": "0fd6d20c90a468fd43d5573542cfab4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.pie.js",
    "revision": "f08df08f4ca7d51594162994562443ac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.resize.js",
    "revision": "38bdb8560552d6b97a50c6eda034eb90"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.selection.js",
    "revision": "df6b3e3f0d0fa05d9a5bef2910d08f6d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.spline.js",
    "revision": "1920efeaabf5c1a60d7c55a0dd760779"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.stack.js",
    "revision": "e9af2bfe13e736536572d141050febc4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.symbol.js",
    "revision": "df5e55902225d675fd9f88aaf5fe6301"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/flot/jquery.flot.threshold.js",
    "revision": "8c5df27b8f30169bdcb5e0972afa7852"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/homegenie.api.js",
    "revision": "b314901465a83bf5fdd08d17409d5fce"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/homegenie.api.min.js",
    "revision": "550ff5265b4ba8b5fe03555d6041c6fd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/homegenie.webapp.js",
    "revision": "d24110805a82764878fe7a8acd9700fb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery-ui-i18n.js",
    "revision": "57d829b03853586849e33244ec12cdac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-af.js",
    "revision": "3f6dc7167ebfdab2e4c06ca1f7ecbf55"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ar-DZ.js",
    "revision": "f9c86467366d98200c97ac9c8b843fbb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ar.js",
    "revision": "9924612cef93d8722863287157768180"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-az.js",
    "revision": "f9f7fb74b273da0307a8bd4ec7acb6b5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-be.js",
    "revision": "7b1c87006e19cac0f3590845efd008fb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-bg.js",
    "revision": "d965b3639b678aaf5819db10189d3472"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-bs.js",
    "revision": "eeccd3d7df38ab2c37ae290e46b3cd93"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ca.js",
    "revision": "a857021fa5601842d94a41f20a5cab9d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-cs.js",
    "revision": "54791b35c9819515ce0cad20b7537277"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-cy-GB.js",
    "revision": "fb40b70ba78ef9f4251a86355c5f65f7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-da.js",
    "revision": "656d173c027d5a08186e39c156ba5597"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-de.js",
    "revision": "bf12bcbfcb995b003e6cb3c257904be6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-el.js",
    "revision": "c3150764daf20b6fa2142581180be1ad"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-en-AU.js",
    "revision": "4a38655904f6c55da227cea464b55a2b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-en-GB.js",
    "revision": "24a226a281a11799c495abc21f696c23"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-en-NZ.js",
    "revision": "af985e8d034123f14696aa116027760d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-eo.js",
    "revision": "e1f5d8ed4599ca392aeb284fe637df33"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-es.js",
    "revision": "d744e1f2ca7874155d7d5130c285cda1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-et.js",
    "revision": "1a7c15ddc89179a0e309d9e7d2b97ad4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-eu.js",
    "revision": "24751dd4dcabb58b82ee0817fea84fd3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-fa.js",
    "revision": "9687cad817acecd88a808d7ef8c58fcf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-fi.js",
    "revision": "f435818611baafdd00cac4f264e29eae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-fo.js",
    "revision": "85444da9fc4c900eba95f8ff4704688f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-fr-CA.js",
    "revision": "da166bae7a0b6dfd7d9e2f6bab4576dc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-fr-CH.js",
    "revision": "8b170b46edcc43d05082cc464244020f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-fr.js",
    "revision": "792d81b0e28e033f86f11a5602a450cc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-gl.js",
    "revision": "0f4dee4528f5f8fb8eb20a14496b7e37"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-he.js",
    "revision": "b2ad344bf1df226aa1a760f1d3653da7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-hi.js",
    "revision": "1e2602a3c232f31242c47a9cadccf9dd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-hr.js",
    "revision": "7582ea79c7fd35b2b7758ff103b11b4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-hu.js",
    "revision": "dee235f99823541ec88be57dec431230"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-hy.js",
    "revision": "2f3828a4c02a475b1b8966609721b9c3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-id.js",
    "revision": "fb0ad98a3ad212b1986fcac5015b0435"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-is.js",
    "revision": "447892a5c1601bb524d7e2cf5ff6cb33"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-it.js",
    "revision": "7e651d93d0219066bf596faa06db4a81"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ja.js",
    "revision": "bf1cf98e79f2d6792c7c7a193b4c7497"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ka.js",
    "revision": "fd0b08bdc63b1d969fa2df907083062a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-kk.js",
    "revision": "57a792b4c55dc23b2095cc190180c440"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-km.js",
    "revision": "f5c6ed9f64ff97adfd29cb149176021f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ko.js",
    "revision": "5fb849693b65beed7146624ba498b517"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ky.js",
    "revision": "a5db310345d66c395b592fd2f6136bf0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-lb.js",
    "revision": "642aa75625a4ab2c324fb5df74063509"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-lt.js",
    "revision": "162b7b6e9e935c89b62260f13bb98429"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-lv.js",
    "revision": "37874227817498b9976e5c66e4da0eb9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-mk.js",
    "revision": "cdfdd4b3a2e181c9ed297fa55c739d5e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ml.js",
    "revision": "17fe3b0548bf5a2c9f4e0b081efaeb04"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ms.js",
    "revision": "51efc50e21ae012a17f4f3cd0f2ac93d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-nb.js",
    "revision": "693af0abc258aaf903c4d4b23a882676"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-nl-BE.js",
    "revision": "60b63d90f6eb6ea3334ec75d6a0831ec"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-nl.js",
    "revision": "8c765466b1bb2709f8c9db056029ec89"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-nn.js",
    "revision": "690553270244b0de96ade29a9e04b02a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-no.js",
    "revision": "5f531f078d367d5f10c287479533b0c8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-pl.js",
    "revision": "2d7dd09c586d4275b402d627778123ca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-pt-BR.js",
    "revision": "2d3c1dc7191cf5081b4f982c8cf78c98"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-pt.js",
    "revision": "860cea01ca64bbc3c7978d127e99b758"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-rm.js",
    "revision": "0601228208954434efea2ccf265f5b94"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ro.js",
    "revision": "3e888ad522a6581f99b47ad987292c20"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ru.js",
    "revision": "813acc83f4f77a0d874426207da0208a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-sk.js",
    "revision": "377b3c5fa2285a8fa665206957c95ceb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-sl.js",
    "revision": "7b87e98ac2241fffb8f3e5bb6415ec07"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-sq.js",
    "revision": "47ea965b616f6afeab8d860d75787847"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-sr-SR.js",
    "revision": "3d23308dfb3943acdf90bdd46b25f9e2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-sr.js",
    "revision": "7083f39fcb737210e0a13c6196f3feb4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-sv.js",
    "revision": "88fbc9581e8abeac0fe083d572428c45"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-ta.js",
    "revision": "da7607dd5df15b0bcd4da344c33447a3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-th.js",
    "revision": "0f1be4ae65e24fc7d6a37dce828a9cee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-tj.js",
    "revision": "f868a410d5438feee15a20e24e4caf5b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-tr.js",
    "revision": "6d11aae285bdd88294e66353feb284da"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-uk.js",
    "revision": "e0b56bc48d64fa8ffef2b8c39f1db725"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-vi.js",
    "revision": "7d54cb0edfbc31232d4ac12f94cec562"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-zh-CN.js",
    "revision": "46cc885a69ff490c660e99173dc05ea3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-zh-HK.js",
    "revision": "ab64f179cc7f62ba45d7708e1dee8cae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/i18n/jquery.ui.datepicker-zh-TW.js",
    "revision": "411a70a31fe6420be6e5990ea5122e18"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/isotope.pkgd.min.js",
    "revision": "993af08be0b86ea8d282f6300236c611"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jqm-datebox.lang.utf8.min.js",
    "revision": "eb617e41fd0b74f937b875db0a9a1c93"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery-2.0.2.min.js",
    "revision": "15d1937f3ea4497313e5255517a99b4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery-ui-1.10.3.custom.min.js",
    "revision": "1953b49b3c059c27c4e12417327a5a59"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.fileupload.js",
    "revision": "e7efee9e288db58ae9fcf835cc5a0a2e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.knob.js",
    "revision": "d6b56c60188969f6465564224d279910"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile-1.4.5.css",
    "revision": "e68b5ba5011a20f19c2cf0910bb092fb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile-1.4.5.js",
    "revision": "a73d36219d6c3e89f51ad30fca3bdef0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.css",
    "revision": "b835b04bbff5a8020c31ce21714e389b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.js",
    "revision": "86cbe4dd3c0b109b0865d1a1cedce819"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.external-png-1.4.5.css",
    "revision": "8bf5f941414d62fa5d2b2753742dfb25"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.external-png-1.4.5.min.css",
    "revision": "0d6a0a1de599d6ae30eaa18451353542"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.icons-1.4.5.css",
    "revision": "e87694fe02dc7396117076d9327e0c08"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.icons-1.4.5.min.css",
    "revision": "1299bcc0c86b9c76f6c8730d3ea5a8ae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.inline-png-1.4.5.css",
    "revision": "31eb5c37f495222883ebce0cce353245"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.inline-png-1.4.5.min.css",
    "revision": "c2f5a6dcedd9b3f5f2460c7a3a1e7b2a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.inline-svg-1.4.5.css",
    "revision": "3e29d99cf3f262a3a5129b87f0369486"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.inline-svg-1.4.5.min.css",
    "revision": "28485b7d340311c98c8f68f95eb9ec73"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.structure-1.4.5.css",
    "revision": "a886dbca5cbb30e11a69bc634e9f809e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.structure-1.4.5.min.css",
    "revision": "1544ca9f803edff31be0577b9f985853"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.theme-1.4.5.css",
    "revision": "aeddf44fdbe6765c1feec9186159b05f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/jquery.mobile.theme-1.4.5.min.css",
    "revision": "4af700266946fede1858cd8cc6c87850"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile.splitview.css",
    "revision": "5f70aeb99a20be66d18708c7e43290d1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile.splitview.js",
    "revision": "f5fd13e975ed9b5bd496aba32a022ccd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.notify.min.js",
    "revision": "eb79ebea6322b95f5bab19facbbd1f28"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.qtip.min.js",
    "revision": "a271e7f137052c98f51d37ba3d4c52ee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.snippet.min.js",
    "revision": "7610663420f48f3fa1ed721286a4e68b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.ui.touch-punch.min.js",
    "revision": "fd14b3accf30769e15f5f499cebc710b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/json2.js",
    "revision": "95def87b93d11289cd2eee1cc3ca7948"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jstorage.min.js",
    "revision": "0541a99b03ee94c76058b1cd6c513dd6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jtsage-datebox.min.js",
    "revision": "effa583a9cd586b12d9c45a4fc25024b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/locationpicker.jquery.js",
    "revision": "ba65582b0c8b7ef65ac192b52eb9d645"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/marked.min.js",
    "revision": "42562d36ff3a795250386d52d40e33e1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/moment.min.js",
    "revision": "cf6d65fe3e48cb35829102f380404e20"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/my.js",
    "revision": "dc33c5b33811513819aa577adcb36bb2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/packery-mode.pkgd.min.js",
    "revision": "2cd76b73c15766f31204345463de91c9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/raphael-min.js",
    "revision": "dd9d2aee0360d5c4a2fb4e8675eb3707"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/stackframe.min.js",
    "revision": "33e4a6e8bd7ba80811a1f23c21aa373b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/de.json",
    "revision": "f1a8d5b79732d4de33e25701d16cb79b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/de.lingo.json",
    "revision": "82999c6df0484bdad6c1d58c3ae7dc52"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/de.programs.json",
    "revision": "8188d9bea72d899039117a2fa3cf2ff6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/en.json",
    "revision": "8e00d336ab54c2a82b374aa0358cecd5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/en.lingo.json",
    "revision": "eef54d1c7ce38c6812ea95e194e2484a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/en.programs.json",
    "revision": "0c15988948842ed1e7b9d1f69d902a7b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/es.json",
    "revision": "1c602345591059647949c18e297c4420"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/es.lingo.json",
    "revision": "f200b98dbe6ed17b4385010fb0aeebe6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/es.programs.json",
    "revision": "9449834b80e671256f8c38a053ed2a51"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/fr.json",
    "revision": "578ea2115a7756630db195a04a0f3ed9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/fr.lingo.json",
    "revision": "85cc6dded2ab2be199aa13ad4a05c581"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/fr.programs.json",
    "revision": "0aee48445b5589455cf026b607fe16d4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/it.json",
    "revision": "d5dbf740c898c13baedbef1dfa675ca6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/it.lingo.json",
    "revision": "200dc71ceec659b49b5dd8432c398cc1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/it.programs.json",
    "revision": "8d7f5e6a06cd4f2073d403e79e902d70"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/nl.json",
    "revision": "ebd893309e0e502f6f4531ab28ddb2c2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/nl.lingo.json",
    "revision": "c05766eb6d2a9f2f4ad58dd871daf237"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/pl.lingo.json",
    "revision": "f0ab1246c4369e046013d92764a961b1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/ru.json",
    "revision": "45c0966d445087d4c8630c5590053c71"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/ru.lingo.json",
    "revision": "24351c73b38c1df5950b5a75ea8fef46"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/ru.programs.json",
    "revision": "d0bcc614a4382a59d52db5ade0bac210"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/sv.json",
    "revision": "ef83d83971be50ede205bafd9eea9e31"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/sv.lingo.json",
    "revision": "50048e2a8f01a633a34ef20f30798326"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/locales/sv.programs.json",
    "revision": "dd6b95f24695ae22075c5df9b83c29fa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/analyze/_statistics.js",
    "revision": "ed283f23587df23ea4db0d5e6678ccf8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/analyze/main.html",
    "revision": "3d85e954a150c8a1c3e001af005494b5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/apps/netplay/_slideshow.js",
    "revision": "a76e3bca4fbe34d3dbc2a130c5e3f17f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/apps/netplay/slideshow.html",
    "revision": "110a74cdaba4da7a8dbd471e4e90cc8b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/groups/_groupmodules.js",
    "revision": "bf65c9e18112c6ae510f1f3df3e175e1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/groups/_groupslist.js",
    "revision": "4961451af708bc430aa2a96dc38839cd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/groups/listgroups.html",
    "revision": "61823179bb78b2328073070c2313e4c6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/groups/listmodules.html",
    "revision": "847759b474b2c285ab31a17cf60a2ba3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/interfaces/_systemsettings.js",
    "revision": "2e92aa0c77932fc9b9ccd86215b1365a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/interfaces/configlet/upnp.html",
    "revision": "d2ec0dc9bfb03fb7b9fe74ffa6045474"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/interfaces/configlet/x10.html",
    "revision": "17b06da09d8ac8bbb86bffb47b957c26"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/interfaces/configlet/zwave.html",
    "revision": "d631b5f25dbfa5da7080001ce54edd13"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/interfaces/main.html",
    "revision": "5a19b256726b4f196f2c48dbc01ef28f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/maintenance/_maintenance.js",
    "revision": "871bd249d99be6e86b748b5486961010"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/maintenance/main.html",
    "revision": "261c224c116df18d727a7911df67ff4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/programengine/_groupslist.js",
    "revision": "45b850581cf1f8a49b03c68c53a34bf7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/programengine/_programedit.js",
    "revision": "d353cbf7ab59c94fe6148f70efd4957e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/programengine/_programslist.js",
    "revision": "7922e519b369c56001c1c574e5ee5b19"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/programengine/commandwizard.html",
    "revision": "76dfcf296068b0f268a361e2bba92e0b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/programengine/conditionwizard.html",
    "revision": "f6c6f412640741c1ff3581e2140614a4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/programengine/editprogram.html",
    "revision": "93c19a2f24ad1877d6e01376bc3a2aa9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/programengine/listgroups.html",
    "revision": "2fa1d5f194a336f75e37f3b6442c839b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/programengine/listprograms.html",
    "revision": "d0a6a4cd4b6fe76bd022dfb1163a1001"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/scheduler/_scheduler.js",
    "revision": "0a877acc8288bc0e0db55c90f420da87"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/scheduler/main.html",
    "revision": "6497c251c6d15cda1adcb7314c6e5d02"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/scheduler/templates/command.set-level.js",
    "revision": "bf2be09ef2a9b6570c4eeac404c84b64"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/scheduler/templates/command.therm-heat.js",
    "revision": "07891b0566aa2c4700ed8d1acee8e266"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/scheduler/templates/command.therm-off.js",
    "revision": "42add6207e818f43cfa46bffaf96e9b4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/scheduler/templates/command.turn-off.js",
    "revision": "f4154cf95e4e297e370ed968ecaef620"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/scheduler/templates/command.turn-on-off.range.js",
    "revision": "542a0d1caf7e40ceac4b04d873d30788"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/scheduler/templates/command.turn-on.js",
    "revision": "a04698a3ca6f1edbb65a4dc7d0b597ca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/scheduler/templates/index.json",
    "revision": "4e2f999b91c63abe26f6402aa4dadc93"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/scheduler/templates/program.say.js",
    "revision": "2687d9c3bf7000687b26da28c1bd127a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/widgeteditor/_widgetedit.js",
    "revision": "c2c68175f3689b05cda8a4d66aaf2a1f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/widgeteditor/_widgetslist.js",
    "revision": "9e7fec61824d0c27c1b08abca4397d65"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/widgeteditor/editwidget.html",
    "revision": "fec4cdb13d3750882aba1bad13307d18"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/configure/widgeteditor/listwidgets.html",
    "revision": "a887fa79784e6721029b8158b4a92c4a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/_control.js",
    "revision": "ff6b7ea1263ee9c68f8be442995e9319"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/main.html",
    "revision": "d4c7cc29fa30f42bd41345c39aa7ed28"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/configuration.json",
    "revision": "629f440a5278efc8007d8eb34443ac93"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather.html",
    "revision": "8f8d746c0dd592a0ed0b5dcc6109ab8c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather.js",
    "revision": "75207b4c099a509375eacd71377de6f0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/camerainput.html",
    "revision": "b30e99dcaf715a4fadda629c5c42dc4a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/camerainput.js",
    "revision": "bdccd6e9e7a3da0819011e6f5f4841ee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/colorlight.html",
    "revision": "8dcbe2e515bd40b007bfdec053356efc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/colorlight.js",
    "revision": "478e0a9c0237d8fabb7c382b28657ecf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/dimmer.html",
    "revision": "fabb5bb208e6f1527d45b6e73783645d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/dimmer.js",
    "revision": "da90223bf156bc6b93da8f43c1078f0f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/doorlock.html",
    "revision": "8ad63666fd7e1b30940c0606312971c6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/doorlock.js",
    "revision": "bac553cdffda0607623ca5b553e7e0e5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/doorwindow.html",
    "revision": "fb90e857ff4d30f17b9f0701cfb413ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/doorwindow.js",
    "revision": "ca26442d9e4ad51fb01215af105fdb99"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/energymonitor.html",
    "revision": "1587170c4f7b05f534c8aa826d432670"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/energymonitor.js",
    "revision": "5b0cfe480d4bdf0a98bdfdecc83dbbc5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/generic.html",
    "revision": "81acc96a8beaa745230135f2207d2009"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/generic.js",
    "revision": "c76d9553cc12f08dc5848d9e9c2789df"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/grouplabel.html",
    "revision": "c63fa5ec40f6c244344127b039dea8ac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/grouplabel.js",
    "revision": "91214805e9bc018067a6fc9ca43ef297"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/light.html",
    "revision": "57aa59c98ffe503f31a986907fe52dc9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/light.js",
    "revision": "15bfa35fe64e5d9e6240ec471e8d6bb6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/link.html",
    "revision": "a7a16ee59bbbf0136a9d31aa2bc17eea"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/link.js",
    "revision": "a6722a99e5cd17437a7c180117c5c276"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/locales/en.json",
    "revision": "ab07ee657261ca4353a1a0a352bf4390"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/locales/fr.json",
    "revision": "ece00aa8ace48cfc55fa84617f5b8a24"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/locales/it.json",
    "revision": "647dc81f1c4dce90b21d876fe871a2d0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/locales/ru.json",
    "revision": "b8a592480c7dec897069c785bed72d11"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/mediareceiver.html",
    "revision": "307d665b1fc01eacaf2cd7b7557847bf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/mediareceiver.js",
    "revision": "1508cd82ecf907dc249fceff6d29ddbb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/mediaserver.html",
    "revision": "04f54686aaaae24820b4e70551ef9614"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/mediaserver.js",
    "revision": "3a462b0957527ebdf02bcb27ffe42f6c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/mediatransmitter.html",
    "revision": "568e4c69acb9b3936d95a8c2c5ba0797"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/mediatransmitter.js",
    "revision": "5cc8f44697da1a505b9bd9ead977fd78"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/program.html",
    "revision": "6a5d1a7601172d178d3c88b6d3d6b5b3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/program.js",
    "revision": "84c6aba927ad341061091d9124f25858"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/securitysystem.html",
    "revision": "80662876c759bad581211b9c55ef3bbb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/securitysystem.js",
    "revision": "78f6c7c282d39cfb86cc9c45c4a136b1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/sensor.html",
    "revision": "59f75acbb83f9247849ebbb47eb6596a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/sensor.js",
    "revision": "07bd3b996bad0096e9d87843b1094f9e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/shutter.html",
    "revision": "6cf0b886b47ef59a3ebc158bb549d00e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/shutter.js",
    "revision": "b01d2a2c703aeb1f307bfee989380373"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/siren.html",
    "revision": "57aa59c98ffe503f31a986907fe52dc9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/siren.js",
    "revision": "15bfa35fe64e5d9e6240ec471e8d6bb6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/status.html",
    "revision": "a5e51ab675defdb4444683ab64714d63"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/status.js",
    "revision": "c24c36e9426733fa6d66a8fe467bb919"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/switch.html",
    "revision": "57aa59c98ffe503f31a986907fe52dc9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/switch.js",
    "revision": "d9eb1d3e918325eb6fae42db3438829d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/thermostat.html",
    "revision": "92e22833690f35fe520cbfd204140fd3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/thermostat.js",
    "revision": "948b17217b0f4c5408e66647752ef7e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/unknown.html",
    "revision": "6ddcf90cc8c332da1113a1116fd111e7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/unknown.js",
    "revision": "a7b66f6c274401de96a368d888ea9596"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/template.html",
    "revision": "d8deef2a09c2b0976c10e56a645904ae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/template.js",
    "revision": "9e8663591cf126971ecf45b0151c2b17"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/events/_events.js",
    "revision": "9599388ec459024d2535dcdd33cf6b2f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/events/main.html",
    "revision": "d427dfc02f1f6277e41bd22f0462b618"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/header.html",
    "revision": "903c2a2200ede9a50aa27b338c6f628b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/core/popup.cronwizard.html",
    "revision": "0293430e72d06ddd5a45b3099d14d1ea"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/core/popup.cronwizard.js",
    "revision": "391463aa02254bb2d05dccc36f9b6423"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/capture.html",
    "revision": "ce07e14186da81596585fb8970aa7d80"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/capture.js",
    "revision": "80a5664bdf9f8a7b2f42c1412bf157f4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/checkbox.html",
    "revision": "b3b7c42b194c185987a8a510548e130a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/checkbox.js",
    "revision": "67a72f6e87ca2d4067f148a7e4447f4e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/cron.text.html",
    "revision": "de5530e57da2aca0809dcd66e4321fc0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/cron.text.js",
    "revision": "9bba6f8aec51fec302fa23960f8a4bbc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/module.text.html",
    "revision": "fae388069ed7e156c7a7ac1667c4923d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/module.text.js",
    "revision": "0a24bb56afebecb0d6a34caae4416ade"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/password.html",
    "revision": "d55de8eaed546996f4dcc89aa2a7e6f7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/password.js",
    "revision": "996d8cff6c4716156de2f3addf943972"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/program.text.html",
    "revision": "fae388069ed7e156c7a7ac1667c4923d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/program.text.js",
    "revision": "c50a7c0cc3f50d05c8c6e80e82d8f11e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/slider.html",
    "revision": "05274e9a3231b4a7f81c4e58c7b73dff"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/slider.js",
    "revision": "dc6bb3aad5fd4cb6d15afbee075f05b7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/store.script.html",
    "revision": "5da541e66924a7120ae68c524830f2dd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/store.script.js",
    "revision": "01fac713fdb1103dc6f0f4624573df7e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/store.script.list.html",
    "revision": "56cdda468867d38224da2c61f01b5152"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/store.script.list.js",
    "revision": "1fe774c6c4e793b6ed5d3fdbf81c6348"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/text.html",
    "revision": "fae388069ed7e156c7a7ac1667c4923d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/text.js",
    "revision": "996d8cff6c4716156de2f3addf943972"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/timetable.html",
    "revision": "97ea42f946ccb368dac2a7d5559fa0c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/timetable.js",
    "revision": "58a85b81f4bd82bc87fb8ebb22f9ceb1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/wunderground.city.html",
    "revision": "93d0e5fa96d2a9e5d2eb7522955e7d1f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/ui/widgets/wunderground.city.js",
    "revision": "c5def720b6f2f046f1f9b57970a233eb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/installed_packages.json",
    "revision": "629f440a5278efc8007d8eb34443ac93"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/blank.html",
    "revision": "ecaa88f7fa0bf610a5a26cf545dcd3aa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/cli.html",
    "revision": "7539b48ccaad4db12916cd6872775ee8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/font-awesome/css/font-awesome.css",
    "revision": "5343ee1a287a65ff20961476fd8a6188"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/font-awesome/css/font-awesome.min.css",
    "revision": "4fbd15cb6047af93373f4f895639c8bf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/fonts/hg-fonts.css",
    "revision": "cbd14377cab1fb02e8ccbe1dace2cb30"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/homegenie.css",
    "revision": "cfb4ee1b422661643f4d5d124510c73d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/homegenie.min.css",
    "revision": "0f7a713fb4e67008178841713f263bbf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/jqm-font-awesome-isvg-ipng.min.css",
    "revision": "f9a28dcd30e9568dd454308afeafbd61"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/jquery-ui.min.css",
    "revision": "b059dd0f6967f4e8ba50c9ca728c91b5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/jquery.mobile.icons.min.css",
    "revision": "e5d30611614c33d91ca7fe10b2f5ac8f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/jquery.qtip.min.css",
    "revision": "6fa1b7ce01c0bdc927c9f662f74ddf21"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/jquery.snippet.min.css",
    "revision": "ca836dbf578ff7edd9acc5556147469a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/jtsage-datebox.min.css",
    "revision": "0f444e7d18eaee2977f1d34f835a256a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/my.css",
    "revision": "8a8b2ec70bb9075cd69491505072c698"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/ui.notify.css",
    "revision": "b5da7fd09901162a9ed353308eb1bf1b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ext/zwave/_nodesetup.js",
    "revision": "36d449967d4cfe1ca67290cdb9cbfcb8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ext/zwave/setupnode.html",
    "revision": "3fad6284fb3d3aa2a30180262de72806"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/icons.html",
    "revision": "a4e8c938edacd5e8c55c5441054dcf9a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/index.html",
    "revision": "e771f168e3c8f7ae7107ccb909b9f7da"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.automation.js",
    "revision": "06a1e550f35b432cb9dd586d0b16d1e1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.automation.macro.js",
    "revision": "f72be0194990fb4ae799823f534b2abb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.automation.programs.js",
    "revision": "6caaa74fb092d50d131b329be4bfd15e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.automation.scheduling.js",
    "revision": "cc84cb47c6f6a07c871a028677bcd20a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.configure.groups.js",
    "revision": "f6f38244eb0b80a459395f7b955b3598"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.configure.interfaces.js",
    "revision": "5ba1bf1e440e148ddb1328565956ebe6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.configure.js",
    "revision": "faa14a9566c25454ddfd47f9895dd022"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.configure.mig.js",
    "revision": "7f3eef0bda509020eafdc3810aec6da3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.configure.modules.js",
    "revision": "3bcdb189bcefb9afdf06b260ec62f998"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.configure.stores.js",
    "revision": "26e4a43815fc28044f68feb44c4c1842"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.configure.system.js",
    "revision": "a2a3de29247e64f7b43d9730fb7e5ad3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.configure.widgets.js",
    "revision": "017236d671994f5b1f084651681a3c9f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.control.js",
    "revision": "2637b71fd19ae18f6ae6730272f93496"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.control.modules.js",
    "revision": "5cfd97f8dfa97ee1141a430d3203a88b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.statistics.js",
    "revision": "8a5e1f82b4a0d521a053d48ac124dd40"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.system.js",
    "revision": "e770e126d62acd7d634b5a944ed09be0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.system.updatemanager.js",
    "revision": "0fc128a3099fc871e47993e1489d9cff"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.ui.js",
    "revision": "f11d434fdc40d18b10d1069074de6a9b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/api/homegenie.voicecontrol.js",
    "revision": "a89f99c89bfded5426fa0037f17f86ee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/app/homegenie.webapp.home.js",
    "revision": "73bc8eccd7fbb4cc727d81cd284f2be4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/app/homegenie.webapp.locales.js",
    "revision": "2425d75e393793bb3cb02c136c311c9c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/app/homegenie.webapp.utility.js",
    "revision": "975e8d99c62fd0e0f270621c84746b3f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/comment/comment.js",
    "revision": "983f318427db728f83de1f79be9a5a88"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/comment/continuecomment.js",
    "revision": "f9b0e8a95c77dcb7766acef3710e42e9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/dialog/dialog.css",
    "revision": "910c1893a275073be1f80f32b77cd5a4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/dialog/dialog.js",
    "revision": "5313293614d5eb85dafa26df6b0dda0d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/display/fullscreen.css",
    "revision": "1a278e72b51528270f8ce9ec991929a1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/display/fullscreen.js",
    "revision": "893000c6ef04cb127c23aae9933c9ec4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/display/placeholder.js",
    "revision": "61ed0cc4d000f3dee5390e8111797d80"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/display/rulers.js",
    "revision": "7835756be0815b06307e91f79a73543d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/edit/closebrackets.js",
    "revision": "7e837f844384e1264dc04a5320a3ea6f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/edit/closetag.js",
    "revision": "46ea535d3a17ee4aaabdfa74b741b8b7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/edit/continuelist.js",
    "revision": "32a633aabf220ecbd585e517891b797d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/edit/matchbrackets.js",
    "revision": "7161292fcb7991bc001216f1ff4660cc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/edit/matchtags.js",
    "revision": "4b0b6b3278dd26ee7de91fb57a746f2f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/edit/trailingspace.js",
    "revision": "53775246494a906f35c176064b0e1790"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/fold/brace-fold.js",
    "revision": "7fd555e31badb4918a7ec8b9080b600e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/fold/comment-fold.js",
    "revision": "67ac591c23fd52e10b21bca75a904fd7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/fold/foldcode.js",
    "revision": "9e2ee7846dfad540a3abaa8277005f17"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/fold/foldgutter.css",
    "revision": "e97c93ebd0bc7b0d3dfc54ccf0d6b26a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/fold/foldgutter.js",
    "revision": "f128b2e16b974ea6c10e0fcf95956e24"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/fold/indent-fold.js",
    "revision": "4412c591f48b2d2bbe9c5139bb1d52b2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/fold/markdown-fold.js",
    "revision": "6c40139c3c6a06a7c7d6fedde26dafeb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/fold/xml-fold.js",
    "revision": "e064e5342614b3f859d9250635a6cdc7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/hint/anyword-hint.js",
    "revision": "26c98398f27a02685ce046fa1b990bca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/hint/css-hint.js",
    "revision": "5d8c5d6dbddad1ccdba5188806127ab8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/hint/html-hint.js",
    "revision": "8e8160c22d56fd2ab5e6076c7d111567"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/hint/javascript-hint.js",
    "revision": "d79ae58e0f25aabc775c71bb0af99357"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/hint/python-hint.js",
    "revision": "ba8376020ec5868f56a94034bf396726"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/hint/show-hint.css",
    "revision": "6909e2a9d8f4b5a51b0fbe5e6768b722"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/hint/show-hint.js",
    "revision": "75e04d8e1d7e3ba1f4488eadbdcb06b8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/hint/sql-hint.js",
    "revision": "4c27642784664b7e0484a11ad2850c57"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/hint/xml-hint.js",
    "revision": "2518cfc347e5a11de902c509267378b5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/lint/coffeescript-lint.js",
    "revision": "5b4cdc79d41492bca3a33aa974f879af"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/lint/css-lint.js",
    "revision": "c2f92159f243d5aa127f835068c4a7e2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/lint/javascript-lint.js",
    "revision": "618bf1f00fc8161c71613f443a34d13f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/lint/json-lint.js",
    "revision": "82769a33f1e18715fd1da3cb3c3c833e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/lint/lint.css",
    "revision": "fd707304c56316320cd8cb2a78efd68b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/lint/lint.js",
    "revision": "6ebc8915cbf8e7c9fd1e7fbbfecb10ce"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/lint/yaml-lint.js",
    "revision": "a71679086add6c29d3e09cea1b85b20f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/merge/dep/diff_match_patch.js",
    "revision": "ecbc571af41c4fbbaac460b86ac394ac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/merge/merge.css",
    "revision": "a4593271aafe6badc91465e10db409c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/merge/merge.js",
    "revision": "108249d50e4ff8b3fc6b709b8209c902"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/mode/loadmode.js",
    "revision": "6723cf5089729dc508502d24fa336f5f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/mode/multiplex_test.js",
    "revision": "9b495b24f2c22cc50dbb554a396f733b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/mode/multiplex.js",
    "revision": "33ad8c8d3b016bc2935afdc223dc8ccf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/mode/overlay.js",
    "revision": "9db99d52d4b1dc3a8c2e5b96dfd32eb3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/runmode/colorize.js",
    "revision": "9e9364426c3d48fd1f11f27a93fc1e69"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/runmode/runmode-standalone.js",
    "revision": "99ad186a1edecb50feba263b0babcb22"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/runmode/runmode.js",
    "revision": "ef6cb4132f65f02f4742c7167227315a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/runmode/runmode.node.js",
    "revision": "0f59030a5774824053d1f1460eec2fe3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/scroll/scrollpastend.js",
    "revision": "ba2b499d177929af53c8f5600251ae50"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/search/match-highlighter.js",
    "revision": "9453d57dd359fd804723e49c044d943e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/search/search.js",
    "revision": "ac43e7caf6206430cfcbe6e7eebf57ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/search/searchcursor.js",
    "revision": "e25169181322c4462986f7aacb99be52"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/selection/active-line.js",
    "revision": "9a393ed5437f0f43e129c675084c5309"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/selection/mark-selection.js",
    "revision": "507aa55d1fcd70b91dcb696dc3bd778e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/tern/tern.css",
    "revision": "9efc2db8874ce62b6956e7bb9b5649a1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/tern/tern.js",
    "revision": "ddf920002ba22167a9e91276ee853704"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/tern/worker.js",
    "revision": "e7d878b6ff56802451d357f81204a3b8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/addon/wrap/hardwrap.js",
    "revision": "ef9a6f7c7640e3af40060a9066d19acd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/keymap/emacs.js",
    "revision": "5dd76136dd50082ee7a16d9f833595a9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/keymap/sublime.js",
    "revision": "4e6c3c4acaad046fc1b94a7f1c22693a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/keymap/vim.js",
    "revision": "fc356e82253486efbcbb25268292e953"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/lib/codemirror.css",
    "revision": "1c26f7d1f30cbcc58982178f588906d5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/lib/codemirror.js",
    "revision": "a0ab03cb257499995a9567ba6f95e951"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/clike/clike.js",
    "revision": "09795a457900698f8e997dc1f5ce0673"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/clike/index.html",
    "revision": "728b065e155e47d8368fa859d967e6dc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/clike/scala.html",
    "revision": "f9f3301b645181ec9468d80377a00967"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/css/css.js",
    "revision": "7b4b4a9dc4ee409e24fe00bf7fa85e6d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/css/index.html",
    "revision": "e15d40b9ea9943820e4ac5506ff0a168"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/css/less_test.js",
    "revision": "a06869e83247f2a85153902498e9e198"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/css/less.html",
    "revision": "759c1c5baac1322c9edcd063aff2b84e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/css/scss_test.js",
    "revision": "c2adc306cbf77581fba085dc2d9a1b29"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/css/scss.html",
    "revision": "3810643e50736ef69e6d067eb6657979"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/css/test.js",
    "revision": "32e64016ecdc154b4dfffcc94894a89f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/htmlembedded/htmlembedded.js",
    "revision": "5aa5d89f3ca53a988a8be20d608e6234"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/htmlembedded/index.html",
    "revision": "fa518fc6ccd409ece91931f50caa221e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/htmlmixed/htmlmixed.js",
    "revision": "b8f2528cde883f78ede34ce9487c616e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/htmlmixed/index.html",
    "revision": "757e635618703275eced97323ccbe024"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/javascript/index.html",
    "revision": "963b354fadfdc4790d9308b73bf7b551"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/javascript/javascript.js",
    "revision": "a4481395cdeecee5924f763410ede76a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/javascript/json-ld.html",
    "revision": "a2a5069194b78b6b5523cace263cab06"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/javascript/test.js",
    "revision": "59f3e3d1e748e7ce1bec96fa24f3ddf2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/javascript/typescript.html",
    "revision": "76c2ffb883a133aa0fc5cc75ec0c56f5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/meta.js",
    "revision": "327ffd1122c292df9aeb47cf74fddef1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/python/index.html",
    "revision": "52b1443604f6660ff12307bd9a03f48b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/python/python.js",
    "revision": "1437195b42c866a6e9c6583bb0546f01"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/ruby/index.html",
    "revision": "32d10c9933f77c19d30f79b883bf3dc8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/ruby/ruby.js",
    "revision": "3aca2e83affce042b9e76d385186328c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/ruby/test.js",
    "revision": "644313ffd916604577e26445c21c62c2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/xml/index.html",
    "revision": "ae456da1c5a6fa78aad09132b09a2890"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/xml/test.js",
    "revision": "0559a8ca5956d08c2cfbd89a103e002d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/mode/xml/xml.js",
    "revision": "4304a1cbddb1f976e42893f59de690a1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/3024-day.css",
    "revision": "5f9d1aed05eeb4c641ed628e11910371"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/3024-night.css",
    "revision": "58e39199d831f62942ea321594f84a63"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/ambiance-mobile.css",
    "revision": "256f2dd130b80c6afaa40fddf700d12a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/ambiance.css",
    "revision": "c32bb2a84b7041288ee4291118fc1658"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/base16-dark.css",
    "revision": "ba93d89f6a3cac2e1724465edbd9359c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/base16-light.css",
    "revision": "d90825f641978083516b13f62398bf11"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/blackboard.css",
    "revision": "6727849421970253cb4160061f86da25"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/cobalt.css",
    "revision": "2b8af7f47848649528be2663bcae50c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/eclipse.css",
    "revision": "7c2f7b4b44b33fc9a5f857f542d007ac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/elegant.css",
    "revision": "c98914a034be0b11803bd3c24fba25dd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/erlang-dark.css",
    "revision": "f97e6881fdcb33921e7b36289a539935"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/lesser-dark.css",
    "revision": "3b48abd8ca32ea8324efe26d2a566fcf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/mbo.css",
    "revision": "a6aaca2c437f0ec44e403100b59a827b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/mdn-like.css",
    "revision": "770bc206c1fc62fe40e729b799380f66"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/midnight.css",
    "revision": "78463966e11f1039d20155e2813ae1cc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/monokai.css",
    "revision": "08a3a96660343d2be8ccb226bfc0cdcb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/neat.css",
    "revision": "673552ecebac76569063801293e9c76c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/night.css",
    "revision": "f1a3ca7c9c7fe113734658096be130c0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/paraiso-dark.css",
    "revision": "0d29029548001357f5642755c504035b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/paraiso-light.css",
    "revision": "f6abba0dea78563d040db00a8a2e9463"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/pastel-on-dark.css",
    "revision": "cd4f7fccbd8d5335b0fe907d8d9f3083"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/rubyblue.css",
    "revision": "d2184d8d026064e15cecceb92bf7334b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/solarized.css",
    "revision": "a65089bce1d7f95fbe0ab77115349819"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/the-matrix.css",
    "revision": "4c78f185d16aea6e2c59e4dd8a635fd7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/tomorrow-night-eighties.css",
    "revision": "48dcd4477bd48cc321aa259bf22b6b59"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/twilight.css",
    "revision": "3e74c51694e2e1be13a09a333760ec69"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/vibrant-ink.css",
    "revision": "2c35cc6da0e2b21db5a39fd1f2f0092d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/xq-dark.css",
    "revision": "2c6c8eff4ffd7f7327cbb70b5e38d755"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/codemirror-4.03/theme/xq-light.css",
    "revision": "481023ea9d2e1d4c1707a1867c500326"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/colorwheel.js",
    "revision": "c6512bc70dcbf5ac8b7c2721cbd52351"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/draggabilly.pkgd.min.js",
    "revision": "cc5a311e327e5cfba6b4d1104f34c3fe"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/error-stack-parser.min.js",
    "revision": "fb71f3b3141b77c63ac727bf30eb47e0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/eventsource.js",
    "revision": "c5980a2ab542f1faf296b7cf46520d43"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/excanvas.js",
    "revision": "5c015eb45975966e2330bb564500e81a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/excanvas.min.js",
    "revision": "3682670784157eca627a91ae04f925b8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.colorhelpers.js",
    "revision": "c4cfe1c0db251f00e4a074d1c3556d27"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.crosshair.js",
    "revision": "cd99cb81c084374a130b1c9781068178"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.fillbetween.js",
    "revision": "62001e803c55571594a327da3781fbe7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.image.js",
    "revision": "a8ac5bc33b9578d6f735efb8963611f9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.js",
    "revision": "fcd6ce5924fd781fab9e6060b1ecdcbf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.navigate.js",
    "revision": "0fd6d20c90a468fd43d5573542cfab4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.pie.js",
    "revision": "f08df08f4ca7d51594162994562443ac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.resize.js",
    "revision": "38bdb8560552d6b97a50c6eda034eb90"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.selection.js",
    "revision": "df6b3e3f0d0fa05d9a5bef2910d08f6d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.spline.js",
    "revision": "1920efeaabf5c1a60d7c55a0dd760779"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.stack.js",
    "revision": "e9af2bfe13e736536572d141050febc4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.symbol.js",
    "revision": "df5e55902225d675fd9f88aaf5fe6301"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/flot/jquery.flot.threshold.js",
    "revision": "8c5df27b8f30169bdcb5e0972afa7852"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/homegenie.api.js",
    "revision": "b314901465a83bf5fdd08d17409d5fce"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/homegenie.api.min.js",
    "revision": "550ff5265b4ba8b5fe03555d6041c6fd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/homegenie.webapp.js",
    "revision": "d24110805a82764878fe7a8acd9700fb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery-ui-i18n.js",
    "revision": "57d829b03853586849e33244ec12cdac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-af.js",
    "revision": "3f6dc7167ebfdab2e4c06ca1f7ecbf55"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ar-DZ.js",
    "revision": "f9c86467366d98200c97ac9c8b843fbb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ar.js",
    "revision": "9924612cef93d8722863287157768180"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-az.js",
    "revision": "f9f7fb74b273da0307a8bd4ec7acb6b5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-be.js",
    "revision": "7b1c87006e19cac0f3590845efd008fb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-bg.js",
    "revision": "d965b3639b678aaf5819db10189d3472"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-bs.js",
    "revision": "eeccd3d7df38ab2c37ae290e46b3cd93"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ca.js",
    "revision": "a857021fa5601842d94a41f20a5cab9d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-cs.js",
    "revision": "54791b35c9819515ce0cad20b7537277"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-cy-GB.js",
    "revision": "fb40b70ba78ef9f4251a86355c5f65f7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-da.js",
    "revision": "656d173c027d5a08186e39c156ba5597"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-de.js",
    "revision": "bf12bcbfcb995b003e6cb3c257904be6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-el.js",
    "revision": "c3150764daf20b6fa2142581180be1ad"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-en-AU.js",
    "revision": "4a38655904f6c55da227cea464b55a2b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-en-GB.js",
    "revision": "24a226a281a11799c495abc21f696c23"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-en-NZ.js",
    "revision": "af985e8d034123f14696aa116027760d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-eo.js",
    "revision": "e1f5d8ed4599ca392aeb284fe637df33"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-es.js",
    "revision": "d744e1f2ca7874155d7d5130c285cda1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-et.js",
    "revision": "1a7c15ddc89179a0e309d9e7d2b97ad4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-eu.js",
    "revision": "24751dd4dcabb58b82ee0817fea84fd3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-fa.js",
    "revision": "9687cad817acecd88a808d7ef8c58fcf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-fi.js",
    "revision": "f435818611baafdd00cac4f264e29eae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-fo.js",
    "revision": "85444da9fc4c900eba95f8ff4704688f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-fr-CA.js",
    "revision": "da166bae7a0b6dfd7d9e2f6bab4576dc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-fr-CH.js",
    "revision": "8b170b46edcc43d05082cc464244020f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-fr.js",
    "revision": "792d81b0e28e033f86f11a5602a450cc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-gl.js",
    "revision": "0f4dee4528f5f8fb8eb20a14496b7e37"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-he.js",
    "revision": "b2ad344bf1df226aa1a760f1d3653da7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-hi.js",
    "revision": "1e2602a3c232f31242c47a9cadccf9dd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-hr.js",
    "revision": "7582ea79c7fd35b2b7758ff103b11b4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-hu.js",
    "revision": "dee235f99823541ec88be57dec431230"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-hy.js",
    "revision": "2f3828a4c02a475b1b8966609721b9c3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-id.js",
    "revision": "fb0ad98a3ad212b1986fcac5015b0435"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-is.js",
    "revision": "447892a5c1601bb524d7e2cf5ff6cb33"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-it.js",
    "revision": "7e651d93d0219066bf596faa06db4a81"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ja.js",
    "revision": "bf1cf98e79f2d6792c7c7a193b4c7497"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ka.js",
    "revision": "fd0b08bdc63b1d969fa2df907083062a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-kk.js",
    "revision": "57a792b4c55dc23b2095cc190180c440"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-km.js",
    "revision": "f5c6ed9f64ff97adfd29cb149176021f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ko.js",
    "revision": "5fb849693b65beed7146624ba498b517"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ky.js",
    "revision": "a5db310345d66c395b592fd2f6136bf0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-lb.js",
    "revision": "642aa75625a4ab2c324fb5df74063509"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-lt.js",
    "revision": "162b7b6e9e935c89b62260f13bb98429"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-lv.js",
    "revision": "37874227817498b9976e5c66e4da0eb9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-mk.js",
    "revision": "cdfdd4b3a2e181c9ed297fa55c739d5e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ml.js",
    "revision": "17fe3b0548bf5a2c9f4e0b081efaeb04"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ms.js",
    "revision": "51efc50e21ae012a17f4f3cd0f2ac93d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-nb.js",
    "revision": "693af0abc258aaf903c4d4b23a882676"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-nl-BE.js",
    "revision": "60b63d90f6eb6ea3334ec75d6a0831ec"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-nl.js",
    "revision": "8c765466b1bb2709f8c9db056029ec89"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-nn.js",
    "revision": "690553270244b0de96ade29a9e04b02a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-no.js",
    "revision": "5f531f078d367d5f10c287479533b0c8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-pl.js",
    "revision": "2d7dd09c586d4275b402d627778123ca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-pt-BR.js",
    "revision": "2d3c1dc7191cf5081b4f982c8cf78c98"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-pt.js",
    "revision": "860cea01ca64bbc3c7978d127e99b758"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-rm.js",
    "revision": "0601228208954434efea2ccf265f5b94"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ro.js",
    "revision": "3e888ad522a6581f99b47ad987292c20"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ru.js",
    "revision": "813acc83f4f77a0d874426207da0208a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-sk.js",
    "revision": "377b3c5fa2285a8fa665206957c95ceb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-sl.js",
    "revision": "7b87e98ac2241fffb8f3e5bb6415ec07"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-sq.js",
    "revision": "47ea965b616f6afeab8d860d75787847"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-sr-SR.js",
    "revision": "3d23308dfb3943acdf90bdd46b25f9e2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-sr.js",
    "revision": "7083f39fcb737210e0a13c6196f3feb4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-sv.js",
    "revision": "88fbc9581e8abeac0fe083d572428c45"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-ta.js",
    "revision": "da7607dd5df15b0bcd4da344c33447a3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-th.js",
    "revision": "0f1be4ae65e24fc7d6a37dce828a9cee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-tj.js",
    "revision": "f868a410d5438feee15a20e24e4caf5b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-tr.js",
    "revision": "6d11aae285bdd88294e66353feb284da"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-uk.js",
    "revision": "e0b56bc48d64fa8ffef2b8c39f1db725"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-vi.js",
    "revision": "7d54cb0edfbc31232d4ac12f94cec562"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-zh-CN.js",
    "revision": "46cc885a69ff490c660e99173dc05ea3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-zh-HK.js",
    "revision": "ab64f179cc7f62ba45d7708e1dee8cae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/i18n/jquery.ui.datepicker-zh-TW.js",
    "revision": "411a70a31fe6420be6e5990ea5122e18"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/isotope.pkgd.min.js",
    "revision": "993af08be0b86ea8d282f6300236c611"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jqm-datebox.lang.utf8.min.js",
    "revision": "eb617e41fd0b74f937b875db0a9a1c93"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery-2.0.2.min.js",
    "revision": "15d1937f3ea4497313e5255517a99b4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery-ui-1.10.3.custom.min.js",
    "revision": "1953b49b3c059c27c4e12417327a5a59"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.fileupload.js",
    "revision": "e7efee9e288db58ae9fcf835cc5a0a2e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.knob.js",
    "revision": "d6b56c60188969f6465564224d279910"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile-1.4.5.css",
    "revision": "e68b5ba5011a20f19c2cf0910bb092fb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile-1.4.5.js",
    "revision": "a73d36219d6c3e89f51ad30fca3bdef0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.css",
    "revision": "b835b04bbff5a8020c31ce21714e389b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.js",
    "revision": "86cbe4dd3c0b109b0865d1a1cedce819"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.external-png-1.4.5.css",
    "revision": "8bf5f941414d62fa5d2b2753742dfb25"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.external-png-1.4.5.min.css",
    "revision": "0d6a0a1de599d6ae30eaa18451353542"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.icons-1.4.5.css",
    "revision": "e87694fe02dc7396117076d9327e0c08"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.icons-1.4.5.min.css",
    "revision": "1299bcc0c86b9c76f6c8730d3ea5a8ae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.inline-png-1.4.5.css",
    "revision": "31eb5c37f495222883ebce0cce353245"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.inline-png-1.4.5.min.css",
    "revision": "c2f5a6dcedd9b3f5f2460c7a3a1e7b2a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.inline-svg-1.4.5.css",
    "revision": "3e29d99cf3f262a3a5129b87f0369486"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.inline-svg-1.4.5.min.css",
    "revision": "28485b7d340311c98c8f68f95eb9ec73"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.structure-1.4.5.css",
    "revision": "a886dbca5cbb30e11a69bc634e9f809e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.structure-1.4.5.min.css",
    "revision": "1544ca9f803edff31be0577b9f985853"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.theme-1.4.5.css",
    "revision": "aeddf44fdbe6765c1feec9186159b05f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/jquery.mobile.theme-1.4.5.min.css",
    "revision": "4af700266946fede1858cd8cc6c87850"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile.splitview.css",
    "revision": "5f70aeb99a20be66d18708c7e43290d1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile.splitview.js",
    "revision": "f5fd13e975ed9b5bd496aba32a022ccd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.notify.min.js",
    "revision": "eb79ebea6322b95f5bab19facbbd1f28"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.qtip.min.js",
    "revision": "a271e7f137052c98f51d37ba3d4c52ee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.snippet.min.js",
    "revision": "7610663420f48f3fa1ed721286a4e68b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.ui.touch-punch.min.js",
    "revision": "fd14b3accf30769e15f5f499cebc710b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/json2.js",
    "revision": "95def87b93d11289cd2eee1cc3ca7948"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jstorage.min.js",
    "revision": "0541a99b03ee94c76058b1cd6c513dd6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jtsage-datebox.min.js",
    "revision": "effa583a9cd586b12d9c45a4fc25024b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/locationpicker.jquery.js",
    "revision": "ba65582b0c8b7ef65ac192b52eb9d645"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/marked.min.js",
    "revision": "42562d36ff3a795250386d52d40e33e1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/moment.min.js",
    "revision": "cf6d65fe3e48cb35829102f380404e20"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/my.js",
    "revision": "dc33c5b33811513819aa577adcb36bb2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/packery-mode.pkgd.min.js",
    "revision": "2cd76b73c15766f31204345463de91c9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/raphael-min.js",
    "revision": "dd9d2aee0360d5c4a2fb4e8675eb3707"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/stackframe.min.js",
    "revision": "33e4a6e8bd7ba80811a1f23c21aa373b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/de.json",
    "revision": "f1a8d5b79732d4de33e25701d16cb79b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/de.lingo.json",
    "revision": "82999c6df0484bdad6c1d58c3ae7dc52"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/de.programs.json",
    "revision": "8188d9bea72d899039117a2fa3cf2ff6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/en.json",
    "revision": "8e00d336ab54c2a82b374aa0358cecd5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/en.lingo.json",
    "revision": "eef54d1c7ce38c6812ea95e194e2484a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/en.programs.json",
    "revision": "0c15988948842ed1e7b9d1f69d902a7b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/es.json",
    "revision": "1c602345591059647949c18e297c4420"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/es.lingo.json",
    "revision": "f200b98dbe6ed17b4385010fb0aeebe6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/es.programs.json",
    "revision": "9449834b80e671256f8c38a053ed2a51"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/fr.json",
    "revision": "578ea2115a7756630db195a04a0f3ed9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/fr.lingo.json",
    "revision": "85cc6dded2ab2be199aa13ad4a05c581"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/fr.programs.json",
    "revision": "0aee48445b5589455cf026b607fe16d4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/it.json",
    "revision": "d5dbf740c898c13baedbef1dfa675ca6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/it.lingo.json",
    "revision": "200dc71ceec659b49b5dd8432c398cc1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/it.programs.json",
    "revision": "8d7f5e6a06cd4f2073d403e79e902d70"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/nl.json",
    "revision": "ebd893309e0e502f6f4531ab28ddb2c2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/nl.lingo.json",
    "revision": "c05766eb6d2a9f2f4ad58dd871daf237"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/pl.lingo.json",
    "revision": "f0ab1246c4369e046013d92764a961b1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/ru.json",
    "revision": "45c0966d445087d4c8630c5590053c71"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/ru.lingo.json",
    "revision": "24351c73b38c1df5950b5a75ea8fef46"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/ru.programs.json",
    "revision": "d0bcc614a4382a59d52db5ade0bac210"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/sv.json",
    "revision": "ef83d83971be50ede205bafd9eea9e31"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/sv.lingo.json",
    "revision": "50048e2a8f01a633a34ef20f30798326"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/locales/sv.programs.json",
    "revision": "dd6b95f24695ae22075c5df9b83c29fa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/analyze/_statistics.js",
    "revision": "ed283f23587df23ea4db0d5e6678ccf8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/analyze/main.html",
    "revision": "3d85e954a150c8a1c3e001af005494b5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/apps/netplay/_slideshow.js",
    "revision": "a76e3bca4fbe34d3dbc2a130c5e3f17f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/apps/netplay/slideshow.html",
    "revision": "110a74cdaba4da7a8dbd471e4e90cc8b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/groups/_groupmodules.js",
    "revision": "bf65c9e18112c6ae510f1f3df3e175e1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/groups/_groupslist.js",
    "revision": "4961451af708bc430aa2a96dc38839cd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/groups/listgroups.html",
    "revision": "61823179bb78b2328073070c2313e4c6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/groups/listmodules.html",
    "revision": "847759b474b2c285ab31a17cf60a2ba3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/interfaces/_systemsettings.js",
    "revision": "2e92aa0c77932fc9b9ccd86215b1365a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/interfaces/configlet/upnp.html",
    "revision": "d2ec0dc9bfb03fb7b9fe74ffa6045474"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/interfaces/configlet/x10.html",
    "revision": "17b06da09d8ac8bbb86bffb47b957c26"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/interfaces/configlet/zwave.html",
    "revision": "d631b5f25dbfa5da7080001ce54edd13"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/interfaces/main.html",
    "revision": "5a19b256726b4f196f2c48dbc01ef28f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/maintenance/_maintenance.js",
    "revision": "871bd249d99be6e86b748b5486961010"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/maintenance/main.html",
    "revision": "261c224c116df18d727a7911df67ff4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/programengine/_groupslist.js",
    "revision": "45b850581cf1f8a49b03c68c53a34bf7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/programengine/_programedit.js",
    "revision": "d353cbf7ab59c94fe6148f70efd4957e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/programengine/_programslist.js",
    "revision": "7922e519b369c56001c1c574e5ee5b19"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/programengine/commandwizard.html",
    "revision": "76dfcf296068b0f268a361e2bba92e0b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/programengine/conditionwizard.html",
    "revision": "f6c6f412640741c1ff3581e2140614a4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/programengine/editprogram.html",
    "revision": "93c19a2f24ad1877d6e01376bc3a2aa9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/programengine/listgroups.html",
    "revision": "2fa1d5f194a336f75e37f3b6442c839b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/programengine/listprograms.html",
    "revision": "d0a6a4cd4b6fe76bd022dfb1163a1001"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/scheduler/_scheduler.js",
    "revision": "0a877acc8288bc0e0db55c90f420da87"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/scheduler/main.html",
    "revision": "6497c251c6d15cda1adcb7314c6e5d02"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/scheduler/templates/command.set-level.js",
    "revision": "bf2be09ef2a9b6570c4eeac404c84b64"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/scheduler/templates/command.therm-heat.js",
    "revision": "07891b0566aa2c4700ed8d1acee8e266"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/scheduler/templates/command.therm-off.js",
    "revision": "42add6207e818f43cfa46bffaf96e9b4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/scheduler/templates/command.turn-off.js",
    "revision": "f4154cf95e4e297e370ed968ecaef620"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/scheduler/templates/command.turn-on-off.range.js",
    "revision": "542a0d1caf7e40ceac4b04d873d30788"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/scheduler/templates/command.turn-on.js",
    "revision": "a04698a3ca6f1edbb65a4dc7d0b597ca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/scheduler/templates/index.json",
    "revision": "4e2f999b91c63abe26f6402aa4dadc93"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/scheduler/templates/program.say.js",
    "revision": "2687d9c3bf7000687b26da28c1bd127a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/widgeteditor/_widgetedit.js",
    "revision": "1fb112f277e81fd686bdf1b4b2f5e5ce"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/widgeteditor/_widgetslist.js",
    "revision": "9e7fec61824d0c27c1b08abca4397d65"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/widgeteditor/editwidget.html",
    "revision": "fec4cdb13d3750882aba1bad13307d18"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/configure/widgeteditor/listwidgets.html",
    "revision": "a887fa79784e6721029b8158b4a92c4a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/_control.js",
    "revision": "ff6b7ea1263ee9c68f8be442995e9319"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/main.html",
    "revision": "d4c7cc29fa30f42bd41345c39aa7ed28"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/configuration.json",
    "revision": "629f440a5278efc8007d8eb34443ac93"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather.html",
    "revision": "8f8d746c0dd592a0ed0b5dcc6109ab8c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather.js",
    "revision": "75207b4c099a509375eacd71377de6f0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/camerainput.html",
    "revision": "b30e99dcaf715a4fadda629c5c42dc4a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/camerainput.js",
    "revision": "bdccd6e9e7a3da0819011e6f5f4841ee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/colorlight.html",
    "revision": "8dcbe2e515bd40b007bfdec053356efc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/colorlight.js",
    "revision": "478e0a9c0237d8fabb7c382b28657ecf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/dimmer.html",
    "revision": "fabb5bb208e6f1527d45b6e73783645d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/dimmer.js",
    "revision": "da90223bf156bc6b93da8f43c1078f0f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/doorlock.html",
    "revision": "8ad63666fd7e1b30940c0606312971c6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/doorlock.js",
    "revision": "bac553cdffda0607623ca5b553e7e0e5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/doorwindow.html",
    "revision": "fb90e857ff4d30f17b9f0701cfb413ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/doorwindow.js",
    "revision": "ca26442d9e4ad51fb01215af105fdb99"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/energymonitor.html",
    "revision": "1587170c4f7b05f534c8aa826d432670"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/energymonitor.js",
    "revision": "5b0cfe480d4bdf0a98bdfdecc83dbbc5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/generic.html",
    "revision": "81acc96a8beaa745230135f2207d2009"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/generic.js",
    "revision": "c76d9553cc12f08dc5848d9e9c2789df"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/grouplabel.html",
    "revision": "c63fa5ec40f6c244344127b039dea8ac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/grouplabel.js",
    "revision": "91214805e9bc018067a6fc9ca43ef297"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/light.html",
    "revision": "57aa59c98ffe503f31a986907fe52dc9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/light.js",
    "revision": "15bfa35fe64e5d9e6240ec471e8d6bb6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/link.html",
    "revision": "a7a16ee59bbbf0136a9d31aa2bc17eea"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/link.js",
    "revision": "a6722a99e5cd17437a7c180117c5c276"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/locales/en.json",
    "revision": "ab07ee657261ca4353a1a0a352bf4390"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/locales/fr.json",
    "revision": "ece00aa8ace48cfc55fa84617f5b8a24"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/locales/it.json",
    "revision": "647dc81f1c4dce90b21d876fe871a2d0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/locales/ru.json",
    "revision": "b8a592480c7dec897069c785bed72d11"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/mediareceiver.html",
    "revision": "307d665b1fc01eacaf2cd7b7557847bf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/mediareceiver.js",
    "revision": "1508cd82ecf907dc249fceff6d29ddbb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/mediaserver.html",
    "revision": "04f54686aaaae24820b4e70551ef9614"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/mediaserver.js",
    "revision": "3a462b0957527ebdf02bcb27ffe42f6c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/mediatransmitter.html",
    "revision": "568e4c69acb9b3936d95a8c2c5ba0797"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/mediatransmitter.js",
    "revision": "5cc8f44697da1a505b9bd9ead977fd78"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/program.html",
    "revision": "6a5d1a7601172d178d3c88b6d3d6b5b3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/program.js",
    "revision": "84c6aba927ad341061091d9124f25858"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/securitysystem.html",
    "revision": "80662876c759bad581211b9c55ef3bbb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/securitysystem.js",
    "revision": "78f6c7c282d39cfb86cc9c45c4a136b1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/sensor.html",
    "revision": "59f75acbb83f9247849ebbb47eb6596a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/sensor.js",
    "revision": "07bd3b996bad0096e9d87843b1094f9e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/shutter.html",
    "revision": "6cf0b886b47ef59a3ebc158bb549d00e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/shutter.js",
    "revision": "b01d2a2c703aeb1f307bfee989380373"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/siren.html",
    "revision": "57aa59c98ffe503f31a986907fe52dc9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/siren.js",
    "revision": "15bfa35fe64e5d9e6240ec471e8d6bb6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/status.html",
    "revision": "a5e51ab675defdb4444683ab64714d63"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/status.js",
    "revision": "c24c36e9426733fa6d66a8fe467bb919"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/switch.html",
    "revision": "57aa59c98ffe503f31a986907fe52dc9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/switch.js",
    "revision": "d9eb1d3e918325eb6fae42db3438829d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/thermostat.html",
    "revision": "92e22833690f35fe520cbfd204140fd3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/thermostat.js",
    "revision": "948b17217b0f4c5408e66647752ef7e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/unknown.html",
    "revision": "6ddcf90cc8c332da1113a1116fd111e7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/unknown.js",
    "revision": "a7b66f6c274401de96a368d888ea9596"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/hyperiot/gateway/config.html",
    "revision": "bd5f1e8991a5d7bd160c6eaffece0fef"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/hyperiot/gateway/config.js",
    "revision": "9979363ea5339ef3590a70d53fd933a2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/template.html",
    "revision": "d8deef2a09c2b0976c10e56a645904ae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/template.js",
    "revision": "9e8663591cf126971ecf45b0151c2b17"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/events/_events.js",
    "revision": "9599388ec459024d2535dcdd33cf6b2f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/events/main.html",
    "revision": "d427dfc02f1f6277e41bd22f0462b618"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/header.html",
    "revision": "903c2a2200ede9a50aa27b338c6f628b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/core/popup.cronwizard.html",
    "revision": "0293430e72d06ddd5a45b3099d14d1ea"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/core/popup.cronwizard.js",
    "revision": "391463aa02254bb2d05dccc36f9b6423"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/capture.html",
    "revision": "ce07e14186da81596585fb8970aa7d80"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/capture.js",
    "revision": "80a5664bdf9f8a7b2f42c1412bf157f4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/checkbox.html",
    "revision": "b3b7c42b194c185987a8a510548e130a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/checkbox.js",
    "revision": "67a72f6e87ca2d4067f148a7e4447f4e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/cron.text.html",
    "revision": "de5530e57da2aca0809dcd66e4321fc0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/cron.text.js",
    "revision": "9bba6f8aec51fec302fa23960f8a4bbc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/module.text.html",
    "revision": "fae388069ed7e156c7a7ac1667c4923d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/module.text.js",
    "revision": "0a24bb56afebecb0d6a34caae4416ade"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/password.html",
    "revision": "d55de8eaed546996f4dcc89aa2a7e6f7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/password.js",
    "revision": "996d8cff6c4716156de2f3addf943972"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/program.text.html",
    "revision": "fae388069ed7e156c7a7ac1667c4923d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/program.text.js",
    "revision": "c50a7c0cc3f50d05c8c6e80e82d8f11e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/slider.html",
    "revision": "05274e9a3231b4a7f81c4e58c7b73dff"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/slider.js",
    "revision": "dc6bb3aad5fd4cb6d15afbee075f05b7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/store.script.html",
    "revision": "5da541e66924a7120ae68c524830f2dd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/store.script.js",
    "revision": "01fac713fdb1103dc6f0f4624573df7e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/store.script.list.html",
    "revision": "56cdda468867d38224da2c61f01b5152"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/store.script.list.js",
    "revision": "1fe774c6c4e793b6ed5d3fdbf81c6348"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/text.html",
    "revision": "fae388069ed7e156c7a7ac1667c4923d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/text.js",
    "revision": "996d8cff6c4716156de2f3addf943972"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/timetable.html",
    "revision": "97ea42f946ccb368dac2a7d5559fa0c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/timetable.js",
    "revision": "58a85b81f4bd82bc87fb8ebb22f9ceb1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/wunderground.city.html",
    "revision": "93d0e5fa96d2a9e5d2eb7522955e7d1f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/ui/widgets/wunderground.city.js",
    "revision": "c5def720b6f2f046f1f9b57970a233eb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/installed_packages.json",
    "revision": "629f440a5278efc8007d8eb34443ac93"
  },
  {
    "url": "src/HomeGenie/obj/HomeGenie.csproj.nuget.dgspec.json",
    "revision": "e4455f18bd6dbf38a8e91b70738d3548"
  },
  {
    "url": "src/HomeGenie/obj/project.assets.json",
    "revision": "5ba0eb266450e6f07bf57c42cbb5edc0"
  },
  {
    "url": "src/HomeGenie/obj/project.packagespec.json",
    "revision": "abee15160ac3334eee11c50ea8360935"
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
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
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
    "revision": "2c5628c71c2980eec5df16cfb72aa21f"
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
    "url": "packages/Angle.3.0.4/Angle.png",
    "revision": "100c7ccf4fe7fab99819dcd5b7339c8d"
  },
  {
    "url": "packages/LiteDB.5.0.0-rc/icon_64x64.png",
    "revision": "fe9a508d955db377359157e216e0765c"
  },
  {
    "url": "packages/MQTTnet.3.0.11/images/Logo_128x128.png",
    "revision": "9d36415d03135d7eef9fccbd0e912438"
  },
  {
    "url": "packages/SolarCalculator.3.0.5/Solar-Calculator.png",
    "revision": "2e9a65d7e4c4c16e55ea77f1a0e45446"
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
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/images/homegenie.png",
    "revision": "0bcfd9535526c417016d87195df9671f"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/images/homegenie.svg",
    "revision": "407c7dde5f658ba45473731698e12a8d"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/images/indicators/humidity.svg",
    "revision": "50fcfb610df54a6b999cce672463e850"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/images/indicators/lightbulb.svg",
    "revision": "50e6d7861c303aca5d317cc8ccf3e51e"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/images/indicators/luminance.svg",
    "revision": "2e0bace8fd12d97194b2a211df837c7e"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/images/indicators/plug.svg",
    "revision": "b19adfd06eede93dfaba320d4ca08576"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/images/indicators/power.svg",
    "revision": "e81295989062ad99d2bc393292a8da62"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/images/indicators/socket.svg",
    "revision": "8357c4c44222aa2a27506a7b4c2f4bb5"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/images/indicators/temperature.svg",
    "revision": "d06a58ebd17026268267c4d042597fe1"
  },
  {
    "url": "src/homegenie-ui-app/dist/homegenie-ui-app/assets/images/zwave/zwave-logo.png",
    "revision": "3e43b838dd6ff651c014813d019133cb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/images/homegenie.png",
    "revision": "0bcfd9535526c417016d87195df9671f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/images/homegenie.svg",
    "revision": "407c7dde5f658ba45473731698e12a8d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/images/indicators/humidity.svg",
    "revision": "50fcfb610df54a6b999cce672463e850"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/images/indicators/lightbulb.svg",
    "revision": "50e6d7861c303aca5d317cc8ccf3e51e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/images/indicators/luminance.svg",
    "revision": "2e0bace8fd12d97194b2a211df837c7e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/images/indicators/plug.svg",
    "revision": "b19adfd06eede93dfaba320d4ca08576"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/images/indicators/power.svg",
    "revision": "e81295989062ad99d2bc393292a8da62"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/images/indicators/socket.svg",
    "revision": "8357c4c44222aa2a27506a7b4c2f4bb5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/images/indicators/temperature.svg",
    "revision": "d06a58ebd17026268267c4d042597fe1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/app/assets/images/zwave/zwave-logo.png",
    "revision": "3e43b838dd6ff651c014813d019133cb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/font-awesome/fonts/fontawesome-webfont.svg",
    "revision": "f775f9cca88e21d45bebe185b27c0e5b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ajax-loader.gif",
    "revision": "8fd7e719b06cd3f701c791adb62bd7a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/animated-overlay.gif",
    "revision": "2b912f7c0653008ca28ebacda49025e7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/action-black.png",
    "revision": "9a19edc87343cefa0ea5fbfc38c45b92"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/action-white.png",
    "revision": "13d2742979c0abdff486ffc0c2765efb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/alert-black.png",
    "revision": "09364128a6be0cc59f1fc6e9fade366f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/alert-white.png",
    "revision": "86373cf5fcb815be2adc0c06a87eb6f1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-d-black.png",
    "revision": "f85e79a0dcf3d65491e6bb99b40c0fda"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-d-l-black.png",
    "revision": "27790e799f740daee527b1ca3c9971f9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-d-l-white.png",
    "revision": "14b3bcde3ed10d0be18d5fcc90fe8ce0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-d-r-black.png",
    "revision": "5bad1e7e859eb120f4d136af29084460"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-d-r-white.png",
    "revision": "fec8ef05dd2b57134a284515eb5ecabf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-d-white.png",
    "revision": "a7ed65414584a456e4608c2bc3d85065"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-l-black.png",
    "revision": "ee7f9b8e2abb96a61fe8d4cf11ca7697"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-l-white.png",
    "revision": "434675e67d80715862db88c75a7df577"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-r-black.png",
    "revision": "d96c7bba4b98ec14e62790584b139a61"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-r-white.png",
    "revision": "34350abeb7bd36e979c0aa4d6e038d2d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-u-black.png",
    "revision": "5e086bd389bca6a7793a8741a6c6fad3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-u-l-black.png",
    "revision": "9891529976aef3fa1c23308dbbbe0485"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-u-l-white.png",
    "revision": "eb17742486f621a31bfb1aaabdc30d5c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-u-r-black.png",
    "revision": "25267137bba768f6f2b595398c6a2b92"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-u-r-white.png",
    "revision": "ce2d1de04f61355443949d6061f4ea37"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/arrow-u-white.png",
    "revision": "9f6cd65e48648b4823e236b0da1e54b0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/audio-black.png",
    "revision": "d3cfac47faf40513c646c1f16b087e88"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/audio-white.png",
    "revision": "7c90c384a65cbfef572bbdd02b9d8edb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/back-black.png",
    "revision": "0759505d2298fdee60b52b5126dfcfc6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/back-white.png",
    "revision": "e78ad3c61a492b120a7ba0a789d4b2e0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/bars-black.png",
    "revision": "d638db196907b36c3e0bfefb8a698cc8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/bars-white.png",
    "revision": "f4d15b9a0fdcf961fe8d749703b20f20"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/bullets-black.png",
    "revision": "63e8e96e2deb4d60b69a68d6d9765df8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/bullets-white.png",
    "revision": "b74986306e8ee76bd1f2a4293d56c3c4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/calendar-black.png",
    "revision": "9116cef9549b26ddc4d9e96bec5dfd41"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/calendar-white.png",
    "revision": "215a42df136361f8b54b056a0ca6ae15"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/camera-black.png",
    "revision": "434dcb1c736b2da8247a1e59372bc64b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/camera-white.png",
    "revision": "054a64f6a2886570ed734a26a804a66a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/carat-d-black.png",
    "revision": "9708c21592cabb6f7fe4272e6daa7853"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/carat-d-white.png",
    "revision": "52f8e9ceafe00b0360bce803f5236a0c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/carat-l-black.png",
    "revision": "01df9e30c853da8996684cd08c3a7917"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/carat-l-white.png",
    "revision": "32a1036e056d5a5831f6e8d40d4d1faf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/carat-r-black.png",
    "revision": "01945aeb9182966e0e02cd0cd2f74abd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/carat-r-white.png",
    "revision": "41c4ab4735f66dd007c2689a87695863"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/carat-u-black.png",
    "revision": "76904bfc235fd12caacfc2858f8e1eef"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/carat-u-white.png",
    "revision": "3bde6d2e6ab2936a25b69767de4ac7c3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/check-black.png",
    "revision": "358363d39df6c2d2e0afbad366b14231"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/check-white.png",
    "revision": "0bc57ed512131d2e4b507055552f7277"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/clock-black.png",
    "revision": "c92ab62b3c0ca2ca1ae11bcc940c20a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/clock-white.png",
    "revision": "44cffb967f09ddf5fb8d13380745f273"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/cloud-black.png",
    "revision": "c0c7bf5a98f76f252d14f1af232a0ee1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/cloud-white.png",
    "revision": "c71b429d726c0b8c94fc6dd33f885574"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/comment-black.png",
    "revision": "81a45d4b2b64e4321667542b75eb6754"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/comment-white.png",
    "revision": "0917e96ac998c0d191d7b81d880927a9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/delete-black.png",
    "revision": "fb456b3f7f0b805ac7be21d97b443f9a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/delete-white.png",
    "revision": "478fa064c1e2234032e7a3de1884f4ed"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/edit-black.png",
    "revision": "3bed8f0eeea77c23adcce4870c391286"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/edit-white.png",
    "revision": "a41a9a4e6b71ae9829dd8fa24e695be9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/eye-black.png",
    "revision": "03ce5e4016e1f8ab8d7b02a72d45e600"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/eye-white.png",
    "revision": "0bf7b7e9cb0aee2da885a86629744cf2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/forbidden-black.png",
    "revision": "fcf54d3cda520f292d34592d4ae6d9ae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/forbidden-white.png",
    "revision": "d124846cb27f0a6e07764e114895e335"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/forward-black.png",
    "revision": "54bf8c0856e1a1b2b18fbf8161d8dadf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/forward-white.png",
    "revision": "486c47d6f12f7872c04a16a28f7ae6c3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/gear-black.png",
    "revision": "957fed4d5d46498e93cb74af8384f4b2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/gear-white.png",
    "revision": "592af245bec551ffa61392b9e363c8ee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/grid-black.png",
    "revision": "536fe23332253922017d3145f06258a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/grid-white.png",
    "revision": "ab90c7666595f04b9374518ece4fd0e2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/heart-black.png",
    "revision": "7e2aaea1b42b5d462a7d098d5814433a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/heart-white.png",
    "revision": "86b007f62248a968255c50b3d5c0e696"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/home-black.png",
    "revision": "3ef58401159dce7cdb4ca66bd1e1c475"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/home-white.png",
    "revision": "1c80eb5b00855d8494116db68af3242c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/info-black.png",
    "revision": "ecc9460bc8b0a3de72a6638c8fc39d36"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/info-white.png",
    "revision": "a776b029342f4ef75889d2b9853a0e59"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/location-black.png",
    "revision": "173cf9e0989ea6f0bb6254a1fc0334ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/location-white.png",
    "revision": "359f3b2435bb7ea11c9b62f46d712b2f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/lock-black.png",
    "revision": "28a57a211fa4c6a69055a91cd3e2b688"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/lock-white.png",
    "revision": "827adbd30b32a8089a39bd5a40d956ca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/mail-black.png",
    "revision": "13106c83b8c7a9e78e5d0fbcf275f027"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/mail-white.png",
    "revision": "006089860dcf971fe6f65ec3ad289e3a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/minus-black.png",
    "revision": "92cc19063926bda68541c1c6213e0637"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/minus-white.png",
    "revision": "9e2ff829356531c31e954eb48d69b1c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/navigation-black.png",
    "revision": "f36cc2c09123d935278e9fdbe1722769"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/navigation-white.png",
    "revision": "59bdad3cbad70b98a5580f59f4b0f89d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/phone-black.png",
    "revision": "c78bd6ae6d2074f201518d5e504120d9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/phone-white.png",
    "revision": "3f351a2cf1b17acf767294695eb9a825"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/plus-black.png",
    "revision": "96410e386e61459b3bf045ae72449b72"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/plus-white.png",
    "revision": "d8256afa69d9ed42bdbeb1232acddc0e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/power-black.png",
    "revision": "d9a9cd79c18b61953483b15e78b7b6b6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/power-white.png",
    "revision": "4e785618f27780944e6d8a13fee251b0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/recycle-black.png",
    "revision": "04ae75ab4410ec64093da3b298fef31e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/recycle-white.png",
    "revision": "8a46b6ed030cee2db774928b81d1e6e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/refresh-black.png",
    "revision": "1da2deb97177b5676c80be327ddc82e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/refresh-white.png",
    "revision": "705e7dd6e46b24381e9d123be4721787"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/search-black.png",
    "revision": "8fdc32864a50e0359972f7caaa6a4fac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/search-white.png",
    "revision": "615d54abf8ffe2159c6418996e73b86f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/shop-black.png",
    "revision": "34776eb5710390641a48b2ef933b42d8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/shop-white.png",
    "revision": "bed77b8b0aa66b98bb2c53d5ace2d736"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/star-black.png",
    "revision": "741986dbcdfb3f8e4b86a58a5de62b4e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/star-white.png",
    "revision": "f62c7807aed9d236a22b8672290f845d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/tag-black.png",
    "revision": "d5fc58dc0ecabd4e37cb41e2a8c6f871"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/tag-white.png",
    "revision": "63d500360386f0352234ea160a235650"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/user-black.png",
    "revision": "72109232660715674c269a748b6d3b94"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/user-white.png",
    "revision": "291b0ebdb48850f539026ccd24ade8ff"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/video-black.png",
    "revision": "3e9650ab48d52565ff42b9f67e1ea617"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/icons-png/video-white.png",
    "revision": "d180c9f44b809cd008ea4c32a4450bd2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-bg_flat_30_cccccc_40x100.png",
    "revision": "71e77e96f379fabb663510dda8cc9e7b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-bg_flat_50_5c5c5c_40x100.png",
    "revision": "4e196d96c10faa36eb9bb82fc6916713"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-bg_glass_20_555555_1x400.png",
    "revision": "36b431eacc186d62fb994f5b352cfa85"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-bg_glass_40_0078a3_1x400.png",
    "revision": "351168e22bd921cbfbcfcde4d3f9a6b0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-bg_glass_40_ffc73d_1x400.png",
    "revision": "db4045e2f2ffb72f3b186d69cb101ee5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-bg_gloss-wave_25_333333_500x100.png",
    "revision": "142b8b156da17f0f5bf35f45a84c2fca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-bg_highlight-soft_80_eeeeee_1x100.png",
    "revision": "3fcc6d99497722bab7373f0c10b56613"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-bg_inset-soft_25_000000_1x100.png",
    "revision": "8a8e2a3d4380ad5bc021828445229eed"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-bg_inset-soft_30_f58400_1x100.png",
    "revision": "4d01ac7e6dc6fb02f5eef1f994e8efe4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-icons_222222_256x240.png",
    "revision": "aaab8cec5db99e71553f439512bdb1f3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-icons_4b8e0b_256x240.png",
    "revision": "4d37128946471cb6f2eb20398a7a2a0b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-icons_a83300_256x240.png",
    "revision": "59761ae04f7ed95d631b2f7035d1bae0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-icons_cccccc_256x240.png",
    "revision": "b509d115574691a917f9d541ee719dff"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/css/images/ui-icons_ffffff_256x240.png",
    "revision": "21ae0a24bdf6211042f00919fde17af0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/analyze.png",
    "revision": "578ddcfbf993fca7ff2dfb57cd0f5fac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/automation.png",
    "revision": "b4a9361c0b7b5a6bc1216444116396ac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/background.jpg",
    "revision": "ab6c373c96b2186577bc8aa9d2d5dd1e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/common/led_black.png",
    "revision": "15cbd329d8526fcaae9c284eaaf6393c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/common/led_blue.png",
    "revision": "c3f9f877d6be9cbf5b12c2eb248d1e9d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/common/led_brown.png",
    "revision": "fbf7f818f0d1124439f98b6b64ceb15d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/common/led_green.png",
    "revision": "59a5f2fe74b16fc28b56586cb6e7c4e8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/common/led_purple.png",
    "revision": "f396036769ffebeecb0f3ed89918cb7a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/common/led_red.png",
    "revision": "46599130669596652b0e67e091df7b2b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/common/led_yellow.png",
    "revision": "d98db9fe98f78ab938c7e884800fe960"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/configure.png",
    "revision": "11e6aed03a9856f09de50c12d6f5379c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/control.png",
    "revision": "2437d4b7ff8cf362f4a065b405d600ae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/creativecommon.png",
    "revision": "0a27805bbe6b6d67ef37f760dc991917"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/event_off.png",
    "revision": "f5600a261cadea6c00db1673dac3c36b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/event_on.png",
    "revision": "b488b97ca1f19753a9f38d1e0144b115"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/genie.gif",
    "revision": "1a6c2d66ecfb9268afd3364e83746252"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/genie.png",
    "revision": "d311329f6b7f6588be49094a592492c9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/groups.png",
    "revision": "0c2030327f8912e906738373d133d2d3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/halt.png",
    "revision": "50d2d2eb4d8bca9b1fe4aad698474ebf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/icons/micro-black.png",
    "revision": "ace0708b11f58516cd13bd0a33045712"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/icons/micro-white.png",
    "revision": "7be0e9e015d96a5100d94f0b1a6838c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/alarm-black.png",
    "revision": "39e9414b55a158ef1ad7b3543d0ed301"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/alarm.png",
    "revision": "98c3b623a440f2032e5676a4a9efc0d8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/bulb-black.png",
    "revision": "873019164e1fd500222ecc17aaeccaa3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/bulb.png",
    "revision": "c0a6a240b3bef0474abe460d7105fccb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/distance-black.png",
    "revision": "109863698cc43eebcfa97c79f1f7d3a4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/distance.png",
    "revision": "a5704ffa4b24c2f838cbe1f8a98dda19"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/door-black.png",
    "revision": "77abfb0d79f72cab4dc4d6102820e483"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/door.png",
    "revision": "22a317960ff36cca32bcd535baaa1463"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/energy-black.png",
    "revision": "6bcec8732949e7168fedefc112fa7078"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/energy.png",
    "revision": "4f3530541d61ad18e3640ff449afe979"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/flood-black.png",
    "revision": "b276ca7fdf19502cbc62d7e44c4aa4d3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/flood.png",
    "revision": "176997912821852f9881699267a908bd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/flow-black.png",
    "revision": "3bb61f4aa9ff427874e9077de2cf1d30"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/flow.png",
    "revision": "07208f6b59ebbbe9ad227ac0322c0ae8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/generic-black.png",
    "revision": "8f2057bf2a1ab0ad91f07485ac258d77"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/generic.png",
    "revision": "07daac5317f42a2ff874f43133ce159d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/heat-black.png",
    "revision": "807b0e7ba94d5bf13b2b449cf5f9337f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/heat.png",
    "revision": "4c29529c9834dd215a548eb153b3654b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/humidity-black.png",
    "revision": "a35340ccca07c3d91ff672720b93ce34"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/humidity.png",
    "revision": "3216c2f851ddd482997d6a1b97a6354f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/infrared_black.png",
    "revision": "32e555eb7f701815baf259086b11714f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/infrared.png",
    "revision": "738aa9d16feba874637c2f56f79d91cb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/level-black.png",
    "revision": "cdf64340491f192bb58113821a42fd07"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/level.png",
    "revision": "11ec621ea5b73d22d87e10d31b8d026a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/luminance-black.png",
    "revision": "5c9b991789f8cf004a3b0ebeea4764b4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/luminance.png",
    "revision": "c01d3647ace5d1bf4bc1e0ee492c74d0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/plug-black.png",
    "revision": "f0651f02b33cf8f79adaeba4d1503f04"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/plug.png",
    "revision": "66798252d85b9b120f90f62f0ee82c1c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/smoke-black.png",
    "revision": "50fc7b3c68987c1821f1377757367089"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/smoke.png",
    "revision": "993a2e209d85343a877d955d1c4b511f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/temperature-black.png",
    "revision": "01175a567688b6f2afaf07772e27669a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/temperature.png",
    "revision": "c2db6e6c8358bea3b2342b3c63ed4c00"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/uv-black.png",
    "revision": "9e70f762c81494ec03ee6f82390bf841"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/uv.png",
    "revision": "e9706311e5ed88dc34e5ec8fa69a100c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/volume_black.png",
    "revision": "1371de5646d3f06b0733870d4a6763b9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/volume.png",
    "revision": "94a6778dc3d2253ebfce8168b98c67ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/window-black.png",
    "revision": "ff826c2465913e4c647f81597c6e9035"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/indicators/window.png",
    "revision": "36ebf63a5928945ff7710cbc2d074331"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/interfaces.png",
    "revision": "ce87383fb841b6b9340049a0bea06be4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/interfaces/upnp.png",
    "revision": "d35f79875346a4ba01dcbcd0dbbcd4b7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/interfaces/x10.png",
    "revision": "8fad32e6bba9a8aad97821e3f97bcd36"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/interfaces/zwave.png",
    "revision": "ca7d3779ab6384914aea2fde151f09f6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/led-green-off.png",
    "revision": "9f78a473445c4a4f49ed14b0dda356d4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/led-green-on.png",
    "revision": "07029737cca0b5bf63a5252c011f7f40"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/maintenance.png",
    "revision": "6b0fb2796d5f22cbb5ce1aea9a1de5ea"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/play-icon.png",
    "revision": "60625049681f8beedeaa6a28c93fccaf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/playcontrol.png",
    "revision": "c163963793f5e679dffbf1b524d36c14"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/program.png",
    "revision": "71a32a1b7fa59b2e844595a16e2c6588"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/protection-off.png",
    "revision": "88dd0094262ef3e3241d8608b547249a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/protection-on.png",
    "revision": "cb46f4b49cf13afbda74f67a5e0c26bb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/remote.png",
    "revision": "6b905586fc8e2c5ccad703c4d3979f08"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/robot.png",
    "revision": "1c5ea7020469afe21a327b0583200671"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/scheduler.png",
    "revision": "082ff69d21ca47dc41babdd4a244bf42"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/update.png",
    "revision": "f80afbce0c6805be3b16d1a7e28c21cf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wallpapers/wallpaper_001.jpg",
    "revision": "e56d5872da1b2b29c9c54fc78adab9a8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wallpapers/wallpaper_002.jpg",
    "revision": "699e3098a7fd94379b936314965d772d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wallpapers/wallpaper_003.jpg",
    "revision": "ef931ee1323542ee5604a9c43803c4e8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wallpapers/wallpaper_004.jpg",
    "revision": "8adcc22f92f1260b24712e7a38e59656"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wallpapers/wallpaper_005.jpg",
    "revision": "114ec2a9a0ac78a5853f70716fc7c88d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wallpapers/wallpaper_006.jpg",
    "revision": "d12dc3406627dc748561e1930704ec3d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wallpapers/wallpaper_007.jpg",
    "revision": "ebbc0d0bda0c5c7393e8e90925ddba2e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wallpapers/wallpaper_008.jpg",
    "revision": "c9ab8455b31e1e4e13b4ae1a1449912c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wallpapers/wallpaper_009.jpg",
    "revision": "8719038b02bd0c71cc1fa86855126344"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wallpapers/wallpaper_010.jpg",
    "revision": "3d0d9374ff3dd3e254c45df5624c990b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wiz-interfaces.png",
    "revision": "18afde315ad639a144e4915499f0e719"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/images/wiz-options.png",
    "revision": "7e44d3e724a37b260c83427bc5d418e9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/ajax-loader.gif",
    "revision": "8fd7e719b06cd3f701c791adb62bd7a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/action-black.png",
    "revision": "9a19edc87343cefa0ea5fbfc38c45b92"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/action-white.png",
    "revision": "13d2742979c0abdff486ffc0c2765efb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/alert-black.png",
    "revision": "09364128a6be0cc59f1fc6e9fade366f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/alert-white.png",
    "revision": "86373cf5fcb815be2adc0c06a87eb6f1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-black.png",
    "revision": "f85e79a0dcf3d65491e6bb99b40c0fda"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-l-black.png",
    "revision": "27790e799f740daee527b1ca3c9971f9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-l-white.png",
    "revision": "14b3bcde3ed10d0be18d5fcc90fe8ce0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-r-black.png",
    "revision": "5bad1e7e859eb120f4d136af29084460"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-r-white.png",
    "revision": "fec8ef05dd2b57134a284515eb5ecabf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-white.png",
    "revision": "a7ed65414584a456e4608c2bc3d85065"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-l-black.png",
    "revision": "ee7f9b8e2abb96a61fe8d4cf11ca7697"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-l-white.png",
    "revision": "434675e67d80715862db88c75a7df577"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-r-black.png",
    "revision": "d96c7bba4b98ec14e62790584b139a61"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-r-white.png",
    "revision": "34350abeb7bd36e979c0aa4d6e038d2d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-black.png",
    "revision": "5e086bd389bca6a7793a8741a6c6fad3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-l-black.png",
    "revision": "9891529976aef3fa1c23308dbbbe0485"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-l-white.png",
    "revision": "eb17742486f621a31bfb1aaabdc30d5c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-r-black.png",
    "revision": "25267137bba768f6f2b595398c6a2b92"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-r-white.png",
    "revision": "ce2d1de04f61355443949d6061f4ea37"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-white.png",
    "revision": "9f6cd65e48648b4823e236b0da1e54b0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/audio-black.png",
    "revision": "d3cfac47faf40513c646c1f16b087e88"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/audio-white.png",
    "revision": "7c90c384a65cbfef572bbdd02b9d8edb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/back-black.png",
    "revision": "0759505d2298fdee60b52b5126dfcfc6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/back-white.png",
    "revision": "e78ad3c61a492b120a7ba0a789d4b2e0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/bars-black.png",
    "revision": "d638db196907b36c3e0bfefb8a698cc8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/bars-white.png",
    "revision": "f4d15b9a0fdcf961fe8d749703b20f20"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/bullets-black.png",
    "revision": "63e8e96e2deb4d60b69a68d6d9765df8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/bullets-white.png",
    "revision": "b74986306e8ee76bd1f2a4293d56c3c4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/calendar-black.png",
    "revision": "9116cef9549b26ddc4d9e96bec5dfd41"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/calendar-white.png",
    "revision": "215a42df136361f8b54b056a0ca6ae15"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/camera-black.png",
    "revision": "434dcb1c736b2da8247a1e59372bc64b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/camera-white.png",
    "revision": "054a64f6a2886570ed734a26a804a66a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/carat-d-black.png",
    "revision": "9708c21592cabb6f7fe4272e6daa7853"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/carat-d-white.png",
    "revision": "52f8e9ceafe00b0360bce803f5236a0c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/carat-l-black.png",
    "revision": "01df9e30c853da8996684cd08c3a7917"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/carat-l-white.png",
    "revision": "32a1036e056d5a5831f6e8d40d4d1faf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/carat-r-black.png",
    "revision": "01945aeb9182966e0e02cd0cd2f74abd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/carat-r-white.png",
    "revision": "41c4ab4735f66dd007c2689a87695863"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/carat-u-black.png",
    "revision": "76904bfc235fd12caacfc2858f8e1eef"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/carat-u-white.png",
    "revision": "3bde6d2e6ab2936a25b69767de4ac7c3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/check-black.png",
    "revision": "358363d39df6c2d2e0afbad366b14231"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/check-white.png",
    "revision": "0bc57ed512131d2e4b507055552f7277"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/clock-black.png",
    "revision": "c92ab62b3c0ca2ca1ae11bcc940c20a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/clock-white.png",
    "revision": "44cffb967f09ddf5fb8d13380745f273"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/cloud-black.png",
    "revision": "c0c7bf5a98f76f252d14f1af232a0ee1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/cloud-white.png",
    "revision": "c71b429d726c0b8c94fc6dd33f885574"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/comment-black.png",
    "revision": "81a45d4b2b64e4321667542b75eb6754"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/comment-white.png",
    "revision": "0917e96ac998c0d191d7b81d880927a9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/delete-black.png",
    "revision": "fb456b3f7f0b805ac7be21d97b443f9a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/delete-white.png",
    "revision": "478fa064c1e2234032e7a3de1884f4ed"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/edit-black.png",
    "revision": "3bed8f0eeea77c23adcce4870c391286"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/edit-white.png",
    "revision": "a41a9a4e6b71ae9829dd8fa24e695be9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/eye-black.png",
    "revision": "03ce5e4016e1f8ab8d7b02a72d45e600"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/eye-white.png",
    "revision": "0bf7b7e9cb0aee2da885a86629744cf2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/forbidden-black.png",
    "revision": "fcf54d3cda520f292d34592d4ae6d9ae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/forbidden-white.png",
    "revision": "d124846cb27f0a6e07764e114895e335"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/forward-black.png",
    "revision": "54bf8c0856e1a1b2b18fbf8161d8dadf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/forward-white.png",
    "revision": "486c47d6f12f7872c04a16a28f7ae6c3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/gear-black.png",
    "revision": "957fed4d5d46498e93cb74af8384f4b2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/gear-white.png",
    "revision": "592af245bec551ffa61392b9e363c8ee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/grid-black.png",
    "revision": "536fe23332253922017d3145f06258a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/grid-white.png",
    "revision": "ab90c7666595f04b9374518ece4fd0e2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/heart-black.png",
    "revision": "7e2aaea1b42b5d462a7d098d5814433a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/heart-white.png",
    "revision": "86b007f62248a968255c50b3d5c0e696"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/home-black.png",
    "revision": "3ef58401159dce7cdb4ca66bd1e1c475"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/home-white.png",
    "revision": "1c80eb5b00855d8494116db68af3242c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/info-black.png",
    "revision": "ecc9460bc8b0a3de72a6638c8fc39d36"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/info-white.png",
    "revision": "a776b029342f4ef75889d2b9853a0e59"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/location-black.png",
    "revision": "173cf9e0989ea6f0bb6254a1fc0334ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/location-white.png",
    "revision": "359f3b2435bb7ea11c9b62f46d712b2f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/lock-black.png",
    "revision": "28a57a211fa4c6a69055a91cd3e2b688"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/lock-white.png",
    "revision": "827adbd30b32a8089a39bd5a40d956ca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/mail-black.png",
    "revision": "13106c83b8c7a9e78e5d0fbcf275f027"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/mail-white.png",
    "revision": "006089860dcf971fe6f65ec3ad289e3a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/minus-black.png",
    "revision": "92cc19063926bda68541c1c6213e0637"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/minus-white.png",
    "revision": "9e2ff829356531c31e954eb48d69b1c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/navigation-black.png",
    "revision": "f36cc2c09123d935278e9fdbe1722769"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/navigation-white.png",
    "revision": "59bdad3cbad70b98a5580f59f4b0f89d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/phone-black.png",
    "revision": "c78bd6ae6d2074f201518d5e504120d9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/phone-white.png",
    "revision": "3f351a2cf1b17acf767294695eb9a825"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/plus-black.png",
    "revision": "96410e386e61459b3bf045ae72449b72"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/plus-white.png",
    "revision": "d8256afa69d9ed42bdbeb1232acddc0e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/power-black.png",
    "revision": "d9a9cd79c18b61953483b15e78b7b6b6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/power-white.png",
    "revision": "4e785618f27780944e6d8a13fee251b0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/recycle-black.png",
    "revision": "04ae75ab4410ec64093da3b298fef31e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/recycle-white.png",
    "revision": "8a46b6ed030cee2db774928b81d1e6e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/refresh-black.png",
    "revision": "1da2deb97177b5676c80be327ddc82e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/refresh-white.png",
    "revision": "705e7dd6e46b24381e9d123be4721787"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/search-black.png",
    "revision": "8fdc32864a50e0359972f7caaa6a4fac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/search-white.png",
    "revision": "615d54abf8ffe2159c6418996e73b86f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/shop-black.png",
    "revision": "34776eb5710390641a48b2ef933b42d8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/shop-white.png",
    "revision": "bed77b8b0aa66b98bb2c53d5ace2d736"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/star-black.png",
    "revision": "741986dbcdfb3f8e4b86a58a5de62b4e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/star-white.png",
    "revision": "f62c7807aed9d236a22b8672290f845d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/tag-black.png",
    "revision": "d5fc58dc0ecabd4e37cb41e2a8c6f871"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/tag-white.png",
    "revision": "63d500360386f0352234ea160a235650"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/user-black.png",
    "revision": "72109232660715674c269a748b6d3b94"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/user-white.png",
    "revision": "291b0ebdb48850f539026ccd24ade8ff"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/video-black.png",
    "revision": "3e9650ab48d52565ff42b9f67e1ea617"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-png/video-white.png",
    "revision": "d180c9f44b809cd008ea4c32a4450bd2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/action-black.svg",
    "revision": "67275db7ead5c13b17248764737e1941"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/action-white.svg",
    "revision": "797865c23a9a7fd58f879c06ea5f3373"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/alert-black.svg",
    "revision": "36f5ec26786ba00eb754c08e54482a45"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/alert-white.svg",
    "revision": "62b7c0f9ef04d0e883874cd17beb67f9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-black.svg",
    "revision": "8f16783cae829210adb04701c7c56e8a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-l-black.svg",
    "revision": "ee21b9e7833a9e2b379860f3a618b1e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-l-white.svg",
    "revision": "01a113d82aba147674d5c3f02a964d62"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-r-black.svg",
    "revision": "97a158a3980bc8a4ec4fb17d2f73a350"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-r-white.svg",
    "revision": "0a090129d1927e101076a432d621a6d7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-white.svg",
    "revision": "6edf191c7866180081b7eefedb0dba70"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-l-black.svg",
    "revision": "c8dbdfc79c8e80d1ea94b87aa3912b8e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-l-white.svg",
    "revision": "359f958a031112b9520608597719d379"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-r-black.svg",
    "revision": "00df078716e101e98d97f3716cc08ada"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-r-white.svg",
    "revision": "8185b003c91161784c2f459cd1841653"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-black.svg",
    "revision": "892fff5096355d1d137d604b2cd59a60"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-l-black.svg",
    "revision": "1db1daead125330f1a7bf3e7fe72f275"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-l-white.svg",
    "revision": "fad90887ad3b93dd743c3fe55ab10d17"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-r-black.svg",
    "revision": "0eac866257c85e1d8b09b315337a2b07"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-r-white.svg",
    "revision": "1a8f30eea2937a267e65d0074db54f15"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-white.svg",
    "revision": "ec482d18e3e5eca475988f736385f83b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/audio-black.svg",
    "revision": "bf7400a0a0aeb0bef6a40d17cf542c1e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/audio-white.svg",
    "revision": "79fe8db54c1bf84120a2d83a3321809f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/back-black.svg",
    "revision": "299d8fddcf7aefe01fcda1e3d36c539e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/back-white.svg",
    "revision": "28b170be258eb94dd59a5aebede55ca0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/bars-black.svg",
    "revision": "30b70e23bcdb1582a62d0ea37518c218"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/bars-white.svg",
    "revision": "b28b198349a23f1bb70adfd3c3928bec"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/bullets-black.svg",
    "revision": "8592b97a7ff92d49c4a4500825c38a24"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/bullets-white.svg",
    "revision": "28e926450152e985c4373e1573a62011"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/calendar-black.svg",
    "revision": "afb432ae012246d38cf48b40b75b4661"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/calendar-white.svg",
    "revision": "683b7091302672384f03633fae4cf8e0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/camera-black.svg",
    "revision": "bc31967f8a33cfbcbb1283910848f3d2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/camera-white.svg",
    "revision": "07c295ce297a2c08d81b85982bb7f5ce"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-d-black.svg",
    "revision": "ca571e71da5ea3b3aa366f4565c101b4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-d-white.svg",
    "revision": "44fe6b4ec96e6f324e23fc6d6906fc92"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-l-black.svg",
    "revision": "0fd1f5d1dd111f9a39d2b12d626a9538"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-l-white.svg",
    "revision": "c7f967d6d7d2cd246d3313737fb609a5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-r-black.svg",
    "revision": "bad5e7f56576d11e67fb476dfc16a413"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-r-white.svg",
    "revision": "3afee5c3be598fd31a861956308085df"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-u-black.svg",
    "revision": "5c696a49dfe8cdc1d944ff23c4ce45fa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-u-white.svg",
    "revision": "2be4a9d2a9193bcdbcd53fa75130589b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/check-black.svg",
    "revision": "821dc8547ced9cc0698d0dd4ed9d06e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/check-white.svg",
    "revision": "88eb12a3c79959eeb743b48b16d511ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/clock-black.svg",
    "revision": "009a91daa40bc2d5f8814d653f8434ad"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/clock-white.svg",
    "revision": "56cf9aa2dc1c162096903ac41dff13fa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/cloud-black.svg",
    "revision": "b5fa9f83217d9c7d8a9b260f8702aece"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/cloud-white.svg",
    "revision": "97cb950227497b3ce36f0d342e6dab86"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/comment-black.svg",
    "revision": "1bebdcbea0e1aa92b8a003f25dae320c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/comment-white.svg",
    "revision": "1c88d821a8088bf13e11c42f51a2cb79"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/delete-black.svg",
    "revision": "a47df270172eb9e4aa2f53a8d49a747c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/delete-white.svg",
    "revision": "1545461b20b7e130257e9d8a3fbbe9fe"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/edit-black.svg",
    "revision": "aa68f894234d3877204b56a1f29f56df"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/edit-white.svg",
    "revision": "6ef800ecc6836e5572f29941e2c94883"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/eye-black.svg",
    "revision": "4b5188538a87aff30ca0a8ae073448bf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/eye-white.svg",
    "revision": "815468019d233b42706fe5accb6d4634"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/forbidden-black.svg",
    "revision": "0f1f6127b30576bef03089ed4a54963c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/forbidden-white.svg",
    "revision": "bf4eb7e1a4f5a7f2eb92afa3c0caa5cf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/forward-black.svg",
    "revision": "93d89c376ee9fc61eaddc8acc88f79bf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/forward-white.svg",
    "revision": "7dce88ed7e26c973e49d6b5d63c69438"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/gear-black.svg",
    "revision": "83717679bfeec2bac44f61bf2c2fdb07"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/gear-white.svg",
    "revision": "d973b195dd62c5f30900ec2ddbeeaf15"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/grid-black.svg",
    "revision": "729b4b585cd8008e420b9c7288d473f4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/grid-white.svg",
    "revision": "631da228c4a3f8e9cee2b8bdb16f99c7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/heart-black.svg",
    "revision": "8946674e6081a099c5003e12d014b727"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/heart-white.svg",
    "revision": "7d8835566b2c5181f98cc3619317d2d2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/home-black.svg",
    "revision": "c0f3930a0ba1e46c3aedb4d422dc674d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/home-white.svg",
    "revision": "315a466d71a7357747511dec557827b4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/info-black.svg",
    "revision": "293e7f6124a6f6c8e57d94523d9b3aaa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/info-white.svg",
    "revision": "31af5be157e2fa395cd31cdf2cfb2d19"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/location-black.svg",
    "revision": "f9f9c4a0b82be059f8ea20f3e5324a84"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/location-white.svg",
    "revision": "5e8eefb85b6d22fe477b32bd82a8376a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/lock-black.svg",
    "revision": "dcc507ffc396bc2a851fe4d10cffe207"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/lock-white.svg",
    "revision": "7b91f4c76a72fa47314a629de5afd2d9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/mail-black.svg",
    "revision": "72a01ba4327cf1f0b14738d9d6950da6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/mail-white.svg",
    "revision": "4e89f20bc80df577d2b306afbe3da21f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/minus-black.svg",
    "revision": "c8a533902d2d8346b16ec3056a24215d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/minus-white.svg",
    "revision": "51ad8ba2fffae02ba35ea6d732fdf49c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/navigation-black.svg",
    "revision": "65a0b299b9ea5401717848c88520ea26"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/navigation-white.svg",
    "revision": "37eb89d6300e305be01a560fcecc551f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/phone-black.svg",
    "revision": "f62c567527b2b5e0a346b831a8731de6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/phone-white.svg",
    "revision": "bee327d659d00c409047ca9004978844"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/plus-black.svg",
    "revision": "242deb48861062f78e2cc4c19f9cfe75"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/plus-white.svg",
    "revision": "472f41b23eed8edfcd9524a02f6fd3b1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/power-black.svg",
    "revision": "01f5e002762fbd375ca25f096b0a459f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/power-white.svg",
    "revision": "2efec04180b4d9b8933bbe692b1abdf8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/recycle-black.svg",
    "revision": "42d586529aff8f677f93c2bf75f9f10c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/recycle-white.svg",
    "revision": "bcf1c2ef6444eff7e84138ba066c6419"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/refresh-black.svg",
    "revision": "111f67f8800111970f0684f37de60d28"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/refresh-white.svg",
    "revision": "d17451ae1ab9ce9b60b10cae760c5de1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/search-black.svg",
    "revision": "a33a2d282639e95496f7b0ba743b8dd3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/search-white.svg",
    "revision": "67ec6b224fd71699bad087b88fa3884b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/shop-black.svg",
    "revision": "dd3498094e4587df4d2f93f46fbfb56d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/shop-white.svg",
    "revision": "35c5498ca57890e0763d000147e39dca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/star-black.svg",
    "revision": "028a29b556652a25dc9f6713c8ead3a7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/star-white.svg",
    "revision": "cc0a9ecae004d7ae84945a1417cdc356"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/tag-black.svg",
    "revision": "2f00ae8c1629d9b78e8b0a3a6e524aa5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/tag-white.svg",
    "revision": "c1bd8cf3fa1f28b8b12aafa9ebcc41ec"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/user-black.svg",
    "revision": "b1450949596cf32dbd0677dea1501b85"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/user-white.svg",
    "revision": "7dab217ef0edb74466854f49a5e7aebd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/video-black.svg",
    "revision": "406a4bc63094ceb5e3655c8f28318c88"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/js/jquery.mobile-1.4.5/images/icons-svg/video-white.svg",
    "revision": "322d59e56994f993a42bcede51344a16"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/clear_night.png",
    "revision": "352e2036ab6298c8fdf5d2d59c7b148a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/clear.png",
    "revision": "d8356ac39feb7d603276090c61e65b2c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/cloudy_night.png",
    "revision": "062070e75b9b690cdde7e83a51066a49"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/cloudy.png",
    "revision": "c819e95a6f14e0774dbac47907dc1f43"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/hazy.png",
    "revision": "2f34a77d41e52538bf57f58d455bf9bc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/partlycloudy_night.png",
    "revision": "9ae9bbcc68f44ce083ac9b02e5f1db02"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/partlycloudy.png",
    "revision": "fc7a2bf1fa0e8d58eb2b2536e55569fa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/rain.png",
    "revision": "a3f53cb78140bd1db6f4e3cec48723e6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/scatteredclouds.png",
    "revision": "ebf405ed6d6345efbea3dbf042f61daa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/showerrain_night.png",
    "revision": "488025aa761e2dcfee3e1f0c35503de7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/showerrain.png",
    "revision": "0b840d78d2f30e0192b17301e5c00c52"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/snow_night.png",
    "revision": "24ffc4012742b17ebc595d2ac9e5c76e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/snow.png",
    "revision": "7a79d4ce3786b06cd073def1bbd5d22b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/thunderstorms.png",
    "revision": "ee733ab58b64c6950d5083eeda9c3c71"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/unknown.png",
    "revision": "e0769259d1ae9466521cabdbc4a7add2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/weather-rainy.png",
    "revision": "08d69d5dbdf991ac2fc19109e694f5ca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/weather-sunset-down.png",
    "revision": "5dfe1b10792a0dc80c4d595a9573091b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/weather-sunset-up.png",
    "revision": "8c18007638d4f1bf05ce3f88133b6319"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/environment/weather/images/weather-windy.png",
    "revision": "61ec2c123e1c034460cb33352e736f4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/battery_level_0.png",
    "revision": "f549d4cdc101995ce40b1240133a53ba"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/battery_level_10.png",
    "revision": "81795b12e124388195809653f0418c26"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/battery_level_100.png",
    "revision": "130fd53829a548456f6af250b11b4a10"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/battery_level_20.png",
    "revision": "dde9a824e5685ecfe2bb4a006fca6061"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/battery_level_40.png",
    "revision": "09665d3309e126b637bc54cdb6e73e9d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/battery_level_60.png",
    "revision": "3fb9c62ec2131cca8ded24d1fd849eb0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/battery_level_80.png",
    "revision": "bbec5d9010c19ed04b1189c8cef64195"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/browser_audio.png",
    "revision": "9053c522d75100c5c3ffe2d3cd62bf4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/browser_folder.png",
    "revision": "499c3d727841444f9eba536c39c94825"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/browser_image.png",
    "revision": "51606307151ee9999250683f728e9d3d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/browser_video.png",
    "revision": "ea9e329d9dcb50897f28168084eaf159"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/camera.png",
    "revision": "4f7ebec124ff9ec892ed5bc0d3c4477c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/dimmer_off.png",
    "revision": "45fe720e1f5784a00e63f0d3ad9429e7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/dimmer_on.png",
    "revision": "cc50c76ffa33dc4c4c5eb3c161b95389"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/door_closed.png",
    "revision": "b90839ede181bd033a37aad0a21daa4c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/door_open.png",
    "revision": "8ac6268f3d5eb813069c5b876fc79fbd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/fan.png",
    "revision": "d32959d1a7beb53194cc2696a105f62a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/flag-black.png",
    "revision": "174036bfa10a6d48530b63bc4d9372d3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/flag-blue.png",
    "revision": "4effc756f1f39c44d7a366719afae92a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/flag-green.png",
    "revision": "5695494c8e30331eed099d7c57c7ba7c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/flag-red.png",
    "revision": "d150ea99e689c7c4581cf7c15a017837"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/flag-yellow.png",
    "revision": "1d3daf0f0a0b67112f1118bafdadd885"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/airpurifier.png",
    "revision": "34d34fb38e931f5c9f8d2c9aae3ca8f5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/aladdinlamp.png",
    "revision": "6a6a9b68adaaf6dcd5e291718c2cf582"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/appliance.png",
    "revision": "548581a50e1eff313d1b80f89c598736"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/blender.png",
    "revision": "68c8753a3b9faf1a249ed2d74ba23d29"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/blinds.png",
    "revision": "dab9a2fa56b1598c44b3b47c485bffd9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/coffee_machine.png",
    "revision": "228e362bb8e3ac358155363a35e81116"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/colorbulbs.png",
    "revision": "6c07ddc8cebfc5e3d70b1f498efa124f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/computer_01.png",
    "revision": "f3cb7458ce29dbf81cd1050e3c3715ba"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/computer_02.png",
    "revision": "3a0b4a8336adc6e23a8d92db50ee2b9e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/curtains.png",
    "revision": "ea4a1bfc6b709d083908ca2b1c21ea8e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/display.png",
    "revision": "c810b04c30dd75a373e901e91a18645c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/door.png",
    "revision": "0a8572ce37036fa25b33cb60abbd5e09"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/fan_01.png",
    "revision": "d32959d1a7beb53194cc2696a105f62a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/fan_02.png",
    "revision": "003bbd6e1aedb5d40fa576066d46e6ea"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/fan_03.png",
    "revision": "2d2a1515a2ed875dec527b3ffd7e17ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/flood_sensor.png",
    "revision": "f831fa808006dfab4a116e55d2b43f2c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/garden_light.png",
    "revision": "2ab00ec993e3ae847f4a5b3efaaf94fd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/heater_01.png",
    "revision": "ea50c2dd8a8afac08867e7aa3956f888"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/heater_02.png",
    "revision": "232e55bfe2cd8579003e8f4b55d7ba54"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/hifi.png",
    "revision": "99363b5e373509ec2a64ef87d4c0c7df"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/lamp_01.png",
    "revision": "a335ca824938fd4f163613e7dfb420e5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/lamp_02.png",
    "revision": "c6eda45c6f3a61ce788f389e8fe3206b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/lamp_03.png",
    "revision": "9eec4fb641dd3a051d3d4ee82949f405"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/lamp_04.png",
    "revision": "be9ed5e89537bc20f21a02d83d9a6190"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/lavalamp.png",
    "revision": "9b8f5c586d71355e38133c3a78eeb307"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/oven.png",
    "revision": "5621369f9719dc21941aff292ade398b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/printer_fax.png",
    "revision": "0c7029c74bdeeb2468d19acfcd4bbd1f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/printer.png",
    "revision": "679e93435632607d000ec451d9f1679e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/projector.png",
    "revision": "515fa33446037bd651a105b312d23f1e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/radio_01.png",
    "revision": "aa8a782eecd4a0126a9e77e1bcb45660"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/radio_02.png",
    "revision": "73d069e27af0bab516a4033e117782a5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/radio_03.png",
    "revision": "9dea1203c0dfbe3ee3842a8d4d80eb8f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/refrigerator_washing.png",
    "revision": "ae0aaeed10b09c144504a7e52763cdc0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/refrigerator.png",
    "revision": "05847bfca2376f11f4eec1881162f3a3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/robot.png",
    "revision": "2581b78b6a1c3f1d0169334e4e3d1abc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/shader.png",
    "revision": "636298fb30e5ca4491988a7c59443c63"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/siren.png",
    "revision": "cef6d8baab714309ad1316e06982b084"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/smoke_sensor.png",
    "revision": "42bc39c42e1be3204ca92e3bdb127da6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/socketplug.png",
    "revision": "c53946eca64c5dad87e1e2fbcc126e0c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/speaker.png",
    "revision": "dcd189b5681ec4ac09d634883b621b34"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/speakers.png",
    "revision": "abe96861ec5820bb16a7ecb580873ab6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/television_01.png",
    "revision": "ec57a2772e68308bdc4490c36cb449af"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/television_02.png",
    "revision": "da3e1f5161344b316c35b90878749ad4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/temperature.png",
    "revision": "4cf6cba4e342a31cdc5193876ed9cda6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/toaster_01.png",
    "revision": "f99b9e822ad13e1986d8cfeff1d6147c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/toaster_02.png",
    "revision": "3c4143a8a1d5421f59b4d1d26d494255"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/icons/washingmachine.png",
    "revision": "296a7e6e5f1218942e71c02597ab3cd4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/light_off.png",
    "revision": "45fe720e1f5784a00e63f0d3ad9429e7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/light_on.png",
    "revision": "cc50c76ffa33dc4c4c5eb3c161b95389"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/link.png",
    "revision": "ec5351c35610eee8a24080f1d69c006d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/luminance.png",
    "revision": "58f37459c0c0c44cae221a5bdd241279"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/media_mute.png",
    "revision": "a54df5172382eb9d36d6dde8d319c14f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/media_next.png",
    "revision": "1dc6adc02d809d29ef27556630e978cb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/media_pause.png",
    "revision": "4cd9551f627214b8f9b5337a82866dfe"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/media_play.png",
    "revision": "11a5297106e0d9eb54a7711d29038f95"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/media_previous.png",
    "revision": "87427514f5978981b1735d372ebbe77a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/media_receiver.png",
    "revision": "e74c354cefece23b41fd0ed4ed89138d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/media_stop.png",
    "revision": "5737294b961da384931b49d2f5911d6f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/media_unmute.png",
    "revision": "a27774d5c762ee7469da1a765984db46"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/media.png",
    "revision": "bbadecdb0efd2aed7d3cbda166ae8140"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/power.png",
    "revision": "d7df1fd0c2c4eac14b96f34412cc7b6c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/program.png",
    "revision": "4b3a0e92d5ec07e3ad449633ad35d7c9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/securitysystem.png",
    "revision": "1cad8715333087d83ec73490cc82fddc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/sensor.png",
    "revision": "25d2249d4ed2b18b46c5799f287a0abb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/shutters_closed.png",
    "revision": "8b2fa4f700b0eee2ce3fa34433f138a7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/shutters_open.png",
    "revision": "d4936399b3d44d160dbd64f868292e6f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/siren_off.png",
    "revision": "0c69ef90f1f86599c4c31be1580fcd2f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/siren_on.png",
    "revision": "0253d49f30b9cd77ad1e03192e3540c7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/status.png",
    "revision": "21654e45f77946496dc8e652176524c9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/switch_off.png",
    "revision": "77add372abbc2e406a303de10d894963"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/switch_on.png",
    "revision": "d6f89fb57e42d4521b82e30a648bee5f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/temperature.png",
    "revision": "4cf6cba4e342a31cdc5193876ed9cda6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/therm_cool.png",
    "revision": "8b93aef0fa6c7c3b504274065e35af05"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/therm_fan.png",
    "revision": "c869f83424017bd1e7144413d68b6408"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/therm_heat.png",
    "revision": "68447a765b21cee224c336eccf27292e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/unknown.png",
    "revision": "7d55198b9d9dfc4defc1a325cbc4fbd3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/wireless.png",
    "revision": "908bd438d28229f5e7bebc7c021a548a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/wu_flurries.gif",
    "revision": "1a46208fea4c8fbaa8869d6446b39051"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/wu_logo.png",
    "revision": "34a124fae54889921f4a28cba89e61fd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/wu_partlysunny.gif",
    "revision": "5159136e327002197d27e096e20c0cfb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/wu_sunny.gif",
    "revision": "4f3663490f4cfa4863a3788837836e53"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug_delete_me/html/pages/control/widgets/homegenie/generic/images/wu_tstorms.gif",
    "revision": "289b3fc4be0a75c9b8cc2d5f5e17b86f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/font-awesome/fonts/fontawesome-webfont.svg",
    "revision": "f775f9cca88e21d45bebe185b27c0e5b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ajax-loader.gif",
    "revision": "8fd7e719b06cd3f701c791adb62bd7a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/animated-overlay.gif",
    "revision": "2b912f7c0653008ca28ebacda49025e7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/action-black.png",
    "revision": "9a19edc87343cefa0ea5fbfc38c45b92"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/action-white.png",
    "revision": "13d2742979c0abdff486ffc0c2765efb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/alert-black.png",
    "revision": "09364128a6be0cc59f1fc6e9fade366f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/alert-white.png",
    "revision": "86373cf5fcb815be2adc0c06a87eb6f1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-d-black.png",
    "revision": "f85e79a0dcf3d65491e6bb99b40c0fda"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-d-l-black.png",
    "revision": "27790e799f740daee527b1ca3c9971f9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-d-l-white.png",
    "revision": "14b3bcde3ed10d0be18d5fcc90fe8ce0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-d-r-black.png",
    "revision": "5bad1e7e859eb120f4d136af29084460"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-d-r-white.png",
    "revision": "fec8ef05dd2b57134a284515eb5ecabf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-d-white.png",
    "revision": "a7ed65414584a456e4608c2bc3d85065"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-l-black.png",
    "revision": "ee7f9b8e2abb96a61fe8d4cf11ca7697"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-l-white.png",
    "revision": "434675e67d80715862db88c75a7df577"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-r-black.png",
    "revision": "d96c7bba4b98ec14e62790584b139a61"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-r-white.png",
    "revision": "34350abeb7bd36e979c0aa4d6e038d2d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-u-black.png",
    "revision": "5e086bd389bca6a7793a8741a6c6fad3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-u-l-black.png",
    "revision": "9891529976aef3fa1c23308dbbbe0485"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-u-l-white.png",
    "revision": "eb17742486f621a31bfb1aaabdc30d5c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-u-r-black.png",
    "revision": "25267137bba768f6f2b595398c6a2b92"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-u-r-white.png",
    "revision": "ce2d1de04f61355443949d6061f4ea37"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/arrow-u-white.png",
    "revision": "9f6cd65e48648b4823e236b0da1e54b0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/audio-black.png",
    "revision": "d3cfac47faf40513c646c1f16b087e88"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/audio-white.png",
    "revision": "7c90c384a65cbfef572bbdd02b9d8edb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/back-black.png",
    "revision": "0759505d2298fdee60b52b5126dfcfc6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/back-white.png",
    "revision": "e78ad3c61a492b120a7ba0a789d4b2e0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/bars-black.png",
    "revision": "d638db196907b36c3e0bfefb8a698cc8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/bars-white.png",
    "revision": "f4d15b9a0fdcf961fe8d749703b20f20"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/bullets-black.png",
    "revision": "63e8e96e2deb4d60b69a68d6d9765df8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/bullets-white.png",
    "revision": "b74986306e8ee76bd1f2a4293d56c3c4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/calendar-black.png",
    "revision": "9116cef9549b26ddc4d9e96bec5dfd41"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/calendar-white.png",
    "revision": "215a42df136361f8b54b056a0ca6ae15"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/camera-black.png",
    "revision": "434dcb1c736b2da8247a1e59372bc64b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/camera-white.png",
    "revision": "054a64f6a2886570ed734a26a804a66a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/carat-d-black.png",
    "revision": "9708c21592cabb6f7fe4272e6daa7853"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/carat-d-white.png",
    "revision": "52f8e9ceafe00b0360bce803f5236a0c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/carat-l-black.png",
    "revision": "01df9e30c853da8996684cd08c3a7917"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/carat-l-white.png",
    "revision": "32a1036e056d5a5831f6e8d40d4d1faf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/carat-r-black.png",
    "revision": "01945aeb9182966e0e02cd0cd2f74abd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/carat-r-white.png",
    "revision": "41c4ab4735f66dd007c2689a87695863"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/carat-u-black.png",
    "revision": "76904bfc235fd12caacfc2858f8e1eef"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/carat-u-white.png",
    "revision": "3bde6d2e6ab2936a25b69767de4ac7c3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/check-black.png",
    "revision": "358363d39df6c2d2e0afbad366b14231"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/check-white.png",
    "revision": "0bc57ed512131d2e4b507055552f7277"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/clock-black.png",
    "revision": "c92ab62b3c0ca2ca1ae11bcc940c20a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/clock-white.png",
    "revision": "44cffb967f09ddf5fb8d13380745f273"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/cloud-black.png",
    "revision": "c0c7bf5a98f76f252d14f1af232a0ee1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/cloud-white.png",
    "revision": "c71b429d726c0b8c94fc6dd33f885574"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/comment-black.png",
    "revision": "81a45d4b2b64e4321667542b75eb6754"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/comment-white.png",
    "revision": "0917e96ac998c0d191d7b81d880927a9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/delete-black.png",
    "revision": "fb456b3f7f0b805ac7be21d97b443f9a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/delete-white.png",
    "revision": "478fa064c1e2234032e7a3de1884f4ed"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/edit-black.png",
    "revision": "3bed8f0eeea77c23adcce4870c391286"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/edit-white.png",
    "revision": "a41a9a4e6b71ae9829dd8fa24e695be9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/eye-black.png",
    "revision": "03ce5e4016e1f8ab8d7b02a72d45e600"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/eye-white.png",
    "revision": "0bf7b7e9cb0aee2da885a86629744cf2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/forbidden-black.png",
    "revision": "fcf54d3cda520f292d34592d4ae6d9ae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/forbidden-white.png",
    "revision": "d124846cb27f0a6e07764e114895e335"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/forward-black.png",
    "revision": "54bf8c0856e1a1b2b18fbf8161d8dadf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/forward-white.png",
    "revision": "486c47d6f12f7872c04a16a28f7ae6c3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/gear-black.png",
    "revision": "957fed4d5d46498e93cb74af8384f4b2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/gear-white.png",
    "revision": "592af245bec551ffa61392b9e363c8ee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/grid-black.png",
    "revision": "536fe23332253922017d3145f06258a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/grid-white.png",
    "revision": "ab90c7666595f04b9374518ece4fd0e2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/heart-black.png",
    "revision": "7e2aaea1b42b5d462a7d098d5814433a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/heart-white.png",
    "revision": "86b007f62248a968255c50b3d5c0e696"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/home-black.png",
    "revision": "3ef58401159dce7cdb4ca66bd1e1c475"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/home-white.png",
    "revision": "1c80eb5b00855d8494116db68af3242c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/info-black.png",
    "revision": "ecc9460bc8b0a3de72a6638c8fc39d36"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/info-white.png",
    "revision": "a776b029342f4ef75889d2b9853a0e59"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/location-black.png",
    "revision": "173cf9e0989ea6f0bb6254a1fc0334ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/location-white.png",
    "revision": "359f3b2435bb7ea11c9b62f46d712b2f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/lock-black.png",
    "revision": "28a57a211fa4c6a69055a91cd3e2b688"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/lock-white.png",
    "revision": "827adbd30b32a8089a39bd5a40d956ca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/mail-black.png",
    "revision": "13106c83b8c7a9e78e5d0fbcf275f027"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/mail-white.png",
    "revision": "006089860dcf971fe6f65ec3ad289e3a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/minus-black.png",
    "revision": "92cc19063926bda68541c1c6213e0637"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/minus-white.png",
    "revision": "9e2ff829356531c31e954eb48d69b1c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/navigation-black.png",
    "revision": "f36cc2c09123d935278e9fdbe1722769"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/navigation-white.png",
    "revision": "59bdad3cbad70b98a5580f59f4b0f89d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/phone-black.png",
    "revision": "c78bd6ae6d2074f201518d5e504120d9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/phone-white.png",
    "revision": "3f351a2cf1b17acf767294695eb9a825"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/plus-black.png",
    "revision": "96410e386e61459b3bf045ae72449b72"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/plus-white.png",
    "revision": "d8256afa69d9ed42bdbeb1232acddc0e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/power-black.png",
    "revision": "d9a9cd79c18b61953483b15e78b7b6b6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/power-white.png",
    "revision": "4e785618f27780944e6d8a13fee251b0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/recycle-black.png",
    "revision": "04ae75ab4410ec64093da3b298fef31e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/recycle-white.png",
    "revision": "8a46b6ed030cee2db774928b81d1e6e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/refresh-black.png",
    "revision": "1da2deb97177b5676c80be327ddc82e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/refresh-white.png",
    "revision": "705e7dd6e46b24381e9d123be4721787"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/search-black.png",
    "revision": "8fdc32864a50e0359972f7caaa6a4fac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/search-white.png",
    "revision": "615d54abf8ffe2159c6418996e73b86f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/shop-black.png",
    "revision": "34776eb5710390641a48b2ef933b42d8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/shop-white.png",
    "revision": "bed77b8b0aa66b98bb2c53d5ace2d736"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/star-black.png",
    "revision": "741986dbcdfb3f8e4b86a58a5de62b4e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/star-white.png",
    "revision": "f62c7807aed9d236a22b8672290f845d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/tag-black.png",
    "revision": "d5fc58dc0ecabd4e37cb41e2a8c6f871"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/tag-white.png",
    "revision": "63d500360386f0352234ea160a235650"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/user-black.png",
    "revision": "72109232660715674c269a748b6d3b94"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/user-white.png",
    "revision": "291b0ebdb48850f539026ccd24ade8ff"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/video-black.png",
    "revision": "3e9650ab48d52565ff42b9f67e1ea617"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/icons-png/video-white.png",
    "revision": "d180c9f44b809cd008ea4c32a4450bd2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-bg_flat_30_cccccc_40x100.png",
    "revision": "71e77e96f379fabb663510dda8cc9e7b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-bg_flat_50_5c5c5c_40x100.png",
    "revision": "4e196d96c10faa36eb9bb82fc6916713"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-bg_glass_20_555555_1x400.png",
    "revision": "36b431eacc186d62fb994f5b352cfa85"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-bg_glass_40_0078a3_1x400.png",
    "revision": "351168e22bd921cbfbcfcde4d3f9a6b0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-bg_glass_40_ffc73d_1x400.png",
    "revision": "db4045e2f2ffb72f3b186d69cb101ee5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-bg_gloss-wave_25_333333_500x100.png",
    "revision": "142b8b156da17f0f5bf35f45a84c2fca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-bg_highlight-soft_80_eeeeee_1x100.png",
    "revision": "3fcc6d99497722bab7373f0c10b56613"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-bg_inset-soft_25_000000_1x100.png",
    "revision": "8a8e2a3d4380ad5bc021828445229eed"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-bg_inset-soft_30_f58400_1x100.png",
    "revision": "4d01ac7e6dc6fb02f5eef1f994e8efe4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-icons_222222_256x240.png",
    "revision": "aaab8cec5db99e71553f439512bdb1f3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-icons_4b8e0b_256x240.png",
    "revision": "4d37128946471cb6f2eb20398a7a2a0b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-icons_a83300_256x240.png",
    "revision": "59761ae04f7ed95d631b2f7035d1bae0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-icons_cccccc_256x240.png",
    "revision": "b509d115574691a917f9d541ee719dff"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/css/images/ui-icons_ffffff_256x240.png",
    "revision": "21ae0a24bdf6211042f00919fde17af0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/analyze.png",
    "revision": "578ddcfbf993fca7ff2dfb57cd0f5fac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/automation.png",
    "revision": "b4a9361c0b7b5a6bc1216444116396ac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/background.jpg",
    "revision": "ab6c373c96b2186577bc8aa9d2d5dd1e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/common/led_black.png",
    "revision": "15cbd329d8526fcaae9c284eaaf6393c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/common/led_blue.png",
    "revision": "c3f9f877d6be9cbf5b12c2eb248d1e9d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/common/led_brown.png",
    "revision": "fbf7f818f0d1124439f98b6b64ceb15d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/common/led_green.png",
    "revision": "59a5f2fe74b16fc28b56586cb6e7c4e8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/common/led_purple.png",
    "revision": "f396036769ffebeecb0f3ed89918cb7a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/common/led_red.png",
    "revision": "46599130669596652b0e67e091df7b2b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/common/led_yellow.png",
    "revision": "d98db9fe98f78ab938c7e884800fe960"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/configure.png",
    "revision": "11e6aed03a9856f09de50c12d6f5379c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/control.png",
    "revision": "2437d4b7ff8cf362f4a065b405d600ae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/creativecommon.png",
    "revision": "0a27805bbe6b6d67ef37f760dc991917"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/event_off.png",
    "revision": "f5600a261cadea6c00db1673dac3c36b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/event_on.png",
    "revision": "b488b97ca1f19753a9f38d1e0144b115"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/genie.gif",
    "revision": "1a6c2d66ecfb9268afd3364e83746252"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/genie.png",
    "revision": "d311329f6b7f6588be49094a592492c9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/groups.png",
    "revision": "0c2030327f8912e906738373d133d2d3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/halt.png",
    "revision": "50d2d2eb4d8bca9b1fe4aad698474ebf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/icons/micro-black.png",
    "revision": "ace0708b11f58516cd13bd0a33045712"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/icons/micro-white.png",
    "revision": "7be0e9e015d96a5100d94f0b1a6838c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/alarm-black.png",
    "revision": "39e9414b55a158ef1ad7b3543d0ed301"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/alarm.png",
    "revision": "98c3b623a440f2032e5676a4a9efc0d8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/bulb-black.png",
    "revision": "873019164e1fd500222ecc17aaeccaa3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/bulb.png",
    "revision": "c0a6a240b3bef0474abe460d7105fccb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/distance-black.png",
    "revision": "109863698cc43eebcfa97c79f1f7d3a4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/distance.png",
    "revision": "a5704ffa4b24c2f838cbe1f8a98dda19"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/door-black.png",
    "revision": "77abfb0d79f72cab4dc4d6102820e483"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/door.png",
    "revision": "22a317960ff36cca32bcd535baaa1463"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/energy-black.png",
    "revision": "6bcec8732949e7168fedefc112fa7078"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/energy.png",
    "revision": "4f3530541d61ad18e3640ff449afe979"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/flood-black.png",
    "revision": "b276ca7fdf19502cbc62d7e44c4aa4d3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/flood.png",
    "revision": "176997912821852f9881699267a908bd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/flow-black.png",
    "revision": "3bb61f4aa9ff427874e9077de2cf1d30"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/flow.png",
    "revision": "07208f6b59ebbbe9ad227ac0322c0ae8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/generic-black.png",
    "revision": "8f2057bf2a1ab0ad91f07485ac258d77"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/generic.png",
    "revision": "07daac5317f42a2ff874f43133ce159d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/heat-black.png",
    "revision": "807b0e7ba94d5bf13b2b449cf5f9337f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/heat.png",
    "revision": "4c29529c9834dd215a548eb153b3654b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/humidity-black.png",
    "revision": "a35340ccca07c3d91ff672720b93ce34"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/humidity.png",
    "revision": "3216c2f851ddd482997d6a1b97a6354f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/infrared_black.png",
    "revision": "32e555eb7f701815baf259086b11714f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/infrared.png",
    "revision": "738aa9d16feba874637c2f56f79d91cb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/level-black.png",
    "revision": "cdf64340491f192bb58113821a42fd07"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/level.png",
    "revision": "11ec621ea5b73d22d87e10d31b8d026a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/luminance-black.png",
    "revision": "5c9b991789f8cf004a3b0ebeea4764b4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/luminance.png",
    "revision": "c01d3647ace5d1bf4bc1e0ee492c74d0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/plug-black.png",
    "revision": "f0651f02b33cf8f79adaeba4d1503f04"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/plug.png",
    "revision": "66798252d85b9b120f90f62f0ee82c1c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/smoke-black.png",
    "revision": "50fc7b3c68987c1821f1377757367089"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/smoke.png",
    "revision": "993a2e209d85343a877d955d1c4b511f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/temperature-black.png",
    "revision": "01175a567688b6f2afaf07772e27669a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/temperature.png",
    "revision": "c2db6e6c8358bea3b2342b3c63ed4c00"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/uv-black.png",
    "revision": "9e70f762c81494ec03ee6f82390bf841"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/uv.png",
    "revision": "e9706311e5ed88dc34e5ec8fa69a100c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/volume_black.png",
    "revision": "1371de5646d3f06b0733870d4a6763b9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/volume.png",
    "revision": "94a6778dc3d2253ebfce8168b98c67ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/window-black.png",
    "revision": "ff826c2465913e4c647f81597c6e9035"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/indicators/window.png",
    "revision": "36ebf63a5928945ff7710cbc2d074331"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/interfaces.png",
    "revision": "ce87383fb841b6b9340049a0bea06be4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/interfaces/upnp.png",
    "revision": "d35f79875346a4ba01dcbcd0dbbcd4b7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/interfaces/x10.png",
    "revision": "8fad32e6bba9a8aad97821e3f97bcd36"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/interfaces/zwave.png",
    "revision": "ca7d3779ab6384914aea2fde151f09f6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/led-green-off.png",
    "revision": "9f78a473445c4a4f49ed14b0dda356d4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/led-green-on.png",
    "revision": "07029737cca0b5bf63a5252c011f7f40"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/maintenance.png",
    "revision": "6b0fb2796d5f22cbb5ce1aea9a1de5ea"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/play-icon.png",
    "revision": "60625049681f8beedeaa6a28c93fccaf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/playcontrol.png",
    "revision": "c163963793f5e679dffbf1b524d36c14"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/program.png",
    "revision": "71a32a1b7fa59b2e844595a16e2c6588"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/protection-off.png",
    "revision": "88dd0094262ef3e3241d8608b547249a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/protection-on.png",
    "revision": "cb46f4b49cf13afbda74f67a5e0c26bb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/remote.png",
    "revision": "6b905586fc8e2c5ccad703c4d3979f08"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/robot.png",
    "revision": "1c5ea7020469afe21a327b0583200671"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/scheduler.png",
    "revision": "082ff69d21ca47dc41babdd4a244bf42"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/update.png",
    "revision": "f80afbce0c6805be3b16d1a7e28c21cf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wallpapers/wallpaper_001.jpg",
    "revision": "e56d5872da1b2b29c9c54fc78adab9a8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wallpapers/wallpaper_002.jpg",
    "revision": "699e3098a7fd94379b936314965d772d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wallpapers/wallpaper_003.jpg",
    "revision": "ef931ee1323542ee5604a9c43803c4e8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wallpapers/wallpaper_004.jpg",
    "revision": "8adcc22f92f1260b24712e7a38e59656"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wallpapers/wallpaper_005.jpg",
    "revision": "114ec2a9a0ac78a5853f70716fc7c88d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wallpapers/wallpaper_006.jpg",
    "revision": "d12dc3406627dc748561e1930704ec3d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wallpapers/wallpaper_007.jpg",
    "revision": "ebbc0d0bda0c5c7393e8e90925ddba2e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wallpapers/wallpaper_008.jpg",
    "revision": "c9ab8455b31e1e4e13b4ae1a1449912c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wallpapers/wallpaper_009.jpg",
    "revision": "8719038b02bd0c71cc1fa86855126344"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wallpapers/wallpaper_010.jpg",
    "revision": "3d0d9374ff3dd3e254c45df5624c990b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wiz-interfaces.png",
    "revision": "18afde315ad639a144e4915499f0e719"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/images/wiz-options.png",
    "revision": "7e44d3e724a37b260c83427bc5d418e9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/ajax-loader.gif",
    "revision": "8fd7e719b06cd3f701c791adb62bd7a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/action-black.png",
    "revision": "9a19edc87343cefa0ea5fbfc38c45b92"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/action-white.png",
    "revision": "13d2742979c0abdff486ffc0c2765efb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/alert-black.png",
    "revision": "09364128a6be0cc59f1fc6e9fade366f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/alert-white.png",
    "revision": "86373cf5fcb815be2adc0c06a87eb6f1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-black.png",
    "revision": "f85e79a0dcf3d65491e6bb99b40c0fda"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-l-black.png",
    "revision": "27790e799f740daee527b1ca3c9971f9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-l-white.png",
    "revision": "14b3bcde3ed10d0be18d5fcc90fe8ce0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-r-black.png",
    "revision": "5bad1e7e859eb120f4d136af29084460"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-r-white.png",
    "revision": "fec8ef05dd2b57134a284515eb5ecabf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-d-white.png",
    "revision": "a7ed65414584a456e4608c2bc3d85065"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-l-black.png",
    "revision": "ee7f9b8e2abb96a61fe8d4cf11ca7697"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-l-white.png",
    "revision": "434675e67d80715862db88c75a7df577"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-r-black.png",
    "revision": "d96c7bba4b98ec14e62790584b139a61"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-r-white.png",
    "revision": "34350abeb7bd36e979c0aa4d6e038d2d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-black.png",
    "revision": "5e086bd389bca6a7793a8741a6c6fad3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-l-black.png",
    "revision": "9891529976aef3fa1c23308dbbbe0485"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-l-white.png",
    "revision": "eb17742486f621a31bfb1aaabdc30d5c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-r-black.png",
    "revision": "25267137bba768f6f2b595398c6a2b92"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-r-white.png",
    "revision": "ce2d1de04f61355443949d6061f4ea37"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/arrow-u-white.png",
    "revision": "9f6cd65e48648b4823e236b0da1e54b0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/audio-black.png",
    "revision": "d3cfac47faf40513c646c1f16b087e88"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/audio-white.png",
    "revision": "7c90c384a65cbfef572bbdd02b9d8edb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/back-black.png",
    "revision": "0759505d2298fdee60b52b5126dfcfc6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/back-white.png",
    "revision": "e78ad3c61a492b120a7ba0a789d4b2e0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/bars-black.png",
    "revision": "d638db196907b36c3e0bfefb8a698cc8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/bars-white.png",
    "revision": "f4d15b9a0fdcf961fe8d749703b20f20"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/bullets-black.png",
    "revision": "63e8e96e2deb4d60b69a68d6d9765df8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/bullets-white.png",
    "revision": "b74986306e8ee76bd1f2a4293d56c3c4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/calendar-black.png",
    "revision": "9116cef9549b26ddc4d9e96bec5dfd41"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/calendar-white.png",
    "revision": "215a42df136361f8b54b056a0ca6ae15"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/camera-black.png",
    "revision": "434dcb1c736b2da8247a1e59372bc64b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/camera-white.png",
    "revision": "054a64f6a2886570ed734a26a804a66a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/carat-d-black.png",
    "revision": "9708c21592cabb6f7fe4272e6daa7853"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/carat-d-white.png",
    "revision": "52f8e9ceafe00b0360bce803f5236a0c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/carat-l-black.png",
    "revision": "01df9e30c853da8996684cd08c3a7917"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/carat-l-white.png",
    "revision": "32a1036e056d5a5831f6e8d40d4d1faf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/carat-r-black.png",
    "revision": "01945aeb9182966e0e02cd0cd2f74abd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/carat-r-white.png",
    "revision": "41c4ab4735f66dd007c2689a87695863"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/carat-u-black.png",
    "revision": "76904bfc235fd12caacfc2858f8e1eef"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/carat-u-white.png",
    "revision": "3bde6d2e6ab2936a25b69767de4ac7c3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/check-black.png",
    "revision": "358363d39df6c2d2e0afbad366b14231"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/check-white.png",
    "revision": "0bc57ed512131d2e4b507055552f7277"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/clock-black.png",
    "revision": "c92ab62b3c0ca2ca1ae11bcc940c20a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/clock-white.png",
    "revision": "44cffb967f09ddf5fb8d13380745f273"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/cloud-black.png",
    "revision": "c0c7bf5a98f76f252d14f1af232a0ee1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/cloud-white.png",
    "revision": "c71b429d726c0b8c94fc6dd33f885574"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/comment-black.png",
    "revision": "81a45d4b2b64e4321667542b75eb6754"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/comment-white.png",
    "revision": "0917e96ac998c0d191d7b81d880927a9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/delete-black.png",
    "revision": "fb456b3f7f0b805ac7be21d97b443f9a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/delete-white.png",
    "revision": "478fa064c1e2234032e7a3de1884f4ed"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/edit-black.png",
    "revision": "3bed8f0eeea77c23adcce4870c391286"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/edit-white.png",
    "revision": "a41a9a4e6b71ae9829dd8fa24e695be9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/eye-black.png",
    "revision": "03ce5e4016e1f8ab8d7b02a72d45e600"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/eye-white.png",
    "revision": "0bf7b7e9cb0aee2da885a86629744cf2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/forbidden-black.png",
    "revision": "fcf54d3cda520f292d34592d4ae6d9ae"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/forbidden-white.png",
    "revision": "d124846cb27f0a6e07764e114895e335"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/forward-black.png",
    "revision": "54bf8c0856e1a1b2b18fbf8161d8dadf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/forward-white.png",
    "revision": "486c47d6f12f7872c04a16a28f7ae6c3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/gear-black.png",
    "revision": "957fed4d5d46498e93cb74af8384f4b2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/gear-white.png",
    "revision": "592af245bec551ffa61392b9e363c8ee"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/grid-black.png",
    "revision": "536fe23332253922017d3145f06258a6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/grid-white.png",
    "revision": "ab90c7666595f04b9374518ece4fd0e2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/heart-black.png",
    "revision": "7e2aaea1b42b5d462a7d098d5814433a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/heart-white.png",
    "revision": "86b007f62248a968255c50b3d5c0e696"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/home-black.png",
    "revision": "3ef58401159dce7cdb4ca66bd1e1c475"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/home-white.png",
    "revision": "1c80eb5b00855d8494116db68af3242c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/info-black.png",
    "revision": "ecc9460bc8b0a3de72a6638c8fc39d36"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/info-white.png",
    "revision": "a776b029342f4ef75889d2b9853a0e59"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/location-black.png",
    "revision": "173cf9e0989ea6f0bb6254a1fc0334ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/location-white.png",
    "revision": "359f3b2435bb7ea11c9b62f46d712b2f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/lock-black.png",
    "revision": "28a57a211fa4c6a69055a91cd3e2b688"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/lock-white.png",
    "revision": "827adbd30b32a8089a39bd5a40d956ca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/mail-black.png",
    "revision": "13106c83b8c7a9e78e5d0fbcf275f027"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/mail-white.png",
    "revision": "006089860dcf971fe6f65ec3ad289e3a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/minus-black.png",
    "revision": "92cc19063926bda68541c1c6213e0637"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/minus-white.png",
    "revision": "9e2ff829356531c31e954eb48d69b1c5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/navigation-black.png",
    "revision": "f36cc2c09123d935278e9fdbe1722769"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/navigation-white.png",
    "revision": "59bdad3cbad70b98a5580f59f4b0f89d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/phone-black.png",
    "revision": "c78bd6ae6d2074f201518d5e504120d9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/phone-white.png",
    "revision": "3f351a2cf1b17acf767294695eb9a825"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/plus-black.png",
    "revision": "96410e386e61459b3bf045ae72449b72"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/plus-white.png",
    "revision": "d8256afa69d9ed42bdbeb1232acddc0e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/power-black.png",
    "revision": "d9a9cd79c18b61953483b15e78b7b6b6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/power-white.png",
    "revision": "4e785618f27780944e6d8a13fee251b0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/recycle-black.png",
    "revision": "04ae75ab4410ec64093da3b298fef31e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/recycle-white.png",
    "revision": "8a46b6ed030cee2db774928b81d1e6e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/refresh-black.png",
    "revision": "1da2deb97177b5676c80be327ddc82e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/refresh-white.png",
    "revision": "705e7dd6e46b24381e9d123be4721787"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/search-black.png",
    "revision": "8fdc32864a50e0359972f7caaa6a4fac"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/search-white.png",
    "revision": "615d54abf8ffe2159c6418996e73b86f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/shop-black.png",
    "revision": "34776eb5710390641a48b2ef933b42d8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/shop-white.png",
    "revision": "bed77b8b0aa66b98bb2c53d5ace2d736"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/star-black.png",
    "revision": "741986dbcdfb3f8e4b86a58a5de62b4e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/star-white.png",
    "revision": "f62c7807aed9d236a22b8672290f845d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/tag-black.png",
    "revision": "d5fc58dc0ecabd4e37cb41e2a8c6f871"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/tag-white.png",
    "revision": "63d500360386f0352234ea160a235650"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/user-black.png",
    "revision": "72109232660715674c269a748b6d3b94"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/user-white.png",
    "revision": "291b0ebdb48850f539026ccd24ade8ff"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/video-black.png",
    "revision": "3e9650ab48d52565ff42b9f67e1ea617"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-png/video-white.png",
    "revision": "d180c9f44b809cd008ea4c32a4450bd2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/action-black.svg",
    "revision": "67275db7ead5c13b17248764737e1941"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/action-white.svg",
    "revision": "797865c23a9a7fd58f879c06ea5f3373"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/alert-black.svg",
    "revision": "36f5ec26786ba00eb754c08e54482a45"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/alert-white.svg",
    "revision": "62b7c0f9ef04d0e883874cd17beb67f9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-black.svg",
    "revision": "8f16783cae829210adb04701c7c56e8a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-l-black.svg",
    "revision": "ee21b9e7833a9e2b379860f3a618b1e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-l-white.svg",
    "revision": "01a113d82aba147674d5c3f02a964d62"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-r-black.svg",
    "revision": "97a158a3980bc8a4ec4fb17d2f73a350"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-r-white.svg",
    "revision": "0a090129d1927e101076a432d621a6d7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-d-white.svg",
    "revision": "6edf191c7866180081b7eefedb0dba70"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-l-black.svg",
    "revision": "c8dbdfc79c8e80d1ea94b87aa3912b8e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-l-white.svg",
    "revision": "359f958a031112b9520608597719d379"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-r-black.svg",
    "revision": "00df078716e101e98d97f3716cc08ada"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-r-white.svg",
    "revision": "8185b003c91161784c2f459cd1841653"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-black.svg",
    "revision": "892fff5096355d1d137d604b2cd59a60"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-l-black.svg",
    "revision": "1db1daead125330f1a7bf3e7fe72f275"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-l-white.svg",
    "revision": "fad90887ad3b93dd743c3fe55ab10d17"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-r-black.svg",
    "revision": "0eac866257c85e1d8b09b315337a2b07"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-r-white.svg",
    "revision": "1a8f30eea2937a267e65d0074db54f15"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/arrow-u-white.svg",
    "revision": "ec482d18e3e5eca475988f736385f83b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/audio-black.svg",
    "revision": "bf7400a0a0aeb0bef6a40d17cf542c1e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/audio-white.svg",
    "revision": "79fe8db54c1bf84120a2d83a3321809f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/back-black.svg",
    "revision": "299d8fddcf7aefe01fcda1e3d36c539e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/back-white.svg",
    "revision": "28b170be258eb94dd59a5aebede55ca0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/bars-black.svg",
    "revision": "30b70e23bcdb1582a62d0ea37518c218"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/bars-white.svg",
    "revision": "b28b198349a23f1bb70adfd3c3928bec"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/bullets-black.svg",
    "revision": "8592b97a7ff92d49c4a4500825c38a24"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/bullets-white.svg",
    "revision": "28e926450152e985c4373e1573a62011"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/calendar-black.svg",
    "revision": "afb432ae012246d38cf48b40b75b4661"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/calendar-white.svg",
    "revision": "683b7091302672384f03633fae4cf8e0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/camera-black.svg",
    "revision": "bc31967f8a33cfbcbb1283910848f3d2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/camera-white.svg",
    "revision": "07c295ce297a2c08d81b85982bb7f5ce"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-d-black.svg",
    "revision": "ca571e71da5ea3b3aa366f4565c101b4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-d-white.svg",
    "revision": "44fe6b4ec96e6f324e23fc6d6906fc92"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-l-black.svg",
    "revision": "0fd1f5d1dd111f9a39d2b12d626a9538"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-l-white.svg",
    "revision": "c7f967d6d7d2cd246d3313737fb609a5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-r-black.svg",
    "revision": "bad5e7f56576d11e67fb476dfc16a413"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-r-white.svg",
    "revision": "3afee5c3be598fd31a861956308085df"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-u-black.svg",
    "revision": "5c696a49dfe8cdc1d944ff23c4ce45fa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/carat-u-white.svg",
    "revision": "2be4a9d2a9193bcdbcd53fa75130589b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/check-black.svg",
    "revision": "821dc8547ced9cc0698d0dd4ed9d06e3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/check-white.svg",
    "revision": "88eb12a3c79959eeb743b48b16d511ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/clock-black.svg",
    "revision": "009a91daa40bc2d5f8814d653f8434ad"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/clock-white.svg",
    "revision": "56cf9aa2dc1c162096903ac41dff13fa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/cloud-black.svg",
    "revision": "b5fa9f83217d9c7d8a9b260f8702aece"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/cloud-white.svg",
    "revision": "97cb950227497b3ce36f0d342e6dab86"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/comment-black.svg",
    "revision": "1bebdcbea0e1aa92b8a003f25dae320c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/comment-white.svg",
    "revision": "1c88d821a8088bf13e11c42f51a2cb79"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/delete-black.svg",
    "revision": "a47df270172eb9e4aa2f53a8d49a747c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/delete-white.svg",
    "revision": "1545461b20b7e130257e9d8a3fbbe9fe"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/edit-black.svg",
    "revision": "aa68f894234d3877204b56a1f29f56df"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/edit-white.svg",
    "revision": "6ef800ecc6836e5572f29941e2c94883"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/eye-black.svg",
    "revision": "4b5188538a87aff30ca0a8ae073448bf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/eye-white.svg",
    "revision": "815468019d233b42706fe5accb6d4634"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/forbidden-black.svg",
    "revision": "0f1f6127b30576bef03089ed4a54963c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/forbidden-white.svg",
    "revision": "bf4eb7e1a4f5a7f2eb92afa3c0caa5cf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/forward-black.svg",
    "revision": "93d89c376ee9fc61eaddc8acc88f79bf"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/forward-white.svg",
    "revision": "7dce88ed7e26c973e49d6b5d63c69438"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/gear-black.svg",
    "revision": "83717679bfeec2bac44f61bf2c2fdb07"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/gear-white.svg",
    "revision": "d973b195dd62c5f30900ec2ddbeeaf15"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/grid-black.svg",
    "revision": "729b4b585cd8008e420b9c7288d473f4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/grid-white.svg",
    "revision": "631da228c4a3f8e9cee2b8bdb16f99c7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/heart-black.svg",
    "revision": "8946674e6081a099c5003e12d014b727"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/heart-white.svg",
    "revision": "7d8835566b2c5181f98cc3619317d2d2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/home-black.svg",
    "revision": "c0f3930a0ba1e46c3aedb4d422dc674d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/home-white.svg",
    "revision": "315a466d71a7357747511dec557827b4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/info-black.svg",
    "revision": "293e7f6124a6f6c8e57d94523d9b3aaa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/info-white.svg",
    "revision": "31af5be157e2fa395cd31cdf2cfb2d19"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/location-black.svg",
    "revision": "f9f9c4a0b82be059f8ea20f3e5324a84"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/location-white.svg",
    "revision": "5e8eefb85b6d22fe477b32bd82a8376a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/lock-black.svg",
    "revision": "dcc507ffc396bc2a851fe4d10cffe207"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/lock-white.svg",
    "revision": "7b91f4c76a72fa47314a629de5afd2d9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/mail-black.svg",
    "revision": "72a01ba4327cf1f0b14738d9d6950da6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/mail-white.svg",
    "revision": "4e89f20bc80df577d2b306afbe3da21f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/minus-black.svg",
    "revision": "c8a533902d2d8346b16ec3056a24215d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/minus-white.svg",
    "revision": "51ad8ba2fffae02ba35ea6d732fdf49c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/navigation-black.svg",
    "revision": "65a0b299b9ea5401717848c88520ea26"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/navigation-white.svg",
    "revision": "37eb89d6300e305be01a560fcecc551f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/phone-black.svg",
    "revision": "f62c567527b2b5e0a346b831a8731de6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/phone-white.svg",
    "revision": "bee327d659d00c409047ca9004978844"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/plus-black.svg",
    "revision": "242deb48861062f78e2cc4c19f9cfe75"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/plus-white.svg",
    "revision": "472f41b23eed8edfcd9524a02f6fd3b1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/power-black.svg",
    "revision": "01f5e002762fbd375ca25f096b0a459f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/power-white.svg",
    "revision": "2efec04180b4d9b8933bbe692b1abdf8"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/recycle-black.svg",
    "revision": "42d586529aff8f677f93c2bf75f9f10c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/recycle-white.svg",
    "revision": "bcf1c2ef6444eff7e84138ba066c6419"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/refresh-black.svg",
    "revision": "111f67f8800111970f0684f37de60d28"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/refresh-white.svg",
    "revision": "d17451ae1ab9ce9b60b10cae760c5de1"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/search-black.svg",
    "revision": "a33a2d282639e95496f7b0ba743b8dd3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/search-white.svg",
    "revision": "67ec6b224fd71699bad087b88fa3884b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/shop-black.svg",
    "revision": "dd3498094e4587df4d2f93f46fbfb56d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/shop-white.svg",
    "revision": "35c5498ca57890e0763d000147e39dca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/star-black.svg",
    "revision": "028a29b556652a25dc9f6713c8ead3a7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/star-white.svg",
    "revision": "cc0a9ecae004d7ae84945a1417cdc356"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/tag-black.svg",
    "revision": "2f00ae8c1629d9b78e8b0a3a6e524aa5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/tag-white.svg",
    "revision": "c1bd8cf3fa1f28b8b12aafa9ebcc41ec"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/user-black.svg",
    "revision": "b1450949596cf32dbd0677dea1501b85"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/user-white.svg",
    "revision": "7dab217ef0edb74466854f49a5e7aebd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/video-black.svg",
    "revision": "406a4bc63094ceb5e3655c8f28318c88"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/js/jquery.mobile-1.4.5/images/icons-svg/video-white.svg",
    "revision": "322d59e56994f993a42bcede51344a16"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/clear_night.png",
    "revision": "352e2036ab6298c8fdf5d2d59c7b148a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/clear.png",
    "revision": "d8356ac39feb7d603276090c61e65b2c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/cloudy_night.png",
    "revision": "062070e75b9b690cdde7e83a51066a49"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/cloudy.png",
    "revision": "c819e95a6f14e0774dbac47907dc1f43"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/hazy.png",
    "revision": "2f34a77d41e52538bf57f58d455bf9bc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/partlycloudy_night.png",
    "revision": "9ae9bbcc68f44ce083ac9b02e5f1db02"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/partlycloudy.png",
    "revision": "fc7a2bf1fa0e8d58eb2b2536e55569fa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/rain.png",
    "revision": "a3f53cb78140bd1db6f4e3cec48723e6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/scatteredclouds.png",
    "revision": "ebf405ed6d6345efbea3dbf042f61daa"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/showerrain_night.png",
    "revision": "488025aa761e2dcfee3e1f0c35503de7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/showerrain.png",
    "revision": "0b840d78d2f30e0192b17301e5c00c52"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/snow_night.png",
    "revision": "24ffc4012742b17ebc595d2ac9e5c76e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/snow.png",
    "revision": "7a79d4ce3786b06cd073def1bbd5d22b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/thunderstorms.png",
    "revision": "ee733ab58b64c6950d5083eeda9c3c71"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/unknown.png",
    "revision": "e0769259d1ae9466521cabdbc4a7add2"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/weather-rainy.png",
    "revision": "08d69d5dbdf991ac2fc19109e694f5ca"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/weather-sunset-down.png",
    "revision": "5dfe1b10792a0dc80c4d595a9573091b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/weather-sunset-up.png",
    "revision": "8c18007638d4f1bf05ce3f88133b6319"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/environment/weather/images/weather-windy.png",
    "revision": "61ec2c123e1c034460cb33352e736f4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/battery_level_0.png",
    "revision": "f549d4cdc101995ce40b1240133a53ba"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/battery_level_10.png",
    "revision": "81795b12e124388195809653f0418c26"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/battery_level_100.png",
    "revision": "130fd53829a548456f6af250b11b4a10"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/battery_level_20.png",
    "revision": "dde9a824e5685ecfe2bb4a006fca6061"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/battery_level_40.png",
    "revision": "09665d3309e126b637bc54cdb6e73e9d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/battery_level_60.png",
    "revision": "3fb9c62ec2131cca8ded24d1fd849eb0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/battery_level_80.png",
    "revision": "bbec5d9010c19ed04b1189c8cef64195"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/browser_audio.png",
    "revision": "9053c522d75100c5c3ffe2d3cd62bf4b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/browser_folder.png",
    "revision": "499c3d727841444f9eba536c39c94825"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/browser_image.png",
    "revision": "51606307151ee9999250683f728e9d3d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/browser_video.png",
    "revision": "ea9e329d9dcb50897f28168084eaf159"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/camera.png",
    "revision": "4f7ebec124ff9ec892ed5bc0d3c4477c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/dimmer_off.png",
    "revision": "45fe720e1f5784a00e63f0d3ad9429e7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/dimmer_on.png",
    "revision": "cc50c76ffa33dc4c4c5eb3c161b95389"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/door_closed.png",
    "revision": "b90839ede181bd033a37aad0a21daa4c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/door_open.png",
    "revision": "8ac6268f3d5eb813069c5b876fc79fbd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/fan.png",
    "revision": "d32959d1a7beb53194cc2696a105f62a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/flag-black.png",
    "revision": "174036bfa10a6d48530b63bc4d9372d3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/flag-blue.png",
    "revision": "4effc756f1f39c44d7a366719afae92a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/flag-green.png",
    "revision": "5695494c8e30331eed099d7c57c7ba7c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/flag-red.png",
    "revision": "d150ea99e689c7c4581cf7c15a017837"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/flag-yellow.png",
    "revision": "1d3daf0f0a0b67112f1118bafdadd885"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/airpurifier.png",
    "revision": "34d34fb38e931f5c9f8d2c9aae3ca8f5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/aladdinlamp.png",
    "revision": "6a6a9b68adaaf6dcd5e291718c2cf582"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/appliance.png",
    "revision": "548581a50e1eff313d1b80f89c598736"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/blender.png",
    "revision": "68c8753a3b9faf1a249ed2d74ba23d29"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/blinds.png",
    "revision": "dab9a2fa56b1598c44b3b47c485bffd9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/coffee_machine.png",
    "revision": "228e362bb8e3ac358155363a35e81116"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/colorbulbs.png",
    "revision": "6c07ddc8cebfc5e3d70b1f498efa124f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/computer_01.png",
    "revision": "f3cb7458ce29dbf81cd1050e3c3715ba"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/computer_02.png",
    "revision": "3a0b4a8336adc6e23a8d92db50ee2b9e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/curtains.png",
    "revision": "ea4a1bfc6b709d083908ca2b1c21ea8e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/display.png",
    "revision": "c810b04c30dd75a373e901e91a18645c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/door.png",
    "revision": "0a8572ce37036fa25b33cb60abbd5e09"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/fan_01.png",
    "revision": "d32959d1a7beb53194cc2696a105f62a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/fan_02.png",
    "revision": "003bbd6e1aedb5d40fa576066d46e6ea"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/fan_03.png",
    "revision": "2d2a1515a2ed875dec527b3ffd7e17ab"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/flood_sensor.png",
    "revision": "f831fa808006dfab4a116e55d2b43f2c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/garden_light.png",
    "revision": "2ab00ec993e3ae847f4a5b3efaaf94fd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/heater_01.png",
    "revision": "ea50c2dd8a8afac08867e7aa3956f888"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/heater_02.png",
    "revision": "232e55bfe2cd8579003e8f4b55d7ba54"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/hifi.png",
    "revision": "99363b5e373509ec2a64ef87d4c0c7df"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/lamp_01.png",
    "revision": "a335ca824938fd4f163613e7dfb420e5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/lamp_02.png",
    "revision": "c6eda45c6f3a61ce788f389e8fe3206b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/lamp_03.png",
    "revision": "9eec4fb641dd3a051d3d4ee82949f405"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/lamp_04.png",
    "revision": "be9ed5e89537bc20f21a02d83d9a6190"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/lavalamp.png",
    "revision": "9b8f5c586d71355e38133c3a78eeb307"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/oven.png",
    "revision": "5621369f9719dc21941aff292ade398b"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/printer_fax.png",
    "revision": "0c7029c74bdeeb2468d19acfcd4bbd1f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/printer.png",
    "revision": "679e93435632607d000ec451d9f1679e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/projector.png",
    "revision": "515fa33446037bd651a105b312d23f1e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/radio_01.png",
    "revision": "aa8a782eecd4a0126a9e77e1bcb45660"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/radio_02.png",
    "revision": "73d069e27af0bab516a4033e117782a5"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/radio_03.png",
    "revision": "9dea1203c0dfbe3ee3842a8d4d80eb8f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/refrigerator_washing.png",
    "revision": "ae0aaeed10b09c144504a7e52763cdc0"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/refrigerator.png",
    "revision": "05847bfca2376f11f4eec1881162f3a3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/robot.png",
    "revision": "2581b78b6a1c3f1d0169334e4e3d1abc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/shader.png",
    "revision": "636298fb30e5ca4491988a7c59443c63"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/siren.png",
    "revision": "cef6d8baab714309ad1316e06982b084"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/smoke_sensor.png",
    "revision": "42bc39c42e1be3204ca92e3bdb127da6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/socketplug.png",
    "revision": "c53946eca64c5dad87e1e2fbcc126e0c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/speaker.png",
    "revision": "dcd189b5681ec4ac09d634883b621b34"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/speakers.png",
    "revision": "abe96861ec5820bb16a7ecb580873ab6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/television_01.png",
    "revision": "ec57a2772e68308bdc4490c36cb449af"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/television_02.png",
    "revision": "da3e1f5161344b316c35b90878749ad4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/temperature.png",
    "revision": "4cf6cba4e342a31cdc5193876ed9cda6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/toaster_01.png",
    "revision": "f99b9e822ad13e1986d8cfeff1d6147c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/toaster_02.png",
    "revision": "3c4143a8a1d5421f59b4d1d26d494255"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/icons/washingmachine.png",
    "revision": "296a7e6e5f1218942e71c02597ab3cd4"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/light_off.png",
    "revision": "45fe720e1f5784a00e63f0d3ad9429e7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/light_on.png",
    "revision": "cc50c76ffa33dc4c4c5eb3c161b95389"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/link.png",
    "revision": "ec5351c35610eee8a24080f1d69c006d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/luminance.png",
    "revision": "58f37459c0c0c44cae221a5bdd241279"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/media_mute.png",
    "revision": "a54df5172382eb9d36d6dde8d319c14f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/media_next.png",
    "revision": "1dc6adc02d809d29ef27556630e978cb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/media_pause.png",
    "revision": "4cd9551f627214b8f9b5337a82866dfe"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/media_play.png",
    "revision": "11a5297106e0d9eb54a7711d29038f95"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/media_previous.png",
    "revision": "87427514f5978981b1735d372ebbe77a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/media_receiver.png",
    "revision": "e74c354cefece23b41fd0ed4ed89138d"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/media_stop.png",
    "revision": "5737294b961da384931b49d2f5911d6f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/media_unmute.png",
    "revision": "a27774d5c762ee7469da1a765984db46"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/media.png",
    "revision": "bbadecdb0efd2aed7d3cbda166ae8140"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/power.png",
    "revision": "d7df1fd0c2c4eac14b96f34412cc7b6c"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/program.png",
    "revision": "4b3a0e92d5ec07e3ad449633ad35d7c9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/securitysystem.png",
    "revision": "1cad8715333087d83ec73490cc82fddc"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/sensor.png",
    "revision": "25d2249d4ed2b18b46c5799f287a0abb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/shutters_closed.png",
    "revision": "8b2fa4f700b0eee2ce3fa34433f138a7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/shutters_open.png",
    "revision": "d4936399b3d44d160dbd64f868292e6f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/siren_off.png",
    "revision": "0c69ef90f1f86599c4c31be1580fcd2f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/siren_on.png",
    "revision": "0253d49f30b9cd77ad1e03192e3540c7"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/status.png",
    "revision": "21654e45f77946496dc8e652176524c9"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/switch_off.png",
    "revision": "77add372abbc2e406a303de10d894963"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/switch_on.png",
    "revision": "d6f89fb57e42d4521b82e30a648bee5f"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/temperature.png",
    "revision": "4cf6cba4e342a31cdc5193876ed9cda6"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/therm_cool.png",
    "revision": "8b93aef0fa6c7c3b504274065e35af05"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/therm_fan.png",
    "revision": "c869f83424017bd1e7144413d68b6408"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/therm_heat.png",
    "revision": "68447a765b21cee224c336eccf27292e"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/unknown.png",
    "revision": "7d55198b9d9dfc4defc1a325cbc4fbd3"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/wireless.png",
    "revision": "908bd438d28229f5e7bebc7c021a548a"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/wu_flurries.gif",
    "revision": "1a46208fea4c8fbaa8869d6446b39051"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/wu_logo.png",
    "revision": "34a124fae54889921f4a28cba89e61fd"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/wu_partlysunny.gif",
    "revision": "5159136e327002197d27e096e20c0cfb"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/wu_sunny.gif",
    "revision": "4f3663490f4cfa4863a3788837836e53"
  },
  {
    "url": "src/HomeGenie.Net461/bin/Debug/html/pages/control/widgets/homegenie/generic/images/wu_tstorms.gif",
    "revision": "289b3fc4be0a75c9b8cc2d5f5e17b86f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ cacheName: "images", plugins: [new workbox.expiration.Plugin({"maxEntries":50,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/\.(?:html|json|js|css)$/, workbox.strategies.cacheFirst({ cacheName: "default", plugins: [new workbox.expiration.Plugin({"maxEntries":50,"purgeOnQuotaError":false})] }), 'GET');
