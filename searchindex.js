Search.setIndex({docnames:["README","api","index","refund","usage"],envversion:53,filenames:["README.md","api.md","index.md","refund.md","usage.md"],objects:{"clove.network":{base:[1,0,0,"-"]},"clove.network.base":{BaseNetwork:[1,1,1,""]},"clove.network.base.BaseNetwork":{bitcoin_based:[1,2,1,""],default_symbol:[1,2,1,""],ethereum_based:[1,2,1,""],get_network_by_symbol:[1,3,1,""],is_test_network:[1,3,1,""],name:[1,2,1,""],networks:[1,2,1,""],set_symbol_mapping:[1,3,1,""],symbols:[1,2,1,""],testnet:[1,2,1,""]},"clove.network.bitcoin":{base:[1,0,0,"-"],contract:[1,0,0,"-"],transaction:[1,0,0,"-"],utxo:[1,0,0,"-"],wallet:[1,0,0,"-"]},"clove.network.bitcoin.base":{BitcoinBaseNetwork:[1,1,1,""]},"clove.network.bitcoin.base.BitcoinBaseNetwork":{atomic_swap:[1,4,1,""],audit_contract:[1,4,1,""],base58_prefixes:[1,2,1,""],bitcoin_based:[1,2,1,""],blacklist_nodes:[1,2,1,""],broadcast_transaction:[1,4,1,""],capture_messages:[1,4,1,""],connect:[1,4,1,""],connection:[1,2,1,""],create_connection:[1,4,1,""],deserialize_raw_transaction:[1,5,1,""],extract_secret:[1,3,1,""],extract_secret_from_redeem_transaction:[1,3,1,""],filter_blacklisted_nodes:[1,4,1,""],get_current_fee_per_kb:[1,3,1,""],get_current_node:[1,4,1,""],get_new_wallet:[1,3,1,""],get_nodes:[1,5,1,""],get_utxo:[1,3,1,""],get_wallet:[1,3,1,""],is_valid_address:[1,3,1,""],message_start:[1,2,1,""],name:[1,2,1,""],nodes:[1,2,1,""],port:[1,2,1,""],protocol_version:[1,2,1,""],publish:[1,4,1,""],reset_connection:[1,4,1,""],seeds:[1,2,1,""],send_inventory:[1,4,1,""],send_message:[1,4,1,""],send_ping:[1,4,1,""],send_pong:[1,4,1,""],send_verack:[1,4,1,""],send_version:[1,4,1,""],split_message:[1,3,1,""],switch_params:[1,3,1,""],symbols:[1,2,1,""],terminate:[1,4,1,""],update_blacklist:[1,4,1,""],version_packet:[1,4,1,""]},"clove.network.bitcoin.contract":{BitcoinContract:[1,1,1,""]},"clove.network.bitcoin.contract.BitcoinContract":{get_contract_utxo:[1,4,1,""],is_valid_contract_script:[1,5,1,""],participate:[1,4,1,""],redeem:[1,4,1,""],refund:[1,4,1,""],show_details:[1,4,1,""],transaction_address:[1,2,1,""]},"clove.network.bitcoin.transaction":{BitcoinAtomicSwapTransaction:[1,1,1,""],BitcoinTransaction:[1,1,1,""]},"clove.network.bitcoin.transaction.BitcoinAtomicSwapTransaction":{add_fee:[1,4,1,""],build_atomic_swap_contract:[1,4,1,""],build_outputs:[1,4,1,""],generate_hash:[1,4,1,""],init_hours:[1,2,1,""],participate_hours:[1,2,1,""],set_locktime:[1,4,1,""],show_details:[1,4,1,""],validate_address:[1,4,1,""]},"clove.network.bitcoin.transaction.BitcoinTransaction":{add_fee:[1,4,1,""],add_fee_and_sign:[1,4,1,""],address:[1,2,1,""],build_outputs:[1,4,1,""],calculate_fee:[1,4,1,""],create_unsigned_transaction:[1,4,1,""],publish:[1,4,1,""],raw_transaction:[1,2,1,""],show_details:[1,4,1,""],sign:[1,4,1,""],size:[1,2,1,""],validate_address:[1,4,1,""]},"clove.network.bitcoin.utxo":{Utxo:[1,1,1,""]},"clove.network.bitcoin.utxo.Utxo":{outpoint:[1,2,1,""],parsed_script:[1,2,1,""],tx_in:[1,2,1,""],unsigned_script_sig:[1,2,1,""]},"clove.network.bitcoin.wallet":{BitcoinWallet:[1,1,1,""]},"clove.network.bitcoin.wallet.BitcoinWallet":{decrypt_private_key:[1,5,1,""],encrypt_private_key:[1,5,1,""],get_private_key:[1,4,1,""],get_public_key:[1,4,1,""]},"clove.network.ethereum":{base:[1,0,0,"-"],contract:[1,0,0,"-"],transaction:[1,0,0,"-"],wallet:[1,0,0,"-"]},"clove.network.ethereum.base":{EthereumBaseNetwork:[1,1,1,""]},"clove.network.ethereum.base.EthereumBaseNetwork":{approve_token:[1,4,1,""],atomic_swap:[1,4,1,""],audit_contract:[1,4,1,""],contract_address:[1,2,1,""],deserialize_raw_transaction:[1,5,1,""],ethereum_based:[1,2,1,""],extract_method_id:[1,5,1,""],extract_secret_from_redeem_transaction:[1,4,1,""],get_method_name:[1,4,1,""],get_raw_transaction:[1,5,1,""],get_token_by_address:[1,4,1,""],get_token_by_attribute:[1,3,1,""],get_token_by_symbol:[1,3,1,""],get_token_from_token_contract:[1,4,1,""],get_transaction:[1,4,1,""],get_wallet:[1,3,1,""],infura_endpoint:[1,2,1,""],infura_network:[1,2,1,""],is_valid_address:[1,5,1,""],method_id:[1,5,1,""],name:[1,2,1,""],publish:[1,4,1,""],sign:[1,5,1,""],sign_raw_transaction:[1,3,1,""],symbols:[1,2,1,""],token_abi:[1,2,1,""],token_class:[1,2,1,""],tokens:[1,2,1,""],unify_address:[1,5,1,""],value_from_base_units:[1,5,1,""],value_to_base_units:[1,5,1,""]},"clove.network.ethereum.contract":{EthereumContract:[1,1,1,""]},"clove.network.ethereum.contract.EthereumContract":{find_redeem_transaction:[1,4,1,""],is_eth_contract:[1,2,1,""],is_initiate:[1,2,1,""],is_token_contract:[1,2,1,""],participate:[1,4,1,""],redeem:[1,4,1,""],refund:[1,4,1,""],show_details:[1,4,1,""]},"clove.network.ethereum.transaction":{EthereumAtomicSwapTransaction:[1,1,1,""],EthereumTokenApprovalTransaction:[1,1,1,""],EthereumTokenTransaction:[1,1,1,""],EthereumTransaction:[1,1,1,""]},"clove.network.ethereum.transaction.EthereumAtomicSwapTransaction":{init_hours:[1,2,1,""],participate_hours:[1,2,1,""],set_contract:[1,4,1,""],set_locktime:[1,4,1,""],set_secrets:[1,4,1,""],set_token_contract:[1,4,1,""],show_details:[1,4,1,""]},"clove.network.ethereum.transaction.EthereumTokenApprovalTransaction":{show_details:[1,4,1,""]},"clove.network.ethereum.transaction.EthereumTokenTransaction":{show_details:[1,4,1,""]},"clove.network.ethereum.transaction.EthereumTransaction":{publish:[1,4,1,""],raw_transaction:[1,2,1,""],show_details:[1,4,1,""],sign:[1,4,1,""]},"clove.network.ethereum.wallet":{EthereumWallet:[1,1,1,""]},"clove.utils":{bitcoin:[1,0,0,"-"],external_source:[1,0,0,"-"],hashing:[1,0,0,"-"],logging:[1,0,0,"-"],network:[1,0,0,"-"],search:[1,0,0,"-"]},"clove.utils.bitcoin":{auto_switch_params:[1,6,1,""],from_base_units:[1,6,1,""],to_base_units:[1,6,1,""]},"clove.utils.external_source":{clove_req:[1,6,1,""],clove_req_json:[1,6,1,""],extract_scriptsig_blockcypher:[1,6,1,""],extract_scriptsig_cryptoid:[1,6,1,""],extract_scriptsig_from_redeem_transaction:[1,6,1,""],extract_scriptsig_raven:[1,6,1,""],find_redeem_token_transaction:[1,6,1,""],find_redeem_transaction:[1,6,1,""],get_balance:[1,6,1,""],get_balance_blockcypher:[1,6,1,""],get_balance_cryptoid:[1,6,1,""],get_current_fee:[1,6,1,""],get_last_transactions:[1,6,1,""],get_transaction:[1,6,1,""],get_transaction_size:[1,6,1,""],get_utxo_from_api:[1,6,1,""]},"clove.utils.hashing":{generate_secret_with_hash:[1,6,1,""]},"clove.utils.network":{generate_params_object:[1,6,1,""]},"clove.utils.search":{get_network_by_symbol:[1,6,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","classmethod","Python class method"],"4":["py","method","Python method"],"5":["py","staticmethod","Python static method"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:classmethod","4":"py:method","5":"py:staticmethod","6":"py:function"},terms:{"0100000001505cab5a4fb315145f284ede8c43b2af3fa6557b1bfe54e46037533e6d1a5c5600000000fd0001483045022100d63353332b762551f3278ea02ab25746ddc78aae08c73cfd81e7871b54ebee88022068fa0e3b6578efbfed07373b2147b190ebe6466d2cdbed15cc2eecb0f218837001410459cdb91eb7298bc2578dc4e7ac2109ac3cfd9dc9818795c5583e720d2114d540724bf26b4541f683ff51968db627a04eecd1f5cff615b6350dad5fb595f8adf4209a2cfc32611dbd3ac3261cd23622223e85e6c6575852d20e031c1333b9070bc2514c5163a61498ff8f419c57646b3e056514185a97d15a7f086e8876a91485c0522f6e23beb11cc3d066cd20ed732648a4e667045d23db5ab17576a914621f617c765c3caa5ce1bb67f6a3e51382b8da296888ac000000000128e50e00000000001976a91485c0522f6e23beb11cc3d066cd20ed732648a4e688ac00000000":4,"01000000015322ad6edd25cc9f2f7dbec73b4d1b123b8abe7fc0e4acb1ec6bf112e1b5b9a5010000008b483045022100c4efbe3a31061df474ec8230428b6f615bc97c0e625a747f22eeeffac6efdbce02200946d6638d7d68086ba478c2280d6669934d63f09233482afcd8634937af63b701410431ab07973bbb5dbc6b7422fc7322abb5df15f77694c0b15b09a325996af47ddd887c7eaa72c656a71fcb333068956de7b3e2f15deaafc1d9285d779ca1b6a3f6000000000290ca04000000000017a9140ca29b3066cde980ffe06268f8bf1902f57ab4dd878f5c0f00000000001976a914621f617c765c3caa5ce1bb67f6a3e51382b8da2988ac00000000":3,"0100000001b7fe8bb72f834ae18054b3df6cf1a1c50921cfb9f5913c78856957537cd5bcab00000000eb4830450221008a1974702c78cdf9067af92d57643641b9b99388fa86a35ab6121348f75b2f7a02202cff4e470e3088fbbde26c71150641428511dd6188e9fdd4ec29f507bde8f50401410431ab07973bbb5dbc6b7422fc7322abb5df15f77694c0b15b09a325996af47ddd887c7eaa72c656a71fcb333068956de7b3e2f15deaafc1d9285d779ca1b6a3f6004c5d63a820b02f390cf0c6d445f8f3a730b2e9fce5dff10da4b47a523d2fd7bf73d8a7a7028876a91485c0522f6e23beb11cc3d066cd20ed732648a4e66704b75db25ab17576a914621f617c765c3caa5ce1bb67f6a3e51382b8da296888ac0000000001e3ba0300000000001976a914621f617c765c3caa5ce1bb67f6a3e51382b8da2988acb75db25a":3,"0100000001d205fe1a9bd623a1155d15c4fc90121ced792aa4131ccb94acf0b293700e925d00000000ea4730440220112731937e6e0a0f5c366e667961ba8d41bc6fd980055c0c911f6dff3cb857d0022033751626806881058120118915a0a7f20280f53952460fff0e2b4c547cc5a7690141044fbe9cf6ef9bf4a13a693ee1d431eb700a592e8097619e0cfe82aff2a5c231e7154e464e4ec94201007b403b6de9a5819b0bc31eef0741c4fe6e932bca6d9cca004c5d63a820b02f390cf0c6d445f8f3a730b2e9fce5dff10da4b47a523d2fd7bf73d8a7a7028876a9141a376f6634e41c22b28bc9ef3336a623717083a467047d0eb15ab17576a9142b6a3314e8fcf1f1fd6b4d70b112bd5a192850576888ac0000000001a0d6c400000000001976a9142b6a3314e8fcf1f1fd6b4d70b112bd5a1928505788ac7d0eb15a":3,"0100000001d205fe1a9bd623a1155d15c4fc90121ced792aa4131ccb94acf0b293700e925d010000008a473044022003d3f4216fdc08be20c2d828227d8652e89dcf20566719a561265d3886c0fda7022035fb05dd2bc1b9e325837af29b0e7687815e5544f643a24480aa09ddfc10cb460141044fbe9cf6ef9bf4a13a693ee1d431eb700a592e8097619e0cfe82aff2a5c231e7154e464e4ec94201007b403b6de9a5819b0bc31eef0741c4fe6e932bca6d9cca0000000002005a62020000000017a914f8c050e6c124b3d0b693779b418dec5f40b8188087201b0b0a000000001976a9142b6a3314e8fcf1f1fd6b4d70b112bd5a1928505788ac00000000":4,"0100000001daee049a9f9822743a0691ae4f51768e3b4431f5f6abe08da8d8f7afd048e6ff010000008b483045022100c316eb713d282337807de04cdbd67327d78b5deb850f831f0f9aa5c06aa6ab7902203777ed3b22ab88927b92a70b621f44342a6159f10f5a3f456a9d8393e06e9e440141044fbe9cf6ef9bf4a13a693ee1d431eb700a592e8097619e0cfe82aff2a5c231e7154e464e4ec94201007b403b6de9a5819b0bc31eef0741c4fe6e932bca6d9cca0000000002405dc6000000000017a91492e189107196d882ed245bf224940a21a23c5c0187c0fb6e0c000000001976a9142b6a3314e8fcf1f1fd6b4d70b112bd5a1928505788ac00000000":3,"0100000001e4f0bb83bc3b52f921ad9d064768ba1702d9ec92befa3529a17e5163c90a11a000000000fd0001483045022100bf0dec5ab03d024147bc26df33a64f2389c4647fc1f9a92e93575cb5f2ff5081022060a54dd5135bc38eb6e75c65ec4e47efa08e7298fed83757db31bd53619a17d501410447408e366d0e979101f776ab10753091b0b62ba9aa609d006263959e030fb2d96e054c1f976a8cddcee5e1a95022cf289be89577ca348c893223d2e648de1abb209a2cfc32611dbd3ac3261cd23622223e85e6c6575852d20e031c1333b9070bc2514c5163a61498ff8f419c57646b3e056514185a97d15a7f086e8876a9141a376f6634e41c22b28bc9ef3336a623717083a46704ef6bdc5ab17576a9142b6a3314e8fcf1f1fd6b4d70b112bd5a192850576888ac000000000160d36002000000001976a9141a376f6634e41c22b28bc9ef3336a623717083a488ac00000000":4,"0100000002be1c074d0e9e119b2099aa792ebda8c0c4a432a22c79490634a556da38435f67000000008a4730440220042d58c03f0db46727770a4c81543ee90294b87ea606baa2ff589d2dd5857c5c02206c5a8ea6e6579191ed3485523a8b27d28db666205c2a2d8477764cc6c6b913e801410431ab07973bbb5dbc6b7422fc7322abb5df15f77694c0b15b09a325996af47ddd887c7eaa72c656a71fcb333068956de7b3e2f15deaafc1d9285d779ca1b6a3f600000000e930c516c102222acd2439a5b4fe462188c56e8e236588c53a689e2dbf86b6dd010000008a473044022043154c8c7935bff74743551863169fe8617a4c1043894786b4a7d14c46f68905022040431412a306ca13d4bd791ae3cd07e9e6eaa6982d105b07d0cd52a05fc7b1fd01410431ab07973bbb5dbc6b7422fc7322abb5df15f77694c0b15b09a325996af47ddd887c7eaa72c656a71fcb333068956de7b3e2f15deaafc1d9285d779ca1b6a3f6000000000240420f000000000017a914f849d56da5d65cc96764c25fbcd79161f170f67a872e590400000000001976a914621f617c765c3caa5ce1bb67f6a3e51382b8da2988ac00000000":4,"0cd90567497823097d03464b4b2d08dd659f1c5621dd55e9540bc9bcd3e191ec":4,"0x095ea7b30000000000000000000000007657ca877fac31d20528b473162e39b6e152fd2e00000000000000000000000000000000000000000000003635c9adc5dea00000":4,"0x40b8d435ff4bfbb202aed75dfc87f64e0d3da3838581b6635ae615e0454bd4fc":4,"0x4cc2308652423a1b05712def62fe5183dfa507bd033941bdb40b56a258760840":4,"0x4fd41289b816f6122e59a0759bd10441ead75d550562f4b3aad2fddc56eb3274":4,"0x52f50db7000000000000000000000000000000000000000000000000000000005acde5c48cebcb1af6fa5fddeb091f61f0af1c49a6de9922000000000000000000000000000000000000000000000000d867f293ba129629a9f9355fa285b8d3711a909200000000000000000000000053e546387a0d054e7ff127923254c0a679da6dbf00000000000000000000000000000000000000000000003635c9adc5dea00000":4,"0x53e546387a0d054e7ff127923254c0a679da6dbf":4,"0x7657ca877fac31d20528b473162e39b6e152fd2":4,"0x7f5a84b233c8":1,"0x80addbc1b1ff0cf32949c78cde0dc4347f1a81e7f510fd266aa934523c92c2c1":4,"0x999f348959e611f1e9eab2927c21e88e48e6ef45":4,"0x9f7e5402ed0858ea0c5914d44b900a42c89547b8":4,"0xc9b2bf9b67dcfea39dea71b3416922adfcae23f6410be7d109fb9df2e1c0695f":4,"0xd867f293ba129629a9f9355fa285b8d3711a9092":4,"0xeb8ae1ed000000000000000000000000000000000000000000000000000000005acca1d68cebcb1af6fa5fddeb091f61f0af1c49a6de9922000000000000000000000000000000000000000000000000999f348959e611f1e9eab2927c21e88e48e6ef45":4,"0xeda1122cc037026e2d0f3901c797d2414df30a4ce700d18055925f416e575635c5c2b7ac":4,"1593f8ac14340e23d629342881e188b848af3dc1b7909791aacde53d48a1e697":4,"3582597e1c30759027d9e53843f79528e0f4f0ddc458449f9bb824dabb53ba14":3,"376d4e7a476d576b70554a57504f32676569727654687463574a44356e664d72314d35744b50637743374f7a777a436257366c76514541497442316d66764733":3,"3f5em2t4pjd5parpjs2qenpgl7qdvk2wyc":3,"3qnhtuaj85wwff1rxpplde4cjwykcjyliv":4,"42394cedfaeecdbfce788ea3291784177f4f28c83f038adca3864db0c48869ab":4,"483045022100d63353332b762551f3278ea02ab25746ddc78aae08c73cfd81e7871b54ebee88022068fa0e3b6578efbfed07373b2147b190ebe6466d2cdbed15cc2eecb0f218837001410459cdb91eb7298bc2578dc4e7ac2109ac3cfd9dc9818795c5583e720d2114d540724bf26b4541f683ff51968db627a04eecd1f5cff615b6350dad5fb595f8adf4209a2cfc32611dbd3ac3261cd23622223e85e6c6575852d20e031c1333b9070bc2514c5163a61498ff8f419c57646b3e056514185a97d15a7f086e8876a91485c0522f6e23beb11cc3d066cd20ed732648a4e667045d23db5ab17576a914621f617c765c3caa5ce1bb67f6a3e51382b8da296888ac":4,"565c1a6d3e533760e454fe1b7b55a63fafb2438cde4e285f1415b34f5aab5c50":4,"5d920e7093b2f0ac94cb1c13a42a79ed1c1290fcc4155d15a123d69b1afe05d2":[3,4],"63a61498ff8f419c57646b3e056514185a97d15a7f086e8876a9141a376f6634e41c22b28bc9ef3336a623717083a46704ef6bdc5ab17576a9142b6a3314e8fcf1f1fd6b4d70b112bd5a192850576888ac":4,"63a61498ff8f419c57646b3e056514185a97d15a7f086e8876a91485c0522f6e23beb11cc3d066cd20ed732648a4e667045d23db5ab17576a914621f617c765c3caa5ce1bb67f6a3e51382b8da296888ac":4,"63a820b02f390cf0c6d445f8f3a730b2e9fce5dff10da4b47a523d2fd7bf73d8a7a7028876a9141a376f6634e41c22b28bc9ef3336a623717083a467047d0eb15ab17576a9142b6a3314e8fcf1f1fd6b4d70b112bd5a192850576888ac":3,"63a820b02f390cf0c6d445f8f3a730b2e9fce5dff10da4b47a523d2fd7bf73d8a7a7028876a91485c0522f6e23beb11cc3d066cd20ed732648a4e66704b75db25ab17576a914621f617c765c3caa5ce1bb67f6a3e51382b8da296888ac":3,"76a9142b6a3314e8fcf1f1fd6b4d70b112bd5a1928505788ac":4,"76a914621f617c765c3caa5ce1bb67f6a3e51382b8da2988ac":4,"8cebcb1af6fa5fddeb091f61f0af1c49a6de9922":4,"98ff8f419c57646b3e056514185a97d15a7f086":4,"9a2cfc32611dbd3ac3261cd23622223e85e6c6575852d20e031c1333b9070bc2":4,"byte":[1,3,4],"case":4,"class":1,"default":1,"export":4,"float":1,"import":[1,3,4],"int":1,"new":4,"return":[1,4],"static":1,"true":1,Adding:1,And:4,For:4,The:[3,4],With:4,a0110ac963517ea12935fabe92ecd90217ba6847069dad21f9523bbc83bbf0e4:4,abbcd57c53576985783c91f5b9cf2109c5a1f16cdfb35480e14a832fb78bfeb7:3,abl:4,about:1,activ:0,add:[3,4],add_fe:1,add_fee_and_sign:[1,3,4],add_sig_s:1,adddress:1,adding:1,addr:4,address:[1,3,4],after:4,agent:1,agre:3,alice_address:4,alice_contract:[3,4],alice_ltc_address:4,alice_ltc_wallet:[3,4],alice_mona_address:4,alice_mona_wallet:4,alice_private_kei:4,alice_redeem:4,alice_redeem_tx_hash:4,aliceprivatekei:3,all:[0,1],allow:1,alreadi:4,also:4,amount:[1,4],ani:3,api:2,approve_token:[1,4],approve_transact:4,args_index:1,around:4,atom:[0,1,2,3],atomic_swap:[1,4],attribut:1,attributedict:1,audit_contract:[1,4],auto_switch_param:1,automat:4,avail:0,b02f390cf0c6d445f8f3a730b2e9fce5dff10da4b47a523d2fd7bf73d8a7a702:3,base58_prefix:1,base:2,basenetwork:1,bbt:4,bchain:4,becaus:[3,4],been:4,beetwen:1,below:4,between:0,bin:0,bit:3,bitcoin:[2,3],bitcoin_bas:1,bitcoin_network:1,bitcoinatomicswaptransact:1,bitcoinbasenetwork:1,bitcoincontract:[1,3],bitcointransact:1,bitcoinwallet:1,blacklist_nod:1,block:4,blockbust:4,blockchain:[3,4],blockcyph:4,blockexplor:4,bob:4,bob_address:4,bob_contract:[3,4],bob_ltc_address:4,bob_ltc_wallet:4,bob_mona_address:4,bob_mona_wallet:[3,4],bob_private_kei:4,bob_redeem:4,bobprivatekei:3,bool:1,both:4,branch:0,broadcast_transact:1,btc:1,buf_siz:1,bui:4,build:1,build_atomic_swap_contract:1,build_output:1,c037026e2d0f3901c797d2414df30a4ce700d18055925f416e575635c5c2b7ac:4,calcul:1,calculate_fe:1,call:4,can:[1,4],capture_messag:1,chain:0,chainz:[1,4],chang:1,check:4,classmethod:1,client:1,clone:0,clove:[3,4],clove_req:1,clove_req_json:1,coin:4,collect:4,com:[0,4],compli:3,connect:1,consol:4,contract:[2,3],contract_address:[1,3,4],contract_transact:[3,4],core:1,correct:4,cpubkei:1,creat:[1,4],create_connect:1,create_unsigned_transact:1,crofbwmvclxrlsyft794nrbepugmlf5amnj7vqwieenc34z7zspk:4,cryptoid:1,cryptoid_api_kei:[1,4],csyq9jswnm79gudyz6tinkajrtijekgv4rxswgthp3smuhix9wk:4,ctransact:1,ctvubqcjrycdhicffxky5ycnph2rynrbmgrtvxbslkg8xr2my3j2:4,current:1,dai:3,data:4,datastructur:1,datetim:[3,4],decid:3,decim:[1,4],declar:1,decreas:1,decrypt:1,decrypt_private_kei:1,default_port:1,default_symbol:1,default_wallet:1,definit:1,deseri:1,deserialize_raw_transact:1,develop:2,dict:1,did:3,didn:3,directli:4,dns_seed:1,doc:0,doe:3,doesn:4,done:4,e42d94615792f60eab5503d7dc05a80d9cd394f958af83c8af862af1246e049d:3,easi:0,encod:1,encrypt:1,encrypt_private_kei:1,encrypted_private_kei:1,endpoint:1,environ:4,estim:1,eth:[1,4],eth_test:4,eth_to_swap:4,ether:4,ethereum:2,ethereum_bas:1,ethereumatomicswaptransact:1,ethereumbasenetwork:1,ethereumcontract:1,ethereumtestnet:4,ethereumtokenapprovaltransact:1,ethereumtokentransact:1,ethereumtransact:1,ethereumwallet:1,etherscan_api_kei:4,exampl:[1,2],exchang:4,exist:4,exmapl:4,expected_message_typ:1,explor:4,extern:[1,2],extract:4,extract_method_id:1,extract_scriptsig_blockcyph:1,extract_scriptsig_cryptoid:1,extract_scriptsig_from_redeem_transact:1,extract_scriptsig_raven:1,extract_secret:[1,4],extract_secret_from_redeem_transact:[1,4],fake:4,fals:1,fee:[1,3,4],fee_per_kb:[3,4],fee_per_kb_text:[3,4],fee_text:[3,4],field:4,filter_blacklisted_nod:1,find:4,find_redeem_token_transact:1,find_redeem_transact:[1,4],first:1,flag:1,free:[3,4],from:[1,4],from_base_unit:[1,4],gas_limit:4,gaspric:4,gather:4,generate_hash:1,generate_params_object:1,generate_secret_with_hash:1,genericparam:1,genesis_block:1,get:[1,4],get_bal:1,get_balance_blockcyph:1,get_balance_cryptoid:1,get_contract_utxo:1,get_current_fe:1,get_current_fee_per_kb:1,get_current_nod:1,get_last_transact:1,get_method_nam:1,get_network_by_symbol:1,get_new_wallet:[1,4],get_nod:1,get_private_kei:[1,4],get_public_kei:1,get_raw_transact:1,get_token_by_address:1,get_token_by_attribut:1,get_token_by_symbol:[1,4],get_token_from_token_contract:1,get_transact:1,get_transaction_s:1,get_utxo:[1,4],get_utxo_from_api:1,get_wallet:[1,3,4],git:0,github:0,given:[1,4],has:4,hash:[2,4],have:[1,4],header:1,her:4,here:[2,4],herself:4,hex:[1,4],himself:4,his:4,hood:1,hour:3,http:[0,1,4],httprespons:1,ignore_empti:1,impati:3,info:[1,4],inform:[1,4],infura_endpoint:1,infura_network:1,init_hour:1,initi:[1,2],initial_transact:4,initial_utxo_list:4,input:4,instal:2,instanc:1,is_eth_contract:1,is_initi:1,is_test_network:1,is_token_contract:1,is_valid_address:1,is_valid_contract_script:1,its:1,json:1,just:4,keep:1,kei:[1,3],kovan:4,l15kfzg4mdox2kqxeeezmjbbvedzzt1zl2vu59ynrtef6gb16b3c:4,lamden:0,landen:0,last:[1,4],librari:0,linter:0,list:[1,4],litecoin:4,litecoins_to_swap:4,live:4,livehtml:0,locktim:[3,4],log:2,ltc:[3,4],ltc_network:[3,4],luan5pwmspavgz32mgkqsuuakncfts37jq:[3,4],lxraxrgpo84p58746zabxuffevctybpxgb:[3,4],m93y8ourm8yvez5rbnzi779tgbdpwbdehb:3,mahnd7u7jd4dpa3r267zcb1xbaaizrdrml:[3,4],mai:1,make:[0,1],manual:[3,4],map:1,master:0,max_monei:1,max_tries_numb:1,mbriwyyfwndramycn5otoudwdmrdfk33dq:[3,4],mechan:3,messag:1,message_start:1,method:1,method_id:1,mona:[3,4],mona_network:[3,4],monacoin:4,monacoins_to_swap:4,monei:3,more:4,msg:1,msg_getdata:1,multipl:1,mwxzg4rah4vh6hinkakxkzqqw7nshyrgra:4,name:1,necessari:1,need:[3,4],network:[2,3],node:1,nonc:4,none:[1,4],nonetyp:1,now:4,number:0,number_of_hour:1,object:[1,4],obviou:4,okei:3,one:4,oop:3,oper:4,our:4,outpoint:1,over:4,overview:2,own:4,page:0,parallel:[3,4],paramet:1,parsed_script:1,parti:3,particip:[1,2],participate_hour:1,participate_transact:4,participate_utxo_list:4,pass:4,password:1,past:3,per:1,ping:1,pip:0,placehold:1,point:4,port:1,possibl:4,prepar:4,present:4,preview:0,previous:3,priv:1,privat:[1,4],private_kei:[1,3,4],process:3,proof_of_work_limit:1,properti:1,protocol_vers:1,provid:[1,3,4],publish:[1,4],python3:0,python:0,rais:1,rate:4,raw:[1,4],raw_transact:[1,3,4],read:4,real:3,reason:4,receiv:[3,4],received_data:1,recipi:1,recipient_address:[1,3,4],redeem:[1,3],refund:[1,2],refund_address:[3,4],refund_transact:3,repo:0,repres:1,request:1,requir:[0,4],reset_connect:1,respons:[1,3],revert:3,rpc_port:1,runtimeerror:[1,3],satoshi:4,script:4,script_op:1,scriptsig:[1,4],search:2,secret:[1,3],secret_hash:[1,3,4],secur:4,see:4,seed:1,send:4,send_inventori:1,send_messag:1,send_p:1,send_pong:1,send_verack:1,send_vers:1,sender:[1,4],sender_address:[1,4],serial:1,serialized_transact:1,set:[3,4],set_contract:1,set_locktim:1,set_secret:1,set_symbol_map:1,set_token_contract:1,setup:0,share:1,she:[3,4],should:4,show:4,show_detail:[1,3,4],sign:[1,4],sign_raw_transact:1,site:1,size:[1,3,4],size_text:[3,4],smart:1,solvable_utxo:1,some:[1,2],someth:3,sourc:[1,2],specyf:0,spend:4,split_messag:1,startga:4,still:3,str:1,subdomain:1,subsidy_halving_interv:1,support:4,swap:[0,1,2,3],switch_param:1,symbol:[1,4],taken:1,term:3,termin:1,test:[1,4],test_nam:0,testnet:[1,2],thi:[1,3,4],thu:4,timeout:1,to_base_unit:1,token:1,token_abi:1,token_address:[1,4],token_class:1,tokens_to_swap:4,top:4,tox:0,transacion:4,transact:2,transaction_address:[1,3,4],tupl:1,tx_address:1,tx_dict:1,tx_hash:1,tx_id:[1,4],tx_in:1,tx_input:1,tx_locktim:1,tx_script:[1,4],type:1,under:[1,4],undocu:1,unify_address:1,union:1,unsigned_script_sig:1,unsupport:4,until:3,updat:0,update_blacklist:1,upon:3,url:1,use:[0,4],use_blockcyph:1,used:1,user:1,using:[1,3,4],utc:3,util:[2,4],utxo:[2,4],valid:[3,4],validate_address:1,valu:[1,3,4],value_from_base_unit:1,value_text:[3,4],value_to_base_unit:1,variabl:4,venv:0,version:0,version_packet:1,view:4,virtualenv:0,vout:[1,4],wait:3,wallet:2,wallter:1,want:[0,4],warn:1,wasn:3,web3:1,went:3,which:1,whole:4,work:3,wrong:3,you:[0,4],your_api_kei:4},titles:["Clove ","API","Clove documentation","Transaction refunds","Atomic swap example"],titleterms:{"voil\u00e0":3,alic:[3,4],api:[1,4],approv:4,assumpt:4,atom:4,audit:4,back:3,base:[1,4],bitcoin:[1,4],blockcyph:3,bob:3,build:0,can:3,captur:4,check:3,clove:[0,1,2],commun:4,contract:[1,4],creat:3,cryptoid:4,develop:0,document:[0,2],ethereum:[1,4],etherscan:4,exampl:[3,4],external_sourc:1,first:4,from:3,get:[0,3],hash:1,her:3,here:3,his:3,initi:[3,4],instal:0,kei:4,litecoin:3,log:1,monacoin:3,network:[1,4],newtork:3,overview:0,particip:[3,4],publish:3,redeem:4,refund:3,run:0,search:1,second:4,secret:4,setup:4,should:3,sign:3,some:3,start:0,statu:0,swap:4,test:0,testnet:4,token:4,transact:[1,3,4],util:1,utxo:1,wallet:[1,3,4],you:3}})