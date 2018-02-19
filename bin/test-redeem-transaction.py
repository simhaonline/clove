#!/usr/bin/env python3

import argparse
import os
from pprint import pprint
import sys

from script_utils import get_network, get_transaction_from_address, print_section, print_tx_address

sys.path.append(os.path.dirname(os.path.realpath(__file__)))


if __name__ == '__main__':

    parser = argparse.ArgumentParser(description="Redeem atomic swap transaction.")
    parser.add_argument('-tx', '--transaction', help='Contract transaction address', type=str, required=True)
    parser.add_argument('-p', '--private-key', help='Private key', type=str, required=True)
    parser.add_argument('-s', '--secret', help='Secret', type=str, required=True)
    parser.add_argument('-n', '--network', help='Network for creating transaction in', type=str, required=True)
    args = parser.parse_args()

    network = get_network(args.network)
    wallet = network.get_wallet(private_key=args.private_key)

    tx_hex = get_transaction_from_address(args.network, args.transaction)
    print_section('Found transaction:', tx_hex)

    print_section('Transaction audit...')
    contract = network.audit_contract(tx_hex)
    pprint(contract.show_details())

    print_section('Creating redeem transaction using secret:', args.secret)
    redeem_transaction = contract.redeem(wallet, args.secret)

    print_section('Adding fee and signing...')
    redeem_transaction.add_fee_and_sign()

    print_section('Transaction ready to be published')
    details = redeem_transaction.show_details()
    pprint(details)

    publish = input('Do you want to publish this transaction (y/n): ')
    if publish != 'y':
        print_section('Bye!')
        exit()

    print_section('Publishing transaction')
    redeem_transaction.publish()

    print_section('Transaction published!')
    print_tx_address(args.network, details["transaction_hash"])