import {
  ethereum, BigInt
} from '@graphprotocol/graph-ts'

import {
  PositionOpened as PositionOpenedEvent,
  PositionClosed as PositionClosedEvent,
} from '../generated/Perp/Perp'

import {
  DataUpdated as DataUpdatedEvent
} from '../generated/Beacon/Beacon'

import {
  MarketSnapshot,
  BeaconSnapshot
} from '../generated/schema'

export function handlePositionOpened(event: PositionOpenedEvent): void {
  let marketSnapshot = new MarketSnapshot(event.transaction.hash);
  marketSnapshot.market = event.address;
  marketSnapshot.timestamp = event.block.timestamp;
  marketSnapshot.markPrice = event.params.newMarkPrice;

  marketSnapshot.save();
}

export function handlePositionClosed(event: PositionClosedEvent): void {
  let marketSnapshot = new MarketSnapshot(event.transaction.hash);
  marketSnapshot.market = event.address;
  marketSnapshot.timestamp = event.block.timestamp;
  marketSnapshot.markPrice = event.params.newMarkPrice;

  marketSnapshot.save();
}

export function handleDataUpdated(event: DataUpdatedEvent): void {
  let beaconSnapshot = new BeaconSnapshot(event.transaction.hash);
  beaconSnapshot.beacon = event.address;
  beaconSnapshot.timestamp = event.block.timestamp;
  beaconSnapshot.indexPrice = event.params.data;

  beaconSnapshot.save();
}