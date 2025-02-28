/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  ManageFamAuthority,
  ManageFamAuthority_HypersubSet,
  ManageFamAuthority_PartyCardAdded,
  ManageFamAuthority_PartyCardRemoved,
} from "generated";

ManageFamAuthority.HypersubSet.handler(async ({ event, context }) => {
  const entity: ManageFamAuthority_HypersubSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    party: event.params.party,
    hypersub: event.params.hypersub,
  };

  context.ManageFamAuthority_HypersubSet.set(entity);
});

ManageFamAuthority.PartyCardAdded.handler(async ({ event, context }) => {
  const entity: ManageFamAuthority_PartyCardAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    party: event.params.party,
    partyMember: event.params.partyMember,
    newIntrinsicVotingPower: event.params.newIntrinsicVotingPower,
  };

  context.ManageFamAuthority_PartyCardAdded.set(entity);
});

ManageFamAuthority.PartyCardRemoved.handler(async ({ event, context }) => {
  const entity: ManageFamAuthority_PartyCardRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    party: event.params.party,
    tokenId: event.params.tokenId,
  };

  context.ManageFamAuthority_PartyCardRemoved.set(entity);
});
