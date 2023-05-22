import example from "../src/index";

describe('Example Plugin Template', () => {
  it('can say hello', async () => {
    const result = await example.exampleCommand({
      name: 'World',
    })
    console.log(JSON.stringify(result, null, 2));
  });
});
