import assert from "assert";
import { 
  TestHelpers,
  ManageFamAuthority_HypersubSet
} from "generated";
const { MockDb, ManageFamAuthority } = TestHelpers;

describe("ManageFamAuthority contract HypersubSet event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for ManageFamAuthority contract HypersubSet event
  const event = ManageFamAuthority.HypersubSet.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("ManageFamAuthority_HypersubSet is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await ManageFamAuthority.HypersubSet.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualManageFamAuthorityHypersubSet = mockDbUpdated.entities.ManageFamAuthority_HypersubSet.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedManageFamAuthorityHypersubSet: ManageFamAuthority_HypersubSet = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      party: event.params.party,
      hypersub: event.params.hypersub,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualManageFamAuthorityHypersubSet, expectedManageFamAuthorityHypersubSet, "Actual ManageFamAuthorityHypersubSet should be the same as the expectedManageFamAuthorityHypersubSet");
  });
});
