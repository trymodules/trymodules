import { emptyProject } from './empty-project.js';

describe('emptyProject', () => {
  it('should work', () => {
    expect(emptyProject()).toEqual('empty-project');
  });
});
